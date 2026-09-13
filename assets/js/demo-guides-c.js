/* Atelierul Tehnologiei - Ghiduri pentru demonstrațiile nivelurilor 7-9 */
const DEMO_GUIDES_C = {
  "7.1": [
    "Un circuit electric este un drum închis: bateria impinge sarcinile electrice prin fire, iar ele se intorc la baterie. Tensiunea, notata cu U și măsurată în volti (V), spune cât de puternic este acest impuls. Curentul, notat cu I și măsurat în amperi (A), spune cât de multa electricitate trece; miliamperul (mA) este o miime de amper: 1 mA = 0.001 A.",
    "Rezistenta, notata cu R și măsurată în ohmi (ohm), ingusteaza drumul curentului ca o stramtoare dintr-un furtun. Legea lui Ohm este U = R x I. Putem afla curentul impartind tensiunea la rezistență: 9 V / 450 ohm = 0.02 A, adică 20 mA. Acesta este un curent mic potrivit pentru exemplul nostru de LED, iar rezistență il protejeaza. Lucram doar cu baterii și joasă tensiune, niciodata cu priza."
  ],
  "7.2": [
    "Un breadboard este o placă de probe fără lipitura. Sub multe găuri sunt benzi metalice: într-un grup obișnuit de cinci găuri, toate sunt conectate între ele. De aceea verificăm mai întâi desenul plăcii și urmărim drumul curentului, de la plus la minus, înainte să alimentam montajul.",
    "LED-ul este o diodă luminătoare și are polaritate, adică sens corect de conectare. Anodul este piciorul mai lung și merge la plus (+); catodul este piciorul mai scurt și merge la minus (-). Rezistenta limitează curentul, condensatorul stochează pentru foarte puțîn timp energie, iar butonul este un întrerupător temporar: apăsat închide circuitul, liber il deschide."
  ],
  "7.3": [
    "Un microcontroler este un calculator mic care citește intrari și comandă obiecte. Arduino IDE este programul în care scriem codul, iar USB-ul duce programul compilat, adică tradus într-o formă înțeleasă de placă, în memoria ei. Dupa încărcare, placă poate rula singură dacă primește alimentare.",
    "In codul Arduino, setup() rulează o singură dată la pornire, iar loop() se repetă la nesfârșit. pinMode(2, OUTPUT) spune ca pinul 2 este o ieșire; digitalWrite(2, HIGH) ii dă nivelul pornit, iar LOW il oprește. delay(500) face o pauză de 500 milisecunde, adică jumătate de secundă. Astfel comandă aprinde, așteaptă, stinge și repetă LED-ul."
  ],
  "7.4": [
    "Un LDR este o rezistență dependenta de lumină: lumină multa ii micșorează rezistență, iar intunericul o mărește. Pinul A0 este o intrare analogică. analogRead(A0) transforma semnalul măsurat într-un număr de la 0 la 1023; în acest montaj, 0 înseamnă foarte putina lumină, iar 1023 foarte multa lumină.",
    "Serial.println(lumina) trimite numărul la Serial Monitor, fereastra-jurnal de pe calculator. O regulă if compară apoi citirea cu un prag, de exemplu 300: dacă lumina este sub 300, este suficient de întuneric pentru acțiune. Pragul nu se ghicește; măsurăm mai întâi în condiții diferite. digitalWrite(LED, HIGH) aprinde LED-ul ales ca ieșire."
  ],
  "7.5": [
    "Un protocol este un set de reguli prin care dispozitivele isi înțeleg mesajele. I2C folosește două fire: SDA pentru date și SCL pentru ceas, adică ritmul schimbului. Fiecare modul are o adresă; 0x76 este o adresă scrisă în hexazecimal, un mod compact de a scrie numere cu cifrele 0-9 și literele A-F. ESP32 întreabă astfel exact senzorul potrivit.",
    "Wi-Fi trimite date prin radio în rețeaua locală, iar routerul le îndreaptă spre dispozitivul corect. HTTP este protocolul folosit de paginile și cererile web: ESP32 poate trimite o cerere, iar serverul Raspberry Pi răspunde. SQLite este o bază de date mică păstrată într-un fișier; serverul poate salva acolo temperatură, iar dashboard-ul, adică pagina cu indicatori și grafice, o citește fără ca datele să iasa din casa."
  ],
  "7.6": [
    "Un motor DC se rotește continuu, un servo se duce la un unghi cerut, iar un stepper se misca în pași precisi. De aceea ventilatorul și roata folosesc adesea motor DC, bratul sau bariera folosesc servo, iar imprimanta 3D ori plotterul folosesc stepper. Alegerea depinde de mișcarea necesara, nu de numele motorului.",
    "Servo-ul primește un semnal repetat pe firul de semnal; alimentarea ii dă energie, iar GND este masa, punctul comun de referință. Toate părțile montajului au nevoie de GND comun ca semnalul să poată fi înțeles. PWM înseamnă Pulse Width Modulation: impulsuri pornit-oprit ale caror durate pot controla energia medie sau pozitia. Folosim numai motoare mici, de joasă tensiune, și nu forțăm niciodata un mecanism blocat."
  ],
  "7.7": [
    "LDR-ul citește lumină la intervale de 2 secunde, iar ESP32 verifică dacă numărul are sens. Pentru o citire analogică, valorile posibile sunt între 0 și 1023; o valoare sub 0 sau peste 1023 este imposibilă și este respinsă cu o regulă if, nu folosită pentru a comandă lampa.",
    "Histerezisul înseamnă două praguri și o mică memorie. Sub 250 aprindem, peste 350 stingem, iar între ele pastram starea anterioara. Aceasta zona evita comutarile repetate la amurg. Starea este valoarea păstrată într-o variabila, de exemplu lampa aprinsa sau stinsa.",
    "Wi-Fi poate trimite doar evenimentele schimbarii de stare către un server local: ora, starea și luminozitatea. SQLite păstrează aceste randuri într-o bază de date, iar pagina web poate afisa istoricul. Nu trimitem parole, adrese sau programul familiei, iar lumină trebuie să funcționeze local chiar dacă serverul nu răspunde."
  ],
  "8.1": [
    "SENSE, THINK, ACT înseamnă simte, decide, actioneaza. SENSE citește un senzor, THINK compară numărul cu o regulă, iar ACT trimite comenzi motoarelor. Apoi robotul citește din nou, deoarece acțiunea a schimbat lumea. Aceasta repetare este o bucla de control.",
    "Senzorul ultrasonic trimite un impuls sonor foarte inalt și asculta ecoul; metoda se numește ecolocatie. Un prag este distanță aleasă ca limita: 20 cm < 30 cm înseamnă ca obstacolul este prea aproape. Milisecunda este o miime de secundă, iar o bucla care rulează de 10-100 de ori pe secundă poate reactiona repede, dar testul rămâne la viteză mică și în spatiu liber."
  ],
  "8.2": [
    "Un robot cu două roți folosește motoare DC și un driver de motor. Driverul este intermediarul care dă motoarelor curentul de care au nevoie; pinii microcontrolerului trimit numai comenzi, nu alimentează direct motoarele. Bateriile alimentează driverul, driverul alimentează motoarele, iar placă, driverul și bateria au GND comun.",
    "Cand ambele motoare merg înainte cu aceeași viteză, robotul merge drept. Daca stânga merge înainte și dreapta se oprește, robotul vireaza dreapta; dacă motoarele merg în sensuri opuse la aceeași viteză, robotul se rotește pe loc. PWM poate schimbă viteză medie a fiecarui motor pentru calibrare, fiindca două motoare reale nu se invart perfect identic."
  ],
  "8.3": [
    "Senzorul ultrasonic trimite un impuls, pornește un cronometru și așteaptă ecoul. Sunetul face drumul dus și intors, așa ca distanță este aproximativ viteză sunetului înmulțită cu timp și împărțită la 2. In exemplu, un ecou după 3 milisecunde înseamnă aproximativ 51 cm; această este o estimare, nu o măsurătoare magică.",
    "Pragul de 25 cm este limita aleasă prin test: peste el robotul poate merge, sub el oprește. La 18 cm, STOP vine inaintea manevrei. Dupa o mișcare de 0.5 s înapoi și 0.4 s viraj stânga, robotul măsoară iar; 60 cm liber înseamnă ca poate continuă. Repetarea de 10 ori pe secundă il ajută să observe schimbări dese.",
    "Materialele moi pot absorbi sunetul, obiectele subțiri pot fi ratate, iar o oglinda înclinată poate trimite ecoul în altă direcție. De aceea testăm cu obiecte diferite, alegem o viteză mică și privim citirile ca pe dovezi care trebuie verificate."
  ],
  "8.4": [
    "Senzorii IR trimit lumină infrarosie, invizibila pentru ochi, și observă cât se reflecta. De obicei albul reflecta mai mult și negrul mai puțîn, dar podeaua, distanță și lumină din camera pot schimbă rezultatul. Înainte de cursa, calibram senzorii pe alb și negru și alegem un prag potrivit.",
    "Cu doi senzori, linia între ei înseamnă ca robotul merge drept, deci ambele motoare pot avea aceeași viteză. Daca senzorul drept vede negru, linia este la dreapta și robotul corecteaza spre dreapta: incetineste motorul stang sau accelereaza motorul drept.",
    "Senzorii analogici pot arată cât de mult s-a îndepărtat robotul de linie. Controlul proporțional înseamnă ca eroare mică produce corecție mică, iar eroare mare produce corecție mai mare. O corecție prea mare provoaca oscilații, adică viraje repetate stânga-dreapta, așa ca factorul se testeaza treptat."
  ],
  "8.5": [
    "O mașînă de stări împarte o misiune în situații cu nume. Robotul se afla într-o singură stare la un moment dat, iar un eveniment observat de senzori il mută în altă. Butonul de start, LED-ul roșu și marcajele de pe pistă sunt semnale pe care programul le poate interpreta.",
    "BAZA este așteptarea pornirii; URMARESTE_LINIE folosește senzorii IR; EVITA_OBSTACOL folosește distanță ultrasonică; SE_INTOARCE urmărește traseul înapoi; SARBATOARE semnalizeaza finalul cu lumini și sunet. Marcajul zonei, precum o linie dublă, este un semn hotărât dinainte ca robotul a ajuns într-un loc special.",
    "O tranziție este schimbarea de la o stare la altă, de exemplu marcaj vazut -> EVITA_OBSTACOL. Stari clare și tranziții scrise înainte de cod impiedica robotul să faca două planuri deodată. In orice eroare sau citire neplauzibila, proiectul are și o stare de oprire sigură."
  ],
  "9.1": [
    "O parolă-fraza este o combinație lunga de cuvinte neobișnuite, de exemplu „tigru-albastru-alearga-42-zile”. Lungimea o face greu de ghicit chiar dacă este mai usor de tinut minte decat o parolă scurtă plina de simboluri. O parolă trebuie să fie unică: aceeași parolă nu se refolosește la două conturi.",
    "Daca o combinație email-parolă ajunge dintr-o breșă, hoții pot incerca automat aceeași combinație pe multe site-uri. Aceasta se numește credential stuffing. Un password manager este un seif criptat care poate genera și păstra parole unice, iar MFA sau autentificarea cu mai mulți factori cere inca o dovadă, cum ar fi un cod din telefon. Nici parolă, nici codul MFA nu se spun nimanui."
  ],
  "9.2": [
    "Phishing înseamnă un mesaj-momeala care pretinde ca vine de la o persoană sau firma de incredere și încearcă să obtina date sau bani. URGENT și termenul de 2h sunt presiune de timp, nu dovadă. Un domeniu este numele principal al unui site, iar extensia este finalul precum .com sau .xyz.",
    "Un nume precum arnaz0n-suport.com seamana intentionat cu un brand, dar are litera zero și nu este domeniul oficial. Intr-o adresă lunga ca suport.amazon.com.rău-față.com, domeniul important este rău-față.com: partea de la final, chiar înainte de extensie. Subdomeniile din stânga pot fi alese de proprietarul acelui domeniu.",
    "Un mesaj poate fi probabil legitim, dar nu devine sigur doar pentru ca arată bine. Pentru o alerta despre banca, comandă sau cont, nu apasam linkul: deschidem noi aplicația oficiala ori tastam adresă cunoscută. Nu introducem parole, coduri MFA sau date de card după un mesaj surprinzator."
  ],
  "9.3": [
    "Ingineria sociala este incercarea de a pacali o persoană, nu de a sparge direct calculatorul. Pretextul este povestea inventata despre cine este cineva; autoritatea folosește un titlu ca să nu mai pui întrebări; urgenta cere acțiune grabita; simpatia cere o favoare ca între prieteni.",
    "Suportul legitim nu are nevoie de parolă ta, iar un cod SMS sau MFA este a două cheie a contului, destinata numai tie. O identitate online poate fi imitata, chiar dacă mesajul spune ca este de la un prieten sau membru al familiei.",
    "Canalul cunoscut este metoda sigură de verificare: închizi mesajul și suni numărul deja salvat, intrebi persoană față în față sau deschizi aplicația oficiala. Pentru orice cerere neasteptata de parolă, cod, poză sau adresă, refuzul și discutia cu un adult sunt reactia corectă."
  ],
  "9.4": [
    "Un port este un număr care ajută un calculator să ajungă la programul potrivit. Un pachet este un mic mesaj trimis prin rețea. Portul 3306 este folosit adesea pentru baze de date, iar portul 80 pentru pagini web prin HTTP. nginx este un program-server care poate răspunde la cereri web.",
    "Firewall-ul este un filtru de reguli pentru conexiuni. „Implicit închis” înseamnă ca blocheaza tot ce nu a fost permis clar: o cerere la 3306 poate fi respinsă, iar una la 80 poate fi acceptată dacă regulă spune așa. Observam numai propriul laborator, fără să scanam alte dispozitive.",
    "O vulnerabilitate este o slăbiciune cunoscută în software, iar un patch sau update este reparatia oferita de producător. Opt luni fără actualizare pot lasa reparatii importante neinstalate. Actualizarile se planifica, se face backup când e nevoie și se verifică apoi ca serviciile proprii merg în continuare."
  ],
  "9.5": [
    "Gazda este calculatorul real pe care lucrezi. VirtualBox poate crea pe el o mașînă virtuală (VM), un calculator simulat într-o fereastra, cu disc și memorie virtuale separate. VM-ul este locul unde învățăm, fără date personale și fără a testa sisteme ale altcuiva.",
    "Setarea Host-only permite VM-ului să vorbească doar cu gazda, iar Internal permite vorbirea doar între VM-uri configurate pe aceeași rețea virtuală. Aceste moduri sunt diferite, dar ambele pot evita drumul spre rețeaua casei și internet; nu alegem NAT sau Bridged pentru demonstratia izolata, deoarece ele pot oferi acces mai larg.",
    "Un snapshot este o fotografie a starii VM-ului la un moment dat. Dupa o setare greșită, revenim la snapshot, dar această nu este permisiune pentru acțiuni riscante. Regula rămâne simplă: testăm doar ce deținem sau pentru care avem acord explicit, scris, cu limite clare."
  ],
  "9.6": [
    "Un audit de securitate este o verificare defensiva a propriei familii: observăm ce avem și alegem îmbunătățiri, fără scanari, incercari de parole sau teste asupra altor oameni. Dispozitiv înseamnă orice aparat conectat, iar un dispozitiv necunoscut este o întrebare pentru adult, nu o țintă de investigat.",
    "Parolele unice se păstrează într-un password manager. Parola Wi-Fi și parolă de administrare a routerului nu sunt același lucru: prima leagă dispozitivele la rețeaua fără fir, iar a două permite schimbarea setarilor routerului. Niciuna nu se noteaza în raport sau demo; adultul verifică și modifica setarile.",
    "Backup înseamnă o copie a datelor, păstrată astfel incat să poată fi restaurată după o problemă. O constatare buna spune ce am observat, ce risc poate exista și ce acțiune sigură recomandam. Fiecare schimbare se face pe rând, cu o cale de revenire, apoi verificăm ca rețeaua familiei funcționează normal."
  ]
};
