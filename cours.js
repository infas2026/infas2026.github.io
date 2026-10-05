/* =====================================================================
   COURS – à compléter. Un bloc par matière, avec l'identifiant du sommaire.
   Identifiants : dig, cel, loc, cv, resp, ped, em, sm, dt, mi, hy, vh, sn,
   nu, ep, pa, ic, ur, gy, im, th, rc, sns, sp, pr, ds, he ...
   (voir la liste S1 au début de script.js)

   Exemple (à copier, décommenter et adapter) :

   "dig": { html: `
       <h3>1. Définition</h3>
       <p>Le tube digestif s'étend de la bouche à l'anus.</p>
       <h3>2. Les organes</h3>
       <ul><li>Bouche</li><li>Œsophage</li><li>Estomac</li></ul>
   ` },

   Une matière sans bloc affiche « Le cours sera bientôt disponible ».
   Après modification : envoyer cours.js sur GitHub (il remplace l'ancien).
   ===================================================================== */
var COURS_DATA = {

"dig": { html: `
<div class="retenir"><b>Fiche élaborée d'après l'exercice « Anatomie de l'appareil digestif », sa correction et le cours fourni.</b> Si votre cours officiel indique d'autres valeurs chiffrées, c'est lui qui fait foi.</div>

<h3>1. Généralités</h3>
<p><b>Définition :</b> l'appareil digestif est l'ensemble des organes responsables de l'ingestion, de la digestion des aliments, de l'absorption des nutriments et de l'élimination des déchets non assimilés (dégradation et transformation des aliments, puis élimination des résidus).</p>
<p>Sur le plan anatomique, il se divise en deux grands ensembles :</p>
<ul>
<li><b>Le tube digestif :</b> conduit continu d'environ <b>9 mètres</b> de long, de la bouche à l'anus (cavité buccale, pharynx, œsophage, estomac, intestin grêle, gros intestin, anus).</li>
<li><b>Les organes annexes :</b> glandes et structures impliquées dans le traitement mécanique et chimique des aliments (dents, langue, glandes salivaires, foie et voies biliaires, pancréas).</li>
</ul>
<p>Les glandes hypophysaires n'en font pas partie : l'hypophyse est une glande endocrine du cerveau.</p>
<p><b>Deux types d'actions :</b> l'action <b>motrice</b> (mécanique : mastication, déglutition, péristaltisme, brassage) et l'action <b>chimique</b> (sécrétions et enzymes). S'y ajoutent l'absorption et l'élimination.</p>

<h3>2. Structure générale de la paroi du tube digestif</h3>
<p>De l'œsophage au canal anal, la paroi comporte <b>4 couches concentriques</b> (de l'intérieur vers l'extérieur) :</p>
<ol>
<li><b>La muqueuse :</b> épithélium de revêtement au contact de la lumière, reposant sur le <i>lamina propria</i> (tissu conjonctif) et une mince couche musculaire, la <i>muscularis mucosae</i>.</li>
<li><b>La sous-muqueuse :</b> tissu conjonctif lâche riche en vaisseaux sanguins et lymphatiques. Elle contient le <b>plexus nerveux de Meissner</b> (contrôle des sécrétions).</li>
<li><b>La musculeuse :</b> deux couches de muscle lisse, l'une interne <b>circulaire</b> (réduit le diamètre) et l'autre externe <b>longitudinale</b> (raccourcit le segment). Entre les deux se trouve le <b>plexus nerveux d'Auerbach</b> (contrôle le péristaltisme).</li>
<li><b>La séreuse ou l'adventice :</b> couche externe. La séreuse forme le feuillet viscéral du péritoine ; l'adventice (tissu conjonctif) recouvre les portions rétropéritonéales. <b>L'œsophage a une adventice, pas de séreuse.</b></li>
</ol>

<h3>3. Paroi abdominale et régions de l'abdomen</h3>
<p>La paroi abdominale antérieure est divisée en <b>9 régions</b> (3 étages × 3) :</p>
<table>
<tr><th>Étage</th><th>Droite</th><th>Centre</th><th>Gauche</th></tr>
<tr><td>Supérieur</td><td>Hypochondre droit</td><td>Épigastre</td><td>Hypochondre gauche</td></tr>
<tr><td>Moyen</td><td>Flanc droit</td><td>Région ombilicale</td><td>Flanc gauche</td></tr>
<tr><td>Inférieur</td><td>Fosse iliaque droite</td><td>Hypogastre</td><td>Fosse iliaque gauche</td></tr>
</table>
<ul>
<li><b>Estomac :</b> épigastre et hypochondre gauche. <b>Foie :</b> hypochondre droit. <b>Cæcum et appendice :</b> fosse iliaque droite (même région).</li>
<li><b>Muscles de la paroi ventro-latérale :</b> muscle droit, obliques (externe et interne) et transverse. Le <b>psoas</b> appartient à la paroi postérieure.</li>
</ul>

<h3>4. Cavité buccale, dents et langue</h3>
<ul>
<li><b>Cavité buccale :</b> délimitée par les lèvres, les joues, le palais (dur en avant, mou en arrière) et le plancher buccal. Elle abrite la langue et les dents. Rôles : ingestion, mastication, insalivation, début de la digestion.</li>
<li><b>Dents :</b> 32 chez l'adulte (8 incisives, 4 canines, 8 prémolaires, 12 molaires), ancrées dans les alvéoles dentaires du maxillaire et de la mandibule.</li>
<li><b>Langue :</b> organe musculaire composé de muscles intrinsèques et extrinsèques, recouvert de papilles gustatives et filiformes.</li>
<li><b>Artères :</b> branches de la carotide externe. L'artère buccale naît de l'artère maxillaire, elle-même branche de la carotide externe.</li>
<li><b>Veines :</b> elles se drainent dans la veine <b>jugulaire interne</b>.</li>
</ul>

<h3>5. Glandes salivaires</h3>
<p>Trois paires de grandes glandes exocrines :</p>
<ol>
<li><b>Parotides :</b> en avant de l'oreille ; leur canal excréteur (<b>canal de Sténon</b>) s'ouvre en regard de la 2<sup>e</sup> molaire supérieure.</li>
<li><b>Submandibulaires :</b> sous le plancher de la bouche ; le <b>canal de Wharton</b> s'ouvre à la base du frein de la langue.</li>
<li><b>Sublinguales :</b> sous la langue ; elles s'ouvrent par plusieurs petits canaux.</li>
</ol>
<p><b>Fonctions de la salive :</b> amorcer la digestion (amylase, lipase), lubrifier le bol alimentaire et nettoyer la cavité buccale.</p>

<h3>6. Pharynx</h3>
<ul>
<li>Carrefour aéro-digestif, siège de la <b>déglutition</b>. Seules les parties oropharyngée et laryngopharyngée sont empruntées par le bol alimentaire.</li>
<li>Innervé par le nerf glosso-pharyngien (IX) et le nerf pneumogastrique ou vague (X).</li>
</ul>

<h3>7. Œsophage</h3>
<ul>
<li>Conduit musculo-membraneux d'environ <b>25 cm</b> de long et 2 cm de diamètre, en position rétrosternale, qui relie le pharynx à l'estomac.</li>
<li><b>Trajet :</b> portion cervicale (cou), portion thoracique (thorax), puis traversée du diaphragme par le <b>hiatus œsophagien</b> à hauteur de T10 pour rejoindre l'estomac (portion abdominale).</li>
<li><b>Sphincters :</b>
<ul>
<li><b>Sphincter supérieur (SSO) :</b> muscle strié, au niveau du muscle cricopharyngien.</li>
<li><b>Sphincter inférieur (SIO) :</b> zone de haute pression fonctionnelle au cardia, qui empêche le reflux gastro-œsophagien.</li>
</ul></li>
<li><b>Tuniques :</b> muqueuse, sous-muqueuse, musculeuse et <b>adventice</b> (pas de séreuse).</li>
<li><b>Fonctions :</b> transport du bol alimentaire par péristaltisme et système anti-reflux.</li>
<li><b>Drainage veineux :</b> au tiers inférieur, les veines rejoignent la veine porte et la veine cave : c'est une <b>anastomose porto-cave</b> (varices œsophagiennes en cas d'hypertension portale).</li>
</ul>

<h3>8. Estomac</h3>
<ul>
<li>Organe creux en forme de « J », dans l'épigastre et l'hypochondre gauche, d'une capacité de 1,5 à 2 litres. Ce n'est <b>pas une glande</b> : c'est un réservoir qui contient des glandes gastriques.</li>
<li><b>Deux orifices :</b> le <b>cardia</b> (jonction avec l'œsophage) et le <b>pylore</b> (sphincter musculaire lisse qui régule la vidange vers le duodénum). L'antre est une portion de l'estomac, pas un orifice.</li>
<li><b>Subdivisions :</b>
<ul>
<li><b>Fundus</b> (gros cul-de-sac) : dôme supérieur sous le diaphragme, où se stockent les gaz ;</li>
<li><b>Corps</b> : partie centrale et principale ;</li>
<li><b>Antre pylorique</b> : partie inférieure rétrécie menant au pylore.</li>
</ul></li>
<li><b>Courbures :</b> petite courbure (bord droit) et grande courbure (bord gauche).</li>
<li><b>Suc gastrique :</b> acide chlorhydrique, pepsine, mucus, facteur intrinsèque, avec la gastrine qui stimule la sécrétion. Il ne contient ni bile (d'origine hépatique) ni endorphine.</li>
<li><b>Innervation :</b> nerf vague (X), parasympathique.</li>
<li><b>Fonctions :</b> réservoir des aliments, broyage et malaxage, digestion du bol alimentaire en chyme. L'absorption y est très faible.</li>
</ul>

<h3>9. Intestin grêle</h3>
<p>Segment le plus long du tube digestif, plié en anses intestinales : environ <b>6 à 7 mètres</b> sur le cadavre, et environ <b>3 mètres chez le vivant</b> (tonus musculaire). Le « titanium » n'existe pas.</p>
<table>
<tr><th>Segment</th><th>Longueur approximative</th><th>Caractéristiques</th></tr>
<tr><td><b>Duodénum</b></td><td>~25 cm (forme de C)</td><td>Fixe, enroulé autour de la tête du pancréas. Reçoit la bile et le suc pancréatique à l'<b>ampoule de Vater</b> (papille duodénale majeure).</td></tr>
<tr><td><b>Jéjunum</b></td><td>~2,5 m</td><td>Partie supérieure mobile, plus large, paroi épaisse et très vascularisée. Plis circulaires (valvules conniventes) très développés.</td></tr>
<tr><td><b>Iléon</b></td><td>~3,5 m</td><td>Partie inférieure mobile, terminée par la jonction iléo-cæcale (valve de Bauhin). Plaques de Peyer (tissu lymphoïde).</td></tr>
</table>
<ul>
<li><b>Fonctions :</b> brassage du chyme et des enzymes, puis <b>absorption des nutriments</b>.</li>
<li><b>Vascularisation :</b> artère mésentérique <b>supérieure</b> (branches jéjunales et iléales), et non la mésentérique inférieure.</li>
</ul>

<h3>10. Gros intestin : côlon, rectum et anus</h3>
<p>Long d'environ 1,5 m, il encadre l'intestin grêle. Il se reconnaît à ses <b>bandelettes longitudinales</b> (<i>taeniae coli</i>), ses <b>haustrations</b> (bosselures) et ses <b>franges épiploïques</b> (sacs graisseux).</p>
<ul>
<li><b>Cæcum et appendice vermiforme :</b> cul-de-sac de la fosse iliaque droite, sous la valve iléo-cæcale. L'appendice est un diverticule lymphoïde de 8 à 10 cm suspendu au cæcum.</li>
<li><b>Côlon : 4 segments</b> (et non 5) :
<ul>
<li><b>ascendant (droit)</b> : monte jusqu'au foie (angle hépatique) ;</li>
<li><b>transverse</b> : traverse l'abdomen jusqu'à la rate (angle splénique) ;</li>
<li><b>descendant (gauche)</b> : descend le long du flanc gauche ;</li>
<li><b>sigmoïde</b> : boucle en « S » qui débouche dans le bassin.</li>
</ul></li>
<li><b>Division du côlon en deux :</b> côlon droit (artère mésentérique supérieure) et côlon gauche (artère mésentérique inférieure).</li>
<li><b>Fonctions du côlon :</b> faire progresser le contenu par péristaltisme et former les matières fécales (bol fécal).</li>
<li><b>Rectum :</b> canal fixe d'environ <b>12 à 15 cm</b> (15 cm dans l'exercice), qui débute en S3. Il se compose de l'<b>ampoule rectale</b> et du <b>canal anal</b>. Le rectum stocke les selles.</li>
<li><b>Canal anal :</b> portion terminale de <b>3 à 4 cm</b> (environ 4 cm sur le cadavre, plus court chez le vivant), avec deux sphincters : le <b>sphincter interne</b> (involontaire, muscle lisse) et le <b>sphincter externe</b> (volontaire, muscle strié).</li>
<li><b>Anus :</b> assure la <b>continence</b> et l'<b>évacuation contrôlée</b> des selles. Une anastomose porto-cave existe au niveau du canal anal.</li>
</ul>

<h3>11. Foie et voies biliaires</h3>
<p>Le foie est la plus grosse glande de l'organisme (~1,5 kg), dans l'hypochondre droit.</p>
<ul>
<li><b>Anatomie externe :</b> vu de face, 2 lobes principaux (<b>droit</b> et <b>gauche</b>, séparés par le ligament falciforme) ; vu de dessous, 2 lobes accessoires (<b>carré</b> et <b>caudé</b>). Dans la segmentation (8 segments), le <b>segment I</b> est le <b>lobe caudé</b>.</li>
<li><b>Unité fonctionnelle :</b> le <b>lobule hépatique</b>, de forme hexagonale.</li>
<li><b>Fonctions :</b> sécrétion de la bile par les <b>hépatocytes</b> (en continu), métabolisme des glucides, lipides et <b>protéines</b>, stockage, et <b>protection par détoxication</b>. Il ne stocke pas d'enzymes salivaires.</li>
<li><b>Voie biliaire principale :</b> les canalicules biliaires convergent vers les canaux hépatiques droit et gauche, qui forment le <b>canal hépatique commun</b>. Celui-ci s'unit au canal cystique pour former le canal <b>cholédoque</b>, qui s'abouche dans le duodénum.</li>
<li><b>Voie biliaire accessoire :</b> la <b>vésicule biliaire</b> (réservoir sous le foie), reliée par le <b>canal cystique</b>. Elle n'appartient pas à la voie principale.</li>
</ul>

<h3>12. Pancréas</h3>
<p>Glande mixte de 12 à 15 cm de long, étalée transversalement en arrière de l'estomac (rétropéritonéale).</p>
<ul>
<li><b>Parties :</b> tête (encastrée dans le C duodénal), col, corps et queue (vers la rate). L'antre n'en fait pas partie : il appartient à l'estomac.</li>
<li><b>Fonction exocrine :</b> les cellules acineuses et centro-acineuses fabriquent le suc pancréatique.</li>
<li><b>Fonction endocrine :</b> les îlots de Langerhans sécrètent l'insuline (cellules bêta). L'insuline ne vient donc pas des cellules acineuses.</li>
<li><b>Canaux :</b> le <b>canal de Wirsung</b> (principal) traverse la glande et s'unit au cholédoque à l'ampoule de Vater ; le <b>canal de Santorini</b> (accessoire) s'ouvre plus haut, à la papille duodénale mineure.</li>
<li><b>Innervation :</b> le plexus cœliaque (solaire) apporte les fibres sympathiques et sensitives.</li>
</ul>

<h3>13. Vascularisation artérielle et veineuse</h3>
<p>Les organes digestifs abdominaux sont vascularisés par trois branches de l'<b>aorte abdominale</b> :</p>
<table>
<tr><th>Artère</th><th>Territoire</th></tr>
<tr><td><b>Tronc cœliaque</b></td><td>Estomac, foie, rate, duodénum, pancréas</td></tr>
<tr><td><b>Mésentérique supérieure</b></td><td>Reste de l'intestin grêle, cæcum, côlon ascendant et 2/3 du côlon transverse</td></tr>
<tr><td><b>Mésentérique inférieure</b></td><td>1/3 restant du côlon transverse, côlon descendant, sigmoïde et partie supérieure du rectum</td></tr>
</table>
<p><b>Drainage veineux (système porte) :</b></p>
<ul>
<li>Le sang chargé en nutriments (estomac, intestins, rate, pancréas) est collecté par la <b>veine porte</b>, formée par la réunion de la veine mésentérique supérieure et de la veine splénique. Elle draine tout le tube digestif intra-abdominal vers le foie.</li>
<li>Après filtration et métabolisation dans le foie, le sang rejoint la circulation générale par les <b>veines sus-hépatiques</b>.</li>
<li><b>Anastomoses porto-caves :</b> au tiers inférieur de l'<b>œsophage</b> et au niveau du <b>canal anal</b> (et non au milieu de l'œsophage).</li>
</ul>

<h3>14. Péritoine</h3>
<p>Grande membrane séreuse à deux feuillets :</p>
<ul>
<li><b>Feuillet pariétal :</b> tapisse la paroi abdominale.</li>
<li><b>Feuillet viscéral :</b> recouvre la surface des organes abdominaux.</li>
<li>Entre les deux, la <b>cavité péritonéale</b> est un espace virtuel qui contient un film lubrifiant.</li>
<li>Replis de soutien : le <b>mésentère</b> (attache l'intestin grêle à la paroi postérieure) et le grand et le petit <b>épiploon</b> (omentum).</li>
</ul>

<h3>15. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>Intestin grêle vascularisé par la mésentérique inférieure</td><td>Mésentérique supérieure</td></tr>
<tr><td>Côlon en 5 segments</td><td>4 segments</td></tr>
<tr><td>Estomac : cardia et antre</td><td>Cardia et pylore</td></tr>
<tr><td>L'estomac est une glande</td><td>Organe creux avec des glandes</td></tr>
<tr><td>Insuline : cellules acineuses</td><td>Îlots de Langerhans (cellules bêta)</td></tr>
<tr><td>Veines buccales : jugulaire externe</td><td>Jugulaire interne</td></tr>
<tr><td>Œsophage : tunique séreuse</td><td>Adventice, pas de séreuse</td></tr>
<tr><td>Œsophage de 21 cm</td><td>Environ 25 cm</td></tr>
<tr><td>Vésicule : voie biliaire principale</td><td>Voie biliaire accessoire</td></tr>
<tr><td>Psoas : paroi ventro-latérale</td><td>Paroi postérieure</td></tr>
<tr><td>Anastomose au milieu de l'œsophage</td><td>Tiers inférieur de l'œsophage</td></tr>
<tr><td>Appareil digestif avec glandes hypophysaires</td><td>Glandes annexes : salivaires, foie, pancréas</td></tr>
</table>
` },

"ped": { html: `
<div class="retenir"><b>Fiche élaborée d'après le cours officiel de pédiatrie (Licence 1 IDE/SF, UFR Sciences Médicales), le résumé pour le diplôme d'État et les évaluations.</b> Si votre cours officiel indique d'autres valeurs, c'est lui qui fait foi.</div>

<h3>1. Généralités sur la pédiatrie</h3>
<ul>
<li><b>Pédiatrie :</b> branche de la médecine consacrée à l'enfant (développement, physiologie normale, maladies infantiles). <b>Néonatologie :</b> branche de la pédiatrie consacrée au fœtus et au nouveau-né.</li>
<li><b>Groupes d'enfants :</b> nouveau-né 0 à 28 jours ; nourrisson 1 à 23 mois ; enfant préscolaire 2 à 5 ans ; enfant 6 à 12 ans ; adolescent 13 à 18 ans.</li>
<li><b>Besoins de l'enfant :</b> alimentation, développement (croissance et développement psychomoteur), protection, éducation.</li>
<li><b>Principales maladies :</b> nouveau-né : infection bactérienne, prématurité, détresse respiratoire, ictère, asphyxie périnatale ; nourrissons et enfants : paludisme, infections respiratoires aiguës, gastro-entérite, malnutrition, méningite, anémie, VIH/sida ; adolescents : paludisme, VIH/sida, accidents, drépanocytose, cancer.</li>
<li><b>Acteurs :</b> parents, enfant, agents de santé, communauté.</li>
<li><b>Côte d'Ivoire (2016) :</b> 23 740 424 habitants ; 0-14 ans : 38 % ; natalité 28,2 ‰ ; mortalité globale 9,5 ‰ ; mortalité infantile 57,2 ‰.</li>
</ul>

<h3>2. Nouveau-né normal</h3>
<p>Le nouveau-né normal (90 % des naissances) est issu d'une grossesse et d'un accouchement sans incident, sans traumatisme ni malformation.</p>
<ul>
<li><b>Étapes :</b> œuf (0 à 8<sup>e</sup> jour), embryon (8<sup>e</sup> au 90<sup>e</sup> jour), fœtus (90<sup>e</sup> jour à la naissance), nouveau-né (J0 à J28).</li>
<li><b>3 feuillets de l'embryon :</b> <b>ectoblaste</b> (tissu nerveux, peau) ; <b>mésoblaste</b> (cœur, vaisseaux, muscles, tissu conjonctif, reins, gonades) ; <b>endoblaste</b> (glandes, épithélium respiratoire, muqueuse intestinale).</li>
<li><b>Bilan prénatal :</b> hémogramme, électrophorèse de l'hémoglobine, groupe sanguin ABO/rhésus, glycémie, sérologies VIH, toxoplasmose, rubéole, syphilis, et échographie aux 1<sup>er</sup>, 2<sup>e</sup> et 3<sup>e</sup> trimestres.</li>
<li><b>Prophylaxies de la gestante :</b> fer et acide folique (vitamine B9, qui prévient les malformations comme le spina bifida), antipaludique, vaccin antitétanique.</li>
</ul>
<table>
<tr><th>Paramètre</th><th>Valeur normale</th></tr>
<tr><td>Coloration</td><td>Rose, quatre membres en flexion (position W, M)</td></tr>
<tr><td>Poids / taille / PC</td><td>2 500 à 4 000 g (moyenne 3 500 g) / 46 à 54 cm / 33 à 37 cm</td></tr>
<tr><td>Fréquence respiratoire</td><td>40 à 60 cycles/min</td></tr>
<tr><td>Fréquence cardiaque</td><td>100 à 160 battements/min</td></tr>
<tr><td>APGAR</td><td>8 à 10 à 5 minutes</td></tr>
<tr><td>Signes de maturité</td><td>Strie plantaire sur plus des 2/3 antérieurs ; nodule mammaire supérieur à 4 mm ; lobule de l'oreille bien ourlé ; testicules dans les bourses striées (garçon) ; grandes lèvres recouvrant les petites (fille)</td></tr>
</table>
<ul>
<li><b>Première selle :</b> le méconium. <b>Premières urines :</b> dans les premières 24 heures.</li>
<li><b>Crise génitale :</b> gonflement des seins, écoulement de liquide blanchâtre par le sexe chez la fille (due à la prolactine).</li>
<li><b>Soins propres :</b> collyre dans les yeux, vitamine K1 1 mg en IM, soins du cordon (chlorhexidine), aider la mère à mettre le nouveau-né au sein. <b>Soins délégués :</b> sérum anti-D si la mère est rhésus négatif et le bébé rhésus positif. <b>Collaboration :</b> groupage du nouveau-né. <b>Conseils :</b> CPN, MILDA, allaitement exclusif. Fer à J8 de vie.</li>
</ul>

<h3>3. Examen du nouveau-né et réanimation en salle de naissance</h3>
<p><b>Précautions :</b> salle éclairée et calme, lavage des mains, lampe chauffante ou table radiante, nouveau-né dévêtu, gants propres. On interroge d'abord le carnet de santé : nombre de CPN, DDR, bilans, prophylaxies, pathologies de la grossesse, travail, terme, voie d'accouchement, APGAR, mensurations.</p>
<table>
<tr><th>Score d'APGAR</th><th>0</th><th>1</th><th>2</th></tr>
<tr><td><b>A</b>spect (couleur)</td><td>Cyanose ou pâleur généralisée</td><td>Cyanose des extrémités</td><td>Rose partout</td></tr>
<tr><td><b>P</b>ouls</td><td>0</td><td>Moins de 100/min</td><td>Plus de 100/min</td></tr>
<tr><td><b>G</b>rimace (cri)</td><td>Absence</td><td>Grimace ou geignement</td><td>Cri</td></tr>
<tr><td><b>A</b>ctivité (tonus)</td><td>Hypotonie</td><td>Flexion des extrémités</td><td>Quadriflexion</td></tr>
<tr><td><b>R</b>espiration</td><td>Absente</td><td>Irrégulière</td><td>Régulière</td></tr>
</table>
<ul>
<li>À l'issue de l'examen : nouveau-né normal ou anormal (à risque, traumatisme obstétrical, malformations évidentes : spina bifida, pieds bots, omphalocèle, fente labio-palatine, imperforation anale, hydrocéphalie…).</li>
<li><b>Réanimation :</b> c'est ressusciter un enfant de 0 à 28 jours en détresse vitale. <b>On n'utilise pas l'APGAR pour décider de la réanimation, mais la « minute d'or »</b> (absence de respiration, hypotonie, absence de cri). On sèche l'enfant, on lui met un bonnet, on dégage les voies aériennes, on ventile si besoin et on <b>concentre les efforts sur les poumons</b>. Le clampage du cordon à 1 minute prévient l'anémie. On ne tape pas la plante du pied.</li>
<li><b>0 à 60 min de vie :</b> mise au sein précoce, température prise 4 fois (toutes les 15 min). <b>60 à 90 min (soins essentiels) :</b> vitamine K1 IM, collyre antiseptique, soins du cordon à la chlorhexidine, poids, examen du bébé, température.</li>
</ul>

<h3>4. Détresse respiratoire du nouveau-né</h3>
<ul>
<li>Gravité évaluée par le <b>score de Silverman</b> (signes de lutte respiratoire) ; examens : radiographie du thorax, gazométrie, hémogramme, hémoculture, CRP.</li>
<li><b>Causes :</b> maladie des membranes hyalines (déficit de surfactant, prématuré) ; retard de résorption du liquide alvéolaire (césarienne avant travail) ; inhalation de liquide amniotique (accouchement difficile ou dystocique) ; cause infectieuse.</li>
<li>Débit d'oxygène : 0,5 à 1 L/min.</li>
</ul>

<h3>5. Nouveau-né prématuré et hypotrophe</h3>
<ul>
<li><b>Prématuré :</b> âge gestationnel inférieur à 37 SA. Petit : 35 à 37 SA ; moyen : 33 à 35 SA ; grand : 28 à 33 SA ; extrême : 22 à 28 SA. Causes médicales ou provoquées, ou spontanées d'origine maternelle ou fœtale.</li>
<li><b>Signes :</b> lanugo, vernix caseosa abondant, cartilage de l'oreille peu développé, peau fine.</li>
<li><b>Problèmes :</b> souffrance cérébrale, détresse respiratoire (maladie des membranes hyalines), hypothermie, infections, hémorragie, hypoglycémie (principale complication métabolique), hypocalcémie, troubles digestifs (entérocolite).</li>
<li><b>Devenir :</b> séquelles neurologiques, respiratoires ; retard pondéral rattrapé entre le 3<sup>e</sup> et le 6<sup>e</sup> mois ; mortalité de 25 à 50 % en Afrique.</li>
<li><b>Rôles de soins :</b> incubateur ou table chauffante, peau à peau (<b>soins mère kangourou</b>, contact permanent ou intermittent), sonde naso-gastrique, gavage (pousse-seringue pour le gavage continu), oxygène, perfusion, constantes.</li>
<li><b>Critères de sortie :</b> bonne succion, prise de poids régulière, température normale, respiration et coloration normales, fréquence cardiaque normale, urines et selles normales, ne vomit pas.</li>
<li><b>Hypotrophe :</b> nouveau-né à terme de poids inférieur à 2 500 g ; harmonieux (poids, taille et PC anormaux) ou dysharmonieux (taille et PC normaux, poids anormal).</li>
<li>Fer à J8 de vie pour le prématuré et l'hypotrophe.</li>
</ul>

<h3>6. Infection bactérienne du nouveau-né</h3>
<table>
<tr><th></th><th>Précoce (materno-fœtale)</th><th>Tardive (post-natale)</th></tr>
<tr><td>Début</td><td>7 jours de vie ou moins</td><td>Plus de 7 jours</td></tr>
<tr><td>Germe</td><td>Streptocoque B</td><td>Staphylocoque doré</td></tr>
<tr><td>Contamination</td><td>Voie basse (surtout), voie hématogène</td><td>Mains sales, gestes septiques, soins du cordon</td></tr>
<tr><td>Traitement</td><td>Amoxicilline ou ampicilline + aminoside (gentamicine, nétilmicine)</td><td>Ceftriaxone ou céfotaxime + aminoside</td></tr>
</table>
<p>Examen de certitude : l'hémoculture.</p>

<h3>7. Maladie hémorragique du nouveau-né</h3>
<ul>
<li>Saignement par déficit en <b>vitamine K1</b> ou en facteurs vitamine K dépendants (II, VII, IX, X). Fréquence : 1 à 2 cas pour 100 naissances ; pic entre J2 et J3, rare après J10.</li>
<li><b>Facteurs favorisants :</b> race noire, grossesse difficile, prématurité, allaitement maternel exclusif.</li>
<li><b>Manifestations :</b> méléna, saignements. <b>Examen de certitude :</b> temps de Quick (TP) et TCK.</li>
<li><b>Prévention :</b> poids supérieur ou égal à 1 500 g : vitamine K1 1 mg en IM ; poids inférieur à 1 500 g : 0,5 mg en IM. <b>Curatif :</b> 10 mg de vitamine K1 en IV, quel que soit le poids.</li>
</ul>

<h3>8. Allaitement maternel</h3>
<ul>
<li><b>Allaitement exclusif :</b> lait maternel seul de 0 à 6 mois, sans eau ni jus (23 % en Côte d'Ivoire). <b>Prépondérant :</b> lait maternel plus eau ou jus. <b>Mixte :</b> sein plus biberon. <b>Mise au sein précoce :</b> dans la première heure de vie (36 % en Côte d'Ivoire).</li>
<li><b>Prolactine :</b> hypophyse antérieure ; agit sur les cellules épithéliales des acini (production du lait) ; stimulée par la succion du mamelon.</li>
<li><b>Ocytocine :</b> hypophyse postérieure ; agit sur les cellules myoépithéliales (éjection du lait) ; stimulée par la succion, la vue du bébé, le son de sa voix et ses pleurs ; bloquée par l'anxiété, la douleur et le manque de confiance. Elle favorise aussi la contraction utérine.</li>
<li><b>Types de lait :</b> colostrum (J0 à J7, riche en IgA, facteurs de croissance, cytokines, oligosaccharides ; il faut le donner) ; lait de transition (J7 à J21, lipides, lactose, protéines) ; lait mature (après J21, lipides, protéines, glucides, eau).</li>
<li><b>Lait de mère comparé au lait de vache :</b> stérile, sans bactéries pathogènes, avec anticorps et probiotiques, mieux adapté en protéines et en fer.</li>
<li><b>Avantages :</b> croissance harmonieuse, développement cognitif, prévention des maladies, attachement mère-enfant, diminution du risque de décès pour l'enfant et la mère, économique.</li>
<li><b>Modalités OMS :</b> 0 à 6 mois : exclusif ; 6 à 12 mois : sein plus compléments ; 12 à 24 mois : sein plus repas familial ; sevrage définitif à 24 mois.</li>
<li><b>Mère allaitante :</b> 3 repas équilibrés par jour, 1,5 à 2 litres d'eau en dehors des repas, arrêt des stupéfiants (alcool, tabac, drogue). <b>Surveillance :</b> 8 à 9 tétées par jour, prise de poids de 25 à 30 g par jour, selles jaune d'or d'aspect œuf brouillé.</li>
<li><b>Bon positionnement :</b> dos du bébé sur l'avant-bras, nuque dans le pli du coude, ventre contre celui de la mère, bouche au contact du mamelon. <b>Bonne prise du sein :</b> bouche grande ouverte prenant largement l'aréole, menton contre le sein, lèvre inférieure éversée. <b>Tétée efficace :</b> succion lente et profonde entrecoupée de pauses, on entend le bébé déglutir.</li>
<li><b>Problèmes :</b> hypogalactie (soutien psychologique), travail de la mère (tire-lait), engorgement (bain d'eau tiède, antalgique), crevasses (antiseptique, antalgique), abcès (antibiotique après avis médical).</li>
<li><b>VIH :</b> poursuivre l'allaitement si la mère est sous trithérapie ; sevrage à 12 mois si l'enfant n'est pas infecté, à 24 mois sinon.</li>
<li><b>Facteurs de déclin :</b> formules infantiles et leur promotion, activité professionnelle de la mère, manque de soutien psychologique, préoccupation esthétique (régime pour maigrir), retard de la montée laiteuse.</li>
<li><b>Hôpitaux amis des bébés (IHAB) :</b> politique écrite, formation du personnel, information des gestantes, mise au sein dans la première heure, conseils si séparation, allaitement exclusif, bébé avec sa mère 24 h sur 24, allaitement à la demande, ni tétine ni sucette, associations de soutien.</li>
</ul>

<h3>9. Croissance de l'enfant</h3>
<ul>
<li><b>Croissance quantitative (somatique) :</b> augmentation de la taille, du poids et du volume. <b>Qualitative (maturation) :</b> perfectionnement des structures et des fonctions. <b>Facteurs :</b> hérédité, hormones, environnement.</li>
<li><b>Instruments :</b> poids (pèse-bébé avant 2 ans, pèse-personne après) ; taille (toise horizontale avant 2 ans, verticale après) ; périmètre crânien et périmètre brachial (mètre ruban). <b>Maturation :</b> fontanelles, éruption dentaire, points d'ossification.</li>
</ul>
<table>
<tr><th>Âge</th><th>Poids</th><th>Taille</th><th>PC</th></tr>
<tr><td>Naissance</td><td>3 kg</td><td>50 cm</td><td>35 cm</td></tr>
<tr><td>3 mois</td><td>6 kg (poids de naissance × 2)</td><td>65 cm</td><td>41 cm</td></tr>
<tr><td>9 mois</td><td>8 kg</td><td>70 cm</td><td>45 cm (surface corporelle × 2)</td></tr>
<tr><td>12 mois</td><td>9 kg (× 3)</td><td>75 cm</td><td>47 cm</td></tr>
<tr><td>24 mois</td><td>12 kg (× 4)</td><td>85 cm</td><td>48 cm</td></tr>
<tr><td>3 ans</td><td>14 kg</td><td>95 cm</td><td>49 cm (surface corporelle × 3)</td></tr>
<tr><td>4 ans</td><td>16 kg</td><td>100 cm (taille de naissance × 2)</td><td>51 cm</td></tr>
<tr><td>7 ans</td><td>22 kg</td><td>120 cm</td><td>52 cm</td></tr>
<tr><td>10 ans</td><td>30 kg</td><td>135 cm</td><td>53 cm</td></tr>
</table>
<ul>
<li>Après 3 ans, l'enfant prend environ 2 kg par an. Repère : <b>PC = taille/2 + 10</b>.</li>
<li><b>Fontanelle postérieure :</b> fermée à 2-3 mois. <b>Antérieure :</b> fermée à 18 mois. <b>Retard d'éruption dentaire :</b> aucune dent après 15 mois.</li>
<li>Périmètre brachial : un enfant de plus d'un an dont le PB est inférieur à 12 cm est malnutri.</li>
</ul>

<h3>10. Développement psychomoteur (DPM)</h3>
<p>Évalué sur quatre plans : <b>motricité, préhension, langage, compréhension</b>. Facteurs favorables : hérédité, intégrité du système nerveux, environnement. Facteurs limitants : maladies héréditaires, atteintes du système nerveux, ictère nucléaire, maladies métaboliques.</p>
<table>
<tr><th>Âge</th><th>Acquisitions</th></tr>
<tr><td>0-1 mois</td><td>Quadriflexion, réflexe de grasping, attentif au son, sourire aux anges</td></tr>
<tr><td>3 mois</td><td>Tient la tête dans l'axe ; disparition des réflexes archaïques ; émet des sons ; sourire réponse</td></tr>
<tr><td>6 mois</td><td>Assis en trépied ; porte l'objet à la bouche ; lallation ; tend les bras pour être pris</td></tr>
<tr><td>9 mois</td><td>Marche à 4 pattes, debout avec appui ; pince pouce-index ; « da-da, ba-ba » ; fait bravo et au revoir ; peur de l'étranger</td></tr>
<tr><td>12 mois</td><td>Marche avec appui ; introduit et retire un objet d'une boîte ; dit « papa, maman » ; pointe du doigt</td></tr>
<tr><td>15 mois</td><td>Marche seule ; gribouille ; tient la cuillère ; demande les objets en les montrant du doigt</td></tr>
<tr><td>18 mois</td><td>Monte un escalier en se tenant à la rampe ; tape le pied dans le ballon ; place le triangle, le rond, le carré après démonstration ; vocabulaire de 10 à 20 mots ; imite les adultes dans les tâches ménagères</td></tr>
<tr><td>24 mois</td><td>Monte et descend seul l'escalier ; court vite, saute, danse, tourne en cercle ; mange seul ; tour de 6 cubes ; copie un rond ; réunit 2 ou 3 mots ; explosion du vocabulaire ; exécute des ordres en 2 parties</td></tr>
<tr><td>3 ans</td><td>Monte et descend les escaliers comme un adulte ; s'habille seul (aide pour boutons et fermetures) ; âge du « pourquoi ? » et du « non » ; dit son nom et son âge ; connaît son sexe ; dessine un bonhomme têtard ; propreté diurne et nocturne</td></tr>
<tr><td>4 ans</td><td>Bicyclette sans roulettes ; s'habille seul sauf les lacets ; connaît les couleurs ; copie un carré ; jeux en groupe</td></tr>
<tr><td>6-10 ans</td><td>Lace ses chaussures ; dessine un triangle ; début de l'écriture ; connaît sa droite et sa gauche, son adresse</td></tr>
</table>

<h3>11. Diarrhée aiguë et déshydratation</h3>
<ul>
<li><b>Diarrhée :</b> au moins 3 selles molles ou liquides par 24 h. <b>Aiguë :</b> moins de 14 jours ; <b>persistante :</b> 14 à 21 jours ; <b>chronique :</b> plus de 21 jours.</li>
<li><b>Causes :</b> infectieuses (virus, surtout le <b>rotavirus</b> ; bactéries, surtout la shigelle) ; non infectieuses (stress, erreur diététique, antibiotiques). Une selle semi-liquide chez l'enfant nourri au sein n'est pas une diarrhée. <b>On n'impose pas la diète.</b></li>
<li><b>Problèmes :</b> déshydratation, dénutrition, hygiène.</li>
</ul>
<table>
<tr><th></th><th>Plan A (pas de signes)</th><th>Plan B (signes évidents)</th><th>Plan C (signes sévères)</th></tr>
<tr><td>État général</td><td>Normal</td><td>Agité, irritable</td><td>Léthargique ou inconscient</td></tr>
<tr><td>Yeux / larmes</td><td>Normaux / présentes</td><td>Enfoncés / absentes</td><td>Très enfoncés / absentes</td></tr>
<tr><td>Bouche</td><td>Humide</td><td>Sèche</td><td>Très sèche</td></tr>
<tr><td>Soif</td><td>Pas de soif</td><td>Boit avec avidité</td><td>Incapable de boire</td></tr>
<tr><td>Pli cutané</td><td>S'efface rapidement</td><td>S'efface lentement</td><td>S'efface très lentement</td></tr>
</table>
<ul>
<li><b>Plan A :</b> moins de 24 mois : 500 ml de SRO par jour (50 à 100 ml après chaque selle) ; 2 à 10 ans : 1 000 ml/jour (100 à 200 ml) ; plus de 10 ans : 2 000 ml/jour, à volonté.</li>
<li><b>Plan B :</b> SRO, <b>75 ml/kg en 4 heures</b>, puis réévaluation (retour au plan A si les signes disparaissent, plan B reconduit s'ils persistent, plan C s'ils s'aggravent). Exemples : 8 kg : 600 ml ; 9 kg : 675 ml.</li>
<li><b>Plan C (voie parentérale) :</b> moins d'un an : 30 ml/kg en 1 h puis 70 ml/kg en 5 h ; plus d'un an : 30 ml/kg en 30 min puis 70 ml/kg en 2 h 30. Soluté idéal : <b>Ringer lactate</b> ; à défaut, sérum glucosé isotonique à 5 %. Exemple (9 kg, moins d'un an) : 270 ml puis 630 ml, soit 900 ml.</li>
<li>Poursuivre l'alimentation. <b>Zinc</b> comprimé à 20 mg pendant 10 jours : 0 à 6 mois : un demi-comprimé (10 mg) par jour ; 6 mois à 5 ans : 1 comprimé (20 mg) par jour.</li>
</ul>

<h3>12. Vomissements du nourrisson</h3>
<ul>
<li>Rejet actif par la bouche d'une partie ou de la totalité du contenu gastrique, avec participation du diaphragme. À ne pas confondre avec la régurgitation, le mérycisme et la vomique.</li>
<li><b>Causes :</b> aiguës (erreur diététique, infections…) ou habituelles et chroniques (par exemple sténose hypertrophique du pylore).</li>
<li><b>Complications :</b> déshydratation, dénutrition, fausse route (risque d'asphyxie).</li>
<li>Les anti-vomissements (métopimazine, Vogalène) peuvent provoquer un <b>syndrome extrapyramidal</b> : protrusion de la langue, déviation des yeux, hypertonie.</li>
</ul>

<h3>13. Fièvre de l'enfant</h3>
<ul>
<li><b>Définition :</b> température rectale supérieure à 37 °C le matin et 38 °C le soir. Température normale : 36 à 37,5 °C. Thermomètre électronique recommandé (pas de mercure). Hyperthermie : plus de 40 °C.</li>
<li><b>Complications :</b> convulsion, déshydratation, hyperthermie majeure.</li>
<li><b>Classification :</b> aiguë (moins de 8 jours), prolongée (8 à 30 jours), chronique (plus de 30 jours) ; modérée (37 à 38 °C), élevée (38 à 40 °C).</li>
<li><b>Bonne tolérance :</b> faciès vultueux, cri vigoureux, téguments chauds et érythrosiques, TRC inférieur à 3 secondes, conscience normale. <b>Mauvaise tolérance :</b> pâleur, cyanose péribuccale, cri plaintif, marbrures, extrémités froides, TRC supérieur à 3 secondes, conscience altérée.</li>
<li><b>Moyens physiques (rôle propre) :</b> déshabiller l'enfant, éviter de le couvrir, aérer la pièce, le faire boire souvent.</li>
<li><b>Médicaments (rôle délégué) :</b> <b>paracétamol</b> 60 mg/kg/jour en 3-4 prises (15 mg/kg par prise), voie orale, IV ou rectale ; ibuprofène 7 à 10 mg/kg en 3 prises ; aspirine 50 à 60 mg/kg en 3 prises. Le paracétamol est le plus recommandé ; ibuprofène et aspirine aggravent la varicelle.</li>
</ul>

<h3>14. Paludisme de l'enfant</h3>
<ul>
<li>Maladie parasitaire des globules rouges due à <i>Plasmodium falciparum</i>, transmise par l'anophèle femelle ; touche surtout les enfants de moins de 5 ans.</li>
<li><b>Paludisme simple :</b> fièvre, frissons, courbatures, céphalées, vomissements, diarrhée.</li>
<li><b>Paludisme grave :</b> modification du comportement, confusion, somnolence, convulsions répétées, coma, prostration, ictère, détresse respiratoire, état de choc ; biologie : hypoglycémie, Hb inférieure à 7 g/dl, acidose, hyperlactatémie, hémoglobinurie, hyperparasitémie, insuffisance rénale. Formes les plus fréquentes : neurologique et anémique.</li>
<li><b>Diagnostic :</b> goutte épaisse et frottis sanguin ; à défaut TDR. <b>Traitement simple :</b> artéméther + luméfantrine ou artésunate + amodiaquine. <b>Grave (hôpital) :</b> artésunate injectable, artéméther injectable ou quinine en perfusion.</li>
</ul>

<h3>15. Anémie de l'enfant</h3>
<ul>
<li>Hémoglobine inférieure à 11 g/dl. Modérée : 7 à 11 g/dl ; sévère : inférieure à 7 g/dl. Aiguë : 14 jours ou moins ; chronique : plus de 14 jours.</li>
<li><b>Microcytaire hypochrome :</b> carence en fer. <b>Normocytaire normochrome :</b> paludisme. <b>Macrocytaire normochrome :</b> carence en acide folique (vitamine B9).</li>
<li>Débit de transfusion : quantité (ml) / (4 × heures) = gouttes par minute. La drépanocytose est une cause d'anémie.</li>
</ul>

<h3>16. Malnutrition de l'enfant</h3>
<table>
<tr><th></th><th>Kwashiorkor</th><th>Marasme</th></tr>
<tr><td>Âge / début</td><td>Pic de 18 à 36 mois ; début brutal (sevrage brutal ou maladie récente)</td><td>Pic vers 12 mois ; début progressif (mauvaise diversification, nutriments insuffisants en quantité et en qualité)</td></tr>
<tr><td>Signes</td><td>Anorexie, enfant grognon, bouffissure du visage, œdèmes, ulcérations et desquamations, cheveux roux</td><td>Retard pondéral, fonte graisseuse et musculaire (« flotte dans sa peau »), faciès de vieillard, alopécie, amaigrissement, appétit conservé</td></tr>
</table>
<ul>
<li>Le <b>Z-score</b> sert à diagnostiquer la malnutrition (poids/taille : aiguë ; taille/âge : chronique). Problèmes : hypoglycémie, déshydratation (50 à 80 % des décès).</li>
<li><b>Réhabilitation :</b> UNT (malnutrition aiguë sévère avec complications) ; UNTA (sévère sans complications) ; CNS (malnutrition aiguë modérée).</li>
<li><b>Mélanges INSP d'Adjamé :</b> mélange I : 6 volumes de lait entier en poudre + 2 de sucre + 1 d'huile ; mélange II : 5 de lait + 2 de farine + 2 de sucre + 1 d'huile (nécessite une cuisson). <b>F75 :</b> 410 g dans 2 L d'eau, phase d'initiation. <b>F100 :</b> 456 g dans 2,7 L, phase de récupération.</li>
</ul>

<h3>17. Infections respiratoires aiguës (IRA)</h3>
<ul>
<li>2<sup>e</sup> cause de consultation et de décès après le paludisme en Côte d'Ivoire ; surtout avant 5 ans. <b>Avant 3 ans : essentiellement virales (pas d'antibiotique) ; après 3 ans : souvent bactériennes.</b> Prévention : hygiène et vaccination. Facteurs de gravité : âge inférieur à 2 mois, prématurité, immunodépression. Fumée de bois : facteur favorisant.</li>
<li>Virus : coronavirus, virus respiratoire syncitial (VRS), para-influenzae, rhinovirus. Bactéries : pneumocoque, <i>Haemophilus influenzae</i>, mycoplasme.</li>
</ul>
<table>
<tr><th>Maladie</th><th>Âge</th><th>Germe</th><th>Signes</th><th>Antibiotique</th></tr>
<tr><td>Rhinopharyngite (haut)</td><td>6 mois à 3 ans</td><td>VRS</td><td>Rhume, fièvre, obstruction nasale, mal de gorge, ganglions du cou. Complications : otite, bronchite</td><td>Non</td></tr>
<tr><td>Angine (haut)</td><td>4 à 10 ans</td><td>Streptocoque A</td><td>Fièvre, vomissements, mal de gorge, enduit blanchâtre. Complication : RAA</td><td>Oui</td></tr>
<tr><td>Otite moyenne aiguë (haut)</td><td>8 mois à 3 ans</td><td>Pneumocoque</td><td>Fièvre, pleurs incessants, otalgie, otorrhée, tympan rouge bombé ou perforé. Complication : mastoïdite</td><td>Oui</td></tr>
<tr><td>Bronchite aiguë (bas)</td><td>Nourrisson et grand enfant</td><td>VRS</td><td>Toux quinteuse ou grasse</td><td>Non</td></tr>
<tr><td>Bronchiolite (bas)</td><td>1 mois à 2 ans</td><td>VRS</td><td>Toux, respiration sifflante, fièvre, rhume</td><td>Non</td></tr>
<tr><td>Pneumonie (bas)</td><td>Après 5 ans</td><td>Pneumocoque (drépanocytose : terrain favorisant)</td><td>Toux, douleur thoracique, dyspnée, fièvre, perlèche labiale, syndrome de condensation. Bilan : radio du thorax, CRP, hémogramme</td><td>Oui</td></tr>
</table>
<p>Atteinte de la <b>zone de conduction</b> (rhinopharyngite, angine, otite, sinusite, laryngite) : encombrement, rôle de l'IDE : dégager les voies respiratoires. Atteinte de la <b>zone d'échange</b> (pneumonie, asthme, bronchite, bronchiolite) : perturbation des échanges gazeux.</p>

<h3>18. Convulsions de l'enfant</h3>
<ul>
<li><b>Crise convulsive :</b> contraction involontaire des muscles par hyperexcitabilité de neurones cérébraux. <b>État de mal convulsif :</b> crise de plus de 30 minutes ou crises subintrantes sans reprise de conscience. <b>Épilepsie :</b> récurrence de crises. Phases : tonique puis clonique.</li>
<li><b>Traitement :</b> diazépam (Valium) <b>0,5 mg/kg en intra-rectale</b>.</li>
</ul>

<h3>19. PCIMEN</h3>
<ul>
<li>Prise en charge intégrée des maladies de l'enfant et du nouveau-né : stratégie de l'OMS et de l'UNICEF (arbre décisionnel) pour réduire la mortalité et la gravité des maladies.</li>
<li><b>Maladies cibles :</b> malnutrition, pneumonie, diarrhée aiguë, rougeole, paludisme, infections néonatales, VIH/sida.</li>
<li><b>Directives :</b> évaluer l'enfant (signes de danger, symptômes principaux, état nutritionnel, état vaccinal), le classer (code couleur vert, jaune, rose), déterminer le traitement, traiter, conseiller la mère. Hospitalisation ou non, selon la classification.</li>
</ul>

<h3>20. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>FC normale du nouveau-né : 100 à 120/min</td><td>100 à 160/min</td></tr>
<tr><td>Poids du nouveau-né à terme : 2 500 à 3 500 g</td><td>2 500 à 4 000 g</td></tr>
<tr><td>Vitamine K1 préventive : 5 mg</td><td>1 mg en IM (0,5 mg si moins de 1 500 g)</td></tr>
<tr><td>Décider de la réanimation avec l'APGAR</td><td>La minute d'or</td></tr>
<tr><td>Gravité de la détresse respiratoire : APGAR</td><td>Score de Silverman</td></tr>
<tr><td>Infection tardive : <i>E. coli</i></td><td>Staphylocoque doré (précoce : streptocoque B)</td></tr>
<tr><td>Mastoïdite : complication de la bronchiolite</td><td>Complication de l'otite moyenne aiguë</td></tr>
<tr><td>Antibiotique dans la rhinopharyngite</td><td>Aucun avant 3 ans</td></tr>
<tr><td>Retard dentaire dès 12 mois</td><td>Aucune dent après 15 mois</td></tr>
<tr><td>Colostrum impropre à la consommation</td><td>Il protège le nouveau-né</td></tr>
<tr><td>Ocytocine produite par les acini</td><td>Posthypophyse, agit sur les cellules myoépithéliales</td></tr>
<tr><td>VIH : contre-indication absolue de l'allaitement</td><td>Poursuivre si la mère est sous trithérapie</td></tr>
<tr><td>Sein + eau = allaitement mixte</td><td>Prépondérant (mixte : sein + biberon)</td></tr>
<tr><td>F75 pour le prématuré malade</td><td>Lait thérapeutique de la malnutrition sévère</td></tr>
<tr><td>Âge du « pourquoi ? » : 4 ans</td><td>3 ans</td></tr>
</table>
` },

"cel": { html: `
<div class="retenir"><b>Fiche élaborée d'après le cours fourni, les exercices corrigés du site et les notions classiques d'anatomie et d'histologie.</b> Si votre cours officiel indique d'autres valeurs, c'est lui qui fait foi.</div>

<h3>1. De l'atome à l'organisme : les niveaux d'organisation</h3>
<p>Le corps humain est construit comme une poupée russe : <b>molécules → organites → cellules → tissus → organes → appareils (ou systèmes) → organisme</b>. La <b>cytologie</b> est la science qui étudie la cellule sous toutes ses formes ; l'<b>histologie</b> étudie les tissus.</p>
<ul>
<li>La <b>cellule</b> est la plus petite unité vivante autonome : elle fait son métabolisme, grandit, se reproduit et réagit à son milieu.</li>
<li>Les <b>protozoaires</b> sont constitués d'une seule cellule (êtres unicellulaires) ; l'être humain est <b>pluricellulaire</b>. Une cellule isolée de l'organisme ne fonctionne plus de façon autonome : elle dépend des autres.</li>
<li><b>Taille :</b> la plupart des cellules mesurent 10 à 30 µm, donc invisibles à l'œil nu. Quelques-unes dépassent 2 cm (ovocyte d'oiseau, fibre musculaire, neurone avec son prolongement). Un neurone « long d'un mètre » ne se voit pas à l'œil nu : seul son prolongement (l'axone) est long, le corps cellulaire reste microscopique.</li>
<li><b>Durée de vie :</b> toute cellule a une durée de vie limitée ; aucune ne vit indéfiniment.</li>
</ul>

<h3>2. Cellule procaryote et cellule eucaryote</h3>
<table>
<tr><th></th><th>Procaryote</th><th>Eucaryote</th></tr>
<tr><td>Noyau</td><td>Pas de noyau délimité par une membrane ; un cytoplasme est présent</td><td>Vrai noyau, entouré d'une enveloppe nucléaire, contenant l'ADN</td></tr>
<tr><td>Organites membraneux</td><td>Pas de mitochondries, de réticulum endoplasmique ni d'appareil de Golgi</td><td>Mitochondries, réticulum, Golgi, lysosomes…</td></tr>
<tr><td>Multiplication</td><td>Division directe (scissiparité, amitose), sans fuseau</td><td>Mitose (cellules du corps) ou méiose (cellules sexuelles)</td></tr>
<tr><td>Exemple</td><td>Bactéries</td><td>Cellules humaines</td></tr>
</table>
<p><b>À retenir :</b> le noyau ne joue donc aucun rôle chez une cellule procaryote, puisqu'elle n'en a pas. Les chromosomes d'une cellule eucaryote se trouvent dans le noyau.</p>

<h3>3. Structure de la cellule eucaryote</h3>
<p><b>La membrane plasmique (cytoplasmique)</b> est la « douane » de la cellule : elle la sépare du milieu extérieur et régule les échanges grâce à sa perméabilité sélective. Elle est faite d'une <b>bicouche de phospholipides</b> parsemée de protéines et de récepteurs. À ne pas confondre avec le <b>cytoplasme</b>, qui est le milieu (hyaloplasme) dans lequel baignent les organites. Le <b>cytosquelette</b> (microfilaments, filaments intermédiaires, microtubules) maintient la forme de la cellule et participe à sa mobilité et au transport interne.</p>
<p><b>Les échanges à travers la membrane :</b></p>
<ul>
<li><b>Passifs</b> (sans énergie) : diffusion, osmose, diffusion facilitée.</li>
<li><b>Actifs</b> (avec énergie, ATP) : pompes comme la pompe Na<sup>+</sup>/K<sup>+</sup>, et l'endocytose avec la <b>phagocytose</b> (englobement de particules solides) et la <b>pinocytose</b> (ingestion de gouttelettes liquides) ; l'exocytose rejette des substances.</li>
</ul>
<p><b>Le noyau</b> est le centre de commande. Il contient la <b>chromatine</b> (ADN et protéines), qui se condense en <b>chromosomes</b> lors de la division, et le nucléole. L'être humain possède <b>46 chromosomes, soit 23 paires</b> (le caryotype), dont une paire de chromosomes sexuels (XX chez la femme, XY chez l'homme).</p>
<ul>
<li><b>ADN</b> (acide désoxyribonucléique) : support de l'information génétique, en double hélice.</li>
<li><b>ARN</b> (acide ribonucléique) : copie de travail du gène, intermédiaire de la synthèse protéique.</li>
</ul>
<table>
<tr><th>Organite</th><th>Rôle</th></tr>
<tr><td><b>Mitochondrie</b></td><td>« Centrale énergétique » : produit l'ATP par la respiration cellulaire</td></tr>
<tr><td><b>Ribosomes</b></td><td>Fabriquent les protéines</td></tr>
<tr><td><b>Réticulum endoplasmique</b></td><td>Rugueux (avec ribosomes) : protéines à exporter ; lisse : lipides et détoxication</td></tr>
<tr><td><b>Appareil de Golgi</b></td><td>Maturation, tri, emballage et sécrétion des protéines</td></tr>
<tr><td><b>Lysosomes</b></td><td>Enzymes digestives : détruisent déchets et particules ingérées</td></tr>
<tr><td><b>Centrosome</b></td><td>Organise les microtubules et le fuseau de la division</td></tr>
</table>
<p>La chronaxie (notion de physiologie) et l'axone (prolongement du neurone) ne sont pas des organites.</p>

<h3>4. Le métabolisme cellulaire</h3>
<ul>
<li><b>Anabolisme :</b> réactions de construction (synthèse de matière vivante), qui consomment de l'énergie.</li>
<li><b>Catabolisme :</b> réactions de dégradation des nutriments, qui libèrent de l'énergie. La cellule ne dégrade pas la matière par l'anabolisme.</li>
<li>Métabolisme = anabolisme + catabolisme.</li>
<li><b>Cellules aérobies :</b> utilisent l'oxygène du milieu extérieur ; elles dégradent complètement le glucose en CO<sub>2</sub> + eau et produisent beaucoup d'ATP. <b>Cellules anaérobies :</b> vivent sans oxygène. Seules les aérobies consomment de l'oxygène.</li>
</ul>

<h3>5. La division cellulaire</h3>
<ul>
<li><b>Mitose :</b> la cellule mère (46 chromosomes) donne deux cellules filles <b>identiques</b> à 46 chromosomes. Elle assure croissance, renouvellement et réparation. Après l'interphase (G1, S où l'ADN est copié, G2) viennent : <b>prophase</b> (la chromatine se condense, l'enveloppe nucléaire disparaît), <b>métaphase</b> (chromosomes alignés sur la plaque équatoriale), <b>anaphase</b> (les chromatides sœurs migrent vers les pôles), <b>télophase</b> (reformation de deux noyaux) puis <b>cytodiérèse</b> (division du cytoplasme).</li>
<li><b>Méiose :</b> elle forme les cellules sexuelles (gamètes) et fait passer de 46 à <b>23 chromosomes</b> (et non « 23 paires ») : c'est la division réductionnelle.</li>
</ul>

<h3>6. Les tissus : définition et grands types</h3>
<p>Un <b>tissu</b> est un ensemble de cellules semblables ou différenciées qui concourent à la même fonction. Un tissu est <b>simple</b> s'il est formé d'un seul type cellulaire et <b>composé</b> s'il en associe plusieurs. Un organe associe plusieurs tissus. Les grands types : <b>épithélial, conjonctif, musculaire, nerveux</b>. Les tissus conjonctif, osseux et sanguin sont dits « à substance conjonctive », car leurs cellules sont séparées par beaucoup de substance intercellulaire.</p>

<h3>7. Le tissu épithélial</h3>
<p>Cellules <b>toujours jointives</b>, sans substance intercellulaire, posées sur une lame basale.</p>
<ul>
<li><b>Épithélium de revêtement :</b> tapisse la surface du corps et les cavités ; rôle de barrière, protection, absorption.
<ul>
<li>Selon la <b>forme</b> des cellules : pavimenteuses (plates), <b>cubiques</b>, prismatiques.</li>
<li>Selon le <b>nombre de couches</b> : <b>simple</b> (une couche, par exemple cubique simple dans les tubules rénaux) ou <b>stratifié</b> (au moins deux couches, et non trois).</li>
<li>Spécialisations : cils vibratiles (trachée), microvillosités (intestin), kératine (épiderme).</li>
</ul></li>
<li><b>Épithélium glandulaire :</b>
<ul>
<li><b>Glandes exocrines :</b> déversent leur produit par un <b>canal excréteur</b> (sudoripares, sébacées, salivaires, glandes tubuleuses). Les glandes sébacées déversent le sébum dans le follicule pileux ; ce sont des glandes qui possèdent un canal, mais elles ne sont pas des canaux.</li>
<li><b>Glandes endocrines :</b> sans canal, elles déversent leurs <b>hormones</b> dans le sang (thyroïde, surrénales, hypophyse). Une hormone est un messager chimique.</li>
<li><b>Glandes amphicrines (mixtes) :</b> à la fois exocrines et endocrines, comme le <b>pancréas</b>.</li>
</ul></li>
</ul>

<h3>8. Le tissu conjonctif</h3>
<p>C'est le tissu le plus abondant. Il est formé de <b>cellules</b> disjointes, de <b>fibres</b> (collagène, élastine) et d'une <b>substance fondamentale</b> ; il ne contient pas d'« organes ». Ses rôles : soutien, protection, remplissage, liaison, réserve.</p>
<ul>
<li><b>Conjonctif lâche</b> (aréolaire) : remplit les espaces entre les organes. <b>Conjonctif dense</b> : riche en fibres, résistant (tendons, ligaments). Le tissu aréolaire est donc un conjonctif lâche, non dense.</li>
<li><b>Tissu adipeux :</b> stocke les graisses, protège et amortit les organes.</li>
<li><b>Tissu cartilagineux :</b> soutien semi-rigide, cellules appelées chondrocytes.</li>
<li><b>Tissu osseux :</b> matrice calcifiée continuellement remaniée.</li>
<li><b>Tissu sanguin :</b> conjonctif liquide dont la matrice est le plasma (le sérum est du plasma sans fibrinogène).</li>
</ul>

<h3>9. Les tissus musculaire et nerveux</h3>
<ul>
<li><b>Trois</b> types de tissu musculaire, formés de myocytes : strié squelettique (volontaire), strié cardiaque et lisse (involontaires). Il n'en existe pas quatre.</li>
<li><b>Tissu nerveux :</b> neurones (corps cellulaire, dendrites, axone) et cellules de soutien (névroglie). Il permet la communication entre les régions du corps et des réponses adaptées aux informations reçues.</li>
</ul>

<h3>10. Les membranes et la peau</h3>
<table>
<tr><th>Membrane</th><th>Siège</th><th>Exemples</th></tr>
<tr><td><b>Muqueuse</b></td><td>Tapisse l'intérieur des organes creux et des orifices en rapport avec l'extérieur ; produit du mucus</td><td>Bouche, estomac, intestin, voies respiratoires</td></tr>
<tr><td><b>Séreuse</b></td><td>Tapisse les cavités closes et enveloppe les organes ; deux feuillets, pariétal et viscéral, avec un liquide séreux</td><td>Plèvre, péricarde, péritoine</td></tr>
</table>
<p>Séreuses et muqueuses sont toutes deux des membranes, mais leur structure et leur origine diffèrent. La <b>peau</b> (épiderme, derme, hypoderme) assure protection, thermorégulation, sensibilité, sécrétion et excrétion (sueur, sébum), synthèse de la vitamine D et cicatrisation.</p>

<h3>11. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>Épithélium stratifié : au moins 3 couches</td><td>Au moins 2 couches</td></tr>
<tr><td>Les séreuses enveloppent certains organes, les muqueuses tapissent les cavités</td><td>Muqueuses : organes creux ; séreuses : cavités closes et enveloppe des organes</td></tr>
<tr><td>La membrane est le milieu où baignent les organites</td><td>C'est le cytoplasme</td></tr>
<tr><td>Cellule procaryote : noyau fondamental</td><td>Pas de noyau délimité</td></tr>
<tr><td>Dégradation par l'anabolisme</td><td>Dégradation = catabolisme</td></tr>
<tr><td>Anaérobies et aérobies consomment toutes de l'oxygène</td><td>Seules les aérobies</td></tr>
<tr><td>Méiose : 23 paires de chromosomes</td><td>23 chromosomes</td></tr>
<tr><td>Quatre types de tissus musculaires</td><td>Trois</td></tr>
<tr><td>Tissu aréolaire : conjonctif dense</td><td>Conjonctif lâche</td></tr>
<tr><td>Pancréas : activité unique</td><td>Exocrine et endocrine</td></tr>
</table>
` },

"loc": { html: `
<div class="retenir"><b>Fiche élaborée d'après le cours fourni, les exercices corrigés du site (dont les schémas numérotés) et les notions classiques d'ostéologie, d'arthrologie et de myologie.</b> Si votre cours officiel indique d'autres valeurs, c'est lui qui fait foi.</div>

<h3>1. Rôles de l'appareil locomoteur</h3>
<p>L'appareil locomoteur assure la <b>statique</b> (tenir debout), le <b>maintien</b> et la <b>motricité</b> du corps. Il regroupe le système osseux (squelette), le système articulaire et le système musculaire : les os sont les leviers, les articulations les charnières, les muscles les moteurs. Le squelette protège aussi les organes (crâne, thorax), fabrique les cellules du sang (moelle osseuse rouge) et stocke le calcium et le phosphore.</p>

<h3>2. Vocabulaire : plans et positions</h3>
<ul>
<li><b>Position anatomique :</b> debout, de face, paumes tournées vers l'avant.</li>
<li><b>Plan frontal (coronal) :</b> sépare l'avant de l'arrière (vue de face du squelette) ; <b>plan sagittal :</b> sépare la droite de la gauche ; <b>plan transversal :</b> sépare le haut du bas.</li>
<li>Termes de position : antérieur/postérieur, médial/latéral, proximal/distal, supérieur/inférieur.</li>
</ul>

<h3>3. Ostéologie : généralités</h3>
<p>Le squelette adulte comporte <b>206 os</b>, répartis entre le <b>squelette axial</b> (crâne, colonne vertébrale, thorax) et le <b>squelette appendiculaire</b> (ceintures et membres).</p>
<ul>
<li><b>Types d'os :</b> longs (fémur, humérus), courts (carpe, tarse), plats (sternum, omoplate, os du crâne), irréguliers (vertèbres).</li>
<li><b>Os long :</b> diaphyse (corps), deux épiphyses (extrémités), cartilage de croissance chez l'enfant, canal médullaire contenant la moelle. L'os est recouvert par le périoste ; sous lui, l'os compact entoure l'os spongieux.</li>
<li><b>Tissu osseux :</b> matrice calcifiée continuellement remaniée par les ostéoblastes (formation), les ostéocytes (entretien) et les ostéoclastes (destruction).</li>
</ul>

<h3>4. Le crâne et la face</h3>
<ul>
<li><b>Boîte crânienne (8 os) :</b> <b>frontal</b>, deux <b>pariétaux</b>, deux <b>temporaux</b>, <b>occipital</b> (percé du foramen magnum), <b>sphénoïde</b> et <b>ethmoïde</b>.</li>
<li><b>Massif facial (14 os) :</b> deux <b>maxillaires</b> (mâchoire supérieure), <b>mandibule</b> (seul os mobile de la tête), deux <b>zygomatiques</b> (pommettes), deux <b>nasaux</b>, deux <b>lacrymaux (unguis)</b>, deux palatins, deux cornets inférieurs et le vomer.</li>
<li>Les os du crâne sont réunis par des <b>sutures</b> (coronale, sagittale, lambdoïde). Chez le nouveau-né, les sutures sont séparées par les <b>fontanelles</b> : la postérieure se ferme à 2-3 mois, l'antérieure à 18 mois.</li>
</ul>

<h3>5. La colonne vertébrale et le thorax</h3>
<table>
<tr><th>Région</th><th>Nombre</th><th>Remarques</th></tr>
<tr><td>Cervicale</td><td>7</td><td>C1 = atlas, C2 = axis (rotation de la tête)</td></tr>
<tr><td>Thoracique (dorsale)</td><td>12</td><td>Articulées avec les côtes</td></tr>
<tr><td>Lombaire</td><td>5</td><td>Les plus volumineuses</td></tr>
<tr><td>Sacrum</td><td>5 soudées</td><td>Forme la paroi postérieure du bassin</td></tr>
<tr><td>Coccyx</td><td>4 soudées</td><td>Extrémité inférieure de la colonne</td></tr>
</table>
<ul>
<li>Une <b>vertèbre type</b> comprend un corps, un arc postérieur et un trou vertébral qui, empilés, forment le canal où passe la moelle épinière. Entre les corps vertébraux se trouvent les <b>disques intervertébraux</b> (anneau fibreux et noyau pulpeux, d'où la hernie discale).</li>
<li><b>Courbures :</b> lordose cervicale, cyphose thoracique, lordose lombaire, cyphose sacrée.</li>
<li><b>Cage thoracique :</b> 12 vertèbres thoraciques en arrière, 12 paires de <b>côtes</b> sur les côtés (7 vraies, 3 fausses, 2 flottantes) et le <b>sternum</b> en avant, composé du <b>manubrium</b>, du corps et du processus xiphoïde.</li>
</ul>

<h3>6. Le membre supérieur et sa ceinture</h3>
<ul>
<li><b>Ceinture scapulaire :</b> la <b>clavicule</b> (en avant) et l'<b>omoplate</b> ou scapula (en arrière), qui porte l'épine, l'<b>acromion</b> (sommet de l'épaule) et l'<b>apophyse coracoïde</b>.</li>
<li><b>Bras :</b> <b>humérus</b>.</li>
<li><b>Avant-bras :</b> <b>radius</b> (côté externe, côté du pouce) et <b>ulna</b> ou cubitus (côté interne, côté du petit doigt, dont l'olécrane forme la pointe du coude).</li>
<li><b>Main :</b> <b>carpe</b> (8 os du poignet), <b>métacarpe</b> (5 os de la paume), <b>phalanges</b> (14 os des doigts).</li>
</ul>

<h3>7. Le membre inférieur et le bassin</h3>
<ul>
<li><b>Ceinture pelvienne :</b> l'<b>os coxal</b> (iliaque) résulte de la fusion de l'<b>ilion</b> (en haut), de l'<b>ischion</b> (en bas) et du <b>pubis</b> (en avant). Les deux pubis se rejoignent à la <b>symphyse pubienne</b>. Avec le sacrum et le coccyx, ils forment le <b>bassin</b>, plus large et plus évasé chez la femme (accouchement).</li>
<li><b>Cuisse :</b> <b>fémur</b>, l'os le plus long et le plus solide du corps. <b>Genou :</b> <b>rotule</b> (patella), os sésamoïde situé devant l'articulation.</li>
<li><b>Jambe :</b> <b>tibia</b> (interne, porteur du poids) et <b>péroné</b> (fibula, externe, fin).</li>
<li><b>Pied :</b> <b>tarse</b> (7 os dont le talus et le calcanéus), <b>métatarse</b> (5 os), <b>phalanges</b> (14 os des orteils).</li>
</ul>

<h3>8. Arthrologie : les articulations</h3>
<p>Une articulation est la jonction entre deux os ou plus. On les classe selon leur mobilité :</p>
<ul>
<li><b>Synarthroses (immobiles) :</b> sutures du crâne.</li>
<li><b>Amphiarthroses (semi-mobiles) :</b> symphyse pubienne, disques intervertébraux.</li>
<li><b>Diarthroses (mobiles), ou articulations synoviales :</b> les extrémités osseuses, recouvertes de cartilage articulaire, sont enveloppées par une capsule dont la membrane synoviale sécrète le liquide synovial (lubrifiant) ; des ligaments les renforcent.</li>
</ul>
<table>
<tr><th>Type</th><th>Exemples</th><th>Mouvements</th></tr>
<tr><td>Sphéroïde (énarthrose)</td><td>Épaule, hanche</td><td>Dans tous les sens, y compris rotation</td></tr>
<tr><td>Trochléenne (charnière)</td><td>Coude, genou, doigts</td><td>Flexion-extension</td></tr>
<tr><td>Trochoïde (pivot)</td><td>Atlas-axis, radius-ulna</td><td>Rotation</td></tr>
<tr><td>Condylienne</td><td>Poignet</td><td>Flexion, extension, inclinaisons</td></tr>
<tr><td>En selle</td><td>Base du pouce</td><td>Opposition du pouce</td></tr>
</table>
<p><b>Mouvements :</b> flexion/extension, abduction (écarter)/adduction (rapprocher), rotation, circumduction, pronation/supination de l'avant-bras. <b>Lésions fréquentes :</b> fracture (os), entorse (ligaments), luxation (perte de contact des surfaces articulaires).</p>

<h3>9. Myologie : les muscles</h3>
<p>Il existe trois types de muscles : le <b>strié squelettique</b> (volontaire, relié aux os), le <b>strié cardiaque</b> (myocarde, involontaire) et le <b>lisse</b> (viscères et vaisseaux, involontaire). L'appareil locomoteur dépend du muscle squelettique (environ 600 muscles).</p>
<ul>
<li><b>Organisation :</b> fibre musculaire (cellule allongée multinucléée) → faisceau → muscle, entourés d'enveloppes de tissu conjonctif (endomysium, périmysium, épimysium). Le muscle s'attache à l'os par un <b>tendon</b> (ou une aponévrose). Les fibres contiennent des myofibrilles formées d'<b>actine</b> et de <b>myosine</b> : la contraction raccourcit les sarcomères, grâce à l'ATP et au calcium.</li>
<li><b>Fonctionnement :</b> un nerf moteur commande le muscle ; un muscle ne fait que se contracter, donc les mouvements opposés exigent des muscles <b>antagonistes</b> (biceps/triceps). Le muscle au repos garde un <b>tonus</b>.</li>
</ul>
<table>
<tr><th>Région</th><th>Muscles à connaître</th></tr>
<tr><td>Tête et cou</td><td>Masséter, temporal (mastication), sterno-cléido-mastoïdien</td></tr>
<tr><td>Tronc</td><td>Pectoraux, grand dorsal, trapèze, intercostaux, <b>diaphragme</b> ; paroi abdominale ventro-latérale : <b>muscle droit, obliques externe et interne, transverse</b> (le psoas appartient à la paroi postérieure)</td></tr>
<tr><td>Membre supérieur</td><td><b>Deltoïde</b>, biceps brachial (flexion), triceps brachial (extension)</td></tr>
<tr><td>Membre inférieur</td><td>Grand fessier, quadriceps (extension du genou), ischio-jambiers, triceps sural (tendon d'Achille)</td></tr>
</table>
<p><b>Intérêt infirmier :</b> les injections intramusculaires se font dans le deltoïde, le quadrant supéro-externe de la fesse (grand fessier) ou la face antéro-latérale de la cuisse (vaste latéral), en évitant le nerf sciatique.</p>

<h3>10. Régions de l'abdomen (schéma à 9 régions)</h3>
<table>
<tr><th>Étage</th><th>Droite</th><th>Centre</th><th>Gauche</th></tr>
<tr><td>Supérieur</td><td>1. Hypochondre droit</td><td>2. Épigastre</td><td>3. Hypochondre gauche</td></tr>
<tr><td>Moyen</td><td>4. Flanc droit</td><td>5. Région ombilicale</td><td>6. Flanc gauche</td></tr>
<tr><td>Inférieur</td><td>7. Fosse iliaque droite</td><td>8. Hypogastre</td><td>9. Fosse iliaque gauche</td></tr>
</table>

<h3>11. Pièges à retenir</h3>
<table>
<tr><th>À retenir</th><th>Précision</th></tr>
<tr><td>Radius ou ulna ?</td><td>Radius : côté du pouce ; ulna (cubitus) : côté du petit doigt</td></tr>
<tr><td>Tibia ou péroné ?</td><td>Tibia : interne et porteur ; péroné (fibula) : externe et fin</td></tr>
<tr><td>Os coxal</td><td>Ilion (haut) + ischion (bas) + pubis (avant)</td></tr>
<tr><td>Sternum</td><td>Manubrium (haut), corps, processus xiphoïde</td></tr>
<tr><td>Carpe et tarse</td><td>Carpe : poignet ; tarse : cheville et talon</td></tr>
<tr><td>Métacarpe et métatarse</td><td>Paume de la main ; avant-pied</td></tr>
<tr><td>Acromion et coracoïde</td><td>Deux reliefs de l'omoplate</td></tr>
<tr><td>Mandibule</td><td>Seul os mobile de la tête</td></tr>
<tr><td>Vue de face du squelette</td><td>Coupe frontale (coronale)</td></tr>
</table>
` },

"cv": { html: `
<div class="retenir"><b>Fiche élaborée d'après le cours fourni, les exercices corrigés du site et les notions classiques d'anatomie et de physiologie cardiovasculaires.</b> Si votre cours officiel indique d'autres valeurs, c'est lui qui fait foi.</div>

<h3>1. Vue d'ensemble : deux circulations en série</h3>
<p>Le système cardiovasculaire assure la circulation continue du sang, qui transporte l'oxygène, les nutriments, les hormones et les déchets. Le cœur est la <b>pompe</b>, les vaisseaux sont les <b>tuyaux</b>. Il y a en réalité <b>deux pompes en une</b> :</p>
<ul>
<li><b>Petite circulation (pulmonaire) :</b> ventricule droit → artère pulmonaire (sang pauvre en O<sub>2</sub>) → poumons (hématose) → veines pulmonaires (sang riche en O<sub>2</sub>) → oreillette gauche.</li>
<li><b>Grande circulation (systémique) :</b> ventricule gauche → aorte → artères → capillaires des organes → veines → veines caves → oreillette droite.</li>
</ul>
<p><b>Piège :</b> l'artère pulmonaire est la seule artère qui transporte du sang désoxygéné, et les veines pulmonaires sont les seules veines qui transportent du sang oxygéné. Une artère emmène le sang <b>loin</b> du cœur, une veine le <b>ramène</b>.</p>

<h3>2. Anatomie du cœur</h3>
<ul>
<li><b>Situation :</b> organe musculaire creux dans la cavité thoracique, au centre du <b>médiastin</b>, entre les deux poumons, derrière le sternum, sur le diaphragme. Il n'est jamais dans l'abdomen. Il est incliné vers la gauche, sa pointe (apex) en bas à gauche. Il pèse environ 300 g.</li>
<li><b>Forme :</b> pyramide <b>triangulaire</b> (et non rectangulaire).</li>
<li><b>Les 4 cavités :</b> deux <b>oreillettes</b> (en haut, à parois minces) et deux <b>ventricules</b> (en bas, à parois épaisses). Le <b>septum interauriculaire</b> sépare les oreillettes et le <b>septum interventriculaire</b> sépare les ventricules. Le ventricule gauche a la paroi la plus épaisse, car il envoie le sang dans tout le corps.</li>
<li><b>Les tuniques de la paroi :</b> de dehors en dedans, l'<b>épicarde</b> (feuillet viscéral du péricarde), le <b>myocarde</b> (muscle contractile, l'essentiel de la masse) et l'<b>endocarde</b> (endothélium qui tapisse les cavités). Le <b>péricarde</b> est l'enveloppe séreuse et fibreuse qui entoure le cœur et l'amarre au diaphragme et au sternum. Les valves ne sont pas des tuniques.</li>
</ul>

<h3>3. Les valves et le trajet du sang dans le cœur</h3>
<p>Les valves jouent le rôle de clapets anti-retour : elles s'ouvrent dans un sens et empêchent le reflux.</p>
<table>
<tr><th>Valve</th><th>Située entre</th><th>Type</th></tr>
<tr><td><b>Tricuspide</b></td><td>Oreillette droite et ventricule droit</td><td>Auriculo-ventriculaire</td></tr>
<tr><td><b>Mitrale (bicuspide)</b></td><td>Oreillette gauche et ventricule gauche</td><td>Auriculo-ventriculaire</td></tr>
<tr><td><b>Pulmonaire</b></td><td>Ventricule droit et artère pulmonaire</td><td>Sigmoïde</td></tr>
<tr><td><b>Aortique</b></td><td>Ventricule gauche et aorte</td><td>Sigmoïde</td></tr>
</table>
<p>Les valves auriculo-ventriculaires sont donc entre les oreillettes et les ventricules ; ce sont les valves sigmoïdes qui sont entre les ventricules et les artères.</p>
<p><b>Trajet :</b> veines caves → oreillette droite → (tricuspide) → ventricule droit → (pulmonaire) → artère pulmonaire → poumons → veines pulmonaires → oreillette gauche → (mitrale) → ventricule gauche → (aortique) → <b>aorte</b>, le plus gros tronc artériel, qui part du ventricule gauche (et non du droit).</p>
<p><b>Vascularisation du cœur lui-même :</b> les <b>artères coronaires</b> droite et gauche naissent de l'aorte ; leur obstruction provoque l'infarctus du myocarde.</p>

<h3>4. Le tissu nodal : l'automatisme du cœur</h3>
<p>Le cœur bat tout seul, sans ordre du cerveau : c'est l'<b>innervation intrinsèque</b>. Elle est assurée par le <b>tissu nodal</b>, qui crée et conduit l'influx électrique (il ne se contracte pas).</p>
<ol>
<li><b>Nœud sinusal</b> (de Keith et Flack) : le « pacemaker » naturel, qui impose le rythme.</li>
<li><b>Nœud auriculo-ventriculaire</b> (d'Aschoff-Tawara) : retarde un peu l'influx pour laisser les ventricules se remplir.</li>
<li><b>Faisceau de His</b>, puis <b>réseau de Purkinje</b> : distribuent l'influx dans les ventricules.</li>
</ol>
<p>Les cellules des nœuds ont une dépolarisation lente (réponse lente) ; celles du faisceau de His et du réseau de Purkinje une dépolarisation rapide (réponse rapide). Le myocarde est à la fois excitable, conducteur et contractile. Le potentiel de repos de la cellule contractile est stable grâce à la perméabilité au potassium.</p>

<h3>5. L'innervation extrinsèque</h3>
<p>Le système nerveux autonome règle le rythme sans le créer :</p>
<table>
<tr><th></th><th>Sympathique</th><th>Parasympathique</th></tr>
<tr><td>Effet</td><td>Cardio-accélérateur : augmente la fréquence et la force de contraction</td><td>Cardio-modérateur : ralentit le cœur</td></tr>
<tr><td>Médiateur</td><td><b>Noradrénaline</b></td><td><b>Acétylcholine</b></td></tr>
<tr><td>Nerf</td><td>Nerfs cardiaques sympathiques</td><td><b>Nerf vague (X)</b></td></tr>
</table>
<p>Le rythme de repos dépend du tonus parasympathique. L'innervation parasympathique concerne surtout les nœuds et les oreillettes. L'innervation extrinsèque n'est jamais assurée par le tissu nodal.</p>

<h3>6. Le cycle cardiaque : électrique puis mécanique</h3>
<p>L'activité électrique <b>précède</b> et déclenche l'activité mécanique.</p>
<ul>
<li><b>Phénomènes électriques :</b> <b>dépolarisation</b> (excitation, activation) et <b>repolarisation</b> (retour au repos).</li>
<li><b>Phénomènes mécaniques :</b> <b>systole</b> (contraction qui éjecte le sang) et <b>diastole</b> (relâchement qui laisse le cœur se remplir). La contraction n'est donc pas la dépolarisation, et la systole n'est pas un phénomène électrique.</li>
<li>Un cycle dure environ 0,8 s à 75 battements par minute ; les bruits du cœur sont dus à la fermeture des valves (B1 : valves auriculo-ventriculaires ; B2 : valves sigmoïdes).</li>
</ul>
<p><b>L'électrocardiogramme (ECG)</b> enregistre uniquement les phénomènes <b>électriques</b>, jamais mécaniques :</p>
<ul>
<li><b>Onde P :</b> dépolarisation des oreillettes.</li>
<li><b>Complexe QRS :</b> dépolarisation des ventricules.</li>
<li><b>Onde T :</b> repolarisation des ventricules.</li>
</ul>

<h3>7. Hémodynamique : débit, pression, résistance</h3>
<ul>
<li><b>Volume d'éjection systolique (VES) :</b> volume de sang éjecté par un ventricule à chaque battement (environ 70 ml).</li>
<li><b>Débit cardiaque (DC) :</b> quantité de sang éjectée par chaque ventricule en une minute. <b>DC = VES × FC</b>. Valeur normale au repos : environ <b>5 L/min</b> (70 ml × 72 battements).</li>
<li><b>Fréquence cardiaque (FC) :</b> 60 à 100 battements/min chez l'adulte au repos (100 à 160 chez le nouveau-né).</li>
<li><b>Pression artérielle (PA) :</b> force exercée par le sang sur la paroi des artères, en mmHg. Elle dépend du débit et de la résistance : <b>PA = DC × résistance vasculaire périphérique</b>. La <b>pression systolique</b> est celle de la contraction ventriculaire, la <b>pression diastolique</b> celle du relâchement.</li>
<li><b>Valeur normale :</b> inférieure à <b>140/90 mmHg</b> (certains cours retiennent 130/80 ; l'idéal est autour de 120/80). Au-delà, on parle d'hypertension artérielle (HTA).</li>
<li><b>Résistance vasculaire :</b> force qui s'oppose à l'écoulement du sang (surtout dans les petites artères). <b>Débit sanguin :</b> volume de sang qui passe par un vaisseau par unité de temps.</li>
<li><b>Mesure :</b> tensiomètre et brassard, à hauteur du cœur, en auscultant l'artère brachiale. Le <b>pouls</b> se prend à l'artère radiale, carotide, fémorale…</li>
<li><b>Régulation :</b> barorécepteurs de la crosse de l'aorte et du sinus carotidien, système nerveux autonome, reins (rénine-angiotensine).</li>
</ul>

<h3>8. Les vaisseaux sanguins</h3>
<table>
<tr><th></th><th>Artères</th><th>Capillaires</th><th>Veines</th></tr>
<tr><td>Rôle</td><td>Conduisent le sang du cœur vers les organes</td><td>Échanges avec les tissus</td><td>Ramènent le sang au cœur</td></tr>
<tr><td>Paroi</td><td>Épaisse, élastique (média développée)</td><td>Une seule couche de cellules (endothélium)</td><td>Mince, grande lumière</td></tr>
<tr><td>Pression</td><td>Haute</td><td>Intermédiaire</td><td>Basse</td></tr>
<tr><td>Valvules</td><td>Non</td><td>Non</td><td><b>Oui</b> (veines périphériques), anti-reflux</td></tr>
</table>
<ul>
<li>Artères et veines ont <b>trois tuniques</b> : l'<b>intima</b> (endothélium, au contact du sang), la <b>média</b> (muscle lisse et fibres élastiques) et l'<b>adventice</b> (tissu conjonctif).</li>
<li>Le retour veineux est aidé par les valvules, la contraction des muscles des jambes (pompe musculaire) et la respiration.</li>
</ul>
<p><b>Grands troncs à connaître :</b></p>
<ul>
<li><b>Aorte :</b> ascendante, crosse (qui donne le tronc brachio-céphalique, la carotide commune gauche et la sous-clavière gauche), thoracique, puis abdominale (tronc cœliaque, mésentériques, rénales, iliaques).</li>
<li><b>Artères des membres :</b> axillaire, brachiale, radiale et ulnaire ; fémorale, poplitée, tibiales. <b>Carotides</b> pour la tête et le cou.</li>
<li><b>Veines :</b> veine cave supérieure (partie haute du corps), veine cave inférieure (partie basse), jugulaires, veine porte (du tube digestif vers le foie).</li>
</ul>

<h3>9. Notions de pathologie</h3>
<ul>
<li><b>HTA :</b> tension élevée de façon durable. <b>Insuffisance cardiaque :</b> le cœur n'assure plus un débit suffisant. <b>Infarctus :</b> obstruction d'une artère coronaire. <b>Arythmie :</b> trouble du rythme. <b>Thrombose et embolie :</b> caillot qui bouche un vaisseau. <b>Œdème :</b> fuite de liquide dans les tissus.</li>
</ul>

<h3>10. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>Le ventricule est en haut à droite</td><td>Les ventricules sont en bas ; les oreillettes en haut</td></tr>
<tr><td>Le cœur est une pyramide rectangulaire / a 5 cavités</td><td>Pyramide triangulaire, 4 cavités</td></tr>
<tr><td>L'aorte sort du ventricule droit</td><td>Ventricule gauche</td></tr>
<tr><td>Le septum interauriculaire sépare les ventricules</td><td>Il sépare les oreillettes</td></tr>
<tr><td>Valves AV entre ventricules et artères</td><td>Entre oreillettes et ventricules</td></tr>
<tr><td>Le tissu nodal assure l'innervation extrinsèque ou la contraction</td><td>Il assure l'activité électrique (intrinsèque)</td></tr>
<tr><td>Contraction = dépolarisation</td><td>La contraction est mécanique, la dépolarisation électrique</td></tr>
<tr><td>L'ECG enregistre l'activité mécanique</td><td>Uniquement électrique</td></tr>
<tr><td>Le sympathique agit par l'acétylcholine</td><td>Noradrénaline (acétylcholine : parasympathique)</td></tr>
<tr><td>Le VES est la pression artérielle</td><td>Le VES est le volume éjecté par battement</td></tr>
<tr><td>La résistance est la force par unité de surface</td><td>C'est la pression artérielle</td></tr>
</table>
` },

"resp": { html: `
<div class="retenir"><b>Fiche élaborée d'après le cours fourni, les exercices corrigés du site et les notions classiques d'anatomie et de physiologie respiratoires.</b> Si votre cours officiel indique d'autres valeurs, c'est lui qui fait foi.</div>

<h3>1. Rôles de l'appareil respiratoire</h3>
<p>L'appareil respiratoire assure la <b>ventilation pulmonaire</b> (faire entrer et sortir l'air) et l'<b>hématose</b> (échanges gazeux entre l'air et le sang). Il apporte l'oxygène (O<sub>2</sub>) et rejette le gaz carbonique (CO<sub>2</sub>), et non l'inverse. Le poumon assure aussi l'<b>épuration de l'air</b> (filtration, humidification, réchauffement), la phonation, l'olfaction et la défense (toux, mucus, cils vibratiles, macrophages alvéolaires). La respiration est donc sa fonction principale.</p>
<p><b>La respiration se déroule en quatre étapes :</b></p>
<ol>
<li><b>Ventilation pulmonaire</b> : le premier maillon de la chaîne.</li>
<li><b>Échanges alvéolo-capillaires</b> : c'est l'<b>hématose</b>, deuxième étape.</li>
<li><b>Transport des gaz</b> dans le sang.</li>
<li><b>Respiration cellulaire</b> : les cellules utilisent l'O<sub>2</sub> pour oxyder les nutriments, produire de l'énergie, du CO<sub>2</sub> et de l'eau.</li>
</ol>

<h3>2. Les voies respiratoires</h3>
<p>L'arbre trachéo-bronchique est un réseau de conduits où circule l'air inspiré et expiré. On distingue :</p>
<table>
<tr><th>Voies supérieures</th><th>Voies inférieures</th></tr>
<tr><td><b>Fosses nasales</b>, <b>pharynx</b></td><td><b>Larynx</b>, <b>trachée</b>, arbre bronchique (bronches souches, lobaires, segmentaires, bronchioles)</td></tr>
</table>
<ul>
<li><b>Fosses nasales :</b> l'air y est filtré, humidifié et réchauffé grâce à la muqueuse ciliée et riche en vaisseaux.</li>
<li><b>Pharynx :</b> carrefour aéro-digestif (l'air et les aliments le traversent).</li>
<li><b>Larynx :</b> organe de la phonation, formé de cartilages (thyroïde, cricoïde, épiglotte, aryténoïdes) et contenant les cordes vocales. L'épiglotte ferme les voies aériennes pendant la déglutition, ce qui évite les fausses routes.</li>
<li><b>Trachée :</b> tube de 10 à 12 cm, soutenu par des anneaux cartilagineux en forme de C, qui reste toujours ouvert ; il se divise en deux bronches souches à la carène.</li>
<li><b>Bronches :</b> la bronche souche <b>droite</b> est plus courte, plus large et plus verticale (c'est là que se logent le plus souvent les corps étrangers inhalés). Le <b>diamètre des bronches diminue</b> du hile vers la périphérie du poumon.</li>
</ul>
<p><b>Deux zones fonctionnelles :</b></p>
<ul>
<li><b>Zone de conduction :</b> de la trachée jusqu'aux <b>bronchioles terminales</b> (elles en font encore partie). Elle conduit l'air sans échange gazeux.</li>
<li><b>Zone respiratoire (d'échange) :</b> bronchioles respiratoires, canaux alvéolaires, <b>sacs alvéolaires</b> et alvéoles (environ 300 millions, soit une surface d'échange de 70 à 100 m<sup>2</sup>). Le sac alvéolaire est la portion structurale essentielle de la respiration.</li>
</ul>

<h3>3. Les poumons</h3>
<p>Les poumons sont des organes <b>intrathoraciques, pairs mais asymétriques</b>, logés de part et d'autre du médiastin. Chacun a une base posée sur le diaphragme, un sommet (apex) et une face médiastinale où se trouve le <b>hile</b> (passage de la bronche souche, des vaisseaux et des nerfs).</p>
<table>
<tr><th></th><th>Poumon droit</th><th>Poumon gauche</th></tr>
<tr><td>Masse</td><td>Plus volumineux, environ <b>700 g</b></td><td>Environ <b>650 g</b></td></tr>
<tr><td>Lobes</td><td><b>3</b> : supérieur, moyen, inférieur</td><td><b>2</b> : supérieur, inférieur</td></tr>
<tr><td>Scissures</td><td><b>2</b> (grande et petite)</td><td><b>1</b> (oblique)</td></tr>
<tr><td>Particularité</td><td>10 segments</td><td>La <b>lingula</b> est l'équivalent du lobe moyen droit</td></tr>
</table>
<p>Les <b>scissures</b> sont des replis de la plèvre <b>viscérale</b> entre les lobes.</p>
<ul>
<li><b>La plèvre :</b> séreuse à deux feuillets, <b>viscéral</b> (adhérent au poumon) et <b>pariétal</b> (tapisse la paroi thoracique et le diaphragme), séparés par la cavité pleurale (liquide pleural). Elle permet au poumon de glisser contre la paroi tout en restant accolé à elle. <b>Pleurésie</b> : épanchement de <b>liquide</b> ; <b>pneumothorax</b> : épanchement d'<b>air</b>.</li>
<li><b>Unité fonctionnelle :</b> le <b>lobule pulmonaire</b> (selon le cours), qui contient les sacs alvéolaires.</li>
<li><b>Vascularisation double :</b> <b>fonctionnelle</b> (artères et veines pulmonaires, pour l'hématose) et <b>nutritive</b> (artères bronchiques, issues de l'aorte, pour nourrir le tissu pulmonaire).</li>
</ul>

<h3>4. L'alvéole et la membrane alvéolo-capillaire</h3>
<ul>
<li><b>Pneumocytes de type I :</b> cellules plates qui tapissent l'alvéole et permettent les échanges. <b>Pneumocytes de type II :</b> sécrètent le <b>surfactant</b>, substance tensio-active qui empêche l'affaissement des alvéoles à l'expiration. Chez le prématuré, son déficit provoque la maladie des membranes hyalines.</li>
<li><b>Membrane alvéolo-capillaire</b> (barrière air-sang) : très fine (environ 0,5 µm), formée de l'épithélium alvéolaire, d'une membrane basale et de l'endothélium capillaire. Les gaz la traversent par <b>diffusion</b>, du milieu où leur pression partielle est la plus forte vers celui où elle est la plus faible.</li>
</ul>

<h3>5. La mécanique ventilatoire</h3>
<table>
<tr><th></th><th>Inspiration</th><th>Expiration</th></tr>
<tr><td>Nature</td><td><b>Active</b></td><td><b>Passive</b> au repos (retour élastique des poumons)</td></tr>
<tr><td>Muscles</td><td>Principal : <b>diaphragme</b> (son abaissement agrandit le thorax). Intercostaux externes. Accessoires : sterno-cléido-mastoïdiens, scalènes</td><td>Aucun au repos. Expiration forcée : muscles abdominaux et intercostaux internes</td></tr>
<tr><td>Pressions</td><td>Pression alvéolaire <b>inférieure</b> à la pression atmosphérique : l'air entre</td><td>Pression alvéolaire supérieure à la pression atmosphérique : l'air sort</td></tr>
</table>
<p>Le principe est celui d'une seringue : quand le volume du thorax augmente, la pression à l'intérieur baisse (loi de Boyle) et l'air est « aspiré ». Le diaphragme est donc un muscle principal, et non accessoire, de l'inspiration ; il est commandé par le nerf phrénique.</p>
<ul>
<li><b>Volume courant (VC) :</b> environ 500 ml à chaque cycle. Capacité vitale : environ 4,5 à 5 L. Volume résiduel : l'air qui reste dans les poumons après une expiration forcée (environ 1,2 L).</li>
<li><b>Fréquence respiratoire de l'adulte :</b> 12 à 20 cycles par minute. Débit ventilatoire = VC × FR, soit 6 à 8 L/min au repos.</li>
<li><b>Vocabulaire :</b> eupnée (respiration normale), bradypnée (fréquence trop basse), tachypnée (trop rapide), <b>apnée</b> (arrêt respiratoire), dyspnée (difficulté à respirer). Une fréquence inférieure à 12 cycles par minute est une bradypnée, pas une apnée.</li>
<li><b>Régulation :</b> les centres respiratoires du bulbe et de la protubérance règlent la ventilation selon les besoins de l'organisme, grâce aux chémorécepteurs qui détectent le CO<sub>2</sub>, le pH et l'O<sub>2</sub>. La toux et l'éternuement sont des réflexes de défense qui expulsent corps étrangers et sécrétions.</li>
</ul>

<h3>6. Le transport des gaz dans le sang</h3>
<table>
<tr><th>Gaz</th><th>Formes de transport</th></tr>
<tr><td><b>Oxygène (O<sub>2</sub>)</b></td><td><b>2 formes</b> : combinée à l'<b>hémoglobine</b> (environ <b>98,5 %</b>, oxyhémoglobine) et dissoute dans le plasma (environ <b>1,5 %</b>)</td></tr>
<tr><td><b>Gaz carbonique (CO<sub>2</sub>)</b></td><td><b>3 formes</b> : <b>bicarbonates</b> (HCO<sub>3</sub><sup>−</sup>, environ <b>70 %</b>, formés dans les globules rouges), <b>carbhémoglobine</b> (environ 20 %), forme <b>dissoute</b> (7 à 10 %)</td></tr>
</table>
<ul>
<li>La <b>saturation de l'hémoglobine en oxygène</b> dépend de la PO<sub>2</sub>, de la PCO<sub>2</sub>, du pH, de la température et du 2,3-DPG. La saturation normale (SaO<sub>2</sub>) est de 95 à 100 %.</li>
<li>Le CO<sub>2</sub> participe à l'équilibre acido-basique : le <b>pH sanguin normal</b> est de 7,35 à 7,45 (environ 7,40).</li>
</ul>

<h3>7. Définitions et notions cliniques</h3>
<ul>
<li><b>Hématose :</b> transformation du sang veineux (riche en CO<sub>2</sub>) en sang artériel (riche en O<sub>2</sub>) au niveau de la membrane alvéolo-capillaire.</li>
<li><b>Hypoxémie :</b> baisse de la pression partielle en oxygène (PaO<sub>2</sub>) dans le <b>sang artériel</b>. <b>Hypoxie :</b> baisse de l'apport d'oxygène aux <b>tissus</b> ; c'est la conséquence de l'hypoxémie.</li>
<li><b>Cyanose :</b> coloration bleutée de la peau et des lèvres en cas d'hypoxémie.</li>
<li><b>Maladies de l'appareil respiratoire :</b> asthme, bronchite, bronchiolite (nourrisson), pneumonie, tuberculose, pleurésie, pneumothorax. La myocardite, elle, atteint le cœur.</li>
<li>Rôle infirmier : surveiller la fréquence respiratoire et la saturation (oxymètre de pouls), dégager les voies aériennes, administrer de l'oxygène sur prescription.</li>
</ul>

<h3>8. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>Le poumon gauche est plus volumineux</td><td>Le droit (700 g contre 650 g)</td></tr>
<tr><td>Le poumon gauche a 2 scissures et 2 lobes + scissures</td><td>2 lobes, 1 scissure</td></tr>
<tr><td>L'expiration est un phénomène actif</td><td>Passive au repos</td></tr>
<tr><td>Le diaphragme est un muscle accessoire</td><td>Muscle principal de l'inspiration</td></tr>
<tr><td>Pharynx et poumons : voies inférieures</td><td>Le pharynx est une voie supérieure</td></tr>
<tr><td>Les bronches terminales appartiennent à la zone respiratoire</td><td>Zone de conduction</td></tr>
<tr><td>Le diamètre des bronches augmente vers la périphérie</td><td>Il diminue</td></tr>
<tr><td>Le CO<sub>2</sub> est transporté sous 4 formes / surtout dissous</td><td>3 formes, surtout en bicarbonates (70 %)</td></tr>
<tr><td>Pneumocytes de type I : surfactant</td><td>Type II</td></tr>
<tr><td>Scissure : invagination de la plèvre pariétale</td><td>Plèvre viscérale</td></tr>
<tr><td>Hypoxémie : baisse de PaO<sub>2</sub> dans les tissus</td><td>Dans le sang artériel (tissus : hypoxie)</td></tr>
<tr><td>Apnée = FR inférieure à 12</td><td>Apnée = arrêt ; FR basse = bradypnée</td></tr>
<tr><td>Pleurésie : air dans la plèvre</td><td>Liquide (l'air : pneumothorax)</td></tr>
</table>
` },

};
