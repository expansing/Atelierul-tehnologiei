/* Atelierul Tehnologiei - Lecții Nivelurile 3-4 */
const LESSONS_B = [
/* ==================== NIVELUL 3 ==================== */
{
  id: "3.1", level: 3, num: 1, title: "Hardware, Firmware, OS, Aplicații", icon: "🥞", duration: "45 min",
  objectives: [
    "Să numească cele 4 straturi: hardware → firmware → sistem de operare → aplicații",
    "Să dea câte un exemplu real pentru fiecare strat",
    "Să explice de ce aplicația nu vorbește direct cu hardware-ul"
  ],
  explanation: [
    "Ce este: hardware este partea fizică a unui dispozitiv, precum procesorul, memoria, ecranul, bateria și cablurile. Firmware este un program păstrat în dispozitiv, care știe operații de bază și ajută hardware-ul să pornească. Pe un PC, UEFI sau BIOS este un exemplu de firmware. Sistemul de operare, numit OS, administrează resursele și oferă servicii programelor, iar o aplicație face o sarcină pentru utilizator.",
    "Cum funcționează pas cu pas: la pornire, firmware-ul verifică și inițializează piese importante, apoi pornește sistemul de operare. OS-ul organizează memoria, fișierele, dispozitivele și drepturile utilizatorilor. Când deschizi o aplicație, aceasta cere OS-ului servicii, cum ar fi citirea unui fișier sau afișarea unei ferestre. OS-ul traduce cererea pentru hardware-ul concret.",
    "Exemplu concret: un joc cere să salveze scorul. Jocul este aplicația, OS-ul primește cererea și verifică locul și permisiunea, iar hardware-ul stochează datele pe SSD sau memorie flash. Jocul nu trebuie să știe cum funcționează fiecare model de disc. Un driver, adică un program care ajută OS-ul să comunice cu o piesă, poate completa această traducere.",
    "Ce nu este și limită: straturile sunt un model de învățare, nu patru cutii perfect separate în orice aparat. Unele dispozitive au un OS foarte mic, altele au firmware în mai multe componente, iar un router poate rula aplicații și servicii în interior. Firmware-ul nu este doar un „OS mai mic”, iar aplicația nu este aceeași lucru cu sistemul de operare doar pentru că ambele sunt programe.",
    "Legătura cu demo: vei clasifica exemplele pe patru etaje și vei justifica fiecare alegere. Când privești un dispozitiv, pornește de jos: ce pot atinge, ce program îl pornește, cine administrează resursele și ce program folosesc eu? Această întrebare te ajută să explici de ce o aplicație nu vorbește direct și diferit cu fiecare cip."
  ],
  demo: {
    type: "classify",
    title: "Pe ce etaj stă?",
    intro: "Sortează fiecare element în stratul corect!",
    zones: ["🔩 Hardware", "⚙️ Firmware", "🐧 Sistem de Operare", "🎮 Aplicație"],
    items: [
      { label: "Procesorul", zone: 0 },
      { label: "UEFI/BIOS", zone: 1 },
      { label: "Linux", zone: 2 },
      { label: "Minecraft", zone: 3 },
      { label: "Placa video", zone: 0 },
      { label: "Programul din telecomandă", zone: 1 },
      { label: "Windows", zone: 2 },
      { label: "Browserul", zone: 3 }
    ]
  },
  experiment: {
    title: "Radiografia dispozitivelor",
    materials: ["Caiet de jurnal"],
    steps: [
      "Alege 3 dispozitive: laptop, telefon, și unul surprinzător (smart TV, consolă, router).",
      "Pentru fiecare, desenează stiva: hardware → firmware → OS → aplicații.",
      "La telefon: ce OS are? La smart TV? (Surpriză: multe rulează Linux!)",
      "Ghicește: ce firmware are o periuță de dinți electrică? Are aplicații?"
    ],
    expected: "3 stive complete. Concluzia: aproape orice cu un buton are toate cele 4 straturi."
  },
  project: {
    title: "Afișul celor 4 etaje",
    goal: "Creează o diagramă de tip clădire cu cele 4 straturi, pentru 3 dispozitive diferite.",
    steps: [
      "Desenează clădirea cu 4 etaje pe o coală A3.",
      "Populeaz-o pentru laptop: componente reale → UEFI → Linux/Windows → aplicațiile tale.",
      "Adaugă lângă clădirile telefonului și consolei.",
      "Prezintă: „ce se întâmplă de jos în sus când apăs butonul de pornire?”"
    ],
    success: ["3 stive corecte", "Explicația pornirii în ordinea corectă", "Un exemplu de firmware non-PC"]
  },
  questions: [
    "De ce nu poate un joc să scrie direct pe hard disk, fără sistem de operare?",
    "Firmware-ul se poate șterge ca o aplicație? Ce s-ar întâmpla?",
    "Ce se întâmplă mai întâi când pornește PC-ul: OS-ul sau firmware-ul?",
    "O mașină are toate cele 4 straturi? Descrie-le."
  ],
  exercises: [
    "Clasifică: driver de imprimantă, Excel, cipul BIOS, tastatura, Android.",
    "Află ce firmware are routerul de acasă (caută în meniul lui, cu un părinte).",
    "Găsește 3 dispozitive din casă care rulează Linux fără să știi."
  ],
  parent: {
    watch: ["Copilul vede straturile, nu o cutie magică", "Curiozitatea despre dispozitivele „prostești” (router, TV)"],
    help: ["La orice dispozitiv din casă, jucați „ghicește OS-ul”", "Explicați că update-urile de telefon sunt update-uri de OS — de aceea contează"],
    redflags: ["Copilul confundă aplicația cu OS-ul — jucați clasificarea din nou cu exemple noi"]
  },
  pass: [
    "Enumără cele 4 straturi în ordine, cu exemple",
    "Explică rolul de intermediar al OS-ului",
    "Identifică stiva completă a unui dispozitiv nou"
  ]
},
{
  id: "3.2", level: 3, num: 2, title: "Terminalul - vocea directă a calculatorului", icon: "⌨️", duration: "50 min",
  objectives: [
    "Să deschidă un terminal și să scrie primele comenzi",
    "Să înțeleagă că GUI-ul și terminalul vorbesc cu același sistem",
    "Să execute: pwd, ls, cd, echo, whoami, date"
  ],
  explanation: [
    "Ce este: terminalul este un program prin care trimiți instrucțiuni scrise către sistemul de operare și vezi răspunsul în text. O comandă este instrucțiunea tastată, iar Enter cere executarea ei. Interfața grafică, numită GUI, folosește ferestre și butoane; terminalul folosește text. Ambele cer servicii aceluiași sistem, doar că oferă forme diferite de control.",
    "Shell-ul este programul care citește textul din terminal, îl interpretează și pornește comanda potrivită. Terminalul poate afișa inputul tastat, procesarea făcută de shell și outputul produs de sistem. Nu este o zonă magică și nici un loc unde calculatorul „ghicește”: dacă scrii greșit un nume sau o opțiune, primești o eroare și trebuie să citești mesajul.",
    "Cum funcționează pas cu pas: scrii `pwd`, shell-ul caută programul cu acest nume, sistemul verifică folderul curent, apoi textul cu calea este afișat. `ls` listează conținutul folderului, iar `cd` schimbă folderul curent. După fiecare comandă, verifică rezultatul cu o întrebare simplă: unde sunt, ce văd și ce s-a schimbat?",
    "Exemplu concret: într-o interfață grafică deschizi un folder cu dublu clic; în terminal scrii `cd Documente`. În GUI alegi un fișier din listă; cu `ls` ceri lista. Comanda `whoami` afișează utilizatorul curent, iar `date` afișează data și ora sistemului. Aceste comenzi sunt potrivite pentru orientare, dar modificarea fișierelor cere atenție suplimentară.",
    "Ce nu este și legătura cu demo: terminalul nu oferă automat mai multă siguranță decât butoanele și nu trebuie să rulezi o comandă pe care nu o înțelegi. Demonstrația arată drumul scrii → shell interpretează → sistem execută → răspuns apare. Lucrează într-un folder de laborator, notează comanda și rezultatul și cere ajutor înainte de comenzi care șterg sau schimbă permisiuni."
  ],
  demo: {
    type: "flow",
    title: "Călătoria unei comenzi",
    steps: [
      { label: "⌨️ Scrii", info: "Tastezi: ls. Apeși Enter. Terminalul citește textul tău." },
      { label: "📖 Shell-ul interpretează", info: "Shell-ul (programul din terminal) traduce: „utilizatorul vrea lista fișierelor din folderul curent”." },
      { label: "🐧 Sistemul execută", info: "Sistemul de operare citește folderul de pe disc și adună numele fișierelor." },
      { label: "📤 Răspunsul", info: "Rezultatul se întoarce în terminal ca text: Documente  Descărcări  Muzică..." },
      { label: "🔁 Gata de următoarea", info: "Terminalul așteaptă comanda următoare. Tu ești șeful." }
    ]
  },
  experiment: {
    title: "Prima expediție în terminal",
    materials: ["Un calculator cu Linux (sau terminal pe orice OS)"],
    steps: [
      "Deschide terminalul. Scrie whoami și apasă Enter. Cine ești?",
      "Scrie pwd. Unde te afli în harta fișierelor?",
      "Scrie ls. Ce vezi? Scrie ls -l. Ce informații extra apar?",
      "Scrie cd Documente (sau un folder din lista), apoi pwd din nou. Ți-ai dat seama că te-ai mutat?",
      "Scrie echo \"Salut, sunt hackerul casei\" și date. Notează în jurnal toate cele 6 comenzi și ce fac."
    ],
    expected: "6 comenzi executate cu succes, înțelese și notate în jurnal cu explicații proprii."
  },
  project: {
    title: "Cheat-sheet-ul meu de terminal",
    goal: "Construiește propriul afiș cu comenzile învățate, cu desene și explicații.",
    steps: [
      "Pentru fiecare comandă: numele, ce face, un exemplu real rulat de tine.",
      "Desenează pentru fiecare o pictogramă sau o glumă vizuală (pwd = „unde-s?”).",
      "Adaugă o secțiune „greșeli amuzante pe care le-am făcut”.",
      "Lipește afișul lângă calculator — e arma ta secretă pentru nivelurile următoare."
    ],
    success: ["Minimum 6 comenzi documentate", "Exemple reale, nu copiate", "Cel puțin o greșeală documentată cu lecția ei"]
  },
  questions: [
    "De ce preferă unii programatori terminalul în locul butoanelor?",
    "Ce se întâmplă dacă scrii o comandă care nu există? Încearcă: blabla.",
    "Cum se numește programul care îți interpretează comenzile?",
    "Terminalul e input, procesare sau output? (Truc: e toate trei!)"
  ],
  exercises: [
    "Rulează: ls, ls -l, ls -a. Ce diferență observi între ele?",
    "Folosind doar terminalul, intră într-un folder și întoarce-te cu cd ...",
    "Scrie în terminal un mesaj cu echo care să conțină numele tău și data curentă."
  ],
  parent: {
    watch: ["Copilul nu se teme de ecranul negru", "Notează comenzile în jurnal fără să i se ceară"],
    help: ["Instalați Linux pe un calculator vechi sau folosiți o mașină virtuală — greșelile devin gratuite", "Jucați „comanda zilei”: o comandă nouă la masă, ghicind ce face înainte s-o rulați"],
    redflags: ["Copilul copiază comenzi de pe internet fără să le înțeleagă — regula: nimic nu se rulează până nu poate explica ce face"]
  },
  pass: [
    "Deschide terminalul și folosește singur pwd, ls, cd, echo",
    "Explică ce se întâmplă de la tastare la răspuns",
    "Are jurnalul cu comenzi completat"
  ]
},
{
  id: "3.3", level: 3, num: 3, title: "Fișiere, directoare și permisiuni", icon: "📁", duration: "50 min",
  objectives: [
    "Să navigheze ierarhia Linux (/ → home → documente)",
    "Să creeze, copieze, mute și șteargă fișiere din terminal",
    "Să explice ce înseamnă permisiunile citire/scriere/executare"
  ],
  explanation: [
    "Ce este: un fișier păstrează informație, precum text, fotografie, sunet sau program. Un director, numit și folder, grupează fișiere și alte directoare. În Linux, ierarhia pornește din `/`, numită rădăcină; `/home` conține de obicei directoarele utilizatorilor, iar `/etc` păstrează multe configurări. Calea este adresa care spune cum ajungi la un obiect în acest arbore.",
    "Permisiunile descriu cine are voie să citească, să scrie sau să execute. `r` înseamnă citire, `w` scriere și `x` executare; aceste drepturi apar de obicei pentru proprietar, grup și ceilalți utilizatori. Pentru un director, `x` înseamnă și dreptul de a trece prin el ca să ajungi la conținut. Drepturile reduc riscul, dar nu te protejează de orice comandă greșită.",
    "Cum funcționează pas cu pas: `mkdir` creează un director, `touch` poate crea un fișier gol, `cp` copiază, `mv` mută sau redenumește, iar `rm` șterge. Înainte de o operație, verifică `pwd` și `ls`, apoi folosește o cale din laborator. După operație, listează din nou conținutul. Această rutină separă presupunerea de observația reală.",
    "Exemplu concret: în `laborator/cod/primul.txt`, `laborator` și `cod` sunt directoare, iar `primul.txt` este fișierul. Dacă îl copiezi în `backup`, apar două fișiere independente; dacă îl muți, se schimbă locul aceluiași fișier. Dacă vezi `-rw-r--r--`, primul semn indică un fișier, iar grupurile următoare arată drepturile. Nu presupune că extensia spune singură totul despre conținut.",
    "Ce nu este și legătura cu demo: un folder nu este doar o imagine grafică, ci un obiect cu reguli și conținut; iar `rm` nu mută de obicei în coșul de gunoi. Demonstrația urcă de la rădăcină la `/home`, `/etc`, `/var/log` și `/bin`, dar nu înseamnă că poți modifica orice loc. Construiește arborele într-un laborator și explică pentru fiecare comandă ce s-a schimbat și ce drepturi au rămas."
  ],
  demo: {
    type: "flow",
    title: "Copacul fișierelor Linux",
    steps: [
      { label: "/ (rădăcina)", info: "Baza copacului. Totul în Linux pornește de aici. Scrie: ls / și vei vedea ramurile principale." },
      { label: "/home", info: "Cartierul utilizatorilor. Fiecare utilizator are casa lui aici: /home/ana, /home/tudor..." },
      { label: "/etc", info: "Primăria sistemului. Fișierele cu setări stau aici. Nu te juca fără să știi ce faci!" },
      { label: "/var/log", info: "Arhiva de jurnale. Sistemul își scrie aici jurnalul: ce a mers, ce s-a stricat." },
      { label: "/bin", info: "Cutia de unelte: aici locuiesc comenzile tale (ls, cp, mv sunt programe reale!)." }
    ]
  },
  experiment: {
    title: "Construim laboratorul",
    materials: ["Terminal Linux"],
    steps: [
      "Creează structura laboratorului: mkdir laborator, apoi în el: mkdir imagini proiecte cod documentatie backup.",
      "Creează un fișier: touch laborator/cod/primul.txt. Verifică cu ls că există.",
      "Copiază-l: cp laborator/cod/primul.txt laborator/backup/. Mută-l: mv laborator/cod/primul.txt laborator/proiecte/.",
      "Privește permisiunile: ls -l. Ce înseamnă literele rw-r--r--? Descifrează-le!",
      "Curățenie: rm laborator/proiecte/primul.txt. Gata — ți-ai construit și dezafectat primul fișier."
    ],
    expected: "Structura laborator/ creată, fișier mutat/copiat/șters cu succes, permisiunile citite corect."
  },
  project: {
    title: "Arhitectul de fișiere",
    goal: "Proiectează și construiește structura de foldere perfectă pentru un proiect imaginar (ex: un joc).",
    steps: [
      "Gândește-te: ce tipuri de fișiere are un joc? (cod, imagini, sunete, niveluri, salvări, documentație...)",
      "Desenează arborele pe hârtie înainte să atingi terminalul.",
      "Construiește-l real cu mkdir și explică fiecărei ramuri de ce există.",
      "Regulă de aur a proiectului: orice fișier are UN singur loc unde aparține. Testează regula cu 5 fișiere inventate."
    ],
    success: ["Arbore desenat pe hârtie înainte de execuție", "Structură reală creată în terminal", "Fiecare folder are o justificare spusă cu voia tare"]
  },
  questions: [
    "De ce e periculos rm comparat cu ștergerea din interfața grafică?",
    "De ce nu poți intra în /home/alte-persoane? Ce te oprește?",
    "Un fișier fără permisiunea x poate fi program rulabil? De ce e asta o protecție?",
    "Unde ți-ai pune salvările unui joc: în folderul jocului sau în altă parte? Argumentează."
  ],
  exercises: [
    "Creează 3 foldere și 5 fișiere, apoi mută-le folosind doar comanda mv.",
    "Descifrează permisiunile: -rwxr-xr-- și drwx------. (Indiciu: d = director)",
    "Folosește pwd înainte și după fiecare cd — exersează până nu te mai rătăcești."
  ],
  parent: {
    watch: ["Copilul verifică cu ls înainte de rm (reflex de siguranță!)", "Organizarea logică, nu decorativă, a folderelor"],
    help: ["Dați-i propriul cont de utilizator pe calculatorul de laborator — permisiunile devin reale", "Jucați „unde trăiește fișierul X?”: căutați împreună un fișier pierdut cu terminalul"],
    redflags: ["Rulează rm fără să verifice — impuneți ritualul: ls întâi, rm după", "Folosește sudo fără să știe de ce — explicați că sudo e cheia mașinii, nu jucăria"]
  },
  pass: [
    "Navighează singur oriunde în arbore cu cd/ls/pwd",
    "Creează, copiază, mută, șterge fișiere fără greșeală",
    "Citește corect un rând de permisiuni ls -l"
  ]
},
{
  id: "3.4", level: 3, num: 4, title: "Procese, servicii, porturi și loguri", icon: "⚙️", duration: "50 min",
  objectives: [
    "Să explice ce e un proces și să vadă procesele live cu ps și top",
    "Să înțeleagă diferența proces vs serviciu",
    "Să descopere porturile ca „uși numerotate” și logurile ca „jurnalul sistemului”"
  ],
  explanation: [
    "Ce este: un proces este o instanță a unui program care rulează, împreună cu memoria și resursele pe care le folosește. O instanță înseamnă o execuție concretă; două ferestre ale aceluiași browser pot avea procese diferite. Sistemul îi atribuie un PID, adică un număr de identificare, pentru a-l putea urmări sau opri.",
    "Un serviciu este de obicei un program pornit pentru a lucra în fundal și a aștepta cereri, fără ca un utilizator să țină o fereastră deschisă. Un server web este un exemplu. `systemctl` poate porni, opri și verifica multe servicii pe sisteme Linux cu systemd. Nu orice proces este serviciu: un editor deschis doar cât scrii este de obicei un proces de utilizator.",
    "Ce este un port: un port este un număr logic folosit împreună cu adresa de rețea pentru a direcționa datele către programul potrivit. Poți să-l imaginezi ca pe o ușă numerotată, dar ușa nu garantează siguranța. HTTP folosește de obicei 80, HTTPS 443, iar SSH 22; HTTPS adaugă criptare, iar un port deschis poate fi totuși configurat greșit.",
    "Logul este o înregistrare a evenimentelor unui program sau sistem: porniri, erori, conexiuni și alte mesaje. Cum funcționează pas cu pas o investigație: observi problema, notezi ora, identifici serviciul, compari statusul și cauți în log mesaje apropiate de acel moment. Un mesaj izolat nu este o explicație sigură; citește contextul și nu distribui date sensibile.",
    "Legătura cu demo: vei decide dacă fiecare situație este proces, serviciu, port sau log, apoi vei verifica în terminal cu `ps`, `top` și instrumentele potrivite. Dacă browserul se închide, cauți procesul; dacă pagina nu răspunde, verifici serviciul, portul și logul. Nu opri procese la întâmplare: întâi explică rolul lor și lucrează doar pe sistemul de laborator."
  ],
  demo: {
    type: "quiz",
    title: "Detectivul sistemului",
    questions: [
      { q: "Browserul tău rulează acum. Ce este el pentru sistem?", opts: ["Un proces", "Un port", "Un log"], correct: 0, why: "Orice program care rulează e un proces, cu PID-ul lui unic." },
      { q: "Un server web așteaptă vizitatori tot timpul, chiar dacă nu-l deschide nimeni. Ce e?", opts: ["Un proces oarecare", "Un serviciu"], correct: 1, why: "Serviciile sunt procese care rulează în fundal, gata de lucru oricând." },
      { q: "HTTPS (web securizat) folosește de obicei ce port?", opts: ["Portul 443", "Portul 80", "Portul 22"], correct: 0, why: "443 = HTTPS. 80 = HTTP simplu. 22 = SSH." },
      { q: "Ceva s-a stricat azi-noapte pe sistem. Unde te uiți prima dată?", opts: ["Pe internet", "În loguri", "La procesor"], correct: 1, why: "Logurile sunt jurnalul sistemului — răspunsul e aproape mereu acolo." }
    ]
  },
  experiment: {
    title: "Tabloul de bord live",
    materials: ["Terminal Linux"],
    steps: [
      "Scrie ps aux | head -20. Câte procese vezi? Găsește-l pe al tău (terminalul!).",
      "Scrie top și privește 30 de secunde. Care proces mănâncă cel mai mult CPU? Apasă q să ieși.",
      "Deschide un browser și rulează top din nou. Vezi cum apar procese noi? Asta e nașterea unui proces!",
      "Privește jurnalul: cat /var/log/syslog | tail -5 (sau journalctl | tail -5). Ce a făcut sistemul recent?"
    ],
    expected: "Copilul a văzut procese născându-se live și a citit 5 rânduri de log real."
  },
  project: {
    title: "Harta vie a calculatorului meu",
    goal: "Documentează „o zi din viața” calculatorului: procese, servicii, porturi și loguri.",
    steps: [
      "Listează 10 procese cu ps și scrie ce crezi că face fiecare.",
      "Găsește 3 servicii cu systemctl list-units --type=service | head. Care te surprinde?",
      "Scrie în jurnal porturile celebre: 22, 80, 443 — cu „meseria” fiecăruia.",
      "Găsește în log o oră interesantă și scrie povestea: ce s-a întâmplat atunci?"
    ],
    success: ["10 procese explicate", "3 servicii identificate", "3 porturi cu rol", "O poveste extrasă din log"]
  },
  questions: [
    "De ce are fiecare proces un număr (PID) și nu doar un nume?",
    "Care e diferența dintre a închide browserul și a-l „omorî” cu kill?",
    "De ce sunt logurile atât de prețioase pentru un detectiv de erori?",
    "Ce s-ar întâmpla dacă două programe ar folosi același port?"
  ],
  exercises: [
    "Găsește PID-ul terminalului tău cu ps și omoară-l cu kill PID. Ce s-a întâmplat?",
    "În top, apasă M (sortare după memorie). Ce proces e cel mai „flămând”?",
    "Scrie în jurnal cele 5 porturi cele mai faimoase cu rolul lor."
  ],
  parent: {
    watch: ["Copilul privește calculatorul ca un sistem VIU, nu o cutie", "Primul reflex la o problemă devine „hai să vedem logul”"],
    help: ["Deschideți top împreună și porniți un joc — priviți cum sar procentele", "Comparați cu Monitorul de Activitate/Task Manager de pe alte sisteme"],
    redflags: ["Copilul omoară procese la întâmplare — stabiliți regula: nu omori ce nu înțelegi", "Panica la mesaje de eroare din log — multe sunt normale; învățați împreună să filtrați"]
  },
  pass: [
    "Folosește ps și top și explică ce vede",
    "Explică diferența proces/serviciu cu exemple",
    "Spune rolul porturilor 22, 80, 443 și citește un log"
  ]
},
{
  id: "3.5", level: 3, num: 5, title: "Comenzile esențiale - antrenament", icon: "🥋", duration: "60 min",
  objectives: [
    "Să folosească fluent: cat, grep, find, ps, top, cp, mv, rm, mkdir",
    "Să combine comenzi pentru a rezolva o misiune",
    "Să caute într-un fișier text cu grep"
  ],
  explanation: [
    "Ce este: acum legi comenzi mici pentru a rezolva o misiune. `cat` afișează conținutul unui fișier text, `grep` selectează rânduri care se potrivesc unui text, `find` caută fișiere după reguli, iar `man` deschide manualul unei comenzi. O comandă bună are o intenție clară: înainte s-o rulezi, spune ce citește și ce rezultat aștepți.",
    "Ce este pipe-ul: simbolul `|` trimite ieșirea comenzii din stânga ca intrare pentru comanda din dreapta. În `cat jurnal.txt | grep eroare`, prima comandă produce rândurile, iar a doua păstrează doar rândurile cu textul căutat. Pipe-ul nu înseamnă „sau” și nu ascunde rezultatele; el le conectează într-un flux de text.",
    "Cum funcționează pas cu pas: verifici folderul cu `pwd`, vezi fișierele cu `ls`, citești manualul dacă nu știi opțiunea, rulezi o comandă simplă și observi outputul. Apoi adaugi o singură unealtă și compari. TAB completează nume, iar săgeata sus readuce o comandă veche, dar niciuna nu înlocuiește verificarea că lucrezi în locul potrivit.",
    "Exemplu concret: `find laborator -name „*.txt”` caută fișiere după nume într-un arbore, iar `grep comoara poveste.txt` caută un cuvânt în conținutul unui fișier. Find răspunde în principal „unde sunt fișierele?”, grep răspunde „ce rânduri conțin textul?”. Împreună pot găsi un indiciu, dar rezultatele depind de nume, litere mari și calea aleasă.",
    "Ce nu este și legătura cu demo: comenzi mai lungi nu sunt automat mai bune, iar pipe-ul nu repară o comandă care citește fișierul greșit. Demonstrația desface fluxul cat → pipe → grep → rezultat. Vei lucra numai în laborator, vei testa cu date inventate și vei explica fiecare etapă înainte de a adăuga următoarea."
  ],
  demo: {
    type: "flow",
    title: "Anatomia unei comenzi cu pipe",
    steps: [
      { label: "cat jurnal.txt", info: "Primul vagon: citește tot fișierul și trimite textul mai departe..." },
      { label: "|", info: "Pipe-ul: cupla dintre vagoane. Rezultatul din stânga devine intrarea pentru dreapta." },
      { label: "grep eroare", info: "Al doilea vagon: detectivul filtrează doar rândurile care conțin cuvântul „eroare”." },
      { label: "📤 Rezultat", info: "Pe ecran apar DOAR rândurile cu erori. Din 10.000 de rânduri → cele 3 care contează!" }
    ]
  },
  experiment: {
    title: "Misiunile agentului 001",
    materials: ["Terminal Linux", "Folderul laborator/ din lecția 3.3"],
    steps: [
      "MISIUNEA 1: Creează cu echo un fișier poveste.txt cu 5 rânduri, unul conținând cuvântul „comoara”. Găsește rândul secret: grep comoara poveste.txt.",
      "MISIUNEA 2: Creează 10 fișiere goale într-un folder. Găsește-le pe toate dintr-o comandă: find laborator -name \"*.txt\".",
      "MISIUNEA 3: Ascunde un „document secret” în 3 foldere imbricate. Cere cuiva să-l găsească doar cu find și grep.",
      "MISIUNEA BONUS: cat poveste.txt | grep -c the — ce crezi că face -c? Verifică!"
    ],
    expected: "Toate misiunile rezolvate. Copilul explică fiecare comandă folosită."
  },
  project: {
    title: "Scrisoarea cifrată de terminal",
    goal: "Construiește o vânătoare de comori digitală pentru un membru al familiei, doar cu fișiere și comenzi.",
    steps: [
      "Scrie 4 indicii în 4 fișiere ascunse în foldere diferite din laborator.",
      "Fiecare fișier spune cum să-l găsești pe următorul, dar NU direct — folosește grep sau find (ex: „caută cuvântul dragon în folderul cod”).",
      "Ultimul fișier conține „comoara”: un mesaj amuzant sau un bilet pentru o prăjitură.",
      "Testează vânătoarea pe o victimă voluntară. Cronometreaz-o și repară ce e prea greu sau prea ușor."
    ],
    success: ["4 indicii funcționale", "Vânătoarea parcursă de altcineva fără ajutor", "Cel puțin 2 comenzi diferite necesare"]
  },
  questions: [
    "De ce e grep mai bun decât citirea fișierului cu ochii?",
    "Ce face pipe-ul | și de ce e atât de puternic?",
    "Când ai folosi find și când grep? (Unul caută FIȘIERE, altul caută ÎN fișiere)",
    "Ce face comanda man ls? De ce e cea mai importantă comandă de toate?"
  ],
  exercises: [
    "Scrie 3 propoziții despre tine în 3 fișiere, apoi găsește cu grep care fișier menționează mâncarea.",
    "Folosește TAB și săgeți toată ziua — interzis să rescrii comenzi lungi!",
    "Explică cuiva ce face: find . -name \"*.jpg\" | grep vacanta"
  ],
  parent: {
    watch: ["Copilul compune comenzi singur pentru probleme noi", "Folosirea TAB și istoricului ca reflexe"],
    help: ["Creați un concurs: cine rezolvă misiunea mai repede, părinte sau copil?", "Dacă se blochează: nu dați comanda, întrebați „ce unealtă ai care caută text?”"],
    redflags: ["Frustrare la tastare — micșorați misiunile; viteza vine de la sine", "Copilul sare peste înțelegere direct la soluții din net — reinstituie regula explicației"]
  },
  pass: [
    "Rezolvă 5 misiuni noi fără ajutor",
    "Folosește corect un pipe cat | grep",
    "Explică orice comandă din jurnalul lui în 10 secunde"
  ]
},
{
  id: "3.6", level: 3, num: 6, title: "Proiect: Serverul meu Linux pe Raspberry Pi", icon: "🍓", duration: "2×60 min", isProject: true,
  objectives: [
    "Să instaleze un sistem Linux pe un Raspberry Pi (sau mașină virtuală)",
    "Să pornească un serviciu real și să-l oprească/pornească cu systemctl",
    "Să documenteze instalarea ca un inginer de sistem"
  ],
  explanation: [
    "Ce este: Raspberry Pi este un calculator de dimensiuni mici pe care poți instala Linux, iar o mașină virtuală este un calculator simulat de un program pe un alt calculator. Linux este un sistem de operare; el administrează fișiere, procese, rețea și utilizatori. Adultul pregătește hardware-ul, alimentarea și contul, iar tu documentezi ce se întâmplă la fiecare etapă.",
    "Un server este un calculator sau program care oferă un serviciu altor dispozitive prin rețea. Un server web primește o cerere de la browser și trimite fișierele unei pagini. Clientul este dispozitivul care cere serviciul. În acest proiect vei servi o pagină doar în rețeaua casei, unde poți observa clientul, serverul, adresa IP și portul fără să expui proiectul public.",
    "Cum funcționează pas cu pas: instalezi sistemul, pornești Pi-ul sau mașina virtuală, afli adresa IP, verifici legătura cu `ping`, te conectezi prin SSH și instalezi un serviciu web. SSH este un protocol pentru administrare de la distanță, de obicei pe portul 22. `systemctl status` arată dacă serviciul este activ, iar browserul testează rezultatul din perspectiva clientului.",
    "Exemplu concret și limită: dacă oprești nginx, un program care poate servi pagini web, browserul nu mai primește pagina, deși Pi-ul poate fi încă pornit. Dacă serviciul rulează, dar portul sau adresa sunt greșite, clientul tot nu ajunge la el. Un server local nu este automat un site public și nu trebuie făcut public doar pentru că funcționează în casă.",
    "Siguranța și legătura cu demo: nu distribui parole, adrese IP sau pagini personale, nu faci redirecționări de porturi și nu deschizi serviciul către internet fără un adult și cunoștințe de securitate. La o eroare, citești mesajul, formulezi o presupunere, faci un singur test și notezi rezultatul. Demonstrația urmărește instalare → conectare locală → serviciu web → verificare în browser, exact traseul pe care îl vei documenta."
  ],
  demo: {
    type: "flow",
    title: "Drumul către propriul server",
    steps: [
      { label: "💾 Imaginea", info: "Cu Raspberry Pi Imager (sau VirtualBox), scrii Linux pe cardul SD. Alegi numele serverului și parola." },
      { label: "🔌 Prima pornire", info: "Cardul în Pi, cablul de rețea, alimentarea. Aștepți ~1 minut. Pi-ul e VIU!" },
      { label: "🔍 Descoperirea", info: "De pe alt calculator: ping raspberrypi.local sau găsește IP-ul din router. Serverul răspunde!" },
      { label: "🚪 Conectarea", info: "ssh utilizator@ip-server — intri în calculatorul tău de la distanță, prin portul 22. Magie reală." },
      { label: "🌐 Serviciul", info: "sudo apt install nginx, apoi systemctl status nginx. Serviciul web rulează! Deschide IP-ul în browser: pagina TA!" }
    ]
  },
  experiment: {
    title: "Operațiunea Serverul Casei",
    materials: ["Raspberry Pi + card SD + alimentare SAU VirtualBox", "Un alt calculator din rețea", "Jurnalul"],
    steps: [
      "Scrie Linux pe card/în VM și pornește sistemul. Notează în jurnal fiecare pas.",
      "Găsește IP-ul serverului (hostname -I pe server). De pe celălalt calculator: ping IP. Funcționează?",
      "Conectează-te cu ssh și rulează pe server: whoami, uptime, top. Tu controlezi acum DOUĂ calculatoare!",
      "Instalează nginx: sudo apt update && sudo apt install nginx. Verifică: systemctl status nginx — e verde (active)?",
      "Deschide browserul la adresa IP a serverului. VEZI PAGINA? Tocmai ai construit un colț de internet!"
    ],
    expected: "Server accesibil din browserul altui calculator din casă. Cel puțin o eroare întâmpinată și documentată cu soluția ei."
  },
  project: {
    title: "Pagina casei noastre",
    goal: "Personalizează pagina serverului cu un mesaj pentru familie și menține serverul funcțional o săptămână.",
    steps: [
      "Editează pagina: sudo nano /var/www/html/index.html. Scrie un mesaj amuzant pentru familie.",
      "Oprește serviciul: sudo systemctl stop nginx. Reîmprospătează browserul — ce vezi? Explică de ce.",
      "Repornește-l: sudo systemctl start nginx. Tocmai ai depanat primul tău „incident de producție”.",
      "Timp de o săptămână, verifică zilnic: systemctl status. Serverul TREBUIE să rămână în viață. Scrie în jurnal orice problemă."
    ],
    success: ["Pagină personalizată vizibilă din rețea", "Incident stop/start depanat singur", "Jurnal de administrare pe 7 zile"]
  },
  questions: [
    "Ce s-a întâmplat exact când ai oprit serviciul și browserul nu mai găsea pagina?",
    "Cine altcineva din casă ar putea vedea serverul tău? Cine din AFARA casei? De ce (nu)?",
    "Ce ai face dacă ai uita parola serverului? Există vreo cale înapoi?",
    "Acum că ai un server: ce alt serviciu ți-ai dori să ruleze pe el?"
  ],
  exercises: [
    "Schimbă portul nginx din 80 în 8080 și explică ce trebuie scris acum în browser.",
    "Caută în /var/log/nginx/ cine a vizitat serverul azi.",
    "Scrie o fișă „Probleme întâmpinate” cu minim 2 erori și soluțiile lor."
  ],
  parent: {
    watch: ["Persistența la erori (boot eșuat, SSH refuzat) — NU interveniți prea repede", "Bucuria momentului „MERGE!” — e câștigată, nu oferită"],
    help: ["Un Raspberry Pi 4/5 second-hand e suficient; alternativa VM e gratuită și la fel de bună didactic", "Fiți „clientul”: vizitați serverul din telefon și raportați cu seriozitate că „pagina nu merge” — copilul devine administratorul on-call"],
    redflags: ["Copilul vrea să expună serverul pe internet — NU încă; explicați că e lecția de la nivelul 9, după securitate", "Renunță după prima eroare de boot — rescrieți cardul împreună, e rămas bun de fiecare inginer"]
  },
  pass: [
    "Server instalat și accesibil din altă mașină",
    "Oprește/pornește serviciul și explică efectul",
    "Jurnal complet: pași, erori, soluții"
  ]
},
/* ==================== NIVELUL 4 ==================== */
{
  id: "4.1", level: 4, num: 1, title: "Ce este un algoritm?", icon: "📜", duration: "45 min",
  objectives: [
    "Să definească algoritmul ca o succesiune clară de pași pentru rezolvarea unei probleme",
    "Să scrie un algoritm pentru o activitate zilnică, fără ambiguități",
    "Să descopere prin joc ce se întâmplă când pașii sunt vagi"
  ],
  explanation: [
    "Un algoritm este o succesiune finită de pași clari care transformă o problemă într-un rezultat. Succesiune înseamnă că pașii au o ordine, iar finit înseamnă că există un moment în care se termină. Îl folosim pentru ca o soluție să poată fi repetată de alt om sau de un calculator.",
    "De ce contează claritatea? Un calculator nu completează intenția lipsă și nu ghicește ce înseamnă „puțin” sau „repede”. Un pas bun spune acțiunea, obiectul și, când este necesar, cantitatea ori condiția. Așadar „fă un sandviș” este un obiectiv, nu încă un algoritm executabil.",
    "Exemplul se construiește pas cu pas: 1) pune o felie pe farfurie, 2) deschide recipientul, 3) întinde un strat subțire de brânză pe felie, 4) așază a doua felie, 5) verifică dacă sandvișul este întreg. La fiecare pas întreabă ce trebuie să existe deja și ce rezultat observi înainte de pasul următor.",
    "O limită importantă este că un algoritm poate fi corect doar pentru condițiile pentru care a fost scris. Dacă nu spune ce faci când nu mai ai pâine sau când recipientul este închis, apare o ambiguitate. Nu confunda algoritmul cu o idee vagă sau cu o rețetă care omite pași esențiali.",
    "În demo-ul „Algoritmul sandvișului” urmărește Start, pașii 1-5 și Sfârșit. Când apeși pe fiecare etapă, verifică ce lipsește dacă o sari și rescrie pasul vag. Apoi jocul „Robotul uman” îți permite să testezi algoritmul literal, exact cum testăm mai târziu un program."
  ],
  demo: {
    type: "flow",
    title: "Algoritmul sandvișului",
    steps: [
      { label: "1. Ia pâinea", info: "Primul pas: pregătește materia primă. Ce se întâmplă dacă sari peste el?" },
      { label: "2. Deschide pachetul", info: "Pasul pe care toată lumea îl uită! Robotul literal s-ar bloca aici fără el." },
      { label: "3. Pune ingredientul", info: "Observă: „pune” e vag. Pune UNDE? CÂT? Algoritmii buni sunt preciși." },
      { label: "4. Adaugă al doilea strat", info: "Ordinea contează! Încearcă să faci pasul 4 înainte de pasul 3. Ce iese?" },
      { label: "5. Închide sandvișul", info: "Ultimul pas: rezultatul final. Fiecare algoritm are un START și un SFÂRȘIT clar." }
    ]
  },
  experiment: {
    title: "Robotul uman",
    materials: ["Două persoane", "Materiale pentru sandviș (sau desenat un obiect simplu)"],
    steps: [
      "Copilul scrie pe hârtie algoritmul complet pentru făcut un sandviș (sau desenat o casă).",
      "Părintele devine ROBOTUL: execută LITERAL fiecare pas, cu dreptul de a interpreta orice ambiguitate în mod absurd.",
      "De fiecare dată când robotul „face prostii”, algoritmul se oprește și se corectează.",
      "Rulează versiunea finală. Un algoritm care produce un sandviș real = misiune îndeplinită!"
    ],
    expected: "Hohote de râs + un algoritm rescris de minim 2 ori. Lecția: ambiguitatea e inamicul."
  },
  project: {
    title: "Colecția de algoritmi",
    goal: "Scrie 3 algoritmi complet testați pentru 3 activități zilnice, cu pași numerotați și testați pe „robotul uman”.",
    steps: [
      "Alege: spălatul pe dinți, îmbrăcatul dimineața, pregătirea ghiozdanului.",
      "Scrie fiecare algoritm cu pași numerotați, maxim 10 pași fiecare.",
      "Testează fiecare pe robotul uman. Notează fiecare „bug” găsit și corectura.",
      "Adaugă la final: ce pas poate fi sărit fără dezastru? Care pas distruge TOT dacă e greșit?"
    ],
    success: ["3 algoritmi scriși și testați", "Minim 5 bug-uri găsite și reparate", "Copilul explică de ce ordinea contează"]
  },
  questions: [
    "Ce diferență e între „amestecă” și „amestecă 10 secunde cu lingura”?",
    "Un algoritm poate avea doi pași cu același număr? De ce nu?",
    "Dă exemplu de pas din viața reală care e în secret un „dacă... atunci...”.",
    "Care activitate zilnică e IMposibil de scris ca algoritm? De ce?"
  ],
  exercises: [
    "Scrie algoritmul pentru a lega șireturile. Testează-l mintal ca un robot.",
    "Găsește bug-ul: „1. Pune pâinea în toaster. 2. Scoate pâinea prăjită. 3. Pornește toasterul.”",
    "Rescrie rețeta ta preferată cu pași atât de clari încât s-ar putea face singură."
  ],
  parent: {
    watch: ["Copilul prinde gustul „bug-urilor” din instrucțiunile vagi", "Râde de greșeli în loc să se frustreze"],
    help: ["Jocul robotului uman e de aur — cu cât sunteți mai literal-absurd, cu atât lecția e mai bună", "Nu corectați algoritmul înainte de test; lăsați robotul să „ezece” spectaculos"],
    redflags: ["Copilul scrie pași uriași („fă sandvișul”) — cereți împărțirea în sub-pași", "Se enervează la corecturi — spuneți că găsirea bug-urilor e SCOPUL jocului, nu eșecul"]
  },
  pass: [
    "Definește algoritmul cu un exemplu propriu",
    "Scrie un algoritm de 8+ pași care supraviețuiește robotului uman",
    "Găsește singur ambiguitățile dintr-un algoritm dat"
  ]
},
{
  id: "4.2", level: 4, num: 2, title: "Secvențe, condiții și bucle", icon: "🔀", duration: "50 min",
  objectives: [
    "Să recunoască cele 3 blocuri de construcție: secvență, condiție, buclă",
    "Să folosească „dacă...atunci...altfel” și „repetă...cât timp” în algoritmi scriși",
    "Să deseneze un fluxogramă simplu"
  ],
  explanation: [
    "Secvența, condiția și bucla sunt trei construcții de bază ale programelor. O secvență execută instrucțiuni în ordine. O condiție evaluează o întrebare și alege un drum, iar o buclă repetă pași până la un număr sau până când o condiție devine falsă.",
    "Le folosim pentru a descrie lumea fără să copiem aceeași instrucțiune de zeci de ori. Într-o condiție, `dacă plouă atunci ia umbrela, altfel ia șapca` are două ieșiri. Într-o buclă, trebuie să existe ceva care se schimbă spre oprire; altfel programul poate rămâne blocat.",
    "Exemplul se poate urmări astfel: 1) pornește, 2) verifică dacă mai sunt farfurii, 3) dacă da, spală una, 4) numără farfuriile rămase, 5) revino la verificare, 6) oprește când numărul este zero. Aici secvența este ordinea, condiția alege, iar bucla revine la întrebare.",
    "O confuzie frecventă este să tratezi `repetă de 10 ori` și `repetă cât timp este murdar` ca fiind identice. Prima are un număr cunoscut de repetări; a doua depinde de o stare care trebuie actualizată. Dacă starea nu se schimbă sau nu există drum spre oprire, obții o buclă infinită.",
    "Demo-ul „Ce fel de bloc e?” îți cere să clasifici exemplele, iar fluxograma din experiment arată săgeata care se întoarce la verificare. Urmează traseul pentru un labirint și spune cu voce tare când se execută secvența, când se decide și când se repetă."
  ],
  demo: {
    type: "classify",
    title: "Ce fel de bloc e?",
    intro: "Sortează fiecare instrucțiune în tipul ei!",
    zones: ["➡️ Secvență", "❓ Condiție", "🔁 Buclă"],
    items: [
      { label: "Spală-te pe mâini, apoi pe dinți", zone: 0 },
      { label: "Dacă plouă, ia umbrela", zone: 1 },
      { label: "Cât timp e murdar, freacă", zone: 2 },
      { label: "Deschide ușa, intră, închide", zone: 0 },
      { label: "Dacă e roșu, stai; altfel treci", zone: 1 },
      { label: "Repetă de 10 ori: săritură", zone: 2 }
    ]
  },
  experiment: {
    title: "Labirintul de hârtie",
    materials: ["Hârtie cu pătrățele", "Creion", "O jucărie mică (robotul)"],
    steps: [
      "Desenează un labirint pe pătrățele: start, obstacole, ieșire.",
      "Scrie algoritmul care scoate jucăria din labirint folosind doar: mergi, întoarce-stânga/dreapta, dacă perete în față..., repetă până la ieșire.",
      "Regula de aur: fără „uită-te și vezi” — algoritmul trebuie să meargă și cu ochii închiși, doar din condiții.",
      "Schimbă labirintul cu un coleg/părinte. Algoritmul tău cu bucle merge și pe labirintul lui?"
    ],
    expected: "Un algoritm cu cel puțin o condiție și o buclă, care rezolvă 2 labirinturi diferite (asta e magia buclei!)."
  },
  project: {
    title: "Fluxograma dimineții perfecte",
    goal: "Desenează fluxograma completă a unei dimineți, cu minimum 3 condiții și o buclă.",
    steps: [
      "Listează întâi toate deciziile dimineții: e sâmbătă? e devreme? mai e lapte? mi-e somn?",
      "Desenează fluxograma: dreptunghiuri pentru acțiuni, romburi pentru întrebări, săgeți pentru drumuri.",
      "Adaugă bucla: „cât timp nu m-am trezit complet → mai bea un pahar cu apă / mai fă 5 genuflexiuni”.",
      "Testează: urmează fluxograma mâine dimineață pe bune. Raportează bug-urile!"
    ],
    success: ["Fluxogramă cu simboluri corecte", "3+ condiții și 1+ buclă", "Testată în realitate + raport de bug-uri"]
  },
  questions: [
    "De ce e bucla o super-putere? Ce sarcină din casă ai da unui robot cu o buclă?",
    "Semaforul e secvență, condiție sau buclă? (Truc: e o buclă cu secvențe înăuntru!)",
    "Ce se întâmplă dacă bucla nu are condiție de oprire? (Se numește buclă infinită — calculatorul „îngheață” în ea!)",
    "Poți scrie un program fără condiții? Ar fi interesant?"
  ],
  exercises: [
    "Transformă în buclă: „scrie de 100 de ori nu voi uita să opresc bucla”.",
    "Desenează fluxograma pentru: „dacă am teme, le fac; altfel, mă joc; apoi, mereu, mă spăl pe dinți”.",
    "Găsește bucla infinită: „repetă: dacă sunt flămând, mănânc” — și repar-o."
  ],
  parent: {
    watch: ["Copilul vede bucle peste tot (melodia se repetă, zilele săptămânii...)", "Folosirea spontană a „dacă...atunci” în vorbe"],
    help: ["La gătit: transformați rețeta în fluxogramă împreună", "Jocul „bucla infinită”: faceți un lucru la infinit până copilul strigă condiția de oprire"],
    redflags: ["Copilul nu prinde diferența „repetă de 10 ori” vs „repetă cât timp...” — dansați: una e numărată, alta se oprește la semnal", "Fluxograme fără săgeți întoarse la buclă — desenați pe o tavă circulară"]
  },
  pass: [
    "Identifică corect cele 3 blocuri în orice descriere",
    "Scrie un algoritm cu condiție + buclă care rezolvă 2 cazuri diferite",
    "Explică pericolul buclei infinite"
  ]
},
{
  id: "4.3", level: 4, num: 3, title: "Variabile și funcții", icon: "📦", duration: "50 min",
  objectives: [
    "Să explice variabila ca o cutie etichetată care ține o valoare",
    "Să urmărească cum se schimbă valoarea unei variabile pas cu pas",
    "Să înțeleagă funcția ca o „rețetă cu nume” reutilizabilă"
  ],
  explanation: [
    "O variabilă este un nume asociat unei valori pe care programul o poate citi sau schimba. Imaginează-ți o cutie etichetată: `scor` este eticheta, iar numărul dinăuntru este valoarea. Numele rămâne același chiar dacă valoarea trece de la 0 la 10.",
    "O funcție este un grup de pași căruia îi dai un nume pentru a-l reutiliza. O funcție poate primi parametri, adică valori de intrare. `saluta(nume)` folosește aceeași rețetă pentru Ada sau Vlad, iar funcția poate întoarce un rezultat pe care alt cod îl folosește.",
    "Urmărește exemplul pas cu pas: `scor = 0`, apoi `scor = scor + 10`, deci cutia conține 10; la următoarea monedă conține 20; după `scor = scor - 5`, conține 15. Apoi `afiseaza_scor(scor)` primește valoarea și execută pașii de afișare fără să-i copiezi în mai multe locuri.",
    "Limita modelului cu cutii este că ascunde reguli importante: o variabilă are un tip, o durată de viață și un loc în program. Nu confunda `scor = scor + 1` cu o ecuație matematică; în programare înseamnă calculează valoarea veche plus unu și pune rezultatul înapoi.",
    "În demo-ul „Viața unei variabile într-un joc”, apasă etapele și urmărește aceeași cutie după fiecare monedă și obstacol. Experimentul cu pahare face schimbarea vizibilă fizic, iar funcția poate fi explicată ca o rețetă cu nume care este chemată atunci când ai nevoie de ea."
  ],
  demo: {
    type: "flow",
    title: "Viața unei variabile într-un joc",
    steps: [
      { label: "📦 scor = 0", info: "Jocul începe. Cutia „scor” e creată cu valoarea 0 înăuntru." },
      { label: "🪙 +10", info: "Jucătorul prinde o monedă! Calculatorul execută: scor = scor + 10. Cutia ține acum 10." },
      { label: "🪙 +10", info: "Încă o monedă! scor = scor + 10 → cutia ține 20. Observă: valoarea NOUĂ se calculează din cea VECHE." },
      { label: "💥 -5", info: "A lovit un obstacol: scor = scor - 5 → 15. Variabila e mereu la zi cu starea jocului." },
      { label: "🏆 Afișare", info: "La final, jocul citește cutia și arată: „Scor final: 15”. Cutia a ținut minte totul pentru noi." }
    ]
  },
  experiment: {
    title: "Calculatorul uman",
    materials: ["3 pahare (cutiile)", "Etichete: a, b, c", "Bilete cu numere"],
    steps: [
      "Unul e PROGRAMUL (citește instrucțiunile), altul e CALCULATORUL (execută cu paharele).",
      "Programul: a = 5. b = 3. c = a + b. (Calculatorul pune biletele și calculează. Ce e în paharul c?)",
      "Programul: a = a + 1. Ce e acum în a? (Aici 99% din oameni se împiedică prima dată!)",
      "Schimbați rolurile și inventați propriile programe. Cine poate face programul cu cele mai multe cutii fără să greșească?"
    ],
    expected: "Urmărire corectă a 5+ instrucțiuni. Momentul „a = a + 1 înțeles” e revelația lecției."
  },
  project: {
    title: "Jocul de masă cu variabile",
    goal: "Proiectează un mini-joc de societate care folosește explicit variabile și o funcție.",
    steps: [
      "Alege variabilele jocului: scor, energie, poziție. Desenează cutiile lor pe tablă.",
      "Scrie funcția principală, ex: „lansează_zarul(penalizare)” — pașii care se repetă la fiecare tură.",
      "Joacă jocul cu familia de 3 ori, urmărind variabilele cu voia tare.",
      "După fiecare joc, ajustează o regulă (asta e „balansarea” — meserie reală în industria jocurilor!)."
    ],
    success: ["Tablă cu variabile vizibile", "O funcție documentată ca rețetă", "3 runde jucate + o îmbunătățire"]
  },
  questions: [
    "Ce se întâmplă cu valoarea veche când pui una nouă în cutie? (Se pierde! De aceea salvăm în jocuri.)",
    "Câte variabile crezi că are Minecraft la un moment dat: 10, 1000 sau milioane?",
    "De ce dăm funcțiilor nume clare ca „calculează_scor” și nu „fă_lucruri”?",
    "Ce s-ar întâmpla dacă două funcții ar folosi aceeași cutie în același timp?"
  ],
  exercises: [
    "Urmărește: x = 2; y = x + 3; x = x + y; — cât valorează x la final?",
    "Scrie o „funcție” pe hârtie pentru a face un ceai, cu parametrul (cu_zahăr / fără_zahăr).",
    "Găsește 5 variabile într-un joc pe care-l joci des (bani, vieți, nivel...)."
  ],
  parent: {
    watch: ["Momentul „a = a + 1” e dificil pentru ADULȚI, nu doar pentru copii — nu vă panicați dacă durează", "Copilul dă nume clare variabilelor, nu doar x, y"],
    help: ["Jocul cu paharele fizice bate orice explicație — insistați pe materialul concret", "Extindeți: „cutii” care țin text (nume = „Ada”) sau adevărat/fals (e_viu = adevărat)"],
    redflags: ["Copilul crede că „a = a + 1” e o ecuație imposibilă — reveniți la cutie: nu e matematică, e înlocuire", "Funcțiile par magice — reluați rețeta sosului: e doar un pachet de pași cu nume"]
  },
  pass: [
    "Urmărește corect 6 instrucțiuni cu variabile",
    "Explică a = a + 1 fără ezitare",
    "Definește o funcție cu parametru din viața reală"
  ]
},
{
  id: "4.4", level: 4, num: 4, title: "Primul contact vizual - Scratch/Blockly", icon: "🐱", duration: "60 min",
  objectives: [
    "Să construiască un program în Scratch cu eveniment, buclă și condiție",
    "Să facă o personajă să se miște, să reacționeze și să țină scorul",
    "Să observe că blocurile vizuale sunt EXACT conceptele din lecțiile 4.1-4.3"
  ],
  explanation: [
    "Scratch este un limbaj vizual în care blocurile colorate reprezintă instrucțiuni. Un eveniment este ceva care pornește codul, de exemplu apăsarea steagului verde; un sprite este personajul sau obiectul controlat. Formele blocurilor limitează combinațiile imposibile și te ajută să vezi structura.",
    "Blocul `mereu` este o buclă, `dacă... atunci` este o condiție, iar variabila `scor` păstrează o valoare. Acestea sunt aceleași idei ca în algoritmi și Python, doar că Scratch ascunde punctuația. Îl folosim ca să învățăm logica înainte ca o paranteză lipsă să ne distragă.",
    "Construiește pas cu pas: la steag, sprite-ul pornește; în bucla `mereu`, verifică tastele; dacă atinge marginea, se întoarce; dacă atinge mărul, mărește scorul și mută mărul. Testează după fiecare bloc, pentru a ști exact ce schimbare a produs mișcarea observată.",
    "O limită este că blocurile vizuale nu elimină problemele de logică. Poți crea o buclă care nu se oprește, poți mări scorul de prea multe ori sau poți lăsa un eveniment să pornească două scripturi simultan. Nu confunda faptul că proiectul arată colorat cu faptul că regula este corectă.",
    "Demo-ul „Anatomia unui program Scratch” arată traseul eveniment → buclă → condiție → variabilă. După fiecare pas, compară comportamentul pisicii cu intenția ta. În experiment și în jocul final, folosește aceeași rutină: planifică, rulează, observă, modifică un singur bloc și rulează din nou."
  ],
  demo: {
    type: "flow",
    title: "Anatomia unui program Scratch",
    steps: [
      { label: "⚑ Eveniment", info: "„Când se apasă steagul verde” — așa pornește aproape orice program Scratch. E inputul!" },
      { label: "🔁 Bucla", info: "Blocul „mereu” înfășoară instrucțiunile care se repetă: jocul verifică la infinit ce faci." },
      { label: "❓ Condiția", info: "„Dacă atinge marginea, înapoiază” — pisica nu trece prin pereți pentru că PROGRAMUL decide asta." },
      { label: "📦 Variabila", info: "„Schimbă scor cu 1” la fiecare monedă — cutia noastră, acum digitală și vizibilă pe ecran." },
      { label: "🎮 Jocul", info: "Pui totul cap la cap și... joci! Apoi intri în cod și îl faci mai greu. Ești oficial dezvoltator de jocuri." }
    ]
  },
  experiment: {
    title: "Prima oră de Scratch",
    materials: ["Calculator cu browser", "scratch.mit.edu (merge fără cont)"],
    steps: [
      "Deschide Scratch și apasă „Creează”. Fă pisica să meargă 10 pași când apeși steagul.",
      "Adaugă o buclă „mereu” + „mergi 10 pași” + „dacă atingi marginea, înapoiază”. Pisica aleargă veșnic!",
      "Adaugă tastele: „când se apasă săgeată dreapta → întoarce-te 90°”. Acum O CONDUCI.",
      "Creează variabila „scor” și mărește-o când pisica atinge un măr. Ai un JOC."
    ],
    expected: "Un personaj controlabil + o variabilă de scor funcțională. Salvat proiectul!"
  },
  project: {
    title: "Vânătoarea de comori Scratch",
    goal: "Construiește un joc complet: jucător controlat din taste, 3 comori de adunat, scor și mesaj de câștig.",
    steps: [
      "Desenează planul pe hârtie ÎNAINTE: personaje, reguli, cum se câștigă.",
      "Construiește mișcarea, apoi comorile (dispar la atingere + scor++), apoi condiția de câștig (scor = 3).",
      "Adaugă un obstacol care scade scorul — jocurile au nevoie de risc!",
      "Dă jocul unui membru al familiei și urmărește-l fără să spui nimic. Notează unde se împiedică — asta e testarea!"
    ],
    success: ["Joc complet jucabil de altcineva fără explicații", "Scor + condiție de câștig", "O sesiune de testare cu observații"]
  },
  questions: [
    "Ce bloc din Scratch e „input” din modelul nostru IPO? Și output?",
    "De ce programele Scratch au nevoie aproape mereu de o buclă „mereu”?",
    "Ce s-ar întâmpla dacă ai pune „scor = scor + 1” ÎN AFARA buclei?",
    "Cum ai face jocul mai greu automat când scorul crește? (Indiciu: încă o condiție!)"
  ],
  exercises: [
    "Fă pisica să spună ceva diferit în funcție de scor (condiție!).",
    "Adaugă un al doilea personaj care urmărește pisica (buclă + „îndreaptă-te spre”).",
    "Remixează un proiect al altcuiva de pe Scratch și schimbă 3 reguli."
  ],
  parent: {
    watch: ["Copilul PLÂNUIEȘTE înainte să construiască (nu doar îmbină blocuri la întâmplare)", "Mândria de a arăta jocul — e combustibilul învățării"],
    help: ["Rezistați tentației de a „repara” voi blocurile — întrebați: „ce AR TREBUI să facă pisica acum?”", "Scratch are tutoriale excelente integrate — lăsați-l pe copil să le conducă"],
    redflags: ["Copilul doar remixează fără să schimbe nimic — cereți o regulă nouă proprie", "Sesiuni peste 90 min fără pauză — Scratch e captivant, dar ochii au nevoie de pauze"]
  },
  pass: [
    "Construiește singur un joc cu eveniment + buclă + condiție + variabilă",
    "Explică fiecare bloc folosit și de ce e acolo",
    "A testat jocul pe altcineva și a notat observații"
  ]
},
{
  id: "4.5", level: 4, num: 5, title: "Trecerea la Python", icon: "🐍", duration: "60 min",
  objectives: [
    "Să scrie și să ruleze primele programe Python: print, variabile, input",
    "Să recunoască în text aceleași concepte din Scratch",
    "Să citească și să înțeleagă primul mesaj de eroare"
  ],
  explanation: [
    "Python este un limbaj de programare scris în text. Un program este un fișier cu instrucțiuni, iar `print('Salut!')` este o instrucțiune care trimite un mesaj către ecran. Python este potrivit la început fiindcă seamănă cu engleza, dar respectă exact reguli de sintaxă, adică reguli despre cuvinte, ghilimele și paranteze.",
    "Conceptele din Scratch rămân aceleași: variabila devine `scor = 0`, iar blocul de întrebare devine `nume = input('Cum te cheamă?')`. Lucrează incremental: scrie ideea, adaugă două linii, salvează cu extensia `.py`, rulează și compară rezultatul cu ce ai așteptat.",
    "Exemplul complet se desfășoară astfel: programul execută `input`, așteaptă textul, îl păstrează în `nume`, apoi `print` combină salutul cu valoarea. Dacă tastezi Ada, rezultatul este un salut pentru Ada. Pentru exerciții folosește nume inventate și nu cere parole, adrese sau alte date personale.",
    "O limită este că un mesaj de eroare nu repară singur codul și nici nu garantează că ideea ta este corectă. `SyntaxError` indică o problemă de formă, dar un program poate rula și totuși să afișeze ceva greșit. Citește ultima linie a erorii, verifică linia indicată și schimbă un singur lucru.",
    "Demo-ul „Primul program: de la idee la rulare” urmărește exact ideea → cod → rulare → eroare → rezultat. Reia traseul cu numele tău fictiv, apoi provoacă intenționat o ghilime, repar-o și compară acest flux cu blocurile Scratch învățate anterior."
  ],
  demo: {
    type: "flow",
    title: "Primul program: de la idee la rulare",
    steps: [
      { label: "💭 Ideea", info: "Vreau un program care mă întreabă cum mă cheamă și mă salute personal. Doar 3 rânduri!" },
      { label: "✍️ Codul", info: "nume = input(\"Cum te cheamă? \") apoi print(\"Salut,\", nume). Fiecare cuvânt contează — paranteze, ghilimele, totul." },
      { label: "▶️ Rularea", info: "Salvezi ca salut.py și rulezi: python3 salut.py. Calculatorul te întreabă și așteaptă. E VIU!" },
      { label: "🐛 Eroarea", info: "Ai uitat o ghilimea? Python spune: SyntaxError, line 2. Nu se supără — te ajută. Citește, repară, rulează din nou." },
      { label: "🎉 Rezultat", info: "\"Salut, Ada!\" — scris de calculator, dar COMANDAT de tine. Prima ta creație software funcțională." }
    ]
  },
  experiment: {
    title: "Atelierul print",
    materials: ["Calculator cu Python 3 instalat", "Un editor de text (sau Thonny/IDLE)"],
    steps: [
      "Deschide un terminal și scrie python3. Ești în modul interactiv — fiecare linie rulează imediat!",
      "Scrie: print(\"Salut, lume!\") — tradiția spune că primul program TREBUIE să salute lumea.",
      "Scrie: nume = \"Numele tău\" apoi print(nume). Prima cutie digitală!",
      "Scrie: varsta = input(\"Câți ani ai? \") apoi print(\"Anul viitor vei avea\", varsta, \"+ 1 ani\"). Observă ce e ciudat! (Python lipsește textul, nu adună — aflăm de ce la lecția 4.6.)",
      "Provocare: fă programul să-ți spună un compliment folosind numele introdus."
    ],
    expected: "5+ linii de Python rulate cu succes + prima eroare întâlnită și reparată."
  },
  project: {
    title: "Interviul robotului",
    goal: "Scrie un program care intervievează utilizatorul (3+ întrebări) și generează o prezentare amuzantă din răspunsuri.",
    steps: [
      "Planifică pe hârtie: ce întrebări pui? (nume, mâncare favorită, super-putere dorită...)",
      "Scrie câte un input() pentru fiecare, salvând fiecare răspuns într-o variabilă cu nume clar.",
      "Construiește povestea finală cu print-uri care combină variabilele: „Ada, mâncătoarea de pizza cu puterea invizibilității!”",
      "Testează pe 2 persoane. Adaugă o surpriză: o ultimă întrebare cu un răspuns diferit în funcție de ce tastează (pregătire pentru if!)."
    ],
    success: ["Program cu 3+ input-uri și variabile", "Poveste finală amuzantă și personalizată", "Testat pe 2 persoane reale"]
  },
  questions: [
    "De ce trebuie ghilimele la text, dar nu la numere? Încearcă print(3+4) vs print(\"3+4\").",
    "Ce e diferit între a scrie nume cu mic și Nume cu mare? Încearcă!",
    "De ce crezi că primul program al tuturor programatorilor e „Hello, world”?",
    "Ce avantaj are textul față de blocurile din Scratch? Ce dezavantaj?"
  ],
  exercises: [
    "Scrie un program care afișează numele tău de 3 ori, pe rânduri diferite.",
    "Fă un program care întreabă 2 numere și le afișează împreună într-o propoziție.",
    "Provocare: creează intenționat 3 erori diferite și citește mesajele. Ce ai învățat din fiecare?"
  ],
  parent: {
    watch: ["Copilul CITEȘTE erorile în loc să se sperie de ele", "Curiozitatea de a modifica programul după ce merge"],
    help: ["Instalați Thonny — editor făcut special pentru începători, cu buton mare de Run", "Nu tastați voi codul „ca să meargă mai repede”; copilul trebuie să simtă tastele"],
    redflags: ["Copilul copiază cod lung din internet fără să-l priceapă — regula: scrii doar ce poți explica", "Frustrare la erori de sintaxă — normal! Faceți din „găsește eroarea” un joc cu puncte"]
  },
  pass: [
    "Scrie și rulează singur un program cu input + variabile + print",
    "Citește un SyntaxError și găsește linia greșită",
    "Compară corect 3 blocuri Scratch cu echivalentul lor Python"
  ]
},
{
  id: "4.6", level: 4, num: 6, title: "Tipuri de date și structuri de control", icon: "🎛️", duration: "60 min",
  objectives: [
    "Să distingă tipurile: număr (int), text (str), adevărat/fals (bool)",
    "Să scrie if/elif/else și bucle for/while funcționale",
    "Să convertească input-ul (care e mereu text!) în număr cu int()"
  ],
  explanation: [
    "Un tip de date descrie ce fel de valoare are programul și ce operații au sens pentru ea. `int` este un număr întreg, `str` este text, iar `bool` este valoarea logică `True` sau `False`. `5 + 3` calculează 8, dar `'5' + '3'` lipește două texte și produce `'53'`.",
    "`input()` întoarce mereu text, chiar când utilizatorul tastează 42. Dacă vrei să calculezi, folosești `int(input(...))`, iar conversia transformă textul valid în număr. O comparație precum `puncte >= 10` produce un boolean; `if` folosește acel rezultat pentru a alege o ramură.",
    "Urmărește exemplul: citești punctele, verifici mai întâi `puncte >= 100` și afișezi „Campion”; dacă nu, verifici `puncte >= 10`; altfel afișezi „Mai încearcă”. Pentru repetare, `for i in range(3)` are trei ture, iar `while incercari < 3` continuă numai dacă `incercari` se schimbă spre limită.",
    "Confuzia comună este ordinea condițiilor: dacă verifici `puncte >= 10` înainte de `puncte >= 100`, un campion intră deja în prima ramură. O altă limită este că `int()` poate eșua la text nevalid. Verifică intrarea și păstrează o condiție de oprire pentru fiecare `while`, altfel apare bucla infinită.",
    "În demo-ul „Antrenament de tipuri și bucle”, quiz-ul separă textul de număr, iar pașii testează 5, 10 și 100. Observă cum schimbarea ordinii modifică rezultatul, apoi urmărește `range(3)` și condiția `while` ca să legi tipurile de controlul programului."
  ],
  demo: {
    type: "quiz",
    title: "Antrenament de tipuri și bucle",
    questions: [
      { q: "Ce rezultă din input(), chiar dacă tastezi 42?", opts: ["Numărul 42", "Textul \"42\""], correct: 1, why: "input() aduce MEREU text. De aceea avem nevoie de int() ca traducător." },
      { q: "Ce afișează: print(\"5\" + \"3\")?", opts: ["8", "53"], correct: 1, why: "Lipirea de text (concatenare): \"5\" + \"3\" = \"53\". Adunarea e doar pentru numere!" },
      { q: "Câte valori poate avea o variabilă booleană?", opts: ["2: True și False", "Infinite, ca un număr"], correct: 0, why: "Booleanul e cel mai simplu tip: doar adevărat sau fals, ca un bec." },
      { q: "Ce lipsește ca bucla while x < 5 să se termine?", opts: ["O linie care crește x înăuntru", "Nimic, se oprește singură"], correct: 0, why: "Dacă x nu se schimbă niciodată, condiția rămâne adevărată veșnic: buclă infinită!" },
      { q: "Ce face for i in range(3)?", opts: ["Repetă de 3 ori (i = 0, 1, 2)", "Repetă la infinit"], correct: 0, why: "range(3) generează 0, 1, 2 — bucla rulează exact de 3 ori." }
    ]
  },
  experiment: {
    title: "Detectorul de tipuri",
    materials: ["Python 3", "Terminal sau Thonny"],
    steps: [
      "În modul interactiv, scrie: type(5), type(\"5\"), type(5.5), type(True). Ce spune fiecare?",
      "Încearcă: \"5\" + \"3\" apoi int(\"5\") + int(\"3\"). Explică diferența cuiva.",
      "Scrie programul cu o valoare fictivă: puncte = int(input(\"Puncte de joc? \")), apoi if puncte >= 10: print(\"Nivel nou!\") else: print(\"Mai încearcă!\")",
      "Adaugă corect ramura mai specială: if puncte >= 100: print(\"Campion!\"), elif puncte >= 10: print(\"Nivel nou!\"), else: print(\"Mai încearcă!\"). Testează 5, 10 și 100; apoi inversează primele două condiții ca să observi de ce ordinea contează.",
      "Bucla finală: for i in range(5): print(i, \"— Python e tare\")"
    ],
    expected: "Program cu if/elif/else funcțional + explicația verbală a diferenței \"5\" vs 5."
  },
  project: {
    title: "Mașina de povești interactive",
    goal: "Un program care pune 3 întrebări și folosește if/else ca să creeze finaluri diferite ale poveștii.",
    steps: [
      "Scrie scheletul poveștii: erou (input nume), loc (input), alegere cheie (input: stânga/dreapta).",
      "Folosește if/else la alegerea cheie pentru două finaluri complet diferite.",
      "Adaugă o buclă: povestea se repetă până utilizatorul tastează „stop” (while + condiție).",
      "Adaugă un nume de monstru generat din numele utilizatorului + „zilla”. Humorul vinde programele!"
    ],
    success: ["Două finaluri distincte controlate de if/else", "Buclă de repetare care se oprește corect", "Program jucat de altcineva până la capăt"]
  },
  questions: [
    "De ce are nevoie calculatorul de tipuri diferite? Nu ar fi mai simplu unul singur?",
    "Ce se întâmplă dacă pui elif-urile în ordine greșită? Testează și explică.",
    "Unde vei folosi TU o buclă while într-un joc? Dă două exemple.",
    "Cum „oprești de urgență” o buclă infinită pornită din greșeală? (Ctrl+C — salvează-ți amintirea asta!)"
  ],
  exercises: [
    "Scrie un program care numără de la 10 la 1 și apoi scrie „Lansare! 🚀”.",
    "Fă un ghicitor cu un cuvânt secret inventat, de exemplu „cometa”; nu folosi parole reale. Repetă încercarea cu while până când cuvântul se potrivește.",
    "Repară programul: varsta = input(\"Ani? \") / if varsta > 8: ... — găsește ambele greșeli!"
  ],
  parent: {
    watch: ["Copilul convertește input() automat, fără reamintire", "Testează ambele ramuri ale if-ului, nu doar cea „fericită”"],
    help: ["Când programul nu merge, ghidați cu întrebări: „ce tip are variabila ACUM?”", "Aplaudați bucla infinită accidentală — e o tradiție de inițiere, toți programatorii au una"],
    redflags: ["Copilul nu testează ramura else niciodată — bug-urile iubesc ramurile netestate", "Confuzia = (pune în cutie) vs == (compară) — e greșeala clasică; faceți un afiș cu diferența"]
  },
  pass: [
    "Scrie programe cu if/elif/else, for și while fără model",
    "Explică de ce int(input()) și nu input() direct",
    "Prinde și oprește o buclă infinită, explicând cauza"
  ]
},
{
  id: "4.7", level: 4, num: 7, title: "Debugging - știința erorilor", icon: "🐛", duration: "50 min",
  objectives: [
    "Să urmeze metoda de debugging în 8 pași (de la „ce trebuia” la „ce am învățat”)",
    "Să citească un traceback Python și să localizeze eroarea",
    "Să folosească print() ca instrument de investigație"
  ],
  explanation: [
    "Debugging înseamnă investigarea și repararea unei probleme dintr-un program. O eroare de sintaxă împiedică pornirea, o eroare de execuție apare în timpul rulării, iar o eroare de logică lasă programul să ruleze cu un rezultat greșit. Debugging-ul folosește dovezi, nu presupuneri.",
    "Metoda este repetabilă: descrie rezultatul așteptat, observă rezultatul real, citește mesajul și linia, formulează o singură ipoteză, adaugă un test mic, rulează din nou și notează concluzia. Dacă schimbi cinci lucruri simultan, nu mai știi care schimbare a rezolvat sau a creat problema.",
    "Exemplul cu vârsta pornește de la `varsta = input(...)`, deci programul are text. `print('DEBUG', varsta, type(varsta))` arată valoarea și tipul înainte de `if`; după ce observi `str`, testezi `int(input(...))`, apoi rulezi cu 5, 12 și 18 pentru a verifica mai multe cazuri.",
    "O limită importantă este că `print` arată doar ce alegi să observi și poate modifica timpul sau volumul outputului. Un traceback indică o zonă, nu întotdeauna cauza conceptuală. După reparare, elimini mesajele de debug și verifici și ramurile nefericite, nu doar exemplul care funcționează.",
    "Demo-ul „Metoda detectivului în 8 pași” face investigația vizibilă de la simptom la lecția învățată. În „Spitalul de bug-uri”, completează pentru fiecare pacient ipoteza și testul înainte de soluție; astfel demo-ul devine o rutină pe care o poți folosi în orice limbaj."
  ],
  demo: {
    type: "flow",
    title: "Metoda detectivului în 8 pași",
    steps: [
      { label: "1️⃣ Ce trebuia?", info: "„Programul trebuia să spună dacă pot vedea filmul.” Definește așteptarea CLAR." },
      { label: "2️⃣ Ce a făcut?", info: "„A zis că un copil de 5 ani poate vedea filmul de 18+.” Observația exactă e proba nr. 1." },
      { label: "3️⃣ Unde diferă?", info: "Decizia e greșită → problema e probabil în if. Restrânge zona ca un detectiv." },
      { label: "4️⃣ Ce zice eroarea?", info: "Nicio eroare? Atunci logica e greșită, nu sintaxa. Erorile de logică sunt cele mai viclene." },
      { label: "5️⃣ Ipoteza", info: "„Poate compar TEXT cu număr, nu număr cu număr.” O ipoteză e o presupunere testabilă." },
      { label: "6️⃣ Testează", info: "Adaugă print(\"DEBUG tip:\", type(varsta)). Rulează. <class 'str'> — PRINS! lipsește int()!" },
      { label: "7️⃣ Repară", info: "varsta = int(input(...)). Rulează din nou cu 5, 12, 18. Toate corecte? ✅" },
      { label: "8️⃣ Ce-am învățat?", info: "„input() aduce text.” Scrie în jurnal — viitorul tău îți mulțumește." }
    ]
  },
  experiment: {
    title: "Spitalul de bug-uri",
    materials: ["Python", "Programele „bolnave” de mai jos"],
    steps: [
      "Pacient 1: prenume = input(\"Nume? \") / print(\"Salut, \", PreNUME) — ce zice eroarea? Vindecă-l.",
      "Pacient 2: while puncte < 10: print(puncte) — pornește-l 3 secunde și oprește-l cu Ctrl+C. Diagnosticul?",
      "Pacient 3: if varsta = 10: — eroare de sintaxă la cel mai clasic bug din lume. Care-i diferența = vs ==?",
      "Pentru fiecare pacient, completează fișa de detectiv: Simptom / Ipoteză / Test / Lecție învățată."
    ],
    expected: "3 bug-uri diagnosticate cu metoda (nu la ghici) + 3 fișe completate."
  },
  project: {
    title: "Jocul cu bug-ul plantat",
    goal: "Scrie un mini-joc funcțional, apoi plantează intenționat 3 bug-uri și provoacă pe cineva să le găsească.",
    steps: [
      "Scrie un joc simplu funcțional (ex: ghicește animalul după 3 indicii).",
      "Fă o copie și plantează 3 bug-uri: unul de sintaxă, unul de logică, unul viclean (tip de date).",
      "Dă copia „bolnavă” unui prieten/părinte cu fișa de detectiv. Cronometrează!",
      "Schimbați rolurile. Cine e detectivul mai rapid? Ce tip de bug a fost cel mai greu de găsit?"
    ],
    success: ["Joc original funcțional", "3 bug-uri plantate din 3 categorii diferite", "Detectivul a folosit metoda, nu ghicitul"]
  },
  questions: [
    "De ce e mai bună întrebarea „ce trebuia să se întâmple?” decât „de ce nu merge?”",
    "Ce tip de eroare NU îți arată Python niciodată direct? (Logica greșită — programul „merge”, dar greșit!)",
    "De ce scriem bug-urile învățate în jurnal? Ce se întâmplă peste 6 luni fără jurnal?",
    "Un coleg zice „am un bug ciudat, hai să rescriem tot”. Ce-i răspunzi?"
  ],
  exercises: [
    "Găsește bug-ul: pret = int(input(\"Preț? \")) / if pret > 100 print(\"Scump\") — sunt două!",
    "Scrie un program cu un bug intenționat și dă-l unui coleg cu fișa de detectiv.",
    "Citește cu voia tare un traceback real: ce zice ultima linie? Ce linie din cod e vinovată?"
  ],
  parent: {
    watch: ["Copilul începe cu ipoteza și testul, NU cu rescrierea", "Calmul la erori — aici se construiește caracterul de inginer"],
    help: ["Fiți „rața de cauciuc”: lăsați copilul să vă explice problema cu voia tare; de multe ori soluția apare în mijlocul explicației (tehnică reală: rubber duck debugging)", "Nu găsiți voi bug-ul — puneți întrebarea următoare din metodă"],
    redflags: ["Copilul șterge tot și rescrie la fiecare eroare — opriți și reveniți la metodă", "Plâns/frustrare la erori repetate — pauză + povestea moliei din 1947 + amintirea că bug-urile sunt profesori"]
  },
  pass: [
    "Aplică metoda în 8 pași pe un bug necunoscut, cu fișă completată",
    "Citește un traceback și identifică linia + tipul erorii",
    "Folosește print de debug ca prim reflex de investigație"
  ]
},
{
  id: "4.8", level: 4, num: 8, title: "Proiect: Jocul Ghicește Numărul", icon: "🎯", duration: "90 min", isProject: true,
  objectives: [
    "Să construiască de la zero un joc complet: ghicește numărul 1-100",
    "Să combine toate conceptele nivelului: variabile, input, condiții, bucle, debugging",
    "Să extindă singur jocul cu cel puțin 2 funcționalități noi"
  ],
  explanation: [
    "Proiectul este o aplicație în care calculatorul alege un număr secret între 1 și 100, iar jucătorul încearcă să-l ghicească. Un joc are o stare, adică valorile curente precum secretul și numărul de încercări, reguli de decizie și un rezultat observabil: indiciu sau victorie.",
    "Construiește în straturi pentru a înțelege cauza fiecărui comportament: începe cu secretul fix și o singură citire, adaugă `if` pentru prea mic/prea mare, apoi `while` pentru repetare, contorul pentru încercări și abia la final `random.randint(1, 100)`. Salvarea fiecărei versiuni este un control de risc.",
    "Exemplul se execută astfel: se alege secretul, se citește `int(input(...))`, contorul crește, comparația alege indiciul, iar bucla revine până când ghicirea este egală cu secretul. Dacă jucătorul tastează 30, apoi 70, iar secretul este 42, mesajele restrâng intervalul până la ghicirea corectă.",
    "Limita este că `int()` nu poate transforma orice text, iar aleatoriul face testarea mai greu de repetat. Pentru debugging poți folosi temporar un secret fix, fără să-l afișezi în versiunea finală. Nu folosi parole sau date reale ca secrete; acesta este un joc, nu un sistem de autentificare.",
    "Demo-ul „Arhitectura jocului” arată secretul, bucla, indiciul și contorul ca piese separate. Urmează-le în ordine pentru fiecare versiune din experiment, apoi folosește testele din demo ca să explici familiei de ce strategia de înjumătățire reduce încercările."
  ],
  demo: {
    type: "flow",
    title: "Arhitectura jocului",
    steps: [
      { label: "🎲 Secretul", info: "import random apoi secret = random.randint(1, 100). Calculatorul „alege” — prima ta întâlnire cu modulele!" },
      { label: "📥 Bucla", info: "while ghicit != secret: — jocul continuă cât timp jucătorul n-a nimerit. Condiția de oprire e victoria!" },
      { label: "❓ Indiciul", info: "if ghicit < secret: print(\"Prea mic!\") elif ghicit > secret: print(\"Prea mare!\") — trei căi, un singur adevăr." },
      { label: "🔢 Contorul", info: "incercari = incercari + 1 la fiecare tură. La final: „Ai ghicit din X încercări!”" },
      { label: "🏆 Lansarea", info: "Testează cu 5 persoane. Câte încercări le trebuie? (Matematicienii știu: maxim 7 dacă joci inteligent! Întreabă-i de jumătăți.)" }
    ]
  },
  experiment: {
    title: "Construcția ghidată",
    materials: ["Python 3", "Jurnalul", "90 de minute"],
    steps: [
      "V1 (schelet): secret fix (42), o singură ghicire, un singur if. Rulează. Testează.",
      "V2 (bucla): adaugă while și contorul de încercări. Rulează până ghicești.",
      "V3 (aleator): import random și număr secret nou la fiecare rulare. Joacă de 3 ori!",
      "V4 (robustețe): ce se întâmplă dacă tastezi „abc”? Prinde eroarea și spune frumos „doar numere, te rog” (sau notează bug-ul pentru versiunea următoare).",
      "După FIECARE versiune care merge: salvează o copie. Asta e controlul versiunilor în formă embrionară!"
    ],
    expected: "4 versiuni progresive, fiecare salvată, fiecare funcțională. Zero magie — fiecare linie explicabilă."
  },
  project: {
    title: "Ghicește Numărul: Ediția ta",
    goal: "Jocul complet + minimum 2 extensii alese și construite SINGUR + prezentare.",
    steps: [
      "Finalizează jocul de bază și joacă-l cu 3 persoane. Notează reacțiile.",
      "Alege 2+ extensii: dificultăți (ușor 1-50 / greu 1-500), limită de încercări cu „ai pierdut”, scor pe mai multe runde, indicii „cald/rece”, modul invers (TU te gândești, calculatorul ghicește!).",
      "Construiește extensiile una câte una, cu testare după fiecare.",
      "Prezintă jocul familiei ca la un lansare: reguli, demonstrație live, provocare: cine bate calculatorul la încercări puține?"
    ],
    success: ["Joc de bază fără bug-uri cunoscute", "2+ extensii funcționale, alese de copil", "Prezentare + minimum o rundă jucată de public"]
  },
  questions: [
    "Strategia perfectă ghicește în maxim 7 încercări la 1-100. Care e? (Înjumătățire! 50 → 25 → 13...)",
    "Ce s-ar întâmpla dacă ai uita incercari = incercari + 1? Cum observi?",
    "Care extensie a fost cea mai grea și de ce? Ce ai învățat din ea?",
    "Cum ai rescrie jocul ca DOI oameni să joace unul împotriva altuia?"
  ],
  exercises: [
    "Scrie în jurnal fiecare bug întâlnit și cum l-ai rezolvat (minim 2).",
    "Modul invers: tu alegi numărul, calculatorul ghicește prin înjumătățire. Planifică-l pe hârtie!",
    "Fă jocul să spună „FRIG / CĂLDUȚ / CALD / ARDE” în funcție de distanța până la secret."
  ],
  parent: {
    watch: ["Construcția incrementală (V1→V4), nu totul-deodată — semn de maturitate", "Extensiile alese de EL, nu sugerate de voi — proprietatea intelectuală motivează"],
    help: ["Fiți publicul lansării: jucați cu entuziasm, raportați bug-uri cu seriozitate de client", "Dacă se blochează la extensii: reveniți la hârtie și fluxogramă, nu la cod"],
    redflags: ["Copilul vrea extensii uriașe (grafică, sunet) înainte ca baza să fie solidă — protejați-l de supra-ambitionare; baza întâi!", "Copiază extensii de pe net fără să le priceapă — testul: dezactivează netul și cere explicația linie cu linie"]
  },
  pass: [
    "Joc funcțional construit incremental, cu versiuni salvate",
    "2 extensii proprii explicate linie cu linie",
    "Jurnal cu bug-uri + strategia optimă explicată (în 7 din 7!)"
  ]
}
];
