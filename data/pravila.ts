// Pravila de Rugăciune — rânduiala ortodoxă de dimineață și de seară
// Versiune scurtă canonică (~10 min fiecare), cu pas dinamic „Pomenirea Sfântului Zilei"
//
// Toate textele sunt verbatim de pe doxologia.ro/rugaciunile-diminetii și /rugaciunile-serii
// Zero parafrazare, zero fabricație.
//
// Pasul dinamic se calculează la runtime în PravilaModal pe baza calendarului ortodox
// + tropar dacă există în data/tropare-sfinti.ts (221 zile din 2026), altfel formula
// canonică „Sfinte/Sfântă/Sfinților [Numele], roagă-te/rugați-vă lui Dumnezeu pentru noi"
// (formulă din litiile Liturghiei Sf. Ioan Gură de Aur, NU inventată).

export interface PravilaStep {
  id: string;
  title: string;
  subtitle?: string;
  /** Text static. Pentru pașii dinamici (ex: Sf. zilei) e folosit ca fallback. */
  text: string;
  note?: string;
  /** Dacă e setat, pasul se randează dinamic în PravilaModal (text, subtitle ignorate). */
  dynamic?: "saintOfDay";
}

export interface Pravila {
  id: "dimineata" | "seara";
  title: string;
  subtitle: string;
  icon: string;
  estimatedTime: string;
  steps: PravilaStep[];
}

export const pravilaDimineata: Pravila = {
  id: "dimineata",
  title: "Pravila de Dimineață",
  subtitle: "Rânduiala rugăciunilor de dimineață",
  icon: "☀️",
  estimatedTime: "10-12 min",
  steps: [
    {
      id: "incep-dim",
      title: "Începutul",
      subtitle: "Sculându-te din somn, înainte de orice alt lucru, stai cu evlavie",
      note: "Se face semnul sfintei cruci, zicând:",
      text: `În numele Tatălui și al Fiului și al Sfântului Duh. Amin.

Slavă Ție, Dumnezeul nostru, slavă Ție.
Slavă Ție, Dumnezeul nostru, slavă Ție.
Slavă Ție, Dumnezeul nostru, slavă Ție.`,
    },
    {
      id: "imparate-ceresc",
      title: "Împărate Ceresc",
      subtitle: "Chemarea Duhului Sfânt",
      text: `Împărate Ceresc, Mângâietorule, Duhul adevărului, Care pretutindenea ești și toate le împlinești, Vistierul bunătăților și dătătorule de viață, vino și Te sălășluiește întru noi, și ne curățește pe noi de toată întinăciunea și mântuiește, Bunule, sufletele noastre.`,
    },
    {
      id: "trisaghion",
      title: "Trisaghionul",
      subtitle: "Rugăciune către Sfânta Treime",
      text: `Sfinte Dumnezeule, Sfinte tare, Sfinte fără de moarte, miluiește-ne pe noi. (de 3 ori)

Slavă Tatălui și Fiului și Sfântului Duh, și acum și pururea și în vecii vecilor. Amin.

Preasfântă Treime, miluiește-ne pe noi. Doamne, curățește păcatele noastre. Stăpâne, iartă fărădelegile noastre. Sfinte, cercetează și vindecă neputințele noastre, pentru numele Tău.

Doamne miluiește. (de 3 ori)

Slavă Tatălui și Fiului și Sfântului Duh, și acum și pururea și în vecii vecilor. Amin.`,
    },
    {
      id: "tatal-nostru",
      title: "Tatăl nostru",
      subtitle: "Rugăciunea Domnească",
      text: `Tatăl nostru, Care ești în ceruri, sfințească-Se numele Tău, vie împărăția Ta, fie voia Ta, precum în cer așa și pe pământ. Pâinea noastră cea de toate zilele, dă-ne-o nouă astăzi și ne iartă nouă greșelile noastre, precum și noi iertăm greșiților noștri. Și nu ne duce pe noi în ispită, ci ne izbăvește de cel rău.

Pentru rugăciunile Sfinților Părinților noștri, Doamne Iisuse Hristoase, Fiul lui Dumnezeu, miluiește-ne pe noi. Amin.`,
    },
    {
      id: "veniti-inchinam",
      title: "Veniți să ne închinăm",
      subtitle: "Cu trei închinăciuni",
      text: `Veniți să ne închinăm Împăratului nostru Dumnezeu!

Veniți să ne închinăm și să cădem la Hristos, Împăratul nostru Dumnezeu!

Veniți să ne închinăm și să cădem la Însuși Hristos, Împăratul și Dumnezeul nostru!`,
    },
    {
      id: "psalmul-50",
      title: "Psalmul 50",
      subtitle: "Psalmul pocăinței — al Sfântului Proroc David",
      text: `Miluiește-mă, Dumnezeule, după mare mila Ta și după mulțimea îndurărilor Tale șterge fărădelegea mea. Mai vârtos mă spală de fărădelegea mea și de păcatul meu mă curățește. Că fărădelegea mea eu o cunosc și păcatul meu înaintea mea este pururea. Ție Unuia am greșit și rău înaintea Ta am făcut, așa încât drept ești Tu întru cuvintele Tale și biruitor când vei judeca Tu. Că iată întru fărădelegi m-am zămislit și în păcate m-a născut maica mea. Că iată adevărul ai iubit; cele nearătate și cele ascunse ale înțelepciunii Tale, mi-ai arătat mie. Stropi-mă-vei cu isop și mă voi curăți; spăla-mă-vei și mai vârtos decât zăpada mă voi albi. Auzului meu vei da bucurie și veselie; bucura-se-vor oasele mele cele smerite. Întoarce fața Ta de la păcatele mele și toate fărădelegile mele șterge-le. Inimă curată zidește întru mine, Dumnezeule, și duh drept înnoiește întru cele dinlăuntru ale mele. Nu mă lepăda de la fața Ta și Duhul Tău Cel Sfânt nu-L lua de la mine. Dă-mi mie bucuria mântuirii Tale și cu duh stăpânitor mă întărește. Învăța-voi pe cei fără de lege căile Tale și cei necredincioși la Tine se vor întoarce. Izbăvește-mă de vărsarea de sânge, Dumnezeule, Dumnezeul mântuirii mele; bucura-se-va limba mea de dreptatea Ta. Doamne, buzele mele vei deschide și gura mea va vesti lauda Ta. Că de ai fi voit jertfă, Ți-aș fi dat; arderile de tot nu le vei binevoi. Jertfa lui Dumnezeu: duhul umilit; inima înfrântă și smerită Dumnezeu nu o va urgisi. Fă bine, Doamne, întru bună voirea Ta Sionului, și să se zidească zidurile Ierusalimului. Atunci vei binevoi jertfa dreptății, prinosul și arderile de tot; atunci vor pune pe altarul Tău viței.`,
    },
    {
      id: "crezul",
      title: "Crezul",
      subtitle: "Simbolul credinței ortodoxe",
      text: `Cred într-unul Dumnezeu, Tatăl, Atotțiitorul, Făcătorul cerului și al pământului, văzutelor tuturor și nevăzutelor.

Și într-unul Domn Iisus Hristos, Fiul lui Dumnezeu, Unul-Născut, Care din Tatăl S-a născut mai înainte de toți vecii. Lumină din Lumină, Dumnezeu adevărat din Dumnezeu adevărat, născut, nu făcut; Cel de o ființă cu Tatăl, prin Care toate s-au făcut.

Care pentru noi oamenii și pentru a noastră mântuire S-a pogorât din ceruri și S-a întrupat de la Duhul Sfânt și din Maria Fecioara, și S-a făcut om.

Și S-a răstignit pentru noi în zilele lui Ponțiu Pilat și a pătimit și S-a îngropat.

Și a înviat a treia zi, după Scripturi.

Și S-a înălțat la ceruri și șade de-a dreapta Tatălui.

Și iarăși va să vină cu slavă, să judece viii și morții, a Cărui împărăție nu va avea sfârșit.

Și întru Duhul Sfânt, Domnul de viață Făcătorul, Care de la Tatăl purcede, Cel ce împreună cu Tatăl și cu Fiul este închinat și slăvit, Care a grăit prin prooroci.

Într-una sfântă, sobornicească și apostolească Biserică.

Mărturisesc un Botez spre iertarea păcatelor.

Aștept învierea morților și viața veacului ce va să fie. Amin.`,
    },
    {
      id: "macarie-dim",
      title: "Rugăciunea Sf. Macarie cel Mare",
      subtitle: "Cere curățire de păcate",
      text: `Doamne, curățește-mă pe mine păcătosul, că niciodată n-am făcut bine înaintea Ta. Izbăvește-mă deci de cel viclean și să fie întru mine voia Ta, ca fără de osândă să deschid gura mea cea nevrednică și să laud preasfânt numele Tău, al Tatălui și al Fiului și al Sfântului Duh, acum și pururea și în vecii vecilor. Amin.`,
    },
    {
      id: "sfantul-zilei-dim",
      title: "Pomenirea Sfântului Zilei",
      subtitle: "Cinstirea sfântului prăznuit astăzi",
      text: "",
      dynamic: "saintOfDay",
    },
    {
      id: "cuvine-se-dim",
      title: "Cuvine-se cu adevărat",
      subtitle: "Imn către Maica Domnului",
      text: `Cuvine-se cu adevărat să te fericim, Născătoare de Dumnezeu, cea pururea fericită și preanevinovată și Maica Dumnezeului nostru.

Ceea ce ești mai cinstită decât heruvimii și mai mărită, fără de asemănare, decât serafimii, care fără stricăciune pe Dumnezeu Cuvântul ai născut, pe tine, cea cu adevărat Născătoare de Dumnezeu, te mărim.`,
    },
    {
      id: "apolisul-dim",
      title: "Apolisul",
      subtitle: "Încheierea pravilei",
      text: `Slavă Tatălui și Fiului și Sfântului Duh, și acum și pururea și în vecii vecilor. Amin.

Doamne miluiește. Doamne miluiește. Doamne miluiește.

Pentru rugăciunile sfinților părinților noștri, Doamne Iisuse Hristoase, Fiul lui Dumnezeu, miluiește-ne pe noi. Amin.`,
      note: "Se face semnul crucii. Pravila s-a sfârșit.",
    },
  ],
};

export const pravilaSeara: Pravila = {
  id: "seara",
  title: "Pravila de Seară",
  subtitle: "Rânduiala rugăciunilor înainte de somn",
  icon: "🌙",
  estimatedTime: "10-12 min",
  steps: [
    {
      id: "incep-seara",
      title: "Începutul",
      subtitle: "Înainte de a te culca, stai cu evlavie înaintea sfintelor icoane",
      note: "Se face semnul sfintei cruci, zicând:",
      text: `În numele Tatălui și al Fiului și al Sfântului Duh. Amin.

Slavă Ție, Dumnezeul nostru, slavă Ție.

Împărate Ceresc, Mângâietorule, Duhul adevărului, Care pretutindenea ești și toate le împlinești, Vistierul bunătăților și dătătorule de viață, vino și Te sălășluiește întru noi, și ne curățește pe noi de toată întinăciunea și mântuiește, Bunule, sufletele noastre.

Sfinte Dumnezeule, Sfinte tare, Sfinte fără de moarte, miluiește-ne pe noi. (de 3 ori)

Slavă Tatălui și Fiului și Sfântului Duh, și acum și pururea și în vecii vecilor. Amin.

Preasfântă Treime, miluiește-ne pe noi. Doamne, curățește păcatele noastre. Stăpâne, iartă fărădelegile noastre. Sfinte, cercetează și vindecă neputințele noastre, pentru numele Tău.

Doamne miluiește. (de 3 ori)

Slavă Tatălui și Fiului și Sfântului Duh, și acum și pururea și în vecii vecilor. Amin.

Tatăl nostru, Care ești în ceruri, sfințească-Se numele Tău, vie împărăția Ta, fie voia Ta, precum în cer așa și pe pământ. Pâinea noastră cea de toate zilele, dă-ne-o nouă astăzi și ne iartă nouă greșelile noastre, precum și noi iertăm greșiților noștri. Și nu ne duce pe noi în ispită, ci ne izbăvește de cel rău.

Pentru rugăciunile Sfinților Părinților noștri, Doamne Iisuse Hristoase, Fiul lui Dumnezeu, miluiește-ne pe noi. Amin.`,
    },
    {
      id: "macarie-seara",
      title: "Rugăciunea Sf. Macarie cel Mare",
      subtitle: "Către Dumnezeu Tatăl",
      text: `Dumnezeule cel veșnic și Împărate a toată făptura, Cel ce m-ai învrednicit a ajunge până în acest ceas, iartă-mi păcatele ce am făcut în această zi, cu fapta, cu cuvântul și cu gândul; și curățește, Doamne, smeritul meu suflet de toată întinăciunea trupului și a sufletului.

Și-mi dă, Doamne, în această noapte, a trece somnul în pace ca, sculându-mă din ticălosul meu așternut, bine să plac Preasfântului Tău nume în toate zilele vieții mele și să calc pe vrăjmașii cei ce se luptă cu mine, pe cei trupești și pe cei fără de trup.

Și mă izbăvește, Doamne, de gândurile cele deșarte, care mă întinează, și de poftele cele rele. Că a Ta este împărăția, puterea și slava, a Tatălui și a Fiului și a Sfântului Duh, acum și pururea și în vecii vecilor. Amin.`,
    },
    {
      id: "duh-sfant-marturisire",
      title: "Mărturisirea păcatelor de toate zilele",
      subtitle: "Rugăciunea către Sfântul Duh",
      text: `Doamne, Împărate Ceresc, Mângâietorule, Duhule adevărate, milostivește-Te spre mine, păcătosul robul Tău, și mă miluiește și-mi iartă mie, nevrednicului, toate câte am greșit Ție astăzi ca un om, și nu numai ca un om, ci și mai rău decât necuvântătoarele, păcatele mele cele de voie și cele fără de voie, cele știute și cele neștiute, care sunt din tinerețe și din obiceiul cel rău și care sunt din voia cea slobodă și din lene;

ori de m-am jurat cu numele Tău, ori de L-am hulit în gândul meu, sau pe cineva am ocărât, sau pe cineva am clevetit în mânia mea, sau am mâhnit, sau de ceva m-am mâniat, sau am mințit, sau fără de vreme am dormit, sau vreun sărac a venit la mine și nu l-am socotit, sau pe fratele meu l-am mâhnit, sau m-am sfădit, sau pe cineva am osândit, sau m-am mărit, sau m-am trufit, sau m-am mâniat, sau, stând la rugăciune, mintea mea s-a îngrijit de vicleniile acestei lumi, sau răzvrătire am cugetat, sau prea m-am săturat, sau m-am îmbătat, sau nebunește am râs, sau ceva rău am cugetat, sau frumusețe străină am văzut și cu dânsa mi-am rănit inima, sau ce nu se cuvine am grăit, sau de păcatul fratelui meu am râs, iar păcatele mele sunt nenumărate, sau de rugăciune nu m-am îngrijit, sau altceva rău am făcut și nu-mi aduc aminte; că acestea toate și mai mari decât acestea am făcut.

Miluiește-mă, Stăpâne și Făcătorul meu, pe mine leneșul și nevrednicul robul Tău, și mă ușurează, și mă slobozește și mă iartă, ca un bun și de oameni iubitor. Ca în pace să mă culc și să dorm eu, păcătosul și necuratul și ticălosul, și să mă închin și să cânt și să preaslăvesc preacinstitul Tău nume, împreună cu al Tatălui și cu al Unuia-Născut Fiului Lui, acum și pururea și în vecii vecilor. Amin.`,
    },
    {
      id: "sfantul-zilei-seara",
      title: "Pomenirea Sfântului Zilei",
      subtitle: "Cinstirea sfântului prăznuit astăzi",
      text: "",
      dynamic: "saintOfDay",
    },
    {
      id: "inger-pazitor-seara",
      title: "Către Sfântul Înger Păzitor",
      subtitle: "Rugăciune de seară",
      text: `Îngerule al lui Hristos, păzitorul meu cel sfânt și acoperitorul sufletului și al trupului meu, iartă-mi toate câte am greșit în ziua de astăzi, și de toată viclenia vrăjmașului meu celui potrivnic mă izbăvește, ca să nu mânii cu niciun păcat pe Dumnezeul meu;

și te roagă pentru mine, păcătosul și nevrednicul rob, ca să mă arăți vrednic bunătății și milei Preasfintei Treimi și Maicii Domnului meu Iisus Hristos și tuturor sfinților. Amin.`,
    },
    {
      id: "cuvine-se-seara",
      title: "Cuvine-se cu adevărat",
      subtitle: "Imn către Maica Domnului",
      text: `Cuvine-se cu adevărat să te fericim, Născătoare de Dumnezeu, cea pururea fericită și prea nevinovată și Maica Dumnezeului nostru.

Ceea ce ești mai cinstită decât heruvimii și mai mărită fără de asemănare decât serafimii, care fără stricăciune pe Dumnezeu Cuvântul ai născut, pe tine, cea cu adevărat Născătoare de Dumnezeu, te mărim.

Doamne, Iisuse Hristoase, Fiul lui Dumnezeu, pentru rugăciunile Preacuratei Maicii Tale, ale cuvioșilor părinților noștri și ale tuturor sfinților, mântuiește-mă pe mine, păcătosul.`,
    },
    {
      id: "lumineaza-ochii",
      title: "Înainte de somn",
      subtitle: "Vrând să te așezi pe așternut",
      text: `Luminează ochii mei, Hristoase Dumnezeule, ca nu cândva să adorm întru moarte, ca nu cândva să zică vrăjmașul meu: întăritu-m-am asupra lui.

Slavă Tatălui și Fiului și Sfântului Duh.

Sprijinitor sufletului meu fii, Dumnezeule, că umblu prin mijlocul a multe curse; izbăvește-mă de dânsele și mă mântuiește, Bunule, ca un iubitor de oameni.

Și acum și pururea și în vecii vecilor. Amin.

Preaslăvită Maică a lui Dumnezeu, care ești mai sfântă decât sfinții îngeri, neîncetat te cântăm cu inima și cu gura, mărturisind că tu ești de Dumnezeu Născătoare, căci cu adevărat ne-ai născut nouă pe Dumnezeu întrupat și te rogi neîncetat pentru sufletele noastre.`,
    },
    {
      id: "cinstita-cruce",
      title: "Rugăciunea cinstitei Cruci",
      subtitle: "Sărutând Sfânta Cruce sau o icoană, faci semnul ei peste locul de odihnă",
      text: `Să învie Dumnezeu și să se risipească vrăjmașii Lui și să fugă de la fața Lui cei ce-L urăsc pe Dânsul.

Să piară cum piere fumul; cum se topește ceara de fața focului, așa să piară diavolii de la fața celor ce iubesc pe Dumnezeu și se însemnează cu semnul Crucii și zic cu veselie:

Bucură-te, preacinstită și de viață făcătoare Crucea Domnului, care alungi pe diavoli cu puterea Celui ce S-a răstignit pe tine, a Domnului nostru Iisus Hristos, și S-a pogorât la iad și a călcat puterea diavolului și te-a dăruit nouă pe tine, cinstită Crucea Sa, spre alungarea a tot pizmașul.

O, preacinstită și de viață făcătoare Crucea Domnului, ajută-mi cu Sfânta Doamnă Fecioară, Născătoare de Dumnezeu, și cu toți sfinții în veci. Amin.`,
      note: "Făcându-ți semnul crucii și cu rugăciunea în minte adormind, gândește-te la ziua judecății, cum vei sta înaintea lui Dumnezeu. Pravila s-a sfârșit. Somn cu pace.",
    },
  ],
};

export const pravile = [pravilaDimineata, pravilaSeara];

export function getPravilaById(id: "dimineata" | "seara"): Pravila {
  return id === "dimineata" ? pravilaDimineata : pravilaSeara;
}
