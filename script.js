/* Logique du site : accueil, sommaire, exercices, cours */
let cur=null;const nav=document.getElementById('nav'),main=document.getElementById('main');
const L=["A","B","C","D","E","F"];
function buildNav(){let h='<div class="big"><span id="bigT">EXERCICE</span><small>SOMMAIRE</small></div>';GROUPS.forEach(([t,l],gi)=>{h+=`<h2>${t}</h2>`;l.forEach((e,i)=>{const id=e[2]||`${gi}-${i}`;h+=`<button data-id="${id}" data-t="${e[0]}" data-p="${e[1]}" class="${e[2]?'':'todo'}"><span>${e[0]}</span><span class="pg">p. ${e[1]}</span></button>`})});nav.innerHTML=h;
nav.onclick=ev=>{const b=ev.target.closest('button');if(b){if(mode==='co')showCours(b.dataset.id,b.dataset.t);else show(b.dataset.id,b.dataset.t,b.dataset.p);nav.classList.remove('open','full')}}}
function show(id,t,p){cur=id;nav.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.id===id));scrollTo(0,0);
const d=DATA[id];if(!d){main.innerHTML=`<h2>${t}</h2><p class="sub">Sommaire · page ${p} du PDF</p><div class="soon">La correction de cette épreuve n'est pas encore rédigée. Les épreuves corrigées sont signalées dans le sommaire sans transparence.</div>`;return}
let n=0,h=`<h2>${d.title}</h2><p class="sub">${d.sub||d.pages+' · '+d.qcd.length+' questions vrai/faux + '+d.qcm.length+' QCM'}</p>${d.qcd.length?'<div class="part">Partie 1 · QCD : vrai (A) ou faux (B)</div>':''}`;
d.qcd.forEach((q,i)=>{n++;if(q[4])h+=`<div class="part">${q[4]}</div>`;h+=`<div class="q" data-k="qcd" data-i="${i}"><p><b>${q[3]||n}.</b> ${q[0]}</p><div class="opts"><label><input type="radio" name="q${n}" value="A">A · Vrai</label><label><input type="radio" name="q${n}" value="B">B · Faux</label></div><div class="fix"></div></div>`});
if(d.qcd.length)h+=`<div class="part">Partie 2 · QCM : cochez la ou les bonnes réponses</div>`;
d.qcm.forEach((q,i)=>{n++;if(q[5])h+=`<div class="part">${q[5]}</div>`;h+=`<div class="q" data-k="qcm" data-i="${i}"><p><b>${q[4]||n}.</b> ${q[0]}</p><div class="opts">${q[1].map((o,j)=>`<label><input type="checkbox" name="q${n}" value="${j}">${L[j]}. ${o}</label>`).join('')}</div><div class="fix"></div></div>`});
h+=`<div class="bar"><button class="btn" id="go">Corriger</button><button class="btn alt" id="rs">Recommencer</button><span class="score" id="sc"></span></div>`;
main.innerHTML=h;document.getElementById('go').onclick=()=>correct(d);document.getElementById('rs').onclick=()=>show(id,t,p)}
function correct(d){let ok=0,tot=0;main.querySelectorAll('.q').forEach(el=>{tot++;const k=el.dataset.k,q=d[k][el.dataset.i],labs=[...el.querySelectorAll('label')];
const sel=[...el.querySelectorAll('input:checked')].map(x=>x.value);let good,exp;
if(k==='qcd'){good=sel[0]===q[1];exp=`<b>Réponse : ${q[1]==='A'?'A · Vrai':'B · Faux'}.</b> ${q[2]}`;labs.forEach(l=>{const v=l.querySelector('input').value;if(v===q[1])l.classList.add('good');else if(sel.includes(v))l.classList.add('bad')})}
else{const c=q[2].map(String);good=sel.length===c.length&&sel.every(s=>c.includes(s));exp=`<b>Réponse : ${q[2].length?q[2].map(i=>L[i]).join(', '):'aucune proposition à cocher'}.</b> ${q[3]}`;labs.forEach(l=>{const v=l.querySelector('input').value;if(c.includes(v))l.classList.add('good');else if(sel.includes(v))l.classList.add('bad')})}
el.classList.remove('ok','ko');el.classList.add('done',good?'ok':'ko');el.querySelector('.fix').innerHTML=(good?'✔ Correct. ':'✘ Incorrect. ')+exp;if(good)ok++;el.querySelectorAll('input').forEach(i=>i.disabled=true)});
document.getElementById('sc').textContent=`Score : ${ok} / ${tot}`}
document.getElementById('menu').onclick=()=>nav.classList.toggle('open');
buildNav();
const homeEl=document.getElementById('home'),licEl=document.getElementById('lic'),appEl=document.getElementById('app'),toast=document.getElementById('toast'),toast2=document.getElementById('toast2'),backBtn=document.getElementById('goHome');
let mode='ex';
function hint(){main.innerHTML='<div class="hint"><b>Choisissez '+(mode==='co'?'une matière':'une épreuve')+' dans le sommaire</b><br>'+(mode==='co'?'Le cours s\'affichera ici.':'Les questions et leurs corrections s\'afficheront ici.')+'</div>'}
function showCours(id,t){nav.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.id===id));scrollTo(0,0);if(COURS[id]){main.innerHTML='<h2>'+t+'</h2><p class="sub">Cours</p><button class="btn alt gobtn" onclick="goEx(\''+id+'\')">✏️ Faire les exercices de cette matière</button>'+COURS[id]+'<div class="bar"><button class="btn" onclick="goEx(\''+id+'\')">✏️ Passer aux exercices</button></div>'}else{main.innerHTML='<h2>'+t+'</h2><p class="sub">Cours</p><div class="soon">Le cours de cette matière sera bientôt disponible.</div>'}}
function setMode(m){mode=m;backBtn.textContent=m==='co'?'← Accueil':'← Licences';nav.classList.toggle('cours',m==='co');document.getElementById('bigT').textContent=m==='co'?'COURS':'EXERCICE';document.getElementById('menuT').textContent=m==='co'?'COURS':'EXERCICE';document.getElementById('appT').textContent=m==='co'?'Succès L 1-2-3 /SF · Cours':'Succès L 1-2-3 /SF · Exercices corrigés';nav.querySelectorAll('button').forEach(b=>b.classList.toggle('todo',m==='co'&&!COURS[b.dataset.id]))}
function openApp(m){setMode(m);homeEl.hidden=true;appEl.hidden=false;nav.classList.add('open','full');nav.querySelectorAll('button').forEach(b=>b.classList.remove('on'));hint();scrollTo(0,0)}
function goEx(id){const b=nav.querySelector('button[data-id="'+id+'"]');setMode('ex');show(id,b.dataset.t,b.dataset.p)}
function goCo(id){const b=nav.querySelector('button[data-id="'+id+'"]');setMode('co');showCours(id,b.dataset.t)}
const _show=show;show=function(id,t,p){_show(id,t,p);if(typeof COURS!=='undefined'&&COURS[id]&&mode==='ex')main.insertAdjacentHTML('afterbegin','<button class="btn alt gobtn" onclick="goCo(\''+id+'\')">📖 Voir le cours</button>')};
document.getElementById('goEx').onclick=()=>{homeEl.hidden=true;licEl.hidden=false;toast2.textContent='';scrollTo(0,0)};
licEl.querySelectorAll('[data-l]').forEach(b=>b.onclick=()=>{if(b.dataset.l==='1'){licEl.hidden=true;openApp('ex')}else{toast2.textContent='Le sommaire de la Licence '+b.dataset.l+' sera bientôt disponible.'}});
document.getElementById('licBack').onclick=()=>{licEl.hidden=true;homeEl.hidden=false;scrollTo(0,0)};
document.getElementById('goCo').onclick=()=>openApp('co');
backBtn.onclick=()=>{appEl.hidden=true;if(mode==='ex')licEl.hidden=false;else homeEl.hidden=false;scrollTo(0,0)};
