/* Liens de partage : #de=identifiant ouvre directement un sujet D.E ; #sf=identifiant un examen de l'espace Sage-femme.
   Les boutons « Envoyer à mes amis » / « Copier le lien » sont dans de.js et sage-femme.html. */
(function(){
function go(){
  const m=(location.hash||'').match(/^#(de|sf)=([\w-]+)$/);if(!m)return;
  if(m[1]==='de'){if(!DE.openSubject(m[2]))DE.open()}
  else{window.SF_OPEN=m[2];document.getElementById('goSf').click()}
}
window.addEventListener('hashchange',()=>{if(/^#(de|sf)=/.test(location.hash))location.reload()});
go();
})();
