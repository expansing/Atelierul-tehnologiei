/* Atelierul Tehnologiei - Lecții Nivelurile 9-12 */
const LESSONS_D = [
/* ==================== NIVELUL 9 ==================== */
{
  id: "9.1", level: 9, num: 1, title: "Parole, password manager, MFA", icon: "🔑", duration: "50 min",
  objectives: [
    "Să explice ce face o parolă slabă și una puternică",
    "Să folosească un password manager și să înțeleagă de ce",
    "Să activeze MFA (autentificare în 2 pași) pe un cont real"
  ],
  explanation: [
    "O parolă este o dovadă secretă folosită pentru autentificare, adică verificarea că un cont este accesat de persoana autorizată. O parolă bună este lungă, unică și greu de ghicit. Un password manager este un seif criptat care generează și păstrează parole; parola principală deschide seiful și nu se împărtășește.",
    "Analogia este un breloc cu chei diferite pentru fiecare ușă: dacă o cheie cade, celelalte uși rămân încuiate. Reutilizarea produce credential stuffing, adică încercarea automată a aceleiași perechi email-parolă pe multe servicii. MFA, autentificarea cu mai mulți factori, adaugă o a doua dovadă, precum o aplicație sau o cheie de securitate.",
    "Exemplu pas cu pas: 1) alegem un cont de test al familiei, 2) managerul generează o parolă unică, 3) o salvează criptat, 4) conectarea cere parola, 5) MFA cere o confirmare separată, 6) verificăm că sesiunea este pe domeniul oficial. Codul MFA și codurile de recuperare rămân secrete și nu apar în jurnal, capturi sau chat.",
    "Greșeala este confundarea lungimii cu o parolă publică sau aprobarea unei cereri MFA venite prin telefon. MFA reduce riscul, dar nu repară phishingul, conturile compromise sau dispozitivele infectate. Activăm și schimbăm setări doar cu proprietarul contului și adultul prezent; în lecție folosim exemple fictive și nu tastăm secrete reale în activități.",
    "Demo-ul „Detectivul parolelor” compară lungimea, reutilizarea, MFA și locul de stocare. Pentru fiecare întrebare, leagă răspunsul de modelul brelocului și apoi arată în experiment unde apare parola, unde apare a doua dovadă și unde nu trebuie să apară niciun secret."
  ],
  demo: {
    type: "quiz",
    title: "Detectivul parolelor",
    questions: [
      { q: "Care parolă e cea mai sigură?", opts: ["Q!w8#e2r", "tigru-albastru-alearga-42-zile"], correct: 1, why: "Lungimea bate complexitatea! 30 de caractere lizibile > 8 caractere criptice. Și e ușor de ținut minte." },
      { q: "Magazinul unde ai cont a fost spart. Care e pericolul real?", opts: ["Doar contul de magazin e afectat", "Toate conturile cu aceeași parolă sunt în pericol"], correct: 1, why: "Hoții încearcă automat perechea email+parolă pe sute de site-uri. Parolele unice oprește lanțul." },
      { q: "Ce face MFA (autentificarea în 2 pași)?", opts: ["Cere parola de două ori", "Cere o a doua dovadă (telefon/cod) pe lângă parolă"], correct: 1, why: "Chiar dacă parola e furată, hoțul nu are și telefonul tău. Al doilea lacăt salvează ziua." },
      { q: "Unde e OK să-ți ții parolele?", opts: ["Într-un fișier parole.txt pe desktop", "Într-un password manager criptat"], correct: 1, why: "parole.txt e primul fișier căutat de viruși. Managerul de parole e un seif criptat, nu o foaie lipită pe monitor." }
    ]
  },
  experiment: {
    title: "Auditul parolelor (pe conturi fictive)",
    materials: ["Hârtie", "haveibeenpwned.com (cu părinte)", "Un password manager (Bitwarden — gratuit)"],
    steps: [
      "Scrie 3 parole tipice (fictive!) și discută de ce sunt slabe: nume+an, 123456, qwerty.",
      "Construiește 3 parole-frază puternice după metoda cuvintelor absurde legate.",
      "Cu un părinte, discutați ce înseamnă o alertă de breșă folosind un exemplu educativ; nu introduceți adresele copilului, parole, coduri sau alte secrete în activitate.",
      "Cu un părinte, instalați un manager de parole și exersați generatorul numai într-un cont de test propriu ori într-un cont ales și administrat de adult. Nu partajați seiful sau parola principală.",
      "Activați MFA doar cu proprietarul contului prezent; păstrați codurile de recuperare în locul sigur decis de familie, niciodată în chat sau fotografie."
    ],
    expected: "Un cont real migrat în password manager + MFA activ + înțelegerea riscului de reutilizare."
  },
  project: {
    title: "Planul de securitate al familiei",
    goal: "Creează planul complet de parole al familiei: inventar conturi, migrare la manager, MFA pe conturile critice.",
    steps: [
      "Inventariază cu familia: câte conturi avem? (email, bancă, școală, jocuri, streaming...)",
      "Clasifică: CRITICE (email, bancă) vs importante vs neglijabile.",
      "Plan de migrare: password manager pentru toți, MFA pe cele critice, parole-frază unice.",
      "Prezintă planul familiei ca un consultant. Bonus: convinge-i să-l adopte!"
    ],
    success: ["Inventar complet al conturilor", "Manager adoptat de minim 1 membru", "MFA activ pe toate conturile critice"]
  },
  questions: [
    "De ce e parola maestru a managerului singura pe care TREBUIE s-o ții minte?",
    "Ce faci ÎN PRIMUL MINUT după ce afli că un site cu contul tău a fost spart?",
    "De ce e MFA prin aplicație mai sigur decât prin SMS? (SMS-urile pot fi interceptate!)",
    "Un prieten îți cere parola ta la un joc „să-ți dea skin-uri”. Care e răspunsul corect și de ce?"
  ],
  exercises: [
    "Generează 5 parole-frază și testează cât de ușor le memorezi.",
    "Activează MFA pe încă un cont, singur, fără ajutor.",
    "Scrie ghidul „ce facem când un cont e spart” pentru familie."
  ],
  parent: {
    watch: ["Copilul vede securitatea ca igienă zilnică, nu ca paranoia", "Adoptarea reală a managerului de către copil"],
    help: ["Migrați ÎMPREUNĂ conturile — e și o auditare utilă pentru voi", "Stabiliți parola maestru a copilului cu protocol de recuperare (scrisă, sigilată, într-un sertar)"],
    redflags: ["Copilul împarte parole cu prietenii „de încredere” — regula fermă: parola e ca periuța de dinți", "Scrie parolele în chat/notes necriptat — discuție despre ce rămâne pe serverele altora"]
  },
  pass: [
    "Explică reutilizarea + credential stuffing",
    "Folosește managerul zilnic, cu MFA pe conturile lui",
    "A convins familia să adopte minim o îmbunătățire"
  ]
},
{
  id: "9.2", level: 9, num: 2, title: "Phishing - pescuitul de oameni", icon: "🎣", duration: "50 min",
  objectives: [
    "Să recunoască cele 6 semne ale unui mesaj de phishing",
    "Să inspecteze un link fără să dea click (hover, analiză domeniu)",
    "Să explice de ce URGENȚA e arma favorită a escrocilor"
  ],
  explanation: [
    "Phishingul este o înșelătorie prin care un mesaj imită o persoană sau instituție de încredere pentru a obține date, bani ori acces. Domeniul este numele real al site-ului, iar un link poate afișa un text prietenos, dar să ducă în altă parte. Nu judecăm autenticitatea după siglă sau ton.",
    "Analogia este o scrisoare cu sigiliu copiat: pare oficială, dar verifici adresa și confirmi expeditorul separat. Semnele includ urgență, premiu neașteptat, cerere de parolă, atașament surpriză, domeniu aproape corect și presiune să nu întrebi. Un singur semn important este suficient pentru pauză și verificare.",
    "Exemplu pas cu pas: 1) primești „contul se închide în două ore”, 2) nu apeși linkul și nu răspunzi, 3) treci mouse-ul peste el fără click și citești adresa, 4) observi că domeniul real nu aparține instituției, 5) deschizi aplicația oficială tastând adresa cunoscută, 6) raportezi mesajul unui adult și serviciului.",
    "Greșeala este să copiezi numărul din mesaj sau să consideri că HTTPS garantează că site-ul este cel dorit; HTTPS criptează legătura, dar nu schimbă un domeniu fals în unul real. Nu deschidem atașamente și nu introducem parole, coduri MFA, date bancare sau date personale. Un click greșit se raportează imediat, fără rușine.",
    "Demo-ul „Momeală sau mesaj real?” pune mesajele în categorii, iar fiecare decizie trebuie justificată printr-un semn observabil. După sortare, revino la exemplul cu domeniul fals și execută mental pașii siguri. Demo-ul devine o repetiție pentru momentul real în care urgenta încearcă să-ți grăbească degetul."
  ],
  demo: {
    type: "classify",
    title: "Momeală sau mesaj real?",
    intro: "Analizează fiecare mesaj și sortează-l!",
    zones: ["🎣 Phishing", "✅ Probabil legitim"],
    items: [
      { label: "„URGENT: contul se închide în 2h! Click: arnaz0n-suport.com”", zone: 0 },
      { label: "„Comanda ta #4521 a fost expediată. Urmărește-o din aplicație.”", zone: 1 },
      { label: "„Ai câștigat un iPhone! Completează datele cardului pt. transport.”", zone: 0 },
      { label: "Newsletterul săptămânal la care te-ai abonat", zone: 1 },
      { label: "„Banca: am detectat o tranzacție. Introdu parola aici: banca-sigur.xyz”", zone: 0 },
      { label: "„Profesoara: tema de mâine e pe classroom, ca de obicei”", zone: 1 }
    ]
  },
  experiment: {
    title: "Anatomia unei momeli",
    materials: ["Un email de phishing REAL din Spam (cu părinte) sau exemple de pe internet", "Hârtie"],
    steps: [
      "Cu un părinte, analizați o captură educativă sau un mesaj din Spam, fără să deschideți atașamente, să răspundeți ori să apăsați linkuri. Căutați semnele observabile.",
      "Plutește mouse-ul PESTE link (NU click!): ce adresă reală apare jos în browser? Compară cu textul afișat.",
      "Analiza domeniului: în suport.amazon.com.rau-fata.com, domeniul real e ULTIMA parte înainte de extensie — rau-fata.com! Găsește-l.",
      "Scrie raportul detectivului: semnele găsite, cum te-ar fi păcălit, cum te-ai apărat."
    ],
    expected: "Un mesaj real disecat complet + raport scris cu semnele identificate."
  },
  project: {
    title: "Antrenamentul anti-phishing al familiei",
    goal: "Construiește un quiz vizual cu 10 mesaje (reale și false) și testează familia.",
    steps: [
      "Folosește 10 exemple educative, anonimizate sau inventate: 5 suspecte și 5 probabil legitime. Nu distribui mesaje reale, adrese, numere, conturi ori date personale.",
      "Construiește quizul (hârtie sau pe site-ul tău de la nivelul 5!).",
      "Testează familia și notează scorurile. Care mesaj i-a păcălit pe toți? De ce?",
      "Predă lecția: explică TU celor testați greșelile. A învăța pe alții e dovada supremă a înțelegerii."
    ],
    success: ["Quiz cu 10 mesaje construit", "Familia testată, scoruri notate", "Copilul a explicat fiecare capcană"]
  },
  questions: [
    "De ce spun escrocii „ai 24 de ore” și nu „când ai timp”?",
    "Cum verifici un mesaj „de la bancă” fără să folosești linkul din el?",
    "Ce faci după ce realizezi că AI DAT CLICK și ai introdus parola? (Schimbi parola IMEDIAT + anunți un adult!)",
    "De ce nu e rușinos să fii păcălit, dar e periculos să ascunzi că ai fost?"
  ],
  exercises: [
    "Găsește 3 mesaje în Spam și scrie pentru fiecare semnele de phishing.",
    "Explică bunicii cum să verifice un mesaj suspect, pe înțelesul ei.",
    "Creează afișul „Radarul anti-phishing” cu cele 6 semne pentru frigider."
  ],
  parent: {
    watch: ["Copilul raportează mesaje suspecte ÎNAINTE să dea click", "Înțelege că a fi păcălit e normal și se repară prin raportare rapidă"],
    help: ["Stabiliți ritualul: orice mesaj dubios se arată unui părinte FĂRĂ consecințe negative", "Faceți împreună „ora spamului” lunar — disecarea unui email real e mai bună decât 10 lecții"],
    redflags: ["Copilul ascunde un click greșit de teamă — distruge această frică ACUM: raportarea primește laude, mereu", "Copilul crede că „eu nu pot fi păcălit” — arogarea e starea perfectă pentru escroci; umilința e antivirusul"]
  },
  pass: [
    "Recunoaște 6 semne în mesaje noi, neantrenate",
    "Verifică un link fără click, corect, de 3 ori din 3",
    "A raportat (real sau simulat) un mesaj suspect"
  ]
},
{
  id: "9.3", level: 9, num: 3, title: "Ingineria socială - hack-ul uman", icon: "🎭", duration: "45 min",
  objectives: [
    "Să explice ingineria socială: atacul vizează omul, nu calculatorul",
    "Să recunoască tehnicile: pretext, autoritate, urgență, simpatie",
    "Să aplice regula: nimeni legitim nu îți cere parola"
  ],
  explanation: [
    "Ingineria socială este manipularea unei persoane pentru a obține o informație sau acțiune, fără a sparge neapărat un program. Atacatorul poate pretinde că este suport, coleg, rudă sau instituție. Pretextul este povestea inventată, iar scopul este să exploateze încrederea, graba ori dorința de a ajuta.",
    "Cele patru tehnici sunt autoritatea, urgența, simpatia și pretextul. Un mesaj de autoritate spune „nu întreba”; urgența spune „acum”; simpatia cere o favoare; pretextul construiește identitatea falsă. Ca analogie, cineva încearcă să te facă să deschizi ușa înainte să verifici vizorul.",
    "Exemplu pas cu pas: 1) cineva cere codul MFA pretinzând că este suportul, 2) numești tehnica autorității și urgenței, 3) refuzi fără explicații despre cont, 4) închizi conversația, 5) suni instituția pe numărul cunoscut, 6) anunți adultul și raportezi. Parola, codul și datele personale nu se transmit pentru a „dovedi” identitatea.",
    "Greșeala este să crezi că un profil, accent sau număr afișat dovedește identitatea. Un apel poate fi falsificat, iar un prieten online poate să nu fie cine spune. Nu umilim victima și nu continuăm testul după ce apare disconfort; copilul cere ajutorul unui adult, iar jocurile de rol folosesc doar scenarii inventate.",
    "Demo-ul „Te păcălesc?” oferă cereri concrete și răspunsuri sigure. După fiecare întrebare, identifică tehnica, propoziția de refuz și canalul separat de verificare. Apoi jocul de rol repetă exact această secvență, fără parole, coduri sau date reale, pentru a transforma regula într-un reflex."
  ],
  demo: {
    type: "quiz",
    title: "Te păcălesc?",
    questions: [
      { q: "„Sunt de la suportul jocului. Dă-mi parola ca să-ți recuperez contul.” Ce faci?", opts: ["Îi dau parola, pare oficial", "Refuz și raportez — suportul real nu cere niciodată parola"], correct: 1, why: "Suportul legitim are unelte interne pentru conturi. Cererea de parolă = impostor, 100%." },
      { q: "Un „polițist” te sună și cere codul primit prin SMS „pentru verificare”.", opts: ["Îl dau, e poliția!", "Nu-l dau nimănui — codul SMS e a doua cheie a contului meu"], correct: 1, why: "Codul 2FA primit de tine e DOAR pentru tine. Poliția reală nu cere coduri prin telefon." },
      { q: "Un prieten online (pe care nu l-ai întâlnit) cere o poză cu tine și adresa „pentru un cadou”.", opts: ["Trimit, e prietenul meu", "Vorbesc cu un părinte întâi — online nu știu cine e cu adevărat"], correct: 1, why: "Identitățile online se falsifică ușor. Datele personale se cer doar cu un adult alături." },
      { q: "„Mami, sunt eu, am pierdut telefonul, scrie-mi pe numărul ăsta codul din aplicația bancii.”", opts: ["Trimit imediat, e familia!", "Sun pe numărul cunoscut al mamei să verific — escrocii imită familia"], correct: 1, why: "Verificarea pe canalul cunoscut dezactivează 99% din escrocheriile de tip „rudă în nevoie”." }
    ]
  },
  experiment: {
    title: "Teatrul manipulării (joc de rol sigur)",
    materials: ["2+ persoane", "Fișe cu scenarii"],
    steps: [
      "Părintele joacă rolul atacatorului cu un scenariu: „suport tehnic”, „coleg nou”, „ofertă de premii”. Copilul trebuie să reziste.",
      "După fiecare scenariu: ce tehnică a folosit atacatorul? (pretext/autoritate/urgență/simpatie)",
      "Schimbați rolurile folosind doar scenarii inventate și fără a imita persoane reale, instituții, numere sau conturi. Copilul poate identifica semnalele de alarmă, iar părintele modelează verificarea sigură.",
      "Concluzie scrisă: care tehnică e cea mai eficientă pe TINE? Cunoașterea propriei slăbiciuni e super-puterea."
    ],
    expected: "3+ scenarii jucate, tehnici numite corect, reflecție onestă despre propria vulnerabilitate."
  },
  project: {
    title: "Ghidul anti-manipulare pentru colegi",
    goal: "Creează un material (poster/benzi desenate/clip) care învață colegii să recunoască ingineria socială.",
    steps: [
      "Alege 3 scenarii realiste pentru vârsta ta (jocuri online, mesaje, „prieteni” noi).",
      "Desenează fiecare ca mini-benzi desenate: atacul → semnalul de alarmă → reacția corectă.",
      "Adaugă „cutia regulilor de aur”: parola nu se dă, codurile nu se dă, datele personale nu se dă, adulții se anunță.",
      "Prezintă-l la clasă sau familiei extinse. Colectează feedback și îmbunătățește-l."
    ],
    success: ["Material finalizat cu 3 scenarii", "Reguli de aur incluse", "Prezentat unui public real"]
  },
  questions: [
    "De ce e mai ușor să păcălești un om decât să spargi o criptare?",
    "Ce faci dacă un ADULT necunoscut îți cere online informații personale?",
    "De ce funcționează atacurile mai bine când ești obosit sau grăbit?",
    "Cum îți dai seama că un „prieten online” e real? (Răspuns: nu poți ști sigur — comportamentul prudent e singura garanție.)"
  ],
  exercises: [
    "Scrie un scenariu de atac și apoi scrisoarea de apărare perfectă.",
    "Identifică tehnica din 3 titluri de știri despre escrocherii (cu un părinte).",
    "Exersează propoziția-reflex: „Nu dau niciodată parola/codul, dar verific direct cu instituția.”"
  ],
  parent: {
    watch: ["Copilul povestește singur interacțiunile online ciudate — canalul de comunicare e COMOARA", "Reflexul de verificare pe canal cunoscut"],
    help: ["Jocul de rol trebuie să fie amuzant, nu sperietor — ținta e încrederea, nu frica", "Stabiliți codul de familie: un cuvânt secret pentru situații de urgență reale"],
    redflags: ["Copilul ascunde conversații online — NU pedepsiți; construiți puntea: „orice îmi spui, rezolvăm împreună, fără confiscări”", "Copilul dă date personale în jocuri „că așa cere formularul” — verificați împreună setările de confidențialitate"]
  },
  pass: [
    "Numelește cele 4 tehnici cu exemple",
    "Aplică reflexul de verificare în joc de rol",
    "Știe că raportarea e întotdeauna sigură și lăudată"
  ]
},
{
  id: "9.4", level: 9, num: 4, title: "Firewall, porturi și actualizări", icon: "🧱", duration: "50 min",
  objectives: [
    "Să explice firewall-ul ca un bodyguard al porturilor",
    "Să înțeleagă de ce actualizările de securitate nu se amână",
    "Să vadă porturile deschise ale propriului sistem"
  ],
  explanation: [
    "Un port este un număr logic prin care sistemul livrează date programului potrivit, iar un serviciu este programul care ascultă acolo. Firewall-ul este filtrul care permite sau respinge conexiuni după reguli. Principiul „implicit închis” înseamnă că permiți doar serviciile și sursele necesare, nu orice vizitator.",
    "Analogia este un bloc cu apartamente: adresa clădirii este IP-ul, numărul apartamentului este portul, iar portarului îi revine verificarea. O vulnerabilitate este o slăbiciune exploatabilă, iar un patch este o actualizare care o repară. Actualizarea poate schimba ceva, deci se planifică, se face cu adultul și cu posibilitate de revenire.",
    "Exemplu pas cu pas: 1) `ss -tulpn` arată serviciile propriului laborator, 2) observăm că web ascultă pe 80, 3) regula firewall permite doar serviciul necesar din rețeaua locală, 4) baza de date de pe 3306 rămâne închisă, 5) verificăm `ufw status`, 6) actualizăm sistemul și testăm serviciul local după restart.",
    "Greșeala este dezactivarea firewall-ului când ceva nu merge sau copierea unei reguli fără să înțelegi efectul. Un port deschis nu este automat vulnerabil, iar unul închis nu repară un program compromis. Observăm și modificăm numai VM-ul sau serverul nostru, nu scanăm vecini, școală ori internetul și nu publicăm IP-uri, loguri sau configurații.",
    "Demo-ul „Bodyguardul la lucru” compară cererea către 3306, cererea web și plasturele de securitate. Pentru fiecare pas, copilul spune cine are voie, ce regulă decide și ce se întâmplă dacă regula lipsește. Experimentul repetă schema doar în laboratorul propriu, cu pași de revenire păstrați de adult."
  ],
  demo: {
    type: "flow",
    title: "Bodyguardul la lucru",
    steps: [
      { label: "📦 Pachetul sosește", info: "Un pachet bate la portul 3306 (baze de date). Firewall-ul verifică lista de reguli..." },
      { label: "📜 Verificarea", info: "Regula spune: portul 3306 NU e deschis lumii. Pachet respins fără răspuns — ca și cum ușa nici nu există." },
      { label: "✅ Pachetul bun", info: "Alt pachet bate la portul 80 (web). Regula permite: treci, te așteaptă nginx!" },
      { label: "🕳️ Gaura", info: "Pe alt calculator, cineva n-a actualizat de 8 luni. O gaură cunoscută e deschisă, și hoții au harta ei." },
      { label: "🩹 Plasturele", info: "Actualizarea se instalează: gaura e reparată. Atașamentul la „amână update-ul” = risc pur." }
    ]
  },
  experiment: {
    title: "Auditul propriului server",
    materials: ["Serverul Pi/VM", "Terminal"],
    steps: [
      "Cu un adult, observă serviciile doar pe VM-ul sau serverul propriu: `sudo ss -tulpn`. Nu încerca porturi pe alte dispozitive și nu publica rezultatul.",
      "Într-o VM de laborator cu consolă locală, adultul alege o singură regulă necesară, o documentează și o aplică. Nu copia reguli pentru SSH sau acces din internet dacă nu înțelegi exact efectul lor.",
      "Verifică regula local cu `sudo ufw status`, apoi păstrează o copie a configurației şi pașii de revenire înainte de următoarea schimbare.",
      "Cu adultul, verifică întâi actualizările disponibile și planifică instalarea pentru propriul sistem. După actualizare, verifică serviciul local și notează rezultatul.",
      "Testează numai pe VM-ul propriu că un serviciu local nepermis nu răspunde; nu testa adrese externe sau dispozitive ale altor persoane."
    ],
    expected: "Firewall activ cu reguli explicabile + actualizări făcute + un port închis testat."
  },
  project: {
    title: "Politica de securitate a serverului casei",
    goal: "Documentează și aplică regulile de securitate ale serverului tău: porturi, servicii, actualizări, parole.",
    steps: [
      "Inventar: ce servicii rulează, ce porturi au, cine le folosește.",
      "Decizii: ce rămâne deschis, ce se închide, și DE CE fiecare.",
      "Reguli scrise: actualizări săptămânale (ziua fixă!), parole doar din manager, log verificat săptămânal.",
      "Aplică politica timp de o lună și notează în jurnal: ce-ai găsit în loguri? Cineva a bătut la ușile închise? (Spoiler: da, roboții de pe internet bat la TOATE ușile.)"
    ],
    success: ["Document cu politica semnat", "Firewall configurat corect", "O lună de jurnal de administrare"]
  },
  questions: [
    "De ce e „închide tot, deschide doar ce trebuie” mai sigur decât „deschide tot, închide ce e rău”?",
    "Ce risc are actualizarea? (Uneori strică ceva!) Cum balansezi riscul cu beneficiul?",
    "De ce nu deschidem serverul nostru spre internet fără pregătire serioasă?",
    "Ce înseamnă că roboții scanează toate IP-urile de pe internet, non-stop?"
  ],
  exercises: [
    "Scrie regulile ufw pentru: doar SSH din rețeaua locală și web pentru toți.",
    "Caută în logul nginx/firewall 3 vizitatori necunoscuți și investighează-i.",
    "Explică cuiva ce e un „zero-day” și de ce e diferit de găurile obișnuite."
  ],
  parent: {
    watch: ["Copilul CITEȘTE ce face fiecare regulă de firewall înainte de a o aplica", "Actualizările devin rutină, nu corvoadă"],
    help: ["Experimentul cu ufw e real și poate bloca accesul — faceți-l împreună prima dată, cu acces fizic la server ca plasă de siguranță", "Săptămâna update-ului poate fi un ritual comun de 15 minute"],
    redflags: ["Copilul dezactivează firewall-ul „că nu merge ceva” — regula: repari regula, nu demolezi zidul", "Copiază comenzi de securitate din tutoriale fără să le priceapă — testul explicației, ca întotdeauna"]
  },
  pass: [
    "Explică modelul „implicit închis”",
    "A configurat singur un firewall funcțional",
    "Rutina de actualizări documentată o lună"
  ]
},
{
  id: "9.5", level: 9, num: 5, title: "Laboratorul izolat de securitate", icon: "🧪", duration: "60 min",
  objectives: [
    "Să explice de ce experimentele de securitate se fac DOAR în medii izolate",
    "Să creeze o mașină virtuală ca teren de joacă sigur",
    "Să aplice regula absolută: testezi doar ce e al tău"
  ],
  explanation: [
    "Un laborator izolat este un mediu de testare separat de datele și rețelele reale. Mașina virtuală este un calculator simulat în fișier, iar host-only sau Internal Network limitează comunicarea la gazdă și VM-urile aprobate. Adultul verifică setările înainte de orice experiment, pentru că „virtual” nu înseamnă risc zero.",
    "Analogia este un acvariu de antrenament: poți observa mecanismele fără să verși apa în casa reală. Un snapshot este o fotografie a stării VM-ului, utilă pentru revenire, dar nu autorizează malware, programe suspecte sau teste pe ținte externe. Exersăm apărare: firewall, loguri, actualizări și restaurare.",
    "Exemplu pas cu pas: 1) creăm VM Linux fără date personale, 2) setăm rețeaua Internal, 3) verificăm că nu ajunge pe internet, 4) salvăm snapshotul „curat”, 5) schimbăm o setare inofensivă, 6) revenim la snapshot și confirmăm restaurarea. Dacă apare o problemă, oprim VM-ul și cerem adultului să verifice izolarea.",
    "Greșeala este confuzia dintre curiozitate și permisiune. Nu rulăm malware, nu încercăm parole, nu scanăm rețele și nu demonstrăm vulnerabilități pe site-uri, conturi sau dispozitive ale altora. O vulnerabilitate observată accidental se raportează responsabil; nu o investigăm. Nu introducem secrete sau date reale în laborator.",
    "Demo-ul „Anatomia laboratorului sigur” arată gazda, VM-ul, rețeaua izolată, snapshotul și regula etică. După fiecare pas, verifică ce este permis și ce nu. Construiește experimentul exact în această ordine și păstrează testele în rețeaua locală de laborator, fără publicare sau acces din internet."
  ],
  demo: {
    type: "flow",
    title: "Anatomia laboratorului sigur",
    steps: [
      { label: "🏠 Gazda", info: "Calculatorul tău normal = gazda. Rămâne neatins, cu datele tale în siguranță." },
      { label: "📦 Mașina virtuală", info: "VirtualBox creează un calculator-complet-în-fereastră: are disc virtual, memorie virtuală, totul într-un fișier." },
      { label: "🔌 Rețeaua izolată", info: "Setarea „Host-only” sau „Internal”: VM-ul vorbește DOAR cu gazda/alte VM-uri de test. Niciun drum spre internet sau casa." },
      { label: "📸 Snapshot-ul", info: "Fotografia stării perfecte. Strici ceva? Revii la poză în 10 secunde. Cea mai bună funcție pentru învățat!" },
      { label: "⚖️ Legea", info: "Tot ce înveți aici se aplică DOAR aici. Permisiunea scrisă e singura cheie care deschide testarea pe sistemele altora." }
    ]
  },
  experiment: {
    title: "Construiește laboratorul",
    materials: ["Calculator cu 8GB+ RAM", "VirtualBox (gratuit)", "Imagine Linux (Ubuntu Server sau Debian)"],
    steps: [
      "Instalează VirtualBox și creează o VM: 2 CPU, 2-4GB RAM, 20GB disc.",
      "Instalează Linux pe VM. A doua instalare de la zero — deja ești mai rapid decât prima dată!",
      "Configurează rețeaua izolată (Host-only) și verifică: VM-ul NU ajunge pe internet, dar TU ajungi la VM.",
      "Fă un snapshot numit „curat”. Cu adultul, schimbă o setare inofensivă și documentată, de exemplu fundalul sau un fișier de notițe din directorul tău, apoi restaurează snapshot-ul și observă revenirea.",
      "Exersează pe VM: firewall, servicii, loguri — tot ce-ai învățat, acum cu zero frică."
    ],
    expected: "VM izolată funcțională + snapshot testat printr-un „dezastru” și o restaurare."
  },
  project: {
    title: "Regulamentul laboratorului",
    goal: "Scrie și afișează regulamentul oficial al laboratorului tău de securitate, semnat de tine și părinți.",
    steps: [
      "Redactează regulile: ce am voie să testez (VM-urile mele, serverul meu), ce e interzis (orice altceva), cum cer permisiune.",
      "Include procedura de dezastru: snapshot înainte de experimente riscante.",
      "Adaugă secțiunea „codul etic”: ce fac dacă descopăr o problemă la o școală/site? (Răspuns: anunț un adult și raportez responsabil, NU exploatez.)",
      "Semnați cu toții și afișați-l deasupra bancului de lucru. E constitucția laboratorului."
    ],
    success: ["Regulament complet semnat", "Procedura de snapshot respectată", "Codul etic scris în cuvintele copilului"]
  },
  questions: [
    "De ce e suficientă „curiozitatea” pentru a învăța, dar nu și pentru a testa sistemele altora?",
    "Ce diferențiază un hacker etic de un infractor, dacă știu aceleași lucruri?",
    "De ce fac firmele „bug bounty” (plătesc hackeri să le atace cu permisiune)?",
    "Ce faci dacă un prieten îți propune să „testați” rețeaua școlii?"
  ],
  exercises: [
    "Creează a doua VM și fă-le să se vadă între ele în rețeaua izolată.",
    "Documentează 3 vulnerabilități istorice celebre și cum s-au prevenit.",
    "Scrie scenariul: „am găsit accidental o problemă pe site-ul școlii” — pașii corecți, unul câte unul."
  ],
  parent: {
    watch: ["Copilul cere permisiune pentru orice test nou — reflex de aur", "Regulamentul e respectat fără supraveghere"],
    help: ["Asigurați resursele: un calculator cu 16GB RAM sau unul dedicat pentru laborator e ideal", "Semnați regulamentul cu seriozitate — e un contract real de încredere"],
    redflags: ["Orice vorbă despre testarea sistemelor altora „pe glumă” — discuție imediată și serioasă despre consecințele legale", "Interes exclusiv pentru „atac”, zero pentru „apărare și construire” — reechilibrați spre proiectele de construcție"]
  },
  pass: [
    "Laborator izolat construit și testat (snapshot!)",
    "Regulament semnat și respectat",
    "Explică clar hacker etic vs infractor"
  ]
},
{
  id: "9.6", level: 9, num: 6, title: "Proiect: Auditul de securitate al rețelei casei", icon: "🛡️", duration: "2×60 min", isProject: true,
  objectives: [
    "Să conducă un audit complet: dispozitive, parole, actualizări, rețea, backup",
    "Să scrie un raport profesionist cu constatări și recomandări",
    "Să aplice împreună cu familia minim 3 îmbunătățiri"
  ],
  explanation: [
    "Un audit de securitate este o verificare planificată a dispozitivelor, conturilor și obiceiurilor proprii pentru reducerea riscului. Riscul este posibilitatea ca un eveniment să producă un rău, iar controlul este o măsură care îl reduce. Copilul observă, adultul aprobă accesul și schimbările, iar fișa nu conține parole sau coduri.",
    "Analogia este revizia unei biciclete: verifici frâne, lanț și lumini ca să previi problemele, nu ca să acuzi bicicleta. O constatare bună spune ce ai observat, ce risc sugerează și ce acțiune sigură urmează. Folosim statutul OK/RISC/NECESITĂ VERIFICARE și informații minime, păstrate în familie.",
    "Exemplu pas cu pas: 1) adultul aprobă inventarul dispozitivelor familiei, 2) verificăm actualizările, 3) verificăm că parolele sunt unice și MFA este activată de proprietar, 4) confirmăm backupul în două locuri, 5) alegem trei reparații mici, 6) după fiecare schimbare testăm că serviciul local funcționează și notăm rezultatul fără secrete.",
    "Greșeala este transformarea auditului într-o scanare sau într-o listă de acuzații. Nu încercăm parole, nu testăm porturi pe vecini, nu accesăm dispozitive fără acord și nu publicăm IP-uri, loguri ori topologia casei. O schimbare poate bloca un serviciu, de aceea adultul păstrează calea de revenire și lucrează doar în rețeaua locală aprobată.",
    "Demo-ul „Cele 6 zone ale auditului” oferă ordinea: dispozitive, parole, actualizări, Wi-Fi/firewall, backup și oameni. Pentru fiecare zonă, explică ce observi fără secret, ce risc există și cine decide remedierea. Raportul final folosește aceeași structură și verifică explicit că datele nu părăsesc familia."
  ],
  demo: {
    type: "flow",
    title: "Cele 6 zone ale auditului",
    steps: [
      { label: "📱 Dispozitive", info: "Ce e conectat la rețea? Fiecare dispozitiv necunoscut e o întrebare. (Folosește harta din lecția 5.3!)" },
      { label: "🔑 Parole", info: "Sunt unice? În manager? Parola Wi-Fi e cea din fabrică? Parola routerului ADMIN e schimbată? (90% din case: NU!)" },
      { label: "🩹 Actualizări", info: "Telefoane, laptopuri, router, smart TV — totul la zi? Fiecare întârziere e o ușă deschisă cunoscută." },
      { label: "🧱 Firewall & Wi-Fi", info: "WPA2/WPA3 activ? WPS oprit (e o gaură cunoscută)? Rețea de oaspeți pentru vizitatori?" },
      { label: "💾 Backup", info: "Pozele de familie există în DOUĂ locuri? Testul de restaurare a fost făcut vreodată?" },
      { label: "👨‍👩‍👧 Oamenii", info: "Știe toată lumea regulile: fără parole în chat, phishing se raportează, codurile 2FA nu se dau?" }
    ]
  },
  experiment: {
    title: "Rondul de audit",
    materials: ["Fișa de audit (cele 6 zone)", "Acces la router cu părinte", "1-2 ore"],
    steps: [
      "Cu un adult și doar pentru dispozitivele familiei, parcurge cele șase zone metodic. Notează numai OK / RISC / Necesită verificare; nu nota parole, coduri, adrese IP, nume complete sau alte secrete.",
      "Prioritizează constatările: CRITIC (reparăm azi) / MEDIU (săptămâna asta) / MINOR (luna asta).",
      "Alegeți cu familia până la trei îmbunătățiri cu risc mic, de exemplu actualizări planificate, backup verificat sau MFA configurată de proprietarul contului. Adultul aprobă și face modificările de administrare.",
      "Testul suprem: fă un mini-exercițiu „am pierdut telefonul” — știe toată lumea ce se face? (schimbi parolele critice, blochezi, raportezi)"
    ],
    expected: "Fișă completă + 3 reparații reale aplicate + exercițiul de urgență jucat."
  },
  project: {
    title: "Raportul oficial de audit",
    goal: "Raport scris profesionist + prezentare pentru familie + plan de re-audit peste 3 luni.",
    steps: [
      "Redactează raportul: rezumat executiv (5 rânduri), constatări pe zone, recomandări, ce s-a reparat deja.",
      "Prezintă-l familiei într-o „ședință de consiliu” de 15 minute.",
      "Obține angajamentele: cine ce repară și până când. Scrie-le în raport.",
      "Programează re-auditul peste 3 luni și notează-l în calendarul familiei. Securitatea e un proces, nu un eveniment."
    ],
    success: ["Raport complet, cu ton profesionist", "Prezentare susținută + angajamente semnate", "Re-audit programat în calendar"]
  },
  questions: [
    "Care constatare a surprins cel mai mult familia? De ce?",
    "Ce e mai greu: să găsești problemele sau să convingi oamenii să le repare?",
    "De ce se re-auditează? Ce s-ar putea schimba în 3 luni?",
    "Cum ai audit un dispozitiv „smart” (bec, aspirator) față de un laptop?"
  ],
  exercises: [
    "Adaugă în raport o secțiune „ce facem bine deja” — auditul sănătos recunoaște și punctele forte.",
    "Creează fișa de urgență a familiei: pașii pentru telefon pierdut / cont spart / mesaj înfricoșător.",
    "Intervievează un adult: ce-l sperie cel mai mult la tehnologie? Cum l-ar ajuta auditul?"
  ],
  parent: {
    watch: ["Tonul raportului: constructor, nu acuzator — semn de maturitate profesională", "Copilul conduce ședința, voi sunteți clientul"],
    help: ["Deschideți cu generozitate accesul la router și conturi — încrederea voastră e răsplata lui", "Implementați VIZIBIL recomandările lui — nimic nu motivează mai mult decât impactul real"],
    redflags: ["Raportul devine listă de acuze la adresa fraților/părinților — reînviați regula: audităm sisteme, nu oameni", "Familia ignoră raportul — cereți minim UNA dintre recomandări implementată; e lecție și pentru adulți"]
  },
  pass: [
    "Audit complet pe cele 6 zone, documentat",
    "3+ reparații reale aplicate",
    "Raport prezentat + re-audit programat"
  ]
},
/* ==================== NIVELUL 10 ==================== */
{
  id: "10.1", level: 10, num: 1, title: "Tipuri de AI - harta teritoriului", icon: "🗺️", duration: "45 min",
  objectives: [
    "Să numească marile tipuri de AI: clasificare, recunoaștere, recomandare, predicție, generare",
    "Să identifice AI-ul din 5 aplicații folosite zilnic",
    "Să descrie AI fără magie: „sisteme care învață din exemple”"
  ],
  explanation: [
    "Inteligența artificială, prescurtat AI, este numele pentru programe care găsesc tipare în date și folosesc acele tipare pentru o sarcină. Un tipar este o asemănare repetată, precum cuvintele care apar des într-un email nedorit. AI nu este o persoană și nu citește gânduri: primește date, calculează și oferă un rezultat. Ne ajută să vedem mai limpede ce face o aplicație și ce informații poate folosi despre noi.",
    "Clasificarea pune ceva într-o categorie: un filtru decide dacă un email este spam sau nu. Recunoașterea găsește un tipar, de pildă transformă vocea în text. Recomandarea ordonează opțiunile pe care crede că le vei prefera, iar predicția estimează ce s-ar putea întâmpla mai târziu, cum ar fi vremea. Generarea construiește text, imagini ori sunete noi. Aceste categorii contează deoarece fiecare are alte erori și alte date necesare.",
    "Gândește-te la un bibliotecar care sortează cărți. Dacă primește o carte despre planete, o pune la știință; aceasta seamănă cu clasificarea. Dacă observă că împrumuți multe benzi desenate și îți arată una nouă, face o recomandare. Bibliotecarul are reguli și experiență, pe când un AI folosește exemple și numere. Analogia arată și limita: o carte pusă pe raftul greșit nu devine altă carte.",
    "Iată un exemplu pas cu pas. O aplicație primește fotografia unui animal. Mai întâi caută forme și culori asemănătoare cu exemplele sale. Apoi compară două categorii, pisică și câine, și poate calcula pisică 70 la sută, câine 30 la sută. La final etichetează fotografia drept pisică, dar un adult verifică înainte de o decizie importantă. Procentul arată estimarea modelului, nu un adevăr garantat.",
    "O confuzie obișnuită este să spunem că orice aplicație automată este AI sau că AI înțelege ca un om. Unele aplicații folosesc doar reguli, iar un model poate greși când întâlnește lumină slabă, exemple noi ori date lipsă. Nu oferim parole, adrese, poze ale altora sau alte date personale doar pentru a testa un instrument. În demonstrația următoare vei sorta aplicații în cele cinci categorii și vei întreba pentru fiecare ce date primește și ce limită are."
  ],
  demo: {
    type: "classify",
    title: "Ce fel de AI e?",
    intro: "Sortează aplicațiile după tipul de AI!",
    zones: ["🏷️ Clasificare", "👁️ Recunoaștere", "🎯 Recomandare", "✨ Generare", "🔮 Predicție"],
    items: [
      { label: "Filtrul de spam din email", zone: 0 },
      { label: "YouTube îți sugerează videoul următor", zone: 2 },
      { label: "Chatbot care scrie o poveste", zone: 3 },
      { label: "Aplicația meteo estimează ploaia", zone: 4 },
      { label: "Telefonul recunoaște fețe în poze", zone: 1 },
      { label: "Netflix: „pentru că ai urmărit...”", zone: 2 },
      { label: "Generator de imagini din text", zone: 3 },
      { label: "Magazinul prezice stocul de sărbători", zone: 4 }
    ]
  },
  experiment: {
    title: "Vânătoarea de AI",
    materials: ["Caietul", "O zi obișnuită"],
    steps: [
      "Timp de o zi, notează ORICE interacțiune cu un AI: autocorrect, recomandări, filtre foto, asistent vocal, jocuri...",
      "Pentru fiecare, ghicește tipul: clasificare? recomandare? generare?",
      "Alege unul și întreabă-te: cu ce exemple a fost probabil antrenat?",
      "Surpriza de final: numără-le. Sunt mai multe decât ai fi ghicit?"
    ],
    expected: "10+ interacțiuni AI identificate și clasificate într-o singură zi."
  },
  project: {
    title: "Harta AI din viața mea",
    goal: "Creează harta vizuală a tuturor AI-urilor cu care interacționezi, cu tipurile și datele lor.",
    steps: [
      "Adună lista din vânătoare (minim 10).",
      "Pentru fiecare AI: ce date primește DESPRE TINE? (poze, istoric, locație, voce...)",
      "Desenează harta: tu în centru, AI-urile în jur, săgeți cu datele care curg.",
      "Adaugă o întrebare critică lângă fiecare: „ce câștig eu, ce câștigă ei?”"
    ],
    success: ["10+ AI-uri cartografiate", "Datele personale identificate la fiecare", "Întrebarea critică prezentă peste tot"]
  },
  questions: [
    "Ce AI din viața ta ți se pare cel mai util? Cel mai ciudat?",
    "Un AI care recunoaște pisici „înțelege” ce e o pisică? Argumentează ambele părți.",
    "De ce au nevoie AI-urile de MILIOANE de exemple, iar tu recunoști o pisică din 3 poze?",
    "Ce AI ți-ai dori să existe? Ce date i-ar trebui?"
  ],
  exercises: [
    "Clasifică AI-ul din 3 jocuri pe care le joci.",
    "Explică unui copil mai mic diferența dintre „programat” și „antrenat”.",
    "Găsește o știre despre AI și identifică tipul de sistem."
  ],
  parent: {
    watch: ["Copilul folosește „antrenat cu exemple” natural, fără magie", "Conștiința datelor personale care curg spre AI-uri"],
    help: ["Faceți vânătoarea împreună — adulții sunt adesea mai puțin conștienți de AI-urile lor", "Discutați la masă: „ce AI credeți că v-a analizat azi?”"],
    redflags: ["Copilul vorbește despre AI ca despre o persoană („mă înțelege”) — reancorați: tipare și probabilități, nu înțelegere", "Teama SF de AI — harta reală demistifică mai bine decât liniștirea"]
  },
  pass: [
    "Numește și exemplifică 5 tipuri de AI",
    "Explică antrenat-vs-programat cu un exemplu propriu",
    "A cartografiat AI-urile din viața lui cu datele aferente"
  ]
},
{
  id: "10.2", level: 10, num: 2, title: "Programare tradițională vs Machine Learning", icon: "⚖️", duration: "50 min",
  objectives: [
    "Să compare cele două paradigme: reguli+date→rezultat vs date+răspunsuri→reguli",
    "Să decidă ce probleme cer ML și ce probleme cer programare clasică",
    "Să explice de ce modelul ML e o „cutie care a învățat”"
  ],
  explanation: [
    "Programarea tradițională înseamnă că omul scrie reguli exacte, iar calculatorul le urmează. Datele intră, regulile le prelucrează, iar rezultatul iese. De exemplu, regula pentru un LED de test poate fi: dacă lumina este sub 20, aprinde LED-ul. Este utilă când știm pașii dinainte, fiindcă putem citi, verifica și repara fiecare regulă.",
    "Machine learning, numit ML, este o metodă prin care calculatorul caută o regulă numerică din multe exemple cu răspunsul cunoscut. Exemplele și etichetele lor formează datele de antrenament, iar regula rezultată se numește model. Pentru spam, îi arătăm multe emailuri marcate spam sau normal; modelul estimează eticheta unui email nou. ML contează când tiparul este greu de scris cu mii de reguli.",
    "Imaginează-ți două moduri de a învăța un portar. Primul primește o listă: lasă să intre numai persoane cu bilet albastru. Acesta este codul cu reguli. Al doilea vede mii de fotografii etichetate cu bilete valide și încearcă să ghicească; acesta seamănă cu ML. Lista este clară, dar nu rezolvă o fotografie neclară. Exemplele ajută, însă pot conține greșeli sau pot lipsi situații importante.",
    "Exemplu pas cu pas: vrem să sortăm fructe. Mai întâi alegem regula clară pentru preț: merele costă 3 lei, perele 4 lei, deci folosim programare clasică. Pentru a recunoaște forma din fotografie, adunăm imagini etichetate măr și pară, antrenăm modelul și îl testăm cu poze noi. Dacă fotografia arată măr 80 la sută, modelul oferă o estimare, iar sistemul poate cere verificare când nu este sigur.",
    "O confuzie frecventă este că ML este mereu mai bun sau că modelul inventează singur adevărul. ML poate greși, costă timp pentru date și nu trebuie să decidă singur despre sănătate, bani sau persoane. Pentru testele noastre folosim obiecte și imagini permise, fără parole, fețe ori date private. În demonstrație vei compara drumul regulilor cu drumul exemplelor și vei decide care se potrivește fiecărei probleme."
  ],
  demo: {
    type: "flow",
    title: "Două drumuri spre același răspuns",
    steps: [
      { label: "👩‍💻 Clasic: scrii regula", info: "Vrei să detectezi spam. Scrii: if conține \"CÂȘTIGAT\" and \"URGENT\" → spam. Funcționează... până escrocii scriu „urg3nt”." },
      { label: "🐛 Clasic: prăpastia", info: "Adaugi reguli, peste reguli, peste reguli. Escrocii se adaptează mai repede decât scrii tu. Regulile devin spaghete." },
      { label: "🤖 ML: arăți exemple", info: "În schimb, dai sistemului 100.000 de emailuri ETICHETATE (spam / nu-spam) și-l lași să descopere singur tiparele." },
      { label: "🧠 Modelul", info: "Rezultatul e un „model”: o cutie care a văzut atâtea exemple încât recunoaște și spam-ul pe care nu l-a văzut nimeni." },
      { label: "⚖️ Alegerea", info: "Probleme cu reguli clare → cod. Probleme cu tipare invizibile omului → ML. Inginerul bun știe care e care." }
    ]
  },
  experiment: {
    title: "Joacă-te cu ML real, fără cod",
    materials: ["Teachable Machine (teachablemachine.withgoogle.com — gratuit, în browser)", "Cameră web"],
    steps: [
      "Deschide Teachable Machine → Image Project. Creează 2 clase: „mână deschisă” și „pumn”.",
      "Antrenează: ține 30 de poze cu fiecare (mișcă mâna, schimbă unghiul!). Apasă Train — urmărește magia (care e matematică).",
      "Testează live: arată mâini și privește procentele. Apoi păcălește-l: mână pe jumătate, mâna altcuiva, lumină proastă.",
      "Notă de detectiv: când greșește? De ce? Ce date de antrenament i-au lipsit?"
    ],
    expected: "Model antrenat și testat + jurnal cu cazurile în care greșește și ipotezele de ce."
  },
  project: {
    title: "Detectorul de obiecte al camerei",
    goal: "Antrenează un clasificator cu 3-4 obiecte din camera ta și documentează-i performanța ca un om de știință.",
    steps: [
      "Alege 3 obiecte (plus clasa „nimic” — esențială!).",
      "Antrenează cu imagini variate: unghiuri, lumini, distanțe diferite.",
      "Construiește tabelul de teste: 20 de probe, corect/greșit, în ce condiții.",
      "Scrie concluziile: ce procent de corectitudine? Ce îl derutează? Cum l-ai îmbunătăți?"
    ],
    success: ["Model cu 4 clase funcțional", "20 de teste documentate", "Concluzii cu procente și ipoteze"]
  },
  questions: [
    "De ce e imposibil de scris „if”-uri pentru recunoașterea fețelor?",
    "Ce se întâmplă dacă antrenezi cu poze doar în lumină bună și testezi seara?",
    "Un model antrenat pe pisici de apartament recunoaște un leu? De ce da/nu?",
    "Când e programarea clasică MAI BUNĂ decât ML? Dă 2 exemple."
  ],
  exercises: [
    "Listează 5 probleme: 2 pentru if-uri, 3 pentru ML. Justifică fiecare.",
    "Reantrenează modelul cu date proaste (puține, toate identice) și notează ce se strică.",
    "Scrie o „rețetă”: ce ai schimba la date ca modelul să reziste la lumină proastă."
  ],
  parent: {
    watch: ["Copilul vorbește despre DATE ca fiind ingredientul, nu despre cod", "Testarea sistematică a modelului — instinct de om de știință"],
    help: ["Teachable Machine e gratuit și fără cont — perfect pentru prima dată", "Testați modelul împreună și inventați cazuri capcană — e distractiv și profund"],
    redflags: ["Copilul crede că procentul mare = perfecțiune — arătați-i cazurile de eșec, ele sunt profesorul", "Concluzia „AI-ul e magic” — reveniți mereu la: exemple → tipare → estimare"]
  },
  pass: [
    "Explică ambele paradigme cu diagrame",
    "A antrenat și evaluat un model real",
    "Decide corect clasic vs ML pe 5 probleme noi"
  ]
},
{
  id: "10.3", level: 10, num: 3, title: "Antrenamentul: date, model, predicție", icon: "🏋️", duration: "50 min",
  objectives: [
    "Să descrie procesul de antrenare: date → model → predicție",
    "Să explice rolul datelor de test (pe care modelul nu le-a văzut)",
    "Să înțeleagă „garbage in, garbage out”"
  ],
  explanation: [
    "Antrenarea este perioada în care un model primește exemple și își ajustează numerele interne ca să greșească mai puțin. Datele de antrenament sunt exemplele din lecție, iar predicția este răspunsul modelului pentru un exemplu nou. Acest proces contează deoarece un model bun nu trebuie doar să repete ce a văzut, ci să se descurce și în lumea reală.",
    "Datele de test sunt exemple păstrate deoparte, pe care modelul nu le vede în timpul antrenării. Ele sunt un examen corect. Dacă folosim aceleași poze la lecție și la examen, modelul poate părea excelent doar fiindcă le-a memorat. Această memorare prea îngustă se numește overfitting. Un set de test separat ne arată dacă modelul a învățat ideea, nu doar albumul.",
    "Imaginează-ți un elev care repetă exact zece exerciții. La test primește aceleași exerciții și ia nota zece, dar la o problemă nouă se blochează. Așa poate face și un model. Datele variate sunt ca exerciții cu numere, imagini și situații diferite. Ele îl ajută să observe ce contează cu adevărat, nu culoarea unei mese sau lumina unei singure camere.",
    "Exemplu pas cu pas: avem 40 de poze cu un cub și 40 cu o minge. Păstrăm câte zece din fiecare pentru test și antrenăm cu restul. După aceea arătăm modelului cele 20 de poze păstrate și numărăm răspunsurile corecte. Dacă recunoaște 18, obține 18 din 20, adică 90 la sută. Apoi notăm exact cele două greșeli și căutăm cauza lor.",
    "GIGO înseamnă că date de intrare slabe produc rezultate slabe. Poze neclare, etichete greșite sau exemple luate fără acord pot face modelul nesigur și nedrept. Un procent mare nu este promisiune; verificăm mereu cazurile dificile și nu lăsăm modelul să ia decizii importante despre oameni. În demo vei răspunde la întrebări despre antrenament, test și capcana memorării."
  ],
  demo: {
    type: "quiz",
    title: "Adevărurile antrenamentului",
    questions: [
      { q: "Modelul are 100% corectitudine pe datele de antrenament. E gata de lansat?", opts: ["Da, perfect!", "Nu neapărat — testează-l pe date NOI (de test)"], correct: 1, why: "Poate doar a memorat. Ca elevul care știe culegerea pe de rost dar se blochează la probleme noi." },
      { q: "Ai 50 de poze de antrenament, toate cu aceeași pisică, același unghi. Modelul...", opts: ["Va recunoaște orice pisică", "Va recunoaște doar pisicile foarte asemănătoare"], correct: 1, why: "Date puține și uniforme = model îngust. Diversitatea datelor e totul." },
      { q: "Modelul spune „Câine: 97%”. Ce știm sigur?", opts: ["E câine, clar", "Modelul e foarte încrezător — dar poate greși"], correct: 1, why: "Procentul măsoară încrederea, nu adevărul. Un model prost poate fi prost cu 99% încredere." },
      { q: "Cea mai bună metodă de a îmbunătăți un model slab este de obicei...", opts: ["Mai multe date, mai diverse", "Să-l lași mai mult timp pornit"], correct: 0, why: "GIGO: datele sunt ingredientul. Timpul nu repară datele proaste." }
    ]
  },
  experiment: {
    title: "Examenul surpriză",
    materials: ["Modelul din lecția 10.2 (sau unul nou)", "Obiecte NOI nevăzute la antrenament"],
    steps: [
      "Testează modelul cu 10 obiecte DIN antrenament → notează scorul (probabil mare).",
      "Acum examenul surpriză: 10 obiecte NOI (alte mâini, alte obiecte, altă lumină). Notează scorul.",
      "Calculează diferența. Mare? Modelul a „memorat culegerea”. Mică? Felicitări, generalizează!",
      "Îmbunătățește: adaugă date diverse la antrenament și repetă examenul. S-a schimbat diferența?"
    ],
    expected: "Tabel cu scor antrenament vs test + măsurarea efectului datelor noi."
  },
  project: {
    title: "Studiul: cât de divers e destul de divers?",
    goal: "Experiment controlat: cum influențează diversitatea datelor performanța pe cazuri noi?",
    steps: [
      "Antrenează Modelul A cu 20 de poze aproape identice per clasă.",
      "Antrenează Modelul B cu 20 de poze foarte variate per clasă.",
      "Aplică AMBELOR același examen surpriză de 20 de cazuri noi.",
      "Scrie studiul: ipoteză, metodă, rezultate (tabel!), concluzie. Primul tău experiment de știința datelor!"
    ],
    success: ["Două modele comparate corect", "Același set de test pentru ambele", "Concluzie bazată pe cifrele proprii"]
  },
  questions: [
    "De ce e „corectitudinea pe antrenament” o minciună elegantă?",
    "Un AI medical antrenat doar pe adulți — ce risc are la copii?",
    "Cum ai strângi date diverse pentru un AI care recunoaște voci?",
    "De ce spune lumea că „datele sunt noul petrol”? E o comparație bună?"
  ],
  exercises: [
    "Găsește în știri un caz real de „date proaste → AI prost” și rezumă-l.",
    "Proiectează colecția perfectă de date pentru un AI care recunoaște emoții.",
    "Explică overfitting cu analogia culegerii de matematică unui coleg."
  ],
  parent: {
    watch: ["Copilul privește procentele cu scepticism sănătos", "Experimente cu ipoteză-metodă-concluzie, nu joacă haotică"],
    help: ["Ajutați la strângerea datelor diverse (lumini, unghiuri, mâini diferite) — e activitate de familie", "Discuția despre AI medical/justiție deschide lecția de etică din nivelul 11 — semănați-o acum"],
    redflags: ["Copilul raportează doar succesurile modelului — cereți mereu „și unde a greșit?”", "Frustrare că modelul nu e perfect — perfecțiunea nu există nici la cei mari; iterația e jocul"]
  },
  pass: [
    "Explică overfitting și rolul datelor de test",
    "A condus un experiment comparativ cu concluzie",
    "Aplică GIGO la orice discuție despre AI"
  ]
},
{
  id: "10.4", level: 10, num: 4, title: "Rețele neurale, pe înțelesul tuturor", icon: "🧠", duration: "50 min",
  objectives: [
    "Să descrie neuronul artificial: intrări × greutăți → sumă → decizie",
    "Să explice cum straturile de neuroni rezolvă probleme complexe",
    "Să facă legătura (vagă, onestă) cu creierul biologic"
  ],
  explanation: [
    "Un neuron artificial este un mic calculator care primește numere, le combină și decide cât de puternic trimite mai departe un rezultat. Fiecare intrare are o greutate, adică un număr care spune cât contează acea intrare. O greutate pozitivă împinge răspunsul spre da, una negativă îl împinge spre nu. Această idee contează fiindcă explică felul în care un model poate învăța importanța unor semne.",
    "O rețea neurală este o mulțime de neuroni artificiali legați în straturi. Un strat este un grup care prelucrează aceeași etapă a problemei; ieșirea lui devine intrare pentru stratul următor. Pentru o fotografie, primele straturi pot observa margini, următoarele forme, iar ultimul compară obiecte. Rețeaua nu primește o definiție în cuvinte pentru pisică, ci găsește tipare în numerele pixelilor.",
    "Gândește-te la o echipă care jurizează un sandviș. Un membru observă legumele, altul zahărul, altul mărimea porției, apoi un coordonator adună voturile. Greutățile sunt cât de mult are voie să conteze fiecare vot. Echipa nu gustă și nu are preferințe; urmează calcule. La fel, rețeaua poate produce un rezultat util fără să aibă experiență, dorințe sau conștiință.",
    "Exemplu pas cu pas: intrările sunt legume egal 1, pâine albă egal 1 și mult zahăr egal 0. Greutățile sunt plus 2, minus 1 și minus 3. Calculăm 1 ori 2 plus 1 ori minus 1 plus 0 ori minus 3, deci 1. Dacă pragul este 0, neuronul răspunde da pentru acest exemplu. La antrenare, când greșește, programul schimbă puțin greutățile și încearcă din nou.",
    "Numele poate păcăli: neuronii biologici sunt celule vii foarte complexe, iar neuronii artificiali sunt formule matematice. O rețea poate fi bună într-o sarcină îngustă și totuși poate greși în situații noi sau explica greu de ce a decis. Nu folosim un astfel de sistem singur pentru decizii care afectează oameni. În demo vei calcula chiar tu intrările, greutățile, suma și pragul unei mini-rețele."
  ],
  demo: {
    type: "flow",
    title: "O decizie, pas cu pas, într-o mini-rețea",
    steps: [
      { label: "📥 Intrările", info: "Sarcina: „e sandwich sănătos?” Intrări: are_legume=1, are_pâine_albă=1, calorii_multe=0." },
      { label: "⚖️ Greutățile", info: "Fiecare intrare are o greutate învățată: legume × +2 (contează MULT pozitiv), pâine albă × -1, calorii × -3." },
      { label: "➕ Suma", info: "(1×2) + (1×-1) + (0×-3) = 1. Neuronul adună totul, ca un cântar." },
      { label: "🔥 Pragul", info: "Suma 1 > pragul 0? DA → neuronul se aprinde: „sănătos!” Altfel rămânea stins." },
      { label: "🏗️ Straturile", info: "O rețea reală: primul strat vede pixeli, următorul vede muchii, următorul forme, ultimul „pisică”. Fiecare strat construiește pe anteriorul." },
      { label: "🎓 Învățarea", info: "Greșit? Algoritmul reglează TOATE greutățile cu o fărâmă în direcția bună. De un milion de ori. Asta e „antrenarea”." }
    ]
  },
  experiment: {
    title: "Suntem o rețea neuronală (joc de grup)",
    materials: ["3-6 persoane", "Cartonașe cu numere (greutăți)", "Hârtie"],
    steps: [
      "Fiecare om e un neuron cu 2 cartonașe-greutăți. Sarcina rețelei: decide „ieșim la joacă?” după 2 intrări: e_soare, am_teme.",
      "Runda 1: greutăți aleatorii. Puneți intrările, calculați sumele, vedeți decizia. Probabil absurdă!",
      "„Antrenarea”: pentru 5 scenarii cu răspuns cunoscut, ajustați greutățile manual până rețeaua răspunde corect la toate.",
      "Revelația: abia ați făcut MANUAL ce calculatorul face de milioane de ori pe secundă. Cât a durat? Câte greutăți aveați? (5! GPT are miliarde.)"
    ],
    expected: "O „rețea” umană antrenată manual pe 5 scenarii + respectul nou pentru scala reală."
  },
  project: {
    title: "Posterul rețelei neurale",
    goal: "Explică vizual, pe un poster, cum decide o rețea neuronală — pentru cineva care nu știe nimic despre subiect.",
    steps: [
      "Desenează neuronul: intrări, greutăți, sumă, prag, ieșire.",
      "Desenează rețeaua: straturi de neuroni, de la pixeli la „pisică”.",
      "Arată învățarea: greutăți aleatorii → erori → ajustări → succes.",
      "Testul: prezintă posterul unui bunic. A înțeles? Posterul e bun."
    ],
    success: ["Poster complet și corect", "Explicația a trecut testul bunicii", "Copilul răspunde la 3 întrebări despre greutăți"]
  },
  questions: [
    "Ce reprezintă greutățile, în cuvintele tale? (Importanța fiecărei intrări, învățată din exemple.)",
    "De ce nu poți întreba o rețea neuronală „de ce ai decis asta?” și primi un răspuns clar?",
    "Ce e asemănător și ce e complet diferit între rețea și creierul tău?",
    "Dacă greutățile sunt doar numere, unde „locuiește” ceea ce a învățat modelul?"
  ],
  exercises: [
    "Calculează manual ieșirea unui neuron cu 3 intrări și greutăți date.",
    "Desenează o mini-rețea care decide „merită privit acest film?” din 3 criterii.",
    "Explică cu analogia cântarului de ce o greutate negativă inversează influența."
  ],
  parent: {
    watch: ["Copilul nu folosește cuvântul „gândește” pentru rețea — vocabular onest", "Entuziasmul la jocul de grup — învățarea prin corp funcționează"],
    help: ["Jocul rețelei umane la o petrecere de familie = memorabil pentru toți", "Dacă matematica e grea: rămâneți la „cântar cu importanțe” — conceptul contează, nu înmulțirile"],
    redflags: ["Copilul concluzionează „deci AI e un creier” — reveniți la avion vs pasăre", "Copilul crede că poate programa o rețea mâine — celebrați ambiția, dar anclați: întâi fundațiile, apoi turnurile"]
  },
  pass: [
    "Explică neuronul cu toate cele 4 componente",
    "Povestește antrenarea ca ajustare de greutăți",
    "Face comparația onestă cu creierul biologic"
  ]
},
{
  id: "10.5", level: 10, num: 5, title: "Cum funcționează un LLM (ChatGPT și prietenii)", icon: "💬", duration: "50 min",
  objectives: [
    "Să descrie lanțul: text → tokeni → numere → model → probabilități → următorul token → text",
    "Să explice de ce un LLM poate spune lucruri false cu încredere",
    "Să calculeze o „generare pe baza de probabilități” manual, pe exemplu mic"
  ],
  explanation: [
    "Un LLM, sau model mare de limbaj, este un tip de rețea neurală antrenată să estimeze ce bucată de text urmează. Un token este acea bucată: poate fi un cuvânt întreg, o parte de cuvânt sau semnul de punctuație. Modelul nu vede litere ca noi; tokenii sunt transformați în numere. Înțelegerea acestui lanț ne ajută să folosim răspunsurile cu curiozitate, nu cu încredere oarbă.",
    "Pentru fiecare poziție, LLM-ul calculează probabilități, adică șanse estimate pentru tokenii următori. După începutul „După ploaie vine”, poate da soare 60 la sută, vânt 20 la sută și zăpadă 5 la sută. Alege un token, îl adaugă la text, apoi repetă calculul. Uneori alege cea mai probabilă variantă, alteori una probabilă pentru varietate, de aceea același prompt poate avea răspunsuri diferite.",
    "Este ca jocul în care o echipă completează o poveste cu următorul cuvânt cel mai potrivit. Echipa a citit multe cărți, așa că poate produce fraze fluente, dar nu poate ieși afară să verifice vremea sau să vadă un fapt nou. Sunetul convingător nu este dovadă. Un LLM poate organiza idei și explica termeni, însă nu devine sursa originală a informației.",
    "Exemplu pas cu pas: scriem „Pisica doarme”. Textul este împărțit în tokeni și transformat în numere. Modelul calculează următorul token: punct 45 la sută, pe 25 la sută, liniștit 10 la sută. Alegem punctul, îl lipim, iar fraza se oprește. Dacă alegem pe, modelul continuă cu o nouă listă de șanse. Un paragraf este doar această alegere repetată de multe ori.",
    "O halucinație este o afirmație inventată sau greșită spusă plauzibil de un model. Ea apare fiindcă modelul completează tipare, nu fiindcă verifică adevărul la fiecare propoziție. Nu trimitem modelelor parole, adrese, date medicale ori poze ale altora fără acord și verificăm faptele importante în surse independente sau cu un adult. În demo vei urmări transformarea textului în tokeni și vei genera manual o continuare probabilistică."
  ],
  demo: {
    type: "flow",
    title: "Inima unui LLM, token cu token",
    steps: [
      { label: "✂️ Tokenizare", info: "„Pisica toarce” devine bucăți: [Pis][ica][ toar][ce]. Fiecare bucată primește un număr. Modelul vede doar numere!" },
      { label: "🧠 Modelul", info: "Numerele trec prin miliarde de greutăți ajustate în antrenament pe o bibliotecă uriașă de texte." },
      { label: "🎲 Probabilități", info: "Ieșirea: următorul token e „.” (40%), „ în” (25%), „ lin” (10%)... O listă de pariuri, nu un răspuns." },
      { label: "🧩 Alegerea", info: "Se alege unul (cu un strop de hazard controlat — „temperatura”). Se lipește la text și TOTUL se repetă pentru următorul token." },
      { label: "📜 Cascada", info: "Mii de repetiți → un paragraf. Modelul nu știe dinainte „ce va spune” — se scrie pe sine, cuvânt cu cuvânt." },
      { label: "⚠️ Halucinația", info: "„Capitala Australiei e Sydney” — plauzibil (toată lumea o confundă, deci și textele!), dar fals: e Canberra. Plauzibil ≠ adevărat. Mereu." }
    ]
  },
  experiment: {
    title: "Fii tu LLM-ul!",
    materials: ["2+ persoane", "Fișe cu fraze tăiate", "Zar sau generator aleatoriu"],
    steps: [
      "Unul e MODELUL: primește fraza „După ce am mâncat înghețata, m-am simțit...” și listează 4 continuări cu procente (fericit 50%, rău 30%, somn 15%, dansând 5%).",
      "Altul zarurieste: alege continuarea după procente. Lipește și repetă pentru 10 cuvinte.",
      "Citiți textul rezultat cu voia tare. Sună omenește? Are sens? Unde a deraiat?",
      "Acum rolul AVERSARULUI: construiește o frază plauzibilă dar FALSĂ cu aceeași metodă. Vezi cât de ușor e?"
    ],
    expected: "Text generat „manual” prin probabilități + o propoziție falsă-perfect-plauzibilă construită conștient."
  },
  project: {
    title: "Vânătoarea de halucinații",
    goal: "Documentează 5 halucinații reale ale unui LLM și scrie ghidul „când NU e de încredere”.",
    steps: [
      "Pune LLM-ului întrebări din domenii obscure: cărți inexistente, proverbe inventate, „fapte” despre satul tău.",
      "Prinde 5 răspunsuri false date cu încredere. Salvează capturile.",
      "Analizează tiparele: CE fel de întrebări produc halucinații? (Lucruri rare, recente, foarte specifice...)",
      "Scrie ghidul: „5 semne că răspunsul AI trebuie verificat” — folosit real la nivelul 11!"
    ],
    success: ["5 halucinații documentate cu dovezi", "Tiparul identificat corect", "Ghid de verificare scris și aplicabil"]
  },
  questions: [
    "Dacă modelul ghicește doar „următorul cuvânt”, de ce poate rezolva probleme de matematică (uneori)?",
    "De ce dă același prompt rezultate diferite la rulări diferite?",
    "Ce e mai periculos: un răspuns evident fals sau unul 90% corect cu o minciună subtilă?",
    "Un LLM „știe” ceva? Formulează răspunsul tău cel mai onest."
  ],
  exercises: [
    "Tokenizează manual 3 cuvinte lungi românești. Ghicește unde le-ar tăia modelul.",
    "Construiește un exemplu de halucinație și explică DE CE modelul a produs-o.",
    "Compară răspunsul unui LLM despre un subiect pe care-l cunoști EXCELENT cu realitatea."
  ],
  parent: {
    watch: ["Copilul folosește natural „plauzibil ≠ adevărat”", "Curiozitatea spre mecanism, nu spre magie"],
    help: ["Vânătoarea de halucinații e distractivă ÎMPREUNĂ — și vaccin intelectual pentru amândoi", "Lăsați copilul să vă surprindă cu o halucinație pe care n-ați fi prins-o"],
    redflags: ["Copilul citează LLM-ul ca sursă („a zis ChatGPT”) — sursa e documentul original, modelul e doar povestitorul", "Dependență de răspunsurile LLM la teme — anticipăm: nivelul 11 tratează exact asta, nu o pedepsiți, o programați"]
  },
  pass: [
    "Explică lanțul complet token→probabilitate→text",
    "A demonstrat manual generarea probabilistică",
    "A prins 5 halucinații reale și a extras tiparul"
  ]
},
{
  id: "10.6", level: 10, num: 6, title: "AI ca profesor, nu ca înlocuitor", icon: "🎓", duration: "45 min",
  objectives: [
    "Să formuleze cereri de învățare bune (explică, întreabă-mă, dă-mi indiciu)",
    "Să distingă „AI a rezolvat” de „AI m-a ajutat să înțeleg”",
    "Să folosească regula „Întâi gândește” înainte de a întreba AI"
  ],
  explanation: [
    "Un AI conversațional este un program care răspunde prin text. Poate fi profesor de exercițiu când explică o idee, oferă un exemplu sau pune întrebări, dar nu poate învăța în locul tău. Învățarea înseamnă că poți explica și aplica ideea singur. Diferența contează: o temă predată cu răspuns gata poate arăta bine, dar nu îți construiește priceperea pentru următoarea problemă.",
    "Regula Întâi gândește are trei pași: încearcă singur, scrie unde te-ai blocat, apoi cere ajutor precis. Un prompt este instrucțiunea pe care o dai AI-ului. Un prompt bun spune: explică fracțiile cu un exemplu, apoi dă-mi un exercițiu fără soluție. Astfel AI-ul devine o lanternă care luminează următorul pas, nu un robot care parcurge drumul în locul tău.",
    "Imaginează-ți că înveți să mergi pe bicicletă. Dacă cineva pedalează mereu pentru tine, ajungi la destinație, dar nu înveți echilibrul. Dacă aleargă lângă tine și îți spune când să îndrepți ghidonul, reușita devine a ta. AI-ul este util în al doilea rol. Profesorul uman și manualul rămân importanți pentru context, reguli și verificarea cerințelor școlii.",
    "Exemplu pas cu pas: ai o problemă cu 24 împărțit la 6. Încerci și scrii 4, dar nu știi cum verifici. Întrebi AI-ul cum se verifică împărțirea, nu care este răspunsul. El îți sugerează să calculezi 4 ori 6, iar tu obții 24 și confirmi singur. A doua zi rezolvi 30 împărțit la 5 fără ajutor; aceasta este dovada că metoda te-a învățat.",
    "AI-ul poate greși, poate inventa fapte și nu cunoaște automat regulile profesorului. Nu îi trimitem parole, nume complete, adrese, materiale ale colegilor sau texte pe care nu avem voie să le distribuim. Nu predăm ca muncă proprie ceva generat de el. În demonstrație vei separa cererile care te ajută să gândești de cele care te transformă într-un simplu copist."
  ],
  demo: {
    type: "classify",
    title: "Profesor sau cârjă?",
    intro: "Sortează cererile către AI!",
    zones: ["🎓 AI profesor (bun!)", "🩼 AI cârjă (periculos!)"],
    items: [
      { label: "„Explică-mi buclele cu un exemplu din Minecraft”", zone: 0 },
      { label: "„Scrie-mi eseul despre Eminescu”", zone: 1 },
      { label: "„Am făcut exercițiul așa — verifică-mi logica, nu-mi da răspunsul”", zone: 0 },
      { label: "„Rezolvă-mi toate cele 10 probleme”", zone: 1 },
      { label: "„Pune-mi 5 întrebări ca la examen”", zone: 0 },
      { label: "„Nu-mi spune răspunsul, dă-mi un indiciu”", zone: 0 },
      { label: "„Fă-te că ești profa și notează-mi eseul pe care l-am scris eu”", zone: 0 },
      { label: "„Copiez ce scrii, nici nu citesc”", zone: 1 }
    ]
  },
  experiment: {
    title: "Duelul metodelor",
    materials: ["Acces la un LLM", "O temă reală de la școală", "Caiet"],
    steps: [
      "Alege o temă pe care NU o înțelegi bine (ex: o lecție de matematică sau istorie).",
      "Metoda cârjei: cere rezolvarea completă. Notează: ce ai învățat? (Sincer: aproape nimic.)",
      "Metoda profesorului: „Nu-mi da răspunsul. Pune-mi întrebări care să mă ghideze pas cu pas.” Rezolvă TU, cu indicii.",
      "Testul de adevăr: a doua zi, fără AI, rezolvă o problemă asemănătoare. Care metodă a câștigat? Scrie concluzia."
    ],
    expected: "Comparație documentată + o problemă rezolvată singur a doua zi (proba supremă)."
  },
  project: {
    title: "Cartea mea de prompturi de învățare",
    goal: "Construiește colecția personală de 10 prompturi de aur pentru învățat, testate și rafinate.",
    steps: [
      "Scrie câte un prompt pentru: explicație, exerciții, indicii, verificare, examen-surpriză, analogie, joc de rol (dezbatere!), plan de învățare, rezumat de cărți, debugging.",
      "Testează fiecare pe o temă reală și notează rezultatul.",
      "Rafinează-le: ce adăugat cuvânt îmbunătățește răspunsul? (vârsta ta, „pas cu pas”, „cu exemple”...)",
      "Prezintă cartea unui coleg sau părinte. Ce prompt i-a impresionat?"
    ],
    success: ["10 prompturi testate și rafinate", "Dovezi ale efectului fiecăruia", "Colecția folosită real la școală o săptămână"]
  },
  questions: [
    "De ce e mai greu să înveți CU indicii decât CU răspunsul gata — și de ce merită?",
    "Ce semn trădează că cineva a folosit AI ca cârjă la o temă?",
    "Cum rămâi motivat să gândești singur când răspunsul e la o comandă distanță?",
    "Ce profesori umani fac mai bine decât AI? Ce face AI mai bine?"
  ],
  exercises: [
    "Scrie promptul perfect pentru a învăța tabla înmulțirii cu un AI.",
    "Folosește AI să-ți genereze un examen, apoi corectează-TE singur.",
    "Rescrie un prompt prost („spune-mi despre război”) într-unul excelent."
  ],
  parent: {
    watch: ["Copilul cere INDICII în loc de răspunsuri — victoria quietă a acestui program", "Capacitatea de a explica a doua zi ce-a predat"],
    help: ["Modelați voi înșine: arătați cum folosiți AI ca profesor în munca voastră", "Stabiliți regula casei: temele se fac cu AI-profesor, iar dovada e explicația la masă"],
    redflags: ["Temele perfecte + explicații goale la întrebări — semnul clasic al cârjei; reveniți la metoda profesorului fără pedeapsă, cu curiozitate", "Copilul crede că „a gândi singur e pierdere de vreme” — duelul metodelor din experiment e antidotul"]
  },
  pass: [
    "Folosește 5+ prompturi de învățare fluent",
    "A demonstrat cu proba-de-a-doua-zi că învață, nu copiază",
    "Explică regula „Întâi gândește” și o aplică"
  ]
},
{
  id: "10.7", level: 10, num: 7, title: "Proiect: Clasificatorul meu de imagini", icon: "📸", duration: "2×60 min", isProject: true,
  objectives: [
    "Să conducă singur un proiect ML complet: problemă → date → model → evaluare → raport",
    "Să publice/exports modelul și să-l demonstreze live",
    "Să scrie raportul cu limitele modelului, onest"
  ],
  explanation: [
    "Un clasificator de imagini este un model care primește o fotografie și estimează clasa aleasă de tine. O clasă este o categorie clară, de exemplu cub roșu, cub albastru sau nimic. Începe cu o problemă mică, observabilă și fără risc. Această alegere contează fiindcă un proiect bine delimitat poate fi testat cinstit și îmbunătățit, pe când un scop uriaș ascunde greșelile.",
    "Alegem numai obiecte și imagini pe care avem voie să le folosim. Nu clasificăm persoane, fețe, emoții, sănătate sau alte date sensibile; aceste etichete pot fi nedrepte și pot răni oameni. Cerem acord înainte de orice fotografie cu altcineva și preferăm obiecte, precum piese LEGO sau plante. Nu încărcăm date personale, locații, parole ori imagini private într-un serviciu online.",
    "Un clasificator seamănă cu un sortator de cutii într-un atelier. Pe fiecare cutie există o etichetă, iar ucenicul vede multe exemple înainte să sorteze singur. Dacă vede numai cuburi roșii sub o lampă, poate confunda lumina cu obiectul. De aceea colectăm exemple în unghiuri, distanțe și lumini diferite, plus clasa nimic pentru lucruri care nu aparțin proiectului.",
    "Exemplu pas cu pas: definim trei clase, cub roșu, cub albastru și nimic. Strângem 30 de fotografii variate pentru fiecare, dar păstrăm câte 10 pentru test. Antrenăm versiunea unu, testăm cele 30 de fotografii păstrate și notăm fiecare greșeală. Dacă roșul este confundat seara, adăugăm poze serale numai la antrenare, creăm versiunea doi și retestăm cu același examen.",
    "O limită importantă este că procentul de încredere nu garantează răspunsul, iar un model bun pentru jocul nostru nu este potrivit pentru decizii despre oameni sau pentru controlul unor dispozitive. Raportul va include și eșecurile, nu doar reușitele. În demonstrație vei parcurge ciclul problemă, date, antrenare, test și îmbunătățire, apoi vei putea construi proiectul cu date sigure."
  ],
  demo: {
    type: "flow",
    title: "Ciclul de viață al proiectului ML",
    steps: [
      { label: "🎯 Problema", info: "Alege ceva REAL: „vreau să știu dacă planta de pe pervaz are nevoie de apă după aspect”. Clar, măsurabil, al tău." },
      { label: "📸 Datele", info: "Marea muncă: 50-200 de exemple per clasă, variate (lumini, unghiuri, zile diferite!). Datele sunt 90% din succes." },
      { label: "🏋️ Antrenarea", info: "Teachable Machine sau similar. 2 minute de așteptare... și modelul există." },
      { label: "🧪 Evaluarea", info: "Examenul surpriză: 20+ de cazuri NOI, nefolosite la antrenament. Tabel cu corecte/greșite. Acesta e ADEVĂRUL despre modelul tău." },
      { label: "🔁 Iterația", info: "Unde a greșit? Mai multe date de acel fel. Reantrenează. Re-evaluează. Notează progresul între versiuni." },
      { label: "📄 Raportul", info: "Rezultate + LIMITĂRI: „nu funcționează seara”, „confundă X cu Y”. Onestitatea e coroana proiectului." }
    ]
  },
  experiment: {
    title: "Săptămâna datelor",
    materials: ["Teachable Machine", "Cameră/telefon", "Obiectele/fenomenul ales", "Fișa de colectare"],
    steps: [
      "Definește problema pe o frază și clasele (2-4, cu „altceva/nimic” inclus).",
      "Planul de date: câte exemple, în ce condiții? Scrie-l ÎNAINTE de a fotografia.",
      "Colectează în 3 sesiuni diferite (dimineață/seară, unghiuri diferite). De ce sesiuni separate? (Diversitate reală!)",
      "Antrenează V1 și dă-i examenul surpriză. Notează scorul — va fi punctul de referință.",
      "Analiza erorilor: CE a confundat? Adaugă date exact pe slăbiciuni și fă V2. Compară scorurile."
    ],
    expected: "V2 măsurabil mai bun decât V1 + fișa de date completă + tabel de evaluare."
  },
  project: {
    title: "Prezentarea de final de nivel: modelul meu AI",
    goal: "Demonstrație live + raport complet, inclusiv secțiunea de limitări.",
    steps: [
      "Pregătește demo-ul live: cazuri ușoare, cazuri grele, și CEL PUȚIN UN CAZ în care modelul greșește — prezentat cu mândrie.",
      "Raportul: problema, datele (câte, cum, când), versiunile cu scoruri, erorile tipice, limitările.",
      "Secțiunea „Ce-aș face cu mai mult timp/date”: minimum 3 idei concrete.",
      "Prezintă familiei/prietenilor și lasă-i SĂ TESTEZE EI modelul. Rezistă tentației de a interveni!"
    ],
    success: ["Demo live cu cazuri reușite ȘI cu eșec explicat", "Raport cu limitări oneste", "Publicul a testat modelul singur"]
  },
  questions: [
    "Ce te-a surprins cel mai mult: cât de bine sau cât de prost merge modelul?",
    "Unde ai folosi TU acest model în realitate? Ce ți-ar trebui în plus ca să îndrăznești?",
    "Cum s-ar comporta modelul tău peste un an, dacă lumea se schimbă puțin?",
    "Ce date NU ai avea voie să colectezi pentru un model? Cine decide?"
  ],
  exercises: [
    "Scrie „fișa modelului” ca la modelele profesioniste: scop, date, performanță, limitări.",
    "Cere cuiva să PĂCĂLEASCĂ modelul intenționat. A reușit? Cum?",
    "Compară modelul tău cu unul comercial similar. Ce diferențe vezi și de unde vin?"
  ],
  parent: {
    watch: ["Copilul petrece mai mult timp cu DATELE decât cu butonul „Train” — a înțeles esența", "Mândria cu care prezintă limitările — maturitate rară chiar la adulți"],
    help: ["Colectarea datelor poate fi activitate de familie (ieșire la păsări, sesiune foto LEGO)", "Nu ajutați la demo — erorile live sunt cele mai bune momente de învățare"],
    redflags: ["Copilul ascunde eșecurile modelului la prezentare — reamintiți: secțiunea Limitări e cea mai admirată", "Alege o problemă prea mare (recunoașterea tuturor animalelor) — ajutați-l să o taie la dimensiunea unei săptămâni"]
  },
  pass: [
    "Proiect ML complet cu V2 dovedit mai bun ca V1",
    "Raport cu limitări oneste și complete",
    "Demo live rezistat la testele publicului"
  ]
},
/* ==================== NIVELUL 11 ==================== */
{
  id: "11.1", level: 11, num: 1, title: "Verificarea răspunsurilor AI - gândire critică", icon: "🔍", duration: "50 min",
  objectives: [
    "Să aplice protocolul de verificare în 6 pași pentru orice răspuns AI important",
    "Să identifice surse primare vs povești la mâna a doua",
    "Să verifice un răspuns prin experiment sau sursă independentă"
  ],
  explanation: [
    "Un răspuns AI este un punct de plecare, nu o dovadă. Înainte să îl crezi, separă afirmațiile verificabile de opinii: „Canberra este capitala Australiei” poate fi confirmată într-o sursă de încredere, pe când „Canberra este un oraș frumos” depinde de criterii și de experiența fiecui om. Această separare împiedică verificarea vagă a unui întreg răspuns și te ajută să arăți exact ce anume este adevărat, fals sau neclar.",
    "Ia apoi fiecare afirmație importantă și transform-o într-o întrebare mică: ce se susține, ce dovadă ar confirma afirmația și cât de recentă trebuie să fie dovada? Pentru o măsurătoare caută metoda și rezultatul original; pentru o știre, verifică data și contextul; pentru o instrucțiune tehnică, testeaz-o într-un mediu sigur. Dacă o afirmație conține cuvinte precum „întotdeauna”, „toți” sau „dovedit științific”, cere o dovadă mai puternică decât pentru o observație obișnuită.",
    "O sursă primară este cât mai aproape de faptul verificat: un studiu, un document oficial, o măsurătoare originală sau o înregistrare necompusă. O sursă secundară explică sau rezumă informația, dar poate simplifica ori interpreta greșit. Independența contează la fel de mult: zece site-uri care copiază aceeași agenție nu reprezintă zece dovezi. Compară cel puțin două surse potrivite, verifică autorul, data și eventualele interese financiare sau politice.",
    "Când afirmația poate fi testată fără risc, experimentul oferă o altă cale: măsoară de mai multe ori, notează condițiile și repetă testul. Când nu poți testa acasă, spune „nedovedit pentru mine” în loc să alegi forțat între adevărat și fals. Un verdict bun poate fi „adevărat”, „fals”, „parțial adevărat”, „depinde de context” sau „nu am suficiente dovezi”; nuanța este mai utilă decât o certitudine inventată.",
    "Demo-ul „Protocolul de verificare în 6 pași” exersează exact acest lanț: izolează afirmația, cere dovada potrivită, compară surse, testează dacă se poate, caută explicații alternative și formulează verdictul. Folosește aceeași fișă și pentru răspunsurile importante din viața reală, fără a introduce parole, date medicale sau informații private în instrumentele AI."
  ],
  demo: {
    type: "flow",
    title: "Protocolul de verificare în 6 pași",
    steps: [
      { label: "1️⃣ Afirmația", info: "AI zice: „Merele cad pentru că Newton a inventat gravitația în 1666.” Care e, exact, afirmația de verificat?" },
      { label: "2️⃣ De unde știm?", info: "Ce dovadă ar trebui să existe? (Documente, măsurători, mai multe surse independente.)" },
      { label: "3️⃣ Sursa", info: "Caută sursa primară: enciclopedii, documente, site-uri oficiale. NU doar alt AI sau un forum." },
      { label: "4️⃣ Experimentul", info: "Se poate testa? Unele afirmații da! („Ouăle plutesc în apă sărată” — verifici în bucătărie în 2 minute.)" },
      { label: "5️⃣ Alte explicații", info: "Newton n-a INVENTAT gravitația (ea exista!) — a descris-o matematic. Nuanța schimbă totul." },
      { label: "6️⃣ Concluzia", info: "Verdict: parțial adevărat, nuanțat. Scrie ce-ai învățat. Protocolul tocmai te-a făcut mai deștept decât răspunsul." }
    ]
  },
  experiment: {
    title: "Detectivul afirmațiilor",
    materials: ["Un LLM", "Acces la surse (enciclopedie, bibliotecă, internet)", "Fișa de verificare"],
    steps: [
      "Cere AI-ului 5 afirmații despre 5 domenii (istorie, știință, geografie, sport, animale).",
      "Aplică protocolul complet pe fiecare. Notează verdictul: adevărat / parțial / fals / neverificabil.",
      "Pentru una, găsește sursa PRIMARĂ reală (nu Wikipedia — documentul/studiul/originalul!).",
      "Creează clasamentul: la ce fel de întrebări a greșit cel mai mult? Compară cu tiparul din 10.5!"
    ],
    expected: "5 fișe completate cu verdict + minim o sursă primară găsită și citată."
  },
  project: {
    title: "Ziarul adevărului",
    goal: "O publicație de o pagină cu 3 afirmații AI verificate temeinic, cu dovezi și verdict.",
    steps: [
      "Alege 3 afirmații AI interesante (una adevărată, una dubioasă, una falsă — nu le dezvălui!).",
      "Documentează verificarea fiecăreia cu protocolul complet și capturi ale surselor.",
      "Scrie articolul ca un ziarist: titlu, afirmația, investigația, verdictul.",
      "Publică-l (pe site-ul tău de la nivelul 5!) și dă-l familiei: pot ei ghici verdictul înainte de final?"
    ],
    success: ["3 investigații complete publicate", "Surse reale citate", "Publicul a ghicit < 3 din 3 verdicturi"]
  },
  questions: [
    "De ce e o sursă primară mai valoroasă decât 10 articole care o citează?",
    "Ce faci când două surse de încredere se contrazic?",
    "Care afirmații NU se pot verifica deloc? Ce facem cu ele?",
    "De ce e mai periculos un AI decât un prieten care spune baliverne? (AI-ul e convingător, rapid și infinit de răbdător.)"
  ],
  exercises: [
    "Verifică o afirmație dintr-un clip video pe care l-ai văzut săptămâna asta.",
    "Scrie 3 afirmații: una adevărată, una falsă, una capcană — și testează-le pe un prieten.",
    "Găsește sursa primară pentru un fapt celebru („mundul Einstein...”) — surprize garantate."
  ],
  parent: {
    watch: ["Copilul verifică AUTOMAT afirmațiile importante, fără reamintire", "Folosește expresia „care e sursa?” natural"],
    help: ["Verificați împreună o știre pe săptămână — modelați comportamentul, nu-l predicați", "Cereți-i copilului să verifice ceva PENTRU voi — rolul de expert al casei construiește reflexul"],
    redflags: ["Copilul verifică doar ce nu-i place (toți facem asta!) — regula casei: verificăm MAI ALES ce ne place să fie adevărat", "Scepticism care alunecă în „nimic nu e adevărat” — ținta e calibrarea încrederii, nu cinismul"]
  },
  pass: [
    "Aplică protocolul în 6 pași fluent",
    "A găsit și citat surse primare reale",
    "Clasamentul său de erori AI e documentat"
  ]
},
{
  id: "11.2", level: 11, num: 2, title: "Deepfake-uri și conținut manipulat", icon: "🎭", duration: "50 min",
  objectives: [
    "Să explice ce e un deepfake și cum se produce",
    "Să aplice tehnici de detectare: sursă, context, imperfecțiuni, verificare inversă",
    "Să practice regula: „nu cred doar pentru că arată real”"
  ],
  explanation: [
    "Un deepfake este un conținut sintetic, de obicei audio sau video, creat cu inteligență artificială pentru a imita vocea, fața ori mișcările unei persoane. Un model învață tipare din multe înregistrări și apoi generează cadre sau sunete noi. Nu orice imagine generată este un deepfake: termenul se referă mai ales la imitarea convingătoare a unei identități sau la prezentarea unui eveniment ca și cum s-ar fi întâmplat.",
    "Detectarea numai după ochi, clipit sau umbre nu mai este suficientă. Modelele se îmbunătățesc, iar un material poate arăta perfect și totuși să fie fals. Verificăm mai întâi proveniența: cine l-a publicat, unde apare versiunea originală și ce surse independente confirmă contextul. Căutarea inversă a imaginii, compararea datei și verificarea pe canalul oficial pot demonta rapid o păcăleală.",
    "Exemplu pas cu pas: primești un clip șocant cu o persoană cunoscută. Nu îl redistribui, chiar dacă pare urgent. Deschizi pagina sursei, cauți același subiect la organizații de știri independente și verifici dacă vocea sau declarația apare într-o înregistrare originală. Dacă este un apel video cu o rudă, închizi și o suni pe numărul cunoscut; identitatea vizuală nu înlocuiește verificarea separată.",
    "Deepfake-urile pot fi folosite și creativ, de exemplu pentru efecte cinematografice făcute cu acordul actorilor. Problema apare când imită o persoană fără consimțământ, înșală financiar sau răspândește o minciună. Nu creăm portrete ale colegilor, profesorilor ori rudelor pentru glume, nu cerem nimănui să trimită material intim și raportăm adultului orice conținut care amenință, umilește sau șantajează.",
    "Demo-ul „Antrenament anti-deepfake” exersează verificarea înainte de credință și distribuire. Laboratorul compară materiale reale și generate, dar concluzia importantă nu este „am ochi bun”, ci „am o metodă”. Experimentul adaugă căutarea inversă și jurnalul cazurilor în care intuiția a greșit, pentru a construi un reflex util în lumea reală."
  ],
  demo: {
    type: "quiz",
    title: "Antrenament anti-deepfake",
    questions: [
      { q: "Primești un clip cu un politician spunând ceva șocant. Primul pas?", opts: ["Îl trimit mai departe — e prea important", "Caut: mai raportează surse serioase? Cine e sursa originală?"], correct: 1, why: "Șocul e combustibilul deepfake-urilor. Cu cât e mai șocant, cu atât verifici MAI mult, nu mai puțin." },
      { q: "Un apel video cu „bunica” cere urgent bani. Arată și sună EXACT ca ea.", opts: ["Trimit banii, e ea", "Sun bunica pe numărul cunoscut / întreb ceva ce doar ea știe"], correct: 1, why: "Voci și fețe se clonează. Verificarea pe un canal separat sau o întrebare-personală dezactivează escrocheria." },
      { q: "Cel mai bun detector de deepfake pe termen lung este...", opts: ["Ochiul meu antrenat", "Verificarea sursei și a contextului"], correct: 1, why: "Imaginile devin prea bune pentru ochi. Originea și contextul rămân greu de falsificat." },
      { q: "Un prieten îți trimite un deepfake amuzant cu un coleg. Problema?", opts: ["Nicio problemă dacă e amuzant", "Distribuirea fără acord poate răni și e incorectă — și uneori ilegală"], correct: 1, why: "Acordul persoanei e linia roșie. „Gluma” cu fața altcuiva poate distruge reputații." }
    ]
  },
  experiment: {
    title: "Laboratorul de detectare",
    materials: ["Exemple de deepfake-uri educative (whichfaceisreal.com sau similar, cu părinte)", "Google Lens"],
    steps: [
      "Test oarbă: 10 imagini, real sau generat? Notează scorul. (Majoritatea adulților: ~60%. Cât ai tu?)",
      "Alege 2 imagini „reale” la care ai greșit și disecă-le: ce te-a păcălit?",
      "Căutarea inversă: ia o imagine dintr-o știre și caut-o cu Google Lens. Unde a mai apărut? E veche? E tăiată din context?",
      "Creează un „deepfake text”: scrie o știre falsă plauzibilă (FĂRĂ să o distribui!) și analizează de ce e convingătoare."
    ],
    expected: "Scor de detectare măsurat + o căutare inversă completă + conștiința limitelor proprii."
  },
  project: {
    title: "Campania „Verifică înainte să crezi”",
    goal: "Creează un material educațional despre deepfake-uri pentru colegi/familie și măsoară-i efectul.",
    steps: [
      "Alege formatul: poster, clip, prezentare sau pagină pe site-ul tău.",
      "Include: ce e, cum se face, 3 semnale de alarmă, protocolul de verificare, regula distribuirii.",
      "Testează publicul ÎNAINTE (quiz de 5 imagini), prezintă materialul, testează DUPĂ.",
      "Raportează: cu cât a crescut scorul publicului tău? Asta se numește impact măsurabil."
    ],
    success: ["Material finalizat și prezentat", "Măsurare înainte/după cu diferență pozitivă", "Regula distribuirii inclusă clar"]
  },
  questions: [
    "Cum schimbă deepfake-urile încrederea în video ca probă? Ce înseamnă asta pentru știri?",
    "E etic să faci un deepfake cu tine însuți? Cu un prieten care râde? Cu un profesor?",
    "Cum ar trebui platformele (TikTok, YouTube) să marcheze conținutul generat de AI? Au obligația?",
    "Ce faci când o rudă distribuie un deepfake convinsă că e real?"
  ],
  exercises: [
    "Explică bunicelor cum să verifice un apel video suspect (canal separat + întrebare personală).",
    "Scrie regulile casei pentru distribuire: ce trimitem, ce nu, ce verificăm întâi.",
    "Analizează un caz real de deepfake din știri (cu părinte): cum a fost prins?"
  ],
  parent: {
    watch: ["Copilul aplică regula distribuirii înainte de orice forward", "Înțelege că propriul ochi nu mai e suficient — umilința detectivului profesionist"],
    help: ["Faceți testul de detectare ÎMPREUNĂ — veți fi amândoi mai slabi decât credeți, și e lecția perfectă", "Stabiliți „cuvântul de familie” pentru apeluri de urgență — antidotul clonării de voce"],
    redflags: ["Copilul vrea să FACĂ deepfake-uri cu colegi — discuție serioasă despre acord și consecințe; canalizați spre detecție, nu creație", "Cinism total („oricum nimic nu mai e real”) — reancorați: unele surse ÎȘI asumă verificarea; învățați să le găsiți"]
  },
  pass: [
    "Explică mecanismul și limitele detecției vizuale",
    "A folosit căutarea inversă pe cazuri reale",
    "Campanie cu impact măsurat livrată"
  ]
},
{
  id: "11.3", level: 11, num: 3, title: "Algoritmii social media și bucla de feedback", icon: "📱", duration: "50 min",
  objectives: [
    "Să explice cum algoritmul de recomandare maximizează timpul petrecut, nu fericirea",
    "Să deseneze bucla: comportament → date → algoritm → recomandare → comportament",
    "Să își auditeze propriul feed ca un cercetător"
  ],
  explanation: [
    "Când deschizi o platformă, nu vezi toate materialele disponibile, ci o selecție ordonată de un algoritm de recomandare. Algoritmul primește semnale despre ce ai privit, cât ai rămas, ce ai distribuit și ce ai căutat, apoi estimează ce te-ar putea menține pe platformă. Obiectivul poate fi timpul petrecut, numărul de reclame văzute sau alt indicator ales de companie; el nu măsoară automat cât ești informat sau fericit.",
    "Bucla de feedback are cinci etape. Comportamentul tău produce date; datele actualizează modelul despre tine; modelul alege recomandări; recomandările influențează următorul tău comportament; ciclul se repetă. Dacă te oprești de mai multe ori la clipuri despre jocuri, platforma poate testa mai multe jocuri, nu fiindcă „te cunoaște cu adevărat”, ci fiindcă acel comportament a fost un semnal util pentru obiectivul său.",
    "Un exemplu simplu arată cum apare o cameră de rezonanță. Timp de o săptămână alegi numai videoclipuri foarte supărătoare; algoritmul învață că acestea rețin atenția și reduce materialele calme sau diferite. După o vreme, lumea pare mai furioasă decât este, iar opiniile opuse dispar din feed. Două persoane pot primi astfel realități digitale foarte diferite pornind de la câteva alegeri mici.",
    "Semnalele nu sunt doar like-urile. Durata vizionării, reluarea unui fragment, viteza de derulare, pauza și chiar momentul folosirii pot conta. De aceea nu este corect să spui că platforma știe ce îți place cu adevărat; ea observă comportamente măsurabile. Tu poți schimba bucla: cauți intenționat surse diverse, oprești recomandările, ștergi istoricul când instrumentul permite și stabilești limite de timp.",
    "Demo-ul „Bucla de feedback, de la un click” urmărește un singur semnal până la un feed dominat de același subiect. Experimentul celor două feeduri transformă explicația într-o măsurătoare: notezi zilnic categoriile recomandate și observi cât de repede se schimbă selecția. Auditul final nu condamnă platforma, ci arată cine controlează fiecare parte a buclei și ce reguli personale poți aplica."
  ],
  demo: {
    type: "flow",
    title: "Bucla de feedback, de la un click",
    steps: [
      { label: "👀 Te uiți", info: "Rămâi 12 secunde la un clip despre un joc. Nu dai like, nu comentezi — DOAR privești. Algoritmului îi ajunge." },
      { label: "📊 Datele", info: "Semnal înregistrat: timp de vizionare 12s, categoria „joc”, ora, dispozitivul. Alături de miliarde de alte semnale." },
      { label: "🧠 Algoritmul", info: "Modelul actualizează profilul tău: „jocuri-interes crescut”. Calculează: ce-i arăt ca să rămână?" },
      { label: "📺 Recomandarea", info: "Încă 3 clipuri despre jocuri, unul mai intens. Te uiți la 2. Semnal mai tare. Bucla se strânge." },
      { label: "🌀 După 100 de bucle", info: "Feedul tău = o cameră de rezonanță. O întrebare sănătoasă: cine a ales ce văd eu — eu sau modelul?" }
    ]
  },
  experiment: {
    title: "Experimentul celor două feeduri",
    materials: ["Un cont de test pe o platformă (cu părinte) sau observație pe conturi existente", "Fișă de observație"],
    steps: [
      "Săptămâna 1: pe contul de test, reacționează (vizionare completă) DOAR la un singur tip de conținut (ex: experimente științifice). Restul: derulezi instant.",
      "Notează zilnic: cât % din feed e știință? Ce altceva apare?",
      "Săptămâna 2: schimbă complet tipul (ex: doar gătit). Urmărește tranziția feedului.",
      "Concluzia scrisă: cât durează „reprogramarea” feedului? Cine a construit feedul, de fapt?"
    ],
    expected: "Jurnal de 14 zile care dovedește bucla cu date proprii — experimentul care schimbă privirea."
  },
  project: {
    title: "Auditul feedului meu",
    goal: "Analiză critică a propriului feed + reguli personale de igienă digitală adoptate real.",
    steps: [
      "Screenshot la 20 de postări consecutive din feedul tău (sau al familiei, cu acord).",
      "Clasifică fiecare: util / amuzant / neutru / furios / trist / reclamă. Calculează procentele.",
      "Întrebările incomode: cât mă simt bine după 30 de minute? Ce pierd? Ce câștig?",
      "Scrie și adoptă 3 reguli personale (ex: „nu derulez în pat”, „like doar ce merită”, „o sursă de știri reală pe zi”). Urmărește-te 2 săptămâni: le respecți?"
    ],
    success: ["Audit cu procente reale", "3 reguli scrise", "Jurnal de respectare pe 14 zile"]
  },
  questions: [
    "Algoritmul știe ce-ți place sau ce privești? Care e diferența crucială?",
    "De ce arată feedul unui bunic altă lume decât al tău? Cine are dreptate?",
    "Ce semnale trimiți fără să știi? (timp, pauze, re-vizionări, scroll-viteză...)",
    "Cum ai proiecta TU un algoritm care maximizează BINELE utilizatorului? E mai greu decât pare!"
  ],
  exercises: [
    "Numără reclamele din 20 de postări consecutive. Procentul te surprinde?",
    "Găsește în setările aplicației „timpul pe ecran” și analizează-ți săptămâna.",
    "Rescrie știrea zilei pentru două feeduri opuse. Ce schimbi?"
  ],
  parent: {
    watch: ["Copilul vorbește despre feed ca despre un sistem proiectat, nu ca despre „realitate”", "Auto-reglarea: își pune singur limite informate"],
    help: ["Faceți experimentul celor două feeduri ca proiect de familie — discuțiile sunt de aur", "NU confișcați telefonul ca pedeapsă în această perioadă — ar submina tocmai auto-reglarea pe care o construim"],
    redflags: ["Copilul concluzionează „deci social media e rău, punct” — nuanța: e unelte cu capcane proiectate; cunoașterea capcanelor te face stăpânul", "Semne reale de dependență (neliniste fără telefon, minciuni despre timp) — discuție calmă și, dacă persistă, ajutor de specialitate; nu e eșec, e sănătate"]
  },
  pass: [
    "Explică bucla de feedback cu exemplul propriu",
    "A reprogramat un feed prin experiment",
    "Are reguli personale de igienă digitală funcționale"
  ]
},
{
  id: "11.4", level: 11, num: 4, title: "Date personale, confidențialitate și etică", icon: "🔒", duration: "50 min",
  objectives: [
    "Să inventarieze ce date personale există despre el și unde",
    "Să aplice întrebarea: „cine primește, de ce vrea, ce poate face cu ele?”",
    "Să distingă „pot să fac” de „e bine să fac” în decizii concrete"
  ],
  explanation: [
    "Datele personale sunt informații care pot descrie sau identifica o persoană: nume, voce, fotografie, locație, școală, prieteni, gusturi, istoric de căutări și obiceiuri de utilizare. Unele par banale izolat, dar combinate pot forma un profil surprinzător de precis. De aceea confidențialitatea nu înseamnă doar ascunderea parolelor, ci alegerea atentă a ceea ce lași să fie colectat, stocat și partajat.",
    "Înainte de a acorda o permisiune, pune trei întrebări: cine primește datele, de ce are nevoie de ele și ce poate face după aceea? O aplicație foto are motiv să folosească camera, iar hărțile pot avea nevoie de locație în timpul navigării. O lanternă care cere lista contactelor sau jocul care cere microfonul fără o funcție vocală ridică un semnal de alarmă. O permisiune utilă trebuie să fie limitată la scop și, când se poate, la durata folosirii.",
    "„Gratuit” nu înseamnă întotdeauna că serviciul nu are costuri. Unele aplicații câștigă din reclame orientate pe profil, analize de utilizare sau transferul datelor către parteneri. Citește rezumatul politicii de confidențialitate cu un adult: ce date colectează, cu cine le partajează, cât le păstrează și cum le poți șterge. Dacă explicația este prea neclară pentru a spune cine folosește datele, aceasta este o informație importantă, nu un detaliu plictisitor.",
    "Confidențialitatea include și drepturile celorlalți. Poți avea acces tehnic la o fotografie cu un coleg, dar nu ai automat acordul de a o publica. La fel, nu adăugi voce, față sau conversații ale altcuiva într-un proiect AI fără permisiune. Distinge mereu „pot să fac” de „este corect să fac”: etica cere să iei în calcul consecințele, nu doar posibilitatea tehnică.",
    "Demo-ul „Permisiune necesară sau hoție?” exersează potrivirea dintre funcție și acces. Inventarul din laborator transformă principiul într-o acțiune concretă: verifici aplicațiile, marchezi cererile nejustificate și revoce una cu aprobarea adultului. Cartea drepturilor datelor păstrează harta, regulile și planul de urgență, astfel încât o decizie bună să poată fi repetată și după lecție."
  ],
  demo: {
    type: "classify",
    title: "Permisiune necesară sau hoție?",
    intro: "Sortează cererile de permisiuni!",
    zones: ["✅ Are sens", "🚩 Suspect!"],
    items: [
      { label: "Aplicația foto cere acces la cameră", zone: 0 },
      { label: "Lanterna cere contactele tale", zone: 1 },
      { label: "Hărțile cer locația", zone: 0 },
      { label: "Jocul puzzle cere microfonul", zone: 1 },
      { label: "Mesageria cere contactele (ca să-ți găsească prietenii)", zone: 0 },
      { label: "Aplicația de ceas cere locația precisă permanent", zone: 1 }
    ]
  },
  experiment: {
    title: "Inventarul datelor mele",
    materials: ["Telefonul/tableta cu un părinte", "Fișă de inventar"],
    steps: [
      "Listează 10 aplicații pe care le folosești. Pentru fiecare: ce permisiuni are? (Setări → Aplicații → Permisiuni)",
      "Marchează cu 🚩 permisiunile care nu au sens pentru funcție. Câte ai găsit?",
      "Revocă o permisiune suspectă (cu părinte) și verifică: mai funcționează aplicația? (De obicei da — semn că nu-i trebuia!)",
      "Bonus detectiv: caută-te pe Google (cu părinte). Ce găsești despre tine? De unde a ajuns acolo?"
    ],
    expected: "Inventar complet + minim o permisiune revocată + harta prezenței online."
  },
  project: {
    title: "Cartea drepturilor datelor mele",
    goal: "Document personal: ce date am, unde sunt, ce reguli am, ce fac dacă ceva merge prost.",
    steps: [
      "Harta datelor: categorii (identitate, locație, poze, conversații, gusturi) × locuri unde stau.",
      "Regulile mele scrise: ce public, ce nu public niciodată, cui dau, ce cer înainte de a instala.",
      "Planul de urgență: cont spart → fac X; poză publicată fără acord → fac Y; mesaj înfricoșător → fac Z (prima linie: spun unui adult).",
      "Prezintă cartea părinților și îmbunătățește-o cu feedbackul lor. Apoi semneaz-o."
    ],
    success: ["Hartă completă a datelor", "Reguli și plan de urgență scrise", "Document semnat și aplicat o lună"]
  },
  questions: [
    "De ce zice lumea „dacă e gratuit, tu ești produsul”? E mereu adevărat?",
    "Ce date ar trebui să rămână private chiar și față de prieteni? De ce?",
    "Un coleg îți dă parola LUI ca să-l ajuți. Poți? E bine?",
    "Cine ar trebui să decidă ce se întâmplă cu datele tale: tu, părinții, compania, statul?"
  ],
  exercises: [
    "Citește (cu părinte) politica de confidențialitate a unei aplicații favorite și rezum-o în 3 fraze.",
    "Verifică setările de confidențialitate la contul de jocuri și ajustează-le.",
    "Scrie scenariul „am dat prea multe date” și planul de recuperare."
  ],
  parent: {
    watch: ["Copilul citește permisiunile ÎNAINTE de instalare — reflex câștigat", "Întreabă acord înainte să publice poze cu alții — etica aplicată"],
    help: ["Faceți inventarul ca activitate de familie — veți curăța cu toții permisiuni", "Discutați cazurile din știri despre abuz de date la nivel de poveste, cu întrebarea „ce-ar fi făcut ei diferit?”"],
    redflags: ["Copilul publică informații de identificare (școală, adresă, rutine) în conținut public — corecție calmă și imediată", "„Oricum au deja totul” — fatalismul e fals: fiecare permisiune revocată micșorează suprafața"]
  },
  pass: [
    "A inventariat și curățat permisiunile reale",
    "Aplică cele 3 întrebări înainte de orice instalare",
    "Cartea datelor semnată și funcțională"
  ]
},
{
  id: "11.5", level: 11, num: 5, title: "Proiect: Asistentul AI personal, responsabil", icon: "🤖", duration: "2×60 min", isProject: true,
  objectives: [
    "Să proiecteze un sistem de asistent AI cu reguli de siguranță și verificare",
    "Să construiască un instrument de lucru cu AI care aplică TOT nivelul 11",
    "Să prezinte deciziile de design etic luate și de ce"
  ],
  explanation: [
    "Un asistent AI responsabil este mai mult decât o fereastră de chat: este un sistem de lucru cu un rol clar, limite de date, verificare a afirmațiilor și înregistrare a erorilor. Începe prin a decide ce nu face asistentul. De exemplu, poate explica o temă și poate oferi indicii, dar nu scrie tema în locul tău, nu ia decizii medicale și nu primește secrete. Limitele negative sunt adesea cele mai importante reguli de siguranță.",
    "Arhitectura simplă are șase părți. Utilizatorul formulează o cerere; filtrul elimină datele personale; asistentul răspunde; sistemul marchează afirmațiile importante ca necesitând verificare; utilizatorul compară cu o sursă sau un experiment; jurnalul păstrează întrebarea, verdictul și greșeala descoperită. Un API este interfața prin care programul cere modelului un răspuns. Cheile API sunt parole: nu apar în codul public, capturi, loguri sau istoricul terminalului.",
    "Exemplu pas cu pas: vrei să înțelegi fotosinteza. Cererea spune „explică pe înțelesul meu, apoi pune-mi trei întrebări, fără să-mi dai tema”. Asistentul oferă explicația; tu alegi afirmația „lumina este necesară” și o verifici într-un manual sau printr-un experiment sigur. Dacă răspunsul conține o cifră sau o dată, cauți sursa. La final notezi ce a fost util și ce a trebuit corectat, nu doar răspunsul final.",
    "Sistemul trebuie să funcționeze și când AI-ul greșește. Pentru fapte importante cere surse și compară-le; pentru calcule verifică independent; pentru sfaturi despre sănătate, bani, siguranță sau probleme personale oprește-te și cere ajutorul unui adult calificat. Nu automatiza acțiuni care pot afecta oameni, bani sau dispozitive fără aprobare, testare și un buton de oprire. Confidențialitatea rămâne activă: istoricul, jurnalul și imaginile nu se publică fără acord.",
    "Demo-ul „Arhitectura asistentului responsabil” arată lanțul de la rol la jurnal, iar experimentul îl testează timp de șapte zile. Scopul nu este să prinzi cât mai multe greșeli, ci să măsori când asistentul ajută, când necesită corecție și ce reguli trebuie schimbate. Ghidul final trebuie scris în cuvintele tale și demonstrat pe un caz real, astfel încât altă persoană să poată înțelege și reproduce metoda."
  ],
  demo: {
    type: "flow",
    title: "Arhitectura asistentului responsabil",
    steps: [
      { label: "🎭 Rolul", info: "Definit la start: „ești profesorul meu de X, explici, pui întrebări, NU rezolvi în locul meu”. Rolul scris e legea sistemului." },
      { label: "🛡️ Filtrul de date", info: "Regula automată: niciodată nume complet, adresă, școală, parole, poze cu alții. Datele mele nu pleacă." },
      { label: "💬 Întrebarea", info: "Formula bună antrenată la 10.6: context + ce am încercat + ce vreau (indiciu/explicație/verificare)." },
      { label: "⚠️ Avertismentul", info: "Fiecare răspuns primește automat eticheta: „verifică-mă pe afirmațiile importante”. Nu uităm NICIODATĂ." },
      { label: "✅ Verificarea", info: "Protocolul în 6 pași pentru ce contează. Sursa primară sau experimentul au ultimul cuvânt." },
      { label: "📓 Jurnalul", info: "Fiecare eroare de AI prinsă intră în jurnal. Lunar: recenzie. AI-ul meu are dosar de performanță — ca orice angajat." }
    ]
  },
  experiment: {
    title: "Săptămâna cu asistentul regulat",
    materials: ["Acces la LLM", "Regulile scrise de tine", "Jurnalul de erori"],
    steps: [
      "Scrie pe o foaie (sau afișează lângă ecran) cele 5 reguli ale asistentului tău.",
      "O săptămână: folosește AI DOAR prin sistemul tău. Notează zilnic: întrebări, verificări făcute, erori prinse.",
      "Cel puțin o dată, prinde AI-ul greșind și documentează complet: afirmație, verificare, adevăr.",
      "Analiza de final de săptămână: câte răspunsuri au necesitat corecție? Ce tip de întrebări? Ce-ai schimba la reguli?"
    ],
    expected: "7 zile de utilizare documentată + minim o eroare prinsă + reguli rafinate."
  },
  project: {
    title: "Ghidul meu de conviețuire cu AI",
    goal: "Documentul final al nivelului: sistemul personal complet + dovada că funcționează + prezentare.",
    steps: [
      "Scrie ghidul: rolul asistentului, regulile, protocolul de verificare, filtrul de date, jurnalul de erori.",
      "Include secțiunea „erorile celebre prinse de mine” — cu dovezi.",
      "(Opțional avansat) Implementează scriptul Python care împachetează totul: întrebare → filtru date → răspuns cu avertisment → jurnal automat.",
      "Prezintă ghidul familiei și oferă-te să construiești variante pentru fiecare membru. Devii consultantul AI al casei."
    ],
    success: ["Ghid complet scris în cuvintele copilului", "Dovezi de utilizare reală (jurnalul)", "Prezentare + feedback colectat"]
  },
  questions: [
    "Ce regulă a fost cea mai greu de respectat? De ce?",
    "Ce-ai pierde dacă AI-ul tău ar dispărea mâine? Ce-ai păstra?",
    "Cum știi că regulile tale nu sunt prea stricte (nu folosești deloc unealta) sau prea largi?",
    "Ce reguli AI ar trebui să aibă Școala ta? Scrie propunerea."
  ],
  exercises: [
    "Scrie „contractul” dintre tine și AI: ce promiți tu, ce aștepți de la el, ce e interzis.",
    "Testează asistentul pe un caz capcană intenționat. Rezistă sistemul?",
    "Intervievează un adult despre cum folosește AI și oferă 2 recomandări din ghidul tău."
  ],
  parent: {
    watch: ["Copilul ÎȘI corectează AI-ul natural, cu surse", "Regulile sunt ale LUI (mai țin decât regulile impuse)"],
    help: ["Adoptați și voi o versiune a ghidului — copilul vă vede verificând, nu doar auzind predici", "Dacă construiește scriptul Python: sărbătoriți-l ca pe primul software „de producție” al casei"],
    redflags: ["Regulile există doar pe hârtie, jurnalul e gol — reluați cu o săptămână de utilizare ghidată", "Copilul devine evanghelist AI fără critică sau critic fără nuanță — ținta e calibrarea, întotdeauna"]
  },
  pass: [
    "Sistem personal de AI funcțional și folosit 7+ zile",
    "Jurnal cu erori prinse și analizate",
    "Ghid scris, prezentat, adoptat de minim o altă persoană"
  ]
},
/* ==================== NIVELUL 12 ==================== */
{
  id: "12.1", level: 12, num: 1, title: "Proiect integrat: Stația Meteo IoT", icon: "🌦️", duration: "3×90 min", isProject: true,
  objectives: [
    "Să integreze TOTUL: senzori + ESP32 + Wi-Fi + server + bază de date + dashboard",
    "Să planifice arhitectura completă înainte de construcție",
    "Să livreze un sistem care funcționează continuu o săptămână"
  ],
  explanation: [
    "O stație meteo IoT este un sistem, nu doar un senzor conectat la Wi-Fi. Lanțul complet este senzor → ESP32 → mesaj JSON prin rețea → server → bază de date → dashboard. JSON este un text structurat cu perechi precum temperatură, umiditate și momentul măsurării. Fiecare legătură are un rol: senzorul observă, microcontrolerul colectează, rețeaua transportă, serverul primește, baza păstrează, iar dashboardul explică datele.",
    "Înainte de cod, scrie contractul datelor. Alege ce măsori, unitatea fiecărei valori, cât de des citești senzorul și cum marchezi o valoare lipsă. De exemplu, temperatura poate fi în grade Celsius, umiditatea în procente, iar citirea la fiecare cinci minute. Definește și limite rezonabile: o valoare de 95 grade într-o cameră este probabil o eroare, nu o descoperire meteo. Aceste reguli împiedică graficele frumoase să ascundă măsurători imposibile.",
    "Construiește și validează pe verigi. Mai întâi compară senzorul cu un termometru cunoscut și notează diferența. Apoi trimite manual un JSON de test către server și verifică exact ce rând apare în baza de date. Abia după aceea conectezi ESP32 și, la final, afișezi datele pe dashboard. Serverul trebuie să respingă mesajele fără marcaj de timp sau cu valori în afara intervalului, iar baza de date trebuie să păstreze ora în mod coerent.",
    "Fiabilitatea apare când testezi ce se întâmplă la lucruri obișnuite: Wi-Fi oprit, server repornit, senzor deconectat sau baterie slabă. ESP32 poate păstra temporar citiri într-o coadă și le poate retrimite când legătura revine; serverul poate marca înregistrările întârziate. Uptime se calculează raportând intervalul cu date valide la durata totală, iar golurile rămân vizibile. Nu șterge o anomalie doar fiindcă strică graficul: mai întâi verifici cauza și documentezi intervenția.",
    "Folosește numai alimentare USB sau baterii de 5 V, cu adultul prezent la cablare, și nu lucra la prize sau la rețeaua de 230 V. Nu publica adresa IP a casei, parola Wi-Fi ori programul familiei; dashboardul rămâne accesibil doar în rețeaua locală. Demo-ul „Arhitectura stației meteo” urmărește o citire de la senzor până la grafic, iar experimentul pe verigi transformă fiecare etapă într-un test observabil înainte de săptămâna de funcționare."
  ],
  demo: {
    type: "flow",
    title: "Arhitectura stației meteo",
    steps: [
      { label: "🌡️ Senzorii", info: "DHT22 (temperatură+umiditate) + LDR (lumină). Citiți la fiecare 5 minute — suficient pentru meteo, blând cu sistemul." },
      { label: "🧠 ESP32", info: "Citește senzorii, validează valorile (temperatura între -20 și 60? altfel aruncă), împachetează JSON." },
      { label: "📶 Wi-Fi → Server", info: "ESP32 face POST la serverul Pi: {temp: 22.5, umid: 45, lumina: 800}. Fără răspuns? Salvează local și retrimite!" },
      { label: "🗄️ Baza de date", info: "Pi-ul primește, validează din nou (niciodată nu crezi pe cuvânt rețeaua!), INSERT în SQLite cu timestamp." },
      { label: "📊 Dashboard", info: "Pagina web citește baza și desenează graficele zilei/săptămânii. Temperatura casei tale, cu istoric, CONSTRUIT de tine." }
    ]
  },
  experiment: {
    title: "Construcția pe verigi",
    materials: ["ESP32", "DHT22 + LDR + rezistențe", "Serverul Pi", "Python (Flask sau un receiver simplu)", "Jurnalul de proiect"],
    steps: [
      "Veriga 1: senzorii pe ESP32, valori corecte pe Serial. Nu continui până nu e stabil.",
      "Veriga 2: receiverul pe Pi (un mic server Flask care primește JSON și scrie în SQLite). Testezi cu date false trimise manual.",
      "Veriga 3: legătura ESP32→Pi reală. Prima linie REALĂ din senzor în baza de date = șampanie (suc).",
      "Veriga 4: dashboardul web cu grafice (Chart.js e prietenos). Citește din bază, desenează.",
      "Veriga 5: robustețea — ce se întâmplă la Wi-Fi căzut? la server oprit? la senzor desfăcut? Tratează fiecare caz."
    ],
    expected: "Lanț complet funcțional end-to-end + cel puțin un caz de eroare tratat elegant."
  },
  project: {
    title: "Săptămâna de funcționare continuă",
    goal: "Stația rulează neîntrerupt 7 zile, cu date complete și raport de funcționare.",
    steps: [
      "Instalează stația în locul final (afara? la geam? în cutie cu ventilație?) și pornește cronometrul.",
      "Zilnic: verifică datele, notează anomaliile, NU repara decât dacă e stricat — observă întâi.",
      "Analiza de final: graficele săptămânii + 3 descoperiri despre casa ta (când e cel mai cald? ce face lumina seara? umiditatea la dușuri?).",
      "Raportul de funcționare: uptime %, cazuri de eroare întâlnite, cum s-a comportat sistemul."
    ],
    success: ["7 zile × 24h de date (cu găuri explicate, dacă există)", "3 descoperiri reale din grafice", "Raport de funcționare profesionist"]
  },
  questions: [
    "Ce s-a stricat cel mai ciudat în săptămâna de funcționare? Ce te-a învățat?",
    "Cât de des e prea des pentru măsurători? Care e compromisul?",
    "Cum ai alimenta stația în afara casei, fără priză? (Baterii + panou solar — calculează!)",
    "Ce ai schimba la arhitectură dacă ai avea 10 stații, nu una?"
  ],
  exercises: [
    "Adaugă alerta: dacă temperatura > 30°, serverul afișează avertisment pe dashboard.",
    "Calculează consumul stației pe lună în lei (P = U × I × ore).",
    "Exportă datele săptămânii într-un CSV și desenează graficul și în Python (matplotlib)."
  ],
  parent: {
    watch: ["Copilul construiește pe verigi și testează fiecare — maturitate de sistem", "Răbdarea cu săptămâna de funcționare: ingineria reală are ritmul ei"],
    help: ["Găsiți stației un colț permanent — e primul „echipament de infrastructură” al casei", "Interesați-vă zilnic de grafice: „ce zice stația azi?” — publicul constant motivează"],
    redflags: ["Copilul repară sistemul în fugă și uită să noteze — regula: orice intervenție intră în jurnal", "Dezamăgire la prima noapte cu date lipsă — fix asta e lecția de fiabilitate; analizați cauza ca detectivii"]
  },
  pass: [
    "Sistem end-to-end funcțional, construit pe verigi",
    "7 zile de funcționare documentată",
    "Raport cu uptime, erori și descoperiri reale"
  ]
},
{
  id: "12.2", level: 12, num: 2, title: "Proiect integrat: Casa Inteligentă", icon: "🏠", duration: "3×90 min", isProject: true,
  objectives: [
    "Să construiască un sistem de automatizare cu reguli multiple și priorități",
    "Să proiecteze pentru fault tolerance: ce se întâmplă când ceva cade?",
    "Să implementeze control și monitorizare dintr-un panou central"
  ],
  explanation: [
    "O casă inteligentă este o rețea de senzori, reguli, actuatori și interfețe care lucrează împreună. O regulă are cel puțin cinci părți: ce intrare citește, ce condiție așteaptă, ce acțiune pornește, cât rămâne activă și cum poate fi oprită manual. De exemplu, lumina scade sub un prag și există mișcare, deci indicatorul de 5 V pornește pentru cinci minute. Scrierea acestor părți înainte de cod face contradicțiile vizibile.",
    "Când există mai multe reguli, trebuie o ierarhie. Siguranța și oprirea manuală au prioritate, apoi protecția echipamentului și abia după aceea confortul. Dacă două reguli cer stări opuse, sistemul nu trebuie să aleagă haotic; el aplică ordinea scrisă și înregistrează motivul. Un override manual permite omului să oprească automatizarea chiar dacă senzorul, Wi-Fi sau serverul transmit o valoare greșită.",
    "Fault tolerance înseamnă că sistemul recunoaște anumite erori și rămâne într-o stare controlată. Fail-safe este regula concretă aleasă pentru acel caz: la senzor deconectat, ieșirea de test se oprește, apare o alertă locală și automatizarea așteaptă confirmarea omului. Testează separat valoarea blocată, citirea imposibilă, rețeaua oprită, serverul indisponibil și repornirea dispozitivului. O regulă nu este considerată terminată până când trece și testul de eroare.",
    "Jurnalul transformă comportamentul invizibil în dovezi. Pentru fiecare decizie păstrează ora, intrarea observată, regula aplicată, acțiunea și eventuala eroare, fără a înregistra parole sau detalii inutile despre viața familiei. Panoul central afișează starea curentă și permite verificarea istoricului, dar nu devine singura protecție: funcția locală de siguranță trebuie să lucreze și când dashboardul nu se poate încărca.",
    "Proiectul folosește numai LED-uri, senzori și servomotoare mici alimentate la 5 V, sub supravegherea adultului. Nu conecta automatizarea la 230 V, gaz, calorifere, uși, încuietori sau sisteme de siguranță. Datele de mișcare sunt confidențiale: colectează doar ce este necesar, anunță familia și limitează păstrarea. Demo-ul „Gândirea fault-tolerant” introduce scenarii de eroare, iar experimentul verifică fiecare automatizare înainte de testul haosului."
  ],
  demo: {
    type: "flow",
    title: "Gândirea fault-tolerant, pas cu pas",
    steps: [
      { label: "📏 Regula", info: "„Dacă e întuneric ȘI e mișcare, aprinde indicatorul luminos local de 5 V timp de 5 minute.” O regulă simplă trebuie totuși verificată în caz de eroare." },
      { label: "❓ Dar dacă...", info: "Senzorul de mișcare rămâne blocat pe ON? → Lumina arde non-stop. Adaugi: durata maximă + verificare de coerență." },
      { label: "❓ Dar dacă...", info: "Wi-Fi cade? → Regula rulează LOCAL pe ESP32, nu pe server. Funcțiile critice NU depind de nor." },
      { label: "❓ Dar dacă...", info: "Senzorul de lumină e acoperit de o jucărie? → Valoarea nu se schimbă de 24h = suspect → alertă „senzor posibil blocat”." },
      { label: "✅ Fail-safe", info: "Principiul de aur: o eroare duce la o stare cunoscută și sigură: indicatorul de test se stinge, apare un mesaj local, iar omul decide următorul pas." }
    ]
  },
  experiment: {
    title: "Automatizările, una câte una",
    materials: ["ESP32 + senzori din proiectele anterioare", "Serverul Pi", "Jurnalul de decizii"],
    steps: [
      "Automatizarea 1: lumina de veghe (o ai de la N7 — acum o LEGI de server: raportare + control de la distanță).",
      "Automatizarea 2: alerta de temperatură (senzor + regulă + notificare pe dashboard).",
      "Automatizarea 3: detectorul de mișcare cu jurnal (PIR + log în baza de date: cine trece pe hol și când?).",
      "Pentru FIECARE: completează fișa „Dar dacă...” cu minimum 4 scenarii de eroare și soluția lor.",
      "Testul haosului: un părinte „sabotează” sistemul (deconectează un senzor, oprește Wi-Fi). Se comportă sigur?"
    ],
    expected: "3 automatizări funcționale + fișe „Dar dacă” complete + testul haosului trecut."
  },
  project: {
    title: "Panoul de control al casei",
    goal: "Dashboard central care arată și controlează toate automatizările + audit de siguranță.",
    steps: [
      "Panoul web: starea fiecărui senzor LIVE, istoricul automatizărilor, butoane de override manual.",
      "Jurnalul automatizărilor: fiecare declanșare de regulă cu motivul ei („lumina aprinsă: întuneric 210 + mișcare”).",
      "Auditul final de siguranță: parcurge fiecare automatizare cu întrebarea „care e cel mai rău lucru posibil?” — și demonstrează că fail-safe-ul îl acoperă.",
      "Prezentare: demonstrezi sistemul, apoi INVOCI SINGUR o eroare (scoți un senzor) și arăți cum sistemul rămâne sigur. Asta impresionează orice inginer."
    ],
    success: ["Panou funcțional cu override manual", "Jurnal de automatizări consultabil", "Audit fail-safe demonstrat live"]
  },
  questions: [
    "De ce e override-ul manual OBLIGATORIU la orice automatizare?",
    "Ce automatizare NU ai construi niciodată fără supraveghere umană? De ce?",
    "Cine e responsabil dacă casa inteligentă greșește? Senzorul, codul, sau tu?",
    "Cum echilibrezi confortul cu datele colectate despre familie? (Jurnalul de mișcare știe când mergi la baie!)"
  ],
  exercises: [
    "Adaugă priorități: ce se întâmplă când două reguli se contrazic? Scrie ierarhia.",
    "Implementează „modul vacantă”: comportament diferit când nimeni nu e acasă.",
    "Scrie politica de date a casei: ce se loghează, cât se păstrează, cine vede."
  ],
  parent: {
    watch: ["Copilul gândește în scenarii de eroare NATURAL, nu ca o corvoadă", "Respectul pentru datele familiei în propriul sistem — etica practicată, nu predată"],
    help: ["Fiți „sabotorul” din testul haosului cu entuziasm dramatic — e distractiv și serios deodată", "Discuția despre jurnalul de mișcare e o lecție de confidențialitate acasă — faceți-o cu onestitate"],
    redflags: ["Copilul vrea să automatizeze ceva periculos (curent 230V, gaz, uși) — STOP: laboratorul rămâne la 5V; scrieți-le pe lista „când voi fi electrician”", "Override-ul manual lipsește „că oricum merge” — condiție de netrecere a proiectului"]
  },
  pass: [
    "3 automatizări integrate cu panou central",
    "Fișe „Dar dacă” + test haos trecut",
    "Audit fail-safe demonstrat live familiei"
  ]
},
{
  id: "12.3", level: 12, num: 3, title: "Proiect integrat: Robotul cu misiune complexă", icon: "🤖", duration: "3×90 min", isProject: true,
  objectives: [
    "Să extindă robotul din N8 cu senzori multipli și decizii combinate",
    "Să implementeze o misiune cu priorități și cazuri limită",
    "Să raporteze telemetrie live la server"
  ],
  explanation: [
    "Un robot integrat combină senzorii, care observă mediul, cu actuatorii, care produc mișcare sau lumină. Spre deosebire de un simplu program care rulează o singură regulă, robotul trebuie să ia decizii din mai multe citiri, uneori contradictorii. De exemplu, senzorul de linie cere virarea stânga, dar senzorul de distanță vede un obstacol; prioritatea de siguranță oprește motoarele înainte ca misiunea să continue.",
    "Ierarhia deciziilor se scrie înainte de cod. Primul nivel verifică obstacolele și stările de eroare, al doilea execută misiunea, iar al treilea optimizează viteza sau consumul. Fiecare regulă trebuie să specifice pragul, acțiunea și condiția de ieșire. Astfel, „oprește la obstacol” devine „dacă distanța măsurată este sub 15 cm, oprește ambele motoare; reia deplasarea numai după două citiri consecutive peste prag”.",
    "Bucla de control și telemetria au responsabilități diferite. Controlul rulează local, rapid și predictibil, chiar dacă Wi-Fi dispare; el nu așteaptă dashboardul pentru a frâna. Telemetria trimite periodic starea, distanțele, bateria și ultima decizie către server, permițând diagnosticarea după o ezitare sau o coliziune. Pentru a evita aglomerarea rețelei, mesajele sunt scurte, au marcaj de timp și nu conțin parole sau adrese private.",
    "Misiunea se testează în etape: motoarele pe suport, senzorii citiți corect, frânarea la obstacol, urmărirea liniei și apoi traseul complet. Repetă fiecare etapă de mai multe ori și notează nu doar dacă robotul a reușit, ci unde a ezitat și cât a consumat. Dacă modifici o regulă, retestezi întreaga misiune, fiindcă o optimizare a vitezei poate strica frânarea sau stabilitatea în curbe.",
    "Testele se fac la viteză mică, pe un traseu liber, cu roțile uneori ridicate pentru verificarea logicii și cu un adult capabil să oprească alimentarea. Se folosesc numai baterii sau alimentare de 5 V potrivită kitului; robotul nu este atașat de uși, persoane, animale sau obiecte periculoase. Demo-ul „Ierarhia deciziilor” arată ordinea regulilor, iar experimentul măsoară misiunea în cinci rulări și folosește telemetria pentru a explica fiecare eșec."
  ],
  demo: {
    type: "flow",
    title: "Ierarhia deciziilor robotului",
    steps: [
      { label: "🥇 Siguranța", info: "Senzorul ultrasonic vede 15 cm? STOP imediat, indiferent ce zic ceilalți senzori. Siguranța nu votează, decide." },
      { label: "🥈 Misiunea", info: "Drum liber → logica de urmărire a liniei preia controlul. Senzorii IR sunt acum șefii." },
      { label: "🥉 Optimizarea", info: "Pe linie și liber? Viteza crește lin. Curbe? Frânează înainte. Al treilea nivel face robotul elegant, nu doar funcțional." },
      { label: "📡 Telemetria", info: "La fiecare secundă: starea, distanțele, decizia curentă → Wi-Fi → dashboard. Tu vezi CE GÂNDEȘTE robotul, live." },
      { label: "🔍 Analiza", info: "Misiune terminată? Istoricul telemetriei îți arată exact UNDE a ezitat și DE CE. Debugging cu dovezi, nu cu ghici." }
    ]
  },
  experiment: {
    title: "Upgrade-urile",
    materials: ["Robotul din N8", "Senzori suplimentari", "Serverul Pi", "Dashboard de telemetrie (Flask + pagină simplă)"],
    steps: [
      "Scrie ierarhia priorităților pe hârtie și TRANSFORMĂ-O în cod (siguranța e primul if, mereu).",
      "Adaugă telemetria: robotul trimite JSON la server la fiecare secundă (stare, senzori, decizie).",
      "Construiește dashboardul live: numerele se schimbă în timp real când miști mâna în fața robotului.",
      "Misiunea complexă: parcurge pista, ocolește 2 obstacole, trece prin „zona întunecată” (aprinde farul singur!), ajunge la țintă și raportează.",
      "Rulează de 5 ori și analizează telemetria: unde e cea mai lentă secțiune? Optimizeaz-o cu dovezi."
    ],
    expected: "Misiune complexă 4/5 reușite + telemetrie live funcțională + o optimizare bazată pe date."
  },
  project: {
    title: "Competiția și dosarul final al robotului",
    goal: "Eveniment de demonstrație + dosarul complet: de la șasiu gol la robot cu telemetrie.",
    steps: [
      "Dosarul: arhitectura, ierarhia deciziilor, schema electrică, cod comentat, grafice din telemetrie.",
      "Secțiunea specială: „Cele 5 cele mai grele bug-uri și povestea fiecăruia” — cu metoda din 4.7.",
      "Demonstrația publică: misiunea live + ecranul cu telemetria vizibil publicului („uitați, a văzut obstacolul ACUM”).",
      "Întrebări din public: pregătește-te la „de ce a făcut X?” — cu telemetria, AI RĂSPUNSUL."
    ],
    success: ["Dosar complet cu telemetrie analizată", "Demo live cu telemetrie vizibilă", "5 povești de bug-uri documentate"]
  },
  questions: [
    "De ce e siguranța mereu primul if, chiar și când încetinește robotul?",
    "Ce informație din telemetrie te-a surprins cel mai mult?",
    "Cum arată telemetria roverelor de pe Marte, cu 20 de minute întârziere? Ce schimbă asta?",
    "Ce senzor ai adăuga primul dacă ai avea buget nelimitat? Ce misiune nouă ar deschide?"
  ],
  exercises: [
    "Adaugă în telemetrie „gradul de încredere” al fiecărei decizii și afișează-l.",
    "Scrie funcția de „black box”: ultimele 60 de secunde de telemetrie salvate la orice eroare.",
    "Compară două strategii de ocolire pe date, nu pe bănuială."
  ],
  parent: {
    watch: ["Copilul rezolvă contradicții de senzori pe HÂRTIE întâi", "Folosirea telemetriei ca dovadă în explicații, nu „cred că”"],
    help: ["Proiectați dashboardul pe un ecran vizibil la demo — efectul la public e garantat", "Celebrați bug-urile povestite bine: ele sunt dovada inginerului adevărat"],
    redflags: ["Copilul ascunde ratele de eșec (ex: demonstrează doar cele reușite) — raportul onest e condiția de absolvire a nivelului", "Adaos de funcții fără testarea celor vechi — regula: orice schimbare cere re-testul misiunii complete"]
  },
  pass: [
    "Misiune complexă cu priorități funcțională 4/5",
    "Telemetrie live + analiză pe date",
    "Dosar final complet cu poveștile bug-urilor"
  ]
},
{
  id: "12.4", level: 12, num: 4, title: "Proiect integrat: AI Vision în acțiune", icon: "👁️", duration: "3×90 min", isProject: true,
  objectives: [
    "Să conecteze un model AI de viziune la o acțiune fizică reală",
    "Să evalueze onest performanța în condiții reale (nu de laborator)",
    "Să proiecteze sistemul conștient de limitele modelului"
  ],
  explanation: [
    "AI Vision este un lanț format din cameră, model, decizie și acțiune. Camera transformă scena în pixeli; modelul compară pixelii cu tiparele învățate și oferă o clasă plus un scor; sistemul aplică un prag și pornește o acțiune sigură. De exemplu, dacă modelul recunoaște un obiect permis cu scor de 91 la sută, poate aprinde un LED de 5 V. Scorul este o estimare, nu o certificare a realității.",
    "Pragul de decizie separă automatizarea de solicitarea de ajutor. Un prag prea mic produce multe acțiuni greșite; un prag prea mare produce multe cazuri „nesigur”, chiar când obiectul este prezent. Alegerea pragului trebuie făcută după date, nu după impresie: testezi mai multe valori, numeri erorile și explici ce tip de greșeală este mai acceptabil pentru sarcina aleasă.",
    "Testarea de laborator nu este suficientă. Modelul trebuie verificat în locul unde va funcționa, cu lumina, fundalul, distanța și obiectele reale. Construiește o matrice de confuzie: pe fiecare rând pui clasa adevărată, iar pe fiecare coloană clasa aleasă de model. Matricea arată dacă robotul confundă merele cu perele sau dacă clasifică greșit un obiect nou, informație pe care un singur procent ascuns o poate pierde.",
    "Când scorul este sub prag sau apare o clasă necunoscută, fallback-ul trebuie să fie sigur și vizibil: nu executa acțiunea, afișează „verifică” și păstrează doar informația necesară în jurnal. Dacă modelul controlează un servomotor, limitează mișcarea și permite oprirea manuală. Nu conecta camera sau acțiunea la 230 V, uși, încuietori, gaz ori sisteme care pot răni sau bloca persoane.",
    "Camera introduce o responsabilitate specială: filmează numai obiecte și spații permise, anunță persoanele din zonă și nu publica imaginile. Nu folosi recunoaștere facială și nu colecta date despre copii sau familii fără acordul adultului. Demo-ul „Lanțul AI Vision complet” urmărește fiecare etapă, iar experimentul compară performanța de laborator cu trei zile de funcționare reală și documentează iterația după erori."
  ],
  demo: {
    type: "flow",
    title: "Lanțul AI Vision complet",
    steps: [
      { label: "📷 Camera", info: "O cameră USB pe Pi (sau telefon vechi) face poze la fiecare câteva secunde sau la mișcare." },
      { label: "🧠 Modelul", info: "Modelul TĂU (exportat din Teachable Machine ca TensorFlow Lite) clasifică: „pachet la ușă: 91%”." },
      { label: "🎚️ Pragul", info: "Sub 80% încredere? → „nesigur”, cere om. Peste? → acțiune automată. Pragul e DECIZIE DE DESIGN, nu detaliu." },
      { label: "⚡ Acțiunea", info: "Pachet detectat → notificare pe dashboard + LED + log în baza de date. Lumea reală, schimbată de AI-ul tău." },
      { label: "📊 Urmărirea", info: "Fiecare clasificare e logată cu încrederea ei. Săptămânal: cât de des a avut dreptate? Modelul are carnet de note." }
    ]
  },
  experiment: {
    title: "Detectorul real, în lumea reală",
    materials: ["Raspberry Pi + cameră (sau telefon vechi cu aplicație IP camera)", "Model antrenat (N10)", "ESP32 pentru acțiune (opțional)"],
    steps: [
      "Alege sarcina: detectează pachetul la ușă / pisica pe canapea / planta însetată / cineva la birou.",
      "Antrenează/antrenează-din-nou modelul cu poze DIN LOCAȚIA REALĂ (aceeași cameră, aceleași lumini!).",
      "Leagă lanțul: cameră → predicție → prag → acțiune (notificare/LED/servo).",
      "Testul realității: 3 zile de funcționare, log complet. Calculează: precizia reală vs cea de laborator.",
      "Analiza eșecurilor: CE l-a păcălit? Adaugă date exact pe cazurile ratate și reantrenează. Măsoară îmbunătățirea."
    ],
    expected: "Lanț funcțional + măsurare onestă laborator-vs-realitate + o iterație documentată."
  },
  project: {
    title: "Raportul de performanță și etica sistemului",
    goal: "Raport complet al sistemului AI + analiza etică a folosirii camerei.",
    steps: [
      "Raportul tehnic: precizie măsurată, cazuri de eșec tipice, efectul pragului (prag mare = mai puține greșeli dar mai multe „nesigur”?).",
      "Graficul compromisului: încredere vs acoperire — la ce prag e sistemul tău cel mai util?",
      "Analiza etică: o cameră în casă colectează date despre OAMENI. Cine e informat? Unde se salvează pozele? Cât se păstrează? Scrie politica sistemului.",
      "Prezentarea finală: demo live + raportul + discuția etică. Combo-ul tehnician+etician e semnătura absolventului."
    ],
    success: ["Raport cu măsurători reale", "Prag justificat cu date", "Politică etică scrisă și aplicată"]
  },
  questions: [
    "De ce scade performanța în lumea reală față de laborator? Dă 3 cauze din EXPERIENȚA TA.",
    "Unde pui pragul la un sistem medical? La unul de sortare LEGO? De ce diferă?",
    "Cine trebuie să știe despre camera ta și de ce? Ce zice legea despre camere? (Cercetați împreună!)",
    "Ce s-ar întâmpla dacă cineva ar „păcăli” intenționat modelul tău? Cât de greu e? (AI adversarial e real!)"
  ],
  exercises: [
    "Construiește graficul prag-vs-performanță din datele tale reale.",
    "Testează sistemul cu intenție de păcălire (fundal schimbat, obiect similar). Raportează.",
    "Scrie „afișul camerei”: anunțul onest pentru oricine intră în vizor."
  ],
  parent: {
    watch: ["Copilul măsoară înainte să concluzioneze — reflexul ingineresc complet format", "Discuția etică vine SINGURĂ de la el — semnul nivelului 11 înrădăcinat"],
    help: ["Un telefon vechi e camera perfectă (aplicații IP webcam gratuite) — zero cost", "Faceți împreună cercetarea despre legalitatea camerelor — e materialul perfect de învățare"],
    redflags: ["Copilul vrea cameră în spații private (baie, camera fraților) — discuție fermă despre demnitate și legalitate; găsiți alternative", "Modelul „merge perfect” la prezentare — cereți datele celor 3 zile; entuziasmul nu înlocuiește măsurarea"]
  },
  pass: [
    "Lanț AI→acțiune funcțional în condiții reale",
    "Raport cu măsurători oneste + iterație dovedită",
    "Analiză etică scrisă și aplicată"
  ]
},
{
  id: "12.5", level: 12, num: 5, title: "PROIECTUL FINAL: Problema ta, soluția ta", icon: "🏆", duration: "4-8 săptămâni", isProject: true,
  objectives: [
    "Să identifice SINGUR o problemă reală și să proiecteze soluția completă",
    "Să parcurgă metoda în 10 pași: observă → definește → imaginează → proiectează → construiește → testează → depanează → îmbunătățește → documentează → prezintă",
    "Să livreze prototipul funcțional cu documentație completă și prezentare publică"
  ],
  explanation: [
    "Proiectul final nu este o temă mai mare, ci o tranziție de la exercițiu la inginerie: alegi o problemă reală, definești pentru cine există și stabilești cum vei ști că soluția ajută. O cerință bună este observabilă și testabilă, de exemplu „indicatorul se aprinde în cel mult două secunde când senzorul detectează întuneric”. Evită cerințe precum „să fie inteligent” sau „să funcționeze perfect”, care nu spun ce se măsoară.",
    "Începi prin a observa fără a impune soluția. Intervievezi persoanele afectate, întrebi cât de des apare problema, ce fac acum și ce consecințe are. Apoi alegi o problemă potrivită vârstei, timpului și resurselor tale și compari cel puțin trei soluții posibile. Alegerea finală trebuie explicată prin beneficii, costuri, complexitate și riscuri, nu doar prin faptul că prima idee ți s-a părut interesantă.",
    "Proiectarea se face pe hârtie înainte de construcție: componente, fluxul datelor, cerințe, criterii de succes, cazuri limită și plan de testare. Construiești incremental, pe verigi, și salvezi versiuni. La fiecare test schimbi o singură ipoteză, notezi condițiile și rezultatul, apoi decizi dacă păstrezi modificarea. Când apare o eroare, folosești metoda de depanare: reproduci problema, izolezi cauza, formulezi o ipoteză, testezi cea mai mică reparație și verifici întregul sistem.",
    "Testarea cu utilizatori cere acord și respect. Explici scopul, permiți persoanei să refuze sau să se oprească și colectezi doar datele necesare. Observi ce face, nu o conduci către răspunsul dorit; notezi unde se blochează și ce nu înțelege. Prototipul este făcut pentru învățare, nu pentru a ascunde limitele: documentează ce funcționează, ce nu funcționează, ce nu ai avut timp să testezi și ce ar necesita ajutorul unui specialist.",
    "Folosește numai circuite de 5 V, baterii potrivite și unelte sub supravegherea adultului. Nu lucra la 230 V, prize, gaz, foc, vehicule, uși, încuietori sau sisteme care pot răni ori bloca oameni. Nu publica parole, adrese IP, date personale, imagini ale altora sau locația casei. Demo-ul „Metoda în 10 pași” oferă scheletul deciziilor, iar experimentul transformă observația într-o problemă validată înainte ca săptămânile de construcție să înceapă."
  ],
  demo: {
    type: "flow",
    title: "Metoda în 10 pași a inginerului",
    steps: [
      { label: "1️⃣ Observă", info: "O săptămână de vânătoare: ce te enervează pe tine sau pe ai tăi? Notează 10 probleme reale. Cea bună se ascunde printre ele." },
      { label: "2️⃣ Definește", info: "Alege una și scrie-o precis: cine are problema, când, cât de rău, ce s-a încercat deja. O problemă bine definită e pe jumătate rezolvată." },
      { label: "3️⃣ Imaginează", info: "3 soluții diferite, desenate. Forțează-te să treci de prima idee — diversitatea e secretul." },
      { label: "4️⃣ Proiectează", info: "Arhitectura pe hârtie: componente, fluxul datelor, costul, riscurile. Planul e harta — fără el, construcția e rătăcire." },
      { label: "5️⃣ Construiește", info: "Incremental, pe verigi, fiecare testată. Versiuni salvate. Niciodată totul-deodată." },
      { label: "6️⃣ Testează", info: "Oameni reali, cazuri reale, rezultate notate. Utilizatorul e mereu surprinzător." },
      { label: "7️⃣ Depanează", info: "Metoda în 8 pași din 4.7, jurnal de bug-uri, zero panică. Erorile sunt profesorii." },
      { label: "8️⃣ Îmbunătățește", info: "Versiunea 2 cu lecțiile învățate. Ingineria nu se termină, iterează." },
      { label: "9️⃣ Documentează", info: "Jurnalul complet: problema, deciziile, eșecurile, soluțiile, măsurătorile. Ca să poată altcineva (sau tu, peste un an) să continue." },
      { label: "🔟 Prezintă", info: "Demonstrație live + povestea + întrebări. Dacă poți explica fiecare fir și fiecare linie de cod — AI ABSOLVIT." }
    ]
  },
  experiment: {
    title: "Săptămâna observării",
    materials: ["Jurnalul de proiect (nou, dedicat)", "Familia și prietenii ca teren de observație"],
    steps: [
      "7 zile: notează ORICE problemă observată — ta sau a altora. Ținta: 10+ probleme.",
      "Pentru top 3: intervievează „victimele”. Cât de des? Cât de rău? Ce fac acum? (Interviul e abilitate de inginer!)",
      "Alege problema câștigătoare și scrie definiția într-o frază perfectă.",
      "Validarea cu mentorul (părinte): e reală? e la măsura ta în 4-8 săptămâni? e sigură? E A TA?"
    ],
    expected: "10+ probleme notate, 3 intervievate, una definită perfect și validată."
  },
  project: {
    title: "Marea Prezentare Finală",
    goal: "Prototip funcțional + documentație completă + prezentare publică de 10 minute.",
    steps: [
      "Planul pe săptămâni: ce verigă e gata până când. Revizuiește-l săptămânal cu mentorul.",
      "Construcția: regulile de aur din tot programul (incremental, versiuni, jurnal, testat cu oameni).",
      "Documentația: jurnalul complet al proiectului + fișa finală (problemă, soluție, arhitectură, teste, limitări, v2).",
      "Prezentarea: 10 minute, public real (familie extinsă, prieteni, poate clasa!), demo live, sesiune de întrebări.",
      "Ceremonia de absolvire: discursul tău — „ce știu acum că pot face, pe care nu știam că pot”."
    ],
    success: ["Prototip funcțional demonstrat live", "Documentație completă și onestă (limitări incluse!)", "Prezentare susținută + răspunsuri la întrebări", "Problemă aleasă și înțeleasă 100% de copil"]
  },
  questions: [
    "Ce ai face diferit dacă ai reîncepe proiectul mâine?",
    "Care pas din cei 10 a fost cel mai greu? Care cel mai surprinzător?",
    "Ce parte din proiect NU ai fi putut face acum un an? Ce spune asta despre tine?",
    "Ce problemă vei vâna în continuare, după absolvire?"
  ],
  exercises: [
    "Scrie „scrisoarea către mine de acum un an”: ce să nu se teamă, ce să facă mai devreme.",
    "Arhivează complet proiectul: cod, scheme, poze, jurnal — într-un singur loc ordonat.",
    "Ajută un copil mai mic (sau un prieten) cu primul lui pas în tehnologie. Predă mai departe."
  ],
  parent: {
    watch: ["Problema e a LUI — rezistați cu toată dragostea tentației de a o „îmbunătăți” voi", "Copilul cere ajutor ȚINTIT („cum fac X”) nu general („nu merge”) — semnul maturității"],
    help: ["Rolul vostru: mentor care pune întrebări, nu executant. „Ce-ai încercat?” și „ce spune jurnalul?” sunt uneltele voastre", "Faceți din prezentarea finală un eveniment memorabil: invitați, aplauze, diplomă, tort. Copilul a construit 12 niveluri de cunoaștere — e o realizare uriașă"],
    redflags: ["Proiectul e de fapt al părintelui (se vede la întrebări!) — reduceți amploarea până e 100% al copilului; un proiect mic AL LUI bate unul mare AL VOSTRU", "Copilul eșuează și vrea să renunțe în săptămâna 2 — reîncadrarea: un proiect „eșuat” documentat onest TRECE examenul; abandonul tăcut, nu"]
  },
  pass: [
    "Problemă reală identificată și definită SINGUR",
    "Prototip funcțional construit cu metoda în 10 pași",
    "Documentație completă + prezentare publică susținută",
    "Poate explica fiecare decizie din proiectul său"
  ]
}
];
