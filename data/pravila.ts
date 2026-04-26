// Pravila de Rugăciune — rânduiala ortodoxă de dimineață și de seară
// Texte canonice integrale, conform Cărții de Rugăciuni a BOR
// Sursă verificată: https://doxologia.ro/rugaciunile-diminetii și https://doxologia.ro/rugaciunile-serii

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
  estimatedTime: "20-25 min",
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
      id: "tropare-dim",
      title: "Troparele dimineții",
      subtitle: "Cântări de trezire",
      text: `Sculându-ne din somn, cădem către Tine, Bunule, și cântare îngerească strigăm Ție, Puternice: Sfânt, Sfânt, Sfânt ești, Dumnezeule; pentru rugăciunile îngerilor Tăi, miluiește-ne pe noi.

Slavă Tatălui și Fiului și Sfântului Duh.

Din pat și din somn m-ai ridicat, Doamne; mintea mea o luminează, inima și buzele mele le deschide ca să Te laud pe Tine, Sfântă Treime: Sfânt, Sfânt, Sfânt ești, Dumnezeule; pentru rugăciunile tuturor sfinților Tăi, miluiește-ne pe noi.

Și acum și pururea și în vecii vecilor. Amin.

Fără de veste Judecătorul va veni și faptele fiecăruia se vor descoperi. Ci cu frică să strigăm în miezul nopții: Sfânt, Sfânt, Sfânt ești, Dumnezeule, pentru Născătoarea de Dumnezeu, miluiește-ne pe noi.

Doamne, miluiește. (de 12 ori)`,
    },
    {
      id: "rug-din-somn",
      title: "Din somn sculându-mă",
      subtitle: "Mulțumire către Sfânta Treime",
      text: `Din somn sculându-mă, mulțumescu-Ți Ție, Preasfântă Treime, că pentru multă bunătatea Ta și pentru îndelungă răbdarea Ta, nu Te-ai mâniat pe mine, leneșul și păcătosul, nici nu m-ai pierdut pentru fărădelegile mele, ci ai arătat iubire de oameni, după obicei; și, întru deznădăjduire zăcând eu, m-ai ridicat, ca să mânec și să slăvesc puterea Ta. Deci acum luminează-mi ochii gândului, deschide-mi gura, ca să mă învăț cuvintele Tale, să înțeleg poruncile Tale, să fac voia Ta, să-Ți cânt întru mărturisirea inimii și să laud preasfânt numele Tău, al Tatălui și al Fiului și al Sfântului Duh, acum și pururea și în vecii vecilor. Amin.`,
    },
    {
      id: "rug-slava-imparate",
      title: "Slavă Ție, Împărate",
      subtitle: "Rugăciune de mulțumire pentru a fi sculat din somn",
      text: `Slavă Ție, Împărate, Dumnezeule Atotputernice, Care cu purtarea Ta de grijă cea dumnezeiască și de oameni iubitoare m-ai învrednicit pe mine, păcătosul și nevrednicul, a mă scula din somn și a dobândi intrare în casa Ta. Primește, Doamne, și glasul rugăciunii mele, ca și al sfintelor și înțelegătoarelor Tale puteri, și binevoiește ca din inimă curată și cu duh de umilință să Ți se aducă Ție laudă din necuratele mele buze; ca și eu să mă fac părtaș fecioarelor celor înțelepte, cu luminată făclia sufletului meu, și să Te slăvesc pe Tine, Dumnezeu-Cuvântul Cel slăvit în Tatăl și în Duhul Sfânt. Amin.`,
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
      id: "macarie-dim-1",
      title: "Rugăciunea I a Sf. Macarie cel Mare",
      subtitle: "Cere curățire de păcate",
      text: `Doamne, curățește-mă pe mine păcătosul, că niciodată n-am făcut bine înaintea Ta. Izbăvește-mă deci de cel viclean și să fie întru mine voia Ta, ca fără de osândă să deschid gura mea cea nevrednică și să laud preasfânt numele Tău, al Tatălui și al Fiului și al Sfântului Duh, acum și pururea și în vecii vecilor. Amin.`,
    },
    {
      id: "macarie-dim-2",
      title: "Rugăciunea II a Sf. Macarie cel Mare",
      subtitle: "Cântare de miez de noapte",
      text: `Din somn sculându-mă, cântare de miez de noapte aduc Ție, Mântuitorule, și înaintea Ta căzând, strig: Nu mă lăsa să adorm în moartea păcatelor, ci mă miluiește, Cel Care Te-ai răstignit de voie, și pe mine, cel care zac în lene, grăbind mă scoală și mă mântuiește, ca să stau înaintea Ta întru rugăciuni; iar după somnul nopții, să-mi luminezi ziua fără de păcat, Hristoase Doamne, și mă mântuiește.`,
    },
    {
      id: "macarie-dim-3",
      title: "Rugăciunea III a Sf. Macarie cel Mare",
      subtitle: "Către Iubitorul de oameni",
      text: `Sculându-mă din somn, către Tine, Stăpâne, Iubitorule de oameni, scap și spre lucrurile Tale mă nevoiesc. Mă rog Ție, ajută-mi cu milostivirea Ta în toată vremea și în tot lucrul. Izbăvește-mă de toate lucrurile lumești cele rele și de sporirea diavolească izbăvește-mă și mă du întru Împărăția Ta cea veșnică. Că Tu ești Făcătorul meu și Purtătorul de grijă și Dătătorul a tot binele și întru Tine este toată nădejdea mea și Ție slavă înalț, acum și pururea și în vecii vecilor. Amin.`,
    },
    {
      id: "macarie-dim-4",
      title: "Rugăciunea IV a Sf. Macarie cel Mare",
      subtitle: "Mulțumire pentru noaptea trecută",
      text: `Doamne, Cel Care cu multa Ta bunătate și cu îndurările Tale cele mari mi-ai dat mie, robului Tău, de am trecut timpul nopții acesteia fără ispită de toată răutatea pizmașului, Tu Însuți, Stăpâne, Făcătorule a toate câte sunt, învrednicește-mă cu adevărată lumina Ta ca să fac voia Ta cu inimă luminată, acum și pururea și în vecii vecilor. Amin.`,
    },
    {
      id: "rug-5-treime",
      title: "Rugăciunea a V-a",
      subtitle: "Cântare către Sfânta Treime",
      text: `Doamne, Dumnezeule, Atotțiitorule, Care primești de la puterile Tale cele cerești cântarea Sfintei Treimi, primește și de la noi, nevrednicii robii Tăi, cântarea Sfintei Treimi și ne dăruiește ca în toți anii vieții noastre și în tot ceasul Ție slavă să-Ți înălțăm: Tatălui și Fiului și Sfântului Duh, acum și pururea și în vecii vecilor. Amin.`,
    },
    {
      id: "rug-6-puteri",
      title: "Rugăciunea a VI-a",
      subtitle: "Către Dumnezeul puterilor",
      text: `Doamne, Atotțiitorule, Dumnezeul puterilor și al tuturor trupurilor, Care între cele de sus locuiești și spre cele de jos privești; Cel Care ispitești inimile și rărunchii și tainele oamenilor le știi cu adevărat; Lumină fără de început și pururea fiitoare, în care nu este mutare sau umbră de schimbare; Însuți, Împărate fără de moarte, primește rugăciunile noastre pe care le aducem Ție din gurile noastre cele întinate, în acest ceas al nopții, îndrăznind pentru mulțimea milelor Tale.

Iartă-ne greșelile ce am greșit înaintea Ta, cu cuvântul, cu fapta, din știință și din neștiință. Curățește-ne pe noi de toate întinăciunile trupești și sufletești, făcându-ne pe noi casă cinstitului și Sfântului Tău Duh.

Și ne dăruiește nouă cu inimă veghetoare și curată să trecem toată noaptea acestei vieți, așteptând luminata și sfânta zi a Unuia-Născut Fiului Tău, a Domnului Dumnezeului și Mântuitorului nostru Iisus Hristos, când va veni pe pământ cu slavă să judece pe toți și să plătească fiecăruia după faptele lui. Ca să nu fim aflați zăcând și dormitând, ci priveghind și sculați în lucrarea poruncilor Lui și să fim gata a intra în bucuria și cămara slavei Lui celei dumnezeiești, unde este glasul cel neîncetat al celor care Te laudă și nespusa dulceață a celor care văd pururea frumusețea cea nespusă a slavei Tale. Că Tu ești Lumina cea adevărată, Care luminezi și sfințești toate, și pe Tine Te laudă toată făptura în veci. Amin.`,
    },
    {
      id: "rug-7-binecuvantam",
      title: "Rugăciunea a VII-a",
      subtitle: "Pe Tine Te binecuvântăm",
      text: `Pe Tine Te binecuvântăm, Dumnezeule Preaînalte și Doamne al milelor, Cel Care faci cu noi pururea lucruri mari și cu anevoie de urmat, slăvite și preaminunate, care nu au număr. Cel Care ne-ai dat nouă somn spre odihna neputințelor noastre și spre repaos de ostenelile trupului, mulțumindu-Ți că nu ne-ai pierdut pe noi cu fărădelegile noastre, ci, după obicei, Te-ai arătat iubitor de oameni și ne-ai ridicat pe noi pentru a slăvi stăpânirea Ta.

Pentru aceea ne rugăm bunătății Tale celei neasemănate: luminează ochii gândului nostru și ridică mintea noastră din somnul cel greu al lenei și deschide gura noastră și o umple de laudele Tale, ca să putem în liniște a cânta, a striga și a ne mărturisi pururea Ție, Dumnezeului Celui slăvit în toate și de toți: Tatălui Celui fără de început, împreună și Unuia-Născut Fiului Tău și Preasfântului și Bunului și de viață Făcătorului Tău Duh, acum și pururea și în vecii vecilor. Amin.`,
    },
    {
      id: "rug-8-ioan-gura-de-aur",
      title: "Rugăciunea a VIII-a — Sf. Ioan Gură de Aur",
      subtitle: "După numărul ceasurilor zilei și ale nopții (24 de cereri)",
      note: "Pentru ceasurile nopții:",
      text: `Doamne, nu mă lipsi de binele Tău cel ceresc. Doamne, izbăvește-mă de chinurile cele veșnice. Doamne, de am greșit, fie cu mintea, fie cu gândul, sau cu cuvântul, sau cu fapta, iartă-mă. Doamne, izbăvește-mă de toată neștiința și uitarea, de trândăvia și de nesimțirea cea împietrită. Doamne, izbăvește-mă de toată ispitirea. Doamne, luminează-mi inima pe care a întunecat-o pofta cea rea. Doamne, eu ca un om am greșit, iar Tu ca un Dumnezeu îndurător, văzând neputința sufletului meu, miluiește-mă. Doamne, trimite mila Ta întru ajutorul meu, ca să preaslăvesc Preasfânt numele Tău. Doamne, Iisuse Hristoase, scrie-mă pe mine, robul Tău, în Cartea Vieții și-mi dăruiește sfârșit bun. Doamne, Dumnezeul meu, deși n-am făcut nici un bine înaintea Ta, dă-mi, după harul Tău, să pun început bun. Doamne, stropește inima mea cu roua harului Tău. Doamne al cerului și al pământului, pomenește-mă pe mine, păcătosul, rușinatul și nevrednicul robul Tău, întru Împărăția Ta. Amin.

Pentru ceasurile zilei:

Doamne, primește-mă întru pocăință. Doamne, nu mă lăsa. Doamne, nu mă duce în ispită. Doamne, dă-mi cuget bun. Doamne, dă-mi lacrimi și aducere aminte de moarte și umilință. Doamne, dă-mi cuget să mărturisesc toate păcatele mele. Doamne, dă-mi smerenie, curăție și ascultare. Doamne, dă-mi răbdare și voie nebiruită și blândețe. Doamne, sădește în mine rădăcina bunătăților și frica Ta în inima mea. Doamne, învrednicește-mă să Te iubesc cu tot sufletul și gândul meu și să fac în toate voia Ta. Doamne, apără-mă de oamenii gâlcevitori, de diavoli și de patimile trupești și de toate celelalte lucruri necuviincioase. Doamne, știu că faci precum vrei Tu, deci să fie și întru mine, păcătosul, voia Ta, că binecuvântat ești în veci. Amin.`,
    },
    {
      id: "inger-pazitor-dim",
      title: "Rugăciunea a IX-a",
      subtitle: "Către Sfântul Înger Păzitor",
      text: `Îngerule sfânt al lui Hristos, către tine cad și mă rog, păzitorul meu cel sfânt, care ești dat mie de la Sfântul Botez spre păzirea sufletului și a păcătosului meu trup. Iar eu, cu lenea mea și cu obiceiurile mele cele rele, am mâniat preacurată lumina ta și te-am izgonit de la mine prin toate lucrurile cele de rușine: cu minciunile, cu clevetirile, cu pizma, cu osândirea, cu trufia, cu neascultarea, cu neiubirea de frați și cu ținerea de minte a răului, cu iubirea de argint, cu desfrânarea, cu mânia, cu scumpătatea, cu mâncarea cea fără de saț, cu beția, cu multa vorbire, cu gândurile cele rele și viclene, cu obiceiurile cele rele și cu aprinderea spre desfrânare, având mai ales voire spre toată pofta cea trupească.

O, rea voire a mea, pe care nici ființele cele necuvântătoare nu o au! Dar cum vei putea să cauți spre mine sau să te apropii de mine, cel necurat? Sau cu ce ochi, îngerule al lui Hristos, vei căuta spre mine, cel care m-am încurcat așa de rău în lucrurile cele întinate? Sau cum voi putea să-mi cer iertare pentru faptele mele cele amare, rele și viclene, în care cad în toate zilele și nopțile și în tot ceasul?

De aceea cad înaintea ta și mă rog, păzitorul meu cel sfânt, milostivește-te spre mine, păcătosul, și-mi fii mie ajutător și sprijinitor asupra vrăjmașului meu celui rău, cu sfintele tale rugăciuni, și Împărăției lui Dumnezeu mă fă părtaș, cu toți sfinții, acum și pururea și în vecii vecilor. Amin.`,
    },
    {
      id: "nascatoarea-dim-1",
      title: "Rugăciunea a X-a",
      subtitle: "Către Preasfânta Născătoare de Dumnezeu",
      text: `Preasfântă Stăpâna mea, de Dumnezeu Născătoare, cu sfintele și preaputernicele tale rugăciuni izgonește de la mine, smeritul și ticălosul robul tău, deznădăjduirea, uitarea, necunoștința, nepurtarea de grijă și toate gândurile cele întinate, cele rele și hulitoare de la ticăloasa mea inimă și de la întunecata mea minte.

Și stinge văpaia poftelor mele, că sărac sunt și ticălos. Și mă izbăvește de multe rele și aduceri-aminte și năravuri, și de toate faptele cele rele mă slobozește. Că binecuvântată ești de toate neamurile și preacinstitul tău nume se slăvește în vecii vecilor. Amin.`,
    },
    {
      id: "nascatoarea-dim-2",
      title: "Altă rugăciune către Născătoarea de Dumnezeu",
      subtitle: "Împărăteasa mea preabună",
      text: `Împărăteasa mea preabună și nădejdea mea, Născătoare de Dumnezeu, primitoarea săracilor și ajutătoarea străinilor, bucuria celor mâhniți, acoperirea celor necăjiți, vezi-mi nevoia, vezi-mi necazul; ajută-mă ca pe un neputincios, hrănește-mă ca pe un străin.

Necazul meu îl știi; ci îl dezleagă precum voiești, că n-am alt ajutor afară de tine, nici altă folositoare grabnică, nici altă mângâietoare bună, ci numai pe tine, o, Maica lui Dumnezeu, ca să mă păzești și să mă acoperi în vecii vecilor. Amin.`,
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
  estimatedTime: "20-25 min",
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
      id: "tropare-umilinta",
      title: "Troparele de umilință",
      subtitle: "Cereri de milă",
      text: `Miluiește-ne pe noi, Doamne, miluiește-ne pe noi, că, nepricepându-ne de niciun răspuns, această rugăciune aducem Ție, ca unui Stăpân, noi păcătoșii robii Tăi; miluiește-ne pe noi.

Slavă Tatălui și Fiului și Sfântului Duh.

Doamne, miluiește-ne pe noi, că întru Tine am nădăjduit; nu Te mânia pe noi foarte, nici pomeni fărădelegile noastre, ci caută și acum ca un milostiv și ne izbăvește pe noi de vrăjmașii noștri, că Tu ești Dumnezeul nostru și noi suntem poporul Tău, toți lucrul mâinilor Tale și numele Tău chemăm.

Și acum și pururea și în vecii vecilor. Amin.

Ușa milostivirii deschide-o nouă, binecuvântată Născătoare de Dumnezeu, ca să nu pierim cei ce nădăjduim întru tine, ci să ne mântuim prin tine din nevoi, că tu ești mântuirea neamului creștinesc.

Doamne, miluiește. (de 12 ori)`,
    },
    {
      id: "macarie-seara-1",
      title: "Rugăciunea I a Sf. Macarie cel Mare",
      subtitle: "Către Dumnezeu Tatăl",
      text: `Dumnezeule cel veșnic și Împărate a toată făptura, Cel ce m-ai învrednicit a ajunge până în acest ceas, iartă-mi păcatele ce am făcut în această zi, cu fapta, cu cuvântul și cu gândul; și curățește, Doamne, smeritul meu suflet de toată întinăciunea trupului și a sufletului.

Și-mi dă, Doamne, în această noapte, a trece somnul în pace ca, sculându-mă din ticălosul meu așternut, bine să plac Preasfântului Tău nume în toate zilele vieții mele și să calc pe vrăjmașii cei ce se luptă cu mine, pe cei trupești și pe cei fără de trup.

Și mă izbăvește, Doamne, de gândurile cele deșarte, care mă întinează, și de poftele cele rele. Că a Ta este împărăția, puterea și slava, a Tatălui și a Fiului și a Sfântului Duh, acum și pururea și în vecii vecilor. Amin.`,
    },
    {
      id: "antioh",
      title: "Rugăciunea a II-a — Sf. Antioh",
      subtitle: "Către Domnul nostru Iisus Hristos",
      text: `Atotțiitorule, Cuvinte al Tatălui, Însuți fiind desăvârșit, Iisuse Hristoase, pentru multă milostivirea Ta, nu Te dezlipi de mine, robul Tău, ci odihnește întru mine pururea, Iisuse, Cel ce ești Păstor bun al oilor Tale.

Nu mă da ispitei șarpelui, nici nu mă lăsa în pofta satanei, că sămânța stricăciunii este întru mine. Tu, Doamne Dumnezeule, Cel Căruia ne închinăm, Împărate Sfinte, Iisuse Hristoase, păzește-mă în timpul somnului cu lumina cea neîntunecată, cu Duhul Tău cel Sfânt, cu Care ai sfințit pe ucenicii Tăi.

Dă-mi, Doamne, și mie, nevrednicului robului Tău, mântuirea Ta în așternutul meu. Luminează mintea mea cu lumina înțelegerii Sfintei Tale Evanghelii, sufletul meu cu dragostea Crucii Tale, inima mea cu curăția cuvintelor Tale, trupul meu cu patima Ta cea nebiruită, cugetul meu cu smerenia Ta îl păzește și mă ridică la vreme cuviincioasă spre a Ta slăvire, că preaslăvit ești cu Cel fără de început al Tău Părinte și cu Preasfântul Duh în veci. Amin.`,
    },
    {
      id: "duh-sfant-marturisire",
      title: "Rugăciunea a III-a — către Sfântul Duh",
      subtitle: "Mărturisirea păcatelor de toate zilele",
      text: `Doamne, Împărate Ceresc, Mângâietorule, Duhule adevărate, milostivește-Te spre mine, păcătosul robul Tău, și mă miluiește și-mi iartă mie, nevrednicului, toate câte am greșit Ție astăzi ca un om, și nu numai ca un om, ci și mai rău decât necuvântătoarele, păcatele mele cele de voie și cele fără de voie, cele știute și cele neștiute, care sunt din tinerețe și din obiceiul cel rău și care sunt din voia cea slobodă și din lene;

ori de m-am jurat cu numele Tău, ori de L-am hulit în gândul meu, sau pe cineva am ocărât, sau pe cineva am clevetit în mânia mea, sau am mâhnit, sau de ceva m-am mâniat, sau am mințit, sau fără de vreme am dormit, sau vreun sărac a venit la mine și nu l-am socotit, sau pe fratele meu l-am mâhnit, sau m-am sfădit, sau pe cineva am osândit, sau m-am mărit, sau m-am trufit, sau m-am mâniat, sau, stând la rugăciune, mintea mea s-a îngrijit de vicleniile acestei lumi, sau răzvrătire am cugetat, sau prea m-am săturat, sau m-am îmbătat, sau nebunește am râs, sau ceva rău am cugetat, sau frumusețe străină am văzut și cu dânsa mi-am rănit inima, sau ce nu se cuvine am grăit, sau de păcatul fratelui meu am râs, iar păcatele mele sunt nenumărate, sau de rugăciune nu m-am îngrijit, sau altceva rău am făcut și nu-mi aduc aminte; că acestea toate și mai mari decât acestea am făcut.

Miluiește-mă, Stăpâne și Făcătorul meu, pe mine leneșul și nevrednicul robul Tău, și mă ușurează, și mă slobozește și mă iartă, ca un bun și de oameni iubitor. Ca în pace să mă culc și să dorm eu, păcătosul și necuratul și ticălosul, și să mă închin și să cânt și să preaslăvesc preacinstitul Tău nume, împreună cu al Tatălui și cu al Unuia-Născut Fiului Lui, acum și pururea și în vecii vecilor. Amin.`,
    },
    {
      id: "rug-4-seara",
      title: "Rugăciunea a IV-a",
      subtitle: "Cere somn cu pace",
      text: `Doamne, Dumnezeul nostru, orice am greșit în această zi cu cuvântul, cu fapta, și cu gândul, ca un bun și iubitor de oameni, iartă-mi.

Somn cu pace și fără mâhnire dăruiește-mi. Pe îngerul Tău cel apărător trimite-l să mă acopere și să mă păzească de tot răul.

Că Tu ești păzitorul sufletelor și al trupurilor noastre și Ție slavă înălțăm, Tatălui și Fiului și Sfântului Duh, acum și pururea și în vecii vecilor. Amin.`,
    },
    {
      id: "rug-5-seara",
      title: "Rugăciunea a V-a",
      subtitle: "Pentru curăție în noapte",
      text: `Doamne, Dumnezeul nostru, în Care credem și al Cărui nume mai mult decât tot numele Îl chemăm, dă-ne nouă iertare sufletului și trupului, celor ce mergem spre somn; păzește-ne de toată nălucirea și, fără întunecată dulceață, potolește pornirea poftelor, stinge aprinderea zburdării trupești și ne dă în curăție a viețui cu lucrurile și cuvintele, ca, dobândind viață cu fapte bune, să nu cădem din binele Tău cel făgăduit, că binecuvântat ești în veci. Amin.`,
    },
    {
      id: "nascatoare-seara",
      title: "Rugăciunea a VI-a",
      subtitle: "Către Sfânta Născătoare de Dumnezeu",
      text: `Preacurată și binecuvântată de Dumnezeu Născătoare, Marie, Maica cea bună a Bunului Împărat, varsă mila Fiului Tău și Dumnezeului nostru spre pătimașul meu suflet și, cu rugăciunile tale, mă îndreptează spre fapte bune, ca cealaltă vreme a vieții mele fără de prihană să o trec și pentru tine raiul să dobândesc, Fecioară de Dumnezeu Născătoare, care ești una curată și binecuvântată.`,
    },
    {
      id: "inger-pazitor-seara",
      title: "Rugăciunea a VII-a",
      subtitle: "Către Sfântul Înger Păzitor",
      text: `Îngerule al lui Hristos, păzitorul meu cel sfânt și acoperitorul sufletului și al trupului meu, iartă-mi toate câte am greșit în ziua de astăzi, și de toată viclenia vrăjmașului meu celui potrivnic mă izbăvește, ca să nu mânii cu niciun păcat pe Dumnezeul meu;

și te roagă pentru mine, păcătosul și nevrednicul rob, ca să mă arăți vrednic bunătății și milei Preasfintei Treimi și Maicii Domnului meu Iisus Hristos și tuturor sfinților. Amin.`,
    },
    {
      id: "condacul-seara",
      title: "Condacul Născătoarei de Dumnezeu",
      subtitle: "Apărătoare Doamnă",
      text: `Apărătoare Doamnă, pentru biruință mulțumiri, izbăvindu-ne din nevoi, aducem ție, Născătoare de Dumnezeu, noi, robii tăi. Ci, ca aceea ce ai stăpânire nebiruită, izbăvește-ne din toate nevoile, ca să strigăm ție: Bucură-te, Mireasă, pururea fecioară.

Fecioară, care ești pururea slăvită, de Dumnezeu Născătoare, Marie, Maica lui Hristos, Dumnezeul nostru, primește rugăciunile noastre și le du Fiului tău și Dumnezeului nostru, ca să mântuiască și să lumineze, pentru tine, sufletele noastre.

Toată nădejdea mea spre tine o pun, Maica lui Dumnezeu, păzește-mă sub acoperământul tău.

De Dumnezeu Născătoare Fecioară, nu mă trece cu vederea pe mine, păcătosul, cel ce am nevoie de ajutorul tău și de folosința ta, că spre tine nădăjduiește sufletul meu, și mă miluiește.`,
    },
    {
      id: "ioanichie",
      title: "Rugăciunea Sf. Ioanichie",
      subtitle: "Treime Sfântă, slavă Ție",
      text: `Nădejdea mea este Tatăl, scăparea mea este Fiul, acoperământul meu este Duhul Sfânt, Treime Sfântă, slavă Ție.`,
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
      id: "ioan-damaschin",
      title: "Rugăciunea Sf. Ioan Damaschin",
      subtitle: "Patul ca o groapă — gândul morții",
      note: "Această rugăciune se zice arătând spre patul tău.",
      text: `Stăpâne, Iubitorule de oameni, au doară nu-mi va fi mie acest pat groapă? Sau încă vei mai lumina cu ziua ticălosul meu suflet? Iată, groapa îmi zace înainte și iată, moartea îmi stă înainte.

De judecata Ta, Doamne, mă tem, și de chinul cel fără de sfârșit; iar a face rău nu mai contenesc. Pe Tine, Domnul Dumnezeul meu, pururea Te mânii și pe Preacurata Maica Ta și pe toate puterile cerești și pe sfântul înger, păzitorul meu.

Și știu, Doamne, că nu sunt vrednic de iubirea Ta de oameni, ci vrednic sunt de toată osânda și chinul. Ci, rogu-Te, Doamne, mântuiește-mă după mulțimea bunătății Tale, că, de vei mântui pe cel drept, nu-i lucru mare, iar de vei milui pe cel curat, nu-i nicio minune, că sunt vrednici de mila Ta, ci spre mine, păcătosul, să faci minuni cu mila Ta;

întru aceasta să arăți iubirea Ta de oameni, ca să nu biruiască răutatea mea bunătatea și milostivirea Ta cea veșnică, ci, precum voiești, tocmește pentru mine lucrul.`,
    },
    {
      id: "inchinaciuni",
      title: "Închinăciunile",
      subtitle: "Cu închinăciune până la pământ",
      text: `Mă închin Ție, Preasfântă Treime, Care ești o Ființă de viață făcătoare și nedespărțită: Părinte și Fiule și Duhule Sfinte; cred întru Tine și Te mărturisesc și Te slăvesc, Îți mulțumesc și Te laud, Te cinstesc, Te preaînalț și Te rog: miluiește-mă pe mine, nevrednicul robul Tău, pentru numele Tău. (de 3 ori)

Mă închin ție, Preasfântă Născătoare de Dumnezeu, care ai arătat nouă lumina cea adevărată cu nașterea ta, împărăteasa cerului și a pământului, nădejdea celor fără de nădejde, ajutătoarea neputincioșilor și împăcarea cu Dumnezeu a tuturor păcătoșilor. Tu mă acoperă și mă apără de toate nevoile și împresurările sufletești și trupești. Și te rog să-mi fii folositoare cu preaputernicele tale rugăciuni. (o închinăciune)

Preasfântă Stăpână de Dumnezeu Născătoare, primește această puțină rugăciune și o du Fiului tău și Dumnezeului nostru, ca să mântuiască și să lumineze, pentru tine, sufletele noastre. (o închinăciune)

Toate puterile cerești: Scaunele, Domniile, Începătoriile, Stăpâniile, Puterile, Heruvimii, Serafimii, Arhanghelii și Îngerii, rugați-vă lui Dumnezeu pentru mine, păcătosul. (o închinăciune)

Sfinte și mare Proorocule Ioane, Înaintemergătorule și Botezătorule al Domnului, cel ce ai pătimit pentru Hristos și ai luat îndrăzneală către Stăpânul, roagă-te pentru mine, păcătosul, ca să mă mântuiesc cu rugăciunile tale. (o închinăciune)

Sfinților ai lui Dumnezeu: apostolilor, proorocilor, mucenicilor, arhiereilor, postitorilor, temătorilor de Dumnezeu, drepților, locuitorilor în pustie, călugărilor, patriarhilor și toți sfinții care ați pătimit pentru Hristos și ați câștigat îndrăzneală către Stăpânul, rugați-vă pentru mine, păcătosul, ca să mă mântuiesc cu rugăciunile voastre. (o închinăciune)

Sfinte Ioane Gură de Aur, cu Vasile cel Mare, cu Grigorie, de Dumnezeu cuvântătorul, și cu făcătorul de minuni Nicolae, cu toți sfinții începători ai preoției, ajutați-mi și miluiți-mă cu rugăciunile și ajutorul vostru. (o închinăciune)

Toate sfintele femei: mironosițe, mucenițe, temătoare de Dumnezeu și fecioare, care ați slujit Mântuitorului Hristos cum se cuvine, rugați pe Dumnezeu pentru mine, păcătosul. (o închinăciune)

Cea nebiruită și dumnezeiască putere a cinstitei și de viață făcătoarei Cruci a Domnului, nu mă lăsa pe mine păcătosul, ci mă apără de toată ispita cea trupească și sufletească. (o închinăciune)

Preacurată Stăpână, de Dumnezeu Născătoare, nădejdea tuturor creștinilor, pentru că altă îndrăzneală și nădejde nu am, fără numai pe tine, ceea ce ești cu totul nevinovată, Stăpâna mea și Doamnă, de Dumnezeu Născătoare, Maica lui Hristos Dumnezeului meu, pentru aceea mă rog: miluiește-mă și mă izbăvește de toate răutățile mele și roagă pe Milostivul tău Fiu și Dumnezeul meu ca să miluiască ticălosul meu suflet și să mă izbăvească de veșnicele chinuri și să mă învrednicească împărăției Sale. (o închinăciune)

Sfinte îngere, păzitorul meu, acoperă-mă cu aripile bunătății tale și izgonește de la mine toată lucrarea cea rea a diavolului și roagă pe Dumnezeu pentru mine, păcătosul.`,
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
