/* MES COURS : ouvre mes-cours.html dans l'application, depuis le choix COURS. */
(function(){
const home=document.getElementById('home'),ch=document.getElementById('coChoice'),sec=document.getElementById('mc'),fr=document.getElementById('mcFrame');
document.getElementById('chMc').onclick=()=>{ch.hidden=true;sec.hidden=false;
  if(!fr.getAttribute('src'))fr.src='mes-cours.html';scrollTo(0,0)};
document.getElementById('mcBack').onclick=()=>{sec.hidden=true;ch.hidden=false;scrollTo(0,0)};
/* Boutons « Retour » et « Accueil du site » situés dans mes-cours.html */
window.addEventListener('message',e=>{
  const d=e.data;if(!d||!d.mesCours||e.source!==fr.contentWindow)return;
  sec.hidden=true;ch.hidden=d.mesCours==='home';home.hidden=d.mesCours!=='home';scrollTo(0,0)});
})();
