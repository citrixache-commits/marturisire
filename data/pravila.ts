// Pravila de Rugăciune — rânduiala ortodoxă de dimineață și de seară
// Texte canonice din tradiția ortodoxă română (domeniu public)

export interface PravilaStep {
  id: string;
  title: string;
  subtitle?: string;
  text: string;
  note?: string;
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
  estimatedTime: "12-15 min",
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
      title: "Împărate ceresc",
      subtitle: "Chemarea Duhului Sfânt",
      text: `Împărate ceresc, Mângâietorule, Duhul adevărului, Care pretutindeni ești și toate le plinești, Vistierul bunătăților și dătătorule de viață, vino și Te sălășluiește întru noi și ne curățește pe noi de toată întinăciunea și mântuiește, Bunule, sufletele noastre.`,
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
      text: `Tatăl nostru, Care ești în ceruri, sfințească-se numele Tău, vie Împărăția Ta, facă-se voia Ta, precum în cer așa și pe pământ.

Pâinea noastră cea spre ființă dă-ne-o nouă astăzi. Și ne iartă nouă greșelile noastre, precum și noi iertăm greșiților noștri. Și nu ne duce pe noi în ispită, ci ne izbăvește de cel rău. Amin.`,
    },
    {
      id: "psalmul-50",
      title: "Psalmul 50",
      subtitle: "Psalmul pocăinței — al Sfântului Proroc David",
      text: `Miluiește-mă, Dumnezeule, după mare mila Ta, și după mulțimea îndurărilor Tale, șterge fărădelegea mea.

Mai vârtos mă spală de fărădelegea mea și de păcatul meu mă curățește. Că fărădelegea mea eu o cunosc și păcatul meu înaintea mea este pururea.

Ție unuia am greșit și rău înaintea Ta am făcut, așa încât drept ești Tu întru cuvintele Tale și biruitor când vei judeca Tu.

Că iată întru fărădelegi m-am zămislit și în păcate m-a născut maica mea. Că iată adevărul ai iubit; cele nearătate și cele ascunse ale înțelepciunii Tale, mi-ai arătat mie.

Stropi-mă-vei cu isop și mă voi curăți; spăla-mă-vei și mai vârtos decât zăpada mă voi albi.

Auzului meu vei da bucurie și veselie; bucura-se-vor oasele mele cele smerite.

Întoarce fața Ta de la păcatele mele și toate fărădelegile mele șterge-le.

Inimă curată zidește întru mine, Dumnezeule, și duh drept înnoiește întru cele dinlăuntru ale mele.

Nu mă lepăda de la fața Ta și Duhul Tău cel sfânt nu-l lua de la mine.

Dă-mi mie bucuria mântuirii Tale și cu duh stăpânitor mă întărește.

Învăța-voi pe cei fără de lege căile Tale, și cei necredincioși la Tine se vor întoarce.

Izbăvește-mă de vărsarea de sânge, Dumnezeule, Dumnezeul mântuirii mele; bucura-se-va limba mea de dreptatea Ta.

Doamne, buzele mele vei deschide și gura mea va vesti lauda Ta.

Că de ai fi voit jertfă, Ți-aș fi dat; arderile de tot nu le vei binevoi.

Jertfa lui Dumnezeu: duhul umilit; inima înfrântă și smerită Dumnezeu nu o va urgisi.

Fă bine, Doamne, întru bună voirea Ta, Sionului, și să se zidească zidurile Ierusalimului.

Atunci vei binevoi jertfa dreptății, prinosul și arderile de tot; atunci vor pune pe altarul Tău viței.`,
    },
    {
      id: "crezul",
      title: "Crezul",
      subtitle: "Simbolul credinței ortodoxe",
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
      id: "rug-dim-macarie",
      title: "Rugăciunea de dimineață",
      subtitle: "A Sfântului Macarie cel Mare",
      text: `Doamne, Cela ce cu multa Ta bunătate și cu marile Tale îndurări mi-ai dat mie, robului Tău, de am trecut vremea nopții acesteia fără ispită de toată răutatea pizmașului, Tu Însuți, Stăpâne, Făcătorule a toate, învrednicește-mă cu adevărată lumina Ta și cu inimă luminată să fac voia Ta, acum și pururea și în vecii vecilor. Amin.

Doamne, Dumnezeul nostru, iartă-mi mie păcatele câte am făcut în această zi, cu lucrul, cu cuvântul și cu gândul. Căci Tu ești bun și iubitor de oameni, și așteaptă pocăința mea.

Dăruiește-mi mie, Doamne, să fac voia Ta cea sfântă în toată ziua aceasta, să mă feresc de tot păcatul și să fiu păzit de toată bântuiala vrăjmașului, prin harul Tău.`,
    },
    {
      id: "inger-pazitor-dim",
      title: "Către Îngerul Păzitor",
      subtitle: "Rugăciune de dimineață către Sfântul Înger",
      text: `Sfinte Îngere, cel ce stai înaintea pătimașului meu suflet și al vieții mele celei ticăloase, nu mă lăsa pe mine, păcătosul, nici nu te depărta de la mine pentru neînfrânarea mea.

Nu da loc diavolului celui viclean, ca să-mi stăpânească cu silnicia trupului acestuia muritor. Întărește mâna mea cea slabă și neputincioasă și mă îndreptează la calea mântuirii.

Așa, Sfinte Îngere al lui Dumnezeu, păzitorul și acoperitorul sufletului și al trupului meu celui ticălos, iartă-mi toate câte te-am scârbit în toate zilele vieții mele și orice am păcătuit în această noapte trecută.

Acoperă-mă în ziua de astăzi și mă păzește de toată ispita celui potrivnic, ca să nu mânii cu niciun păcat pe Dumnezeul meu. Și te roagă pentru mine către Domnul, ca să mă întărească în frica Sa și vrednic să mă arate rob bunătății Lui. Amin.`,
    },
    {
      id: "cuvine-se-dim",
      title: "Cuvine-se cu adevărat",
      subtitle: "Rugăciune către Maica Domnului",
      text: `Cuvine-se cu adevărat să te fericim, Născătoare de Dumnezeu, cea pururea fericită și prea nevinovată și Maica Dumnezeului nostru.

Ceea ce ești mai cinstită decât heruvimii și mai slăvită fără de asemănare decât serafimii, care fără stricăciune pe Dumnezeu Cuvântul ai născut, pe tine, cea cu adevărat Născătoare de Dumnezeu, te mărim.`,
    },
    {
      id: "apolisul-dim",
      title: "Apolisul",
      subtitle: "Încheierea rugăciunii",
      text: `Slavă Tatălui și Fiului și Sfântului Duh, și acum și pururea și în vecii vecilor. Amin.

Doamne miluiește. (de 3 ori)

Pentru rugăciunile Sfinților Părinților noștri, Doamne Iisuse Hristoase, Fiul lui Dumnezeu, miluiește-ne pe noi. Amin.`,
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

Împărate ceresc, Mângâietorule, Duhul adevărului, Care pretutindeni ești și toate le plinești, Vistierul bunătăților și dătătorule de viață, vino și Te sălășluiește întru noi și ne curățește pe noi de toată întinăciunea și mântuiește, Bunule, sufletele noastre.

Sfinte Dumnezeule, Sfinte tare, Sfinte fără de moarte, miluiește-ne pe noi. (de 3 ori)

Slavă Tatălui și Fiului și Sfântului Duh, și acum și pururea și în vecii vecilor. Amin.

Preasfântă Treime, miluiește-ne pe noi. Doamne, curățește păcatele noastre. Stăpâne, iartă fărădelegile noastre. Sfinte, cercetează și vindecă neputințele noastre, pentru numele Tău.

Doamne miluiește. (de 3 ori)

Tatăl nostru, Care ești în ceruri, sfințească-se numele Tău, vie Împărăția Ta, facă-se voia Ta, precum în cer așa și pe pământ. Pâinea noastră cea spre ființă dă-ne-o nouă astăzi. Și ne iartă nouă greșelile noastre, precum și noi iertăm greșiților noștri. Și nu ne duce pe noi în ispită, ci ne izbăvește de cel rău. Amin.`,
    },
    {
      id: "multumire-seara",
      title: "Mulțumire pentru ziua trecută",
      subtitle: "Mulțumește lui Dumnezeu pentru toate",
      text: `Binecuvântat ești, Doamne, Dumnezeul Părinților noștri, și lăudat și preaslăvit este numele Tău în veci. Amin.

Mulțumescu-Ți, Doamne, Dumnezeul meu, că mi-ai dăruit și ziua aceasta, cu pace și cu sănătate. Mulțumescu-Ți pentru toate binefacerile cele arătate și cele ascunse pe care le-ai revărsat asupra mea în această zi.

Iartă-mi, Doamne, toate câte am greșit în ziua de astăzi — cu lucrul, cu cuvântul sau cu gândul. Și mă miluiește ca un bun și iubitor de oameni, acum și pururea și în vecii vecilor. Amin.`,
    },
    {
      id: "cercetare",
      title: "Cercetarea conștiinței",
      subtitle: "Cinci întrebări înainte de somn",
      note: "Răspunde în sinea ta, cu sinceritate, fără fățărnicie.",
      text: `1. Am început și am închis ziua cu rugăciune?

2. Am fost mânios, m-am certat sau am răspuns cu răutate cuiva astăzi?

3. Am vorbit de rău, am judecat sau am osândit pe cineva?

4. Am mințit, m-am lăudat, m-am mândrit cu ceea ce am făcut?

5. Am făcut astăzi măcar un bine — o milostenie, o faptă bună, o rugăciune pentru altcineva?

Doamne, dacă astăzi am greșit — în cuvânt, în faptă sau în gând — iartă-mă, ca un bun și iubitor de oameni. Dăruiește-mi inimă smerită și gând curat pentru ziua de mâine.`,
    },
    {
      id: "psalm-50-seara",
      title: "Psalmul 50",
      subtitle: "Psalmul pocăinței",
      text: `Miluiește-mă, Dumnezeule, după mare mila Ta, și după mulțimea îndurărilor Tale, șterge fărădelegea mea.

Mai vârtos mă spală de fărădelegea mea și de păcatul meu mă curățește. Că fărădelegea mea eu o cunosc și păcatul meu înaintea mea este pururea.

Ție unuia am greșit și rău înaintea Ta am făcut, așa încât drept ești Tu întru cuvintele Tale și biruitor când vei judeca Tu.

Inimă curată zidește întru mine, Dumnezeule, și duh drept înnoiește întru cele dinlăuntru ale mele.

Nu mă lepăda de la fața Ta și Duhul Tău cel sfânt nu-l lua de la mine.

Dă-mi mie bucuria mântuirii Tale și cu duh stăpânitor mă întărește.

Doamne, buzele mele vei deschide și gura mea va vesti lauda Ta.

Jertfa lui Dumnezeu: duhul umilit; inima înfrântă și smerită Dumnezeu nu o va urgisi.`,
    },
    {
      id: "rug-seara-macarie",
      title: "Rugăciunea de seară",
      subtitle: "A Sfântului Macarie cel Mare",
      text: `Dumnezeule cel veșnic, și Împărate a toată făptura, Cel ce m-ai învrednicit a ajunge în acest ceas, iartă-mi păcatele ce am făcut în această zi, cu lucrul, cu cuvântul și cu gândul.

Și curățește, Doamne, smeritul meu suflet de toată întinăciunea trupului și a sufletului.

Și-mi dă, Doamne, în această noapte, a trece somnul în pace, ca sculându-mă din ticălosul meu așternut, bine să plac preasfântului Tău nume în toate zilele vieții mele, și să calc pe vrăjmașii cei ce se luptă cu mine — pe cei trupești și pe cei fără de trup.

Și mă izbăvește, Doamne, de gândurile cele deșarte care mă întinează, și de poftele cele rele. Că a Ta este împărăția și puterea și slava, a Tatălui și a Fiului și a Sfântului Duh, acum și pururea și în vecii vecilor. Amin.`,
    },
    {
      id: "inger-pazitor-seara",
      title: "Către Îngerul Păzitor",
      subtitle: "Rugăciune de seară către Sfântul Înger",
      text: `Îngerul lui Hristos, păzitorul meu cel sfânt și acoperitorul sufletului și al trupului meu, iartă-mi toate câte am greșit în ziua de astăzi.

Și de toată viclenia vrăjmașului meu celui potrivnic mă izbăvește, ca să nu mânii cu niciun păcat pe Dumnezeul meu.

Și te roagă pentru mine, păcătosul și nevrednicul rob, ca să mă arăți vrednic bunătății și milei Preasfintei Treimi și Maicii Domnului meu Iisus Hristos și tuturor sfinților. Amin.`,
    },
    {
      id: "inainte-de-somn",
      title: "Înainte de somn",
      subtitle: "Rugăciune pentru noapte liniștită",
      text: `Doamne, ușurează, iartă și lasă, Stăpâne, sminteala mea din ziua aceasta, cea cu lucrul, cu cuvântul și cu gândul.

Odihnește somnul meu fără de tulburare, și mă izbăvește de toată bântuiala și lucrarea diavolească.

Scoală-mă la vremea rugăciunii, întărit întru poruncile Tale și având întru mine pomenirea judecăților Tale.

Toată noaptea îmi dă lauda Ta, ca să laud, să bine-cuvântez și să slăvesc preacinstitul și de mare cuviință numele Tău — al Tatălui și al Fiului și al Sfântului Duh, acum și pururea și în vecii vecilor. Amin.

În mâinile Tale, Doamne Iisuse Hristoase, Dumnezeul meu, îmi dau duhul meu. Tu mă binecuvintează, Tu mă miluiește și viață veșnică dăruiește-mi. Amin.`,
    },
    {
      id: "cuvine-se-seara",
      title: "Cuvine-se cu adevărat",
      subtitle: "Rugăciune către Maica Domnului",
      text: `Cuvine-se cu adevărat să te fericim, Născătoare de Dumnezeu, cea pururea fericită și prea nevinovată și Maica Dumnezeului nostru.

Ceea ce ești mai cinstită decât heruvimii și mai slăvită fără de asemănare decât serafimii, care fără stricăciune pe Dumnezeu Cuvântul ai născut, pe tine, cea cu adevărat Născătoare de Dumnezeu, te mărim.

Preasfântă Născătoare de Dumnezeu, miluiește-ne pe noi.`,
      note: "Se face semnul crucii. Pravila s-a sfârșit. Somn cu pace.",
    },
  ],
};

export const pravile = [pravilaDimineata, pravilaSeara];

export function getPravilaById(id: "dimineata" | "seara"): Pravila {
  return id === "dimineata" ? pravilaDimineata : pravilaSeara;
}
