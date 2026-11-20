/* SUJET J1 à Jx : page des sujets jour par jour (contenu à ajouter dans #sjBody). */
(function(){
const home=document.getElementById('home'),sec=document.getElementById('sj');
document.getElementById('goSj').onclick=()=>{home.hidden=true;sec.hidden=false;scrollTo(0,0)};
document.getElementById('sjBack').onclick=()=>{sec.hidden=true;home.hidden=false;scrollTo(0,0)};
document.querySelectorAll('#sjBody [data-j]').forEach(b=>b.onclick=()=>{if(b.dataset.j==='3'||b.dataset.j==='4'){DE.openJ(+b.dataset.j);return}const m=document.getElementById('sjMsg');m.textContent='Le sujet J'+b.dataset.j+' sera ajouté ici très bientôt.';m.hidden=false});
})();
