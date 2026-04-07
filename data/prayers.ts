export interface Prayer {
  id: number;
  title: string;
  duration: string;
  icon: string;
  premium: boolean;
  category: "dimineata" | "seara" | "masa" | "necaz" | "adormiti" | "crez" | "maica-domnului" | "inger" | "ioan-botezator" | "acatist" | "canon" | "psaltire";
  text?: string;
}

// Rugăciuni canonice ortodoxe — tradiție liturgică (domeniu public)
export const prayers: Prayer[] = [
  {
    id: 1,
    title: "Rugăciunile Dimineții",
    duration: "15 min",
    icon: "dimineata",
    premium: false,
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
    premium: false,
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
    id: 3,
    title: "Rugăciunea lui Iisus",
    duration: "5 min",
    icon: "necaz",
    premium: false,
    category: "necaz",
    text: `Doamne Iisuse Hristoase, Fiul lui Dumnezeu, miluiește-mă pe mine, păcătosul.

(Se repetă cu atenție și smerenie, în ritmul respirației.)

Această rugăciune scurtă cuprinde toată credința și toată cererea creștinului: recunoașterea lui Iisus ca Domn și Fiu al lui Dumnezeu, și cererea de milă.

Tradiția ortodoxă o numește „rugăciunea inimii" — este temelia isihasmului și poate fi rostită oriunde, oricând, în orice lucrare.`,
  },
  {
    id: 4,
    title: "Crezul",
    duration: "2 min",
    icon: "crez",
    premium: false,
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
    premium: false,
    category: "maica-domnului",
    text: `Cuvine-se cu adevărat să te fericim, Născătoare de Dumnezeu, cea pururea fericită și prea nevinovată și Maica Dumnezeului nostru.

Ceea ce ești mai cinstită decât heruvimii și mai slăvită fără de asemănare decât serafimii, care fără stricăciune pe Dumnezeu Cuvântul ai născut, pe tine, cea cu adevărat Născătoare de Dumnezeu, te mărim.`,
  },
  {
    id: 6,
    title: "Rugăciune către Îngerul Păzitor",
    duration: "2 min",
    icon: "inger",
    premium: false,
    category: "inger",
    text: `Îngerul lui Hristos, păzitorul meu cel sfânt și acoperitorul sufletului și al trupului meu, iartă-mi toate câte am greșit în ziua de astăzi. Și de toată viclenia vrăjmașului meu celui potrivnic mă izbăvește, ca să nu mânii cu niciun păcat pe Dumnezeul meu.

Și te roagă pentru mine, păcătosul și nevrednicul rob, ca să mă arăți vrednic bunătății și milei Preasfintei Treimi și Maicii Domnului meu Iisus Hristos și tuturor sfinților. Amin.`,
  },
  {
    id: 7,
    title: "Rugăciune către Sf. Ioan Botezătorul (Marți)",
    duration: "2 min",
    icon: "ioan-botezator",
    premium: false,
    category: "ioan-botezator",
    text: `Sfinte Ioane, Înainte-mergătorule, frumusețea cerului și bucuria pământului, cel ce prin tăierea capului tău pământul întreg l-ai sfințit, primind această smerită rugăciune a noastră, izbăvește-ne din toate nevoile și ne scoate din chinul ce va să fie, pe noi, cei ce te lăudăm cu credință și nădejde.

Ca unul ce stai înaintea scaunului lui Hristos, ajută-ne să-i biruim pe vrăjmașii văzuți și pe cei nevăzuți. Izbăvește-ne din tot necazul și, având îndrăznire către Domnul, ferește-ne de ispitele acestui veac.

Dăruiește-ne nouă, Sfinte Ioane Proorocule, putere din cer și, ca unul ce ești făclie strălucitoare, luminează-ne pe noi, cei ce alergăm la slăvita prăznuire a trecerii tale la Domnul. Amin!`,
  },
  {
    id: 8,
    title: "Rugăciune înainte de masă",
    duration: "1 min",
    icon: "masa",
    premium: false,
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
    premium: false,
    category: "masa",
    text: `Mulțumim Ție, Hristoase Dumnezeul nostru, că ne-ai săturat de bunătățile Tale cele pământești; nu ne lipsi pe noi nici de cereasca Ta Împărăție; ci precum în mijlocul ucenicilor Tăi ai venit, Mântuitorule, pace dându-le lor, vino și la noi și ne mântuiește. Amin.

Slavă Tatălui și Fiului și Sfântului Duh, și acum și pururea și în vecii vecilor. Amin.`,
  },
  {
    id: 10,
    title: "Rugăciune pentru cei adormiți",
    duration: "3 min",
    icon: "adormiti",
    premium: false,
    category: "adormiti",
    text: `Dumnezeul duhurilor și a tot trupul, Care ai călcat moartea și pe diavol l-ai surpat și ai dăruit viață lumii Tale, Însuți, Doamne, odihnește sufletele adormiților robilor Tăi (numele) în loc luminat, în loc cu verdeață, în loc de odihnă, de unde au fugit toată durerea, întristarea și suspinarea.

Și orice greșeală au săvârșit cu cuvântul, cu lucrul sau cu gândul, ca un Dumnezeu bun și iubitor de oameni, iartă-le. Că nu este om care să fi trăit și să nu fi greșit; numai Tu singur ești fără de păcat, dreptatea Ta este dreptate în veac și cuvântul Tău este adevărul.

Că Tu ești învierea și viața și odihna adormiților robilor Tăi, Hristoase Dumnezeul nostru, și Ție slavă înălțăm, împreună și Celui fără de început al Tău Părinte și Preasfântului și bunului și de viață făcătorului Tău Duh, acum și pururea și în vecii vecilor. Amin.

Veșnica lor pomenire!`,
  },
  {
    id: 11,
    title: "Acatistul Maicii Domnului",
    duration: "25 min",
    icon: "acatist",
    premium: true,
    category: "acatist",
  },
  {
    id: 12,
    title: "Paraclisul Maicii Domnului",
    duration: "20 min",
    icon: "acatist",
    premium: true,
    category: "acatist",
  },
  {
    id: 13,
    title: "Canonul de Pocăință",
    duration: "18 min",
    icon: "canon",
    premium: true,
    category: "canon",
  },
  {
    id: 14,
    title: "Psaltirea — Catisma 1",
    duration: "35 min",
    icon: "psaltire",
    premium: true,
    category: "psaltire",
  },
];
