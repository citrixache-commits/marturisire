// ÎNDREPTAR LA SPOVEDANIE — Valeriu Gafencu (Sfântul Închisorilor)
// Transcriere INTEGRALĂ, CUVÂNT CU CUVÂNT din PDF-ul original
// Text scris în temnița comunistă, 1948-1952
// NU SE MODIFICĂ NIMIC DIN TEXTUL ORIGINAL

export interface ExamenQuestion {
  id: string;
  text: string;
}

export interface ExamenSection {
  id: string;
  title: string;
  subtitle?: string;
  intro?: string;
  subheaders?: { afterQuestionId: string; text: string }[];
  questions: ExamenQuestion[];
}

// ============ PAGINA 1 — Dedicația și epigrafele ============

export const titlu = "ÎNDREPTAR LA SPOVEDANIE";
export const autor = "Valeriu Gafencu";

export const dedicatie = {
  text: "Lui Gheorghe şi Maria cu dragoste,",
  semnatura: "Valeriu",
};

export const epigrafe = [
  {
    text: "Cel fără păcat dintre voi să arunce cel dintâi piatra asupra ei.",
    referinta: "Ioan 8, 7",
  },
  {
    text: "Adevărat, adevărat vă spun că voi veţi plânge şi vă veţi tângui, iar lumea se va bucura. Voi vă veţi întrista, dar întristarea voastră se va preface în bucurie.",
    referinta: "Ioan 16, 20",
  },
  {
    text: "S-a sculat de la Cină, S-a dezbrăcat de haine şi, luând un ştergar, S-a încins cu el. După aceea a turnat apă în vasul de spălat şi a început să spele picioarele ucenicilor şi să le şteargă cu ştergarul cu care era încins.",
    referinta: "Ioan 13, 4-5",
  },
  {
    text: "Iar la masă era rezemat la pieptul lui Iisus unul dintre ucenicii Lui, pe care-l iubea Iisus.",
    referinta: "Ioan 13, 23",
  },
  {
    text: "Poruncă nouă dau vouă: Să vă iubiţi unul pe altul. Precum Eu v-am iubit pe voi, aşa şi voi să vă iubiţi unul pe altul.",
    referinta: "Ioan 13, 34",
  },
  {
    text: "Întru aceasta vor cunoaşte toţi că sunteţi ucenicii Mei, dacă veţi avea dragoste unii faţă de alţii.",
    referinta: "Ioan 13, 35",
  },
];

// ============ Ce este păcatul (pag. 1-2) ============

export const intro = {
  title: "Ce este păcatul",
  paragraphs: [
    "Păcatul este călcarea legii lui Dumnezeu, călcare voită sau nevoită, cu ştiinţă sau fără ştiinţă, cu fapta, cu cuvântul, cu gândul.",
    "Păcatul este necinstirea adusă lui Dumnezeu, ocară, dispreţuire, defăimare, nerecunoaştere şi vătămare adusă fiinţei Dumnezeieşti, dintr-un sentiment egoist.",
    "Păcatul este necredinţă şi neîncredere în Dumnezeu, în legea Lui şi prea multă credinţă şi încredere în sine, până acolo că omul să-şi fie singur lege, pentru că de îndată ce ai călcat Legea lui Dumnezeu, ai urmat o altă lege, fie a ta, fie a diavolului.",
    'Păcatul este a doua răstignire adusă Mântuitorului, căci prin păcat se reînnoiesc toate batjocurile de altădată şi toate bătăile primite. Piroanele, suliţa, spinii, prin păcat Mântuitorul le simte din nou. Acum însă nu mai sunt bătute de cei ce-L defăimau şi strigau: "Să se răstignească, să se răstignească"... Acum îi sunt administrate de cei ce zic că cred în El, că-I urmează poruncile, că-L iubesc. Acum Îl scuipă în faţă cei ce sunt botezaţi, acum cununa de spini I-o pun cei ce se numesc creştini, acum Îi dau palmele, acum Îi bat piroanele, acum Îl împung cu suliţa, cei pentru care suferit batjocoriri şi bătăi şi pentru care Şi-a dat sângele Său pe Golgota pentru ca să-I facă fii ai lui Dumnezeu, pentru ca să le deschidă Raiul, să sfarme moartea şi să dărâme Iadul.',
    "Păcatul este îndepărtare de Dumnezeu şi în schimb apropiere de diavol, este îndepărtare de casa Tatălui şi păzire în ţară străină a porcilor diavolului.",
    "Pentru că suntem robi aceluia căruia îi slujim (Ioan 8, 34), păcatul înseamnă robia diavolului.",
    "Când păcătuieşti nu mai socoteşti ceea ce a făcut pentru tine Dumnezeu, nu-I mai eşti fiu, şi nu te gândeşti la dreptatea Lui, care va pedepsi pe cei ce păcătuiesc împotriva Voii Lui.",
    "Prin păcat toate lucrurile lui Dumnezeu sunt pornite împotriva scopului pentru care au fost făcute.",
    "Gura n-a fost făcută de Dumnezeu ca să înjurăm cu ea, să bârfim şi să blestemăm pe aproapele, ci gura a fost făcută ca, cu ea, să vorbim lucruri folositoare sufletului.",
    "Mintea nu ţi-a dat-o Dumnezeu ca, cu ajutorul ei, să găseşti argumentele care te îndepărtează de Dumnezeu, ci ca să găseşti argumentele care te apropie.",
    "Ochii nu au fost făcuţi spre a privi ceea ce aduce vătămarea sufletului, ci spre a vedea creaţiile lui Dumnezeu şi spre a-I aduce mulţumiri.",
    "Tot aşa urechile, mâinile, picioarele n-au fost create spre a ne îndepărta de Dumnezeu.",
    "Bunătatea şi îndelunga răbdare a lui Dumnezeu nu vrei să le socoteşti ca atare? Căci să ştii că tot timpul ţi s-a dat ca să câştigi raiul şi tu te pierzi socotind că El nu va mai judeca, că ne va ierta, că sunt alţii mult mai răi decât tine.",
  ],
};

// ============ Ce urmări are păcatul (pag. 2-3) ============

export const urmarilePacatului = {
  title: "Ce urmări are păcatul",
  subtitle: "Răul pricinuit de el",
  points: [
    "Prin păcat pierdem darul cel mai presus de fire ce-l avem de la Dumnezeu. Fără acest dar, sufletul rămâne slut.",
    "Prin păcat Duhul Sfânt este luat de la noi şi nu mai suntem recunoscuţi fii.",
    "Prin păcat pierdem fericirea veşnică a raiului; pierdem posibilităţile unirii cu Dumnezeu şi petrecerea împreună cu sfinţii; pierdem lumina veşnică şi odihna.",
    "Câştigăm iadul cu focul cel nestins şi cu întunericul cel ce este totdeauna.",
    "Prin păcat pierdem toate bunătăţile pe care le-am făcut înainte, căci Dumnezeu te va judeca în ceea ce te va găsi făcând.",
    "Prin păcat pierdem ajutorul lui Dumnezeu (atât cât eşti în păcat).",
  ],
};

// ============ Spovedania (pag. 3-4) ============

export const despreSpovedanie = {
  title: "Spovedania",
  intrebari: [
    "Nu plângi gândindu-te că ai pierdut Raiul?",
    "Nu te cutremură mâhnirea adusă lui Dumnezeu?",
    "Nu te înfioară Iadul?",
    "Nu cauţi să-ţi dobândeşti starea pierdută?",
    "Se mai poate ?",
    "Da! Trebuie numai să vrei ...",
  ],
  paragraphs: [
    "Dumnezeu a ştiut dintru început neputinţa noastră şi ne-a dat posibilitatea curăţirii de păcate. El a ştiut că omul cât va trăi va păcătui şi că, fără de greşeală, nimeni nu este, de aceea spunea ucenicilor Săi: Oricâte veţi lega pe pământ vor fi legate în Cer, şi oricâte veţi dezlega pe pământ vor fi dezlegate şi în Cer, cuvinte prin care se instituie şi Taina Spovedaniei.",
    "Spovedania sau pocăinţa este o baie din care sufletul scăldat iese uşurat de greutate şi curat de murdăria păcatelor, o baie în care se spală şi se pierd toate întinăciunile şi greşelile noastre.",
    "Spovedania este o doctorie care vindecă sufletul rănit de draci, o doctorie ce strică otrava păcatului.",
    "Spovedania întoarce pe păcătos de la diavol la Dumnezeu şi le pune din nou în legătură cu Făcătorul său.",
    "Spovedania însemnează aducerea sufletului la faptele şi lucrurile care sunt pentru şi după firea lui.",
    "Spovedania redă pe om curat lui Dumnezeu.",
    "Spovedania pregăteşte sufletul şi trupul pentru primirea Sf. Trupului şi Sângelui Mântuitorului nostru Iisus Hristos.",
    "Spovedeşte-te în Biserică de patru ori pe an la acelaşi Duhovnic.",
  ],
  examenConstiinta: {
    titlu: "Când îţi faci examenul de conştiinţă",
    instructie: "găseşte-te vinovat, nu te justifica; gândeşte-te la următoarele puncte:",
    puncte: [
      "Motivul sau scopul cu care sau pentru care ai păcătuit. A doua zi caută să ocoleşti momentul potrivit respectiv.",
      "Intenţia-ce ai voit de ai păcătuit.",
      "Împrejurările, ocoleşte-le a doua zi.",
      "Locul unde ai păcătuit.",
      "Cât l-ai răspândit-ai îndemnat pe alţii.",
      "Numărul...",
    ],
  },
  zdrobireaInimii: [
    "Spovedania trebuie făcută cu zdrobire de inimă şi cu părere de rău. Zdrobirea inimii este supărarea şi durerea ce ţi se pricinuieşte când îţi aduci aminte de păcat.",
    "Această durere nu stă numai în a simţi păcatul, a suspina şi a plânge pentru el, ci stă mai ales în a urî păcatul.",
    "Părerea de rău este durerea ce o simte cel ce se pocăieşte pentru că s-a lipsit de darul lui Dumnezeu şi a câştigat munca.",
    "Biserica a stabilit înainte de spovedanie să ţii un post de şapte zile sau chiar mai puţin. Bolnavii sunt scutiţi.",
    "Scrie păcatele pe hârtie şi citeşte-le singur înaintea Duhovnicului.",
    "Angajează-te în faţa lui Dumnezeu să nu le mai faci.",
  ],
};

// ============ CELE 10 PORUNCI (pag. 4-11) ============

export const cele10Porunci: ExamenSection[] = [
  {
    id: "porunca-1",
    title: "Porunca întâi",
    subtitle: "Eu sunt Domnul Dumnezeul tău, să nu ai alţi dumnezei afară de mine.",
    questions: [
      { id: "p1-1", text: "Crezi în Dumnezeu?" },
      { id: "p1-2", text: "Crezi în Sfânta Treime?" },
      { id: "p1-3", text: "Îl adori pe Dumnezeu?" },
      { id: "p1-4", text: "Îl iubeşti?" },
      { id: "p1-5", text: "Îl cunoşti? Te-ai silit spre a afla ceva despre Dumnezeu din cărţile Sfintei Scripturi, cărţile bisericeşti sau de altundeva?" },
      { id: "p1-6", text: "Nu cumva crezi în farmece?" },
      { id: "p1-7", text: "Nu ai umblat pe la ghicitori, prezicători?" },
      { id: "p1-8", text: "Nu faci spiritism?" },
      { id: "p1-9", text: "Nu crezi în vise? Crede numai în Dumnezeu." },
      { id: "p1-10", text: "Nu cumva dai mai multă cinstire unei fiinţe sau lucru decât lui Dumnezeu?" },
      { id: "p1-11", text: "Nu preţuieşti banul, mâncarea sau vinul, femeia sau bărbatul, mai mult decât pe Dumnezeu?" },
      { id: "p1-12", text: "Ai cârtit vreodată împotriva lui Dumnezeu?" },
      { id: "p1-13", text: "Nu ai deznădăjduit din cauza vreunui necaz, supărare sau orice alt rău venit asupra ta?" },
      { id: "p1-14", text: "Nu te-ai împotrivit adevărurilor şi învăţăturii creştine?" },
      { id: "p1-15", text: "Nu ai citit cărţi împotriva credinţei?" },
      { id: "p1-16", text: "Nu ai dat altuia să citească?" },
      { id: "p1-17", text: "Nu ai fost la adunările necredincioşilor?" },
      { id: "p1-18", text: "Nu ai citit cărţile şi revistele lor cu scopul aflării altui adevăr decât cel al Bisericii?" },
      { id: "p1-19", text: "Nu ai apărat necredinţa sau sectele sau mahomedanismul?" },
      { id: "p1-20", text: "Nu ai dus daruri sectarilor?" },
      { id: "p1-21", text: "Nu crezi în credinţe deşarte sau păgâneşti? Că mi-a ieşit un preot înainte îmi merge rău, mi-a ieşit un coşar îmi merge bine, mi-a ieşit cu plinul sau cu golul etc.?" },
      { id: "p1-22", text: "Este Dumnezeu centrul preocupărilor tale?" },
      { id: "p1-23", text: "Ţi-ai pus întotdeauna nădejdea în Dumnezeu?" },
      { id: "p1-24", text: "Crezi că există Rai sau Iad?" },
      { id: "p1-25", text: "Crezi că va fi Judecată?" },
      { id: "p1-26", text: "Nu te încrezi prea mult în bunătatea lui Dumnezeu şi în felul acesta nu te temi de judecată?" },
      { id: "p1-27", text: "Nu crezi că Dumnezeu nu te mai poate ierta din cauza prea multelor (tale) şi grelelor păcate?" },
      { id: "p1-28", text: "Ai cerut totdeauna ajutorul lui Dumnezeu?" },
      { id: "p1-29", text: "Ţi-ai făcut regulat rugăciunile? Seara, dimineaţa şi la prânz?" },
      { id: "p1-30", text: "La Biserică mergi regulat?" },
      { id: "p1-31", text: "La rugăciune şi în Biserică te gândeşti numai la Dumnezeu?" },
      { id: "p1-32", text: "Peste zi îţi mai aduci aminte de Dumnezeu?" },
      { id: "p1-33", text: "Mulţumiri I-ai adus lui Dumnezeu după toate faptele tale?" },
      { id: "p1-34", text: "Şi înainte de a face ceva I-ai cerut ajutorul?" },
      { id: "p1-35", text: "Rugăciunile nu le spui câteodată numai din obicei sau să te scapi?" },
      { id: "p1-36", text: "Nu te gândeşti în altă parte în timpul rugăciunii?" },
      { id: "p1-37", text: "Nu-ţi vin gânduri că nu te mai poţi mântui?" },
      { id: "p1-38", text: "Nu ai amânat pocăirea spre bătrâneţe?" },
      { id: "p1-39", text: "Nu cauţi să mergi târziu la Biserică?" },
      { id: "p1-40", text: "Asculţi slujba atent?" },
      { id: "p1-41", text: "Nu râzi, nu vorbeşti sau nu te uiţi după lume în Biserică?" },
    ],
  },
  {
    id: "porunca-2",
    title: "Porunca a doua",
    subtitle: "Să nu-ţi faci chip cioplit nici asemănarea vreunui lucru, din câte sunt în cer, pe pământ, în ape sau sub pământ, nici să te închini lor, nici să le slujeşti.",
    questions: [
      { id: "p2-1", text: "Nu cumva crezi că unii oameni sunt mari şi au valoarea pe care a avut-o Mântuitorul? Exemplu: filosofii sau şefii de religii." },
      { id: "p2-2", text: "Crezi în Sfintele Icoane?" },
      { id: "p2-3", text: "Cel de închinare le dai?" },
      { id: "p2-4", text: "Nu crezi cumva că Icoana este chiar Sfântul pe care îl zugrăveşte?" },
      { id: "p2-5", text: "Nu cumva crezi în oameni-femeia ta, bărbatul tău, copilul tău, etc?" },
      { id: "p2-6", text: "Nu te închini vreunui lucru, banului, mâncării, băuturii sau altor plăceri?" },
      { id: "p2-7", text: "Nu cumva mintea este singura ta lege şi faci numai ceea ce-ţi spune ea?" },
    ],
  },
  {
    id: "porunca-3",
    title: "Porunca a treia",
    subtitle: "Să nu iei Numele Domnului Dumnezeului tău în deşert.",
    questions: [
      { id: "p3-1", text: "Ai înjurat vreodată de Dumnezeu Tatăl sau de Mântuitorul Iisus Hristos?" },
      { id: "p3-2", text: "Ai înjurat de Îngeri, Arhangheli?" },
      { id: "p3-3", text: "Ai înjurat de Sfânta Fecioară?" },
      { id: "p3-4", text: "Ai înjurat de Sfinţi, Biserică, Paşte, Candelă, Icoane, Cruce şi altele?" },
      { id: "p3-5", text: "Ai adus numele Domnului drept mărturie mincinoasă?" },
      { id: "p3-6", text: "Ai luat altfel de mărturii: ochii tăi, viaţa ta, mântuirea sufletului tău? Căci Mântuitorul a zis: Vorba ta să fie da şi nu; căci ce e mai mult vine de la diavol." },
      { id: "p3-7", text: "Ai drăcuit? Ai trimis pe alţii la dracu sau pe tine?" },
      { id: "p3-8", text: "Ai obiceiul să blestemi pe cei ce-ţi fac rău? Mântuitorul ne-a învăţat să ne rugăm pentru ei." },
      { id: "p3-9", text: "Jurământ fals ai depus?" },
      { id: "p3-10", text: "Dar jurământ adevărat?" },
      { id: "p3-11", text: 'Nu întrebuinţezi ca jurământ formula "zău", care este prescurtarea lui "pe Dumnezeul meu"?' },
    ],
  },
  {
    id: "porunca-4",
    title: "Porunca a patra",
    subtitle: "Adu-ţi aminte de Ziua Domnului, şase zile să lucrezi, iar a şaptea să o serbezi.",
    intro: "Ziua Domnului este Duminica. Aceeaşi valoare o au şi toate sărbătorile instituite de Sfânta Biserică, de peste an.",
    questions: [
      { id: "p4-1", text: "Ţinut-ai toate Duminicile şi sărbătorile?" },
      { id: "p4-2", text: "Fost-ai în toate aceste zile la Biserică?" },
      { id: "p4-3", text: "Cei din casa ta le-au ţinut, au fost la Sf. Biserică, nu i-ai oprit pentru vreun lucru?" },
      { id: "p4-4", text: "Altora nu le-ai dat de lucru în aceste zile? Nu mergi prea târziu la Biserică?" },
      { id: "p4-5", text: "Ziua Domnului o serbezi cum trebuie? Sau e pentru tine o zi obişnuită sau o zi de chefuri şi petreceri? Dimineaţa mergi la Biserică? După masă citeşti cărţi folositoare, ziditoare de suflet?" },
      { id: "p4-6", text: "Te îngrijeşti de suflet mai mult în această zi decât în altele?" },
      { id: "p4-7", text: "Nu ai făcut sau ai participat la clăci?" },
      { id: "p4-8", text: "Nu te porţi cu necuviinţă în Biserică?" },
      { id: "p4-9", text: "Nu ai hulit Biserica şi pe slujitorii Sf. Altar?" },
      { id: "p4-10", text: "Pe preoţi îi cinsteşti ca pe slujitorii lui Dumnezeu? Nu-i batjocoreşti? Nu-i bârfeşti spunându-le păcatele?" },
      { id: "p4-11", text: "Te rogi pentru ei? Îi asculţi?" },
    ],
  },
  {
    id: "porunca-5",
    title: "Porunca a cincea",
    subtitle: "Cinsteşte pe tatăl tău şi pe mama ta ca să-ţi fie ţie bine şi să trăieşti ani mulţi.",
    subheaders: [
      { afterQuestionId: "p5-22", text: "De eşti părinte" },
      { afterQuestionId: "p5-29", text: "De eşti tutore" },
      { afterQuestionId: "p5-30", text: "De eşti stăpân" },
      { afterQuestionId: "p5-34", text: "De eşti slugă" },
    ],
    questions: [
      { id: "p5-1", text: "Nu ţi-ai bătut părinţii sau socrii?" },
      { id: "p5-2", text: "Nu i-ai înjurat sau persecutat?" },
      { id: "p5-3", text: "Ai ascultat sfaturile lor?" },
      { id: "p5-4", text: "Nu i-ai înşelat cu ceva?" },
      { id: "p5-5", text: "Nu le-ai speculat buna credinţă?" },
      { id: "p5-6", text: "Când au fost în necazuri i-ai ajutat?" },
      { id: "p5-7", text: "Slujbe după moarte le-ai făcut?" },
      { id: "p5-8", text: "Fraţii, surorile, le-ai ajutat?" },
      { id: "p5-9", text: "Ai purtat grijă de soţie, de copii? Căci Sf. Pavel zice: Dacă nu poartă cineva grijă de ai lui şi mai ales de cei din casa sa, s-a lepădat de credinţă şi este mai rău decât un necredincios. (1 Timotei 5, 8)" },
      { id: "p5-10", text: "Nu ţi-ai bătut soţia? Nu te-ai purtat rău cu ea? N-ai înjurat-o?" },
      { id: "p5-11", text: "Soţul ţi l-ai cinstit? Soţia sau soţul ţi-ai iubit ca pe tine însuţi?" },
      { id: "p5-12", text: "Nu ţi-ai înşelat soţul sau soţia?" },
      { id: "p5-13", text: "Nu i-ai făcut viaţa mai grea? Nu eşti cicălitor?" },
      { id: "p5-14", text: "De cele sufleteşti ale celor din casa ta te-ai îngrijit suficient?" },
      { id: "p5-15", text: "Cum te-ai purtat cu părinţii sufleteşti? Naşi, profesori, preoţi? I-ai respectat şi i-ai ajutat?" },
      { id: "p5-16", text: "Nu ai fost obraznic sau încăpăţânat cu părinţii?" },
      { id: "p5-17", text: "Nu i-ai supărat? Mâniat?" },
      { id: "p5-18", text: "Nu i-ai vorbit de rău, batjocorit?" },
      { id: "p5-19", text: "Nu ai râs de neputinţele lor?" },
      { id: "p5-20", text: "Ai luat seama să-şi facă datoriile religioase?" },
      { id: "p5-21", text: "Nu te-ai ruşinat de ei?" },
      { id: "p5-22", text: "Nu ţi-ai cheltuit banii pe lucruri nefolositoare (tutun sau alte plăceri) şi în felul acesta ai lipsit familia de cele trebuitoare?" },
      { id: "p5-23", text: "Ai îndreptat pe copii tăi pe drumul Bisericii, cu fapta şi cu cuvântul?" },
      { id: "p5-24", text: "Nu le-ai dat exemplul tău de certuri, beţii, vorbe porcoase, minciună, furt, necinste, clevetire, lene?" },
      { id: "p5-25", text: "Nu cumva trăieşti în concubinaj şi copiii văd acest lucru?" },
      { id: "p5-26", text: "Pentru faptele rele: certuri, minciună, bătaie, furt, i-ai pedepsit? Nu cumva din milă i-ai cruţat?" },
      { id: "p5-27", text: "Pentru copiii tăi, soţie, soţ, fraţi, surori, părinţi, ai făcut rugăciuni?" },
      { id: "p5-28", text: "Nu ai fost prea aspru, sau prea blând cu copiii tăi?" },
      { id: "p5-29", text: "Slugi rele care să înveţe copiii lucruri stricăcioase de suflet nu ai ţinut?" },
      { id: "p5-30", text: "Ţi-ai îndeplinit toate îndatoririle materiale şi morale faţă de copil?" },
      { id: "p5-31", text: "Cum te-ai purtat cu servitorii sau ucenicii tăi?" },
      { id: "p5-32", text: "Le-ai plătit leafa cinstit, nu le-ai reţinut pentru cine ştie ce motive?" },
      { id: "p5-33", text: "I-ai îndemnat să-şi facă datoriile religioase?" },
      { id: "p5-34", text: "Nu i-ai îndemnat să facă vreun păcat?" },
      { id: "p5-35", text: "Ai ascultat stăpânii, patronii etc.?" },
      { id: "p5-36", text: "Ţi-ai îndeplinit cu hărnicie toate datoriile?" },
      { id: "p5-37", text: "Nu le-ai lucrat de mântuială?" },
      { id: "p5-38", text: "Nu le-ai furat ceva?" },
      { id: "p5-39", text: "Nu le-ai povestit casa?" },
    ],
  },
  {
    id: "porunca-6",
    title: "Porunca a şasea",
    subtitle: "Să nu ucizi",
    questions: [
      { id: "p6-1", text: "Nu cumva ai ucis vreodată cu voie sau fără voie?" },
      { id: "p6-2", text: "Nu doreşti să ucizi, nu ai gânduri de răzbunare? Ai lăudat pe cineva care a omorât?" },
      { id: "p6-3", text: "Nu doreşti moartea cuiva, fie pentru a-i lua averea, femeia, bărbatul etc?" },
      { id: "p6-4", text: "Nu ai bătut pe cineva?" },
      { id: "p6-5", text: "Nu ai ameninţat?" },
      { id: "p6-6", text: "Nu urăşti pe cineva, eşti împăcat cu toţi cunoscuţii?" },
      { id: "p6-7", text: "Doreşti rău cuiva, moarte, pagubă?" },
      { id: "p6-8", text: "Te bucuri de răul ce se întâmplă semenului?" },
      { id: "p6-9", text: "Cum te porţi cu cei din jur?" },
      { id: "p6-10", text: "De eşti bărbat ai admis lepădarea de copii?" },
      { id: "p6-11", text: "De eşti femeie, nu ai lepădat prunc cu voie?" },
      { id: "p6-12", text: "Nu ai căutat să te sinucizi direct sau indirect?" },
      { id: "p6-13", text: "Ai făcut vânătoare?" },
    ],
  },
  {
    id: "porunca-7",
    title: "Porunca a şaptea",
    subtitle: "Să nu preacurveşti.",
    intro: "Curvie face cel necăsătorit; preacurvie cel căsătorit.",
    questions: [
      { id: "p7-1", text: "Nu ai curvit sau de eşti căsătorit n-ai preacurvit?" },
      { id: "p7-2", text: "Nu trăieşti în concubinaj?" },
      { id: "p7-3", text: "Nu păcătuieşti împotriva firii: onanie sau homosexualitate?" },
      { id: "p7-4", text: "Nu cumva pofteşti să curveşti cu bărbatul sau femeia altuia?" },
      { id: "p7-5", text: "Nu cauţi prilej de curvie?" },
      { id: "p7-6", text: "La lucruri ruşinoase nu te gândeşti prea mult?" },
      { id: "p7-7", text: "Nu cauţi să-ţi aduci aminte de asemenea scene?" },
      { id: "p7-8", text: "Nu vrei să vezi părţile ruşinoase ale corpului?" },
      { id: "p7-9", text: "Nu vorbeşti lucruri ruşinoase?" },
      { id: "p7-10", text: "Nu ai citit cărţi care să-ţi producă plăceri sexuale?" },
      { id: "p7-11", text: "Nu ai îndemnat pe altul să facă acest păcat?" },
      { id: "p7-12", text: "Nu ai făcut pe altul să păcătuiască prin îmbrăcăminte sau gătire?" },
    ],
  },
  {
    id: "porunca-8",
    title: "Porunca a opta",
    subtitle: "Să nu furi.",
    intro: "Preotul nu poate ierta furtul neînapoiat; deci să restitui ceea ce ai furat şi apoi spovedeşte-te.",
    questions: [
      { id: "p8-1", text: "N-ai furat bani sau alte obiecte de la stat, societate sau vreun om?" },
      { id: "p8-2", text: "N-ai păgubit pe alţii?" },
      { id: "p8-3", text: "Pe cel păgubit l-ai despăgubit?" },
      { id: "p8-4", text: "De averea altuia, încredinţată ţie, ai avut destulă grijă?" },
      { id: "p8-5", text: "Bani sau alte obiecte pe care le-ai luat împrumut, le-ai restituit?" },
      { id: "p8-6", text: "Ai primit lucruri furate?" },
      { id: "p8-7", text: "Lucrurile găsite le-ai dat înapoi?" },
      { id: "p8-8", text: "N-ai schimbat hotarele pământului cu vecinul tău?" },
      { id: "p8-9", text: "N-ai îndemnat pe altul să facă acest lucru?" },
      { id: "p8-10", text: "N-ai luat dobândă prea mare?" },
      { id: "p8-11", text: "N-ai falsificat vreo marfă, n-ai vândut-o ca marfă bună?" },
      { id: "p8-12", text: "La cântar sau socoteală n-ai înşelat?" },
      { id: "p8-13", text: "N-ai luat de la cel mai mic decât tine lucruri cu de-a sila?" },
      { id: "p8-14", text: "N-ai luat mită?" },
      { id: "p8-15", text: "N-ai învăţat copiii să fure?" },
      { id: "p8-16", text: "N-ai gânduri de îmbogăţire pe căi necinstite?" },
    ],
  },
  {
    id: "porunca-9",
    title: "Porunca a noua",
    subtitle: "Să nu mărturiseşti strâmb împotriva aproapelui.",
    questions: [
      { id: "p9-1", text: "N-ai jurat strâmb?" },
      { id: "p9-2", text: "N-ai minţit?" },
      { id: "p9-3", text: "N-ai adus mărturii mincinoase?" },
      { id: "p9-4", text: "Te-ai purtat corect cu semenul tău?" },
      { id: "p9-5", text: "Nu l-ai minţit?" },
      { id: "p9-6", text: "Nu cumva ai purtat minciuni?" },
      { id: "p9-7", text: "Nu cumva ai umblat cu poveşti de la unul la altul?" },
    ],
  },
  {
    id: "porunca-10",
    title: "Porunca a zecea",
    subtitle: "Să nu pofteşti şi să nu doreşti nimic, din ceea ce vezi că are fratele tău.",
    questions: [
      { id: "p10-1", text: "Dorit-ai femeia, fiica, bărbatul sau fiul aproapelui tău?" },
      { id: "p10-2", text: "Dorit-ai averea vecinului?" },
      { id: "p10-3", text: "Nu ai dorit starea socială a celui mai mare ca tine?" },
      { id: "p10-4", text: "N-ai urât din această cauză pe vecin?" },
      { id: "p10-5", text: "N-ai dorit casa, sau pământul, sau vita, sau lucrul fratelui tău?" },
    ],
  },
];

// ============ CELE ŞAPTE PĂCATE DE MOARTE (pag. 11-15) ============

export const cele7PacateDeMoarte: ExamenSection[] = [
  {
    id: "mandria",
    title: "Mândria",
    intro: "Este izvorul tuturor răutăţilor sufleteşti; ea este o lăcomie spirituală pentru care şi dracii au căzut din darul lui Dumnezeu.",
    questions: [
      { id: "m-1", text: "Nu eşti mândru, fălos, închipuit?" },
      { id: "m-2", text: "Nu crezi prea mult în frumuseţea sau averea ta, nu te-ai mândrit cu ele?" },
      { id: "m-3", text: "Cum te porţi cu cei mari?" },
      { id: "m-4", text: "Nu dispreţuieşti pe nimeni?" },
      { id: "m-5", text: "Stai de vorbă cu oricine?" },
      { id: "m-6", text: "Nu eşti făţarnic, ipocrit (una spui, alta faci)?" },
      { id: "m-7", text: "Nu te-ai lăudat prin fapte, vorbe, îmbrăcăminte?" },
      { id: "m-8", text: "Nu ai vorbit ceva spre a fi lăudat?" },
      { id: "m-9", text: "Nu ai clevetit pe aproapele ca să-i înjoseşti cinstea şi vrednicia şi spre a te ridica pe tine?" },
      { id: "m-10", text: "Ai răbdat ocara celui ce te-a ocărât?" },
      { id: "m-11", text: "Ai iertat pe cei ce s-au supărat pe tine?" },
      { id: "m-12", text: "Nu te-ai mândrit cu ştiinţa, cu cunoştinţele tale?" },
    ],
  },
  {
    id: "lacomia",
    title: "Lăcomia",
    intro: "Din abstract, egoismul se concretizează prin lăcomie. Din acest punct de vedere priveşte Sf. Apostol Pavel când zice că lăcomia este rădăcina tuturor răutăţilor.",
    questions: [
      { id: "l-1", text: "Nu eşti lacom la mâncare sau băutură?" },
      { id: "l-2", text: "Nu vrei să strângi avere sau alte lucruri?" },
      { id: "l-3", text: "În strângerea de bani nu eşti lacom, n-ai înşelat pe aproapele tău din această cauză?" },
      { id: "l-4", text: "Nu ai mâncat sau ai băut pe ascuns?" },
      { id: "l-5", text: "Ai mâncat în sărbători înainte de Sf. Liturghie?" },
      { id: "l-6", text: "Ai mâncat mortăciuni?" },
    ],
  },
  {
    id: "lenea",
    title: "Lenea",
    intro: "Este lipsa de întrebuinţare a puterilor trupeşti şi sufleteşti pe care Dumnezeu ni le-a dăruit ca să le folosim în viaţa noastră",
    questions: [
      { id: "len-1", text: "Nu eşti leneş?" },
      { id: "len-2", text: "Nu pierzi timpul fără să lucrezi?" },
      { id: "len-3", text: "Nu te ocupi cu lucruri rele sau deşarte (gătirea trupului etc.)?" },
      { id: "len-4", text: "Rugăciunea o faci regulat?" },
      { id: "len-5", text: "De suflet te îngrijeşti?" },
      { id: "len-6", text: "Datoria ca funcţionar, lucrător, servitor, ţi-o faci?" },
      { id: "len-7", text: "Nu obligi pe cei mai mici să facă lucrul tău?" },
      { id: "len-8", text: "Nu ai căutat duhovnic mai iertător?" },
      { id: "len-9", text: "Ţi-ai îndeplinit canonul?" },
    ],
  },
  {
    id: "mania",
    title: "Mânia",
    intro: "Se întemeiază tot pe pivotul lăcomiei. Când omul nu-şi poate îndeplini poftele sale, se înfurie căci este împiedicat de la scopul său cel rău. Omul se poate mânia numai contra păcatului.",
    questions: [
      { id: "man-1", text: "N-ai făcut rele în mânie, înjurături, bătăi, etc.?" },
      { id: "man-2", text: "Te mânii des? Cât te ţine? Ştii că Sf. Pavel a spus: Soarele să nu apună este mânia voastră (Efeseni 4, 26) ?" },
      { id: "man-3", text: "Acum eşti supărat pe cineva?" },
      { id: "man-4", text: "Ai bătut pe cineva cu bâta, cu palma?" },
      { id: "man-5", text: "N-ai supărat sau mustrat pe cineva fără temei, cu răutate?" },
      { id: "man-6", text: "Ai dorit răul celui ce ţi-a făcut rău? Dar celui ce ţi-a făcut bine?" },
      { id: "man-7", text: "Nu te-ai mâniat pe vecin pe motivul că e mai bun decât tine? Nu l-ai invidiat? Nu-ţi pare rău?" },
      { id: "man-8", text: "Nu ai vărsat sângele cuiva (în beţie)?" },
      { id: "man-9", text: "Nu te-ai bătut la duel?" },
      { id: "man-10", text: "Nu te-ai rugat (în mânie) să vină răul asupra vrăjmaşilor tăi?" },
    ],
  },
  {
    id: "zgarcenia",
    title: "Zgârcenia",
    intro: "Este materială şi spirituală. Materială este atunci când omul nu voieşte să mângâie trupeşte pe cel sărac, iar spirituală când nu voieşte să îndrumeze pe cel neştiutor din răutate.",
    questions: [
      { id: "z-1", text: "Eşti zgârcit?" },
      { id: "z-2", text: "N-ai lipsit de cele necesare pe un vecin din zgârcenie?" },
      { id: "z-3", text: "Ai ajutat pe sărac?" },
      { id: "z-4", text: "La masă ai chemat săraci sau bogaţi? Ştii că Mântuitorul ne îndeamnă să chemăm la masă pe cei ce nu ne pot chema înapoi." },
      { id: "z-5", text: "Nu vinzi prea scump?" },
      { id: "z-6", text: "Nu înşeli?" },
      { id: "z-7", text: "Nu-ţi pare rău că ai făcut vreun bine?" },
      { id: "z-8", text: "Nu cumva mănânci puţin, te îmbraci prost (pe tine şi pe ai tăi) spre a te îmbogăţi?" },
      { id: "z-9", text: "Nu cumva nu te îngrijeşti de sănătatea alor tăi, copii, soţie, părinţi, fraţi, spre a nu cheltui bani?" },
    ],
  },
  {
    id: "invidia",
    title: "Invidia (cearta sau pizma)",
    intro: "Când cel furios nu poate birui cu mânia lui piedicile care i se opun, şi neputând să facă altceva, se îndulceşte cu inima în patima invidiei, ca să acopere cinstea şi vrednicia sufletească şi trupească a aproapelui şi să se înalţe el.",
    questions: [
      { id: "i-1", text: "Eşti certat cu cineva?" },
      { id: "i-2", text: "Îţi place să te cerţi?" },
      { id: "i-3", text: "Urăşti pe cineva?" },
      { id: "i-4", text: "Batjocoreşti?" },
      { id: "i-5", text: "Sfaturi viclene dai?" },
      { id: "i-6", text: "Acum ai pe cineva invidie?" },
      { id: "i-7", text: "Vorbeşti cu toată lumea?" },
      { id: "i-8", text: "Ai poreclit pe cineva?" },
      { id: "i-9", text: "Nu ai băgat vrajbă între fraţi?" },
      { id: "i-10", text: "Nu porţi pizmă pe cineva pentru faptul că e mai bun ca tine sau se bucură de mai multă cinste, avere, situaţie socială etc.?" },
    ],
  },
  {
    id: "desfranarea",
    title: "Desfrânarea (Curvia)",
    intro: "Este tot o lăcomie, dar nu de ordin material sau spiritual, ci de ordin sentimental. Păcatul curviei, ca nici un alt păcat, se face în trup. Trupul e templul Duhului Sfânt. (Poţi face desfrânare privind sau auzind lucruri care te-ar face să păcătuieşti. Chiar mâncând, dormind prea mult, vorbind etc.)",
    questions: [
      { id: "d-1", text: "Ai căzut în curvie?" },
      { id: "d-2", text: "Dar preacurvie?" },
      { id: "d-3", text: "Nu cumva îţi place să vezi sau să citeşti cărţi care te fac să păcătuieşti cu gândul, nu cumva îţi place să asculţi sau să vorbeşti vorbe porcoase sau de ruşine? Să ştii că Sf. Pavel ne spune să nu se audă din gura noastră nici vorbe spurcate sau porcoase, nici glume proaste care nu sunt cuviincioase, nici vorbe nechibzuite." },
      { id: "d-4", text: "Nu cumva îţi place să vorbeşti cu rost sau fără rost?" },
      { id: "d-5", text: "Nu te stăpâneşte nici o patimă?" },
      { id: "d-6", text: "Nu mănânci sau dormi prea mult? Ştii că tot Sf. Pavel a spus: Toate îmi sunt îngăduite, dar nu toate îmi sunt de folos (1 Cor 6, 12)." },
      { id: "d-7", text: "Nu ai în casă tablouri cu chipuri goale? Nu le priveşti cu patimă?" },
      { id: "d-8", text: "N-ai curvit cu rudenii de sânge sau cu cele spirituale (fină, naşe)?" },
      { id: "d-9", text: "N-ai pipăit trupul altuia cuprins de patima desfrânării?" },
      { id: "d-10", text: "N-ai vrut să vezi părţile ruşinoase ale corpului?" },
    ],
  },
];

// ============ PĂCATE STRIGĂTOARE LA CER (pag. 15-16) ============

export const pacateStrigatoareLaCer: ExamenSection[] = [
  {
    id: "uciderea",
    title: "A. Uciderea cu voie",
    questions: [
      { id: "uc-1", text: "Ai ucis pe cineva?" },
      { id: "uc-2", text: "Ai căutat să ucizi?" },
      { id: "uc-3", text: "Vrei să ucizi pe cineva?" },
      { id: "uc-4", text: "Vrei să te răzbuni luând viaţa cuiva?" },
      { id: "uc-5", text: "Ai bătut pe cineva?" },
      { id: "uc-6", text: "Ai certat, ai ameninţat pe cineva?" },
    ],
  },
  {
    id: "sodomia",
    title: "B. Sodomia (împreunare împotriva firii)",
    questions: [
      { id: "so-1", text: "Bărbat cu bărbat sau orice fel de animal?" },
      { id: "so-2", text: "Bărbat cu femeie împotriva firii?" },
      { id: "so-3", text: "Onania. Ai făcut onanie?" },
    ],
  },
  {
    id: "oprirea-pensiei",
    title: "B. Oprirea pensiei sau simbriei la orfani, văduve, muncitori, salariaţi sau servitori",
    questions: [
      { id: "op-1", text: "Ai oprit pensiile sau salariile? Din orice motiv, fie ca despăgubire pentru un lucru stricat, fie din alte motive?" },
      { id: "op-2", text: "Reţineri parţiale sau nedrepte ai făcut?" },
      { id: "op-3", text: "Ai plătit totdeauna pentru ceea ce ţi-au lucrat alţii?" },
    ],
  },
  {
    id: "asuprirea",
    title: "B. Asuprirea văduvelor, orfanilor, invalizilor şi neputincioşilor",
    questions: [
      { id: "as-1", text: "N-ai bătut copiii, bătrânii sau orfanii?" },
      { id: "as-2", text: "Nu ţi-ai bătut joc de ei?" },
      { id: "as-3", text: "N-ai asuprit pe cel mai mic decât tine?" },
      { id: "as-4", text: "N-ai râs de ologi sau neputincioşi?" },
      { id: "as-5", text: "Nu i-ai necăjit?" },
      { id: "as-6", text: "Nu cumva ai avut datoria să-i ajuţi şi nu i-ai ajutat?" },
      { id: "as-7", text: "Pe cei ce nu ai avut datoria i-ai ajutat sau ai trecut pe lângă ei ca preotul şi levitul din Evanghelia cu Samariteanul milostiv?" },
      { id: "as-8", text: "Pe orb l-ai făcut să cadă conducându-l rău?" },
      { id: "as-9", text: "De orice neputincios, surd, gângav, şchiop, ciung, chior nu ţi-ai bătut joc?" },
    ],
  },
];

// ============ DATORII FAŢĂ DE VIAŢA SUFLETEASCĂ A APROAPELUI (pag. 16) ============

export const datoriiSuflet: ExamenSection = {
  id: "datorii-suflet",
  title: "DATORII FAŢĂ DE VIAŢA SUFLETEASCĂ A APROAPELUI",
  questions: [
    { id: "ds-1", text: "A feri pe altul de a păcătui. Ai ferit sau nu?" },
    { id: "ds-2", text: "A învăţa pe cei neştiutori." },
    { id: "ds-3", text: "A da un sfat bun celui ce are nevoie." },
    { id: "ds-4", text: "A ne ruga lui Dumnezeu pentru alţii." },
    { id: "ds-5", text: "A mângâia pe cei întristaţi." },
    { id: "ds-6", text: "A suferi cu răbdare când suntem nedreptăţiţi." },
    { id: "ds-7", text: "A ierta greşelile altora." },
  ],
};

// ============ PORUNCI PRIVITOARE LA VIAŢA TRUPEASCĂ A APROAPELUI (pag. 16) ============

export const datoriiTrup: ExamenSection = {
  id: "datorii-trup",
  title: "PORUNCI PRIVITOARE LA VIAŢA TRUPEASCĂ A APROAPELUI",
  questions: [
    { id: "dt-1", text: "A da hrană celui flămând. Ai dat sau nu?" },
    { id: "dt-2", text: "A potoli setea celui însetat." },
    { id: "dt-3", text: "A îmbrăca pe cel gol." },
    { id: "dt-4", text: "A îngriji pe cel bolnav." },
    { id: "dt-5", text: "A primi şi ospăta pe streini." },
    { id: "dt-6", text: "A cerceta pe cei din închisori." },
    { id: "dt-7", text: "A îngropa pe cei morţi." },
  ],
};

// ============ PĂCATE STREINE (pag. 16-17) ============

export const pacateStreine: ExamenSection = {
  id: "pacate-streine",
  title: "PĂCATE STREINE",
  questions: [
    { id: "ps-1", text: "Când sfătuieşti pe altul să păcătuiască." },
    { id: "ps-2", text: "Când porunceşti altuia să păcătuiască." },
    { id: "ps-3", text: "Când te învoieşti cu altul la păcat." },
    { id: "ps-4", text: "Când ajuţi pe altul să păcătuiască." },
    { id: "ps-5", text: "Când lauzi pe cel ce face păcatul." },
    { id: "ps-6", text: "Când poţi, dar nu voieşti să împiedici pe altul de a face păcatul." },
    { id: "ps-7", text: "Când ştii şi nu spui păcatul altuia (să i-l spui)" },
  ],
};

// ============ PĂCATE ÎMPOTRIVA DUHULUI SFÂNT (pag. 17) ============

export const pacateDuhulSfant: ExamenSection = {
  id: "duhul-sfant",
  title: "PĂCATE ÎMPOTRIVA DUHULUI SFÂNT",
  questions: [
    { id: "du-1", text: "Nesocotirea harului lui Dumnezeu şi încrederea prea mare în tine. a. Să crezi că Dumnezeu n-are putere să te ierte, e un păcat foarte mare. b. Să crezi că tu eşti totul şi Dumnezeu n-are nici o putere în lume." },
    { id: "du-2", text: "Neîncrederea în Dumnezeu." },
    { id: "du-3", text: "Împotrivirea la Adevărul stabilit de Sfânta Biserică (să nu crezi în vreo dogmă)." },
    { id: "du-4", text: "Lepădarea de Biserica Ortodoxă. Fereşte-te de aceste păcate, căci Mântuitorul spune: Dar cine va huli împotriva Duhului Sfânt nu are iertare în veac, ci este vinovat de osânda veşnică (Marcu, 3, 29)." },
  ],
};

// ============ CELE 9 PORUNCI BISERICEŞTI (pag. 17) ============

export const celeNouaPoruciBisericesti = [
  "Cercetarea Sfintei Biserici în toate Duminicile şi sărbătorile legale.",
  "Păzirea celor patru posturi din an.",
  "Respectul faţă de feţele bisericeşti.",
  "Mărturisirea păcatelor în cele patru posturi.",
  "A ne feri de eretici.",
  "A ne ruga pentru conducătorii statului şi dregătorii Bisericii.",
  "A nu face nuntă, petreceri, în post.",
  "A feri Biserica de a i se înstrăina lucrurile.",
  "A păzi posturile şi a face rugăciunile pe care chiriarhul (episcopul) locului le pune în vremuri grele.",
];

// ============ DIFERITE PĂCATE (pag. 17-18) ============

export const diferitePacate: ExamenSection[] = [
  {
    id: "neindeplinirea-angajamentelor",
    title: "Neîndeplinirea angajamentelor:",
    questions: [
      { id: "ang-1", text: "ai îndeplinit pe cele luate în faţa lui Dumnezeu, a ta, a aproapelui?" },
      { id: "ang-2", text: "ai îndeplinit canonul dat la Spovedanie?" },
    ],
  },
  {
    id: "furtisag-de-cele-sfinte",
    title: "Furtişag de cele sfinte:",
    questions: [
      { id: "fs-1", text: "ai minţit la Spovedanie?" },
      { id: "fs-2", text: "ai ocolit să spui tot şi din ce motive?" },
    ],
  },
];

// ============ SFATURI (pag. 18) ============

export const sfaturiFinale = [
  "Spovedeşte-te de cel puţin patru ori pe an în posturi.",
  "Posteşte înainte de spovedanie.",
  "Păstrează acelaşi duhovnic.",
  "Fă-ţi un serios examen de conştiinţă înainte de a merge la spovedanie.",
  "Scrie pe hârtie păcatele, altfel le poţi uita. Apoi arde hârtia imediat.",
  "Mărturiseşte singur nu numai păcatele făcute ci şi (pe) cele din inimă.",
  "Nu ascunde nici un păcat.",
  "Împacă-te cu cel ce ţi-a greşit.",
  "Ocoleşte prilejul de păcătuire.",
  "Părăseşte păcatul - angajează-te că nu vei mai păcătui.",
  "Regretă păcatele făcute.",
  "Fereşte-te pe cât poţi de ele.",
  "Cuminecă-te numai dacă te simţi curat. Altfel vei fi osândit.",
  "Îndeplineşte cu sfinţenie canonul dat de duhovnic.",
  "Judecă-te singur pentru fiecare păcat făcut.",
];

// ============ ÎNCHIDERE — cuvântul lui Valeriu (pag. 18-19) ============

export const inchidere = {
  meditatie: "Fiecare dintre noi avem o menire, dar trebuie să stăm sub povaţa duhovnicului, care înlătură voia nepricepută, făcând loc voii lăsată de Dumnezeu în fiecare dintre noi. Duhovnicul dezvăluie intenţiile lui Dumnezeu în noi. Dacă nu stăm sub povaţa duhovnicului putem să intrăm în rătăciri mai mari ca patimile.",
  prietenie: "Îl simt prieten pe fiecare suflet care-mi trimite un singur gând de iubire. Şi doresc şi rog ca fiecare prieten să copieze acest îndreptar la spovedanie.",
  semnatura: "Am scris, cum am putut, în toată graba, din dorinţa curată de a vă trimite acest îndreptar la spovedanie.",
  salut: "Cu toată dragostea, Valeriu.",
  sfarsit: "Sfârşit şi lui Dumnezeu Slavă!",
};

// ============ Agregare pentru examen interactiv ============

export const toateSectiunile: ExamenSection[] = [
  ...cele10Porunci,
  ...cele7PacateDeMoarte,
  ...pacateStrigatoareLaCer,
  datoriiSuflet,
  datoriiTrup,
  pacateStreine,
  pacateDuhulSfant,
  ...diferitePacate,
];

export const totalIntrebari = toateSectiunile.reduce((sum, s) => sum + s.questions.length, 0);
export const totalSectiuni = toateSectiunile.length;
