export interface Prayer {
  id: number;
  title: string;
  duration: string;
  icon: string;
  category: "dimineata" | "seara" | "masa" | "necaz" | "adormiti" | "crez" | "maica-domnului" | "inger" | "ioan-botezator" | "acatist" | "canon" | "psaltire" | "domneasca";
  text?: string;
}

// Rugăciuni canonice ortodoxe — tradiție liturgică (domeniu public)
export const prayers: Prayer[] = [
  {
    id: 11,
    title: "Tatăl Nostru",
    duration: "1 min",
    icon: "domneasca",
    category: "domneasca",
    text: `Tatăl nostru, Care ești în ceruri, sfințească-se numele Tău, vie Împărăția Ta, facă-se voia Ta, precum în cer așa și pe pământ.

Pâinea noastră cea spre ființă dă-ne-o nouă astăzi.

Și ne iartă nouă greșelile noastre, precum și noi iertăm greșiților noștri.

Și nu ne duce pe noi în ispită, ci ne izbăvește de cel rău.

Că a Ta este Împărăția și puterea și slava, a Tatălui și a Fiului și a Sfântului Duh, acum și pururea și în vecii vecilor. Amin.`,
  },
  {
    id: 3,
    title: "Rugăciunea lui Iisus",
    duration: "5 min",
    icon: "necaz",
    category: "necaz",
    text: `Doamne Iisuse Hristoase, Fiul lui Dumnezeu, miluiește-mă pe mine, păcătosul.`,
  },
  {
    id: 4,
    title: "Crezul",
    duration: "2 min",
    icon: "crez",
    category: "crez",
    text: `Cred întru unul Dumnezeu, Tatăl Atotțiitorul, Făcătorul cerului și al pământului, văzutelor tuturor și nevăzutelor.

Și întru unul Domn Iisus Hristos, Fiul lui Dumnezeu, Unul-Născut, Care din Tatăl S-a născut mai înainte de toți vecii. Lumină din Lumină, Dumnezeu adevărat din Dumnezeu adevărat, născut, nu făcut; Cel de o ființă cu Tatăl, prin Care toate s-au făcut.

Care, pentru noi oamenii și pentru a noastră mântuire, S-a pogorât din ceruri și S-a întrupat de la Duhul Sfânt și din Maria Fecioara și S-a făcut om.

Și S-a răstignit pentru noi în zilele lui Ponțiu Pilat și a pătimit și S-a îngropat.

Și a înviat a treia zi, după Scripturi.

Și S-a înălțat la ceruri și șade de-a dreapta Tatălui.

Și iarăși va să vină cu slavă, să judece viii și morții, a Cărui împărăție nu va avea sfârșit.

Și întru Duhul Sfânt, Domnul de viață Făcătorul, Care din Tatăl purcede, Cel ce împreună cu Tatăl și cu Fiul este închinat și slăvit, Care a grăit prin prooroci.

Întru una, sfântă, sobornicească și apostolească Biserică.

Mărturisesc un botez spre iertarea păcatelor.

Aștept învierea morților și viața veacului ce va să fie. Amin.`,
  },
  {
    id: 5,
    title: "Cuvine-se cu adevărat",
    duration: "1 min",
    icon: "maica-domnului",
    category: "maica-domnului",
    text: `Cuvine-se cu adevărat să te fericim, Născătoare de Dumnezeu, cea pururea fericită și prea nevinovată și Maica Dumnezeului nostru.

Ceea ce ești mai cinstită decât heruvimii și mai slăvită fără de asemănare decât serafimii, care fără stricăciune pe Dumnezeu Cuvântul ai născut, pe tine, cea cu adevărat Născătoare de Dumnezeu, te mărim.`,
  },
  {
    id: 1,
    title: "Rugăciunile Dimineții",
    duration: "15 min",
    icon: "dimineata",
    category: "dimineata",
    text: `În numele Tatălui și al Fiului și al Sfântului Duh. Amin.

Slavă Ție, Dumnezeul nostru, slavă Ție.

Împărate ceresc, Mângâietorule, Duhul adevărului, Care pretutindeni ești și toate le plinești, Vistierul bunătăților și dătătorule de viață, vino și Te sălășluiește întru noi și ne curățește pe noi de toată întinăciunea și mântuiește, Bunule, sufletele noastre.

Sfinte Dumnezeule, Sfinte tare, Sfinte fără de moarte, miluiește-ne pe noi. (de 3 ori)

Slavă Tatălui și Fiului și Sfântului Duh, și acum și pururea și în vecii vecilor. Amin.

Preasfântă Treime, miluiește-ne pe noi. Doamne, curățește păcatele noastre. Stăpâne, iartă fărădelegile noastre. Sfinte, cercetează și vindecă neputințele noastre, pentru numele Tău.

Doamne miluiește. (de 3 ori)

Tatăl nostru, Care ești în ceruri, sfințească-se numele Tău, vie Împărăția Ta, facă-se voia Ta, precum în cer așa și pe pământ. Pâinea noastră cea spre ființă dă-ne-o nouă astăzi. Și ne iartă nouă greșelile noastre, precum și noi iertăm greșiților noștri. Și nu ne duce pe noi în ispită, ci ne izbăvește de cel rău. Amin.`,
  },
  {
    id: 2,
    title: "Rugăciunile Serii",
    duration: "12 min",
    icon: "seara",
    category: "seara",
    text: `În numele Tatălui și al Fiului și al Sfântului Duh. Amin.

Doamne Iisuse Hristoase, Fiul lui Dumnezeu, pentru rugăciunile Preacuratei Maicii Tale și ale tuturor Sfinților, miluiește-ne pe noi. Amin.

Slavă Ție, Dumnezeul nostru, slavă Ție.

Împărate ceresc, Mângâietorule, Duhul adevărului, Care pretutindeni ești și toate le plinești, Vistierul bunătăților și dătătorule de viață, vino și Te sălășluiește întru noi și ne curățește pe noi de toată întinăciunea și mântuiește, Bunule, sufletele noastre.

Sfinte Dumnezeule, Sfinte tare, Sfinte fără de moarte, miluiește-ne pe noi. (de 3 ori)

Slavă Tatălui și Fiului și Sfântului Duh, și acum și pururea și în vecii vecilor. Amin.

Preasfântă Treime, miluiește-ne pe noi. Doamne, curățește păcatele noastre. Stăpâne, iartă fărădelegile noastre. Sfinte, cercetează și vindecă neputințele noastre, pentru numele Tău.

Doamne miluiește. (de 3 ori)

Tatăl nostru, Care ești în ceruri, sfințească-se numele Tău, vie Împărăția Ta, facă-se voia Ta, precum în cer așa și pe pământ. Pâinea noastră cea spre ființă dă-ne-o nouă astăzi. Și ne iartă nouă greșelile noastre, precum și noi iertăm greșiților noștri. Și nu ne duce pe noi în ispită, ci ne izbăvește de cel rău. Amin.

Doamne, ușurează, iartă și lasă, Stăpâne, sminteala mea din ziua aceasta, cea cu lucrul, cu cuvântul și cu gândul. Odihnește somnul meu fără de tulburare.`,
  },
  {
    id: 6,
    title: "Rugăciune către Îngerul Păzitor",
    duration: "2 min",
    icon: "inger",
    category: "inger",
    text: `Îngerul lui Hristos, păzitorul meu cel sfânt și acoperitorul sufletului și al trupului meu, iartă-mi toate câte am greșit în ziua de astăzi. Și de toată viclenia vrăjmașului meu celui potrivnic mă izbăvește, ca să nu mânii cu niciun păcat pe Dumnezeul meu.

Și te roagă pentru mine, păcătosul și nevrednicul rob, ca să mă arăți vrednic bunătății și milei Preasfintei Treimi și Maicii Domnului meu Iisus Hristos și tuturor sfinților. Amin.`,
  },
  {
    id: 7,
    title: "Rugăciune către Sf. Ioan Botezătorul (Marți)",
    duration: "2 min",
    icon: "ioan-botezator",
    category: "ioan-botezator",
    text: `Doamne Dumnezeul meu, osândit stau înaintea Feţei Tale celei Sfinte, şi-mi mărturisesc nevrednicia, neputinţa şi sărăcia mea cea mare. Pentru aceasta mă rog Ţie, o, Izvor dulce şi noianul îndurării, deschide stavilele cerului şi plouă asupra mea bunătăţile îndurării Tale, ca să pot scoate lacrimi, să plâng, să spăl şi să curăţesc sufletul meu de întinăciunea păcatelor, cu căinţă tare şi adevărată. Şi ca să-mi dai acest dar, Stăpâne, pun mijlocitor pe Înaintemergătorul Ioan, către care zic: O, învăţătorule al credinţei şi mărite Prorocule, care eşti mai mare decât toţi prorocii, precum Însuşi Fiul lui Dumnezeu te-a numit în Sfânta Evanghelie, tu care ai arătat poporului pe Stăpânul Hristos, tu care L-ai botezat în Iordan şi ai văzut cerurile deschizându-se, tu care ai auzit glasul Părintelui Ceresc şi ai văzut pe Duhul Sfânt ca un porumbel pogorându-se peste El. Rogu-te, ajută-mi cu mijlocirea ta, tu care stai în cer înaintea judecătorului Veşnic, şi fă să se îndure de mine, că ai multă îndrăzneală înaintea Lui. Întinde mâna aceea cu care L-ai botezat şi strică cugetele mele cele rele şi mă întăreşte să-mi petrec viaţa pe calea cea bună a lui Dumnezeu. O, Prorocule, luminează-mi mintea cu poruncile Domnului, ca să le ţin minte şi să le păzesc până la capătul vieţii mele. Şi să stai lângă mine în ora morţii mele, să mă duci pocăit înaintea Stăpânului meu, Dumnezeu. Roagă-te încă şi pentru toată lumea, ca Dumnezeu să dea ajutor creştinilor, şi celor vii şi celor răposaţi, şi să-i odihnească de nevoile cele multe, să le dea toate cele de trebuinţă şi să-i învrednicească Împărăţiei Sale. Amin.`,
  },
  {
    id: 8,
    title: "Rugăciune înainte de masă",
    duration: "1 min",
    icon: "masa",
    category: "masa",
    text: `Tatăl nostru, Care ești în ceruri, sfințească-se numele Tău, vie Împărăția Ta, facă-se voia Ta, precum în cer așa și pe pământ. Pâinea noastră cea spre ființă dă-ne-o nouă astăzi. Și ne iartă nouă greșelile noastre, precum și noi iertăm greșiților noștri. Și nu ne duce pe noi în ispită, ci ne izbăvește de cel rău. Amin.

Slavă Tatălui și Fiului și Sfântului Duh, și acum și pururea și în vecii vecilor. Amin.

Doamne, binecuvintează mâncarea și băutura robilor Tăi, că Sfânt ești totdeauna, acum și pururea și în vecii vecilor. Amin.`,
  },
  {
    id: 9,
    title: "Rugăciune după masă",
    duration: "1 min",
    icon: "masa",
    category: "masa",
    text: `Mulțumim Ție, Hristoase Dumnezeul nostru, că ne-ai săturat de bunătățile Tale cele pământești; nu ne lipsi pe noi nici de cereasca Ta Împărăție; ci precum în mijlocul ucenicilor Tăi ai venit, Mântuitorule, pace dându-le lor, vino și la noi și ne mântuiește. Amin.

Slavă Tatălui și Fiului și Sfântului Duh, și acum și pururea și în vecii vecilor. Amin.`,
  },
  {
    id: 10,
    title: "Rugăciune pentru cei adormiți",
    duration: "3 min",
    icon: "adormiti",
    category: "adormiti",
    text: `Dumnezeul duhurilor și a tot trupul, Care ai călcat moartea și pe diavol l-ai surpat și ai dăruit viață lumii Tale, Însuți, Doamne, odihnește sufletele adormiților robilor Tăi (numele) în loc luminat, în loc cu verdeață, în loc de odihnă, de unde au fugit toată durerea, întristarea și suspinarea.

Și orice greșeală au săvârșit cu cuvântul, cu lucrul sau cu gândul, ca un Dumnezeu bun și iubitor de oameni, iartă-le. Că nu este om care să fi trăit și să nu fi greșit; numai Tu singur ești fără de păcat, dreptatea Ta este dreptate în veac și cuvântul Tău este adevărul.

Că Tu ești învierea și viața și odihna adormiților robilor Tăi, Hristoase Dumnezeul nostru, și Ție slavă înălțăm, împreună și Celui fără de început al Tău Părinte și Preasfântului și bunului și de viață făcătorului Tău Duh, acum și pururea și în vecii vecilor. Amin.

Veșnica lor pomenire!`,
  },
];
