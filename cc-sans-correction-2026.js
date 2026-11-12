/* Corrections des questions restées « en cours de rédaction » dans les D.E blancs septembre 2026
   (Korhogo Chirurgie D, Agboville Pédiatrie et Santé publique, Daloa Pédiatrie et Santé publique D, Korhogo Santé publique D et A).
   Chaque question reçoit sa réponse, le raisonnement et des sources cliquables (cours L1, Mes cours, formules de santé publique, corrigés du site).
   Items marqués ⚠ : réponse établie par raisonnement ou recoupement, à confronter avec le corrigé officiel.
   Une question qui a déjà une réponse n'est jamais modifiée. Chargé après cc-liens-2026.js. */
(function(){
if(typeof DE==='undefined'||!DE._t||!DE._t.CATS)return;
const C=(k,t)=>"<a href='#' class='lc' data-co='"+k+"'>Cours · "+t+"</a>";
const M=(id,t)=>"<a href='mes-cours.html#c-"+id+"' target='_blank'>Mes cours · "+t+"</a>";
const F=(n,t)=>"<a href='sante-publique.html#f"+n+"' target='_blank' rel='noopener'>formule n°"+n+" ("+t+")</a>";
const SP=C('sp','Soins de santé primaires'),SNS=C('sns','Système national de santé'),PED=C('ped','Pédiatrie'),
 CH=C('s1g','Sémiologie et pathologie chirurgicales'),LOC=C('loc','Appareil locomoteur'),DIG=C('dig','Appareil digestif'),
 EM=C('em','Étude du milieu'),TS=C('ts','Technique de soins infirmiers'),DS=C('ds','Démarche de soins scientifique'),
 MALNU=M('p-malnu','Malnutrition de l’enfant'),DIARR=M('p-diarr','Diarrhée aiguë et déshydratation'),
 MPREV=M('s-prev','Système de santé, promotion et prévention'),SSP=M('s-hist','Histoire de la santé publique (SSP)'),
 NNN=M('p-nnn','Nouveau-né normal'),PCIMEN=M('p-pcimen','PCIMEN'),VAC=M('s3-vac','Organisation d’une séance de vaccination');
const FIX=[
/* ---------- KORHOGO · Chirurgie D.E blanc sept. 2026 (Version D) ---------- */
[/^KORHOGO — Chirurgie · D\.E blanc septembre 2026 \(Version D\)/,{
"25":[[1],"Réponse : B (83 gouttes/min). Cas de M. TINTO (brûlure de 35 %, remplissage de 12 000 ml sur 2 jours) : J1 = 8 000 ml (macromolécules 3 000 + glucosé 4 000 + bicarbonate 1 000), J2 = la moitié du J1, donc glucosé 5 % = 2 000 ml. Débit = (volume × 20 gttes/ml) / durée en min = (2 000 × 20) / (8 × 60) = 83 gttes/min. Réf : "+CH+" ; "+M('brul','Les brûlures (réanimation, Baxter)')+"."],
"27":[[0,2],"Réponses : A et C (171 et 85 gouttes/min). Transfusion en 2 h 30 = 150 min, 15 gttes/ml : culot globulaire 855 ml → 855 × 15 / 150 = 85 gttes/min ; sang total 1 710 ml → 1 710 × 15 / 150 = 171 gttes/min. Même question corrigée dans la Version C de Korhogo. Réf : "+CH+" ; "+TS+" (calcul du débit : volume × gouttes/ml ÷ durée en min)."],
"33":[[2,4,5],"Réponses : C, E, F. Occlusion organique (1) = obstacle mécanique : obstruction ou strangulation → (1, b) ; occlusion dynamique/fonctionnelle (2) = paralysie des muscles intestinaux (iléus paralytique) → (2, c) ; occlusion mixte (3) = cause inflammatoire comme l’appendicite aiguë → (3, d). (1, c), (2, a) et (3, b) sont faux. ⚠ la classification de l’occlusion mixte est à confronter avec le corrigé officiel. Réf : "+CH+" ; "+DIG+"."],
"38":[[3,5],"Réponses (associations fausses) : D et F. Urines sanguinolentes abondantes → lésion de l’appareil urinaire (contusion rénale ou vésicale), pas « aucun organe touché » : (2, b) est faux. Globe vésical avec impossibilité d’uriner → rupture de l’urètre, alors qu’une rupture vésicale ne donne pas de globe vésical : (3, a) est faux. Les autres associations sont vraies : urines claires abondantes → aucun organe touché ; absence de miction sans globe → rupture vésicale ; globe vésical → rupture de l’urètre. Réf : "+CH+" ; "+C('ur','Urologie')+"."],
"39":[[1,2,4],"Réponses : B, C, E (œdème des extrémités, cyanose, insensibilité du membre). Le syndrome de Volkmann est une ischémie du membre due à un bandage ou plâtre trop serré : œdème, cyanose, froideur, douleur, insensibilité et impotence du membre. Sueurs froides, tachycardie et pouls filant sont des signes de choc, pas de Volkmann. Réf : "+M('fract','Généralités sur les fractures (complications)')+" ; "+LOC+"."]
}],
/* ---------- AGBOVILLE · Pédiatrie Bloc B ---------- */
[/^AGBOVILLE — Évaluation de pédiatrie, Bloc B/,{
"1":[[0],"Réponse : A (4 données de dépendance). Corrigé d’Agboville : GG, nouveau-né de 5 jours, a 4 données de dépendance (dont les soins du cordon par décoction traditionnelle, réalisés par la mère). Réf : "+DS+" ; "+NNN+" ; "+PED+"."],
"4":[[2],"Réponse : C (la guérison des lésions). Dans la prise en charge de l’enfant malnutri on surveille l’appétit, le poids et les œdèmes ; la guérison des lésions n’est pas un paramètre de surveillance direct (corrigé d’Agboville). ⚠ une autre version du site retient A : confronter avec le corrigé officiel. Réf : "+MALNU+" ; "+C('nu','Nutrition')+" ; "+PED+"."]
}],
/* ---------- DALOA · Pédiatrie sept. 2026 ---------- */
[/^DALOA — Pédiatrie · D\.E blanc septembre 2026/,{
"2":[[0],"Réponse : A (4 données de dépendance), d’après le corrigé d’Agboville (même énoncé). Réf : "+DS+" ; "+NNN+" ; "+PED+"."],
"5":[[2],"Réponse : C (la guérison des lésions), d’après le corrigé d’Agboville (même énoncé) : on surveille l’appétit, le poids et les œdèmes. ⚠ une autre version du site retient A : confronter avec le corrigé officiel. Réf : "+MALNU+" ; "+C('nu','Nutrition')+"."],
"28":[[0],"Réponse : A (10 mg/j). Zinc chez le nourrisson de moins de 6 mois : un demi-comprimé (10 mg) par jour ; la cure standard est de 10 jours. ⚠ aucune proposition ne donne « 10 mg pendant 10 jours » : A est la seule avec la bonne dose, à confronter avec le corrigé officiel. Réf : "+DIARR+" ; "+PCIMEN+"."]
}],
/* ---------- AGBOVILLE · Santé publique Bloc B ---------- */
[/^AGBOVILLE — Évaluation de santé publique, Bloc B/,{
"3":[[1],"Réponse : B (1993). Le début effectif des activités de SSP au district sanitaire pilote de Bouaflé date de 1993 (le lancement officiel des SSP en Côte d’Ivoire date de 1991). Les corrigés de Korhogo et d’Agboville marquent « début effectif en 1991 » comme faux. ⚠ le cours L1 du site indique encore 1991 pour le début effectif : confronter avec le corrigé officiel. Réf : "+SSP+" ; "+SP+"."],
"50":[[2],"Réponse : C (3 705 doses, environ 3 725). Même énoncé corrigé par Agboville : besoin réel annuel en Penta d’environ 3 725 doses (BR = BT + SS, avec SS = 25 % × BT et BT = population cible × objectif × 3 doses × facteur de perte). La proposition de ce sujet (3 705) est la plus proche. Réf : "+F('38bis','besoin théorique')+" ; "+F('39','stock de sécurité')+" ; "+F('41','besoin réel')+"."]
}],
/* ---------- KORHOGO · Santé publique Version D (2 octobre 2026) ---------- */
[/^KORHOGO — Santé publique, Version D/,{
"1":[[0],"Vrai. La règle des 3PS (prendre, présenter, prélever…) permet d’éviter les doses sacrifiées ; même énoncé corrigé « Vrai » dans la version A de Korhogo. Réf : "+VAC+" ; "+C('pv','PEV')+"."],
"25":[[1,2],"Réponses : B et C (accessibilité financière et géographique). Dans le système de santé, l’accessibilité se joue sur le coût des soins (financière) et la distance au centre de santé (géographique, rayon de 5 km). ⚠ à confronter avec le corrigé officiel. Réf : "+SP+" ; "+F(73,'accessibilité géographique')+"."],
"52":[[1],"Réponse : B (1 291 doses). BT = population cible × objectif vaccinal × nombre de contacts × facteur de perte = 444 × 0,95 × 3 × 1,02 = 1 290,7 ≈ 1 291 doses (444 enfants de 0 à 23 mois ; facteur de perte 1,02 calculé à la question précédente). Réf : "+F('38bis','besoin théorique')+" ; "+F(3,'enfants de 0 à 23 mois')+" ; "+F(46,'facteur de perte')+"."]
}],
/* ---------- DALOA · Santé publique Version D ---------- */
[/^DALOA — Santé publique · D\.E blanc septembre 2026 \(Version D\)/,{
"22":[[0],"Réponse : A. Alma-Ata : 6 au 12/09/1978 (2-b) ; Initiative de Bamako : 1987 (5-a) ; définition des niveaux d’application des SSP : 1985 (6-e) ; lancement officiel des SSP en Côte d’Ivoire : 1991 (3-c) ; mise en œuvre effective : 1993 (4-d) ; réunion du comité d’experts africains à Brazzaville : 1997 (1-f). Combinaison : (1,f) (2,b) (3,c) (4,d) (5,a) (6,e). ⚠ le rattachement de 1997 à Brazzaville vient de l’élimination : à confronter avec le corrigé officiel. Réf : "+SSP+" ; "+SP+".",[
 "A. (1-f) ; (2-b) ; (3-c) ; (4-d) ; (5-a) ; (6-e)",
 "B. (1-f) ; (2-c) ; (3-b) ; (4-a) ; (5-d) ; (6-e)",
 "C. (1-e) ; (2-b) ; (3-c) ; (4-d) ; (5-a) ; (6-f)",
 "D. (1-c) ; (2-f) ; (3-a) ; (4-b) ; (5-e) ; (6-d)",
 "E. (1-d) ; (2-e) ; (3-f) ; (4-c) ; (5-b) ; (6-a)"]],
"42":[[2],"Réponse : C (1 041). Femmes en âge de reproduction = 20 % de la population totale. Population en 2021 (fin d’année) = 5 100 × 1,02 = 5 202 (TAA de 2 %). 20 % × 5 202 = 1 040,4, soit 1 041 femmes (arrondi à l’entier supérieur). ⚠ si l’on prenait 5 100 habitants, on trouverait 1 020 : confronter avec le corrigé officiel. Réf : "+M('s-ind','Indicateurs de santé et démographie')+" ; "+F(24,'taux d’accroissement annuel')+"."],
"43":[[2],"Réponse : C (355). Enfants de 0 à 23 mois = 6,82 % de la population totale (formule n°3) : 6,82 % × 5 202 = 354,8, soit 355 enfants (arrondi à l’entier supérieur). Réf : "+F(3,'enfants de 0 à 23 mois')+"."],
"44":[[1],"Réponse : B (66 doses). Besoin théorique mensuel = population cible × nombre de contacts × facteur de perte / 12. RR : 2 doses (9 et 15 mois) ; facteur de perte 1,11 : 355 × 2 × 1,11 / 12 = 65,7 ≈ 66 doses par mois. ⚠ l’énoncé ne donne pas le facteur de perte : 1,11 est la valeur habituelle des sujets du site, à confronter avec le corrigé officiel. Réf : "+F('38bis','besoin théorique')+" ; "+F(46,'facteur de perte')+"."]
}],
/* ---------- KORHOGO · Santé publique Version A (sept. 2026) ---------- */
[/^KORHOGO — Santé publique · D\.E blanc septembre 2026 \(Version A\)/,{
"17":[[1],"Réponse : B (1 291 doses). BT = 444 × 0,95 × 3 × 1,02 = 1 290,7 ≈ 1 291 doses (444 enfants de 0 à 23 mois à Djamanasso ; objectif vaccinal 95 % ; 3 doses de Penta ; facteur de perte 1,02). Réf : "+F('38bis','besoin théorique')+" ; "+F(3,'enfants de 0 à 23 mois')+" ; "+F(46,'facteur de perte')+"."],
"35":[[1],"Réponse : B (la couverture universelle). Avec l’équité et la participation communautaire, la couverture universelle (accès de tous aux soins essentiels) fait partie des principes de base des SSP ; les autres propositions ne sont pas des principes. ⚠ à confronter avec le corrigé officiel (même énoncé retenu « B » dans la version D de Korhogo). Réf : "+SP+" ; "+SNS+"."],
"41":[[1,2],"Réponses : B et C (accessibilité financière et géographique). Dans le système de santé, l’accessibilité se joue sur le coût des soins (financière) et la distance au centre de santé (géographique). ⚠ à confronter avec le corrigé officiel. Réf : "+SP+" ; "+F(73,'accessibilité géographique')+"."],
"42":[[2],"Réponse : C. Regarder, centrer son intérêt sur des points précis du milieu décrit la méthode d’observation, pas un avantage de l’étude du milieu. Les avantages sont : connaître les problèmes de santé, disposer de données fiables et récentes, connaître les composantes de la communauté. Réf : "+EM+"."]
}]
];
const left={};
DE._t.CATS.forEach(c=>c.s.forEach(s=>{
  FIX.forEach(([re,map])=>{
    if(!re.test(s.t))return;
    s.qs.forEach(q=>{
      const f=map[String(q.n)];
      if(!f||(q.a&&q.a.length))return;
      q.a=f[0].slice();q.e=f[1];if(f[2])q.o=f[2].slice();
    });
    const n=s.qs.filter(q=>!(q.a&&q.a.length)).length;
    if(typeof s.pend==='number')s.pend=n;
    if(s.d)s.d=s.d.replace(/\d+ question\(s\) sans correction pour l'instant/,n?n+" question(s) sans correction pour l'instant":"toutes les questions sont corrigées");
  });
}));
})();
