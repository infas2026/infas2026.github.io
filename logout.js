/* Bouton « Connecté · Se déconnecter » (en haut à droite) : visible seulement quand un code d'accès est actif sur cet appareil.
   Le code est libéré au clic, il peut alors servir sur un autre appareil. */
(function(){
const btn=document.createElement('button');
btn.id='logoutBtn';btn.type='button';btn.hidden=true;
btn.innerHTML='<i></i>Connecté · Se déconnecter';
document.body.appendChild(btn);
function toast(t){const e=document.getElementById('toast');if(e){e.textContent=t;setTimeout(()=>{e.textContent=''},5000)}}
function refresh(){btn.hidden=!(window.cloudSession&&cloudSession())}
btn.onclick=async()=>{await cloudLogout();refresh();toast('Vous êtes déconnecté. Le code peut maintenant être utilisé sur un autre appareil.')};
addEventListener('cloud-session-ended',e=>{refresh();toast(e.detail)});
addEventListener('storage',refresh);addEventListener('focus',refresh);document.addEventListener('visibilitychange',refresh);
setInterval(refresh,1000);refresh();
})();
