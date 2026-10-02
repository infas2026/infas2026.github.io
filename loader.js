// BEGIN-DECRYPT
const ub = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
const norm = c => c.replace(/\s+/g, '').toUpperCase();
async function dechiffrer(code) {
  const E = window.ENC;
  const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(norm(code)), 'PBKDF2', false, ['deriveKey']);
  const d = await crypto.subtle.deriveKey({ name: 'PBKDF2', salt: ub(E.salt), iterations: E.iter, hash: 'SHA-256' },
    base, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);
  for (const w of E.keys) {
    try {
      const raw = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: ub(w.iv) }, d, ub(w.ct));
      const K = await crypto.subtle.importKey('raw', raw, 'AES-GCM', false, ['decrypt']);
      const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: ub(E.iv) }, K, ub(E.ct));
      return new TextDecoder().decode(pt);
    } catch (e) { /* mauvais code pour cette clé : on essaie la suivante */ }
  }
  return null;
}
// END-DECRYPT

(function () {
  const $ = id => document.getElementById(id);
  const STO = 'infas_code';
  const get = () => { try { return localStorage.getItem(STO); } catch (e) { return null; } };
  const set = v => { try { v ? localStorage.setItem(STO, v) : localStorage.removeItem(STO); } catch (e) {} };

  async function ouvrir(code, garder) {
    const src = await dechiffrer(code);
    if (!src) return false;
    if (garder) set(code);
    $('gate').hidden = true;
    $('app').hidden = false;
    const s = document.createElement('script');
    s.textContent = src;
    document.body.appendChild(s);
    return true;
  }

  $('form').addEventListener('submit', async ev => {
    ev.preventDefault();
    const btn = $('ok'), err = $('err');
    err.textContent = '';
    btn.disabled = true; btn.textContent = 'Vérification…';
    let bon = false;
    try { bon = await ouvrir($('code').value, $('keep').checked); } catch (e) {}
    if (!bon) {
      err.textContent = 'Code incorrect. Vérifiez la saisie ou contactez l\'administrateur.';
      btn.disabled = false; btn.textContent = 'Entrer';
      $('code').select();
    }
  });

  $('out').addEventListener('click', () => { set(null); location.reload(); });

  const memo = get();
  if (memo) ouvrir(memo, true).then(ok => { if (!ok) set(null); }).catch(() => set(null));
})();
