/* Bouton « Se déconnecter » (en haut à droite) : visible seulement quand un code d'accès valide est enregistré.
   Il se met à jour tout seul quand le code est saisi (y compris dans les pages d'exercices) et efface le code au clic. */
(function(){
const KEY='infas_acces',btn=document.createElement('button');
btn.id='logoutBtn';btn.type='button';btn.hidden=true;
btn.innerHTML='<i></i>Connecté · Se déconnecter';
document.body.appendChild(btn);
function connected(){try{const o=JSON.parse(localStorage.getItem(KEY)||'{}');
  return ['1','2','3','all'].some(l=>o[l]&&((ACCESS.codes[l]||[]).includes(o[l])||(ACCESS.codes.all||[]).includes(o[l])))}catch(e){return false}}
function valid(l,h){return !!h&&((ACCESS.codes[l]||[]).includes(h)||(ACCESS.codes.all||[]).includes(h))}
/* Efface du téléphone les accès dont le code a été retiré de access.js (déconnexion automatique) */
function purge(){try{const o=JSON.parse(localStorage.getItem(KEY)||'null');if(!o)return;let ch=false;
  Object.keys(o).forEach(l=>{if(!valid(l,o[l])){delete o[l];ch=true}});
  if(ch){if(Object.keys(o).length)localStorage.setItem(KEY,JSON.stringify(o));else localStorage.removeItem(KEY)}}catch(e){}}
/* Compare la liste des codes chargée avec celle du serveur : si elle a changé, déconnexion puis rechargement (au plus 1 fois par minute) */
function sync(){if(!navigator.onLine||!/^https?:$/.test(location.protocol))return;
  fetch('access.js?t='+Date.now(),{cache:'no-store'}).then(r=>r.ok?r.text():Promise.reject()).then(t=>{
    const A=new Function(t+';return ACCESS')();
    if(JSON.stringify(A.codes)===JSON.stringify(ACCESS.codes))return;
    const k='infas_sync',n=Date.now();if(n-(+sessionStorage.getItem(k)||0)<60000)return;
    sessionStorage.setItem(k,n);ACCESS.codes=A.codes;purge();location.reload()}).catch(()=>{})}
function refresh(){purge();btn.hidden=!connected()}
btn.onclick=()=>{try{localStorage.removeItem(KEY)}catch(e){}
  refresh();const t=document.getElementById('toast');if(t){t.textContent='Vous êtes déconnecté. Le code sera redemandé pour voir les corrections.';setTimeout(()=>{t.textContent=''},4000)}};
addEventListener('storage',refresh);addEventListener('focus',refresh);document.addEventListener('visibilitychange',refresh);
setInterval(refresh,1000);refresh();
sync();setInterval(sync,300000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)sync()});addEventListener('online',sync);
})();
