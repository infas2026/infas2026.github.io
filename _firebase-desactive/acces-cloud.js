/* Contrôle d'accès par code avec Firestore : un code ne peut être utilisé que sur un seul appareil à la fois.
   Chaque code est un document « codes/{empreinte} » (l'empreinte est celle de access.js, le code n'est jamais stocké).
   Champs : level ('1','2','3','all'), jours, activation, expiresAt, uid (appareil qui occupe le code), lastSeen.
   Un appareil garde le code tant qu'il envoie un signal de présence (toutes les minutes).
   Si l'appareil ne donne plus signe pendant 5 minutes (navigateur fermé, hors ligne), le code est libéré. */
(function () {
  const FIREBASE_CONFIG = {
    apiKey: "AIzaSyDdGbkdCGzsto7oDuhyIvmuny-SldSqD0Y",
    authDomain: "infas2026-29aed.firebaseapp.com",
    projectId: "infas2026-29aed",
    storageBucket: "infas2026-29aed.firebasestorage.app",
    messagingSenderId: "198169004343",
    appId: "1:198169004343:web:976afd2b5d00fe2f5432b2"
  };
  const SESSION_KEY = "infas_session";
  const DAY = 86400000;
  const STALE = 5 * 60000;   // présence considérée perdue après 5 min
  const BEAT = 60000;        // signal de présence toutes les minutes
  const MSG_BUSY = "Ce code est déjà utilisé sur un autre appareil. Déconnectez-vous de l'autre appareil, ou attendez quelques minutes.";
  const MSG_EXPIRED = "Ce code a expiré. Contactez l'administrateur pour le renouveler.";
  const MSG_WRONG = "Code incorrect. Vérifiez-le ou contactez l'administrateur.";

  let fb = null;        // { auth, db }
  let ready = null;     // promesse d'initialisation
  let beatTimer = null;

  function norm(code) { return String(code).toUpperCase().replace(/[^A-Z0-9]/g, ""); }

  async function init() {
    if (!ready) ready = (async () => {
      if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
      const auth = firebase.auth();
      const db = firebase.firestore();
      // attendre la restauration de la session anonyme, puis en créer une si besoin
      await new Promise(res => { const un = auth.onAuthStateChanged(() => { un(); res(); }); });
      if (!auth.currentUser) await auth.signInAnonymously();
      fb = { auth, db };
      return fb;
    })();
    return ready;
  }

  function readSession() {
    try { return JSON.parse(localStorage.getItem(SESSION_KEY) || "null"); } catch (e) { return null; }
  }
  function writeSession(s) {
    try { if (s) localStorage.setItem(SESSION_KEY, JSON.stringify(s)); else localStorage.removeItem(SESSION_KEY); } catch (e) {}
  }

  /* Session locale valable (lecture immédiate pour l'affichage) : { id, level, expiresAt, uid } ou null */
  function cloudSession() {
    const s = readSession();
    if (!s || !s.expiresAt || s.expiresAt <= Date.now()) return null;
    return s;
  }

  function startBeat() {
    stopBeat();
    beatTimer = setInterval(heartbeat, BEAT);
  }
  function stopBeat() {
    if (beatTimer) clearInterval(beatTimer);
    beatTimer = null;
  }

  /* Recherche le document du code parmi les niveaux demandés (le niveau est dans l'empreinte) */
  async function findDoc(db, lv, code) {
    const levels = lv ? [lv, "all"] : ["1", "2", "3", "all"];
    for (const l of levels) {
      const id = hashCode(l, code);
      const snap = await db.collection("codes").doc(id).get();
      if (snap.exists) return { id, level: l };
    }
    return null;
  }

  /* Saisie d'un code : lv = '1', '2', '3' ou null (toutes licences / corrections) */
  async function cloudRedeem(lv, code) {
    try {
      const { auth, db } = await init();
      const found = await findDoc(db, lv, norm(code));
      if (!found) return { ok: false, msg: lv ? "Code incorrect pour la Licence " + lv + ". Vérifiez-le ou contactez l'administrateur." : MSG_WRONG };

      const ref = db.collection("codes").doc(found.id);
      const me = auth.currentUser.uid;
      const result = await db.runTransaction(async t => {
        const snap = await t.get(ref);
        if (!snap.exists) return { ok: false, msg: MSG_WRONG };
        const c = snap.data();
        const now = Date.now();
        if (c.activation && c.expiresAt <= now) return { ok: false, msg: MSG_EXPIRED };
        const busy = c.uid && c.uid !== me && (now - (c.lastSeen || 0)) < STALE;
        if (busy) return { ok: false, msg: MSG_BUSY };
        const upd = { uid: me, lastSeen: now };
        if (!c.activation) {
          upd.activation = now;
          upd.expiresAt = now + (c.jours || 30) * DAY;
        }
        t.update(ref, upd);
        return { ok: true, level: c.level || found.level, expiresAt: upd.expiresAt || c.expiresAt };
      });

      if (result.ok) {
        writeSession({ id: found.id, level: result.level, expiresAt: result.expiresAt, uid: me });
        startBeat();
      }
      return result;
    } catch (e) {
      return { ok: false, msg: "Connexion impossible. Vérifiez votre réseau et réessayez." };
    }
  }

  /* Signal de présence : vérifie que le code est toujours à cet appareil */
  async function heartbeat() {
    const s = readSession();
    if (!s) return stopBeat();
    if (s.expiresAt <= Date.now()) { await cloudLogout(); return; }
    try {
      const { auth, db } = await init();
      const me = auth.currentUser.uid;
      const ref = db.collection("codes").doc(s.id);
      const still = await db.runTransaction(async t => {
        const snap = await t.get(ref);
        if (!snap.exists || snap.data().uid !== me) return false;
        t.update(ref, { lastSeen: Date.now() });
        return true;
      });
      if (!still) {
        writeSession(null);
        stopBeat();
        window.dispatchEvent(new CustomEvent("cloud-session-ended", { detail: "Votre accès a été ouvert sur un autre appareil." }));
      }
    } catch (e) {
      // hors ligne : on réessaiera au prochain signal
    }
  }

  /* Déconnexion : libère le code pour pouvoir l'utiliser ailleurs */
  async function cloudLogout() {
    const s = readSession();
    writeSession(null);
    stopBeat();
    if (!s) return;
    try {
      const { auth, db } = await init();
      const me = auth.currentUser.uid;
      const ref = db.collection("codes").doc(s.id);
      await db.runTransaction(async t => {
        const snap = await t.get(ref);
        if (snap.exists && snap.data().uid === me) t.update(ref, { uid: null, lastSeen: 0 });
      });
    } catch (e) {}
  }

  window.cloudRedeem = cloudRedeem;
  window.cloudSession = cloudSession;
  window.cloudLogout = cloudLogout;
  window.cloudInit = init;
  window.cloudNorm = norm;

  // Au chargement : si un code est mémorisé, vérifier qu'il est toujours à cet appareil
  if (cloudSession()) heartbeat();
})();
