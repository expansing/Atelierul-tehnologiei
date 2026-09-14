/* Atelierul Tehnologiei - Ghiduri pentru demonstrațiile nivelurilor 7-9 */
const DEMO_GUIDES_C = {
  "7.1": [
    "Un circuit electric este un drum închis: bateria împinge sarcinile electrice prin fire, iar ele se întorc la baterie. Tensiunea, notată cu U și măsurată în volți (V), spune cât de puternic este acest impuls. Curentul, notat cu I și măsurat în amperi (A), spune cât de multă electricitate trece; miliamperul (mA) este o miime de amper: 1 mA = 0.001 A.",
    "Rezistența, notată cu R și măsurată în ohmi (ohm), îngustează drumul curentului ca o strâmtoare dintr-un furtun. Legea lui Ohm este U = R x I. Putem afla curentul împărțind tensiunea la rezistență: 9 V / 450 ohm = 0.02 A, adică 20 mA. Acesta este un curent mic potrivit pentru exemplul nostru de LED, iar rezistența îl protejează. Lucrăm doar cu baterii și joasă tensiune, niciodată cu priza."
  ],
  "7.2": [
    "Un breadboard este o placă de probe fără lipitură. Sub multe găuri sunt benzi metalice: într-un grup obișnuit de cinci găuri, toate sunt conectate între ele. De aceea verificăm mai întâi desenul plăcii și urmărim drumul curentului, de la plus la minus, înainte să alimentăm montajul.",
    "LED-ul este o diodă luminătoare și are polaritate, adică sens corect de conectare. Anodul este piciorul mai lung și merge la plus (+); catodul este piciorul mai scurt și merge la minus (-). Rezistența limitează curentul, condensatorul stochează pentru foarte puțin timp energie, iar butonul este un întrerupător temporar: apăsat închide circuitul, liber îl deschide."
  ],
  "7.3": [
    "Un microcontroler este un calculator mic care citește intrări și comandă obiecte. Arduino IDE este programul în care scriem codul, iar USB-ul duce programul compilat, adică tradus într-o formă înțeleasă de placă, în memoria ei. După încărcare, placa poate rula singură dacă primește alimentare.",
    "În codul Arduino, setup() rulează o singură dată la pornire, iar loop() se repetă la nesfârșit. pinMode(2, OUTPUT) spune că pinul 2 este o ieșire; digitalWrite(2, HIGH) îi dă nivelul pornit, iar LOW îl oprește. delay(500) face o pauză de 500 milisecunde, adică jumătate de secundă. Astfel comanda aprinde, așteaptă, stinge și repetă LED-ul."
  ],
  "7.4": [
    "Un LDR este o rezistență dependentă de lumină: lumina multă îi micșorează rezistența, iar întunericul o mărește. Pinul A0 este o intrare analogică. analogRead(A0) transformă semnalul măsurat într-un număr de la 0 la 1023; în acest montaj, 0 înseamnă foarte puțină lumină, iar 1023 foarte multă lumină.",
    "Serial.println(lumina) trimite numărul la Serial Monitor, fereastra-jurnal de pe calculator. O regulă if compară apoi citirea cu un prag, de exemplu 300: dacă lumina este sub 300, este suficient de întuneric pentru acțiune. Pragul nu se ghicește; măsurăm mai întâi în condiții diferite. digitalWrite(LED, HIGH) aprinde LED-ul ales ca ieșire."
  ],
  "7.5": [
    "Un protocol este un set de reguli prin care dispozitivele își înțeleg mesajele. I2C folosește două fire: SDA pentru date și SCL pentru ceas, adică ritmul schimbului. Fiecare modul are o adresă; 0x76 este o adresă scrisă în hexazecimal, un mod compact de a scrie numere cu cifrele 0-9 și literele A-F. ESP32 întreabă astfel exact senzorul potrivit.",
    "Wi-Fi trimite date prin radio în rețeaua locală, iar routerul le îndreaptă spre dispozitivul corect. HTTP este protocolul folosit de paginile și cererile web: ESP32 poate trimite o cerere, iar serverul Raspberry Pi răspunde. SQLite este o bază de date mică păstrată într-un fișier; serverul poate salva acolo temperatură, iar dashboard-ul, adică pagina cu indicatori și grafice, o citește fără ca datele să iasă din casă."
  ],
  "7.6": [
    "Un motor DC se rotește continuu, un servo se duce la un unghi cerut, iar un stepper se mișcă în pași preciși. De aceea ventilatorul și roata folosesc adesea motor DC, brațul sau bariera folosesc servo, iar imprimanta 3D ori plotterul folosesc stepper. Alegerea depinde de mișcarea necesară, nu de numele motorului.",
    "Servo-ul primește un semnal repetat pe firul de semnal; alimentarea îi dă energie, iar GND este masa, punctul comun de referință. Toate părțile montajului au nevoie de GND comun ca semnalul să poată fi înțeles. PWM înseamnă Pulse Width Modulation: impulsuri pornit-oprit ale căror durate pot controla energia medie sau poziția. Folosim numai motoare mici, de joasă tensiune, și nu forțăm niciodată un mecanism blocat."
  ],
  "7.7": [
    "LDR-ul citește lumină la intervale de 2 secunde, iar ESP32 verifică dacă numărul are sens. Pentru o citire analogică, valorile posibile sunt între 0 și 1023; o valoare sub 0 sau peste 1023 este imposibilă și este respinsă cu o regulă if, nu folosită pentru a comanda lampa.",
    "Histerezisul înseamnă două praguri și o mică memorie. Sub 250 aprindem, peste 350 stingem, iar între ele păstrăm starea anterioară. Această zonă evită comutările repetate la amurg. Starea este valoarea păstrată într-o variabilă, de exemplu lampa aprinsă sau stinsă.",
    "Wi-Fi poate trimite doar evenimentele schimbării de stare către un server local: ora, starea și luminozitatea. SQLite păstrează aceste rânduri într-o bază de date, iar pagina web poate afișa istoricul. Nu trimitem parole, adrese sau programul familiei, iar lumina trebuie să funcționeze local chiar dacă serverul nu răspunde."
  ],
  "8.1": [
    "SENSE, THINK, ACT înseamnă simte, decide, acționează. SENSE citește un senzor, THINK compară numărul cu o regulă, iar ACT trimite comenzi motoarelor. Apoi robotul citește din nou, deoarece acțiunea a schimbat lumea. Această repetare este o buclă de control.",
    "Senzorul ultrasonic trimite un impuls sonor foarte înalt și ascultă ecoul; metoda se numește ecolocație. Un prag este distanța aleasă ca limită: 20 cm < 30 cm înseamnă că obstacolul este prea aproape. Milisecunda este o miime de secundă, iar o buclă care rulează de 10-100 de ori pe secundă poate reacționa repede, dar testul rămâne la viteză mică și în spațiu liber."
  ],
  "8.2": [
    "Un robot cu două roți folosește motoare DC și un driver de motor. Driverul este intermediarul care dă motoarelor curentul de care au nevoie; pinii microcontrolerului trimit numai comenzi, nu alimentează direct motoarele. Bateriile alimentează driverul, driverul alimentează motoarele, iar placa, driverul și bateria au GND comun.",
    "Când ambele motoare merg înainte cu aceeași viteză, robotul merge drept. Dacă stânga merge înainte și dreapta se oprește, robotul virează dreapta; dacă motoarele merg în sensuri opuse la aceeași viteză, robotul se rotește pe loc. PWM poate schimba viteza medie a fiecărui motor pentru calibrare, fiindcă două motoare reale nu se învârt perfect identic."
  ],
  "8.3": [
    "Senzorul ultrasonic trimite un impuls, pornește un cronometru și așteaptă ecoul. Sunetul face drumul dus și întors, așa că distanța este aproximativ viteza sunetului înmulțită cu timp și împărțită la 2. În exemplu, un ecou după 3 milisecunde înseamnă aproximativ 51 cm; aceasta este o estimare, nu o măsurătoare magică.",
    "Pragul de 25 cm este limita aleasă prin test: peste el robotul poate merge, sub el oprește. La 18 cm, STOP vine înaintea manevrei. După o mișcare de 0.5 s înapoi și 0.4 s viraj stânga, robotul măsoară iar; 60 cm liber înseamnă că poate continua. Repetarea de 10 ori pe secundă îl ajută să observe schimbări dese.",
    "Materialele moi pot absorbi sunetul, obiectele subțiri pot fi ratate, iar o oglindă înclinată poate trimite ecoul în altă direcție. De aceea testăm cu obiecte diferite, alegem o viteză mică și privim citirile ca pe dovezi care trebuie verificate."
  ],
  "8.4": [
    "Senzorii IR trimit lumină infraroșie, invizibilă pentru ochi, și observă cât se reflectă. De obicei albul reflectă mai mult și negrul mai puțin, dar podeaua, distanța și lumina din cameră pot schimba rezultatul. Înainte de cursă, calibrăm senzorii pe alb și negru și alegem un prag potrivit.",
    "Cu doi senzori, linia între ei înseamnă că robotul merge drept, deci ambele motoare pot avea aceeași viteză. Dacă senzorul drept vede negru, linia este la dreapta și robotul corectează spre dreapta: încetinește motorul stâng sau accelerează motorul drept.",
    "Senzorii analogici pot arăta cât de mult s-a îndepărtat robotul de linie. Controlul proporțional înseamnă că o eroare mică produce corecție mică, iar o eroare mare produce corecție mai mare. O corecție prea mare provoacă oscilații, adică viraje repetate stânga-dreapta, așa că factorul se testează treptat."
  ],
  "8.5": [
    "O mașină de stări împarte o misiune în situații cu nume. Robotul se află într-o singură stare la un moment dat, iar un eveniment observat de senzori îl mută în alta. Butonul de start, LED-ul roșu și marcajele de pe pistă sunt semnale pe care programul le poate interpreta.",
    "BAZA este așteptarea pornirii; URMARESTE_LINIE folosește senzorii IR; EVITA_OBSTACOL folosește distanța ultrasonică; SE_INTOARCE urmărește traseul înapoi; SARBATOARE semnalizează finalul cu lumini și sunet. Marcajul zonei, precum o linie dublă, este un semn hotărât dinainte ca robotul să ajungă într-un loc special.",
    "O tranziție este schimbarea de la o stare la alta, de exemplu marcaj văzut -> EVITA_OBSTACOL. Stări clare și tranziții scrise înainte de cod împiedică robotul să facă două planuri deodată. În orice eroare sau citire neplauzibilă, proiectul are și o stare de oprire sigură."
  ],
  "9.1": [
    "O parolă-frază este o combinație lungă de cuvinte neobișnuite, de exemplu „tigru-albastru-aleargă-42-zile”. Lungimea o face greu de ghicit chiar dacă este mai ușor de ținut minte decât o parolă scurtă plină de simboluri. O parolă trebuie să fie unică: aceeași parolă nu se refolosește la două conturi.",
    "Dacă o combinație email-parolă ajunge dintr-o breșă, hoții pot încerca automat aceeași combinație pe multe site-uri. Aceasta se numește credential stuffing. Un password manager este un seif criptat care poate genera și păstra parole unice, iar MFA sau autentificarea cu mai mulți factori cere încă o dovadă, cum ar fi un cod din telefon. Nici parola, nici codul MFA nu se spun nimănui."
  ],
  "9.2": [
    "Phishing înseamnă un mesaj-momeală care pretinde că vine de la o persoană sau firmă de încredere și încearcă să obțină date sau bani. URGENT și termenul de 2h sunt presiune de timp, nu dovadă. Un domeniu este numele principal al unui site, iar extensia este finalul precum .com sau .xyz.",
    "Un nume precum arnaz0n-suport.com seamănă intenționat cu un brand, dar are litera zero și nu este domeniul oficial. Într-o adresă lungă ca suport.amazon.com.rău-față.com, domeniul important este rău-față.com: partea de la final, chiar înainte de extensie. Subdomeniile din stânga pot fi alese de proprietarul acelui domeniu.",
    "Un mesaj poate fi probabil legitim, dar nu devine sigur doar pentru că arată bine. Pentru o alertă despre bancă, comandă sau cont, nu apăsăm linkul: deschidem noi aplicația oficială ori tastăm adresa cunoscută. Nu introducem parole, coduri MFA sau date de card după un mesaj surprinzător."
  ],
  "9.3": [
    "Ingineria socială este încercarea de a păcăli o persoană, nu de a sparge direct calculatorul. Pretextul este povestea inventată despre cine este cineva; autoritatea folosește un titlu ca să nu mai pui întrebări; urgența cere acțiune grăbită; simpatia cere o favoare ca între prieteni.",
    "Suportul legitim nu are nevoie de parola ta, iar un cod SMS sau MFA este a doua cheie a contului, destinată numai ție. O identitate online poate fi imitată, chiar dacă mesajul spune că este de la un prieten sau membru al familiei.",
    "Canalul cunoscut este metoda sigură de verificare: închizi mesajul și suni numărul deja salvat, întrebi persoana față în față sau deschizi aplicația oficială. Pentru orice cerere neașteptată de parolă, cod, poză sau adresă, refuzul și discuția cu un adult sunt reacția corectă."
  ],
  "9.4": [
    "Un port este un număr care ajută un calculator să ajungă la programul potrivit. Un pachet este un mic mesaj trimis prin rețea. Portul 3306 este folosit adesea pentru baze de date, iar portul 80 pentru pagini web prin HTTP. nginx este un program-server care poate răspunde la cereri web.",
    "Firewall-ul este un filtru de reguli pentru conexiuni. „Implicit închis” înseamnă că blochează tot ce nu a fost permis clar: o cerere la 3306 poate fi respinsă, iar una la 80 poate fi acceptată dacă regula spune așa. Observăm numai propriul laborator, fără să scanăm alte dispozitive.",
    "O vulnerabilitate este o slăbiciune cunoscută în software, iar un patch sau update este reparația oferită de producător. Opt luni fără actualizare pot lăsa reparații importante neinstalate. Actualizările se planifică, se face backup când e nevoie și se verifică apoi că serviciile proprii merg în continuare."
  ],
  "9.5": [
    "Gazda este calculatorul real pe care lucrezi. VirtualBox poate crea pe el o mașină virtuală (VM), un calculator simulat într-o fereastră, cu disc și memorie virtuale separate. VM-ul este locul unde învățăm, fără date personale și fără a testa sisteme ale altcuiva.",
    "Setarea Host-only permite VM-ului să vorbească doar cu gazda, iar Internal permite vorbirea doar între VM-uri configurate pe aceeași rețea virtuală. Aceste moduri sunt diferite, dar ambele pot evita drumul spre rețeaua casei și internet; nu alegem NAT sau Bridged pentru demonstrația izolată, deoarece ele pot oferi acces mai larg.",
    "Un snapshot este o fotografie a stării VM-ului la un moment dat. După o setare greșită, revenim la snapshot, dar aceasta nu este permisiune pentru acțiuni riscante. Regula rămâne simplă: testăm doar ce deținem sau pentru care avem acord explicit, scris, cu limite clare."
  ],
  "9.6": [
    "Un audit de securitate este o verificare defensivă a propriei familii: observăm ce avem și alegem îmbunătățiri, fără scanări, încercări de parole sau teste asupra altor oameni. Dispozitiv înseamnă orice aparat conectat, iar un dispozitiv necunoscut este o întrebare pentru adult, nu o țintă de investigat.",
    "Parolele unice se păstrează într-un password manager. Parola Wi-Fi și parola de administrare a routerului nu sunt același lucru: prima leagă dispozitivele la rețeaua fără fir, iar a doua permite schimbarea setărilor routerului. Niciuna nu se notează în raport sau demo; adultul verifică și modifică setările.",
    "Backup înseamnă o copie a datelor, păstrată astfel încât să poată fi restaurată după o problemă. O constatare bună spune ce am observat, ce risc poate exista și ce acțiune sigură recomandăm. Fiecare schimbare se face pe rând, cu o cale de revenire, apoi verificăm că rețeaua familiei funcționează normal."
  ]
};
