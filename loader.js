(function () {
  const $ = id => document.getElementById(id);
  let pret = null;

  function charger(src) {
    return new Promise((ok, ko) => {
      const s = document.createElement('script');
      s.src = src; s.onload = ok; s.onerror = () => ko(new Error(src));
      document.body.appendChild(s);
    });
  }
  function preparer() {
    if (typeof setMode === 'function') return Promise.resolve();      // déjà chargé
    if (!pret) pret = Promise.all([charger('cours.js?v=11'), charger('script.js?v=4')]).catch(e => { pret = null; throw e; });
    return pret;
  }

  const boutons = () => document.querySelectorAll('.choix button');

  async function ouvrir(mode, btn) {
    const txt = btn.textContent;
    $('err').textContent = '';
    boutons().forEach(b => b.disabled = true);
    btn.textContent = 'Chargement…';
    try {
      await preparer();
      $('gate').hidden = true;
      if (mode === 'exo') {
        $('niv-msg').textContent = '';
        $('niveaux').hidden = false;
      } else {
        setMode(mode);
        $('app').hidden = false;
      }
      scrollTo(0, 0);
    } catch (e) {
      $('err').textContent = 'Chargement impossible. Vérifiez votre connexion et réessayez.';
    }
    boutons().forEach(b => b.disabled = false);
    btn.textContent = txt;
  }

  boutons().forEach(b => b.addEventListener('click', () => ouvrir(b.dataset.mode, b)));

  document.querySelectorAll('[data-niv]').forEach(b => b.addEventListener('click', () => {
    const n = b.dataset.niv;
    if (n === '1') {
      setMode('exo');
      $('niveaux').hidden = true;
      $('app').hidden = false;
      scrollTo(0, 0);
    } else {
      $('niv-msg').textContent = 'Les exercices de la Licence ' + n + ' seront bientôt disponibles.';
    }
  }));

  $('niv-back').addEventListener('click', () => {
    $('niveaux').hidden = true;
    $('gate').hidden = false;
    scrollTo(0, 0);
  });

  $('out').addEventListener('click', () => {
    $('app').hidden = true;
    $('gate').hidden = false;
    scrollTo(0, 0);
  });
})();
