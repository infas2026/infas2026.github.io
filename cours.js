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

"em": { html: `
<div class="retenir"><b>Fiche élaborée d'après les exercices « Étude du milieu » (QCD et QCM) et leurs corrections.</b> Les points marqués « à confirmer » sont ceux que les corrections signalent comme incertains. Si votre cours officiel indique d'autres valeurs, c'est lui qui fait foi.</div>

<h3>1. Définitions</h3>
<ul>
<li><b>Étude du milieu (monographie) :</b> étude de la connaissance d'une région, d'un milieu culturel donné, dans toutes ses dimensions : <b>physiques, sociales, économiques, culturelles et spirituelles</b>.</li>
<li>Elle n'est <b>pas réservée aux seuls agents de santé</b> : d'autres acteurs (développement, éducation, administration) sont concernés.</li>
<li><b>Aire sanitaire = bassin de desserte :</b> zone couverte par une structure de santé.</li>
<li><b>Document monographique :</b> il donne « d'un coup d'œil » le <b>tableau de bord</b> de la structure et les informations utiles sur l'aire sanitaire.</li>
</ul>

<h3>2. Intérêts de l'étude du milieu</h3>
<ul>
<li>Disposer de <b>données fiables et récentes</b> sur la population.</li>
<li>Permettre à l'agent de santé de travailler <b>aussi bien en milieu hospitalier qu'extrahospitalier</b>, en connaissant les besoins réels de la communauté.</li>
<li>Vivre <b>en harmonie et en symbiose</b> avec la population (intégration).</li>
<li>C'est un outil de <b>performance, d'efficacité et d'efficience</b> : elle oriente les activités et améliore la prise en charge sanitaire.</li>
<li>Au-delà des soins classiques, le professionnel de santé est un <b>agent de développement</b>.</li>
<li>Elle aide à <b>localiser les problèmes sanitaires</b> de la localité.</li>
</ul>

<h3>3. Attitude et méthodes</h3>
<ul>
<li><b>Attitude à développer :</b> observer, écouter et informer.</li>
<li><b>Observation et dialogue :</b> centrer son intérêt sur des points précis du milieu (observation dirigée) et échanger avec la population.</li>
<li><b>La photographie</b> illustre et documente le milieu étudié : elle a un intérêt en monographie.</li>
<li>Le personnel de santé doit <b>exploiter les informations sur la communauté et en tirer profit</b>. Il ne doit ni pousser les habitants à ne rien changer, ni les réprimander sur leurs écarts de comportement.</li>
</ul>

<h3>4. Les trois groupes de facteurs agissant sur la santé</h3>
<p>Il y a <b>trois</b> groupes (et non quatre) : facteurs <b>favorisant la santé</b>, facteurs <b>favorisant la maladie</b> et facteurs <b>déterminant la maladie</b>. Il n'existe pas de « facteurs déterminant la santé ».</p>

<p><b>4.1. Facteurs favorisant la santé</b></p>
<table>
<tr><th>Groupe</th><th>Exemples</th></tr>
<tr><td><b>Biologiques physiologiques</b> (origine interne)</td><td>Bon fonctionnement de tous les organes ; patrimoine génétique correct et complet ; absence de troubles métaboliques (diabète) ; apport normal d'éléments physiologiques ; besoins physiologiques satisfaits (boire, manger, respirer)</td></tr>
<tr><td><b>Biologiques psychologiques</b> (origine interne)</td><td>Absence de troubles psychiques ; affection parentale durant l'enfance ; satisfaction du besoin d'être aimé et reconnu ; sevrage bien conduit ; éducation adéquate de l'enfant ; satisfaction du besoin de s'occuper et de se rendre utile</td></tr>
<tr><td><b>Environnement physique ou socio-économico-culturel</b> (conditions de vie et cadre de vie)</td><td>Habitat salubre ; eau courante, traitée ou potable ; évacuation hygiénique des excréta et des eaux usées ; absence de promiscuité et de pollution ; SMIG raisonnable ; moyens de communication acceptables</td></tr>
</table>
<p>Les facteurs biologiques sont donc regroupés en <b>physiologiques</b> et <b>psychologiques</b>, et leur origine est <b>interne</b> à l'organisme.</p>

<p><b>4.2. Facteurs favorisant la maladie</b></p>
<p>Ils peuvent être <b>internes</b> (terrain) et <b>externes</b> (environnement).</p>
<table>
<tr><th>Groupe</th><th>Exemples</th></tr>
<tr><td><b>Physiologiques ou constitutionnels</b> (terrain, organisme)</td><td>Âge ; genre ; aspect physique (maigreur, embonpoint) ; absence d'immunité naturelle ou acquise</td></tr>
<tr><td><b>Psycho-économico-socio-culturels</b></td><td>Chômage ; soucis ; ignorance ; alcoolisme</td></tr>
<tr><td><b>Environnementaux ou de nuisance</b> (milieu <b>extérieur</b>)</td><td>Eau polluée ; ordures ; promiscuité ; mauvaise évacuation des excréta et des eaux usées ; bruits ; état défectueux des infrastructures routières</td></tr>
</table>

<p><b>4.3. Facteurs déterminant la maladie</b></p>
<p>Ce sont les <b>causes directes</b> : microbes, parasites, traumatismes, brûlures. Le tabagisme est proposé comme réponse dans un QCM (à confirmer avec votre cours).</p>

<h3>5. Le document monographique : contenu</h3>
<table>
<tr><th>Rubrique</th><th>Contenu</th></tr>
<tr><td><b>Données d'identification</b> (carte d'identité du centre)</td><td>Dénomination, statut, localisation, date d'ouverture</td></tr>
<tr><td><b>Cartographie</b></td><td>Carte de l'aire sanitaire ; délimitation de l'aire sanitaire ou bassin de desserte ; voies de communication et infrastructures ; localisation des problèmes sanitaires. Elle ne sert pas à attribuer le nom de la localité.</td></tr>
<tr><td><b>Hydrographie</b></td><td>Cours d'eau et points d'eau : impact sanitaire, donc à maîtriser</td></tr>
<tr><td><b>Éducation et formation professionnelle</b></td><td>Nombre d'écoles, de cantines scolaires, d'enseignants</td></tr>
<tr><td><b>Économie</b></td><td>Par exemple les marchés</td></tr>
<tr><td><b>Ressources humaines</b></td><td>Personnel de santé, par exemple le nombre de techniciens supérieurs de santé</td></tr>
</table>

<h3>6. Bassin de desserte et stratégies d'intervention</h3>
<table>
<tr><th>Stratégie</th><th>Distance</th><th>Principe</th></tr>
<tr><td><b>Fixe</b></td><td>0 à 5 km</td><td>Soins au centre de santé</td></tr>
<tr><td><b>Avancée</b></td><td>5 à 15 km</td><td>L'agent de santé se déplace vers les localités</td></tr>
<tr><td><b>Mobile</b></td><td>Plus de 15 km</td><td>Zones éloignées de la structure</td></tr>
</table>
<ul>
<li>Le rayon retenu pour le bassin de desserte est de <b>15 km</b> (à confirmer avec votre cours).</li>
<li><b>Zone de silence :</b> localités éloignées d'une structure de santé (plus de 15 km), et non à moins de 10 km.</li>
</ul>

<h3>7. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>Il y a 4 groupes de facteurs agissant sur la santé</td><td>3 groupes (favorisant la santé, favorisant la maladie, déterminant la maladie)</td></tr>
<tr><td>Les facteurs biologiques ont une origine extérieure à l'organisme</td><td>Origine interne</td></tr>
<tr><td>L'âge est un facteur psychologique</td><td>Facteur physiologique ou constitutionnel</td></tr>
<tr><td>L'aspect physique est un facteur psycho-économico-socio-culturel</td><td>Physiologique ou constitutionnel</td></tr>
<tr><td>Le chômage est une nuisance environnementale</td><td>Facteur psycho-économico-socio-culturel</td></tr>
<tr><td>Les bruits déterminent la maladie</td><td>Ce sont des nuisances (favorisent la maladie)</td></tr>
<tr><td>Les nuisances viennent du milieu intérieur</td><td>Du milieu extérieur</td></tr>
<tr><td>L'habitat insalubre favorise la santé</td><td>Il favorise la maladie</td></tr>
<tr><td>Date d'ouverture et dénomination : données d'éducation</td><td>Données d'identification</td></tr>
<tr><td>Cantines scolaires : informations sanitaires</td><td>Informations relatives à l'éducation</td></tr>
<tr><td>Le marché relève de l'éducation</td><td>Il relève de l'économie</td></tr>
<tr><td>Stratégie fixe : déplacement dans les villages voisins</td><td>Fixe = au centre ; déplacement = avancée ou mobile</td></tr>
<tr><td>Stratégie mobile : moins de 15 km</td><td>Plus de 15 km</td></tr>
<tr><td>L'étude du milieu sert l'efficacité mais pas l'efficience</td><td>Elle sert les deux</td></tr>
<tr><td>La photographie n'a aucun intérêt en monographie</td><td>Elle illustre et documente</td></tr>
</table>
` },
"sm": { html: `
<div class="retenir"><b>Fiche élaborée d'après les exercices « Sémiologie médicale » (QCD et QCM) et leurs corrections.</b> Les points marqués « à confirmer » sont ceux que les corrections signalent comme incertains. Si votre cours officiel indique d'autres valeurs, c'est lui qui fait foi.</div>

<h3>1. Notions générales</h3>
<ul>
<li><b>Nosologie :</b> classification des maladies.</li>
<li><b>Signe pathognomonique :</b> signe spécifique d'une maladie, qui suffit à l'affirmer.</li>
<li><b>Symptômes subjectifs :</b> ressenti du patient, révélés par l'<b>interrogatoire</b> (étape indispensable, jamais facultative). <b>Signes objectifs :</b> révélés par l'examen clinique.</li>
<li><b>Les 4 temps de l'examen clinique :</b> inspection, palpation, percussion, auscultation (appareil par appareil). Le diagnostic et la prescription n'en font pas partie.</li>
<li>L'âge est un facteur favorisant (terrain) et non une cause directe de la maladie (à confirmer).</li>
</ul>

<h3>2. Appareil digestif</h3>
<p>L'appareil digestif <b>haut</b> comprend la cavité buccale, l'œsophage, l'estomac et le duodénum.</p>
<table>
<tr><th>Terme</th><th>Définition à retenir</th></tr>
<tr><td><b>Dysphagie</b></td><td>Sensation d'obstacle à la progression du bol alimentaire <b>entre la bouche et l'estomac</b> (et non le rectum), au niveau thoracique, <b>irradiation rétrosternale</b>. Le <b>signe du lacet</b> est une dysphagie à type de serrement (à confirmer).</td></tr>
<tr><td><b>Pyrosis</b></td><td>Brûlure rétrosternale ascendante, surtout <b>postprandiale</b>, en position penchée ou couchée. Signe classique de l'œsophagite et du reflux (à confirmer pour le siège).</td></tr>
<tr><td><b>Reflux gastro-œsophagien</b></td><td>Remontée du contenu gastrique dans l'œsophage</td></tr>
<tr><td><b>Œsophagite</b></td><td>Inflammation de l'œsophage, souvent douloureuse</td></tr>
<tr><td><b>Hernie hiatale</b></td><td>Passage permanent ou intermittent d'une partie de l'estomac dans le thorax à travers le hiatus œsophagien</td></tr>
<tr><td><b>Syndrome dyspepsique</b></td><td>Digestion difficile : plénitude gastrique, digestion prolongée, pesanteur abdominale, ballonnement, douleurs épigastriques postprandiales</td></tr>
<tr><td><b>Syndrome ulcéreux</b></td><td>Douleur épigastrique en crampe, rythmée par les repas (douleur duodénale, à confirmer)</td></tr>
<tr><td><b>Vomissements</b></td><td>Rejet actif par la bouche du contenu du tube digestif, avec effort</td></tr>
<tr><td><b>Effort de vomissement</b></td><td>Contractions douloureuses des muscles abdominaux sans rejet</td></tr>
<tr><td><b>Hématémèse</b></td><td>Sang rouge ou noir rejeté par la bouche lors d'un effort de vomissement : <b>hémorragie digestive haute</b></td></tr>
<tr><td><b>Méléna</b></td><td>Selles noires, poisseuses (sang digéré), d'origine digestive haute (estomac, duodénum), et non rectale</td></tr>
<tr><td><b>Diarrhée</b></td><td>Émission fréquente de selles trop liquides ou molles, en quantité trop abondante (au moins 3 par jour)</td></tr>
<tr><td><b>Constipation</b></td><td>Selles rares et dures</td></tr>
<tr><td><b>Colique</b></td><td>Douleur abdominale paroxystique par contraction d'un organe creux (et non une infection du côlon)</td></tr>
<tr><td><b>Ascite</b></td><td>Épanchement liquidien dans la cavité péritonéale</td></tr>
<tr><td><b>Ictère</b></td><td>Coloration <b>jaune</b> de la peau et des muqueuses, par augmentation de la bilirubine plasmatique</td></tr>
<tr><td><b>Angiocholite</b></td><td>Inflammation ou infection des voies biliaires</td></tr>
</table>
<ul>
<li><b>Hypertension portale (3 signes) :</b> circulation veineuse collatérale abdominale, varices œsophagiennes, splénomégalie. L'hépatomégalie n'en fait pas partie.</li>
</ul>

<h3>3. Appareil urinaire</h3>
<table>
<tr><th>Terme</th><th>Définition à retenir</th></tr>
<tr><td><b>Diurèse</b></td><td>Quantité d'urines émises en 24 heures (et non la qualité)</td></tr>
<tr><td><b>Polyurie</b></td><td>Diurèse supérieure à 3 litres par 24 h</td></tr>
<tr><td><b>Oligurie</b></td><td>Diurèse inférieure à 500 ml par 24 h</td></tr>
<tr><td><b>Anurie</b></td><td>Diurèse inférieure à 100 ml par 24 h (certains cours retiennent 50 ml)</td></tr>
<tr><td><b>Nycturie</b></td><td>Diurèse nocturne supérieure à la diurèse diurne</td></tr>
<tr><td><b>Pollakiurie</b></td><td>Mictions anormalement fréquentes, de faible volume, sans augmentation de la diurèse</td></tr>
<tr><td><b>Dysurie</b></td><td>Difficulté ou douleur à uriner (obstacle vésical, prostatique ou urétral)</td></tr>
<tr><td><b>Énurésie</b></td><td>Incontinence nocturne : anomalie de la continence</td></tr>
<tr><td><b>Hématurie</b></td><td>Présence d'hématies (sang) dans les urines</td></tr>
<tr><td><b>Protéinurie</b></td><td>Présence de protéines (albumine) dans les urines</td></tr>
<tr><td><b>Fécalurie</b></td><td>Présence de matières fécales dans les urines (fistule)</td></tr>
</table>
<ul>
<li><b>Colique néphrétique :</b> douleur lombaire aiguë par distension de la voie excrétrice.</li>
<li><b>Douleur testiculaire :</b> sous-pubienne, profonde, très vive, irradiant vers l'aine et la fosse iliaque (à confirmer).</li>
</ul>

<h3>4. Appareil respiratoire et cardiovasculaire</h3>
<ul>
<li><b>3 signes respiratoires fondamentaux :</b> dyspnée, cyanose, toux.</li>
<li><b>Fréquence respiratoire normale de l'adulte :</b> 12 à 20 cycles par minute (16 à 20 selon le QCM). Une fréquence de 10 à 16 sans pause n'est pas une dyspnée.</li>
<li><b>Hémoptysie :</b> sang rejeté par la <b>bouche</b> lors d'une toux, d'origine bronchopulmonaire (et non par le nez).</li>
<li><b>Vomique :</b> rejet brutal et abondant de pus. Cause : pleurésie purulente (le pus s'ouvre dans les bronches).</li>
<li><b>Signes à la fois cardiovasculaires et respiratoires :</b> hémoptysie et dyspnée.</li>
<li><b>Conduite devant une dyspnée aiguë :</b> installer le patient, prendre les constantes, puis appeler le médecin (à confirmer avec votre cours).</li>
<li><b>Conduite infirmière devant un emphysème :</b> conseils hygiéno-diététiques, évaluation des besoins prioritaires non satisfaits, réhabilitation respiratoire, prise en charge des complications (à confirmer).</li>
</ul>

<h3>5. Malaises, locomoteur et constantes</h3>
<ul>
<li><b>Lipothymie :</b> malaise passager <b>sans</b> perte de connaissance.</li>
<li><b>Syncope :</b> perte de connaissance <b>complète</b>, brève, avec chute et récupération spontanée.</li>
<li><b>Ankylose :</b> disparition complète des mouvements d'une articulation (raideur définitive).</li>
<li><b>Amyotrophie :</b> diminution du volume du muscle (fonte musculaire).</li>
<li><b>Mal de Pott :</b> localisation osseuse (vertébrale) de la tuberculose.</li>
<li><b>Pathologie rhumatismale :</b> l'agent doit d'abord en reconnaître les manifestations cliniques (à confirmer).</li>
<li><b>Température :</b> on note la valeur lue sur le thermomètre (lecture à 38,8 °C : noter 38,8 °C).</li>
</ul>

<h3>6. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>Dysphagie : obstacle entre la bouche et le rectum</td><td>Entre la bouche et l'estomac</td></tr>
<tr><td>Hématémèse : hémorragie digestive basse</td><td>Hémorragie digestive haute</td></tr>
<tr><td>Méléna : sang d'origine rectale</td><td>Origine digestive haute</td></tr>
<tr><td>Colique : infection du côlon</td><td>Douleur paroxystique d'un organe creux</td></tr>
<tr><td>Œsophagite : sensation non douloureuse</td><td>Inflammation de l'œsophage</td></tr>
<tr><td>Ascite : épanchement intra-duodénal</td><td>Épanchement péritonéal</td></tr>
<tr><td>Constipation : selles peu abondantes et peu solides</td><td>Selles rares et dures</td></tr>
<tr><td>Ictère : coloration bleuâtre liée à l'insuline</td><td>Coloration jaune liée à la bilirubine</td></tr>
<tr><td>Syncope : perte de connaissance partielle</td><td>Perte de connaissance complète</td></tr>
<tr><td>Hémoptysie : sang rejeté par le nez</td><td>Par la bouche, lors d'une toux</td></tr>
<tr><td>Diurèse : qualité des urines</td><td>Quantité des urines en 24 h</td></tr>
<tr><td>Symptômes subjectifs : révélés par l'examen clinique</td><td>Révélés par l'interrogatoire</td></tr>
<tr><td>Interrogatoire facultatif</td><td>Indispensable</td></tr>
<tr><td>Hypertension portale : hépatomégalie</td><td>Circulation collatérale, varices œsophagiennes, splénomégalie</td></tr>
</table>
` },

"dt": { html: `
<div class="retenir"><b>Fiche élaborée d'après les exercices « Diététique » (QCD et QCM) et leurs corrections.</b> Les points marqués « à confirmer » sont ceux que les corrections signalent comme incertains. Si votre cours officiel indique d'autres valeurs, c'est lui qui fait foi.</div>

<h3>1. Définitions</h3>
<ul>
<li><b>Diététique :</b> étude de l'administration raisonnée et méthodique de l'aliment pour couvrir les besoins nutritionnels (art d'une alimentation équilibrée).</li>
<li><b>Ration alimentaire :</b> quantité d'aliment donnée à l'enfant, répartie au cours de la journée.</li>
<li><b>Allaitement exclusif :</b> uniquement le lait maternel, <b>sans eau</b>, décoction, jus, lait ni autre aliment, sauf les médicaments prescrits (jusqu'à 6 mois).</li>
<li><b>Aliment prépondérant :</b> le lait (et non « le lait + eau + jus »).</li>
<li><b>Alimentation de remplacement :</b> nourrir l'enfant avec un lait autre que celui de sa mère.</li>
</ul>

<h3>2. Anatomie et physiologie du sein</h3>
<ul>
<li><b>Le sein comporte 2 parties :</b> la glande mammaire et le revêtement cutané. C'est un organe sexuel secondaire et un organe de la lactation.</li>
<li><b>Glande :</b> lobes, acini (alvéoles) et canaux excréteurs (canal alvéolaire, canaux intra et interlobaires). Les canaux véhiculent le lait de son lieu de sécrétion jusqu'à son éjection.</li>
<li><b>Revêtement cutané :</b> aréole, mamelon et <b>tubercules de Montgomery</b> (situés sur l'aréole, ce ne sont pas des orifices du mamelon).</li>
<li><b>Innervation :</b> plexus cervical superficiel et nerfs intercostaux.</li>
</ul>
<table>
<tr><th>Hormone</th><th>Rôle</th></tr>
<tr><td><b>Prolactine</b> (antéhypophyse)</td><td>Hormone chef de file de la <b>production</b> du lait. Elle n'éjecte pas le lait.</td></tr>
<tr><td><b>Ocytocine</b> (posthypophyse)</td><td><b>Éjection</b> du lait (contraction des cellules qui propulsent le lait vers le sinus lactifère) ; contraction utérine, hémostase physiologique après la délivrance (ligatures vivantes de Pinard)</td></tr>
<tr><td><b>Œstrogène et progestérone</b></td><td>Après l'expulsion du placenta, ils <b>baissent</b> : cela déclenche la montée laiteuse sous contrôle de la prolactine</td></tr>
</table>
<ul>
<li><b>Réflexe d'éjection :</b> la succion comprime le sinus lactifère et éjecte le lait dans la bouche du bébé. Il peut aussi être déclenché quand la mère voit, entend ou pense à son bébé.</li>
<li><b>Facteurs entravant la montée laiteuse :</b> stress, compression des seins, soutien-gorge trop serré, sédatifs. La succion régulière et la stimulation du mamelon la favorisent.</li>
</ul>

<h3>3. Les laits maternels</h3>
<table>
<tr><th>Lait</th><th>Caractéristiques</th></tr>
<tr><td><b>Colostrum</b></td><td>Jaune ou clair, épais ; riche en <b>protéines, sels minéraux et anticorps</b> ; excellent laxatif (aide à éliminer le méconium) ; aide au démarrage de l'allaitement</td></tr>
<tr><td><b>Lait de transition</b></td><td>Blanc, plus fluide, plus riche en graisses et en sucre que le colostrum ; produit entre 1 et 3 semaines (à confirmer)</td></tr>
<tr><td><b>Lait mature</b></td><td>Produit vers la <b>2<sup>e</sup> semaine</b> (et non le 6<sup>e</sup> jour)</td></tr>
<tr><td><b>Lait préterme</b></td><td>Lait de la mère qui accouche avant terme (par exemple à 32 semaines d'aménorrhée), adapté au prématuré</td></tr>
</table>
<ul>
<li>La composition du lait varie d'une tétée à l'autre, au cours d'une même tétée (le lait de fin de tétée est plus riche en graisses) et selon l'âge de la grossesse. Elle ne dépend pas de l'âge de la mère.</li>
<li>Le lait maternel contient des <b>anticorps</b> (et non des antigènes) qui protègent le nourrisson et favorisent sa croissance. Il est avantageux pour la mère et pour l'enfant.</li>
</ul>

<h3>4. Conduite de l'allaitement</h3>
<ul>
<li><b>Mise au sein précoce :</b> dans la <b>première heure</b> de vie (à confirmer pour la durée exacte). Elle limite la perte de poids physiologique. L'allaitement immédiat facilite l'expulsion du placenta, stimule les contractions utérines et réduit le risque d'hémorragie.</li>
<li><b>À la demande :</b> le lait maternel est donné autant de fois que l'enfant le réclame.</li>
<li>L'enfant <b>vide bien le premier sein</b> avant de prendre le second ; l'autre sein est réservé à la tétée suivante.</li>
<li><b>Après la tétée :</b> faire roter l'enfant, puis le coucher sur le côté ou sur le dos (pas en décubitus ventral).</li>
<li><b>Nourrice :</b> alimentation variée et équilibrée (elle favorise l'allaitement), au moins 8 heures de sommeil dans un environnement calme, vêtements non serrés.</li>
<li><b>Jumeaux :</b> position « football américain ».</li>
<li><b>Crevasses :</b> laisser les seins à l'air libre. <b>Seins ombiliqués ou plats :</b> stimuler le mamelon, déprimer l'aréole pour le faire ressortir (à confirmer).</li>
<li>Un bébé qui pleure après chaque tétée ne signe pas forcément une hypogalactie : vérifier d'abord la prise du sein et la prise de poids.</li>
<li><b>Extraction du lait :</b> pour soulager la mère, entretenir la lactation et nourrir l'enfant. Le nombre de types de tire-lait (« quatre ») est à confirmer.</li>
<li>L'allaitement exclusif ne protège pas totalement contre une grossesse : la mère n'est pas dispensée de contraception.</li>
</ul>

<h3>5. Position, prise du sein et tétée efficace</h3>
<table>
<tr><th>Notion</th><th>Critères</th></tr>
<tr><td><b>Bonne position</b></td><td>Corps de l'enfant près de la mère qui le soutient ; visage face au sein ; ventre contre ventre ; tête et corps alignés</td></tr>
<tr><td><b>Bonne prise du sein</b></td><td>Bouche grande ouverte couvrant une grande partie de l'aréole ; menton contre le sein ; lèvre inférieure éversée ; aréole plus visible au-dessus qu'au-dessous</td></tr>
<tr><td><b>Tétée efficace</b></td><td>Succion lente, profonde et audible, avec des pauses ; joues rondes remplies de lait ; déglutition audible ; sein plus mou après la tétée ; pas de douleur pour la mère</td></tr>
</table>

<h3>6. Difficultés et complications de l'allaitement</h3>
<table>
<tr><th>Problème</th><th>À retenir</th></tr>
<tr><td><b>Engorgement</b></td><td>Tension mammaire douloureuse dans les 5 à 6 premiers jours ; favorisé par le retard de mise en route de l'allaitement (le sein reste plein)</td></tr>
<tr><td><b>Mastite</b></td><td>Complication d'un engorgement mal traité</td></tr>
<tr><td><b>Lymphangite</b></td><td>Douleur diffuse, asthénie, hyperthermie à 40 °C, rougeur mammaire en placard</td></tr>
<tr><td><b>Galactophorite</b></td><td>Infection des canaux lactifères, 3 à 4 jours après une lymphangite mal traitée</td></tr>
<tr><td><b>Abcès</b></td><td>Sein tendu, modérément douloureux, avec pus</td></tr>
<tr><td><b>Muguet du nouveau-né</b></td><td>Gêne la tétée</td></tr>
</table>

<h3>7. Alimentation de remplacement</h3>
<ul>
<li><b>Conditions AFADS :</b> <b>A</b>cceptable, <b>F</b>aisable, <b>A</b>ccessible, <b>D</b>urable et <b>S</b>ûre. Elles doivent toutes être réunies, sinon l'alimentation de remplacement est déconseillée.</li>
<li><b>Indications :</b> enfant abandonné, mère décédée, mère VIH positive (si AFADS). Le diabète maternel n'en est pas une.</li>
<li><b>Inconvénients :</b> difficultés de préparation du lait de vache, de contact direct et d'affection mère-enfant, d'adaptation du lait aux besoins nutritionnels. Elle éloigne la mère de l'enfant.</li>
<li>Le substitut du lait maternel se donne à <b>heures régulières</b>, selon les rations (et non à la demande).</li>
</ul>

<h3>8. Préparation des laits</h3>
<ul>
<li><b>Lait maternisé en poudre :</b> <b>1 mesurette rase pour 30 ml</b> d'eau bouillie tiédie. Nombre de mesurettes = volume en ml ÷ 30.</li>
<li><b>Âges :</b> 1<sup>er</sup> âge (Nan I) jusqu'à 6 mois ; 2<sup>e</sup> âge ensuite.</li>
<li><b>Laits de 1<sup>er</sup> âge :</b> LCNS (lait concentré non sucré) et lait de vache liquide à demi (à confirmer). Le <b>lait de vache liquide entier (LVLE)</b> est un lait de 2<sup>e</sup> âge : il n'est pas adapté avant 6 mois, sauf avec <b>coupage</b> (deux tiers de lait, un tiers d'eau, avec un carreau de sucre).</li>
<li>Les laits semi-liquides ont perdu 50 % de leur eau (lait concentré, à confirmer).</li>
</ul>
<table>
<tr><th>Exemple</th><th>Calcul</th></tr>
<tr><td>Nouveau-né de 6 kg</td><td>150 ml d'eau + 5 mesurettes de 1<sup>er</sup> âge</td></tr>
<tr><td>Nourrisson de 10 mois</td><td>240 ml d'eau + 8 mesurettes de 2<sup>e</sup> âge</td></tr>
<tr><td>Nourrisson de 6 mois 15 jours</td><td>210 ml d'eau + 7 mesurettes de 2<sup>e</sup> âge</td></tr>
<tr><td>Nourrisson de 3 mois (Nan)</td><td>150 ml d'eau + 5 mesurettes de Nan I</td></tr>
<tr><td>Nouveau-né de 3 semaines (bol de 100 ml)</td><td>100 ÷ 30 = 3,33 mesurettes</td></tr>
<tr><td>Nouveau-né de 2,700 kg</td><td>3 mesurettes pour 90 ml</td></tr>
<tr><td>Nourrisson de 2 mois au LVLE</td><td>80 ml de LVLE + 40 ml d'eau + 1 carreau de sucre</td></tr>
</table>

<h3>9. Besoins et rations</h3>
<ul>
<li><b>Ration journalière</b> = poids × besoin en ml/kg/jour. <b>Ration par repas</b> = ration journalière ÷ nombre de repas. Exemple : 5 kg × 150 ml = 750 ml/jour ; sur 6 repas, 125 ml par repas.</li>
<li><b>Besoin en eau de l'enfant :</b> 80 à 100 ml/kg (à confirmer).</li>
<li><b>Nouveau-né à terme :</b> J0 : 60 à 80 ml/kg ; J15 : 140 à 160 ml/kg (à confirmer). <b>Prématuré :</b> J15 : 160 à 170 ml/kg (à confirmer).</li>
<li><b>Repères du cours :</b> enfant qui double son poids de naissance : environ 150 ml par repas ; qui le triple : environ 220 ml ; nouveau-né de 24 jours : 100 ml × 5 repas ; enfant de 3 mois 15 jours : 165 ml (ces valeurs sont à confirmer avec votre cours).</li>
<li><b>Risque commun</b> au prématuré, à l'hypotrophe et au macrosome : l'<b>hypoglycémie</b>.</li>
</ul>

<h3>10. VIH et alimentation de l'enfant</h3>
<ul>
<li>Enfant infecté par le VIH, ou nouveau-né sous traitement antirétroviral : allaitement exclusif jusqu'à 6 mois, puis poursuite jusqu'à 2 ans ou plus.</li>
<li>Alimentation de remplacement exclusive de la naissance à 6 mois, uniquement si les conditions AFADS sont réunies.</li>
<li><b>Enfants de 24 à 59 mois vivant avec le VIH :</b> 3 à 4 repas équilibrés + 2 collations par jour. On continue à donner du lait après 24 mois.</li>
<li>Nourrisson de 7 à 8 mois : le nombre de repas annoncé (5 à 6 + un goûter) est faux dans le QCD (à confirmer).</li>
</ul>

<h3>11. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>Une alimentation variée entrave l'allaitement</td><td>Elle le favorise</td></tr>
<tr><td>Prolactine : éjection du lait</td><td>Prolactine : production ; ocytocine : éjection</td></tr>
<tr><td>Le lait contient des antigènes protecteurs</td><td>Des anticorps</td></tr>
<tr><td>Colostrum pauvre en protéines et sels minéraux</td><td>Riche en protéines, sels minéraux et anticorps</td></tr>
<tr><td>Œstrogène et progestérone augmentent après le placenta</td><td>Ils baissent</td></tr>
<tr><td>Allaitement exclusif : eau autorisée</td><td>Aucune eau ; seuls les médicaments prescrits</td></tr>
<tr><td>Mise au sein dans les 24 premières heures</td><td>Dans la première heure</td></tr>
<tr><td>La mise au sein précoce favorise la perte de poids</td><td>Elle la limite</td></tr>
<tr><td>Lait mature vers le 6<sup>e</sup> jour</td><td>Vers la 2<sup>e</sup> semaine</td></tr>
<tr><td>Soutien-gorge serré : aide la montée laiteuse</td><td>Il l'entrave</td></tr>
<tr><td>Après la tétée : décubitus ventral</td><td>Sur le côté ou sur le dos, après le rot</td></tr>
<tr><td>Le substitut du lait se donne à la demande</td><td>À heures régulières</td></tr>
<tr><td>LVLE adapté au nouveau-né de 3 mois</td><td>Non adapté avant 6 mois (coupage si besoin)</td></tr>
<tr><td>Tubercules de Montgomery : orifices du mamelon</td><td>Situés sur l'aréole</td></tr>
<tr><td>Allaitement exclusif : pas besoin de contraception</td><td>Protection incomplète</td></tr>
<tr><td>Aliment prépondérant : lait + eau + jus</td><td>Le lait</td></tr>
</table>
` },

"mi": { html: `
<div class="retenir"><b>Fiche élaborée d'après les exercices « Maladies infectieuses » (QCD et QCM) et leurs corrections.</b> Les points marqués « à confirmer » sont ceux que les corrections signalent comme incertains. Si votre cours officiel indique d'autres valeurs, c'est lui qui fait foi.</div>

<h3>1. Généralités sur les maladies infectieuses</h3>
<ul>
<li><b>Infection :</b> manifestations <b>cliniques et biologiques</b> résultant de la pénétration de micro-organismes dans l'organisme.</li>
<li><b>Agents :</b> agents microscopiques <b>vivants</b> : virus, bactéries, parasites, champignons. L'ADN n'est pas un agent infectieux.</li>
<li><b>Antigène :</b> substance reconnue comme étrangère par l'organisme.</li>
<li><b>Pouvoir pathogène :</b> virulence, toxicité, sécrétion d'enzymes, pouvoir antigénique. La <b>virulence</b> est la capacité de se multiplier et de résister à la phagocytose ; elle diminue avec le vieillissement de la souche, la chaleur et la lumière.</li>
<li><b>Réservoirs :</b> l'homme malade, l'<b>homme sain porteur</b> (porteur sain), les animaux (zoonoses : ils hébergent les germes et les transmettent à l'homme).</li>
<li><b>Portes d'entrée :</b> il y en a plusieurs : respiratoire, buccale (digestive), cutanée, génitale…</li>
<li><b>Produits contaminants :</b> par exemple les sécrétions de l'appareil génital (IST).</li>
</ul>
<table>
<tr><th>Mode de transmission</th><th>Exemples</th></tr>
<tr><td><b>Directe</b> (interhumaine, animal à l'homme)</td><td>Contact, manuportage</td></tr>
<tr><td><b>Indirecte</b></td><td>Eau et aliments souillés, objets, mouches</td></tr>
</table>
<p>La transmission n'est donc pas « seulement directe ».</p>
<p><b>Les 3 périodes, dans l'ordre :</b> <b>incubation</b> (de la pénétration du germe aux premiers signes), puis <b>invasion</b>, puis <b>état</b>. La période d'état n'est pas la période d'incubation.</p>
<p><b>Syndrome infectieux :</b> fièvre, pouls rapide, langue saburrale, oligurie, herpès péribuccal (liste à confirmer avec votre cours ; constipation et insomnie sont les intrus du QCM).</p>

<h3>2. Fièvre typhoïde</h3>
<table>
<tr><th>Rubrique</th><th>À retenir</th></tr>
<tr><td><b>Agent</b></td><td>Bactérie : <i>Salmonella typhi</i> (et non le vibrion cholérique, ni le bacille de Hansen)</td></tr>
<tr><td><b>Nature</b></td><td>Maladie du <b>péril fécal</b></td></tr>
<tr><td><b>Réservoir</b></td><td>Strictement humain : l'homme malade et le porteur chronique</td></tr>
<tr><td><b>Produits contaminants</b></td><td>Urines, sang, selles</td></tr>
<tr><td><b>Transmission</b></td><td>Deux modes : directe et indirecte (eau et aliments souillés)</td></tr>
<tr><td><b>Facteurs favorisants</b></td><td>Pauvreté, mauvaise hygiène ; le lévirat n'a aucun lien</td></tr>
<tr><td><b>Forme typique</b></td><td>Céphalées, insomnies, vertiges, épistaxis, <b>fièvre en plateau</b> à 39-40 °C. La myalgie n'en fait pas partie.</td></tr>
<tr><td><b>Signes digestifs</b></td><td>Diarrhée en « jus de pois » (et non « jus de papaye »), météorisme abdominal, splénomégalie, langue saburrale, gargouillement et sensibilité de la fosse iliaque droite</td></tr>
<tr><td><b>Dissociation pouls-température</b></td><td>Pouls lent pour la température. C'est la constante qui permet le diagnostic différentiel avec le paludisme.</td></tr>
<tr><td><b>Forme atypique</b></td><td>Tableau de gastro-entérite fébrile ; <b>tuphos</b> : prostration, indifférence, hébétude, délire</td></tr>
<tr><td><b>Diagnostic</b></td><td>NFS : <b>leucopénie</b>. <b>Certitude : hémoculture</b> (et coproculture). <b>Widal et Félix :</b> sérodiagnostic de <b>présomption</b> ; anticorps anti-H vers le 10<sup>e</sup> jour (à confirmer).</td></tr>
<tr><td><b>Complications</b></td><td>Les plus fréquentes : perforations et hémorragies intestinales (et non l'abcès du foie)</td></tr>
<tr><td><b>Prophylaxie collective</b></td><td>Lutte contre le péril fécal, mesures hygiéno-diététiques, lavage des mains avant chaque repas</td></tr>
</table>

<h3>3. Choléra</h3>
<table>
<tr><th>Rubrique</th><th>À retenir</th></tr>
<tr><td><b>Agent</b></td><td>Vibrion cholérique ; toxi-infection <b>intestinale</b></td></tr>
<tr><td><b>Déclaration</b></td><td>Maladie à déclaration <b>obligatoire</b></td></tr>
<tr><td><b>Signes</b></td><td>Diarrhée profuse, aqueuse, « eau de riz » ; vomissements ; <b>apyrétique</b> (pas de fièvre)</td></tr>
<tr><td><b>Conséquence</b></td><td>Déshydratation (diarrhée et vomissements) ; deux stades : modérée (perte de 5 à 10 % du poids) et sévère (perte de 10 % ou plus)</td></tr>
<tr><td><b>Réservoirs</b></td><td>Homme malade, cadavre, homme sain, fruits de mer ; l'animal n'est pas retenu (à confirmer)</td></tr>
</table>
<table>
<tr><th>Plan</th><th>Situation</th><th>Réhydratation</th></tr>
<tr><td><b>Plan A</b></td><td>Pas de déshydratation (pas de pli cutané)</td><td>Davantage de liquides à domicile, par voie orale</td></tr>
<tr><td><b>Plan B</b></td><td>Déshydratation modérée</td><td>SRO par voie orale</td></tr>
<tr><td><b>Plan C</b></td><td>Déshydratation sévère</td><td>Perfusion (et non les SRO)</td></tr>
</table>
<ul>
<li>On ne refuse jamais l'eau à un enfant atteint de choléra : la réhydratation orale est essentielle.</li>
<li><b>Prophylaxie collective :</b> communication pour le changement de comportement, latrines (construction, utilisation, entretien), isolement des malades en période d'épidémie, assainissement du milieu.</li>
<li><b>Prophylaxie individuelle :</b> lavage des mains avant chaque repas, lutte contre le péril fécal, lavage des légumes et fruits consommés crus.</li>
</ul>

<h3>4. Tétanos</h3>
<ul>
<li><b>Agent :</b> <i>Clostridium tetani</i>, <b>bacille de Nicolaier</b> (le bacille de Koch est celui de la tuberculose).</li>
<li><b>Conditions d'apparition :</b> plusieurs, et non une seule : plaie, anaérobiose, absence d'immunité.</li>
<li><b>Signes :</b> <b>trismus</b> (signe pathognomonique), contractures, <b>paroxysmes</b>. Le trismus n'est pas le signe de la rougeole.</li>
<li><b>Buts du traitement :</b> prévenir les complications, détruire le germe, réduire les contractions, neutraliser la toxine circulante. Sonder le malade et tester le TDR n'en sont pas.</li>
<li><b>Prévention :</b> vaccination antitétanique efficace.</li>
</ul>

<h3>5. Poliomyélite</h3>
<table>
<tr><th>Rubrique</th><th>À retenir</th></tr>
<tr><td><b>Nature</b></td><td>Maladie infectieuse <b>virale</b> (et non immunitaire), cosmopolite et <b>invalidante</b> (paralysies)</td></tr>
<tr><td><b>Réservoir</b></td><td>Exclusivement humain : homme malade ou porteur sain</td></tr>
<tr><td><b>Transmission</b></td><td>Péril fécal, voie féco-orale ; transmission directe par <b>manuportage</b> ; elle n'est pas sanguine</td></tr>
<tr><td><b>Facteurs favorisants</b></td><td>Mauvaises conditions d'hygiène</td></tr>
<tr><td><b>Formes</b></td><td>Inapparente (aucun trouble), atténuée, paralytique, respiratoire (atteinte des muscles respiratoires, forme bulbaire)</td></tr>
<tr><td><b>Confirmation</b></td><td>Poliovirus dans les <b>selles</b></td></tr>
<tr><td><b>Mode épidémiologique</b></td><td>Endémo-épidémique</td></tr>
<tr><td><b>Vaccins</b></td><td>Injectable par voie intramusculaire ou sous-cutanée (jamais intraveineuse) ; oral de Sabin (schéma à confirmer avec votre cours) ; associé à d'autres vaccins (DTC-Polio…)</td></tr>
</table>
<p><b>Lutte contre le péril fécal :</b> utilisation systématique des latrines, désinfection des selles des malades, protection des aliments contre les mouches. Le vaccin n'en fait pas partie.</p>

<h3>6. Rougeole</h3>
<ul>
<li><b>Signes :</b> fièvre, <b>catarrhe oculo-respiratoire</b> (typique, absent de la polio), éruption <b>descendante</b> débutant derrière les oreilles. Pas de constipation ni d'anorexie parmi les signes retenus.</li>
<li><b>Signe de Koplik :</b> petites taches blanc-bleuâtre à l'intérieur de la joue, <b>pathognomonique</b> de la rougeole.</li>
<li><b>Diagnostic :</b> essentiellement clinique.</li>
<li><b>Complications générales :</b> déshydratation, malnutrition. <b>Signes nerveux :</b> convulsions, raideur de la nuque.</li>
<li><b>Épidémiologie :</b> maladie endémique, endémo-épidémique en zone urbaine (à confirmer).</li>
<li><b>Soins :</b> on lave l'enfant à l'eau tiède ; le savon n'est pas systématique.</li>
</ul>

<h3>7. Varicelle et zona</h3>
<ul>
<li>Même virus : le <b>virus varicelle-zona</b> (VZV).</li>
<li><b>Varicelle :</b> maladie bénigne chez l'immunocompétent ; éruption débutant plutôt au tronc et au cuir chevelu qu'au visage (à confirmer).</li>
<li><b>Zona :</b> fréquent chez les immunodéprimés ; peut avoir une manifestation oculaire (zona ophtalmique) ; principale complication : <b>algie post-zostérienne</b>.</li>
</ul>

<h3>8. Angines et RAA</h3>
<ul>
<li><b>Angines :</b> incidence élevée en saison froide ; moins fréquentes après 35 ans ; la tachycardie fait partie des signes généraux ; traitement par antibiotiques et antalgiques, et non par anti-inflammatoires stéroïdiens.</li>
</ul>
<table>
<tr><th>Rubrique</th><th>Rhumatisme articulaire aigu (RAA, maladie de Bouillaud)</th></tr>
<tr><td><b>Germe</b></td><td>Streptocoque bêta-hémolytique du groupe A (et non le staphylocoque)</td></tr>
<tr><td><b>Origine</b></td><td>Maladie secondaire à une infection oropharyngée (angine)</td></tr>
<tr><td><b>Âge</b></td><td>Enfants de 7 à 14 ans (5 à 15 ans, tranche classique)</td></tr>
<tr><td><b>Manifestations majeures</b></td><td>Atteinte articulaire migratrice des grosses articulations (non bilatérale fixe), atteinte cardiaque (cardite), atteinte nerveuse (chorée). La douleur cervicale n'en fait pas partie.</td></tr>
</table>

<h3>9. Méningite purulente</h3>
<ul>
<li><b>Trépied méningitique :</b> <b>trois</b> signes : céphalées en casque, vomissements en jet, constipation (inconstante). Les douleurs articulaires, la diarrhée et l'épistaxis en sont exclues.</li>
<li><b>Syndrome méningé :</b> trépied, raideur de la nuque, signes de Kernig et de Brudzinski positifs ; le <b>signe de Civet</b> s'observe dans les méningites purulentes (à confirmer).</li>
<li>Météorisme, splénomégalie et langue saburrale sont des signes de la typhoïde, pas de la méningite.</li>
<li><b>Séquelles :</b> surdité, cécité, épilepsie. L'anurie n'est pas une séquelle.</li>
<li>Le bacille de Nicolaier n'est pas l'agent de la méningite (c'est celui du tétanos).</li>
</ul>

<h3>10. Coqueluche, oreillons, lèpre, tuberculose</h3>
<ul>
<li><b>Coqueluche :</b> toux <b>quinteuse</b>, sèche, tenace, à prédominance <b>nocturne</b> (à confirmer). <b>Complications mécaniques :</b> hernie, prolapsus rectal, épistaxis, ulcération du frein de la langue.</li>
<li><b>Oreillons :</b> l'<b>orchite ourlienne</b> est une localisation <b>testiculaire</b> (douleur testiculaire, et non douleur à la miction ni localisation oculaire).</li>
<li><b>Lèpre :</b> bacille de Hansen = <i>Mycobacterium leprae</i>.</li>
<li><b>Tuberculose :</b> bacille de Koch ; localisations pulmonaire, génitale, osseuse (le <b>mal de Pott</b> est vertébral).</li>
</ul>

<h3>11. Parasitoses intestinales</h3>
<ul>
<li><b>Hôte intermédiaire :</b> héberge en général la <b>forme larvaire</b> du parasite.</li>
<li><b>Contamination orale :</b> aliments souillés, mouches, mains sales. Le pied nu sale est une voie <b>cutanée</b> (ankylostome).</li>
<li><b>Prophylaxie :</b> lutte contre le péril fécal, latrines, éviter les crudités souillées. La moustiquaire imprégnée concerne le paludisme.</li>
<li><b>Oxyurose :</b> traiter toute la famille (et pas seulement les malades), se laver les mains avant chaque repas, couper les ongles courts (à confirmer).</li>
<li><b>Examens :</b> les selles liquides doivent être analysées rapidement (transport de 30 minutes).</li>
<li>Le parasite vit aux dépens de son hôte sans le tuer : ce n'est pas un prédateur.</li>
</ul>

<h3>12. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>Période d'état : de la pénétration aux premiers signes</td><td>C'est l'incubation (ordre : incubation, invasion, état)</td></tr>
<tr><td>L'homme sain ne peut pas être réservoir</td><td>Le porteur sain est un réservoir</td></tr>
<tr><td>La typhoïde n'est pas liée au péril fécal</td><td>C'est une maladie du péril fécal</td></tr>
<tr><td>Typhoïde : diarrhée en jus de papaye</td><td>Jus de pois</td></tr>
<tr><td>Widal : examen de certitude</td><td>Présomption ; certitude = hémoculture</td></tr>
<tr><td>Dissociation pouls-température : tétanos</td><td>Fièvre typhoïde</td></tr>
<tr><td>Complication fréquente de la typhoïde : abcès du foie</td><td>Perforations et hémorragies intestinales</td></tr>
<tr><td>Choléra : déclaration non obligatoire</td><td>Déclaration obligatoire</td></tr>
<tr><td>Choléra : fièvre</td><td>Apyrétique</td></tr>
<tr><td>Plan B ou C par perfusion ; plan C par SRO</td><td>Plan B : SRO ; plan C : perfusion</td></tr>
<tr><td>Interdire l'eau dans le choléra</td><td>La réhydratation orale est essentielle</td></tr>
<tr><td>Vibrion cholérique : agent de la typhoïde</td><td>Choléra ; typhoïde : <i>Salmonella typhi</i></td></tr>
<tr><td>Tétanos : bacille de Koch</td><td>Bacille de Nicolaier (Koch : tuberculose)</td></tr>
<tr><td>Trismus : signe de la rougeole</td><td>Signe du tétanos</td></tr>
<tr><td>Koplik : tétanos</td><td>Rougeole</td></tr>
<tr><td>Catarrhe oculo-respiratoire : poliomyélite</td><td>Rougeole</td></tr>
<tr><td>Polio : non invalidante, contamination sanguine</td><td>Invalidante ; féco-orale</td></tr>
<tr><td>RAA : staphylocoque</td><td>Streptocoque bêta-hémolytique du groupe A</td></tr>
<tr><td>Trépied méningitique : 2 signes</td><td>3 signes</td></tr>
<tr><td>Orchite ourlienne : localisation oculaire</td><td>Localisation testiculaire</td></tr>
<tr><td>Angine : anti-inflammatoire stéroïdien</td><td>Antibiotiques et antalgiques</td></tr>
</table>
` },

"hy": { html: `
<div class="retenir"><b>Fiche élaborée d'après les exercices « Hygiène et assainissement » (QCD et QCM) et leurs corrections.</b> Les points marqués « à confirmer » sont ceux que les corrections signalent comme incertains. Si votre cours officiel indique d'autres valeurs, c'est lui qui fait foi.</div>

<h3>1. Objectifs de l'hygiène du milieu</h3>
<ul>
<li><b>Prévenir</b> la mortalité prématurée et <b>promouvoir</b> le bien-être de la population.</li>
<li>Traiter les maladies et les traumatismes relève de la médecine, pas de l'hygiène du milieu. Assurer le confort n'est pas retenu comme objectif.</li>
</ul>

<h3>2. L'eau</h3>
<h3 style="font-size:1rem;margin-top:14px">2.1. Qualités d'une eau potable</h3>
<p>Une eau potable doit respecter à la fois des critères <b>physiques, chimiques et bactériologiques</b>.</p>
<ul>
<li><b>Qualités physiques :</b> limpide, inodore, incolore (saveur agréable).</li>
<li><b>Chimiques :</b> composition chimique équilibrée.</li>
<li><b>Bactériologiques :</b> absence de micro-organismes pathogènes.</li>
</ul>

<h3 style="font-size:1rem;margin-top:14px">2.2. Correction des défauts de l'eau</h3>
<table>
<tr><th>Défaut</th><th>Procédé</th></tr>
<tr><td><b>Turbidité</b></td><td>Décantation, sédimentation, filtration (le charbon ne corrige pas la turbidité)</td></tr>
<tr><td><b>Saveur et odeur</b></td><td>Charbon actif ou charbon de bois, aération (la décantation ne les corrige pas)</td></tr>
<tr><td><b>Défauts chimiques</b></td><td>Correction qui équilibre la composition chimique pour rendre l'eau potable</td></tr>
<tr><td><b>Défauts bactériologiques</b></td><td>Désinfection : débarrasse l'eau des micro-organismes pathogènes</td></tr>
</table>
<ul>
<li><b>Chloration :</b> purification de l'eau avec le chlore (eau de Javel).</li>
<li><b>Ébullition :</b> faire bouillir l'eau puis la laisser refroidir, à l'abri de toute contamination, avant de l'utiliser.</li>
</ul>

<h3 style="font-size:1rem;margin-top:14px">2.3. Les puits</h3>
<p>Les puits sont le moyen le plus courant de captage des eaux souterraines.</p>
<table>
<tr><th>Type</th><th>Caractéristique</th></tr>
<tr><td><b>Puits ordinaire</b></td><td>Creusé manuellement</td></tr>
<tr><td><b>Puits foncé</b></td><td>Tube perforé enfoncé dans la terre</td></tr>
<tr><td><b>Puits foré</b></td><td>Réalisé à la machine (forage) ; il ne se creuse pas au lieu même de la source</td></tr>
<tr><td><b>Puits artésien</b></td><td>L'eau jaillit sous la pression naturelle d'une nappe captive (à confirmer) ; ce n'est pas simplement « un puits obtenu par forage »</td></tr>
</table>

<h3 style="font-size:1rem;margin-top:14px">2.4. Pollution de l'eau et maladies liées à l'eau</h3>
<ul>
<li><b>Types de pollution :</b> domestique, industrielle, agricole.</li>
<li>Les eaux résiduelles industrielles doivent être épurées avant leur évacuation en mer.</li>
<li><b>Maladies parasitaires liées à l'eau :</b> schistosomiases et helminthiases. La dysenterie bacillaire et la fièvre typhoïde sont bactériennes ; la poliomyélite et les hépatites virales sont virales.</li>
</ul>

<h3>3. Les déchets solides (ordures ménagères)</h3>
<ul>
<li><b>Les 3 phases de l'évacuation :</b> <b>stockage, ramassage, élimination</b> (et non « financement »).</li>
<li><b>Stockage familial :</b> à domicile, dans un récipient <b>avec couvercle</b>.</li>
<li><b>Stockage communautaire :</b> bacs ou dépôts collectifs, avant ramassage et décharge.</li>
<li><b>Incinération :</b> combustion des ordures (et non leur recyclage).</li>
<li><b>Compostage :</b> transformation des déchets <b>organiques</b> (biodégradables) en compost utilisable comme engrais, et non des déchets synthétiques.</li>
<li><b>Normes de sécurité d'une décharge commune</b> (à confirmer) : au moins 100 m de tout cours d'eau, entourée d'une palissade en matériaux locaux, sur un terrain argileux (imperméable).</li>
</ul>

<h3>4. Excréta : latrines et fosse septique</h3>
<ul>
<li><b>Règles d'emplacement d'une latrine</b> (à confirmer) : au moins à 6 m de tout habitat, emplacement sec et bien drainé ; en aval et loin de toute source d'eau, au-dessus du niveau de crue.</li>
</ul>
<table>
<tr><th>Fosse septique</th><th>Points</th></tr>
<tr><td><b>Avantages</b></td><td>Éviter la pollution du sol superficiel ; éviter la contamination des eaux de surface et souterraines ; éviter l'accès des excréta aux mouches et aux rongeurs</td></tr>
<tr><td><b>Inconvénients</b></td><td>Nécessite une installation d'eau courante ; nécessite l'évacuation de gros volumes d'eau</td></tr>
</table>

<h3>5. Lutte contre le péril fécal</h3>
<ul>
<li>Assurer la potabilité de l'eau.</li>
<li>Cuire ou désinfecter les aliments consommés crus ; ne manger que des aliments chauds.</li>
<li>Se laver proprement les mains avant de manger.</li>
<li>Traiter les malades atteints de gastro-entérites.</li>
<li>Construire des latrines de qualité.</li>
<li>Protéger les aliments contre les <b>mouches</b> (et non contre les moustiques).</li>
</ul>

<h3>6. Vecteurs et rongeurs</h3>
<table>
<tr><th>Lutte</th><th>Mesures</th></tr>
<tr><td><b>Contre les larves de moustiques</b> (suppression des gîtes larvaires)</td><td>Drainer et combler les eaux stagnantes ; supprimer les gîtes par le désherbage</td></tr>
<tr><td><b>Contre les moustiques adultes</b></td><td>Moustiquaire imprégnée (MILDA), crèmes anti-moustiques (répulsifs) ; vêtements clairs le soir (à confirmer)</td></tr>
<tr><td><b>Contre les rongeurs</b></td><td>Lutte <b>défensive</b> (prévention) et lutte <b>offensive</b> (destruction)</td></tr>
</table>

<h3>7. Le bruit</h3>
<p><b>Effets sur la santé :</b> modifications du caractère, hypoacousies pouvant aboutir à une surdité. La protection contre les bruits est un critère physiologique d'un habitat salubre.</p>

<h3>8. L'habitat salubre : les critères</h3>
<table>
<tr><th>Besoin</th><th>Critères</th></tr>
<tr><td><b>Physiologiques</b></td><td>Absence d'humidité ; aération et ventilation suffisantes ; protection contre les bruits</td></tr>
<tr><td><b>Psychologiques</b></td><td>Préservation de l'intimité ; possibilité d'assurer l'hygiène du logement (à confirmer)</td></tr>
<tr><td><b>Protection contre la contagion</b></td><td>Eau potable et courante ; évacuation des déchets solides et liquides</td></tr>
<tr><td><b>Sécurité</b></td><td>Protection contre les incendies et les accidents domestiques ; portes et fenêtres solides</td></tr>
</table>

<h3>9. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>La turbidité se corrige avec du charbon</td><td>Décantation, sédimentation, filtration</td></tr>
<tr><td>Saveur et odeur : décantation et sédimentation</td><td>Charbon actif, charbon de bois, aération</td></tr>
<tr><td>Puits foré : creusé au lieu même de la source</td><td>Réalisé à la machine</td></tr>
<tr><td>Les eaux industrielles n'ont pas besoin d'être épurées avant la mer</td><td>Elles doivent être traitées</td></tr>
<tr><td>Incinération : recycler les ordures</td><td>Brûler les ordures</td></tr>
<tr><td>Compostage : déchets synthétiques</td><td>Déchets organiques</td></tr>
<tr><td>Les 3 phases : stockage, ramassage, financement</td><td>Stockage, ramassage, élimination</td></tr>
<tr><td>Stockage familial : récipient sans couvercle</td><td>Récipient avec couvercle</td></tr>
<tr><td>Intimité : critère de protection</td><td>Critère psychologique</td></tr>
<tr><td>Protéger les aliments contre les moustiques</td><td>Contre les mouches</td></tr>
<tr><td>Moustiquaire imprégnée : lutte contre les larves</td><td>Lutte contre les adultes</td></tr>
<tr><td>Typhoïde, poliomyélite : maladies parasitaires liées à l'eau</td><td>Schistosomiases et helminthiases</td></tr>
<tr><td>Hygiène du milieu : traiter les maladies</td><td>Prévenir et promouvoir le bien-être</td></tr>
</table>
` },

"vh": { html: `
<div class="retenir"><b>Fiche élaborée d'après les exercices « Infection à VIH et IST » (QCD et QCM) et leurs corrections.</b> Les points marqués « à confirmer » sont ceux que les corrections signalent comme incertains (chiffres et dates en particulier). Si votre cours officiel indique d'autres valeurs, c'est lui qui fait foi.</div>

<h3>1. Le virus et la maladie</h3>
<ul>
<li><b>VIH :</b> virus de l'immunodéficience humaine. <b>SIDA :</b> syndrome d'immunodéficience acquise (sigle et acronyme). C'est une maladie contagieuse d'origine <b>virale</b>.</li>
<li><b>Famille :</b> <b>rétrovirus</b>, sous-famille des <b>lentivirus</b> (le VIH n'est pas un coronavirus, ni un rotavirus). Il possède une enzyme, la <b>transcriptase inverse</b>.</li>
<li><b>Déficience immunitaire :</b> incapacité du système immunitaire à défendre l'organisme.</li>
<li><b>Cellules cibles :</b> les cellules portant le récepteur <b>CD4</b> : lymphocytes <b>T4</b>, <b>macrophages</b>, cellules microgliales du cerveau, cellules folliculaires dendritiques des ganglions. Les organes lymphoïdes sont un réservoir important du virus.</li>
<li>La destruction des lymphocytes T4 est <b>progressive</b>, et non brutale. Les anticorps anti-VIH ne sont pas protecteurs (non neutralisants).</li>
<li><b>VIH-1 et VIH-2 :</b> le VIH-2 se transmet moins facilement et progresse plus lentement vers le SIDA.</li>
<li><b>Sensibilité :</b> le VIH est sensible aux désinfectants (soluté de Dakin, alcool à 70°, eau de Javel). Dans du sang en dessiccation, il peut résister environ une semaine (à confirmer).</li>
<li>Un sujet <b>séropositif n'est pas forcément sidéen</b> : la séropositivité précède le stade SIDA.</li>
</ul>

<h3>2. Évolution de l'infection</h3>
<table>
<tr><th>Phase</th><th>Caractéristiques</th></tr>
<tr><td><b>Primo-infection</b></td><td>Syndrome pseudo-grippal, parfois adénopathies cervicales et axillaires ; pas de maladies opportunistes</td></tr>
<tr><td><b>Latence</b></td><td><b>Asymptomatique</b> ; la sérologie VIH est positive</td></tr>
<tr><td><b>SIDA maladie</b></td><td>Maladies opportunistes ; l'amaigrissement est retenu comme toujours présent (à confirmer)</td></tr>
</table>
<ul>
<li>Selon l'OMS (1990), l'infection évolue en <b>quatre stades</b> (certains cours décrivent trois phases : primo-infection, latence, SIDA).</li>
<li><b>Surveillance biologique :</b> charge virale plasmatique (avec génotype en cas d'échec) et taux de lymphocytes CD4.</li>
</ul>

<h3>3. Transmission du VIH</h3>
<ul>
<li><b>Trois voies :</b> sexuelle (la plus fréquente à l'échelle planétaire, environ 90 %, à confirmer), sanguine (transfusion, AES, échange de seringues) et verticale (mère-enfant : grossesse, accouchement, allaitement). Il n'y a pas de voie digestive.</li>
<li>Le VIH ne se transmet pas « uniquement » par les rapports sexuels non protégés.</li>
<li><b>Liquides biologiques à risque élevé :</b> sang, sperme, sécrétions vaginales, liquide amniotique, lait maternel. La <b>salive</b> présente un risque négligeable.</li>
<li><b>Facteurs de risque de la transmission sexuelle :</b> stade avancé de la maladie (charge virale élevée), non-utilisation du préservatif, premier rapport chez la jeune fille, microtraumatismes, fellation (risque faible mais réel), IST associées.</li>
<li><b>Risque de transmission sanguine :</b> VIH 0,3 %, VHC 3 %, VHB 30 %. La transfusion de sang contaminé est le risque le plus élevé.</li>
<li>Toute transfusion se fait avec du sang <b>testé</b> ; il subsiste toujours un risque résiduel (fenêtre sérologique). En milieu de soins : précautions standard pour prévenir les AES.</li>
<li><b>Transmission mère-enfant :</b> taux de 7 % retenu dans le QCM (moins de 5 % sous prophylaxie, 30 à 40 % sans, à confirmer). Facteurs : charge virale élevée, CD4 bas, génotypes et phénotypes viraux, primo-infection pendant la grossesse ou l'allaitement, chorioamniotite. La césarienne programmée réduit le risque. L'accouchement est la période la plus à risque (à confirmer).</li>
</ul>
<p><b>Aucun risque de transmission :</b> baisers simples, poignée de main, mêmes toilettes ou douches, même couvert, même piscine, mêmes moyens de transport, piqûres d'insectes (moustiques).</p>

<h3>4. Déterminants de la propagation</h3>
<ul>
<li>Pauvreté, analphabétisme, inconscience, lévirat, mythe de l'uniforme des corps habillés, subordination de la femme, anatomie de la femme (muqueuse vaginale plus exposée).</li>
<li><b>Lévirat :</b> le frère prend la femme de son frère défunt en secondes noces. <b>Sororat :</b> l'homme épouse la sœur de sa femme défunte.</li>
<li><b>Impacts socio-économiques :</b> réduction de l'espérance de vie, besoins de soins accrus, baisse de la production agricole, dégradation de la famille ; près de la moitié des infectés ont moins de 25 ans.</li>
</ul>

<h3>5. Diagnostic</h3>
<ul>
<li><b>Diagnostic indirect :</b> recherche des anticorps (par exemple anti-gp41).</li>
<li><b>Tests rapides :</b> résultats immédiats (environ 30 minutes), sans équipement spécialisé ni personnel hautement qualifié. Le coût élevé n'est pas un avantage.</li>
<li>Après un rapport à risque, on ne peut pas savoir tout de suite : il faut attendre le <b>délai de séroconversion</b> de plusieurs semaines.</li>
</ul>

<h3>6. Traitement antirétroviral et repères nationaux</h3>
<ul>
<li>Le traitement ARV est recommandé chez toute personne vivant avec le VIH, <b>quel que soit le taux de CD4</b> (« tester et traiter tous »). Un traitement efficace prévient la transmission au partenaire sexuel.</li>
<li><b>Repères (à confirmer) :</b> premier cas de SIDA diagnostiqué en 1981 aux États-Unis ; premier cas en Côte d'Ivoire en 1985 ; plan d'élimination de la transmission mère-enfant à partir de 2012 ; note « tester et traiter tous » en 2016 (et non 2017) ; prévalence 1,5 % chez l'homme et 3,3 % chez la femme.</li>
</ul>

<h3>7. Les IST : généralités</h3>
<ul>
<li><b>IST :</b> infections (ou maladies) sexuellement transmissibles. Les <b>ITG</b> (infections du tractus génital) regroupent les infections d'origine sexuelle ou non : elles ne sont pas toutes des IST.</li>
<li><b>Germes :</b> bactériens, parasitaires, mycosiques et viraux. Les IST sont <b>contagieuses</b>.</li>
<li><b>Syndrome d'écoulement urétral :</b> principale IST chez l'homme ; la <b>gonococcie</b> en est la cause la plus fréquente.</li>
<li><b>Écoulement vaginal :</b> pas toujours pathologique (certaines pertes sont physiologiques). Le traitement associe mesures d'hygiène et traitement médicamenteux.</li>
</ul>

<h3>8. Contrôle et prise en charge des IST</h3>
<p><b>Deux stratégies prioritaires :</b> la <b>prévention</b> et le <b>traitement précoce et efficace</b>.</p>
<table>
<tr><th>Prévention</th><th>Contenu</th></tr>
<tr><td><b>Primaire</b></td><td>Changement de comportement, disponibilité des préservatifs</td></tr>
<tr><td><b>Secondaire</b></td><td>Prise en charge précoce des cas, dépistage, prise en charge des partenaires</td></tr>
</table>
<p>Le traitement vise à guérir, éviter les complications et réduire les nouveaux cas (limiter la contagiosité). La prévention ne se limite pas à réduire les contacts à risque : elle inclut la prise en charge des cas.</p>
<table>
<tr><th>Approche</th><th>Principe</th><th>Avantages</th><th>Limites</th></tr>
<tr><td><b>Syndromique</b> (adoptée en Côte d'Ivoire)</td><td>Groupes de signes et symptômes, sans laboratoire</td><td>Applicable partout, dans toutes les structures ; simple, rapide ; coût réduit</td><td>Erreurs possibles</td></tr>
<tr><td><b>Étiologique</b></td><td>Tests de laboratoire : identification de l'agent</td><td>Diagnostic précis ; traitement spécifique</td><td>Tests peu accessibles ; traitement différé</td></tr>
<tr><td><b>Clinique</b></td><td>Interrogatoire et examen</td><td>Soulagement rapide du patient</td><td>Erreur de diagnostic et de traitement ; ignore les infections mixtes</td></tr>
</table>
<p><b>Counseling :</b> la première étape est l'accueil du client.</p>

<h3>9. Double protection</h3>
<ul>
<li><b>Définition :</b> se protéger à la fois contre les IST/VIH et contre les grossesses non désirées. Ce n'est pas seulement « utiliser des préservatifs ».</li>
<li><b>Méthodes (à confirmer) :</b> préservatif seul, ou préservatif associé à un contraceptif ; fidélité réciproque dans un couple monogame avec contraceptif.</li>
<li><b>Avantages :</b> améliore la santé de l'individu, du couple et de la famille ; renforce les relations dans le couple ; diminue les dépenses liées aux maladies et aux grossesses non désirées.</li>
<li><b>Limites :</b> difficulté d'adhésion de tous les membres, apprentissage de l'utilisation, non-disponibilité des moyens à tout moment.</li>
</ul>

<h3>10. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>Sororat : l'homme prend la femme de son frère défunt</td><td>C'est le lévirat ; sororat : l'homme épouse la sœur de sa femme défunte</td></tr>
<tr><td>Double protection : utiliser des préservatifs</td><td>Protection simultanée contre IST/VIH et grossesses non désirées</td></tr>
<tr><td>IST et ITG sont la même chose</td><td>Les ITG sont plus larges (origine sexuelle ou non)</td></tr>
<tr><td>Les IST sont non contagieuses</td><td>Elles sont contagieuses</td></tr>
<tr><td>Approche étiologique : diagnostic imprécis</td><td>Diagnostic précis (laboratoire)</td></tr>
<tr><td>Le traitement des IST réduit seulement la contagiosité</td><td>Il guérit, évite les complications, réduit les nouveaux cas</td></tr>
<tr><td>Le VIH est un rotavirus</td><td>Rétrovirus (lentivirus)</td></tr>
<tr><td>Destruction brutale des T4</td><td>Progressive</td></tr>
<tr><td>La latence est symptomatique</td><td>Asymptomatique (sérologie positive)</td></tr>
<tr><td>La primo-infection donne des maladies opportunistes</td><td>Syndrome pseudo-grippal</td></tr>
<tr><td>VIH-1 se transmet moins facilement ; VIH-2 progresse vite</td><td>C'est le VIH-2 qui est moins transmissible et plus lent</td></tr>
<tr><td>Le VIH résiste à l'alcool à 70°</td><td>Il y est sensible</td></tr>
<tr><td>La salive est un liquide à risque élevé</td><td>Risque négligeable</td></tr>
<tr><td>Piqûres de moustiques, toilettes, poignée de main : transmission</td><td>Aucun risque</td></tr>
<tr><td>Transmission sanguine : VIH 30 %, VHB 0,3 %</td><td>VIH 0,3 %, VHC 3 %, VHB 30 %</td></tr>
<tr><td>La voie sexuelle est la moins fréquente</td><td>Elle est la plus fréquente</td></tr>
<tr><td>Séropositif = sidéen</td><td>La séropositivité précède le SIDA</td></tr>
<tr><td>Note « tester et traiter tous » : 2017</td><td>2016 (à confirmer)</td></tr>
<tr><td>Prise en charge des partenaires : prévention primaire</td><td>Prévention secondaire</td></tr>
</table>
` },

"sn": { html: `
<div class="retenir"><b>Fiche élaborée d'après les exercices « SONU » (QCD et QCM) et leurs corrections.</b> Les points marqués « à confirmer » sont ceux que les corrections signalent comme incertains. Si votre cours officiel indique d'autres valeurs, c'est lui qui fait foi.</div>

<h3>1. Consultation prénatale (CPN) recentrée</h3>
<ul>
<li><b>Principes</b> (à confirmer, le QCD parle de cinq principes) : soins individualisés, soins centrés sur la femme et le nouveau-né, counseling et soutien, suivi et évaluation, prévention des complications et des maladies, soins assurés par un prestataire qualifié.</li>
<li><b>Composantes :</b> préparation à l'accouchement et aux complications éventuelles (plan d'accouchement), counseling et soutien. Le counseling permet à la femme de prendre part aux soins.</li>
<li><b>Les soins centrés sur la femme</b> mettent l'accent sur la priorité donnée à la santé et au suivi de la mère et du nouveau-né.</li>
</ul>
<table>
<tr><th>Consultation</th><th>Rôle</th></tr>
<tr><td><b>2<sup>e</sup> CPN</b></td><td>Au plus tard au <b>6<sup>e</sup> mois</b> de grossesse ; suivre l'évolution de la grossesse et de la hauteur utérine (à confirmer)</td></tr>
<tr><td><b>CPN du 7<sup>e</sup> au 8<sup>e</sup> mois</b></td><td>Apprécier l'évolution de la grossesse, rechercher des signes de prématurité</td></tr>
<tr><td><b>Dernière CPN</b></td><td>Au <b>9<sup>e</sup> mois</b>, deux à trois semaines avant le terme : préparation à l'accouchement</td></tr>
</table>

<h3>2. Bilan et examens de la grossesse</h3>
<ul>
<li><b>À chaque CPN :</b> dosage de l'<b>albumine</b> et du <b>sucre</b> dans les urines (dépistage de la pré-éclampsie et du diabète).</li>
<li><b>Sérologies obligatoires au bilan prénatal :</b> toxoplasmose, rubéole, syphilis. Rubéole au 1<sup>er</sup> trimestre ; toxoplasmose : surveillance mensuelle si la sérologie est négative (à confirmer).</li>
<li><b>Hémoglobine et hématocrite :</b> font partie du bilan de dépistage de l'anémie (à confirmer).</li>
<li><b>Échographies :</b> trois sont <b>conseillées</b> (une par trimestre), non obligatoires. La 3<sup>e</sup> permet, en plus de la morphologie, de faire le pronostic de l'accouchement.</li>
<li><b>Retard de croissance ou mort fœtale :</b> mouvements actifs et hauteur utérine ; les conjonctives renseignent sur l'anémie de la mère.</li>
<li><b>Pré-éclampsie (gestose) :</b> HTA, œdèmes des membres inférieurs, réflexes vifs, protéinurie. L'éclampsie suppose des convulsions.</li>
<li><b>IST :</b> peuvent se manifester par des leucorrhées et des condylomes.</li>
</ul>

<h3>3. Placenta et cordon</h3>
<ul>
<li>Le poids du placenta représente environ <b>1/6</b> du poids du fœtus.</li>
<li><b>Placenta vieillissant :</b> dépôts intervilleux et calcifications blanchâtres granuleuses à la palpation.</li>
<li><b>Insertion vélamenteuse du cordon :</b> insertion sur les <b>membranes</b>, hors du placenta.</li>
<li><b>Section du cordon :</b> deux ligatures ou clamps à environ 2 à 3 cm de l'abdomen (à confirmer).</li>
<li><b>Examen du placenta après la délivrance :</b> s'assurer de l'intégralité du placenta et des membranes, et repérer les anomalies d'insertion (à confirmer).</li>
</ul>

<h3>4. L'accouchement</h3>
<ul>
<li><b>Trois temps :</b> effacement et dilatation du col, expulsion du fœtus, délivrance (sortie des annexes, expulsion du placenta).</li>
<li><b>Mécanisme de l'expulsion :</b> engagement, flexion, descente, rotation, dégagement par extension, restitution, expulsion des épaules.</li>
<li><b>À l'expulsion de la tête :</b> prendre la tête puis les épaules, et éviter la poussée à ce moment pour limiter les déchirures (à confirmer).</li>
<li><b>Rupture de la poche des eaux avant l'expulsion :</b> hygiène rigoureuse, car le fœtus n'est plus protégé contre l'infection (infection ascendante).</li>
<li><b>Prévenir l'hémorragie de la délivrance :</b> utérotonique dès la naissance (5 unités de Syntocinon à la vue des épaules, à confirmer) ; vider la vessie.</li>
</ul>

<h3>5. Le nouveau-né à la naissance</h3>
<ul>
<li><b>Apgar :</b> cotation à la 1<sup>re</sup>, à la 5<sup>e</sup> et à la 10<sup>e</sup> minute. À la 5<sup>e</sup> minute, elle évalue l'efficacité de la réanimation (la décision de réanimer repose sur la « minute d'or », voir le cours de pédiatrie).</li>
<li><b>Si le bébé tarde à crier :</b> on le sèche, on le stimule doucement et on dégage les voies aériennes. On ne le badigeonne pas d'alcool ou d'eau de Cologne et on ne le frictionne pas vigoureusement.</li>
</ul>

<h3>6. Post-partum immédiat et suites de couches</h3>
<ul>
<li><b>Surveillance de l'accouchée :</b> rigoureuse pendant deux heures après la délivrance (toutes les 15 minutes pendant 2 heures, puis toutes les 30 minutes la 3<sup>e</sup> heure, à confirmer). On surveille l'involution utérine, les lochies et les constantes.</li>
<li><b>Hémorragie du post-partum immédiat :</b> penser à une rétention placentaire. Même en cas d'hémorragie minime, on ne se contente pas de l'ocytocine : vider la vessie, masser l'utérus, vérifier la délivrance et rechercher la cause.</li>
<li><b>Règle des « trois 6 » :</b> revoir l'accouchée à la <b>6<sup>e</sup> heure, au 6<sup>e</sup> jour et à la 6<sup>e</sup> semaine</b>.</li>
<li><b>Soins complémentaires à la mère :</b> fer-folate jusqu'au 42<sup>e</sup> jour ; vitamine A en 2 doses de 200 000 UI (à confirmer).</li>
<li><b>Complication mineure après un accouchement :</b> l'infection urinaire (à confirmer).</li>
</ul>

<h3>7. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>Trois échographies obligatoires</td><td>Conseillées, non obligatoires</td></tr>
<tr><td>Bébé qui tarde à crier : alcool et friction vigoureuse</td><td>Sécher, stimuler doucement, dégager les voies aériennes</td></tr>
<tr><td>Hémorragie minime : juste de l'ocytocine</td><td>Vider la vessie, masser l'utérus, vérifier la délivrance, rechercher la cause</td></tr>
<tr><td>Les conjonctives renseignent sur le retard de croissance</td><td>Elles renseignent sur l'anémie de la mère</td></tr>
<tr><td>Insertion vélamenteuse : sur le bord du placenta</td><td>Sur les membranes</td></tr>
<tr><td>Éclampsie = HTA, œdèmes, protéinurie</td><td>Ce tableau est la gestose ; l'éclampsie ajoute les convulsions</td></tr>
<tr><td>Trois 6 : 6<sup>e</sup> jour, 6<sup>e</sup> semaine, 6<sup>e</sup> mois</td><td>6<sup>e</sup> heure, 6<sup>e</sup> jour, 6<sup>e</sup> semaine</td></tr>
</table>
` },

"nu": { html: `
<div class="retenir"><b>Fiche élaborée d'après les exercices « Nutrition » (QCD et QCM) et leurs corrections.</b> Les points marqués « à confirmer » sont ceux que les corrections signalent comme incertains. Si votre cours officiel indique d'autres valeurs, c'est lui qui fait foi.</div>

<h3>1. Définitions</h3>
<ul>
<li><b>Nutrition :</b> ensemble des processus (digestion, absorption, métabolisme) par lesquels l'organisme utilise les aliments. Ce n'est pas « l'ensemble des aliments transformés ».</li>
<li><b>Alimentation :</b> action volontaire d'introduire des aliments dans l'organisme par la bouche.</li>
<li><b>Aliment :</b> substance solide ou liquide, naturelle et complexe, qui sert de nourriture et contient au moins deux nutriments.</li>
<li><b>Nutriment :</b> substance chimique issue de la transformation de l'aliment, utilisée pour l'énergie, la structure, la croissance et la réparation.</li>
<li><b>Calorie :</b> unité de mesure de la valeur énergétique d'un aliment. <b>Métabolisme :</b> ensemble des transformations qui s'accomplissent dans l'organisme vivant.</li>
<li><b>Besoin nutritionnel :</b> quantité de nutriments nécessaire à l'organisme pour combler ses besoins cellulaires.</li>
<li><b>Facteurs qui influencent les besoins :</b> sexe, âge, grossesse et allaitement, stress, niveau d'activité physique (NAP), état de santé, habitudes de vie (alcool, tabac).</li>
</ul>

<h3>2. Les nutriments</h3>
<table>
<tr><th>Nutriment</th><th>Apport recommandé</th><th>Valeur énergétique</th><th>Rôles</th></tr>
<tr><td><b>Glucides</b></td><td>45 à 65 % de l'énergie</td><td>—</td><td>Fournir de l'énergie ; origine végétale essentiellement</td></tr>
<tr><td><b>Protéines</b></td><td>10 à 35 % de l'énergie (ou 0,8 g/kg)</td><td>1 g = <b>4 kcal</b></td><td>Enzymes, croissance, régulation, énergie ; origine végétale et animale</td></tr>
<tr><td><b>Lipides</b></td><td>20 à 35 % de l'énergie</td><td>1 g = <b>9 kcal</b></td><td>Énergie, développement, croissance</td></tr>
</table>
<ul>
<li><b>Macronutriments</b> (grande quantité, sources d'énergie) : glucides, protéines, lipides. <b>Micronutriments</b> (petite quantité) : vitamines et minéraux.</li>
<li><b>Vitamines :</b> hydrosolubles (groupes B et C) ; liposolubles (A, D, E, K). Elles protègent contre les agents pathogènes et régulent les processus corporels.</li>
<li><b>Macroéléments :</b> calcium, magnésium, phosphore, chlore, potassium, sodium. <b>Oligo-éléments :</b> fer, zinc, manganèse, fluor, cuivre, sélénium, iode, chrome, molybdène.</li>
<li><b>Eau :</b> environ 60 % de la masse corporelle (70 kg : 42 kg d'eau).</li>
</ul>

<h3>3. Les groupes d'aliments</h3>
<ul>
<li><b>Trois groupes :</b> énergétiques, constructeurs, protecteurs.</li>
<li><b>Aliments énergétiques de base :</b> céréales, racines et tubercules, huiles et matières grasses.</li>
<li><b>Céréales :</b> blé, avoine, maïs, millet, sorgho. <b>Légumineuses :</b> haricot sec, pois secs, soja.</li>
<li><b>Noix :</b> amande, pistache, arachide. <b>Graines :</b> tournesol, sésame.</li>
<li><b>Produits laitiers :</b> riches en protéines, glucides, lipides, vitamine B2, calcium et phosphore.</li>
<li><b>Légumes :</b> tomate, aubergine, gombo, igname, manioc, carotte, oignon… <b>Fruits :</b> ananas, papaye, goyave, mangue, orange et agrumes…</li>
<li><b>Pyramide alimentaire :</b> trois versants et sept niveaux (à confirmer).</li>
</ul>

<h3>4. Évaluation de l'état nutritionnel</h3>
<ul>
<li>Elle <b>dépiste à un stade précoce</b> les problèmes de santé et de nutrition, identifie les comportements à risque et renseigne sur l'état actuel et le changement de poids.</li>
<li><b>Buts de l'identification :</b> définir les besoins et établir un plan d'intervention, évaluer l'impact d'un programme, orienter ou formuler des politiques, sensibiliser la population.</li>
</ul>
<table>
<tr><th>Outil</th><th>Utilisation</th></tr>
<tr><td><b>Balance de Salter</b></td><td>Pesée jusqu'à 25 kg (enfants)</td></tr>
<tr><td><b>Toise</b></td><td>Taille debout. Avant 24 mois, on mesure la longueur couchée.</td></tr>
<tr><td><b>Périmètre brachial (PB)</b>, bandelette de Shakir</td><td>Enfant de <b>6 à 59 mois</b> : PB inférieur à 115 mm : malnutrition aiguë sévère ; 115 à 125 mm : modérée ; supérieur à 125 mm : normal. De 0 à 5 mois, on évalue le poids et la taille (rapport poids/taille).</td></tr>
<tr><td><b>IMC</b> = poids (kg) ÷ taille² (m)</td><td>Inférieur à 16 : dénutrition sévère ; 18,5 à 25 : normal ; 25 à 29,9 : surpoids ; 30 et plus : obésité ; au-delà de 40 : obésité morbide</td></tr>
</table>
<p><b>Exemple :</b> homme de 78 kg mesurant 1,80 m : 78 ÷ (1,80 × 1,80) = <b>24,07</b>, normal. Un IMC de 30 correspond à l'obésité, pas au surpoids.</p>

<h3>5. La malnutrition</h3>
<ul>
<li><b>Définition :</b> état pathologique causé par la déficience ou l'excès d'un ou plusieurs nutriments (sous-alimentation, suralimentation, carence en micronutriments, malabsorption).</li>
<li><b>Formes :</b> aiguë sévère, aiguë modérée et chronique.</li>
<li><b>Prise en charge :</b> la malnutrition aiguë modérée se traite en ambulatoire. <b>ATPE :</b> aliment thérapeutique prêt à l'emploi.</li>
<li><b>Causes sous-jacentes :</b> hygiène pauvre, manque d'accès aux soins de santé.</li>
<li><b>Maladies par carence :</b> goitre (carence en iode), avitaminose A, anémie, kwashiorkor (carence protéique). <b>Maladies par excès :</b> obésité, diabète.</li>
<li><b>Conséquences à long terme :</b> incapacité, maladies métaboliques, altération de la performance reproductive (la taille adulte est réduite, énoncé ambigu).</li>
<li>La sédentarité est le quatrième facteur de risque de mortalité à l'échelle mondiale.</li>
</ul>

<h3>6. Hygiène alimentaire</h3>
<p>Clés d'une alimentation plus sûre : propreté, séparer les aliments crus des cuits, bien cuire, manger les aliments bien chauds, utiliser de l'eau et des aliments sûrs. On ne conserve pas les aliments chauds au frigo.</p>

<h3>7. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>Alcool, tabac, stress : sans influence sur les besoins</td><td>Ils les modifient</td></tr>
<tr><td>IMC de 30 : surpoids</td><td>Obésité (surpoids : 25 à 29,9)</td></tr>
<tr><td>Malnutrition : normale, aiguë sévère, aiguë modérée</td><td>Aiguë sévère, aiguë modérée, chronique</td></tr>
<tr><td>ATPE : application thérapeutique prête à l'emploi</td><td>Aliment thérapeutique prêt à l'emploi</td></tr>
<tr><td>Goitre : carence protéino-énergétique</td><td>Carence en iode</td></tr>
<tr><td>Kwashiorkor : maladie par excès</td><td>Carence protéique</td></tr>
<tr><td>Nutrition : ensemble des aliments transformés</td><td>Ensemble des processus (digestion, absorption, métabolisme)</td></tr>
<tr><td>Les lipides apportent 4 kcal/g</td><td>9 kcal/g (protéines : 4)</td></tr>
<tr><td>PB utilisé de 0 à 5 mois</td><td>À partir de 6 mois</td></tr>
<tr><td>Garder les aliments chauds au frigo</td><td>Les manger bien chauds ; ne pas les mettre au frigo chauds</td></tr>
</table>
` },

"ep": { html: `
<div class="retenir"><b>Fiche élaborée d'après les exercices « Épidémiologie » (QCD et QCM) et leurs corrections.</b> Les points marqués « à confirmer » sont ceux que les corrections signalent comme incertains. Si votre cours officiel indique d'autres valeurs, c'est lui qui fait foi.</div>

<h3>1. Définition et but</h3>
<ul>
<li><b>Épidémiologie (OMS, 2010) :</b> étude de la <b>distribution</b> et des <b>déterminants</b> des états de santé et des maladies dans la population humaine. Elle s'intéresse à la population, pas à l'individu isolé.</li>
<li><b>Buts :</b> comprendre les états de santé et la maladie ; mesurer l'état de santé d'une population ; identifier les agents pathogènes, les modes de transmission et les facteurs de risque ; mesurer les risques individuels et collectifs ; contribuer à l'amélioration de la santé des populations.</li>
<li><b>Domaines d'application :</b> maladies transmissibles et maladies non transmissibles (à confirmer, le QCD parle de deux domaines principaux).</li>
</ul>

<h3>2. Les axes</h3>
<table>
<tr><th>Axe</th><th>Question</th><th>Rôle</th></tr>
<tr><td><b>Descriptif</b></td><td>Quand ? où ? chez qui (population cible) ? combien ?</td><td>Dénombrer les cas de maladie dans une zone sur une période</td></tr>
<tr><td><b>Analytique</b></td><td>Pourquoi ?</td><td>Rechercher les causes et les facteurs de risque</td></tr>
<tr><td><b>Évaluatif</b></td><td>Les mesures sont-elles efficaces ?</td><td>Évaluer le bien-fondé des mesures prises pour améliorer l'état de santé</td></tr>
</table>
<p>Le QCD retient deux axes (descriptif et analytique, à confirmer) ; certains cours ajoutent l'axe évaluatif.</p>

<h3>3. Approche clinique et approche épidémiologique</h3>
<table>
<tr><th></th><th>Approche clinique</th><th>Approche épidémiologique</th></tr>
<tr><td><b>Sujet d'intérêt</b></td><td>Le malade (l'individu)</td><td>La maladie et les individus atteints, dans la population</td></tr>
<tr><td><b>Diagnostic</b></td><td>Individuel</td><td>Identification d'un phénomène de groupe</td></tr>
<tr><td><b>Finalité</b></td><td>Guérison du malade (thérapie)</td><td>Contrôle, éradication, maîtrise, élimination</td></tr>
<tr><td><b>Vérification</b></td><td>Disparition des signes cliniques</td><td>Régression du phénomène dans la population</td></tr>
<tr><td><b>Recherche des causes</b></td><td>—</td><td>Cause d'apparition et de propagation de la maladie dans la population</td></tr>
</table>

<h3>4. Phénomènes de masse</h3>
<table>
<tr><th>Phénomène</th><th>Temps</th><th>Espace</th><th>Exemples</th></tr>
<tr><td><b>Épidémie</b></td><td>Limité</td><td>Limité</td><td>Ebola en Guinée et au Liberia ; apparition soudaine et <b>inattendue</b></td></tr>
<tr><td><b>Pandémie</b></td><td>Limité</td><td>Illimité (plusieurs continents, voire la planète)</td><td>Coronavirus (COVID-19)</td></tr>
<tr><td><b>Endémie</b></td><td>Illimité (permanente)</td><td>Limité (zone donnée)</td><td>Paludisme</td></tr>
</table>
<ul>
<li>Une maladie épidémique peut évoluer en maladie pandémique.</li>
<li><b>Seuil d'action :</b> niveau à partir duquel la riposte doit être déclenchée face à une menace d'<b>épidémie</b> (et non d'endémie).</li>
</ul>

<h3>5. Contrôle, élimination, éradication</h3>
<ul>
<li><b>Contrôle :</b> on réduit la maladie, l'agent pathogène n'est pas éliminé et le risque de recontamination persiste.</li>
<li><b>Élimination :</b> plus de cas de la maladie, sans éliminer entièrement l'agent de l'environnement.</li>
<li><b>Éradication :</b> la maladie et le germe en cause sont supprimés, sans risque de recontamination.</li>
</ul>

<h3>6. Notions de cas, mesures et indicateurs</h3>
<ul>
<li><b>Définition de cas :</b> ensemble de critères cliniques et/ou de laboratoire pour déterminer si une personne est atteinte d'une maladie. Le cas épidémiologique précise les malades à notifier pour la surveillance.</li>
</ul>
<table>
<tr><th>Mesure</th><th>Définition</th></tr>
<tr><td><b>Rapport</b></td><td>Division qui met en rapport deux quantités (et non une soustraction)</td></tr>
<tr><td><b>Proportion</b></td><td>Le numérateur est inclus dans le dénominateur (même entité)</td></tr>
<tr><td><b>Indice</b> et <b>ratio</b></td><td>Le numérateur n'est pas inclus dans le dénominateur</td></tr>
<tr><td><b>Taux</b></td><td>Induit une notion de <b>temps</b> (et non d'espace)</td></tr>
</table>
<ul>
<li><b>Indicateurs de santé :</b> deux groupes. Positifs (mesurent la santé : espérance de vie, couverture vaccinale) et négatifs (mesurent la maladie et pas uniquement les décès).</li>
</ul>

<h3>7. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>L'épidémiologie s'intéresse à l'individu</td><td>À la population</td></tr>
<tr><td>Axe analytique : évalue les mesures prises</td><td>C'est l'axe évaluatif</td></tr>
<tr><td>Épidémiologie analytique : combien ?</td><td>Pourquoi ? (combien : descriptive)</td></tr>
<tr><td>Épidémie : soudaine et attendue</td><td>Inattendue</td></tr>
<tr><td>Épidémie : illimitée dans le temps</td><td>Limitée dans le temps et dans l'espace</td></tr>
<tr><td>Endémie : limitée dans le temps et l'espace</td><td>Illimitée dans le temps, limitée dans l'espace</td></tr>
<tr><td>Seuil d'action : menace d'endémie</td><td>Menace d'épidémie</td></tr>
<tr><td>Le taux induit une notion d'espace</td><td>Une notion de temps</td></tr>
<tr><td>Contrôle : plus de risque de recontamination</td><td>Le risque persiste (éradication : plus de risque)</td></tr>
<tr><td>Guérison du malade : but épidémiologique</td><td>But de l'approche clinique</td></tr>
<tr><td>Le rapport est une soustraction</td><td>C'est une division</td></tr>
</table>
` },

"pa": { html: `
<div class="retenir"><b>Fiche élaborée d'après les exercices « Parasitologie » (QCD et QCM) et leurs corrections.</b> Les points marqués « à confirmer » sont ceux que les corrections signalent comme incertains. Si votre cours officiel indique d'autres valeurs, c'est lui qui fait foi.</div>

<h3>1. Examens parasitologiques</h3>
<ul>
<li><b>Phase pré-analytique :</b> prélèvement, étiquetage, conservation et transport des échantillons (ils ne sont pas seulement conservés). <b>Phase analytique :</b> l'examen direct s'y fait.</li>
<li>Les helminthes ne sont pas recherchés uniquement dans les selles : selon l'espèce, dans le sang, les urines, etc.</li>
<li><b>Selles liquides :</b> transport en moins de 30 minutes (formes végétatives fragiles).</li>
<li><b>Produits biologiques prélevés :</b> sang, LCR, liquide pleural… L'eau de Javel n'est pas un produit biologique.</li>
<li>Les protozoaires sanguicoles se recherchent dans le sang (dans les hématies).</li>
</ul>

<h3>2. Le paludisme</h3>
<table>
<tr><th>Rubrique</th><th>À retenir</th></tr>
<tr><td><b>Agent</b></td><td><i>Plasmodium</i>, protozoaire de la classe des <b>sporozoaires</b> ; <i>P. falciparum</i> (fièvre tierce maligne), <i>P. ovale</i>…</td></tr>
<tr><td><b>Transmission</b></td><td>Piqûre d'anophèle femelle ; transfusion sanguine ; voie congénitale. Pas de transmission sexuelle, par contact ni par ingestion de crudités.</td></tr>
</table>
<table>
<tr><th>Cycle</th><th>Lieu</th><th>Particularités</th></tr>
<tr><td><b>Hépatique</b> (pré-érythrocytaire, exo-érythrocytaire)</td><td>Cellules du foie</td><td>Pas de signes cliniques</td></tr>
<tr><td><b>Érythrocytaire</b> (schizogonie, asexué)</td><td>Hématies</td><td>Les <b>signes cliniques</b> apparaissent (éclatement des hématies) ; apparition des gamétocytes</td></tr>
<tr><td><b>Sporogonique</b> (sexué)</td><td>Anophèle</td><td>Les gamétocytes se transforment en gamètes mâles et femelles dans l'estomac du moustique (ils ne sont pas digérés) ; sporozoïtes stockés dans les glandes salivaires ; l'anophèle est infesté à vie</td></tr>
</table>
<p>Le cycle sexué n'est donc pas la schizogonie (asexuée) : il est sporogonique. Chez l'homme, on ne trouve pas de gamètes mâles et femelles, mais des gamétocytes.</p>

<h3>3. Helminthes et protozoaires intestinaux</h3>
<table>
<tr><th>Parasite</th><th>À retenir</th></tr>
<tr><td><b>Ankylostome</b> (<i>Ankylostoma duodenale</i>)</td><td>Contamination par <b>pénétration cutanée des larves</b> (pieds nus), non par les mains sales ; spoliation sanguine d'environ 0,2 ml par jour et par ver</td></tr>
<tr><td><b>Anguillule</b> (<i>Strongyloides stercoralis</i>)</td><td>Ver de la muqueuse duodénale ; la <b>femelle parthénogénétique</b> vit chez le malade et pond ses œufs dans la muqueuse duodénale ; <b>auto-infestation</b> ; la forme contaminante est la larve strongyloïde (et non la femelle)</td></tr>
<tr><td><b>Oxyure</b> (<i>Enterobius vermicularis</i>)</td><td>Helminthe (ce n'est pas un protozoaire) ; œuf infestant dès la ponte (en quelques heures) ; <b>auto-infestation</b></td></tr>
<tr><td><b>Amibe</b> (<i>Entamoeba histolytica</i>)</td><td>Protozoaire hématophage</td></tr>
<tr><td><i>Trichomonas vaginalis</i></td><td>Protozoaire</td></tr>
</table>
<ul>
<li><b>Parasites à auto-infestation :</b> l'oxyure et l'anguillule.</li>
</ul>

<h3>4. Prophylaxie</h3>
<ul>
<li><b>Péril fécal :</b> sa lutte est obligatoire contre ascaris, anguillule et ankylostome. Le plasmodium ne s'y rattache pas (piqûre d'anophèle).</li>
<li><b>Mesures :</b> lutter contre le péril fécal, construire des latrines, se laver les mains avant chaque repas, manger des aliments bien cuits.</li>
<li><b>Oxyurose :</b> traiter <b>toute la famille</b> (et non seulement les personnes atteintes), se laver les mains avant chaque repas, couper les ongles courts.</li>
</ul>

<h3>5. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>Phase érythrocytaire : dans les cellules hépatiques</td><td>Dans les hématies (phase hépatique : exo-érythrocytaire)</td></tr>
<tr><td>Signes cliniques pendant le cycle pré-érythrocytaire</td><td>Pendant le cycle érythrocytaire</td></tr>
<tr><td>Cycle sexué = cycle schizogonique</td><td>Cycle sexué = sporogonique</td></tr>
<tr><td>Ankylostomose : mains sales</td><td>Pénétration cutanée des larves</td></tr>
<tr><td>Examen direct : phase pré-analytique</td><td>Phase analytique</td></tr>
<tr><td>Helminthes cherchés uniquement dans les selles</td><td>Selon l'espèce (sang, urines…)</td></tr>
<tr><td>Éviter les aliments bien cuits</td><td>Les manger bien cuits</td></tr>
<tr><td>Traiter seulement les malades (oxyurose)</td><td>Toute la famille</td></tr>
<tr><td>Oxyure : protozoaire</td><td>Helminthe</td></tr>
<tr><td>La forme contaminante de l'anguillule : la femelle parthénogénétique</td><td>La larve strongyloïde</td></tr>
</table>
` },

"ic": { html: `
<div class="retenir"><b>Fiche élaborée d'après les exercices « IECC / CCC » (QCD et QCM) et leurs corrections.</b> Les points marqués « à confirmer » sont ceux que les corrections signalent comme incertains. Si votre cours officiel indique d'autres valeurs, c'est lui qui fait foi.</div>

<h3>1. Définitions de base</h3>
<ul>
<li><b>Communication pour le changement de comportement (CCC) :</b> processus <b>interactif et participatif</b> d'échange d'informations, d'idées, de connaissances, d'opinions et de décisions. Le concept a évolué de l'IEC vers la CCC puis la CCSC (nombre d'éditions à confirmer).</li>
<li><b>Comportement :</b> ensemble des manières de faire ou des pratiques propres à un individu ou à un groupe.</li>
<li><b>Perception :</b> processus par lequel un individu choisit, organise et interprète des informations pour construire une image cohérente du monde.</li>
<li><b>Croyances :</b> éléments de connaissances descriptives qu'un individu entretient à l'égard d'un objet.</li>
<li><b>Attitudes :</b> évaluations positives ou négatives, réactions émotionnelles et prédispositions à agir.</li>
<li><b>Culture :</b> ensemble des normes, rites, valeurs, convictions et habitudes d'une société. Toute société met en place une stratification sociale en classes.</li>
<li><b>EPS :</b> éducation pour la santé.</li>
<li><b>Segmentation :</b> découper un public cible en groupes homogènes pour leur adresser des messages adaptés.</li>
<li><b>Plaidoyer :</b> but d'influencer le changement de politique (les décideurs). C'est une stratégie, pas un élément constitutif de la communication.</li>
<li><b>Mobilisation sociale :</b> ses responsables sont les agents de santé, les organisations à base communautaire et la société.</li>
</ul>

<h3>2. Éléments de la communication</h3>
<ul>
<li><b>Éléments constitutifs :</b> émetteur, récepteur, message, canal, codage (encodage) et décodage, rétroaction.</li>
<li><b>Rétroaction (feed-back) :</b> réaction du récepteur vers l'émetteur, retour de l'information.</li>
<li><b>Types de communication :</b> interpersonnelle (deux personnes), de groupe (au moins <b>trois</b> personnes), de masse. Il n'existe pas de « communication sociale » parmi ces types.</li>
<li><b>Par rapport au langage :</b> verbale, non verbale et para-verbale (la communication n'est pas seulement verbale). <b>Paralangage :</b> élocution, façon de parler ; les mimiques du visage et la tenue vestimentaire relèvent du non-verbal.</li>
</ul>

<h3>3. Obstacles à la communication</h3>
<table>
<tr><th>Source</th><th>Exemples</th></tr>
<tr><td><b>Émetteur</b></td><td>Non-respect des autres, mauvaise attitude, mauvaise diction, non-disponibilité</td></tr>
<tr><td><b>Récepteur</b></td><td>Méfiance, défiance, préjugés, inattention, distraction, mauvaise perception du message, non-disponibilité, refus du message</td></tr>
<tr><td><b>Message</b></td><td>Confus, imprécis, trop long ou trop court (un message appliqué ou reformulé est une qualité)</td></tr>
<tr><td><b>Canal</b></td><td>Indirect, inadapté</td></tr>
</table>
<p>L'existence d'un feed-back est un élément positif, pas un obstacle.</p>

<h3>4. Changement de comportement</h3>
<ul>
<li>La modification du comportement humain suit un <b>processus progressif</b>, par étapes (connaissance, perception et prise de conscience, attitudes, puis action ; à confirmer).</li>
<li><b>Facteurs internes</b> pouvant influencer la CCSC : connaissances, perception, croyances, attitudes.</li>
<li><b>Facteurs externes (environnementaux) :</b> la culture et le milieu social.</li>
<li>Un objectif fixé au départ permet de mesurer les résultats de la communication.</li>
</ul>

<h3>5. Préparer une animation</h3>
<ul>
<li>Pour identifier le public cible, l'animateur se demande : <b>quel est son problème ? à qui vais-je parler ?</b></li>
<li>On propose un nouveau comportement, on ne l'impose pas.</li>
<li>La <b>méthode</b> est la technique utilisée pour transmettre le message (à confirmer).</li>
</ul>

<h3>6. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>Communication de groupe : au moins deux personnes</td><td>Au moins trois</td></tr>
<tr><td>La communication est seulement verbale</td><td>Verbale, non verbale, para-verbale</td></tr>
<tr><td>La culture est un facteur interne</td><td>Facteur externe (environnemental)</td></tr>
<tr><td>Le plaidoyer est un élément constitutif de la communication</td><td>C'est une stratégie</td></tr>
<tr><td>Le feed-back est un obstacle</td><td>C'est un élément positif</td></tr>
<tr><td>Types : interpersonnelle, sociale, de masse, de groupe</td><td>Il n'existe pas de type « sociale »</td></tr>
<tr><td>Mimiques et tenue : paralangage</td><td>Non-verbal ; le paralangage concerne la voix</td></tr>
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


"ur": { html: `
<div class="retenir"><b>Fiche élaborée d'après les exercices « Urologie » (QCD et QCM) et leurs corrections.</b> Les valeurs signalées « à confirmer » sont celles que les corrections jugent incertaines. Si votre cours officiel indique d'autres valeurs chiffrées, c'est lui qui fait foi.</div>

<h3>1. Généralités</h3>
<ul>
<li><b>Haut appareil urinaire :</b> reins et uretères. <b>Bas appareil urinaire :</b> vessie et urètre. La vessie est l'organe intermédiaire : une pathologie vésicale peut retentir sur le haut comme sur le bas appareil.</li>
<li><b>Appareil génital masculin :</b> testicules, épididymes, canaux déférents, vésicules séminales, prostate, pénis, scrotum. Chez l'homme, l'urètre a <b>deux fonctions</b> (urinaire et génitale) ; chez la femme, une seule (urinaire).</li>
</ul>

<h3>2. Le rein</h3>
<table>
<tr><th>Rubrique</th><th>À retenir</th></tr>
<tr><td><b>Situation</b></td><td>Organe <b>double</b>, rétropéritonéal, dans les <b>fosses lombaires</b> ; le rein droit est un peu plus bas que le gauche ; le rein gauche est en rapport avec la 11<sup>e</sup> côte (risque de contusion rénale en cas de fracture de côte)</td></tr>
<tr><td><b>Aspect</b></td><td>Couleur <b>brun-rouge</b> ; poids <b>130-140 g</b></td></tr>
<tr><td><b>Dimensions</b></td><td><b>12 cm</b> de hauteur, <b>6 cm</b> de largeur, <b>3 cm</b> d'épaisseur</td></tr>
<tr><td><b>Configuration</b></td><td>2 faces, 2 pôles, 2 bords, 1 hile ; le pôle supérieur est en rapport avec le diaphragme (et la surrénale)</td></tr>
<tr><td><b>Pédicule rénal</b></td><td>Artère rénale, veine rénale et nerfs. La veine rénale gauche est <b>plus longue</b> (environ 7 cm) que la droite (2-3 cm)</td></tr>
<tr><td><b>Structure</b></td><td>Deux zones : <b>corticale</b> (environ 1 cm, contient les colonnes de Bertin) et <b>médullaire</b> (pyramides de Malpighi) ; les papilles s'ouvrent dans les calices</td></tr>
<tr><td><b>Unité fonctionnelle</b></td><td>Le <b>néphron</b> (environ un million par rein) ; la vascularisation du rein compte cinq segments vasculaires</td></tr>
</table>
<p>Un traumatisme du rein peut se manifester par une <b>hématurie</b>. On peut vivre avec un seul rein.</p>

<h3>3. Physiologie rénale</h3>
<p>Le rein a une double fonction :</p>
<ul>
<li><b>Exocrine :</b> formation de l'urine, excrétion des déchets métaboliques et des déchets médicamenteux, <b>homéostasie</b> (le rein contrôle l'équilibre du milieu <i>intérieur</i>).</li>
<li><b>Endocrine :</b> <b>rénine</b> (régulation de la pression artérielle), <b>érythropoïétine</b> (contrôle de l'érythropoïèse, produite essentiellement par le rein), <b>calcitriol</b> (métabolisme du calcium et du phosphate).</li>
</ul>
<h4>Filtration glomérulaire</h4>
<ul>
<li><b>Filtre glomérulaire :</b> endothélium, membrane basale glomérulaire, épithélium (podocytes).</li>
<li><b>Pression efficace de filtration = 70 − 30 − 15 = 25 mmHg</b> : pression hydrostatique capillaire 70, pression oncotique des protéines 30, pression hydrostatique dans la capsule de Bowman 15.</li>
<li><b>Clairance de la créatinine :</b> environ 120 ml/min. <b>Créatininémie normale :</b> 80-110 µmol/L chez l'homme, 60-90 µmol/L chez la femme.</li>
<li><b>Protéinurie normale :</b> ≤ 0,15 g/24 h. <b>Diurèse normale :</b> 1,5 à 2 L/24 h (1,5 L/24 h selon l'énoncé).</li>
</ul>
<h4>Transferts tubulaires et hormones</h4>
<ul>
<li>Trois transferts : <b>réabsorption, sécrétion, excrétion</b>. Sécrétion et excrétion sont des transports <b>actifs</b> ; la diffusion est <b>passive</b>.</li>
<li>Glucose, acides aminés et bicarbonates sont totalement réabsorbés ; le <b>sodium</b> est ajusté par l'aldostérone.</li>
<li><b>Système rénine-angiotensine-aldostérone :</b> la rénine est sécrétée par l'<b>appareil juxta-glomérulaire</b> (cellules épithélioïdes granuleuses) ; l'<b>angiotensine</b> est <b>vasoconstrictrice</b> ; l'<b>aldostérone</b> fait réabsorber le sodium et éliminer le potassium. Les œstrogènes n'en font pas partie.</li>
<li><b>Calcitriol :</b> augmente l'absorption du calcium et du phosphate et freine la sécrétion de parathormone.</li>
</ul>

<h3>4. L'uretère</h3>
<ul>
<li>Conduit musculo-membraneux faisant suite au pelvis rénal, <b>blanc nacré</b>, à trois tuniques, essentiellement rétropéritonéal ; diamètre de <b>4 à 5 mm</b>.</li>
<li><b>Trois rétrécissements :</b> jonction pyélo-urétérale, croisement des vaisseaux iliaques, jonction urétéro-vésicale (sièges habituels des blocages de calculs).</li>
<li><b>Portions :</b> lombaire (environ 10 cm), iliaque (3 à 5 cm), pelvienne (10 à 15 cm), puis intramurale. Les points urétéraux se projettent sur la paroi abdominale.</li>
</ul>

<h3>5. La vessie</h3>
<ul>
<li>Réservoir musculo-membraneux <b>piriforme</b> (corps globuleux en réplétion, col, fundus ; l'<b>apex est antérieur</b>) ; organe <b>sous-péritonéal</b> (comme d'autres organes pelviens). Rapports : rectum, et utérus/vagin en arrière chez la femme.</li>
<li><b>Dimensions :</b> vide 6 cm de long, pleine 12 cm. Capacité anatomique évoquée : 2 à 3 L (selon le cours). Volume de distension maximal : 500 à 600 ml.</li>
<li>Le <b>trigone vésical</b> est le siège préférentiel des tumeurs de la vessie.</li>
<li><b>Continence :</b> assurée par le sphincter. Le sympathique <b>relâche le détrusor</b> et ferme le sphincter (continence) ; le parasympathique contracte le détrusor (miction).</li>
</ul>
<table>
<tr><th>Repère mictionnel</th><th>Valeur</th></tr>
<tr><td>Premier besoin (B1)</td><td>environ 150 ml (à confirmer)</td></tr>
<tr><td>Besoin pressant (B2)</td><td>vers 300 ml</td></tr>
<tr><td>Besoin douloureux</td><td>vers 600 ml</td></tr>
<tr><td>Résidu post-mictionnel normal</td><td>moins de 50 ml</td></tr>
<tr><td>Fréquence normale des mictions</td><td>4 à 6 par 24 h</td></tr>
<tr><td>Capacité vésicale de l'enfant</td><td>50-70 ml à 1 an ; environ 100 ml à 2 ans (à confirmer) ; 150 ml à 4 ans ; 200 ml à 6 ans</td></tr>
</table>

<h3>6. L'urètre</h3>
<table>
<tr><th></th><th>Homme</th><th>Femme</th></tr>
<tr><td><b>Longueur</b></td><td>15 à 17 cm</td><td>3 à 5 cm (plus court)</td></tr>
<tr><td><b>Fonction</b></td><td>Urinaire et génitale</td><td>Urinaire seulement</td></tr>
<tr><td><b>Rapports / remarque</b></td><td>2 portions (antérieure, postérieure) ou 3 parties</td><td>Rapport avec le vagin en arrière ; sa brièveté explique la <b>fréquence des infections urinaires</b> (et non des fuites)</td></tr>
</table>
<ul>
<li><b>Urètre masculin en 3 parties :</b> prostatique (3 cm, première portion), <b>membraneux</b> (2 cm), spongieux (partie antérieure, la plus longue). Orifice externe d'environ 7 mm de compliance ; urètre spongieux 12 à 14 mm ; compliance prostatique et membraneuse : à confirmer avec votre cours.</li>
<li>L'urètre n'est pas un organe vital : il ne conditionne pas la survie.</li>
</ul>

<h3>7. Terminologie des troubles mictionnels</h3>
<table>
<tr><th>Terme</th><th>Définition</th></tr>
<tr><td><b>Dysurie</b></td><td>Gêne ou difficulté à la miction</td></tr>
<tr><td><b>Polyurie</b></td><td>Diurèse supérieure à <b>3 L/24 h</b></td></tr>
<tr><td><b>Pollakiurie</b></td><td>Mictions fréquentes de faible volume</td></tr>
<tr><td><b>Nycturie</b></td><td>Besoin d'uriner la nuit, gênant pour le patient</td></tr>
<tr><td><b>Énurésie</b></td><td>Perte involontaire d'urine, surtout nocturne chez l'enfant</td></tr>
<tr><td><b>Rétention d'urine</b></td><td>Impossibilité d'évacuer la vessie ; se traduit par un <b>globe vésical</b></td></tr>
</table>

<h3>8. Appareil génital masculin</h3>
<h4>Testicule et épididyme</h4>
<ul>
<li>Organe <b>double</b>, glande <b>amphicrine</b> : exocrine (spermatozoïdes, dans les tubes séminifères de la pulpe) et endocrine (testostérone, cellules de Leydig). Les surrénales produisent aussi de la testostérone.</li>
<li><b>Dimensions :</b> 4 cm de long, 2,5 cm d'épaisseur, 3 cm de diamètre ; poids 14 à 20 g. <b>Température :</b> 33-34 °C (d'où le rôle thermorégulateur du scrotum).</li>
<li><b>Épididyme :</b> coiffe le testicule ; trois parties (tête, corps, queue) ; la queue fait suite au canal déférent ; siège de la <b>maturation</b> et de l'acquisition du pouvoir fécondant des spermatozoïdes.</li>
<li><b>Urgences et anomalies :</b> la <b>torsion du testicule</b> est une urgence ; <b>orchidectomie</b> = ablation du testicule ; <b>cryptorchidie</b> = arrêt de la descente testiculaire ; <b>ectopie</b> = testicule hors du trajet normal de migration.</li>
</ul>
<h4>Prostate</h4>
<ul>
<li>Glande <b>impaire</b>, sous-vésicale, en forme de <b>châtaigne</b>, pesant environ 20-25 g (à confirmer) ; accessible au <b>toucher rectal</b> ; contient la première portion de l'urètre (prostatique).</li>
<li><b>Rapports :</b> en haut la base de la vessie, en avant le pubis, en arrière le rectum, en bas le sphincter strié.</li>
<li>Elle sécrète le <b>PSA</b> (enzyme, norme ≤ 4 ng/ml) ; son liquide représente <b>30 %</b> de l'éjaculat et contribue à la fertilité. Sa situation sous-vésicale explique les troubles mictionnels en cas de pathologie. Zones : quatre selon McNeal (à confirmer).</li>
</ul>
<h4>Pénis et scrotum</h4>
<ul>
<li><b>Pénis :</b> organe de copulation et de miction ; deux parties, <b>racine</b> (fixe, dans le périnée) et <b>corps</b> ; le <b>corps spongieux</b> contient l'urètre. La <b>fracture de verge</b> touche les corps <b>caverneux</b> (principale cause : faux pas du coït). Tumescence = engorgement sanguin des corps caverneux.</li>
<li><b>Dimensions :</b> flaccide 11-12 cm ; érection 16 à 18 cm de long, 12 cm de circonférence, 4 cm de diamètre ; pression intracaverneuse en érection : 110 mmHg.</li>
<li><b>Scrotum :</b> enveloppe cutanée des testicules, prolongement du périnée, peau <b>mobile et extensible</b> ; artères scrotales (les postérieures viennent des pudendales internes) ; nerfs scrotaux postérieurs ; veines vers les pudendales.</li>
</ul>

<h3>9. Reproduction</h3>
<ul>
<li><b>Éjaculat :</b> vésicules séminales 70 %, prostate 30 %, spermatozoïdes environ 2 % (plusieurs centaines de millions de spermatozoïdes par éjaculat). Les spermatozoïdes vivent environ 72 h.</li>
<li>Le <b>canal éjaculateur</b> est formé par le canal déférent et la vésicule séminale. Le canal déférent conduit les spermatozoïdes du testicule vers la prostate.</li>
<li><b>Fécondation :</b> rencontre de l'ovule et du spermatozoïde, donnant le <b>zygote</b> ; la grossesse débute à la nidation ; la <b>grossesse ectopique</b> est une grossesse extra-utérine. La procréation médicalement assistée existe.</li>
<li><b>Ovules :</b> leur nombre est déterminé dès la naissance (environ un million) ; seuls environ 400 seront ovulés pendant la vie génitale.</li>
</ul>

<h3>10. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>Le rein contrôle le milieu extérieur</td><td>Milieu intérieur</td></tr>
<tr><td>Le rein : 12 cm de longueur et 3 cm de largeur</td><td>12 cm de hauteur, 6 cm de largeur, 3 cm d'épaisseur</td></tr>
<tr><td>La veine rénale gauche est plus courte</td><td>Plus longue que la droite</td></tr>
<tr><td>Le rein a une fonction triple</td><td>Double : exocrine et endocrine</td></tr>
<tr><td>Diamètre de l'uretère : 5 cm</td><td>4 à 5 mm</td></tr>
<tr><td>La vessie est un organe du haut appareil</td><td>Bas appareil (haut = reins et uretères)</td></tr>
<tr><td>La vessie est le seul organe sous-péritonéal</td><td>D'autres organes pelviens le sont aussi</td></tr>
<tr><td>La brièveté de l'urètre féminin explique les fuites d'urine</td><td>Elle explique les infections urinaires</td></tr>
<tr><td>L'urètre masculin a trois fonctions</td><td>Deux : urinaire et génitale</td></tr>
<tr><td>L'urètre prostatique mesure 12 cm</td><td>Environ 3 cm</td></tr>
<tr><td>Le testicule est le seul producteur de testostérone</td><td>Les surrénales en produisent aussi</td></tr>
<tr><td>La prostate est une glande paire</td><td>Impaire</td></tr>
<tr><td>La peau scrotale est fixe</td><td>Mobile et extensible</td></tr>
<tr><td>La fracture de verge touche les trois corps érectiles</td><td>Les corps caverneux</td></tr>
<tr><td>Polyurie : plus de 4 L/24 h</td><td>Plus de 3 L/24 h</td></tr>
<tr><td>Besoin pressant à 600 ml</td><td>Vers 300 ml (600 ml : besoin douloureux)</td></tr>
<tr><td>Le sympathique stimule le détrusor</td><td>Il le relâche (continence)</td></tr>
<tr><td>Le PSA est une hormone</td><td>Enzyme (protéase)</td></tr>
<tr><td>Quelques millions de spermatozoïdes par éjaculat</td><td>Plusieurs centaines de millions</td></tr>
</table>
` },

"gy": { html: `
<div class="retenir"><b>Fiche élaborée d'après les exercices « Gynécologie » (QCD et QCM) et leurs corrections.</b> Les points marqués « à confirmer » sont ceux que les corrections signalent comme incertains. Si votre cours officiel indique d'autres valeurs, c'est lui qui fait foi.</div>

<h3>1. Appareil génital de la femme</h3>
<ul>
<li><b>Éléments :</b> ovaires, trompes utérines, utérus, vagin, vulve. Corps caverneux et épididyme sont des éléments <b>masculins</b>.</li>
<li><b>Vagin :</b> organe de copulation et de passage, il participe au soutien des organes pelviens ; il ne sécrète pas les règles et ne produit pas d'œstrogène.</li>
<li><b>Nidation :</b> implantation de l'œuf dans l'<b>endomètre</b> de l'utérus (et non dans la trompe ni dans l'ovaire) ; elle dure quelques jours (« au plus 7 jours », à confirmer). La grossesse débute à la nidation.</li>
</ul>

<h3>2. Signes de début de grossesse</h3>
<table>
<tr><th>Signe</th><th>À retenir</th></tr>
<tr><td><b>Seins</b></td><td>Augmentation de volume</td></tr>
<tr><td><b>Col utérin</b></td><td><b>Violacé</b> (signe de Chadwick), et non rosé</td></tr>
<tr><td><b>Glaire cervicale</b></td><td><b>Épaisse et peu abondante</b> (bouchon muqueux) ; la glaire abondante et filante est celle de l'ovulation</td></tr>
<tr><td><b>Signes digestifs</b></td><td>Modification du goût (dysgueusie) et <b>constipation</b> ; pas de diarrhée</td></tr>
<tr><td><b>Prise de poids</b></td><td>Grossesse monofœtale normale : environ <b>9 à 12 kg</b>, ne dépasse pas 12 kg</td></tr>
</table>

<h3>3. Suivi de la grossesse (CPN)</h3>
<ul>
<li><b>CPN recentrée :</b> soins <b>individualisés</b>, centrés sur chaque femme ; l'<b>infirmier</b> est un prestataire qualifié pour les assurer.</li>
<li><b>Échographie du 1<sup>er</sup> trimestre :</b> entre 11 et 13 SA + 6 jours (la datation et la confirmation de grossesse) ; l'échographie à 22 SA est la <b>morphologique</b>.</li>
<li><b>Bilan prénatal obligatoire :</b> groupe sanguin et rhésus, sérologie VIH, sérologie syphilitique (à confirmer avec votre cours).</li>
<li><b>CPN du 4<sup>e</sup> au 6<sup>e</sup> mois :</b> donner la 2<sup>e</sup> dose de TPI (traitement préventif intermittent du paludisme) et suivre l'évolution de la grossesse (à confirmer).</li>
<li><b>Soins obstétricaux et néonataux d'urgence :</b> politique visant à réduire la mortalité <b>maternelle et néonatale</b>.</li>
</ul>

<h3>4. Le bassin et la présentation</h3>
<ul>
<li>Le <b>détroit supérieur</b> sépare le grand bassin (en haut) du petit bassin (en bas). L'<b>excavation pelvienne</b> est le canal où le fœtus effectue sa descente et sa poussée.</li>
<li><b>Présentation :</b> partie du fœtus qui se présente en premier au niveau de l'aire du détroit supérieur. <b>Engagement :</b> le plus grand diamètre de la présentation a franchi le détroit supérieur.</li>
</ul>
<table>
<tr><th>Présentation</th><th>Repère</th></tr>
<tr><td><b>Sommet</b></td><td>Occiput (petite fontanelle)</td></tr>
<tr><td><b>Front</b></td><td>Racine du nez</td></tr>
<tr><td><b>Siège</b></td><td>Sacrum</td></tr>
<tr><td><b>Bregma</b></td><td>Grande fontanelle (c'est une présentation à part, non celle du sommet)</td></tr>
</table>
<p>La manœuvre de Budin ne sert pas à diagnostiquer l'engagement (à confirmer). Contre-indications de l'accouchement du siège par voie basse : souffrance fœtale aiguë, prématurité (à confirmer).</p>

<h3>5. L'accouchement</h3>
<ul>
<li><b>Trois phases :</b> travail (dilatation), <b>expulsion</b> (2<sup>e</sup> phase), <b>délivrance</b> (3<sup>e</sup> phase). Les contractions utérines sont involontaires, douloureuses, totales et <b>intermittentes</b> (non permanentes).</li>
<li><b>Délivrance normale :</b> au maximum <b>30 minutes</b> après l'expulsion du fœtus ; au-delà, on parle de rétention placentaire. Phases : <b>rémission, décollement, expulsion</b> (pas de « phase de migration »).</li>
<li><b>Délivrance artificielle :</b> en cas de décollement incomplet avec hémorragie ou de rétention au-delà de 30 minutes (à confirmer). <b>Révision utérine :</b> exploration manuelle de la cavité utérine après l'expulsion du placenta.</li>
<li><b>GATPA</b> (gestion active de la troisième période de l'accouchement) : <b>10 UI d'utérotonique en IM</b>, <b>traction contrôlée du cordon</b>, <b>massage utérin</b>.</li>
<li>L'<b>hémorragie</b> de la délivrance ou du post-partum est la complication maternelle la plus grave (première cause de mortalité maternelle).</li>
</ul>

<h3>6. Suites de couches</h3>
<ul>
<li>Durée normale : environ <b>6 semaines</b> (jusqu'au retour de couches), non 1 mois. Les saignements sont les <b>lochies</b> (et non des métrorragies).</li>
<li><b>Surveillance du post-partum immédiat :</b> globe utérin de sécurité, recherche de phlébite (mollets) (à confirmer).</li>
<li>Selon la loi ivoirienne citée dans l'exercice, l'accouchée doit être hospitalisée <b>au moins 72 h (3 jours)</b> (à confirmer).</li>
</ul>

<h3>7. Avortement</h3>
<ul>
<li><b>Avortement spontané :</b> le plus souvent douloureux (contractions) et incomplet, avec saignement.</li>
<li><b>Complications immédiates de l'avortement provoqué :</b> hémorragie et perforation utérine. Les complications tardives (douleurs pelviennes chroniques, béance du col) sont distinctes.</li>
<li><b>AMIU :</b> utilisée jusqu'à environ 12 SA ; au-delà, méthodes médicamenteuses ou dilatation-évacuation. Le <b>counseling</b> sur la planification familiale est systématique dans les soins après avortement.</li>
</ul>

<h3>8. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>Col rosé en début de grossesse</td><td>Violacé</td></tr>
<tr><td>Glaire abondante et filante en début de grossesse</td><td>Épaisse et rare</td></tr>
<tr><td>Échographie du 1<sup>er</sup> trimestre à 22 SA</td><td>11 à 13 SA + 6 jours (22 SA : morphologique)</td></tr>
<tr><td>Présentation du sommet : bregma</td><td>Occiput</td></tr>
<tr><td>Contractions permanentes</td><td>Intermittentes</td></tr>
<tr><td>Suites de couches : 1 mois</td><td>Environ 6 semaines</td></tr>
<tr><td>Les saignements du post-partum sont des métrorragies</td><td>Des lochies</td></tr>
<tr><td>L'excavation sépare petit et grand bassin</td><td>C'est le détroit supérieur</td></tr>
<tr><td>AMIU plus efficace après 12 semaines</td><td>AMIU jusqu'à environ 12 SA</td></tr>
<tr><td>Soins obstétricaux d'urgence : uniquement mortalité maternelle</td><td>Maternelle et néonatale</td></tr>
</table>
` },

"im": { html: `
<div class="retenir"><b>Fiche élaborée d'après les exercices « Immunologie » (QCD et QCM) et leurs corrections.</b> Les points marqués « à confirmer » sont ceux que les corrections signalent comme incertains. Si votre cours officiel indique d'autres valeurs, c'est lui qui fait foi.</div>

<h3>1. Concepts de base</h3>
<ul>
<li><b>Immunologie :</b> science de l'<b>immunité</b> (et non de l'immunisation ni de l'immunogénicité). Immunité vient du latin <i>immunitas</i> : « exempt de charge ».</li>
<li>L'immunologie repose sur <b>trois piliers</b>. Le <b>support</b> de l'immunité est le <b>système immunitaire</b> (ensemble de tissus, de cellules et d'organes), et non le seul lymphocyte T.</li>
<li><b>Fonction :</b> défendre l'organisme. Tout être vivant reconnaît et <b>tolère le soi</b>, et rejette ce qui lui est étranger. Le but de la réponse immunitaire est la <b>protection</b> par épuration antigénique, directe ou indirecte.</li>
<li><b>Tolérance :</b> acceptation sans réaction de ce qui est étranger (non-réponse spécifique) ; ce n'est pas un déficit immunitaire. Un <b>tolérogène</b> induit une tolérance spécifique.</li>
<li>La réponse immunitaire est <b>strictement spécifique</b> et prend deux formes : <b>humorale</b> (anticorps) et <b>cellulaire</b> (lymphocytes T : T cytotoxiques et T producteurs de lymphokines). La réponse secondaire est dite <b>anamnestique</b>.</li>
</ul>

<h3>2. L'antigène</h3>
<ul>
<li><b>Deux propriétés :</b> l'<b>immunogénicité</b> (capacité d'induire une réponse immunitaire) et la <b>spécificité antigénique</b>. Un antigène immunogène est un <b>immunogène</b>.</li>
<li>L'<b>haptène</b> est non immunogène mais possède la spécificité immunologique.</li>
<li><b>Facteurs de l'immunogénicité :</b> ceux liés à l'antigène (notamment sa <b>taille</b>, à confirmer) et ceux liés à l'hôte. Les <b>adjuvants augmentent</b> le pouvoir immunogène.</li>
<li><b>Voies d'administration :</b> la voie intradermique est immunogène, plus que la voie sous-cutanée (la voie veineuse serait plus immunogène que la sous-cutanée, à confirmer). Les voies immunogènes sont au contraire les plus utilisées en vaccination.</li>
</ul>

<h3>3. Les anticorps (immunoglobulines)</h3>
<p>Ce sont des <b>glycoprotéines</b> (immunoglobulines), synthétisées par les <b>plasmocytes</b> (lymphocytes B différenciés), et non par les lymphocytes T.</p>
<table>
<tr><th>Classe</th><th>À retenir</th></tr>
<tr><td><b>IgM</b></td><td>Anticorps de la réponse humorale <b>primaire</b> ; témoins d'une infection <b>récente ou évolutive</b></td></tr>
<tr><td><b>IgG</b></td><td>Témoins d'une affection <b>ancienne</b> ; anticorps « chauds » (se fixent à 37 °C) ; <b>seuls à traverser le placenta</b> (le nouveau-né a un taux d'IgG au moins égal à celui de sa mère)</td></tr>
<tr><td><b>IgA</b></td><td>Défense anti-infectieuse au niveau des <b>muqueuses</b></td></tr>
<tr><td><b>IgE</b></td><td>Défense antiparasitaire</td></tr>
<tr><td><b>IgD</b></td><td>Transduction du signal d'activation des lymphocytes B</td></tr>
</table>
<p>Une fonction des anticorps est la formation du <b>complexe immun</b> antigène-anticorps ; ils sont impliqués dans toutes les méthodes de diagnostic basées sur la réaction Ag-Ac.</p>

<h3>4. Groupes sanguins</h3>
<table>
<tr><th>Groupe</th><th>Antigènes (hématies)</th><th>Anticorps (plasma)</th></tr>
<tr><td><b>A</b></td><td>A</td><td>Anti-B</td></tr>
<tr><td><b>B</b></td><td>B</td><td>Anti-A</td></tr>
<tr><td><b>AB</b></td><td>A et B</td><td>Aucun</td></tr>
<tr><td><b>O</b></td><td>Aucun</td><td>Anti-A et anti-B</td></tr>
</table>
<ul>
<li><b>Système ABO-Rhésus :</b> huit groupes (A, B, AB, O, positifs ou négatifs). Le système <b>Rhésus</b> compte <b>5 antigènes</b> (D, C, c, E, e) ; les sujets Rhésus négatif n'ont pas l'antigène D. Le groupe de l'enfant dépend de l'<b>hérédité</b>.</li>
<li><b>Groupage ABO :</b> deux épreuves, <b>globulaire</b> (Beth-Vincent, avec sérums tests anti-A, anti-B, anti-AB) et <b>sérique</b> (Simonin). Il se pratique chez les donneurs, mais aussi chez les receveurs, les femmes enceintes, etc.</li>
<li><b>Test de Coombs :</b> met en évidence des anticorps incomplets. Le <b>direct</b> (anticorps fixés sur les hématies) se fait en <b>un temps</b> ; l'<b>indirect</b> (anticorps dans le sérum) en <b>deux temps</b>, et il est <b>positif</b> si le sérum contient des anticorps.</li>
<li><b>Prélèvement :</b> tube <b>EDTA</b> pour le groupage ABO-Rhésus et le Coombs direct ; <b>tube sec</b> pour les examens sérologiques en règle générale.</li>
</ul>

<h3>5. Sérologies</h3>
<h4>Syphilis (<i>Treponema pallidum</i>)</h4>
<ul>
<li>IST contagieuse. Le chancre d'inoculation apparaît environ <b>3 semaines</b> après le contact.</li>
<li><b>Tests :</b> TPHA (<i>Treponema pallidum Hemagglutination Assay</i>, hémagglutination) et VDRL ; le TPHA se positive vers le 10<sup>e</sup> jour du chancre et reste positif des années, même après traitement (cicatrice sérologique) ; VDRL vers le 11<sup>e</sup> jour (à confirmer).</li>
<li><b>Interprétation :</b> TPHA négatif + VDRL positif = faux positif ; TPHA et VDRL négatifs = absence de syphilis (hors toute première phase).</li>
</ul>
<h4>Fièvre typhoïde : sérodiagnostic de Widal et Félix</h4>
<ul>
<li>Recherche les agglutinines dirigées contre les <b>salmonelles</b> (bacilles <b>Gram négatif</b>) : antigène somatique <b>O</b> et antigène flagellaire <b>H</b>. Réaction qualitative de dépistage.</li>
<li>Les agglutinines <b>O apparaissent vers le 8<sup>e</sup> jour</b>, les <b>H vers le 12<sup>e</sup> jour</b>. À la période d'état, le titre H dépasse largement le titre O ; les O sont plus fugaces et les H persistent plus longtemps.</li>
</ul>
<h4>VIH</h4>
<ul>
<li>Tropisme pour les lymphocytes T4 (CD4). <b>Antigène P24</b> : protéine de la capside libérée à la réplication, apparaît vers le 13<sup>e</sup> jour (environ 2 semaines, à confirmer), seuil 20 pg/ml, disparaît après la primo-infection et réapparaît au stade SIDA.</li>
<li><b>Anticorps anti-VIH :</b> vers le 21<sup>e</sup> jour (environ 3 semaines) et ils persistent toute la vie. SIDA : syndrome d'immunodéficience acquise ; VIH : virus de l'immunodéficience humaine.</li>
</ul>
<h4>Hépatites</h4>
<ul>
<li><b>Hépatite C :</b> diagnostic par détection du génome viral (<b>PCR</b>) ; elle passe à la chronicité dans environ 3/4 des cas (à confirmer).</li>
<li><b>Hépatite B :</b> la disparition de l'antigène HBe avec apparition des anticorps anti-HBe marque la fin de la réplication virale.</li>
</ul>
<h4>Rubéole et toxoplasmose</h4>
<ul>
<li><b>Rubéole :</b> maladie virale éruptive bénigne, <b>contagieuse</b>, transmise par voie <b>respiratoire</b>. Titre d'anticorps en IHA : <b>moins de 1/20 = absence d'immunité</b> ; supérieur à 1/20 = immunité naturelle ou vaccinale.</li>
<li><b>Toxoplasmose :</b> séronégatif si IgG &lt; 8 UI/ml (les unités varient selon les sujets).</li>
</ul>
<h4>CRP et hCG</h4>
<ul>
<li><b>CRP :</b> elle augmente davantage en cas d'infection <b>bactérienne</b> que virale ; une valeur égale à <b>10 fois la normale</b> signe une infection bactérienne.</li>
<li><b>hCG :</b> chaîne alpha (commune à LH, FSH, TSH) et chaîne bêta spécifique ; elle apparaît 48 h après l'implantation ; valeur usuelle &lt; 5 UI/l chez l'homme comme chez la femme.</li>
</ul>

<h3>6. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>L'immunité est la science de l'immunologie</td><td>L'immunologie est la science de l'immunité</td></tr>
<tr><td>La tolérance est un déficit immunitaire</td><td>C'est une non-réponse spécifique</td></tr>
<tr><td>Les anticorps sont synthétisés par les lymphocytes T</td><td>Par les plasmocytes</td></tr>
<tr><td>Les IgA agissent au niveau des muscles</td><td>Au niveau des muqueuses</td></tr>
<tr><td>Les IgM témoignent d'une affection constante</td><td>Infection récente ou évolutive</td></tr>
<tr><td>Le groupe O porte les antigènes A et B</td><td>Aucun antigène (mais des anti-A et anti-B)</td></tr>
<tr><td>Coombs direct en deux temps</td><td>Un temps (l'indirect en deux)</td></tr>
<tr><td>Coombs indirect négatif si anticorps présents</td><td>Positif</td></tr>
<tr><td>Agglutinines O au 12<sup>e</sup> jour, H au 8<sup>e</sup></td><td>O au 8<sup>e</sup>, H au 12<sup>e</sup></td></tr>
<tr><td>Les salmonelles sont des cocci ou des Gram +</td><td>Bacilles Gram −</td></tr>
<tr><td>Examens sérologiques sur tube EDTA ou héparine</td><td>Tube sec</td></tr>
<tr><td>Rubéole : bactérie / non contagieuse</td><td>Virus, contagieuse</td></tr>
<tr><td>Un adjuvant diminue l'immunogénicité</td><td>Il l'augmente</td></tr>
<tr><td>Anticorps &lt; 1/20 : immunité rubéolique</td><td>Absence d'immunité</td></tr>
<tr><td>Groupage uniquement chez les donneurs</td><td>Aussi receveurs, femmes enceintes…</td></tr>
</table>
` },

"th": { html: `
<div class="retenir"><b>Fiche élaborée d'après les exercices « Théorie et concept » (QCD et QCM) et leurs corrections.</b> Les points marqués « à confirmer » sont ceux que les corrections signalent comme incertains. Si votre cours officiel indique d'autres formulations, c'est lui qui fait foi.</div>

<h3>1. Profession, soins infirmiers et fonctions</h3>
<ul>
<li>Une <b>profession</b> se distingue d'un métier : elle repose sur des connaissances théoriques propres et une base scientifique.</li>
<li><b>Les soins infirmiers</b> sont un ensemble d'activités <b>spécifiques, autonomes et/ou déléguées</b> visant le maintien de la santé des personnes <b>saines ou malades</b>, des familles et des collectivités. Ils ne sont pas réservés aux malades.</li>
<li><b>Le rôle propre</b> (autonome) s'ajoute au rôle prescrit : appliquer les prescriptions médicales relève du <b>rôle prescrit</b> (délégué). L'IDE/SF ne délègue pas son rôle propre aux auxiliaires.</li>
<li><b>Fonctions de l'infirmier :</b> diagnostic, traitement et réadaptation, enseignement et éducation, recherche, administration. Elles sont plus de trois ; la sage-femme a aussi une mission spirituelle auprès de la parturiente.</li>
<li>L'infirmier est un professionnel de santé <b>diplômé</b> (et non simplement une personne qui travaille dans une structure sanitaire).</li>
</ul>
<h3>2. Catégories et composantes des soins</h3>
<table>
<tr><th>Catégories</th><th>But</th></tr>
<tr><td><b>Curatifs</b></td><td>Traiter la maladie</td></tr>
<tr><td><b>Préventifs</b></td><td>Éviter la maladie</td></tr>
<tr><td><b>Palliatifs</b></td><td>Atténuer les symptômes pénibles <b>sans agir sur la cause</b></td></tr>
</table>
<p>Chaque catégorie comporte trois composantes : <b>technique, relationnelle, éducative</b> (non « fonctionnelle » ni « traumatique »). Les dimensions préventive, relationnelle et technique se retrouvent aussi dans les soins palliatifs. La toilette du malade est un soin de nature technique/fonctionnelle, non relationnelle.</p>

<h3>3. Concepts de santé</h3>
<ul>
<li><b>OMS (1978) :</b> la santé est un état de <b>complet bien-être physique, mental et social</b>, et non la simple absence de maladie ou d'infirmité.</li>
<li>La notion de santé varie selon le secteur (biologique, social, psychologique), la perspective, le moment et l'environnement. Parmi les <b>facteurs d'influence d'une définition personnelle de la santé</b> : développement personnel, expériences antérieures, influences sociales et culturelles, attentes personnelles. Les soins infirmiers n'en font pas partie.</li>
<li><b>Selon Dunn,</b> le continuum santé-maladie varie avec l'environnement. L'homme, en science infirmière, est en <b>perpétuel devenir</b> et en interaction avec son environnement.</li>
<li><b>Les comportements adaptés</b> assurent l'intégrité de la personne : survie, croissance, reproduction et maturation.</li>
<li><b>Termes :</b> <b>rechute</b> = reprise évolutive d'une même maladie ; <b>récidive</b> = réapparition d'une maladie antérieurement guérie.</li>
</ul>

<h3>4. Concepts, modèles et théories</h3>
<ul>
<li><b>Les théories de soins reposent sur quatre concepts :</b> la <b>personne (l'homme)</b>, la <b>santé</b>, l'<b>environnement</b> et les <b>soins infirmiers</b>. « La réception du malade », l'« indépendance » ou la « santé mentale » n'en font pas partie.</li>
<li><b>Intérêt d'étudier les concepts :</b> analyser la pratique soignante, adapter les soins à la personne, disposer d'un langage professionnel commun, construire des connaissances utiles et comprendre le monde.</li>
<li><b>Modèle conceptuel</b> (Noumsi, 1988) : représentation mentale structurée de l'image d'une profession, façon simplifiée de voir la réalité professionnelle. Il donne une idée précise du rôle de l'agent de santé. Son application nécessite une méthode de travail : la <b>démarche de soins</b>.</li>
<li><b>Composantes essentielles d'un modèle :</b> postulats, valeurs, éléments. Les <b>valeurs</b> représentent l'aspect affectif. Le modèle de soins et la théorie de soins sont distincts.</li>
</ul>

<h3>5. Florence Nightingale et Virginia Henderson</h3>
<ul>
<li><b>F. Nightingale :</b> le but des soins est de mettre l'être humain dans les <b>meilleures conditions afin que la nature agisse sur lui</b> (cette formule n'est pas de Henderson).</li>
<li><b>V. Henderson :</b> les soins visent à conserver ou rétablir l'<b>indépendance</b> de la personne (malade <b>ou saine</b>) pour qu'elle satisfasse elle-même ses besoins fondamentaux. Pour elle, la santé suppose la satisfaction des <b>14 besoins</b>. Le centre de l'intervention est la <b>personne</b>.</li>
<li><b>Trois sources de difficulté</b> : manque de <b>force</b>, de <b>volonté</b>, de <b>connaissance</b>. L'infirmier joue alors un rôle de <b>suppléance</b>. Une conséquence attendue : la <b>mort paisible</b>.</li>
<li><b>Concepts de base :</b> besoins fondamentaux, indépendance, relation soignant-soigné.</li>
</ul>
<table>
<tr><th>N°</th><th>Les 14 besoins de V. Henderson</th></tr>
<tr><td>1</td><td><b>Respirer</b> (et non « inspirer »)</td></tr>
<tr><td>2</td><td>Boire et manger</td></tr>
<tr><td>3</td><td>Éliminer</td></tr>
<tr><td>4</td><td>Se mouvoir et maintenir une bonne posture</td></tr>
<tr><td>5</td><td>Dormir et se reposer</td></tr>
<tr><td>6</td><td>Se vêtir et se dévêtir</td></tr>
<tr><td>7</td><td>Maintenir la température du corps</td></tr>
<tr><td>8</td><td>Être propre et protéger ses téguments</td></tr>
<tr><td>9</td><td>Éviter les dangers</td></tr>
<tr><td>10</td><td>Communiquer</td></tr>
<tr><td>11</td><td>Agir selon ses croyances et ses valeurs</td></tr>
<tr><td>12</td><td>S'occuper en vue de se réaliser</td></tr>
<tr><td>13</td><td>Se récréer</td></tr>
<tr><td>14</td><td>Apprendre</td></tr>
</table>
<p>Le besoin de <b>procréer</b> ne figure pas parmi les 14. Un besoin est <b>universel</b> mais spécifique à chacun ; selon Evelyn Adam, c'est une <b>nécessité vitale</b> (un manque pour l'homme).</p>

<h3>6. Autres auteurs</h3>
<ul>
<li><b>Maslow :</b> besoins <b>hiérarchisés</b> (pyramide) ; les rapports sexuels font partie des besoins <b>physiologiques</b>. « Apprendre » est le 14<sup>e</sup> besoin de Henderson, non de Maslow.</li>
<li><b>Dorothea Orem :</b> trois types d'auto-soins (universels, de développement, liés aux déviations de santé) ; santé = garder une autonomie maximum face aux changements (à confirmer).</li>
</ul>

<h3>7. Relation d'aide et dossier de soins</h3>
<ul>
<li><b>Relation d'aide :</b> repose sur l'<b>écoute active</b> (neutre et bienveillante), l'<b>empathie</b> et le respect ; elle n'est pas une soumission au patient. Deux phases : prise de contact et relation thérapeutique (à confirmer). Elle compte parmi les critères d'évaluation de la qualité des soins. L'autonomie du malade est perturbée par l'hospitalisation. Les soins se font dans une approche empathique et calme.</li>
<li><b>Dossier de soins infirmiers :</b> <b>individuel, nominatif</b>, mis à jour pour chaque patient, il préserve le <b>secret professionnel</b>, organise et facilite le travail (il n'augmente pas la charge), contribue à l'apprentissage ; il varie selon les structures (non uniformisé).</li>
</ul>

<h3>8. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>Soins préventifs = atténuer les symptômes</td><td>Palliatifs ; préventifs = éviter la maladie</td></tr>
<tr><td>7<sup>e</sup> besoin de Henderson : se vêtir</td><td>6<sup>e</sup> ; le 7<sup>e</sup> est maintenir la température</td></tr>
<tr><td>« Apprendre » : besoin de Maslow</td><td>14<sup>e</sup> besoin de Henderson</td></tr>
<tr><td>Soins infirmiers pour les seuls malades</td><td>Personnes saines ou malades</td></tr>
<tr><td>« Nature agit sur lui » : Henderson</td><td>Nightingale</td></tr>
<tr><td>OMS : santé = absence de maladie</td><td>Complet bien-être physique, mental et social</td></tr>
<tr><td>Dossier de soins collectif / uniforme</td><td>Individuel ; varie selon les structures</td></tr>
<tr><td>Rechute = réapparition d'une maladie guérie</td><td>Rechute = reprise évolutive ; récidive = réapparition</td></tr>
<tr><td>Appliquer les prescriptions : rôle propre</td><td>Rôle prescrit</td></tr>
<tr><td>Rapports sexuels : besoin social (Maslow)</td><td>Besoin physiologique</td></tr>
<tr><td>Orem : 4 types d'auto-soins</td><td>3 types</td></tr>
<tr><td>L'IDE délègue son rôle aux auxiliaires</td><td>Pas de délégation du rôle propre</td></tr>
</table>
` },

"rc": { html: `
<div class="retenir"><b>Fiche élaborée d'après les exercices « Recherche » (QCD et QCM) et leurs corrections.</b> Les points marqués « à confirmer » sont ceux que les corrections signalent comme incertains. Si votre cours officiel indique d'autres classements, c'est lui qui fait foi.</div>

<h3>1. Science et recherche scientifique</h3>
<ul>
<li>La <b>science</b> est un ensemble de connaissances <b>vérifiables</b> (et non de dogmes ni d'assertions arbitraires).</li>
<li><b>Sciences exactes :</b> mathématiques et sciences mathématisées (physique théorique). <b>Sciences expérimentales :</b> sciences de la nature, biologie, médecine. <b>Sciences humaines :</b> l'homme, son histoire, son comportement, la langue.</li>
<li><b>Recherche scientifique :</b> processus, démarche <b>systématique et rigoureuse</b> qui permet d'obtenir des réponses à des questions précises, et ensemble d'actions pour produire et développer des connaissances scientifiques (non une démarche pour faire admettre l'opinion du chercheur).</li>
<li><b>Buts :</b> développer des théories, constituer une base scientifique qui crédibilise les professions de santé, formuler des généralisations, améliorer les techniques <b>existantes</b>.</li>
<li><b>Fonctions (4) :</b> <b>décrire, expliquer, prédire, contrôler</b> (on ne « devine » pas des faits). La « description » est aussi l'un des niveaux de la recherche.</li>
<li><b>Orientations :</b> recherche <b>fondamentale</b> (développer des connaissances) et recherche <b>appliquée</b> (applications pratiques, elle se préoccupe des implications de ses produits). Ce ne sont pas des fonctions.</li>
</ul>

<h3>2. Modes d'investigation et méthodes</h3>
<table>
<tr><th>Notion</th><th>À retenir</th></tr>
<tr><td><b>Modes d'investigation (2)</b></td><td><b>Approche quantitative</b> et <b>approche qualitative</b> (ce ne sont pas des étapes du processus)</td></tr>
<tr><td><b>Méthodes</b></td><td>Recherche <b>expérimentale</b> (détermine les causes des phénomènes) et <b>non expérimentale</b> (à confirmer) ; l'expérimentale n'est pas un mode d'investigation</td></tr>
</table>

<h3>3. Les trois phases du processus de recherche</h3>
<table>
<tr><th>Phase</th><th>Contenu</th></tr>
<tr><td><b>1. Conceptuelle</b> (théorique)</td><td>Choix et formulation du problème, revue de littérature (recension des écrits), cadre de recherche, <b>but, questions de recherche ou hypothèses</b></td></tr>
<tr><td><b>2. Méthodologique</b> (tactique)</td><td><b>Devis de recherche</b>, méthodes de collecte et d'analyse des données</td></tr>
<tr><td><b>3. Empirique</b> (opérationnelle) – dernière phase</td><td><b>Collecte des données</b> et <b>communication des résultats</b></td></tr>
</table>

<h3>4. Choix du sujet, problème et question de recherche</h3>
<ul>
<li><b>Domaine de recherche :</b> spécialité de la discipline qui a retenu l'attention. <b>Thème :</b> délimite un aspect du vaste champ d'intérêt.</li>
<li><b>Formulation du sujet :</b> thème ou phénomène à l'étude, <b>population cible</b>, <b>lieu</b> où survient le phénomène.</li>
<li><b>Problème :</b> situation qui nécessite une solution, une amélioration ou une modification ; <b>écart</b> entre la situation actuelle et la situation souhaitée. L'énoncé du problème décrit la situation et les stratégies possibles ; il comporte aussi le sujet d'étude et la justification du choix (à confirmer).</li>
<li><b>Question de recherche :</b> énoncé explicite relatif à un domaine que l'on désire explorer pour obtenir de nouvelles informations ; ses composantes : question pivot et domaine (à confirmer).</li>
<li><b>But de la recherche :</b> ce que le chercheur veut atteindre. <b>Hypothèse :</b> énoncé déclaratif qui <b>présume une relation entre variables</b> (ce n'est pas le but).</li>
</ul>

<h3>5. Concepts et variables</h3>
<ul>
<li><b>Construit :</b> concept inventé ou adopté par le chercheur dans un but scientifique précis. <b>Définition opérationnelle :</b> elle <b>lève</b> l'équivoque sur les concepts clés. <b>Observer :</b> considérer avec attention des faits concrets.</li>
<li><b>Variable indépendante :</b> manipulée par le chercheur pour étudier ses effets. <b>Variable dépendante :</b> subit l'effet attendu de la variable indépendante (c'est la dépendante qui est <b>souvent expliquée</b> par l'indépendante, jamais l'inverse).</li>
<li><b>Variable quantitative :</b> valeurs exprimées en chiffres. <b>Variable qualitative :</b> valeurs non numériques. <b>Variable dichotomique (binaire) :</b> seulement <b>deux</b> valeurs possibles.</li>
</ul>

<h3>6. Revue de la littérature et documentation</h3>
<ul>
<li><b>Lieux de documentation :</b> bibliothèques (et non librairies), bibliothécaires, personnes ressources, outils numériques, sites internet.</li>
<li><b>Types de documents :</b>
<ul>
<li><b>Manuscrits :</b> carnets de correspondance, carnets intimes.</li>
<li><b>Tapuscrits :</b> procès-verbaux, registres d'activités, archives (à confirmer).</li>
<li><b>Imprimés :</b> livres, articles de revues, mémoires, thèses.</li>
<li><b>Oraux :</b> histoire racontée, chant. Les graffiti sont des documents écrits ou dessinés sur des murs (pas photographiques).</li>
</ul></li>
<li><b>Littérature grise :</b> documents non commercialisés (mémoires, thèses, procès-verbaux, rapports), qui ne se limitent pas aux universités ; les journaux n'en font pas partie. <b>Littérature scientifique :</b> travaux de chercheurs publiés.</li>
</ul>

<h3>7. Recherche en soins infirmiers</h3>
<ul>
<li><b>Définition :</b> étude systématique de phénomènes présents dans les domaines scientifiques de la discipline. Elle fait passer la conception de la profession de <b>métier à profession</b>.</li>
<li><b>Domaines :</b> la <b>personne</b>, la <b>santé</b>, l'<b>environnement</b> (cadre de vie) et les <b>soins infirmiers</b> (à confirmer pour ce dernier, que l'exercice ajoute aussi comme sujet de préoccupation).</li>
<li><b>Finalités :</b> rationaliser les connaissances infirmières, développer les connaissances <b>et</b> leur application pratique.</li>
<li><b>Histoire :</b> naissance au <b>XIX<sup>e</sup> siècle</b> avec Florence Nightingale (guerre de Crimée) ; émergence des théories et modèles conceptuels vers <b>1970</b>.</li>
</ul>

<h3>8. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>Recherche non expérimentale : détermine les causes</td><td>Recherche expérimentale</td></tr>
<tr><td>La recherche appliquée ignore les implications de ses produits</td><td>Elle vise des applications pratiques</td></tr>
<tr><td>Recherche infirmière : du concept de profession à celui de métier</td><td>Du métier à la profession</td></tr>
<tr><td>Deux phases de recherche ; dernière = tactique</td><td>Trois phases ; dernière = empirique</td></tr>
<tr><td>Approche qualitative = étape du processus</td><td>C'est un mode d'investigation</td></tr>
<tr><td>Recherche fondamentale / expérimentale = fonction ou mode</td><td>Orientation / méthode</td></tr>
<tr><td>Le but est un énoncé déclaratif présumant une relation</td><td>C'est l'hypothèse</td></tr>
<tr><td>La définition opérationnelle « marque » l'équivoque</td><td>Elle la lève</td></tr>
<tr><td>La variable dépendante explique l'indépendante</td><td>Inverse</td></tr>
<tr><td>Variable dichotomique à plusieurs valeurs</td><td>Deux valeurs seulement</td></tr>
<tr><td>Variable qualitative = quantités en chiffres</td><td>Variable quantitative</td></tr>
<tr><td>Sciences humaines : biologie, médecine</td><td>Sciences expérimentales</td></tr>
<tr><td>Littérature grise : exclusivement les universités</td><td>Aussi rapports, procès-verbaux…</td></tr>
<tr><td>Recherche née en 2<sup>e</sup> moitié du XX<sup>e</sup> siècle (guerre de Sécession)</td><td>XIX<sup>e</sup> siècle, guerre de Crimée</td></tr>
<tr><td>Les librairies : lieux de documentation</td><td>Les bibliothèques</td></tr>
</table>
` },

"sns": { html: `
<div class="retenir"><b>Fiche élaborée d'après les exercices « Système national de santé » (QCD et QCM) et leurs corrections.</b> Les localisations et chiffres marqués « à confirmer » sont ceux que les corrections signalent comme incertains. Si votre cours officiel indique d'autres données, c'est lui qui fait foi.</div>

<h3>1. Définition, objectifs et éléments</h3>
<ul>
<li>Le <b>système de santé</b> est le moyen dont dispose la collectivité pour répondre aux besoins de santé de la population. Il offre des soins <b>primaires, secondaires et tertiaires</b> (et non « précaires »).</li>
<li><b>Objectifs :</b> <b>restaurer</b> la santé, assurer la <b>prévention</b> des maladies, promouvoir la <b>santé</b> (jamais « promouvoir la maladie »).</li>
<li><b>Éléments :</b> structures de santé, ressources financières, personnel soignant, politique de santé (les maladies et l'accessibilité ne sont pas des éléments du système). L'<b>OMS</b> décrit <b>six piliers</b> (non cinq).</li>
<li><b>Ressources humaines pour la santé :</b> personnel médical, infirmier, sages-femmes, aides-soignants, mais aussi personnel non médical de gestion et de soutien (techniciens de surface, vigiles, chauffeurs).</li>
<li><b>Offre de soins :</b> elle est influencée par l'implication du secteur privé, l'activité des tradithérapeutes et la pyramide sanitaire.</li>
<li><b>Prévention primaire :</b> éviter l'apparition de la maladie (vaccination, CPN, sensibilisation à la moustiquaire, spots télévisés, dépistage volontaire du VIH relevant ici de la prévention). Le <b>dépistage précoce</b> relève de la prévention <b>secondaire</b>.</li>
</ul>

<h3>2. Caractéristiques d'un bon système de santé</h3>
<table>
<tr><th>Caractéristique</th><th>Définition</th></tr>
<tr><td><b>Accessibilité</b></td><td>Soins à proximité des populations, à un prix abordable, quelle que soit la localisation et le statut social. Elle est <b>physique</b> (structure dans chaque localité, stratégies avancée ou mobile, structures à moins de 5 km : ce ne sont pas des moyens exclusifs), <b>financière</b> (mutuelles, assurance maladie, pas seulement la gratuité) et culturelle</td></tr>
<tr><td><b>Globalité</b></td><td>Soins <b>curatifs et préventifs</b> (et promotionnels, sensibilisation) assurés par les mêmes animateurs</td></tr>
<tr><td><b>Équité</b></td><td>Accessible à tous dans les mêmes proportions, sans discrimination (confondue à tort avec la globalité)</td></tr>
<tr><td><b>Acceptabilité</b></td><td>Prise en compte des caractéristiques <b>socioculturelles</b> et du niveau intellectuel de la communauté</td></tr>
<tr><td><b>Liberté</b></td><td>Pour le <b>malade</b>, possibilité de choisir la <b>structure</b> et l'<b>agent de santé</b> (non de prescrire son médicament ni l'automédication)</td></tr>
<tr><td><b>Efficacité</b></td><td>Atteinte des objectifs</td></tr>
<tr><td><b>Efficience</b></td><td>Atteinte des objectifs avec les <b>moyens disponibles</b> ; un système efficace n'est pas toujours efficient (il peut gaspiller des ressources), et la forte consommation de ressources n'a aucun rapport avec l'efficacité</td></tr>
<tr><td><b>Réactivité</b></td><td>S'adapte <b>en permanence</b> à l'évolution des besoins</td></tr>
<tr><td><b>Planifiabilité</b></td><td>Détermine les ressources disponibles et choisit les solutions</td></tr>
<tr><td><b>Évaluabilité</b></td><td>Apprécie la situation, mesure les résultats et identifie les difficultés ; tout système peut être évalué</td></tr>
</table>
<p>Les <b>soins essentiels</b> portent sur les besoins prioritaires des individus, familles et communautés.</p>

<h3>3. Organisation du système ivoirien</h3>
<ul>
<li>Système <b>pyramidal</b> à <b>deux versants</b> (administratif et de soins) et <b>trois niveaux</b> (et non trois versants et deux niveaux).</li>
<li><b>Insuffisance :</b> manque d'équité, entre autres.</li>
</ul>

<h3>4. Historique du système de santé (ordre chronologique : avant puis après l'indépendance)</h3>
<table>
<tr><th>Période</th><th>À retenir</th></tr>
<tr><td><b>Précoloniale</b></td><td>Pas de consolidation des acquis (objectif de la période postcoloniale)</td></tr>
<tr><td><b>Coloniale / pré-indépendance</b></td><td>Système <b>ni global ni équitable</b>, privilégiant la <b>main-d'œuvre valide</b> ; structures urbaines pour les Européens et Syriens, structures rurales légères et préventives pour les autochtones ; <b>financé par l'administration coloniale</b> ; activités : <b>hygiène collective</b> (prisons, milieu scolaire, marchés, cinémas) et <b>prophylaxie des grandes épidémies</b> (dépistage des cas et isolement) ; formation du personnel à l'école de médecine <b>Jules Carde à Dakar</b> ; infrastructure de base avec 23 lits en 1902 (à confirmer)</td></tr>
<tr><td><b>Postcoloniale (1960-1980)</b></td><td>Objectif : <b>consolidation des acquis</b> (infrastructures, personnel, financement) ; maintenir en bonne santé la main-d'œuvre pour le développement économique ; deux volets : <b>soins curatifs gratuits</b> et <b>préventif</b> (lutte contre les grandes endémies) ; structures surtout dans les <b>centres urbains</b> ; financement par l'État, le secteur privé et les partenaires au développement</td></tr>
</table>

<h3>5. Structures nationales (localisations d'après les exercices)</h3>
<table>
<tr><th>Structure</th><th>Localisation</th></tr>
<tr><td><b>INHP</b> (Institut national d'hygiène publique)</td><td>Adjamé, près du camp militaire Galliéni</td></tr>
<tr><td><b>Direction de coordination du PEV</b></td><td>Dans l'enceinte de l'INHP</td></tr>
<tr><td><b>INSP</b></td><td>Treichville, près du CHU (à confirmer)</td></tr>
<tr><td><b>Institut de cardiologie d'Abidjan</b></td><td>Treichville (à confirmer), non Cocody</td></tr>
<tr><td><b>SAMU d'Abidjan</b></td><td>Cocody (à confirmer), non Yopougon</td></tr>
<tr><td><b>Centre de transfusion sanguine d'Abidjan</b></td><td>Treichville (à confirmer), non Cocody</td></tr>
<tr><td><b>Institut Raoul Follereau</b></td><td>Adzopé (et non Alépé)</td></tr>
</table>

<h3>6. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>Accessibilité à un prix exorbitant</td><td>Prix abordable</td></tr>
<tr><td>Un système réactif ne se modifie qu'une fois</td><td>Il s'adapte en permanence</td></tr>
<tr><td>Un système global = accessible à tous sans discrimination</td><td>C'est l'équité</td></tr>
<tr><td>Liberté = prescrire son médicament / agent qui choisit</td><td>Le malade choisit la structure et l'agent</td></tr>
<tr><td>Ne pas tenir compte du socioculturel : manque de liberté</td><td>Manque d'acceptabilité</td></tr>
<tr><td>Système qui mesure ses résultats : planifiable</td><td>Évaluable (planifiable = choix des solutions)</td></tr>
<tr><td>Un système efficace est toujours efficient</td><td>Non</td></tr>
<tr><td>S'adapte constamment : efficient</td><td>Réactif</td></tr>
<tr><td>Prévention primaire = dépistage précoce</td><td>Dépistage = prévention secondaire</td></tr>
<tr><td>Système ivoirien : 3 versants et 2 niveaux</td><td>2 versants et 3 niveaux</td></tr>
<tr><td>Gratuité = accessibilité, ou seule voie financière</td><td>Mutuelles, assurance maladie existent ; accessibilité aussi géographique</td></tr>
<tr><td>Période d'après l'indépendance avant celle d'avant</td><td>Ordre inversé</td></tr>
<tr><td>Jules Carde en France ; système colonial financé par l'État ivoirien</td><td>Dakar ; administration coloniale</td></tr>
<tr><td>1960-1980 : structures rurales</td><td>Surtout urbaines</td></tr>
</table>
` },

"sp": { html: `
<div class="retenir"><b>Fiche élaborée d'après les exercices « Soins de santé primaires » (QCD et QCM) et leurs corrections.</b> Les points marqués « à confirmer » sont ceux que les corrections signalent comme incertains (notamment le classement des huit composantes et certaines dates). Si votre cours officiel indique d'autres données, c'est lui qui fait foi.</div>

<h3>1. Repères historiques</h3>
<table>
<tr><th>Date</th><th>Événement</th></tr>
<tr><td><b>1977</b></td><td>L'<b>Assemblée mondiale de la Santé (OMS)</b> fixe l'objectif de la <b>santé pour tous en l'an 2000</b>. L'analyse de la situation mondiale relève l'incapacité des systèmes à répondre aux besoins, la cherté des actes (les démunis ne peuvent se soigner) et l'<b>inadéquation</b> et la répartition inéquitable des ressources</td></tr>
<tr><td><b>6-12 septembre 1978</b></td><td><b>Conférence d'Alma-Ata</b> (ex-URSS, aujourd'hui Kazakhstan) : définition de la politique des <b>SSP</b> (et non à Bamako)</td></tr>
<tr><td><b>1985</b></td><td><b>Lusaka</b> : les chefs d'État africains dégagent les <b>trois niveaux</b> d'application des SSP</td></tr>
<tr><td><b>1987</b></td><td><b>Initiative de Bamako</b> : accent sur la lutte contre la mortalité maternelle et infantile, accès prioritaire des femmes et des enfants aux soins, <b>autonomie de gestion locale</b> par les comités de gestion, participation active des populations</td></tr>
<tr><td><b>Côte d'Ivoire</b></td><td>Début effectif de la mise en œuvre en <b>1991</b> (district sanitaire de Bouaflé) et lancement officiel en <b>1993</b> (à confirmer)</td></tr>
</table>

<h3>2. Caractéristiques des SSP</h3>
<ul>
<li><b>Essentiels :</b> ils répondent aux besoins fondamentaux et prioritaires des individus, familles et communautés.</li>
<li><b>Accessibles :</b> peu coûteux, disponibles dans les centres de santé (l'automédication n'est pas un critère).</li>
<li><b>Acceptables / adaptés :</b> ils tiennent compte des caractéristiques socioculturelles et des besoins de santé des populations.</li>
<li><b>Intégrés :</b> ils font partie du système national de santé et en dépendent (ce n'est pas une entité indépendante).</li>
<li><b>Participation communautaire :</b> la mise en œuvre en Côte d'Ivoire en est en partie axée. Les centres de santé ne répondent pas toujours à l'attente des populations lorsqu'elles ne sont pas associées à leurs activités.</li>
<li><b>But particulier en Côte d'Ivoire :</b> améliorer la santé de la <b>mère et de l'enfant</b>.</li>
<li>Les SSP se situent à <b>tous les niveaux</b> du système national de santé.</li>
</ul>

<h3>3. Les huit composantes essentielles (Côte d'Ivoire)</h3>
<p>La politique comprend <b>8 composantes</b> : <b>3 préventives, 3 promotionnelles, 2 curatives</b>.</p>
<table>
<tr><th>Composante</th><th>Type (classement usuel, à confirmer)</th></tr>
<tr><td>Vaccination contre les principales maladies infectieuses</td><td>Préventive</td></tr>
<tr><td>Prévention et lutte contre les endémies locales</td><td>Préventive</td></tr>
<tr><td>Protection maternelle et infantile, y compris santé de la reproduction et planification familiale</td><td>Préventive</td></tr>
<tr><td>Éducation appropriée pour la santé</td><td>Promotionnelle</td></tr>
<tr><td>Promotion de bonnes conditions alimentaires et nutritionnelles</td><td>Promotionnelle</td></tr>
<tr><td>Approvisionnement suffisant en eau potable et mesures d'assainissement de base</td><td>Promotionnelle</td></tr>
<tr><td>Traitement des maladies et lésions courantes</td><td>Curative</td></tr>
<tr><td>Fourniture de médicaments essentiels</td><td>Curative</td></tr>
</table>
<p><b>Formulations à respecter :</b> « <i>prévention et lutte</i> contre les endémies locales » (et non « promotion… » ni « épidémies ») ; « <i>promotion</i> de bonnes conditions alimentaires » (et non « prévention… »). La vaccination est préventive, non curative.</p>

<h3>4. Pyramide sanitaire ivoirienne</h3>
<ul>
<li><b>3 niveaux</b> (de bas en haut : périphérique, intermédiaire, central ; le central est en haut) et <b>2 versants</b> : <b>gestion</b> et <b>prestation de services</b>.</li>
</ul>
<table>
<tr><th>Niveau</th><th>Appellation SSP</th><th>Versant gestion</th><th>Versant prestation</th><th>Rôle</th></tr>
<tr><td><b>Périphérique</b></td><td>Primaire, niveau de <b>mise en œuvre</b></td><td><b>District sanitaire</b> (dirigé par le directeur départemental, à confirmer)</td><td><b>ESPC</b> (établissement sanitaire de premier contact : CSR, CSU…)</td><td>Mise en œuvre</td></tr>
<tr><td><b>Intermédiaire</b></td><td>Secondaire, niveau d'<b>appui</b></td><td><b>Direction régionale</b> (directeur régional)</td><td><b>CHR</b> (centre hospitalier régional), hôpital général</td><td>Appui</td></tr>
<tr><td><b>Central</b></td><td>Tertiaire</td><td><b>Ministère de la Santé</b></td><td>CHU (centre hospitalier universitaire), instituts spécialisés</td><td>Conception, coordination, appui et évaluation</td></tr>
</table>
<ul>
<li>Le district sanitaire est au niveau <b>périphérique</b> ; l'hôpital général au niveau <b>intermédiaire</b>. Le CHR ou même le CHU peuvent jouer le rôle d'ESPC en cas d'urgence (à confirmer).</li>
<li>Le niveau central ne fait pas que concevoir les politiques : il coordonne, appuie et évalue.</li>
</ul>

<h3>5. Hygiène : traitement des ordures ménagères</h3>
<p>L'<b>incinération</b> consiste à brûler les ordures à l'aide d'un incinérateur.</p>

<h3>6. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>SSP définis à Bamako</td><td>Alma-Ata (1978) ; Bamako (1987) = initiative</td></tr>
<tr><td>Les SSP sont indépendants du système national</td><td>Intégrés, donc dépendants</td></tr>
<tr><td>Niveaux d'application définis à Bamako / 1978 / 1987</td><td>Lusaka, 1985</td></tr>
<tr><td>Deux niveaux : stratégique et de mise en œuvre</td><td>Trois niveaux : périphérique, intermédiaire, central</td></tr>
<tr><td>District sanitaire : niveau secondaire</td><td>Périphérique</td></tr>
<tr><td>Hôpital général : périphérique</td><td>Intermédiaire</td></tr>
<tr><td>Niveau secondaire géré par le directeur départemental</td><td>Par le directeur régional</td></tr>
<tr><td>Niveau central : seulement la conception</td><td>Aussi coordination, appui, évaluation</td></tr>
<tr><td>2 préventives + 3 curatives (ou 2 promotionnelles)</td><td>3 préventives, 3 promotionnelles, 2 curatives</td></tr>
<tr><td>Vaccination : composante curative</td><td>Préventive</td></tr>
<tr><td>Pyramide à 3 versants, de haut en bas périphérique…</td><td>2 versants, 3 niveaux ; périphérique en bas</td></tr>
<tr><td>L'OMS compte 143 pays</td><td>Plus de 190 États membres</td></tr>
<tr><td>Répartition adéquate des ressources entre pays (motif des SSP)</td><td>Inadéquation de la répartition</td></tr>
</table>
` },

"pr": { html: `
<div class="retenir"><b>Fiche élaborée d'après les exercices « Pathologie respiratoire » (QCD et QCM) et leurs corrections.</b> Les points marqués « à confirmer » sont ceux que les corrections signalent comme incertains. Si votre cours officiel indique d'autres schémas ou valeurs, c'est lui qui fait foi.</div>

<h3>1. Sémiologie et symptômes</h3>
<ul>
<li><b>Interrogatoire :</b> recueille les signes <b>fonctionnels</b> (subjectifs). L'examen physique objective les signes physiques.</li>
<li><b>Polypnée :</b> augmentation de la fréquence <b>respiratoire</b> (non cardiaque).</li>
<li><b>Toux chronique :</b> évolution de plus de 8 semaines (« plus de 3 mois » selon l'énoncé corrigé ; à confirmer). Les <b>antitussifs</b> sont déconseillés devant une toux productive (grasse).</li>
<li><b>Hémoptysie :</b> l'hospitalisation est <b>nécessaire</b>. Causes respiratoires : cancer broncho-pulmonaire, pneumopathie bactérienne grave, abcès du poumon, tuberculose pulmonaire ; une pleurésie n'en est pas une cause habituelle.</li>
<li><b>Pneumothorax :</b> épanchement <b>gazeux</b> pleural.</li>
</ul>

<h3>2. Bronchite aiguë</h3>
<ul>
<li><b>Inflammation aiguë</b> des bronches (et non chronique), d'origine le plus souvent <b>virale</b> ; diagnostic <b>clinique</b>, radiographie thoracique normale et non indispensable.</li>
<li><b>Phase catarrhale (début) :</b> toux <b>sèche</b>, fébricule, état général conservé, examen physique pauvre. <b>Phase humide :</b> toux productive, dyspnée possible (à confirmer).</li>
<li><b>Traitement symptomatique :</b> décongestionnants nasaux, alimentation équilibrée, vitamine C et oligo-éléments. <b>Pas d'antibiothérapie systématique</b> (rarement indiquée) ni de bronchodilatateur systématique.</li>
<li><b>Complication principale :</b> la <b>surinfection bactérienne</b>.</li>
</ul>

<h3>3. Pneumopathie aiguë bactérienne</h3>
<ul>
<li>Infection du <b>parenchyme pulmonaire</b> par une <b>bactérie</b> (non une affection pleurale, non virale). Germe le plus fréquent chez l'adulte : le <b>pneumocoque</b> (non le staphylocoque).</li>
<li><b>Signes :</b> début <b>brutal</b>, forte fièvre (pas de fébricule), frissons, douleur thoracique en point de côté, toux sèche devenant productive ; <b>syndrome de condensation</b> (et non d'atélectasie).</li>
<li><b>Signes de gravité :</b> <b>FR &gt; 30/min</b>, <b>FC &gt; 125/min</b>, trouble de la conscience, température &lt; 35 ° ou &gt; 40 °C. (La douleur thoracique n'en est pas un ; FR 16 est normale.)</li>
<li><b>Sans signe de gravité :</b> traitement <b>ambulatoire</b>, <b>voie orale</b>, <b>amoxicilline</b> en monothérapie, <b>8 à 10 jours</b> (pas de bi-antibiothérapie).</li>
</ul>

<h3>4. Asthme</h3>
<ul>
<li><b>Maladie inflammatoire chronique des bronches</b> avec épisodes de <b>dyspnée expiratoire sifflante</b> (non inspiratoire, non « aiguë »). Certitude du diagnostic : <b>spirométrie</b>.</li>
<li><b>Examen de la crise :</b> râles sibilants, état général altéré si crise sévère (à confirmer).</li>
<li><b>Signes de gravité :</b> difficulté à parler, <b>silence auscultatoire</b>, polypnée avec FR &gt; 30/min, tachycardie. La douleur thoracique et la toux ne sont pas des signes de gravité (à confirmer pour « difficulté à tousser »).</li>
<li><b>Traitement de la crise :</b> <b>bêta-2 de courte durée inhalé</b> (voie idéale : inhalée) + <b>corticoïdes oraux ou injectables</b>. Une crise grave n'est pas prise en charge au centre périphérique : mise en condition puis <b>évacuation</b>.</li>
<li><b>Traitement de fond :</b> corticoïde inhalé associé à un bêta-2 de <b>longue</b> durée ; il faut aussi l'éducation et le contrôle des facteurs déclenchants (traiter la crise ne suffit pas).</li>
</ul>

<h3>5. Embolie pulmonaire et œdème aigu du poumon</h3>
<ul>
<li><b>Embolie pulmonaire (EP) :</b> urgence thérapeutique ; traitement en urgence par <b>anticoagulants</b>, sans attendre les examens de certitude ; mise en condition puis évacuation (pas de prise en charge au niveau primaire).</li>
<li><b>Signes :</b> douleur thoracique, toux, dyspnée, hémoptysie ; la <b>vomique</b> n'en fait pas partie (elle évoque l'abcès pulmonaire).</li>
<li><b>Facteurs de risque acquis :</b> grossesse, obésité (le déficit en protéines C et S est congénital).</li>
<li><b>Œdème aigu du poumon cardiaque :</b> <b>urgence vitale</b>, par augmentation de la pression hydrostatique.</li>
</ul>

<h3>6. Pleurésie et épanchement pleural</h3>
<ul>
<li><b>Syndrome d'épanchement liquidien :</b> vibrations vocales <b>abolies</b>, <b>matité</b>, murmure vésiculaire <b>aboli</b>.</li>
<li><b>Signes de gravité :</b> lutte respiratoire, tachycardie, extrémités froides (la toux et la douleur thoracique n'en sont pas).</li>
<li><b>Pleurésie purulente :</b> urgence thérapeutique (pneumocoque fréquent, à confirmer).</li>
<li><b>Ponction pleurale :</b> <b>acte médical</b> (médecin), non réalisable par l'infirmier ni par un agent de santé. <b>Incidents :</b> pneumothorax, malaise, hémorragie intrapleurale, œdème aigu du poumon ; l'hémoptysie n'en est pas un (à confirmer).</li>
</ul>

<h3>7. Tuberculose pulmonaire</h3>
<ul>
<li>Maladie <b>contagieuse</b> et <b>curable</b> (traitement de <b>6 mois</b>) ; ni saisonnière ni de diagnostic clinique ; la forme la plus fréquente est <b>pulmonaire</b> (non pleurale).</li>
<li><b>Signes :</b> toux productive évoluant depuis au moins <b>3 semaines</b> ; signes d'imprégnation tuberculeuse : amaigrissement, anorexie, sueurs nocturnes, fièvre vespérale (la toux est un signe respiratoire, non d'imprégnation).</li>
<li><b>Antituberculeux :</b> éthambutol, pyrazinamide, isoniazide, rifampicine (l'érythromycine est un macrolide, pas un antituberculeux).</li>
<li><b>Phase intensive :</b> <b>2 mois</b> (non 4). <b>Contrôle bactériologique des crachats</b> (nouveau cas) : fin du 2<sup>e</sup> mois, puis 5<sup>e</sup> et 6<sup>e</sup> mois.</li>
<li><b>Tuberculose multirésistante :</b> résistance à la rifampicine <b>et</b> à l'isoniazide.</li>
</ul>

<h3>8. Autres</h3>
<ul>
<li><b>Tabac :</b> premier facteur de risque du cancer bronchique primitif ; la substance responsable de la dépendance est la <b>nicotine</b> (non la caféine).</li>
</ul>

<h3>9. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>Substance de la dépendance tabagique : caféine</td><td>Nicotine</td></tr>
<tr><td>Polypnée = augmentation de la fréquence cardiaque</td><td>De la fréquence respiratoire</td></tr>
<tr><td>Bronchite aiguë : radio toujours anormale ; antibiotique systématique</td><td>Radio normale ; antibiotique rarement indiqué</td></tr>
<tr><td>Antitussifs systématiques devant une toux grasse</td><td>Déconseillés</td></tr>
<tr><td>Asthme = dyspnée inspiratoire / maladie aiguë</td><td>Expiratoire ; maladie chronique</td></tr>
<tr><td>Pneumopathie bactérienne : affection pleurale / virale / staphylocoque</td><td>Parenchyme, bactérie, pneumocoque</td></tr>
<tr><td>Pneumopathie : bi-antibiothérapie, début progressif, fébricule</td><td>Amoxicilline seule, début brutal, forte fièvre</td></tr>
<tr><td>Phase intensive de la TB : 4 mois</td><td>2 mois</td></tr>
<tr><td>TB multirésistante : rifampicine OU isoniazide</td><td>Rifampicine ET isoniazide</td></tr>
<tr><td>Forme la plus fréquente de TB : pleurale</td><td>Pulmonaire</td></tr>
<tr><td>Ponction pleurale par l'infirmier</td><td>Acte médical</td></tr>
<tr><td>OAP pas une urgence ; hémoptysie sans hospitalisation</td><td>Urgence vitale ; hospitalisation nécessaire</td></tr>
<tr><td>EP : attendre les examens avant de traiter</td><td>Anticoagulants en urgence</td></tr>
<tr><td>Vomique dans l'embolie pulmonaire</td><td>Signe d'abcès du poumon</td></tr>
</table>
` },

"ds": { html: `
<div class="retenir"><b>Fiche élaborée d'après les exercices « Démarche de soins scientifique » (QCD) et leurs corrections.</b> Les points marqués « à confirmer » sont ceux que les corrections signalent comme incertains. Si votre cours officiel indique d'autres formulations, c'est lui qui fait foi.</div>

<h3>1. Définition et étapes</h3>
<ul>
<li>La <b>démarche de soins</b> est une démarche <b>scientifique</b> dont le but est le <b>mieux-être du malade</b>. Elle est la méthode de travail qui permet d'appliquer le modèle conceptuel (ici celui de Virginia Henderson).</li>
<li><b>Cinq étapes :</b>
<ol>
<li><b>Recueil (collecte) des données</b> – 1<sup>re</sup> étape (et non la 3<sup>e</sup>) ;</li>
<li><b>Analyse et diagnostic</b> infirmier ;</li>
<li><b>Planification</b> des interventions ;</li>
<li><b>Exécution</b> des soins ;</li>
<li><b>Évaluation</b>.</li>
</ol></li>
</ul>

<h3>2. Collecte des données</h3>
<ul>
<li>Elle s'appuie sur des <b>faits et phénomènes observables</b> (pas sur des opinions ni des jugements de valeur du soignant).</li>
<li><b>Observation :</b> elle fait appel aux <b>organes des sens</b> et aux <b>connaissances</b> du soignant.</li>
<li><b>Sources :</b> connaissances et expériences du soignant, vécu du client, observation du client.</li>
<li><b>Interprétation :</b> examiner les faits observés et poser un jugement de valeur.</li>
</ul>
<table>
<tr><th>Type de donnée</th><th>Définition</th><th>Exemples (d'après les exercices)</th></tr>
<tr><td><b>Donnée d'indépendance</b></td><td>Besoin satisfait par la personne elle-même</td><td>« M. Yao prend sa douche deux fois par jour »</td></tr>
<tr><td><b>Donnée de dépendance</b></td><td>Information sur laquelle le soignant doit <b>agir</b> : problème actuel du client, anxiété, signe clinique</td><td>Œdème généralisé ; pâleur des conjonctives et des téguments ; anxiété (« elle craint de perdre de nouveau son enfant ») ; désir de sortir de l'hôpital pour s'occuper de ses enfants</td></tr>
</table>
<p>Les <b>problèmes potentiels</b> sont des dépendances potentielles (à confirmer). Les interventions portent sur les données de <b>dépendance</b>, non d'indépendance.</p>

<h3>3. Analyse et diagnostic infirmier</h3>
<ul>
<li><b>Comparaison</b> des données de dépendance et d'indépendance : elle permet de repérer les <b>besoins non satisfaits</b> (le diagnostic ne part pas des besoins satisfaits).</li>
<li><b>Formulation du diagnostic infirmier :</b> <b>problème de dépendance</b> (1<sup>re</sup> partie) <b>relié à</b> la <b>source de difficulté</b> (2<sup>e</sup> partie, la cause). Exemple : « Alimentation inadéquate <i>reliée à</i> un manque de connaissance du régime prescrit ».</li>
<li><b>Le problème de dépendance</b> décrit la <b>difficulté</b> (ex. œdème généralisé, altération de la peau). <b>La source de difficulté</b> en est la cause : manque de <b>force</b>, de <b>volonté</b> ou de <b>connaissance</b> (le manque de force n'est pas un problème de dépendance).</li>
<li>Le diagnostic infirmier ne décrit pas le processus de la maladie (c'est le rôle du diagnostic médical). Un diagnostic médical peut engendrer <b>plusieurs</b> diagnostics infirmiers.</li>
<li>« Respecter les horaires du traitement » n'est pas un diagnostic : c'est un objectif ou une intervention.</li>
</ul>
<table>
<tr><th>Diagnostic (exemple)</th><th>Besoin non satisfait de V. Henderson</th></tr>
<tr><td>Mutisme</td><td>Communiquer avec ses semblables</td></tr>
<tr><td>Incapacité de se reposer reliée à la douleur</td><td>Dormir et se reposer</td></tr>
<tr><td>Altération de la muqueuse buccale reliée à la déshydratation ; altération de la peau reliée à l'immobilité prolongée</td><td>Être propre, soigné et protéger ses téguments</td></tr>
<tr><td>Douleur aiguë reliée à un processus infectieux</td><td>Éviter les dangers (et non se mouvoir)</td></tr>
<tr><td>Alimentation inadéquate reliée à un manque de connaissance</td><td>Boire et manger (à confirmer)</td></tr>
<tr><td>Difficulté de se mouvoir reliée à une intolérance à l'effort</td><td>Se mouvoir et maintenir une bonne posture (à confirmer)</td></tr>
</table>

<h3>4. Planification</h3>
<ul>
<li><b>Deux composantes :</b> <b>objectifs</b> de soins et <b>interventions</b>. Elle s'appuie sur la <b>cause</b> du problème.</li>
<li><b>Objectif de soins :</b> comportement <b>observable</b> attendu du client, par exemple « Mme S. doit être capable de boire 1,5 litre d'eau en 24 heures ». L'<b>indice (critère) d'observation</b> permet de constater l'atteinte de l'objectif ; un <b>changement de comportement</b> observé est un critère d'atteinte (à confirmer pour la définition de l'indice).</li>
<li><b>Plan de soins :</b> rédigé par l'<b>infirmier</b> (non par le médecin), <b>individualisé</b> (non uniforme), il contient les objectifs et les interventions (on ne l'élabore pas avant). Il sert à individualiser les soins, communiquer avec l'équipe et les parents, former et perfectionner le personnel, et évaluer la qualité des soins.</li>
</ul>

<h3>5. Exécution et évaluation</h3>
<ul>
<li><b>Interventions (exécution) :</b> actions que l'IDE/SF doit poser <b>lui-même ou déléguer</b>.</li>
<li><b>Évaluation :</b> faite par le soignant ; elle consiste à observer la <b>réponse du patient aux soins</b> et à la comparer à l'objectif visé (pas à un jugement de valeur du patient).</li>
</ul>

<h3>6. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>La collecte des données est la 3<sup>e</sup> étape</td><td>La 1<sup>re</sup></td></tr>
<tr><td>Elle se base sur des opinions ou jugements de valeur</td><td>Sur des faits observables</td></tr>
<tr><td>Les interventions portent sur les données d'indépendance</td><td>Sur les données de dépendance</td></tr>
<tr><td>Les problèmes actuels du client : données d'indépendance</td><td>De dépendance</td></tr>
<tr><td>« Il prend sa douche deux fois par jour » : donnée de dépendance</td><td>Donnée d'indépendance</td></tr>
<tr><td>Le diagnostic part des besoins satisfaits</td><td>Des besoins non satisfaits</td></tr>
<tr><td>La 1<sup>re</sup> partie du diagnostic décrit la source de difficulté</td><td>Elle décrit le problème ; la 2<sup>e</sup> la source</td></tr>
<tr><td>Le diagnostic infirmier décrit le processus de la maladie</td><td>C'est le diagnostic médical</td></tr>
<tr><td>Le manque de force est un problème de dépendance</td><td>C'est une source de difficulté</td></tr>
<tr><td>Le plan de soins est écrit par le médecin / uniforme</td><td>Par l'infirmier ; individualisé</td></tr>
<tr><td>Le plan de soins ne sert pas à former ni à évaluer la qualité</td><td>Il sert aussi à cela</td></tr>
<tr><td>On élabore le plan de soins avant les objectifs</td><td>Il les contient</td></tr>
<tr><td>L'évaluation est un jugement de valeur du patient</td><td>Elle est faite par le soignant, par rapport à l'objectif</td></tr>
</table>
` },

"he": { html: `
<div class="retenir"><b>Fiche élaborée d'après les exercices « Hématologie » (QCD et QCM) et leurs corrections.</b> Les points marqués « à confirmer » sont ceux que les corrections signalent comme incertains (plusieurs énoncés sont ambigus). Si votre cours officiel indique d'autres valeurs, c'est lui qui fait foi.</div>

<h3>1. Le sang et ses cellules</h3>
<ul>
<li><b>Hématopoïèse :</b> production des cellules sanguines par la <b>moelle osseuse</b>. Le sang comprend le <b>plasma</b> (transport des nutriments vers les tissus et des déchets vers les organes épurateurs) et les cellules.</li>
</ul>
<table>
<tr><th>Cellule</th><th>Rôle et particularités</th></tr>
<tr><td><b>Hématies (érythrocytes)</b></td><td>Transport des gaz (<b>O<sub>2</sub> et CO<sub>2</sub></b> ; « oxygène » et « dioxygène » désignent la même chose) ; <b>sans noyau</b> à maturité ; riches en <b>fer</b> (hémoglobine) ; durée de vie raccourcie dans les anémies chroniques</td></tr>
<tr><td><b>Leucocytes</b></td><td>Défense de l'organisme (système immunitaire, destruction des agents infectieux). Les <b>polynucléaires</b> (neutrophiles, éosinophiles, basophiles) ne sont <b>pas</b> des mononucléaires ; <b>mononucléaires</b> : lymphocytes, monocytes</td></tr>
<tr><td><b>Lymphocyte T</b></td><td>Immunité <b>cellulaire</b></td></tr>
<tr><td><b>Lymphocyte B</b></td><td>Immunité <b>spécifique humorale</b></td></tr>
<tr><td><b>Monocyte</b></td><td>Immunité spécifique et non spécifique</td></tr>
<tr><td><b>Plaquettes (thrombocytes)</b></td><td>Hémostase ; produites par les <b>mégacaryocytes</b></td></tr>
</table>
<ul>
<li><b>Hyperleucocytose :</b> peut être due à une parasitose intestinale ou à une pneumopathie bactérienne.</li>
<li><b>Hémoglobine adulte :</b> deux chaînes α et deux chaînes β identiques deux à deux ; l'hémoglobine <b>F</b> protège le nourrisson (la phase intercritique de la drépanocytose débute vers 4 mois, à confirmer).</li>
<li><b>Hémogramme :</b> les indications comprennent le prurit prolongé inexpliqué (c'est une indication, non une contre-indication).</li>
</ul>

<h3>2. Les anémies</h3>
<ul>
<li><b>Paramètres qui caractérisent et classent une anémie :</b> hématocrite, taux d'<b>hémoglobine</b>, <b>VGM</b>, <b>CCMH</b>, <b>TCMH</b> ; pour diagnostiquer ou surveiller, on utilise le taux d'hémoglobine.</li>
<li><b>Seuils d'anémie :</b> femme enceinte : Hb &lt; <b>11 g/dl</b> (12 parmi les options de l'exercice) ; enfant de 18 mois : Hb &lt; 11-12 g/dl (12 dans l'exercice). <b>Microcytose</b> : VGM &lt; <b>80 fl</b>.</li>
<li><b>Anémie ferriprive :</b> hypochrome <b>microcytaire</b>, due à une carence en fer (ou à un trouble de la synthèse de l'hémoglobine), non à un déficit en vitamines.</li>
<li><b>Causes d'une anémie chronique :</b> spoliation sanguine minime répétée, hémolyse périphérique, insuffisance médullaire. Le <b>traitement dépend de la cause</b>.</li>
<li><b>Réaction à l'hypoxie :</b> augmentation du <b>débit cardiaque</b> et hypersécrétion d'<b>érythropoïétine</b>.</li>
<li><b>Signes :</b> asthénie, pâleur cutanéo-muqueuse (communs aux anémies sévères) ; signes cardiovasculaires (palpitations, dyspnée d'effort, douleurs thoraciques) ; signes neurosensoriels (céphalées, éblouissements, flou visuel).</li>
<li><b>Anisocytose</b> : anomalie de taille ; <b>poïkilocytose</b> : anomalie de forme des hématies.</li>
</ul>

<h3>3. La drépanocytose</h3>
<ul>
<li><b>Hémoglobinopathie héréditaire autosomique récessive</b>, <b>non contagieuse</b>, caractérisée par l'<b>hémoglobine S</b> et l'anémie.</li>
<li><b>Formes :</b> AS (trait drépanocytaire, hétérozygote, transmise sans maladie), SS (forme majeure : anémie <b>hémolytique chronique</b>, non auto-immune), SC.</li>
<li><b>Complications de la forme SS :</b> anémiques, <b>ischémiques</b> (crises vaso-occlusives), <b>infectieuses</b> ; la <b>lithiase biliaire</b> est une complication hémolytique. La forme SC est surtout marquée par des complications ischémiques.</li>
</ul>

<h3>4. Hémostase et coagulation</h3>
<ul>
<li><b>Hémostase primaire :</b> formation du <b>clou plaquettaire</b> ; phase plaquettaire : <b>adhésion, activation, agrégation</b> ; cellules concernées : mégacaryocytes/plaquettes. Exploration : <b>temps de saignement</b> (méthode de <b>Duke</b> : au lobule de l'oreille, au vaccinostyle ; normal ≤ <b>4 minutes</b>).</li>
<li><b>Hémostase</b> : arrêter les hémorragies en évitant la coagulation intravasculaire (à confirmer).</li>
<li><b>Coagulation :</b> <b>temps de Quick</b> = voie extrinsèque (exogène) ; <b>TP normal : 70 à 100 %</b> ; <b>TCA normal : 30 à 40 s</b> ; le temps de Howell explore la coagulation. <b>Bilan préopératoire :</b> fibrinogène, TCA, TP (l'hématurie n'est pas un examen d'hémostase).</li>
<li><b>Plaquettes :</b> en dessous de <b>50 000/mm³</b> = thrombopénie sévère, <b>risque hémorragique élevé</b> (le risque est d'autant plus élevé que la thrombopénie est profonde). La <b>thrombocytémie essentielle</b> est une <b>augmentation</b> des plaquettes ; une augmentation peut être réactionnelle ou primitive.</li>
</ul>

<h3>5. Groupes sanguins et transfusion</h3>
<ul>
<li><b>Groupe sanguin :</b> défini par la présence d'<b>antigènes à la surface des érythrocytes</b>. <b>AB</b> : antigènes A et B ; <b>A</b> : anticorps anti-B ; <b>O</b> : pas d'antigènes A/B mais anti-A et anti-B. <b>Technique de Beth-Vincent :</b> détermine l'<b>antigène</b> ; trois puits : anti-A, anti-B, anti-AB.</li>
<li><b>Exemple :</b> père B négatif et mère O positif : l'enfant peut être B ou O, Rhésus positif ou négatif.</li>
<li><b>Transfusion :</b> iso-groupe iso-rhésus ou compatible ; <b>compatibilité au lit du malade obligatoire</b> ; le patient est à jeun relatif sous surveillance. <b>Indications :</b> anémie, thrombopénie, déficit en facteur de coagulation (non la polyglobulie). <b>Risques :</b> infectieux et immunologiques. <b>Transfusion autologue :</b> prélèvement du sang du patient pour le lui transfuser plus tard. Le <b>plasma frais congelé</b> s'obtient après centrifugation du sang total et séparation des hématies.</li>
</ul>

<h3>6. Maladie hémolytique du nouveau-né (MHNN)</h3>
<ul>
<li>Les antigènes responsables sont ceux du système <b>Rhésus</b>. Le <b>test de Coombs indirect</b> est systématique et répété chez la femme enceinte Rhésus négatif.</li>
<li><b>Prévention :</b> immunoglobulines <b>anti-D</b> à la mère Rh négatif ayant accouché d'un enfant Rh positif, dans les <b>72 heures</b> suivant l'accouchement (100 µg selon l'énoncé ; la dose usuelle est de 300 µg).</li>
<li><b>Examens du nouveau-né :</b> test de <b>Coombs direct</b> et dosage répété de la <b>bilirubine</b>.</li>
</ul>

<h3>7. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>Hématies : noyau et membrane nucléaire</td><td>Pas de noyau à maturité</td></tr>
<tr><td>Globules rouges : transport de l'oxygène et du dioxygène</td><td>Oxygène et gaz carbonique</td></tr>
<tr><td>Drépanocytose contagieuse ; SS = anémie auto-immune</td><td>Non contagieuse ; anémie hémolytique chronique</td></tr>
<tr><td>Anémie hypochrome microcytaire par déficit en vitamines</td><td>Carence en fer</td></tr>
<tr><td>Thrombocytémie : diminution des plaquettes</td><td>Augmentation</td></tr>
<tr><td>Thrombopénie profonde : risque de saignement plus faible</td><td>Risque plus élevé</td></tr>
<tr><td>Lithiase biliaire : complication ischémique</td><td>Hémolytique</td></tr>
<tr><td>Beth-Vincent : détermine l'anticorps</td><td>L'antigène</td></tr>
<tr><td>Patient autorisé à manger et boire pendant une transfusion</td><td>À jeun relatif sous surveillance</td></tr>
<tr><td>Prurit prolongé : contre-indication de l'hémogramme</td><td>Indication</td></tr>
<tr><td>Douleurs thoraciques : signes neurosensoriels</td><td>Cardiovasculaires</td></tr>
<tr><td>Transfusion : indiquée dans la polyglobulie</td><td>Non</td></tr>
<tr><td>Quick explore la voie intrinsèque</td><td>Voie extrinsèque (exogène)</td></tr>
</table>
` },

"ts": { html: `
<div class="retenir"><b>Fiche élaborée d'après les exercices « Technique de soins infirmiers » (QCD et QCM) et leurs corrections.</b> Les points marqués « à confirmer » sont ceux que les corrections signalent comme incertains. Si votre cours officiel ou le protocole de votre structure indique une autre conduite, c'est lui qui fait foi.</div>

<h3>1. Règles générales d'une injection</h3>
<ul>
<li>Respecter l'asepsie : <b>ne pas toucher</b> les parties qui entrent en contact avec le produit ou le patient (aiguille, biseau, embase, embout de la seringue, joint du piston). Parmi les parties du dispositif, seule la <b>tige du piston</b> peut être touchée (à confirmer).</li>
<li><b>Seringues :</b> graduées <b>soit</b> en millilitres (ml), <b>soit</b> en unités internationales (UI) ; la seringue à <b>insuline</b> est graduée en UI.</li>
<li><b>Aiguilles :</b> biseau <b>long</b> pour l'injection <b>IM</b>, biseau <b>court</b> pour l'injection <b>IV</b>.</li>
<li><b>Solvants non aqueux :</b> contre-indiqués en voie intraveineuse.</li>
</ul>

<h3>2. Injection intramusculaire (IM)</h3>
<table>
<tr><th>Rubrique</th><th>À retenir</th></tr>
<tr><td><b>Principe</b></td><td>Introduire le médicament dans un <b>gros muscle</b> avec une aiguille de diamètre adapté ; le muscle est richement irrigué, donc diffusion rapide dans la circulation</td></tr>
<tr><td><b>Angle</b></td><td><b>90°</b> avec la zone d'impact du muscle</td></tr>
<tr><td><b>Volume</b></td><td><b>0,5 à 3 ml</b> pour une absorption optimale ; au-delà de <b>5 ml</b>, <b>diviser la dose</b> et injecter à <b>deux endroits différents</b></td></tr>
<tr><td><b>Sites</b></td><td>Deltoïde, grand fessier, vaste externe de la cuisse (droit antérieur) ; <b>pas</b> dans l'abdomen ni le mollet. Quatre sites usuels (à confirmer pour « cinq muscles »)</td></tr>
<tr><td><b>Muscle sain</b></td><td>Souple à la relaxation, ferme à la tension, palpation indolore, aucune masse dure à l'état de relaxation (les vergetures ne sont pas un critère) ; l'IM se pratique <b>uniquement dans un muscle sain</b></td></tr>
<tr><td><b>Contre-indication</b></td><td><b>Anticoagulants</b> ou troubles de l'hémostase : risque d'<b>hématome</b>. Chez un malade sous anticoagulant, l'infirmier surveille les temps de saignement et de coagulation, contrôle le taux de prothrombine, mais <b>ne fait pas d'injection IM</b></td></tr>
</table>

<h3>3. Injection sous-cutanée (SC)</h3>
<ul>
<li>Injection dans la couche de <b>graisse sous la peau</b> ; alternative possible à la voie IM en cas de contre-indication.</li>
<li><b>Angle de 45°</b> (ou 90° avec un pli cutané selon l'aiguille).</li>
<li><b>Seringues pré-remplies :</b> on ne les <b>purge pas</b> avant l'injection ; la bulle d'air chasse l'intégralité du produit et favorise sa dispersion dans le tissu.</li>
</ul>

<h3>4. La perfusion</h3>
<ul>
<li>Injection <b>lente et continue</b> d'un liquide dans la circulation sanguine.</li>
<li><b>Trois impératifs :</b> un <b>récepteur</b> (voie d'abord, différentes voies), un <b>vecteur</b> (matériel de perfusion), un <b>liquide de perfusion stérile</b>.</li>
</ul>

<h3>5. Surveillance des constantes</h3>
<h4>Tension artérielle (TA)</h4>
<ul>
<li>Pression sous laquelle le sang circule dans les vaisseaux.</li>
<li><b>Indications :</b> identifier les signes d'aggravation subite, apprécier les effets d'un traitement hypo- ou hypertenseur, comparer les valeurs debout/couché, surveiller le patient (à confirmer pour le choix des propositions).</li>
</ul>
<h4>Pouls</h4>
<ul>
<li><b>Sites :</b> radial, brachial, temporal, carotidien (pas de pouls « ventral »).</li>
<li><b>Pouls radial :</b> pris au poignet, à la base du pouce.</li>
</ul>
<h4>Pression veineuse</h4>
<p>Acte qui consiste à mesurer les <b>pressions intra-cavitaires</b> (pression veineuse centrale, à confirmer).</p>

<h3>6. Hémoptysie</h3>
<ul>
<li>Hémorragie extériorisée d'origine <b>respiratoire</b> (non digestive ni dentaire) ; sang rouge, aéré, sans caillot ni débris alimentaires (l'exercice la rattache à tort aux vomissements).</li>
</ul>

<h3>7. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>Anticoagulant = indication de l'IM</td><td>Contre-indication (hématome)</td></tr>
<tr><td>Seringue pré-remplie SC : à purger</td><td>Ne pas purger</td></tr>
<tr><td>Solvants non aqueux indiqués en IV</td><td>Contre-indiqués</td></tr>
<tr><td>Seringues graduées en ml et en UI à la fois</td><td>Soit ml, soit UI</td></tr>
<tr><td>IM dans l'abdomen ou le mollet</td><td>Non</td></tr>
<tr><td>Plus de 5 ml : injecter en une seule fois</td><td>Diviser et changer de site</td></tr>
<tr><td>Biseau court en IM, long en IV</td><td>Long en IM, court en IV</td></tr>
<tr><td>Pouls « ventral »</td><td>Radial, brachial, temporal, carotidien</td></tr>
<tr><td>Hémoptysie d'origine digestive</td><td>Respiratoire</td></tr>
</table>
` },

"se": { html: `
<div class="retenir"><b>Fiche élaborée d'après les exercices « Soins aux enfants » (QCD et QCM) et leurs corrections.</b> Les points marqués « à confirmer » sont ceux que les corrections signalent comme incertains (dates et rythmes notamment). Si votre cours officiel ou le protocole de votre structure indique d'autres données, c'est lui qui fait foi.</div>

<h3>1. Toilette et bain du nouveau-né</h3>
<ul>
<li><b>Toilette :</b> technique qui consiste à exécuter l'ensemble des soins de propreté du corps. Elle est indiquée chez le nouveau-né dont le <b>cordon n'est pas tombé</b> et la plaie ombilicale non cicatrisée (toilette plutôt que bain).</li>
<li><b>Matériel courant :</b> cupule, poubelle ou haricot. <b>Matériel du bain :</b> deux serviettes propres, une poubelle, vêtements et couches propres, une cupule.</li>
<li><b>Précautions (trois) :</b> éviter les <b>courants d'air</b> (ne pas ouvrir portes et fenêtres), assurer la <b>sécurité</b> du nouveau-né, respecter l'<b>hygiène et l'asepsie</b>. La mère n'est pas éloignée de l'enfant.</li>
<li><b>Technique :</b> insister sur les <b>plis</b> ; procéder des zones les plus propres vers les plus sales ; la <b>transmission</b> après le soin est obligatoire ; soins des orifices avant l'habillement (à confirmer).</li>
<li><b>Bain :</b> immersion du corps pour maintenir la peau propre et prévenir les lésions cutanées ; moment privilégié pour jouer, dialoguer et rire avec l'enfant. Type de bain cité : <b>bain de propreté</b> ; le <b>bain thérapeutique</b> se fait en cas de fièvre ; le bain tiède n'est pas systématique pour une fièvre de 38 °C.</li>
</ul>

<h3>2. Soins des orifices</h3>
<ul>
<li><b>But :</b> éliminer une partie des sécrétions pour rétablir le fonctionnement normal des orifices.</li>
<li><b>Indications :</b> malnutrition sévère, maladies infectieuses, sécrétions abondantes, <b>absence de réflexes de succion et de déglutition</b>.</li>
<li><b>Œil chassieux :</b> nettoyage de l'<b>intérieur</b> (côté du nez) <b>vers l'extérieur</b>.</li>
</ul>

<h3>3. Soins ombilicaux</h3>
<table>
<tr><th>Rubrique</th><th>À retenir</th></tr>
<tr><td><b>Types</b></td><td>Deux : <b>cordon frais</b> et <b>cordon sec</b></td></tr>
<tr><td><b>Cordon frais</b></td><td>Pansement les <b>3 premiers jours</b> de vie (à confirmer) ; nettoyage de l'<b>extrémité du moignon vers la base</b> (non de l'intérieur vers l'extérieur)</td></tr>
<tr><td><b>Cordon sec</b></td><td>Pansement à partir du <b>4<sup>e</sup> jour</b> (à confirmer) ; nettoyage du moignon de <b>l'extrémité vers la base</b></td></tr>
<tr><td><b>Chlorhexidine</b></td><td>À appliquer <b>immédiatement après la section du cordon</b>, à la pointe, sur le moignon et à la base du cordon</td></tr>
<tr><td><b>Chute du cordon</b></td><td>Entre le <b>8<sup>e</sup> et le 15<sup>e</sup> jour</b></td></tr>
<tr><td><b>Phases du soin</b></td><td>Préparation, exécution, rangement (à confirmer)</td></tr>
</table>

<h3>4. Photothérapie, incubateur, bouillote, vessie de glace</h3>
<ul>
<li><b>Photothérapie</b> (ictère à bilirubine libre) : traitement de première intention, avec exsanguino-transfusion en cas d'échec (à confirmer). Avant : propreté de la couveuse, <b>protection oculaire</b>, réglage de la lumière ; l'enfant garde une <b>couche</b> (pas totalement nu). Pendant : <b>température toutes les 2 à 3 heures</b>, soins préventifs des yeux au sérum physiologique suivis d'un collyre antiseptique. Effets à court terme : ballonnement abdominal, selles liquides.</li>
<li><b>Incubateur :</b> chauffage, humidification, oxygénation, isolation (à confirmer).</li>
<li><b>Bouillote :</b> pour réchauffer le nouveau-né <b>hypotrophe ou de petit poids</b> en l'absence d'incubateur ou de lampe chauffante.</li>
<li><b>Vessie de glace :</b> pour une fièvre ≥ <b>39 °C</b> ; ne jamais la laisser plus de <b>30 minutes</b>.</li>
</ul>

<h3>5. Alimentation : gavage et alimentation à la tulipe</h3>
<ul>
<li><b>Indications du gavage :</b> détresse respiratoire, fente labio-palatine.</li>
<li><b>Avant l'alimentation à la tulipe</b> (sonde en place) : <b>vérifier et mesurer le résidu gastrique</b>. Un résidu supérieur au tiers de la ration traduit une <b>digestion lente</b> (et non une bonne digestion) ; on peut réduire la ration de 2 à 5 cc.</li>
<li><b>Alimentation continue :</b> remplir la seringue <b>selon la ration par repas</b> (non à moitié), la placer dans le pousse-seringue relié à la sonde, régler chronomètre et débit.</li>
<li><b>Après le gavage :</b> surveiller les réactions du nouveau-né et l'abdomen.</li>
</ul>

<h3>6. Croissance et surveillance</h3>
<ul>
<li><b>Indicateurs de croissance :</b> permettent de suivre le développement somatique de la naissance à l'adolescence. <b>Éléments quantitatifs :</b> poids, taille, périmètre crânien (PC), périmètre thoracique, périmètre brachial. La surveillance de la croissance n'est pas le seul élément de la pédiatrie préventive.</li>
<li><b>Poids :</b> la pesée mesure la croissance pondérale. Perte physiologique à la naissance : environ <b>10 %</b> (1/10) du poids, récupérée vers le <b>10<sup>e</sup>-15<sup>e</sup> jour</b> (causes : élimination du méconium, des urines, perte d'eau par la peau). <b>Gain de poids de 0 à 3 mois :</b> <b>25 à 30 g/jour</b>. À <b>12 mois</b> : entre <b>9 et 12 kg</b>.</li>
<li><b>Rythme des pesées :</b> hebdomadaire de 0 à 3 mois ; trimestriel de 13 à 24 mois (à confirmer).</li>
<li><b>Taille :</b> dépend surtout de l'<b>hérédité</b> (non de l'alimentation). <b>Périmètre crânien :</b> apprécie le volume du cerveau jusqu'à <b>3 ans</b>.</li>
<li><b>Carnet de santé mère-enfant :</b> instrument de liaison entre le <b>père, la mère et le professionnel de santé</b> ; dossier médical de la mère pendant la grossesse et de l'enfant dès la naissance. Il comprend quatre parties (identité et conditions de vie, suivi de la grossesse, accouchement, suivi de l'enfant, à confirmer).</li>
</ul>

<h3>7. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>Inutile d'insister sur les plis</td><td>Il faut insister sur les plis</td></tr>
<tr><td>Ouvrir portes et fenêtres pendant la toilette</td><td>Éviter les courants d'air</td></tr>
<tr><td>Transmission non nécessaire après le soin</td><td>Obligatoire</td></tr>
<tr><td>Œil chassieux : du coin externe vers l'interne</td><td>De l'interne vers l'externe</td></tr>
<tr><td>Cordon frais : nettoyage de l'intérieur vers l'extérieur</td><td>De l'extrémité vers la base</td></tr>
<tr><td>Bain tiède systématique pour 38 °C</td><td>Non systématique</td></tr>
<tr><td>La taille dépend surtout de l'alimentation</td><td>De l'hérédité</td></tr>
<tr><td>Résidu gastrique élevé : l'enfant digère bien</td><td>Digestion lente</td></tr>
<tr><td>Éloigner la mère pendant la toilette</td><td>Non</td></tr>
<tr><td>Enfant tout nu en photothérapie</td><td>Il garde une couche</td></tr>
</table>
` },

"bc": { html: `
<div class="retenir"><b>Fiche élaborée d'après les exercices « Biochimie » (QCD et QCM) et leurs corrections.</b> Les points marqués « à confirmer » sont ceux que les corrections signalent comme incertains. Si votre cours officiel indique d'autres valeurs usuelles, c'est lui qui fait foi.</div>

<h3>1. Notions générales</h3>
<ul>
<li><b>Cellule :</b> unité fonctionnelle du vivant. <b>Anabolisme :</b> formation des biomolécules ; catabolisme : leur dégradation.</li>
<li><b>Examens de laboratoire :</b> il existe des examens <b>urgents</b> et <b>programmés</b> ; la <b>confrontation clinicien-malade</b> (examen clinique) précède la demande d'examens ; la qualité du prélèvement conditionne la qualité du résultat.</li>
<li><b>Prélèvement :</b> le <b>sérum</b> s'obtient sur tube <b>sans additif/anticoagulant</b> (le plasma s'obtient avec anticoagulant) ; le sérum est le plasma débarrassé de son <b>fibrinogène</b>.</li>
<li><b>Eau corporelle :</b> environ <b>60 %</b> du poids (58,8 kg pour un sujet de 98 kg). <b>Volémie :</b> volume sanguin total, environ 5 à 6 L. <b>Adiposité chez la femme :</b> 15 à 30 %.</li>
<li><b>IMC</b> = poids (kg) / taille² (m²). Exemple : 97 kg et 1,80 m → 29,9 kg/m², <b>surpoids</b>. L'IMC est inadapté aux personnes géantes ou naines.</li>
<li><b>Macronutriments</b> (glucides, lipides, protides) ≠ <b>macroéléments</b> (minéraux : Ca, Mg, Na, K, P, Cl). Les <b>anions</b> portent une charge négative.</li>
<li><b>Carences :</b> fer → anémie « martiale » (l'anémie se définit par la baisse du taux d'hémoglobine) ; <b>iode</b> → goitre (non le cuivre). Le <b>trait drépanocytaire</b> est un avantage contre le paludisme.</li>
</ul>

<h3>2. Glucides et diabète</h3>
<ul>
<li><b>Saccharose :</b> disaccharide glucose + fructose. <b>Lactose :</b> glucose + galactose. Le <b>fructose</b> a un pouvoir sucrant supérieur à celui du glucose.</li>
<li><b>Glycémie normale à jeun :</b> <b>0,60 à 1,10 g/L</b>. <b>Diabète :</b> glycémie à jeun ≥ <b>1,26 g/L</b> (non 1,10).</li>
<li><b>Triade diabétique :</b> polyurie, polydipsie, polyphagie (faim excessive ; ne pas confondre avec la pollakiurie, mictions fréquentes). <b>Potomanie :</b> besoin irrépressible de boire constamment.</li>
<li><b>HGPO :</b> hyperglycémie provoquée par voie orale ; c'est une épreuve d'exploration fonctionnelle.</li>
</ul>

<h3>3. Lipides</h3>
<ul>
<li><b>HDL :</b> « bon cholestérol ». Les <b>VLDL</b> transportent surtout des triglycérides.</li>
</ul>

<h3>4. Protéines, urée, acide urique</h3>
<ul>
<li><b>Électrophorèse des protéines :</b> profil à <b>5 pics</b> (albumine, α1, α2, β, γ).</li>
<li><b>Urée sanguine normale :</b> 0,15 à 0,45 g/L ; son dosage se complète par celui de la <b>créatinine</b> (fonction rénale).</li>
<li><b>Acide urique :</b> demandé en rhumatologie (douleur articulaire, goutte) et en néphrologie ; il sert aussi au suivi de la <b>femme enceinte hypertendue</b>.</li>
</ul>

<h3>5. Équilibre hydro-électrolytique et perfusions</h3>
<ul>
<li><b>Ionogramme plasmatique :</b> explore l'équilibre <b>hydro-électrolytique</b> (non acido-basique). <b>Ionogramme réduit :</b> Na<sup>+</sup>, K<sup>+</sup>, HCO<sub>3</sub><sup>−</sup>, Cl<sup>−</sup>. <b>Ionogramme urinaire :</b> habituellement Na<sup>+</sup> et K<sup>+</sup>.</li>
<li><b>Hypernatrémie :</b> excès de sodium plasmatique. <b>Hyperkaliémie :</b> excès de <b>potassium</b>.</li>
<li><b>Perte par la sueur :</b> un litre de sueur correspond à environ 1,5 % du poids corporel (à confirmer).</li>
<li><b>Solutés de perfusion :</b> rôle de <b>réhydratation et d'apport</b> (non de déshydratation).
<ul>
<li><b>Tonicité :</b> plasma ≈ <b>290 mOsm/L</b> ; soluté <b>isotonique</b> = osmolalité égale à celle du plasma ; <b>hypertonique</b> = supérieure (400 mOsm/L, par exemple) ; hypotonique = inférieure.</li>
<li><b>Cristalloïdes :</b> petites molécules. <b>Colloïdes :</b> grosses molécules qui restent dans les vaisseaux et attirent l'eau des liquides interstitiels.</li>
<li><b>Calcul de la quantité de glucose :</b> volume (mL) × concentration (%) / 100. 250 mL à 10 % = <b>25 g</b> ; 250 mL à 30 % = <b>75 g</b>.</li>
</ul></li>
</ul>

<h3>6. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>VLDL = bon cholestérol ; HDL = mauvais</td><td>HDL = bon cholestérol</td></tr>
<tr><td>Hyperkaliémie = excès de sodium</td><td>Excès de potassium (sodium : hypernatrémie)</td></tr>
<tr><td>Carence en cuivre : goitre</td><td>Carence en iode</td></tr>
<tr><td>Diabète : glycémie ≥ 1,10 g/L</td><td>≥ 1,26 g/L</td></tr>
<tr><td>Polyphagie = augmentation du nombre de mictions</td><td>Faim excessive (pollakiurie = mictions)</td></tr>
<tr><td>Ionogramme : équilibre acido-basique</td><td>Équilibre hydro-électrolytique</td></tr>
<tr><td>Soluté hypertonique : concentration inférieure au plasma</td><td>Supérieure</td></tr>
<tr><td>Soluté isotonique : osmolalité inférieure</td><td>Égale à celle du plasma</td></tr>
<tr><td>250 mL à 10 % = 12,5 g</td><td>25 g</td></tr>
<tr><td>Cristalloïdes : grosses particules</td><td>Petites ; les colloïdes sont grosses</td></tr>
<tr><td>Sérum sur tube avec anticoagulant</td><td>Sans anticoagulant</td></tr>
<tr><td>Biomolécules formées par catabolisme</td><td>Anabolisme</td></tr>
<tr><td>Tous les examens sont urgents</td><td>Urgents et programmés</td></tr>
<tr><td>Glucides = macroéléments</td><td>Macronutriments</td></tr>
</table>
` },

"bv": { html: `
<div class="retenir"><b>Fiche élaborée d'après les exercices « Bactériologie-virologie » (QCD et QCM) et leurs corrections.</b> Les points marqués « à confirmer » sont ceux que les corrections signalent comme incertains. Si votre cours officiel indique d'autres conduites de prélèvement, c'est lui qui fait foi.</div>

<h3>1. La bactérie</h3>
<ul>
<li><b>Définition :</b> être vivant <b>unicellulaire, microscopique</b> (invisible à l'œil nu), procaryote, du règne des protistes. <b>Structure :</b> paroi, membrane cytoplasmique, génome (la capside et le peplos sont des éléments viraux). Les vers intestinaux sont des <b>helminthes</b>, non des bactéries.</li>
<li><b>Multiplication :</b> par <b>division binaire</b> (scissiparité). Calcul : N × 2<sup>n</sup> ; 20 bactéries après 4 divisions = 20 × 2<sup>4</sup> = <b>320</b> ; 15 bactéries se divisant toutes les 30 min pendant 4 h = 8 divisions = 15 × 2<sup>8</sup> = <b>3 840</b>.</li>
<li><b>Sporulation :</b> permet à la bactérie de résister aux agressions.</li>
<li><b>Gram :</b> les Gram <b>positif</b> sont colorés en <b>violet</b>, les Gram <b>négatif</b> en <b>rose/rouge</b>. Les <b>entérobactéries</b> sont des <b>bacilles</b> (non des cocci) du tube digestif.</li>
<li><b>Écologie :</b> les <b>saprophytes</b> vivent dans l'air, le sol et l'eau ; les <b>commensales</b> se retrouvent sur les mains ou les blouses ; les <b>pathogènes opportunistes</b> sont des saprophytes ou commensales ; les bactéries toujours pathogènes sont des <b>pathogènes stricts</b>. La <b>virulence</b> peut se tester par inoculation à la souris.</li>
<li><b>Défense constitutive :</b> peau, muqueuses et cellules de l'immunité innée (et non des cellules tumorales).</li>
<li><b>Infections nosocomiales :</b> la prévention exige stérilisation, asepsie, hygiène des mains (le matériel propre ne suffit pas). Bacille Gram négatif non entérobactérie fréquemment nosocomial : <b>Pseudomonas aeruginosa</b>.</li>
</ul>

<h3>2. Antibiotiques</h3>
<ul>
<li><b>Spectre d'action :</b> ensemble des espèces bactériennes sur lesquelles l'antibiotique est actif (les <b>phénicolés</b> ont un spectre large : Gram positif et négatif).</li>
<li><b>Bêta-lactamines :</b> bactéricides, à large spectre, ciblant la <b>paroi</b> (synthèse du peptidoglycane), non la membrane cytoplasmique.</li>
<li><b>Antibiogramme :</b> permet de choisir l'<b>antibiotique actif</b> (il n'identifie pas la bactérie ni son Gram).</li>
<li><b>Associations :</b> <b>synergie</b> avec bêta-lactamine + aminoside (amoxicilline + gentamicine) ; <b>antagonisme</b> avec un bactéricide + un bactériostatique.</li>
</ul>

<h3>3. Virus</h3>
<ul>
<li><b>Multiplication :</b> par <b>réplication</b> (non scissiparité).</li>
<li><b>Arbovirus :</b> virus transmis à l'homme par un <b>vecteur arthropode</b> (moustiques). Moyen de lutte le plus efficace : la <b>lutte antivectorielle</b>.</li>
<li><b>Fièvre jaune :</b> arbovirose d'Afrique et d'Amérique du Sud, transmise par des moustiques du genre <b>Aedes</b> (à confirmer pour l'espèce). <b>Dengue :</b> moustiques du genre Aedes. Les puces transmettent plutôt la peste.</li>
<li><b>Hépatite B :</b> due au virus de l'hépatite B (VHB), non au streptocoque.</li>
</ul>

<h3>4. Germes à connaître</h3>
<table>
<tr><th>Maladie</th><th>Germe</th></tr>
<tr><td>Méningite purulente</td><td><i>Neisseria meningitidis</i> (méningocoque)</td></tr>
<tr><td>Tuberculose pulmonaire</td><td><i>Mycobacterium tuberculosis</i> (bacille de Koch)</td></tr>
<tr><td>Dysenterie bacillaire</td><td><i>Shigella dysenteriae</i> (entérobactérie)</td></tr>
<tr><td>Fièvre typhoïde</td><td><i>Salmonella typhi</i> (entérobactérie)</td></tr>
<tr><td>Gonococcie</td><td><i>Neisseria gonorrhoeae</i></td></tr>
</table>

<h3>5. Examens et prélèvements</h3>
<table>
<tr><th>Examen</th><th>Produit et conditions</th></tr>
<tr><td><b>Coproculture</b></td><td><b>Selles</b> : recherche de bactéries entéropathogènes (dysenterie bacillaire) ; l'examen parasitologique des selles est le KOP</td></tr>
<tr><td><b>Hémoculture</b></td><td><b>Sang</b> prélevé au <b>pic de la température</b> (avant tout antibiotique) ; c'est la culture du sang</td></tr>
<tr><td><b>ECBU</b></td><td>Examen cytobactériologique des <b>urines</b> (urines de 4 heures de rétention, à confirmer) ; on <b>rejette le premier jet</b> pour éviter les souillures par la flore urétrale ; chez l'enfant, la poche urinaire reste environ 30 minutes (à confirmer)</td></tr>
<tr><td><b>Recherche de BK</b></td><td><b>Crachats matinaux</b> obtenus lors d'un effort de toux, ou tubage gastrique du matin (non le sang, non la salive)</td></tr>
<tr><td><b>Prélèvement vaginal (gonocoque)</b></td><td>Écouvillon propre selon l'énoncé ; habituellement, on prélève à l'endocol (à confirmer avec votre cours)</td></tr>
</table>
<ul>
<li><b>Qualité du prélèvement :</b> conditions de stérilité respectées (le matériel doit toujours être stérile), étiquetage conforme au bulletin d'analyse, dépôt rapide au laboratoire. La qualité du résultat dépend de la qualité du prélèvement.</li>
</ul>

<h3>6. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>Les bactéries se voient à l'œil nu</td><td>Elles sont microscopiques</td></tr>
<tr><td>Gram + : rose ou rouge</td><td>Gram + : violet</td></tr>
<tr><td>Entérobactéries : cocci</td><td>Bacilles</td></tr>
<tr><td>Vers intestinaux : bactéries</td><td>Helminthes</td></tr>
<tr><td>Bêta-lactamines : membrane cytoplasmique</td><td>Paroi</td></tr>
<tr><td>Bactéries toujours pathogènes : pathogènes occasionnels</td><td>Pathogènes stricts</td></tr>
<tr><td>Hépatite B causée par un streptocoque</td><td>Virus VHB</td></tr>
<tr><td>Fièvre jaune : Asie et Océanie</td><td>Afrique et Amérique du Sud</td></tr>
<tr><td>Hémoculture = recherche de parasites dans les selles</td><td>Culture du sang ; KOP pour les selles</td></tr>
<tr><td>ECBU = sécrétions urétrales</td><td>Examen cytobactériologique des urines</td></tr>
<tr><td>Antibiogramme identifie la bactérie</td><td>Il choisit l'antibiotique</td></tr>
<tr><td>Matériel propre non stérile en urgence</td><td>Matériel toujours stérile</td></tr>
<tr><td>Virus : scissiparité</td><td>Réplication</td></tr>
</table>
` },

"pv": { html: `
<div class="retenir"><b>Fiche élaborée d'après les exercices « PEV » (QCD et QCM) et leurs corrections.</b> Les points marqués « à confirmer » sont ceux que les corrections signalent comme incertains (doses, intervalles de rattrapage…). Si le calendrier vaccinal ou le guide officiel du PEV en vigueur indique autre chose, ce sont eux qui font foi.</div>

<h3>1. Généralités</h3>
<ul>
<li><b>Vaccination :</b> acte d'administration à un organisme humain pour induire une <b>immunité spécifique</b>. Le vaccin utilise les <b>défenses de l'organisme</b> ; le sérum protège moins longtemps (inconvénient : effet moins durable que le vaccin).</li>
<li><b>PEV :</b> créé en 1974 au niveau mondial, <b>1978</b> en Côte d'Ivoire. <b>Cibles de routine :</b> enfants de <b>0 à 11 mois</b>, <b>femmes en âge de reproduction</b>, <b>filles de 9 ans</b> (HPV). <b>Cibles de campagnes :</b> enfants de 0 à 59 mois (VPO), 9 mois à 14 ans (RR…).</li>
<li><b>Maladies cibles :</b> tuberculose, poliomyélite, diphtérie, tétanos (dont néonatal), coqueluche, hépatite B, Hib, rougeole, rubéole, fièvre jaune, méningite A, pneumocoque, rotavirus, HPV. La fièvre typhoïde et l'hépatite A n'en font pas partie.</li>
<li><b>Population cible vaccinale :</b> le groupe visé par la vaccination (non la proportion qui en bénéficie).</li>
</ul>

<h3>2. Calendrier du PEV (0 à 11 mois)</h3>
<table>
<tr><th>Âge</th><th>Vaccins</th></tr>
<tr><td><b>Naissance</b></td><td>BCG, VPO 0, hépatite B (dose de naissance)</td></tr>
<tr><td><b>6 semaines</b></td><td>Penta 1, VPO 1, PCV13-1, Rotarix 1</td></tr>
<tr><td><b>10 semaines</b></td><td>Penta 2, VPO 2, PCV13-2, Rotarix 2</td></tr>
<tr><td><b>14 semaines</b></td><td>Penta 3, VPO 3, PCV13-3, VPI</td></tr>
<tr><td><b>9 mois</b></td><td>RR, VAA (fièvre jaune), MenA (méningite)</td></tr>
</table>
<p>L'ordre de progression est : naissance, 6, 10, 14 semaines, puis 9 mois. Un enfant de 2 mois correctement vacciné a reçu <b>11 antigènes</b> (3 à la naissance, 8 à 6 semaines, le Penta comptant pour 5). Un enfant de 8 mois sans RR ni VAA est <b>correctement vacciné</b> (ces vaccins se donnent à 9 mois) ; un enfant « complètement vacciné » est celui qui a reçu toutes les doses du programme.</p>

<h3>3. Les vaccins en un coup d'œil</h3>
<table>
<tr><th>Vaccin</th><th>Nature</th><th>Voie / site</th><th>Doses</th></tr>
<tr><td><b>BCG</b></td><td>Bactérien, <b>vivant atténué</b></td><td><b>Intradermique</b>, face externe du haut du bras gauche / épaule gauche</td><td>0,05 ml, une dose</td></tr>
<tr><td><b>VPO</b></td><td>Viral <b>vivant atténué</b></td><td><b>Orale</b></td><td><b>4 doses</b> (naissance, 6, 10, 14 sem)</td></tr>
<tr><td><b>VPI</b></td><td>Viral <b>inactivé</b></td><td><b>Injection IM</b> (à 14 semaines ; sous-cutané selon certaines sources, à confirmer)</td><td><b>1 dose</b> ; ne pas utiliser si le flacon a été congelé</td></tr>
<tr><td><b>Penta</b> (DTC-HépB-Hib : diphtérie, tétanos, coqueluche, hépatite B, Hib)</td><td>Inactivé / anatoxines (association <b>combinée</b>, un seul flacon)</td><td><b>IM</b>, mi-hauteur de la face externe de la cuisse</td><td><b>3 doses</b> (6, 10, 14 sem)</td></tr>
<tr><td><b>Hépatite B</b></td><td>—</td><td>À la <b>naissance</b></td><td>4 doses au total (naissance + 3 Penta)</td></tr>
<tr><td><b>PCV13</b></td><td>Pneumocoque</td><td>Injectable, <b>+2 à +8 °C</b></td><td><b>3 doses</b></td></tr>
<tr><td><b>Rotarix</b></td><td>Viral <b>vivant atténué</b></td><td><b>Orale</b></td><td><b>2 doses</b>, sans rappel (2 ml selon l'énoncé ; dose usuelle 1,5 ml, à confirmer)</td></tr>
<tr><td><b>RR</b> (rougeole-rubéole)</td><td>Viral vivant atténué</td><td><b>Sous-cutané</b>, 9 mois</td><td>1 dose</td></tr>
<tr><td><b>VAA</b> (fièvre jaune)</td><td>Viral vivant</td><td><b>Sous-cutané</b>, 9 mois</td><td><b>Dose unique à vie</b></td></tr>
<tr><td><b>MenA</b></td><td>Antiméningococcique</td><td><b>Intramusculaire</b>, 9 mois</td><td>1 dose</td></tr>
<tr><td><b>HPV</b></td><td>Liquide (non poudre)</td><td>Filles de 9 ans</td><td>—</td></tr>
<tr><td><b>Td</b></td><td>Anatoxine (ne pas congeler)</td><td><b>IM</b></td><td>Femmes en âge de reproduction et femmes enceintes</td></tr>
</table>
<ul>
<li><b>Classification :</b> <b>viraux</b> : RR, VAA, VPI (et VPO, Rotarix) ; <b>bactérien</b> : BCG ; <b>anatoxines</b> : Td, Penta ; <b>inactivés</b> : VPI, Penta ; <b>vivants atténués</b> : VPO, BCG, RR, VAA, Rotarix. <b>Voie orale :</b> VPO et Rotarix.</li>
<li><b>Doses :</b> 0,5 ml pour les vaccins du PEV, sauf le <b>BCG</b> (0,05 ml) et le <b>VPO</b> (gouttes) (à confirmer). Un enfant correctement vacciné reçoit 3 doses de diphtérie et de coqueluche (Penta).</li>
</ul>

<h3>4. Td et protection de la mère et du nouveau-né</h3>
<table>
<tr><th>Dose</th><th>Moment</th></tr>
<tr><td>Td1</td><td>Au premier contact (1<sup>re</sup> CPN)</td></tr>
<tr><td>Td2</td><td>4 semaines après Td1</td></tr>
<tr><td>Td3</td><td>6 mois après Td2</td></tr>
<tr><td>Td4</td><td>1 an après Td3</td></tr>
<tr><td>Td5</td><td>1 an après Td4</td></tr>
</table>
<ul>
<li><b>Deux doses de Td</b> protègent la femme enceinte ; la 2<sup>e</sup> doit être donnée au moins <b>2 semaines</b> avant l'accouchement. Le Td protège aussi le <b>nouveau-né du tétanos néonatal</b> (et pas seulement la mère). La 3<sup>e</sup> dose appartient à la série primaire (ce n'est pas un rappel).</li>
</ul>

<h3>5. Contre-indications, MAPI et cas particuliers</h3>
<ul>
<li><b>Vraie contre-indication :</b> maladie grave nécessitant une <b>hospitalisation</b>. Fausses contre-indications : altération de l'état général modérée, malnutrition, prématurité.</li>
<li><b>Rotarix :</b> contre-indiqué en cas d'antécédent d'<b>invagination intestinale</b>, malformation intestinale, immunodéficience sévère ; la perte d'appétit, la diarrhée ou l'irritabilité sont des effets indésirables.</li>
<li><b>Immunodéficience :</b> le <b>VPO</b> (vivant) est contre-indiqué : on utilise le <b>VPI</b>. Nourrisson infecté par le VIH : RR à 6 mois puis à 9 mois ; le VAA est contre-indiqué en cas de SIDA (à confirmer).</li>
<li><b>MAPI :</b> manifestation indésirable <b>post-immunisation</b> (après vaccination). Ses causes sont multiples (propriétés du vaccin, erreur de préparation ou d'administration, anxiété liée à la douleur…).</li>
<li><b>Intervalles :</b> l'intervalle <b>minimum</b> entre deux doses existe (<b>4 semaines</b>) ; un intervalle plus long est acceptable. En cas d'abandon, <b>on reprend là où on s'est arrêté</b> (pas de reprise totale). Associations <b>simultanées</b> : même jour (points d'injection différents possibles) ; on ne peut pas « oublier » un antigène d'une association combinée.</li>
</ul>

<h3>6. Chaîne du froid</h3>
<ul>
<li><b>Température de conservation :</b> <b>+2 °C à +8 °C</b>. Il y a rupture de la chaîne du froid au-dessus de 8 °C <b>et</b> en dessous de +2 °C (risque de congélation). L'altération par la chaleur ou la congélation est <b>irréversible</b> et cumulative.</li>
<li><b>Relevé de température</b> du réfrigérateur : <b>quotidien</b> (à confirmer pour la fréquence exacte).</li>
<li><b>Production du froid :</b> chambres froides, réfrigérateurs, congélateurs (qui congèlent les accumulateurs). <b>Conservation du froid :</b> glacières, emballages isothermes, coussinets, accumulateurs, porte-vaccins (matériel de transport, non de monitorage).</li>
<li><b>Monitorage :</b> thermomètre et <b>pastille de contrôle de vaccin (PCV)</b>, indicateur de <b>chaleur</b> (sous l'effet de la chaleur et du temps), non de péremption.</li>
<li><b>Test d'agitation :</b> concerne les vaccins <b>adsorbés</b> (anatoxines : Penta, Td), pas tous les vaccins.</li>
<li><b>Installation du réfrigérateur :</b> à 15-30 <b>cm</b> du mur, cales de 5 cm ; dégivrer quand la couche de givre atteint 5 <b>mm</b>.</li>
<li><b>En cas d'altération ou de panne :</b> mettre les vaccins en <b>quarantaine</b>, les transférer dans des emballages isothermes avec accumulateurs et <b>informer le district</b>. La seule présence de glace ne prouve pas la viabilité.</li>
<li><b>Politique du flacon entamé :</b> un flacon ouvert peut être réutilisé à la séance suivante jusqu'à 4 semaines (selon l'énoncé, pour les vaccins concernés).</li>
</ul>

<h3>7. Gestion et injections sûres</h3>
<ul>
<li><b>Taux de couverture :</b> plus la cible a reçu le nombre requis de doses, plus il est élevé. Règles « 2PS » pour limiter le gaspillage (à confirmer).</li>
<li><b>Injection sécurisée :</b> respect des règles d'asepsie. Disposer plusieurs seringues chargées de différents clients sur un même plateau est une pratique à risque pour le client et pour l'agent. Les injections à risque transmettent notamment l'<b>hépatite B</b>.</li>
</ul>

<h3>8. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>BCG : inactivé / viral</td><td>Bactérien vivant atténué</td></tr>
<tr><td>VPO : inactivé</td><td>Vivant atténué ; VPI = inactivé</td></tr>
<tr><td>VPO donné aux immunodéprimés</td><td>Contre-indiqué : VPI</td></tr>
<tr><td>VPO : 3 doses ; VPI : 4 doses</td><td>VPO : 4 doses ; VPI : 1 dose</td></tr>
<tr><td>Hépatite B pédiatrique à 6 semaines, en SC</td><td>À la naissance ; 4 doses au total</td></tr>
<tr><td>Antiméningococcique en intradermique ; VAA en IM</td><td>IM ; sous-cutané</td></tr>
<tr><td>HPV en poudre</td><td>Liquide</td></tr>
<tr><td>VAA : rappel tous les 10 ans</td><td>Dose unique à vie</td></tr>
<tr><td>Conservation entre −2 °C et +8 °C (ou 3 °C et 8 °C)</td><td>+2 °C à +8 °C</td></tr>
<tr><td>Rupture seulement au-dessus de 8 °C</td><td>Aussi en dessous de +2 °C</td></tr>
<tr><td>Dégivrer à 0,5 mm / 5 cm</td><td>5 mm</td></tr>
<tr><td>Accumulateurs / coussinets produisent du froid</td><td>Ils le conservent</td></tr>
<tr><td>PCV : indicateur de froid ou de péremption</td><td>Indicateur de chaleur</td></tr>
<tr><td>Test d'agitation pour tous les vaccins</td><td>Vaccins adsorbés (Penta, Td)</td></tr>
<tr><td>Abandon : reprendre tout le calendrier</td><td>Reprendre là où on s'est arrêté</td></tr>
<tr><td>Intervalle minimum inexistant</td><td>4 semaines</td></tr>
<tr><td>MAPI avant la vaccination</td><td>Après</td></tr>
<tr><td>Td 3<sup>e</sup> dose = rappel ; une dose protège le nouveau-né</td><td>Série primaire ; deux doses</td></tr>
<tr><td>Cibles : femmes enceintes, jeunes de moins de 9 ans</td><td>Femmes en âge de reproduction, filles de 9 ans, enfants 0 à 11 mois</td></tr>
</table>
` },

};
