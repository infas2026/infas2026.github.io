/* Reprise des corrections (toutes antennes) : une question sans correction reprend la réponse et l'explication de la même question
   déjà corrigée ailleurs sur le site (cours, Mes cours, formules, résumé pédiatrie, PEV), de préférence la version dont l'explication contient des liens vers les cours.
   Concerne d'abord les D.E blancs septembre 2026 d'Abengourou (Médecine C, Chirurgie A, Santé publique D, Pédiatrie Bloc B), puis toute autre question restée sans réponse.
   Les options sont comparées par leur texte (pas par leur lettre). Une correction déjà présente n'est jamais modifiée. Chargé après tous les fichiers cc-*.js. */
(function(){
const N=s=>String(s||'').toLowerCase().replace(/<[^>]*>/g,' ').replace(/^[a-f][.)]\s+/,'').replace(/[^a-z0-9àâçéèêëîïôûùüœ]+/g,' ').trim();
const ON=o=>(o||[]).map(N);
const has=q=>q.a&&q.a.length;
const sc=q=>/class='lc'|mes-cours\.html|sante-publique|resume-pediatrie|pev\.html/.test(q.e||'')?2:(q.e?1:0);
const bank=new Map();
DE._t.CATS.forEach(c=>c.s.forEach(s=>{const pri=/^INFAS Abengourou/.test(s.t)?0:1;
  s.qs.forEach(q=>{if(!has(q))return;const k=N(q.q),v=sc(q),p=bank.get(k);
    if(!p||v>p.v||(v===p.v&&pri<p.pri))bank.set(k,{q,v,pri})})}));
DE._t.CATS.forEach(c=>c.s.forEach(s=>{
  s.qs.forEach(q=>{if(has(q))return;const b=bank.get(N(q.q));if(!b||b.q===q)return;
    const so=ON(b.q.o),no=ON(q.o);const a=[];
    for(const i of b.q.a){let j=no.indexOf(so[i]);
      if(j<0&&so.length<no.length){const k=no.map((x,m)=>x&&so[i].indexOf(x)===0?m:-1).filter(m=>m>=0);if(k.length===1)j=k[0]}
      if(j<0)return;a.push(j)}
    q.a=a.sort((x,y)=>x-y);if(b.q.e&&!q.e)q.e=b.q.e})}));
})();
