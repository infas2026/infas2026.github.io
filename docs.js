/* Dictionnaire médical (gauche) et Atlas image anatomie (droite) : lecteur de documents PDF du dossier docs/ */
const DOCS=(function(){
const home=document.getElementById('home'),sec=document.getElementById('doc'),T=document.getElementById('docT'),S=document.getElementById('docS'),body=document.getElementById('docBody');
const D={
  dico:{t:'📖 DICTIONNAIRE MÉDICAL',s:'Dictionnaire médical avec atlas anatomique',f:'docs/dictionnaire-medical.pdf',n:'Pour retrouver un terme : touche Ctrl + F sur ordinateur, ou le menu « Rechercher » du lecteur PDF sur téléphone.'},
  atlas:{t:'🫀 ATLAS IMAGE ANATOMIE',s:'Polycopié d\'anatomie illustré · Laboratoire d\'Anatomie, Faculté de Médecine de Lille · édition 2017 · 483 pages',f:'docs/atlas-anatomie.pdf',n:'Fichier volumineux (environ 22 Mo) : l\'ouverture peut prendre quelques secondes selon votre connexion. Sommaire : rachis, thorax, abdomen, uro-génital, membres, tête et cou, neuroanatomie.'}
};
let cur=null;
const ok=f=>fetch(f,{method:'HEAD'}).then(r=>r.ok).catch(()=>true);
function view(d){
  return `<div class="deCard"><p class="deMu">${d.n}</p><a class="btn" href="${d.f}" target="_blank" rel="noopener">📖 Ouvrir le document</a><a class="btn alt" href="${d.f}" download>⬇ Télécharger</a></div>`+(navigator.pdfViewerEnabled?`<iframe class="docFrame" src="${d.f}" title="${d.s}"></iframe>`:'')}
function missing(d){
  return `<div class="deCard"><h3>Document bientôt disponible</h3><p class="deMu">Ce document n'est pas encore en ligne sur le site.</p><p class="deMu">Administrateur : déposez le fichier PDF dans le dossier <b>docs/</b> sous le nom <b>${d.f.split('/')[1]}</b>, il s'affichera ici automatiquement.</p></div>`}
function open(k){
  const d=D[k];cur=k;home.hidden=true;sec.hidden=false;T.textContent=d.t;S.textContent=d.s;
  body.innerHTML='<div class="deCard"><p class="deMu">Chargement…</p></div>';scrollTo(0,0);
  ok(d.f).then(y=>{if(cur===k)body.innerHTML=y?view(d):missing(d)})}
function exit(){cur=null;sec.hidden=true;home.hidden=false;scrollTo(0,0)}
document.getElementById('docBack').onclick=exit;
document.getElementById('goDico').onclick=()=>open('dico');
document.getElementById('goAtlas').onclick=()=>open('atlas');
return{open};
})();
