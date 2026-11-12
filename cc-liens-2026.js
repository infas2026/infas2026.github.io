/* Liens de référence ajoutés aux corrections D.E blanc 2026 d'ABOISSO et de BOUAKÉ qui n'en avaient pas.
   Pour chaque question corrigée sans lien, on ajoute en fin d'explication « Réf : … » avec une ou plusieurs sources cliquables :
   - « Cours · … » : ouvre le cours L1 du site (clé de cours.js), « ← Accueil » ramène à la question ;
   - « Mes cours · … » : ouvre la page Mes cours à la bonne section (nouvel onglet) ;
   - pages du site (formules de santé publique, classification des médicaments).
   Une correction qui contient déjà un lien n'est jamais modifiée. Les liens sont choisis d'après le sujet de la question
   (règles ci-dessous, la première qui correspond s'applique ; à défaut, lien général de la matière). Chargé après cc-abg-reprise.js. */
(function(){
if(typeof DE==='undefined'||!DE._t||!DE._t.CATS)return;
const C=(k,t)=>"<a href='#' class='lc' data-co='"+k+"'>Cours · "+t+"</a>";
const M=(id,t)=>"<a href='mes-cours.html#c-"+id+"' target='_blank'>Mes cours · "+t+"</a>";
const P=(u,t)=>"<a href='"+u+"' target='_blank'>"+t+"</a>";
const L={
 ur:C('ur','Urologie'), s1g:C('s1g','Sémiologie et pathologie chirurgicales'), loc:C('loc','Anatomie de l’appareil locomoteur'),
 dig:C('dig','Anatomie de l’appareil digestif'), resp:C('resp','Anatomie et physiologie de l’appareil respiratoire'),
 sm:C('sm','Sémiologie médicale'), ts:C('ts','Technique de soins infirmiers'), hy:C('hy','Hygiène et assainissement'),
 mi:C('mi','Maladies infectieuses'), pr:C('pr','Pathologie respiratoire (œdème aigu du poumon)'), nu:C('nu','Nutrition'),
 dt:C('dt','Diététique'), ds:C('ds','Démarche de soins scientifique'), sns:C('sns','Système national de santé'),
 sp:C('sp','Soins de santé primaires'), pv:C('pv','PEV (maladies cibles, vaccins)'), ep:C('ep','Épidémiologie'),
 fract:M('fract','Généralités sur les fractures'), infchir:M('infchir','Infection en chirurgie'),
 secu:M('s3-sec','Sécurité des injections'), vac:M('s3-vac','Organisation d’une séance de vaccination'),
 form:P('sante-publique.html','Formules de santé publique'), cm:P('classification-medicaments.html','Classification des médicaments (calculs de doses)'),
 palu:M('p-palu','Paludisme de l’enfant'), pla:M('pa2','Plasmodium et paludisme'),
 malnu:M('p-malnu','Malnutrition de l’enfant'), mk:M('sa-mk','Soins Mère Kangourou'), fetus:M('p-fetus','Développement du fœtus'),
 drnn:M('p-drnn','Détresse respiratoire du nouveau-né'), allait:M('p-allait','Allaitement'), infnn:M('p-infnn','Infection bactérienne du nouveau-né'),
 fievre:M('p-fievre','Fièvre de l’enfant'), pcimen:M('p-pcimen','PCIMEN'), prema:M('p-prema','Nouveau-né prématuré'),
 demarche:M('s-demarche','Étapes de la démarche en santé publique'), prev:M('s-prev','Système de santé, promotion et prévention'),
 defsp:M('s-def','Santé, santé publique, communauté'), ind:M('s-ind','Indicateurs de santé et système de santé ivoirien'),
 sve:M('s3-sve','Suivi-évaluation, indicateurs et sources de données'), antidiab:M('f-10','Médicaments antidiabétiques'),
 conti:M('g-9','Continence urinaire'), brul:M('brul','Les brûlures')
};
/* règles : [expression cherchée dans la question et ses options, liens] — la première qui correspond s'applique */
const R={
'Chirurgie':[
 [/transfusion.*(débit|gouttes)|débit.*(transfusion|gouttes)|gttes|gouttes\/min/i,[L.cm,L.ts]],
 [/(piqu|aiguille).*(sang|transfusion)/i,[L.secu,L.hy]],
 [/neurochirurgie/i,[L.s1g,L.sm]],
 [/prostate|adénomectomie|irrigation vésicale|néphrectomie|rétention (aiguë|urinaire|d.urine)|globe vésical|urétrorragie|urètre/i,[L.ur,L.s1g]],
 [/traumatisme crânien|glasgow|commotion|amnésie|intervalle|\bcoma\b|crânien|choc sur la tête|précipitation|brancard|blessé|avp/i,[L.s1g,L.sm]],
 [/sonnette|sciatique|mal de pott|rachis|escarre/i,[L.s1g,L.loc]],
 [/volkmann|wolkmann|pouteau|fémur|fracture|embarrure|bassin/i,[L.fract,L.s1g]],
 [/choc (hémodynamique|traumatique|cardiogénique|hypovolémique)|état de choc|insuffisance circulatoire|polytraumat|diagnostic infirmier|préopératoire/i,[L.s1g,L.ds]],
 [/hernie|appendic|péritonite|occlusi|invagination|ventre de bois|contracture|arrêt des matières|diagnostic présomptif|lampe/i,[L.s1g,L.dig]],
 [/amphicrine|pancréas|glande/i,[L.dig]],
 [/centre respiratoire|bulbe/i,[L.resp]],
 [/myosis|mydriase|neurovégétatif|anesthésie|hypoesthésie|sensibilité|phlébothrombose|post-?opératoire|surveillance|état végétatif|faciès/i,[L.s1g,L.sm]]
],
'Médecine':[
 [/transfusion.*(débit|gouttes)|débit.*(transfusion|gouttes)|gouttes\/min/i,[L.cm,L.ts]],
 [/énurésie/i,[L.ur,L.conti]],
 [/buruli|\bidr\b|tuberculine|\brage\b|typho|besredka|sérothérapie/i,[L.mi]],
 [/\btdr\b|paludisme/i,[L.palu,L.pla]],
 [/lavage gastrique|toxique/i,[L.ts]],
 [/feuille de température|stylo|tracé de couleur|pouls|respiration est représent/i,[L.ts,L.sm]],
 [/\bimc\b|corpulence|poids de mme|insuffisance pondérale/i,[L.dt,L.nu]],
 [/\boap\b|œdème aigu/i,[L.pr]],
 [/diabète/i,[L.sm,L.antidiab]]
],
'Pédiatrie':[
 [/mélange ii|\binsp\b|malnutri/i,[L.malnu,L.nu]],
 [/kangourou/i,[L.mk,L.prema]],
 [/échographie|trisomie|spina bifida|acide folique/i,[L.fetus]],
 [/oxygène|détresse respiratoire|membranes hyalines|silverman|thorax immobile|respire rapidement/i,[L.drnn]],
 [/crevasse|allaitante|allaitement/i,[L.allait]],
 [/germes|infection (bactérienne )?(post|tardive)/i,[L.infnn]],
 [/paludisme|artésunate|artéméther/i,[L.palu,L.pla]],
 [/température|fièvre|somnolent|cri plaintif/i,[L.fievre,L.pcimen]],
 [/nourrisson|démarche de soins|dépendance|toux quinteuse/i,[L.ds,L.pcimen]]
],
'Santé publique':[
 [/\bsimr\b|surveillance intégrée|riposte/i,[L.ep,L.sve]],
 [/boîtes? de sécurité/i,[L.secu,L.form]],
 [/jeunes filles|vaccin|paralysie flasque|\bpfa\b|programme élargi/i,[L.pv,L.vac]],
 [/pnlt|antituberculeux|versant|espc|premier recours|niveau central|objectifs suivants|politique des soins|soins de santé primaires|composantes promotionnelles/i,[L.sns,L.sp]],
 [/eau potable|goût de l.eau|ordures|évacuation|assainissement/i,[L.hy]],
 [/évaluation initiale|problème prioritaire|gravité|priorité/i,[L.demarche]],
 [/marasme|nutriment/i,[L.malnu,L.nu]],
 [/efficace|efficient|indicateur/i,[L.ind,L.defsp]],
 [/alcool/i,[L.sp,L.prev]]
]
};
const FALL={'Chirurgie':[L.s1g],'Médecine':[L.mi,L.sm],'Pédiatrie':[M('p-gen','Généralités sur la pédiatrie')],'Santé publique':[L.sns,L.sp]};
const has=q=>q.a&&q.a.length;
const linked=q=>/class='lc'|mes-cours\.html|href=/.test(q.e||'');
DE._t.CATS.forEach(c=>c.s.forEach(s=>{
  if(!/(ABOISSO|BOUAK)/i.test(s.t)||!/2026/.test(s.t))return;
  s.qs.forEach(q=>{
    if(!has(q)||linked(q))return;
    const txt=(q.q||'')+' '+(q.o||[]).join(' ');
    let links=null;
    for(const r of (R[c.n]||[])){if(r[0].test(txt)){links=r[1];break}}
    if(!links)links=FALL[c.n]||FALL[c.cat]||[L.sns];
    const ref=" Réf : "+links.join(' · ')+".";
    q.e=(q.e||'Réponse retenue d’après les cours du site.').replace(/\s*$/,'')+ref;
  });
}));
})();
