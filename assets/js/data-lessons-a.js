/* Atelierul Tehnologiei - Lecții Nivelurile 1-4 */
const LESSONS_A = [
/* ==================== NIVELUL 1 ==================== */
{
  id: "1.1", level: 1, num: 1, title: "Tehnologia în jurul nostru", icon: "🔍", duration: "45 min",
  objectives: [
    "Să definească tehnologia ca „ceva construit de oameni pentru a rezolva o problemă”",
    "Să identifice cel puțin 10 tehnologii din casă, dintre care minimum 3 fără electricitate",
    "Să explice de ce o roată sau un creion sunt tehnologii"
  ],
  explanation: [
    "Ce este: tehnologia este un obiect, o unealtă, o metodă sau un sistem construit de oameni pentru a rezolva o problemă ori pentru a face o activitate mai ușoară. O roată ajută la mutarea unei greutăți, un creion păstrează o idee pe hârtie, iar o lingură mută mâncarea până la gură. Un copac și un fulger pot fi utile, dar nu sunt tehnologii, fiindcă nu au fost proiectate și construite de oameni.",
    "De ce contează: dacă recunoști tehnologia doar după ecran sau baterie, ratezi cea mai mare parte a invențiilor. O ușă, un scaun, o frânghie, ochelarii și o bicicletă sunt tehnologii fără cipuri. Întrebarea bună este „ce nevoie rezolvă?” și nu „arată modern?”. Două obiecte pot rezolva aceeași nevoie în moduri diferite, iar oamenii le aleg după cost, siguranță și ușurință.",
    "Cum funcționează pas cu pas: întâi apare o nevoie, apoi cineva observă problema, imaginează o soluție, alege materiale, construiește un obiect și îl testează. Dacă nu merge, îl repară și încearcă din nou. Electricitatea este doar o resursă folosită de unele tehnologii; o tehnologie poate folosi mușchi, vânt, apă sau gravitație. O unealtă simplă poate fi foarte ingenioasă chiar dacă nu are motor.",
    "Exemplu concret: pentru a duce apă de la fântână la casă, un copil poate folosi o găleată, un mâner și o căruță. Găleata ține apa, mânerul ajută la ridicare, iar roțile micșorează efortul de transport. Fiecare piesă are un rol, iar ansamblul este o tehnologie. Dacă schimbi roata cu o sanie, soluția poate funcționa pe zăpadă, dar nu la fel de bine pe asfalt.",
    "Legătura cu demo și limita: în demonstrație vei clasifica obiecte după originea și scopul lor. Un obiect natural folosit de oameni nu devine automat tehnologie; o piatră aleasă și cioplită ca unealtă intră însă într-o soluție tehnologică. După joc, privește camera și explică pentru fiecare obiect problema rezolvată, utilizatorul și limita lui."
  ],
  demo: {
    type: "classify",
    title: "Tehnologie sau nu?",
    intro: "Apasă pe fiecare obiect și pune-l în cutia potrivită!",
    zones: ["Tehnologie", "Nu e tehnologie"],
    items: [
      { label: "🪨 Piatră din râu", zone: 1 },
      { label: "🚲 Bicicletă", zone: 0 },
      { label: "🌳 Copac", zone: 1 },
      { label: "✏️ Creion", zone: 0 },
      { label: "⚡ Fulger", zone: 1 },
      { label: "💡 Bec", zone: 0 },
      { label: "🧊 Gheață", zone: 1 },
      { label: "🥄 Lingură", zone: 0 }
    ]
  },
  experiment: {
    title: "Vânătoarea de tehnologii",
    materials: ["Hârtie și creion", "Un cronometru (opțional)"],
    steps: [
      "Alege o cameră din casă.",
      "Ai 5 minute să notezi TOATE tehnologiile din cameră. Ține minte: nu doar cele cu prize!",
      "Împarte lista în două coloane: „cu electricitate” și „fără electricitate”.",
      "Alege obiectul cel mai vechi de pe listă. Cine crezi că l-a inventat și de ce?"
    ],
    expected: "O listă de 15-30 de obiecte. Dacă lista are sub 10, uită-te din nou: pixul, ușa, scaunul și paharul sunt toate tehnologii!"
  },
  project: {
    title: "Marea Listă a Tehnologiilor",
    goal: "Creează un afiș cu cele mai importante 20 de tehnologii din casa ta.",
    steps: [
      "Adună lista din experimentul de mai sus pentru 2-3 camere.",
      "Desenează sau lipește imagini cu cele mai interesante 20.",
      "Scrie lângă fiecare problema pe care o rezolvă.",
      "Prezintă afișul cuiva din familie și explică-i de ce un cuier este tehnologie."
    ],
    success: ["Afișul are minim 20 de tehnologii", "Fiecare are scrisă problema rezolvată", "Cel puțin 5 sunt fără electricitate"]
  },
  questions: [
    "Care este cea mai veche tehnologie din casa ta?",
    "Ce tehnologie ai folosit azi fără să-ți dai seama?",
    "Dacă ai putea șterge o tehnologie din lume, care ar fi și ce s-ar întâmpla?",
    "Este un cuvânt scris pe hârtie o tehnologie? De ce da sau de ce nu?"
  ],
  exercises: [
    "Găsește 3 tehnologii mai vechi de 100 de ani în casa ta.",
    "Scrie cu stângul/dreptul o propoziție fără creion sau tastatură. Ce tehnologie îți lipsește?",
    "Întreabă un bunic care este cea mai importantă tehnologie din copilăria lui. Compară cu răspunsul tău."
  ],
  parent: {
    watch: ["Copilul surprinde ideea că tehnologia = soluție la o problemă, nu doar electronice", "Entuziasmul la vânătoarea de obiecte"],
    help: ["Jucați împreună „ghicește problema”: arătați un obiect și copilul ghicește ce problemă rezolvă", "Nu corectați prea repede — dezbaterea „e o piatră tehnologie dacă o folosesc ca ciocan?” e mai valoroasă decât răspunsul corect"],
    redflags: ["Copilul nu dă exemple decât de ecrane (telefon, TV) — repetați jocul cu obiecte din bucătărie"]
  },
  pass: [
    "Poate defini tehnologia cu cuvintele lui",
    "Dă 5 exemple de tehnologii fără electricitate",
    "Explică problema rezolvată de 3 tehnologii diferite"
  ]
},
{
  id: "1.2", level: 1, num: 2, title: "Problema și Soluția", icon: "🧩", duration: "45 min",
  objectives: [
    "Să identifice problema din spatele unei tehnologii date",
    "Să compare două tehnologii care rezolvă aceeași problemă",
    "Să descopere că o soluție nouă creează uneori probleme noi"
  ],
  explanation: [
    "Ce este: o problemă este o situație dificilă, lentă, costisitoare, nesigură sau incomodă pe care vrem să o îmbunătățim. O soluție este o idee sau o acțiune care reduce acea dificultate. Tehnologia poate fi soluția construită, dar nu orice soluție este un obiect: o regulă de organizare poate rezolva o problemă fără să aibă roți sau fire.",
    "Cum găsești problema: observă ce se întâmplă, descrie cine are nevoie de ajutor și spune cum măsori îmbunătățirea. „Vreau ceva cool” nu este o problemă clară; „ghiozdanul este prea greu pentru drumul până la școală” este mai precis. Apoi cauți mai multe idei și le compari după eficiență, preț, siguranță, materiale și efectul asupra mediului.",
    "Exemplu concret: roata rezolvă transportul unei greutăți prin rostogolire, cu mai puțină frecare decât târârea. Un cărucior rezolvă problema mai bine decât o cutie purtată în brațe, dar are nevoie de o suprafață pe care să se miște și de o persoană care să-l împingă. O soluție poate reduce un efort și poate adăuga altul.",
    "Ce nu este și ce limită are: o soluție nu înseamnă că problema dispare pentru toată lumea. Mașina scurtează călătoria, dar poate produce trafic, accidente și poluare; internetul găsește informații repede, dar poate transmite și greșeli. Aceste efecte secundare sunt consecințe, adică rezultate care apar după folosire. Un proiect bun le caută dinainte.",
    "Legătura cu demo: vei urmări lanțul problemă → idee → tehnologie → efecte noi → îmbunătățire. Pentru orice obiect din casă, spune cine are problema, ce face soluția, ce resurse consumă și ce limită rămâne. Așa gândește un inginer: nu se îndrăgostește de obiect, ci verifică dacă el ajută cu adevărat."
  ],
  demo: {
    type: "flow",
    title: "De la problemă la tehnologie",
    steps: [
      { label: "😟 Problema", info: "Oamenii trebuiau să care greutăți mari pe distanțe lungi. Spatele doare, drumul e lung, sarcina e grea." },
      { label: "💡 Ideea", info: "Ce s-ar întâmpla dacă greutatea s-ar rostogoli în loc să fie cărată? Busteni rotunji sub platformă..." },
      { label: "⚙️ Tehnologia", info: "Roata! Apoi carul, apoi bicicleta, apoi mașina, apoi trenul — toate sunt copiii aceleiași idei." },
      { label: "⚠️ Probleme noi", info: "Drumuri, accidente, poluare. Fiecare soluție deschide noi întrebări pentru ingineri." },
      { label: "🔄 Versiunea următoare", info: "Mașini electrice, mașini autonome... tehnologia nu se termină niciodată, se îmbunătățește." }
    ]
  },
  experiment: {
    title: "Lanțul problemelor",
    materials: ["Hârtie A4", "Creioane colorate"],
    steps: [
      "Alege o tehnologie (ex: frigiderul).",
      "Desenează o săgeată: PROBLEMA → TEHNOLOGIA → PROBLEMA NOUĂ pe care a creat-o.",
      "Continuă lanțul: ce tehnologie a rezolvat problema nouă?",
      "Cât de departe poți merge? (Frigider → freon → gaura în ozon → noi refrigerenți → ...)"
    ],
    expected: "Un lanț de cel puțin 4 verigi. Surpriza finală: lanțul nu se termină aproape niciodată!"
  },
  project: {
    title: "Detectivul Problemelor",
    goal: "Intervievează 3 oameni și descoperă ce problemă ar vrea să rezolve o tehnologie nouă.",
    steps: [
      "Întreabă 3 persoane: „Ce te enervează zilnic și ți-ai dori să dispară?”",
      "Notează răspunsurile și alege cea mai interesantă problemă.",
      "Imaginativ: desenează o tehnologie care ar rezolva-o.",
      "Bonus: scrie o problemă nouă pe care invenția ta ar putea-o crea."
    ],
    success: ["3 interviuri realizate", "O invenție desenată cu explicație", "Cel puțin un efect secundar identificat"]
  },
  questions: [
    "Ce problemă rezolvă școala? Ce probleme noi creează?",
    "Toate problemele pot fi rezolvate de tehnologie? Dă un contraexemplu.",
    "De ce crezi că inventatorul dinamitei a fondat premiul Nobel pentru pace?",
    "Dacă o tehnologie rezolvă o problemă dar creează alta mai mare, ar trebui folosită?"
  ],
  exercises: [
    "Completează tabelul: 5 tehnologii → problema → problema nouă.",
    "Găsește o tehnologie care a dispărut pentru că problema ei a dispărut (ex: ceasul de nisip).",
    "Inventează o problemă absurdă și o tehnologie absurdă care o rezolvă. Deseneaz-o!"
  ],
  parent: {
    watch: ["Copilul începe să întrebe spontan „ce problemă rezolvă asta?”", "Capacitatea de a vedea și efectele negative"],
    help: ["La masă, jucați „lanțul problemelor” cu tehnologii din casă", "Discutați știri despre tehnologie și întrebați „ce problemă rezolvă și ce problemă creează?”"],
    redflags: ["Copilul crede că tehnologia rezolvă totul — discutați despre singurătate sau certuri: tehnologia poate ajuta, dar nu rezolvă singură"]
  },
  pass: [
    "Construiește singur un lanț problemă→soluție→problemă nouă",
    "Identifică problema reală din spatele a 3 tehnologii noi",
    "Explică de ce o soluție poate crea probleme noi"
  ]
},
{
  id: "1.3", level: 1, num: 3, title: "Istoria tehnologiei - linia timpului", icon: "⏳", duration: "50 min",
  objectives: [
    "Să plaseze pe o linie a timpului cel puțin 8 invenții majore",
    "Să observe că invențiile recente apar din ce în ce mai repede",
    "Să explice cum o invenție face posibilă următoarea"
  ],
  explanation: [
    "Ce este: o linie a timpului este o reprezentare în care evenimentele sunt așezate de la trecut spre prezent și viitor. Un reper este un moment important pe această linie. Uneltele de piatră apar cu peste două milioane de ani în urmă, roata este atestată acum aproximativ 5.500 de ani, iar tiparul european este asociat cu secolul al XV-lea. Datele sunt aproximări, deoarece descoperirile nu spun întotdeauna ziua exactă.",
    "Cum se citește pas cu pas: alegi începutul și sfârșitul, marchezi intervale egale, apoi pui invențiile în ordine. După aceea întrebi ce problemă rezolva fiecare și ce resursă a făcut posibilă următoarea. O invenție nu apare din nimic: folosește cunoștințe, materiale și idei mai vechi. În plus, mai mulți oameni din locuri diferite pot contribui la aceeași tehnologie.",
    "Exemplu concret: tiparul a făcut cărțile mai ușor de copiat, iar cărțile au ajutat ideile să circule. Studiul electricității a sprijinit apariția becurilor și a aparatelor, iar componentele electronice au făcut calculatoarele practice. Rețelele de calculatoare au permis internetul, iar internetul a oferit infrastructură pentru servicii moderne și sisteme de inteligență artificială.",
    "Ce nu este și ce limită are: istoria nu este o scară în care fiecare invenție este „mai bună” decât cea veche. O tehnologie poate fi potrivită într-un loc și nepotrivită în altul. Nici invențiile nu au mereu un singur erou; cercetători, meșteșugari, utilizatori și echipe le testează și le îmbunătățesc. Nu memora ani fără să înțelegi povestea și consecințele.",
    "Legătura cu demo: vei vedea câteva repere ca pe niște cărămizi care se sprijină unele pe altele. După fiecare pas, explică problema rezolvată și ideea transmisă mai departe. Linia ta de timp devine mai interesantă când adaugi și o săgeată de dependență, de tipul „această invenție a făcut posibilă următoarea”."
  ],
  demo: {
    type: "flow",
    title: "Cărămizile tehnologiei",
    steps: [
      { label: "🔥 Focul", info: "~1 milion de ani în urmă. Gătit, căldură, protecție. Prima tehnologie a omenirii." },
      { label: "🛞 Roata", info: "~3500 î.Hr. Transport, apoi mori de vânt, apoi ceasuri, apoi mașini." },
      { label: "📜 Tiparul", info: "1440. Cărțile devin ieftine. Cunoașterea se răspândește ca un foc." },
      { label: "⚡ Electricitatea", info: "1879 - becul. Energia ajunge în fiecare casă printr-un fir." },
      { label: "💻 Calculatorul", info: "1946. ENIAC cântărea 27 de tone. Azi ai ceva mai puternic în buzunar." },
      { label: "🌐 Internetul", info: "1983. Calculatoarele încep să vorbească între ele." },
      { label: "🤖 AI", info: "Azi. Mașinile învață din date. Povestea continuă... cu tine!" }
    ]
  },
  experiment: {
    title: "Linia timpului din frânghie",
    materials: ["O sfoară de 3-5 metri", "Etichete sau cartonașe", "Bandă adezivă"],
    steps: [
      "Întinde sfoara pe podea. Capătul stâng = acum 2 milioane de ani. Capătul drept = AZI.",
      "Scrie pe cartonașe: unelte de piatră, foc, roată, tipar, bec, calculator, internet, smartphone, AI.",
      "Pune fiecare cartonaș unde crezi că se potrivește pe sfoară.",
      "Verifică răspunsurile corecte. Surpriza: aproape TOTUL e înghesuit în ultimii 2 centimetri de sfoară!"
    ],
    expected: "Un „WOW” vizual: istoria tehnologiei e aproape toată în ultima fărâmă de timp."
  },
  project: {
    title: "Peretele Inventatorilor",
    goal: "Construiește o linie a timpului de perete, cu 10 invenții la alegere, fiecare cu inventator și poveste.",
    steps: [
      "Alege 10 invenții care ți se par cele mai tari.",
      "Pentru fiecare: anul, inventatorul, problema rezolvată.",
      "Adaugă o invenție imaginară din viitor, la finalul liniei: ce crezi TU că vine după AI?",
      "Prezintă linia familiei ca un ghid de muzeu."
    ],
    success: ["10 invenții reale cu an și inventator", "Ordine cronologică corectă", "O invenție din viitor imaginată și argumentată"]
  },
  questions: [
    "De ce au durat milioane de ani între unealta de piatră și roată, dar doar 24 de ani între internet și smartphone?",
    "Ce invenție crezi că a schimbat cel mai mult viața oamenilor? Argumentează.",
    "Dacă ai călători în anul 1900, ce tehnologie de azi ți-ar fi cel mai greu să explici?",
    "Ce cărămidă de azi va sta la baza invențiilor din anul 2100?"
  ],
  exercises: [
    "Ordonează cronologic: telefonul, roata, tiparul, radio, calculatorul, focul.",
    "Află ce s-a inventat în anul în care s-a născut un bunic de-al tău.",
    "Desenează „cărămizile”: arată cu săgeți cum becul a dus la calculator, iar calculatorul la AI."
  ],
  parent: {
    watch: ["Copilul observă accelerația invențiilor fără să i se spună", "Curiozitate despre poveștile inventatorilor, nu doar date"],
    help: ["Urmăriți împreună un documentar scurt despre o invenție", "Jucați „în ce an a apărut X?” la drum"],
    redflags: ["Memorarea datelor fără poveste — cereți mereu „ce problemă rezolva?”"]
  },
  pass: [
    "Plasează corect 8 invenții pe linia timpului",
    "Explică legătura dintre 3 invenții consecutive (X a făcut posibil Y)",
    "Descrie tiparul accelerării cu un exemplu"
  ]
},
{
  id: "1.4", level: 1, num: 4, title: "Proiect: Inventez o tehnologie nouă", icon: "💡", duration: "60-90 min", isProject: true,
  objectives: [
    "Să parcurgă singur ciclul complet: problemă → idee → design → prototip → prezentare",
    "Să construiască un prototip din materiale simple (hârtie, carton, lego)",
    "Să prezinte invenția în 2 minute, explicând problema și soluția"
  ],
  explanation: [
    "Ce este: o invenție este o soluție nouă sau o combinație nouă de idei pentru o nevoie. Un proiect de inginerie începe cu observarea unei probleme, nu cu alegerea unui gadget. Scrie cine întâmpină problema, când apare și de ce soluțiile existente nu sunt suficiente. O problemă bine descrisă te ajută să nu construiești ceva inutil.",
    "Cum funcționează pas cu pas: observi, formulezi problema, propui mai multe idei, alegi una, faci un design, construiești un prototip, îl testezi și îl îmbunătățești. Design înseamnă planul vizual și funcțional al soluției. La fiecare încercare notează ce a mers, ce nu a mers și ce ai schimba. Greșeala observată este informație, nu verdict despre tine.",
    "Un prototip este o versiune de probă a unei idei. Poate fi un desen, o machetă din carton, plastilină sau piese de construcție și nu trebuie să arate ca produsul final. El arată dimensiunea, ordinea pieselor și felul în care un utilizator ar interacționa cu soluția. Dacă altcineva nu înțelege scopul, ai primit o informație utilă pentru următoarea versiune.",
    "Exemplu concret: dacă problema este că pixurile se pierd pe birou, poți desena trei suporturi: unul din carton, unul magnetic și unul prins de caiet. Compari stabilitatea, costul, materialele și ușurința de folosire. Poate că suportul magnetic este interesant, dar nu funcționează pe orice suprafață și poate fi mai scump. O invenție bună are și limite declarate.",
    "Legătura cu demo și criteriul de reușită: demonstrația urmează drumul observă → alege → imaginează → construiește → prezintă. La prezentare spune clar problema, utilizatorul, modul de funcționare, testul și limita cunoscută. Scopul nu este să pari că ai construit produsul perfect, ci să arăți că poți învăța dintr-un prototip și argumenta următorul pas."
  ],
  demo: {
    type: "flow",
    title: "Drumul inventatorului",
    steps: [
      { label: "1️⃣ Observă", info: "Ce te enervează? Ce e greu, lent, plictisitor sau periculos? Notează 3 probleme reale din viața ta." },
      { label: "2️⃣ Alege", info: "Alege UNA dintre probleme. Cea care te deranjează cel mai tare e de obicei cea mai bună." },
      { label: "3️⃣ Imaginează", info: "Schitează 3 soluții diferite. Prima idee rar e cea mai bună — forțează-te să găsești încă două!" },
      { label: "4️⃣ Construiește", info: "Alege cea mai bună schiță și fă un prototip din carton/hârtie/plastilină. Urât e perfect OK." },
      { label: "5️⃣ Prezintă", info: "2 minute: care e problema, cum funcționează soluția, ce ai îmbunătăți. Gata — ești inventator!" }
    ]
  },
  experiment: {
    title: "Brainstorming cu cronometru",
    materials: ["Hârtie", "Pix", "Cronometru"],
    steps: [
      "Setează 5 minute. Scrie cât mai multe probleme din viața ta de zi cu zi. Nu cenzura nimic!",
      "Setează 3 minute. Încercuiește problema pe care ai vrea cel mai mult s-o rezolvi.",
      "Setează 5 minute. Desenează 3 soluții diferite pentru ea. Cu cât mai diferite, cu atât mai bine.",
      "Arată-le cuiva și întreabă care i se pare cea mai tare. Ai voie să fii de altă părere."
    ],
    expected: "Minimum 10 probleme, una aleasă, 3 schițe de soluții."
  },
  project: {
    title: "Invenția mea",
    goal: "De la problemă reală la prototip funcțional prezentat în 2 minute.",
    steps: [
      "Completează fișa: Problema mea este ___ / Cine o are ___ / Soluția mea este ___ / De ce e mai bună ___",
      "Construiește prototipul din materiale din casă.",
      "Testează-l: arată-l cuiva fără să explici. Înțelege singur la ce folosește?",
      "Pregătește prezentarea de 2 minute: problemă → soluție → demonstrație → ce-aș îmbunătăți.",
      "Prezintă familiei. Acceptă 2 întrebări și răspunde ca un inginer."
    ],
    success: ["Fișa completată integral", "Prototip construit fizic", "Prezentare de 2 minute susținută", "Răspuns la cel puțin o întrebare"]
  },
  questions: [
    "Ce te-a surprins la reacția oamenilor la prototipul tău?",
    "Ce ai schimba dacă ai avea buget nelimitat?",
    "Ce problemă nouă ar putea crea invenția ta?",
    "Cine crezi că ar plăti bani pentru invenția ta? De ce?"
  ],
  exercises: [
    "Scrie în jurnal: ce am învățat, ce a fost greu, ce-aș face altfel.",
    "Caută online: există deja invenția ta? Dacă da, cum e a ta diferită?",
    "Desenează versiunea 2.0 a invenției tale."
  ],
  parent: {
    watch: ["Copilul începe cu problema, nu cu jucăria", "Acceptarea criticilor fără supărare"],
    help: ["Fiți public curios, nu juriu: întrebați „cum ai ajuns la ideea asta?”", "Nu rezolvați voi problema — puneți întrebări care îl ajută să vadă singur"],
    redflags: ["Copilul copiază o invenție existentă fără s-o schimbe deloc", "Refuză să prezinte — scurtați prezentarea la 30 de secunde, doar pentru un părinte"]
  },
  pass: [
    "A parcurs toți cei 5 pași ai drumului inventatorului",
    "Prototipul răspunde unei probleme reale, explicate clar",
    "Prezentarea menționează cel puțin o limitare a invenției"
  ]
},
/* ==================== NIVELUL 2 ==================== */
{
  id: "2.1", level: 2, num: 1, title: "Componentele fizice ale calculatorului", icon: "🖥️", duration: "50 min",
  objectives: [
    "Să numească și să recunoască: CPU, RAM, SSD/HDD, GPU, placa de bază, sursa",
    "Să explice rolul fiecărei componente cu o analogie",
    "Să identifice aceleași roluri într-un telefon sau tabletă"
  ],
  explanation: [
    "Ce este: hardware înseamnă piesele fizice ale unui calculator, adică lucrurile pe care le poți atinge. Placa de bază este placa pe care se conectează multe componente. CPU sau procesorul execută instrucțiuni, RAM este memoria de lucru temporară, SSD-ul ori HDD-ul este stocarea persistentă, GPU-ul calculează multe imagini, iar sursa furnizează electricitate potrivită. Fiecare are o sarcină, dar rezultatul apare împreună.",
    "Cum funcționează pas cu pas: când apeși o tastă, dispozitivul de intrare trimite un semnal către calculator. Procesorul interpretează instrucțiunea, caută datele necesare în stocare și le aduce în RAM, unde sunt accesate rapid. Dacă trebuie desenată o imagine, GPU-ul pregătește pixeli, adică puncte colorate, iar ecranul îi afișează. Placa de bază oferă drumuri electrice între aceste piese.",
    "Exemplu concret: imaginează-ți RAM-ul ca pe un birou și SSD-ul ca pe un dulap. Pe birou ții lucrurile folosite acum, iar în dulap păstrezi caietele și după ce pleci. Dacă biroul este mic, unele lucruri sunt mutate mai des între birou și dulap, ceea ce poate încetini activitatea. Analogia explică memoria temporară, dar RAM-ul nu este literalmente un birou și SSD-ul nu este un dulap mecanic.",
    "Ce nu este și limită: mai mult RAM nu repară automat un procesor lent, iar un GPU puternic nu face internetul mai rapid. Sursa nu „gândește”, ci transformă și distribuie energia; placa de bază nu este un creier, ci o infrastructură de conectare. În telefoane, aceleași roluri sunt de obicei înghesuite într-un sistem pe cip și alimentate de baterie, nu dispar.",
    "Legătura cu demo: vei urmări un click de la mouse la placă de bază, CPU, SSD, RAM, GPU și ecran. La fiecare etapă întreabă ce intră, ce se transformă și ce iese. Dacă poți explica traseul unui click și diferența dintre RAM și stocare fără analogie, ai început să vezi calculatorul ca pe un sistem, nu ca pe o cutie magică."
  ],
  demo: {
    type: "flow",
    title: "Călătoria unui click",
    steps: [
      { label: "🖱️ Mouse", info: "Faci click pe o pictogramă. Mouse-ul trimite un semnal electric: „s-a apăsat la coordonatele X, Y!”" },
      { label: "🔌 Placa de bază", info: "Semnalul călătorește pe circuitele plăcii de bază, ca o mașină pe străzile orașului." },
      { label: "🧠 CPU", info: "Procesorul primește semnalul și decide: „Vrea să deschidă jocul! Unde e jocul?”" },
      { label: "💾 SSD", info: "Fișierele jocului sunt citite din dulapul de arhivă (SSD)." },
      { label: "📋 RAM", info: "Jocul e pus pe biroul de lucru (RAM) ca să fie accesat rapid cât timp joci." },
      { label: "🎨 GPU", info: "Placa video calculează fiecare cadru și îl trimite spre monitor. 60+ de desene pe secundă!" },
      { label: "🖥️ Ecran", info: "Jocul apare pe ecran. Totul s-a întâmplat în mai puțin de o secundă!" }
    ]
  },
  experiment: {
    title: "Autopsia unui calculator (sigură!)",
    materials: ["Un calculator vechi/dezafectat SAU imagini cu componente", "Surubelniță (cu un adult)", "Etichete autoadezive"],
    steps: [
      "Cu un adult, deschideți carcasa unui calculator vechi. Nu atinge nimic cât e conectat la priză!",
      "Găsește și etichetează: sursa (cutia cu multe fire), placa de bază (placa mare), RAM (plăcuțele lungi), CPU (sub radiatorul cu ventilator), SSD/HDD.",
      "Trage o poză și notează în jurnal ce rol are fiecare.",
      "Fără calculator vechi? Fă o vânătoare de imagini online și recunoaște componentele în 5 poze diferite."
    ],
    expected: "Cel puțin 4 componente identificate corect, cu rolul explicat cu cuvintele copilului."
  },
  project: {
    title: "Calculatorul din carton",
    goal: "Construiește o mașetă a interiorului unui calculator, cu componente mobile și etichete.",
    steps: [
      "Decupează din carton: placă de bază (un dreptunghi mare), CPU, 2 plăcuțe RAM, SSD, sursă, GPU.",
      "Lipește-le pe o coală A3 ca într-un calculator real (caută o poză cu o placă de bază).",
      "Scrie pe fiecare rolul ei, cu analogia ta (ex: „RAM = biroul”).",
      "Bonus: desenează cu markerul „circuitele” dintre ele și arată cum curge informația."
    ],
    success: ["Toate cele 6 componente prezente", "Fiecare cu rol explicat", "Copilul prezintă mașeta fără să citească"]
  },
  questions: [
    "De ce jocurile au nevoie de mult RAM, dar calculatorul de birou al bunicii nu?",
    "Ce componentă ai upgrada prima la un calculator lent? De ce?",
    "Unde sunt componentele astea într-un smartphone? Unde e „sursa”?",
    "Ce se pierde când se ia curentul: ce e pe birou (RAM) sau ce e în dulap (SSD)?"
  ],
  exercises: [
    "Asociază: componentă ↔ analogie (CPU/primar, RAM/birou, SSD/dulap, GPU/artist, sursă/inimă).",
    "Află cât RAM are calculatorul de acasă și cât are telefonul. Care are mai mult?",
    "Desenează un calculator și etichetează componentele fără să te uiți la mașetă."
  ],
  parent: {
    watch: ["Folosirea analogiilor proprii, nu memorarea definițiilor", "Precauția la deschiderea carcasei"],
    help: ["Un calculator vechi de la second-hand (20-50 lei) e cea mai bună investiție didactică", "Urmăriți împreună un video „what's inside a computer” și puneți pauză la fiecare componentă"],
    redflags: ["Copilul confundă persistent RAM cu stocarea — refaceți analogia birou/dulap cu un birou real", "Dorește să deschidă dispozitive funcționale — delimitați clar: doar dispozitivele sacrificate"]
  },
  pass: [
    "Numește 6 componente și rolul lor fără ajutor",
    "Explică diferența RAM vs stocare cu un exemplu",
    "Găsește aceleași roluri într-un telefon"
  ]
},
{
  id: "2.2", level: 2, num: 2, title: "Input → Procesare → Output", icon: "🔄", duration: "45 min",
  objectives: [
    "Să descompună orice dispozitiv în input, procesare și output",
    "Să recunoască modelul într-un caz real: mașină, termostat, dronă",
    "Să deseneze singur diagrama IPO pentru un dispozitiv la alegere"
  ],
  explanation: [
    "Ce este: modelul IPO descrie trei roluri într-un sistem. Input este informația sau energia care intră, procesarea este regula, transformarea ori calculul aplicat, iar output este rezultatul care iese. Modelul nu spune că orice aparat are o singură piesă pentru fiecare rol; un dispozitiv poate avea multe bucle IPO legate între ele.",
    "Cum funcționează pas cu pas: întâi un senzor, buton sau utilizator furnizează un input. Apoi un circuit, program sau om interpretează inputul și aplică o regulă. La final apare un output, cum ar fi lumină, sunet, mișcare sau text. Outputul unuia poate deveni input pentru alt sistem, așa cum sunetul unei boxe poate fi auzit de un microfon.",
    "Exemplu concret: când apeși tasta A, tastatura este sursa inputului, calculatorul identifică semnalul în procesare, iar litera de pe ecran este outputul. La un termostat, senzorul măsoară temperatura, programul o compară cu valoarea aleasă, iar încălzirea pornește sau se oprește. Comparația este o regulă, nu o „gândire” omenească.",
    "Ce nu este și limită: IPO nu este o rețetă care arată toate detaliile interne. La o lampă simplă, apăsarea întrerupătorului poate duce aproape direct la aprinderea becului, cu puțină procesare. La un robot, procesarea include filtrarea măsurătorilor și alegerea unei acțiuni. Uneori este greu de stabilit unde se termină inputul și începe procesarea, dar întrebarea despre roluri rămâne utilă.",
    "Legătura cu demo: vei clasifica acțiuni și componente, apoi vei verifica motivul fiecărei alegeri. Pentru orice dispozitiv nou, completează propoziția „primește..., transformă..., produce...”. Dacă poți desena săgeți între aceste trei părți pentru o lampă, un telefon și un termostat, modelul IPO a devenit o unealtă reală de analiză."
  ],
  demo: {
    type: "classify",
    title: "Input, Procesare sau Output?",
    intro: "Sortează fiecare element în căsuța potrivită!",
    zones: ["📥 Input", "🧠 Procesare", "📤 Output"],
    items: [
      { label: "Apăs pe tastă", zone: 0 },
      { label: "CPU calculează", zone: 1 },
      { label: "Sunet la boxe", zone: 2 },
      { label: "Microfonul aude", zone: 0 },
      { label: "Jocul ia decizie", zone: 1 },
      { label: "Imaginea pe ecran", zone: 2 },
      { label: "Senzorul măsoară", zone: 0 },
      { label: "LED-ul se aprinde", zone: 2 }
    ]
  },
  experiment: {
    title: "Detectivul IPO",
    materials: ["Caietul de jurnal", "3 dispozitive din casă"],
    steps: [
      "Alege 3 dispozitive: unul simplu (lampă), unul mediu (ceas cu alarma), unul complex (consolă/telefon).",
      "Pentru fiecare, desenează diagrama: INPUT → PROCESARE → OUTPUT.",
      "Pentru dispozitivul complex, găsește cel puțin 3 bucle IPO diferite.",
      "Verifică cu un părinte: ai ratat vreun input? (Butoanele și senzorii se ascund bine!)"
    ],
    expected: "3 diagrame complete. La lampă: întrerupător → curent → lumină. Procesarea poate fi „trecere directă” — și asta e corect!"
  },
  project: {
    title: "Afișul IPO al casei mele",
    goal: "Mapează 5 dispozitive din casă ca sisteme IPO, desenate frumos pe un afiș.",
    steps: [
      "Alege 5 dispozitive de complexitate diferită.",
      "Desenează fiecare ca o mini-diagramă cu săgeți colorate: verde=input, galben=procesare, roșu=output.",
      "La fiecare, marchează CU STEA locul unde „se gândește” dispozitivul.",
      "Bonus: adaugă un dispozitiv care are output ce devine input pentru altul (ex: telecomanda → televizor)."
    ],
    success: ["5 diagrame corecte", "Codul de culori respectat", "Cel puțin o legătură între două dispozitive"]
  },
  questions: [
    "Un creion are input-procesare-output? Cine face procesarea?",
    "Ce se întâmplă când lipsește procesarea? Dă exemplu de dispozitiv input→output direct.",
    "Tu ești un sistem IPO când rezolvi o problemă la matematică? Care e fiecare parte?",
    "De ce are o mașină nevoie de zeci de sisteme IPO, nu doar unul?"
  ],
  exercises: [
    "Descompune în IPO: jocul tău preferat, rețeta de clătite, deschiderea ușii automate de la supermarket.",
    "Găsește în casă un dispozitiv cu 3+ inputuri diferite.",
    "Inventează un dispozitiv cu input ciudat (ex: „strigătul copilului”) și desenează-i diagrama IPO."
  ],
  parent: {
    watch: ["Copilul aplică modelul spontan la obiecte noi", "Înțelege că procesarea poate fi simplă sau complexă"],
    help: ["Jocul „ghicește procesarea”: descrieți inputul și outputul, copilul ghicește ce se întâmplă între ele", "La semafor: „care e inputul? și procesarea?”"],
    redflags: ["Copilul crede că procesarea înseamnă doar „calculator” — arătați-i că și el procesează când rezolvă 2+3"]
  },
  pass: [
    "Descompune corect în IPO 3 dispozitive necunoscute",
    "Explică modelul cu un exemplu inventat de el",
    "Recunoaște o buclă IPO din lumea reală (mașină, semafor, termostat)"
  ]
},
{
  id: "2.3", level: 2, num: 3, title: "Biți, Bytes și numere binare", icon: "🔢", duration: "50 min",
  objectives: [
    "Să convertească numere de la 0 la 15 în binar și invers",
    "Să explice de ce calculatoarele folosesc 0 și 1",
    "Să ordoneze unitățile: bit, byte, KB, MB, GB, TB"
  ],
  explanation: [
    "Ce este: un bit este cea mai mică unitate de informație digitală folosită aici: poate avea una dintre două valori, 0 sau 1. În joc, 0 înseamnă stins, iar 1 înseamnă aprins. Un byte este un grup de 8 biți. Circuitele pot reprezenta mai multe stări fizice, dar pentru început notăm două stări clare, precum nivel electric mai mic și mai mare, cu 0 și 1. Cifra este o etichetă pentru stare, nu electricitatea însăși.",
    "Cum funcționează pas cu pas: sistemul binar este un sistem de numerație care folosește doar cifrele 0 și 1. În patru poziții, de la stânga la dreapta, valorile sunt 8, 4, 2 și 1. Pentru numărul 13 aprinzi pozițiile 8, 4 și 1: 8 + 4 + 1 = 13, deci scrii 1101. Fiecare poziție are o putere a lui 2, nu o valoare aleasă la întâmplare.",
    "Exemplu concret: un text este transformat în numere printr-un cod, adică o regulă comună între cel care scrie și cel care citește. În ASCII, litera mare A are valoarea 65, reprezentată pe opt biți ca 01000001. O imagine poate păstra pentru fiecare pixel, adică punct colorat, numere pentru roșu, verde și albastru. Calculatorul manipulează coduri, nu sensul poveștii tale.",
    "Unitățile de stocare cresc în grupuri: kilobyte, megabyte, gigabyte și terabyte sunt denumiri pentru cantități tot mai mari de bytes. În conversații se folosesc uneori aproximări, iar producătorii și sistemele de operare pot calcula diferit multiplii. Nu confunda bitul, notat adesea b, cu byte-ul, notat B: un byte are opt biți în modelul folosit aici.",
    "Legătura cu demo și limita: în demonstrație aprinzi biți și observi cum se adună valorile lor. Jocul este o reprezentare simplificată; un calculator real folosește tensiuni, zgomot electric, circuite și reguli de codare, nu beculețe perfecte. Important este să poți converti numerele mici, să explici de ce există coduri și să verifici rezultatul adunând valorile pozițiilor aprinse."
  ],
  demo: {
    type: "binary",
    title: "Mașina binară",
    intro: "Aprinde și stinge biții ca să construiești numărul. Fiecare bit valorează cifra de sub el!"
  },
  experiment: {
    title: "Brățara binară",
    materials: ["Mărgele de 2 culori (sau bete de 2 culori)", "Ață sau sârmă"],
    steps: [
      "Alege o culoare pentru 1 și alta pentru 0.",
      "Scrie-ți inițialele în binar: află codul fiecărei litere (A=65=01000001, B=66=01000010... caută „tabel ASCII”).",
      "Înșiră mărgelele: fiecare literă = 8 mărgele.",
      "Poartă brățara și provoacă pe cineva s-o descifreze!"
    ],
    expected: "O brățară cu 2-3 litere codate corect în binar (16-24 de mărgele)."
  },
  project: {
    title: "Mesaj secret binar",
    goal: "Trimite un mesaj cifrat în binar unui coleg/părinte, cu cheia de descifrare.",
    steps: [
      "Scrie un mesaj scurt (5-10 litere).",
      "Caută codul ASCII al fiecărei litere și transformă-l în binar (8 biți).",
      "Scrie mesajul pe o foaie, doar cu 0 și 1, și dă-l „spionului” împreună cu tabelul ASCII.",
      "Cronometrează: cât durează descifrarea? Apoi schimbați rolurile."
    ],
    success: ["Mesaj codat fără erori", "Mesaj descifrat corect de destinatar", "Copilul explică de ce sunt nevoie de 8 biți pe literă"]
  },
  questions: [
    "De ce nu folosesc calculatoarele cifrele 0-9 ca noi? (Indiciu: cât de sigur e un întrerupător?)",
    "Dacă 4 biți ajung până la 15, până unde ajung 8 biți?",
    "O poză are 3 MB. Cam câți biți sunt? (multe milioane!) De ce contează viteza internetului?",
    "Cum ai codifica un desen doar cu 0 și 1, fără culori?"
  ],
  exercises: [
    "Scrie în binar: 5, 9, 12, 15. Verifică-le adunând valorile biților aprinși.",
    "Transformă în zecimal: 0011, 1010, 1111, 1001.",
    "Pune în ordine de la mic la mare: 1 TB, 500 MB, 2 GB, 8 biți, 1 byte, 3 KB."
  ],
  parent: {
    watch: ["Copilul folosește pozițiile 8-4-2-1 instinctiv", "Legătura cu lumea reală: „poza e făcută din numere!”"],
    help: ["Jucați ping-pong binar: unul spune un număr sub 16, celălalt îl scrie în binar, 10 runde", "Nu vă panicați dacă adunarea e lentă la început — viteza vine singură"],
    redflags: ["Copilul memorează 1101=13 fără să înțeleagă adunarea 8+4+1 — reveniți la bancnote", "Frustrare la ASCII — e normal, mesajele binare SUNT plictisitoare de descifrat; asta e de fapt lecția despre de ce calculatoarele sunt utile"]
  },
  pass: [
    "Convertește corect 0-15 în binar și invers, fără ajutor",
    "Explică cu analogia lui de ce calculatoarele folosesc 0/1",
    "Ordonează corect bit < byte < KB < MB < GB < TB"
  ]
},
{
  id: "2.4", level: 2, num: 4, title: "De la tranzistor la porți logice", icon: "🔌", duration: "50 min",
  objectives: [
    "Să explice tranzistorul ca un întrerupător controlat electric",
    "Să folosească porțile AND, OR, NOT pentru a rezolva puzzle-uri logice",
    "Să scrie tabelul de adevăr al unei porți"
  ],
  explanation: [
    "Ce este un semnal: într-un circuit digital, semnalul este o mărime electrică interpretată ca informație. Pentru modelul nostru, 0 înseamnă o stare logică joasă, iar 1 o stare logică înaltă; ele sunt etichete pentru intervale de tensiune, nu valori exacte și nu înseamnă mereu „fără electricitate” și „electricitate perfect prezentă”. Tensiunea descrie diferența de potențial, iar starea logică este felul în care circuitul interpretează acea tensiune.",
    "Ce este un tranzistor: un tranzistor este un dispozitiv semiconductor care poate controla trecerea curentului. În modelul simplificat, are un terminal de control și două terminale pentru drumul principal, numite sursă și drenă la un MOSFET. O tensiune aplicată la control schimbă conductanța dintre celelalte două terminale. De aceea un semnal mic de control poate permite sau opri un alt semnal, foarte repede, fără piese mecanice care se mișcă.",
    "Analogia cu întrerupătorul este utilă, dar are limite. Un întrerupător de perete este apăsat de un om și are contacte vizibile; tranzistorul este controlat electric, este microscopic și funcționează în circuite cu praguri, întârzieri și consum de energie. Când conectăm tranzistori într-o configurație, obținem o poartă logică. Poarta primește una sau mai multe intrări, aplică o regulă și produce o ieșire.",
    "Tabelele de adevăr arată toate cazurile. Pentru AND: A B | ieșire: 0 0 | 0, 0 1 | 0, 1 0 | 0, 1 1 | 1. Pentru OR: 0 0 | 0, 0 1 | 1, 1 0 | 1, 1 1 | 1. Pentru NOT există o singură intrare: 0 devine 1, iar 1 devine 0. AND înseamnă „ambele”, OR înseamnă „cel puțin una”, iar NOT inversează.",
    "Legătura fizică și cu CPU-ul: două întrerupătoare în serie cer ca ambele să fie închise pentru ca becul să primească un drum complet, o analogie pentru AND. Două drumuri în paralel permit trecerea pe oricare, o analogie pentru OR; nu este o copie perfectă a circuitelor moderne, dar arată regula. Porți mici se compun în adunătoare, memorii și unități de control. Un CPU folosește foarte multe tranzistoare pentru a executa instrucțiuni, a muta date și a lua decizii logice, nu pentru că fiecare tranzistor „știe” un program singur. În demo vei verifica fiecare regulă prin combinații concrete."
  ],
  demo: {
    type: "quiz",
    title: "Antrenament de poartă logică",
    questions: [
      { q: "Poarta AND primește intrările 1 și 0. Ce iese?", opts: ["1 - a ieșit curent", "0 - pentru că nu ambele sunt 1"], correct: 1, why: "AND e strict: vrea 1 ȘI 1. Cu un singur 1, ieșirea e 0." },
      { q: "Poarta OR primește 0 și 1. Ce iese?", opts: ["1 - ajunge o singură intrare activă", "0 - îi trebuie ambele"], correct: 0, why: "OR e generoasă: e de ajuns UNA dintre intrări să fie 1." },
      { q: "NOT primește 1. Ce iese?", opts: ["1", "0"], correct: 1, why: "NOT e răzgâiatul porților: întoarce mereu invers. 1 devine 0." },
      { q: "Ușa se deschide doar dacă e zi ȘI ai cheia. Ce poartă e?", opts: ["AND", "OR", "NOT"], correct: 0, why: "Sunt necesare AMBELE condiții simultan → poartă AND." },
      { q: "Lumina din frigider e aprinsă ORI de câte ori ușa e deschisă SAU butonul e apăsat. Ce poartă?", opts: ["AND", "OR"], correct: 1, why: "E de ajuns una din condiții → poartă OR." }
    ]
  },
  experiment: {
    title: "Circuitul AND din carton",
    materials: ["Carton", "2 agrafe mari sau întrerupătoare", "O baterie și un bec/LED (opțional)", "Creion"],
    steps: [
      "Desenează un circuit pe carton: baterie → întrerupător A → întrerupător B → bec → înapoi la baterie (în SERIE).",
      "Acesta e un AND fizic: becul se aprinde DOAR dacă A ȘI B sunt apăsate.",
      "Acum desenează-l în PARALEL (becul primește curent din A sau din B): ai construit un OR.",
      "Dacă ai componente reale și un adult, construiește-le pe bune și completează tabelul de adevăr măsurând!"
    ],
    expected: "Două scheme desenate corect + tabelul de adevăr completat pentru AND (00→0, 01→0, 10→0, 11→1)."
  },
  project: {
    title: "Sistemul de securitate logic",
    goal: "Proiectează o „alarmă” cu reguli logice: senzor ușă OR senzor fereastră pornesc alarma, dar doar AND dacă alarma e armata.",
    steps: [
      "Desenează senzorii ca intrări (ușă, fereastră, buton de armare).",
      "Combină cu porți: (ușă OR fereastră) AND armare → alarmă.",
      "Completează tabelul de adevăr pentru toate cele 8 combinații posibile.",
      "Testează cu un prieten: el alege combinații, tu spui dacă alarma sună."
    ],
    success: ["Schema cu 2 porți corect conectate", "Tabel de adevăr cu 8 rânduri complet", "Copilul prezice corect 5 combinații aleatorii"]
  },
  questions: [
    "De ce e util că tranzistorii nu au părți mișcătoare?",
    "Dă un exemplu din casă care funcționează ca o poartă AND. Și unul ca OR.",
    "Cum ai construi o poartă „Niciunul” (1 doar dacă ambele sunt 0)? Ce porți combini?",
    "50 de miliarde de tranzistori... de ce crezi că procesorul se încălzește?"
  ],
  exercises: [
    "Completează tabelele de adevăr pentru AND, OR, NOT.",
    "Desenează schema: lumina porții se aprinde dacă e noapte AND senzorul vede mișcare.",
    "Descoperă: ce face NOT + AND lipite? (Se numește NAND — din ea se construiesc TOATE celelalte!)"
  ],
  parent: {
    watch: ["Copilul traduce situații reale în porți logice", "Răbdarea la completarea tabelelor de adevăr"],
    help: ["Jucați „poarta umană”: părintele e poarta AND/OR, copiii dau intrările cu palme sus/jos", "Kit-uri gen „Tinkercad Circuits” (online, gratuit) permit simularea fără componente"],
    redflags: ["Confuzia AND/OR persistă — folosiți DOAR exemple fizice o săptămână (uși, chei, sonerii), nu abstracte"]
  },
  pass: [
    "Scrie din memorie tabelele de adevăr AND, OR, NOT",
    "Traduce 3 situații reale în porți logice corecte",
    "Explică ce e un tranzistor cu analogia lui"
  ]
},
{
  id: "2.5", level: 2, num: 5, title: "Proiect: Dezasamblăm un calculator", icon: "🔧", duration: "90 min", isProject: true,
  objectives: [
    "Să dezasambleze (cu supraveghere) un calculator vechi și să identifice fiecare componentă",
    "Să documenteze procesul cu foto și note ca un inginer",
    "Să reasambleze sistemul sau să construiască un „calculator explodat” de expoziție"
  ],
  explanation: [
    "Ce este: în acest proiect faci inginerie inversă, adică studiezi un obiect existent pentru a înțelege cum este construit și ce rol are fiecare piesă. Alegi un calculator de birou vechi, scos din uz, îl fotografiezi înainte de lucru și notezi conexiunile. Scopul nu este să desfaci cât mai repede, ci să poți explica apoi de ce fiecare componentă se află acolo.",
    "Siguranța este primul pas: un adult confirmă că aparatul este scos din priză, potrivit pentru demontare și așezat pe o suprafață stabilă. Nu deschide sursa de alimentare, monitorul, baterii umflate sau componente deteriorate; unele pot păstra energie periculoasă. Sortează șuruburile, folosește unelte potrivite și oprește-te imediat dacă nu înțelegi o conexiune sau dacă piesa opune rezistență.",
    "Cum funcționează pas cu pas: faci fotografia inițială, identifici placa de bază și componentele, scoți câte o piesă, o etichetezi și notezi de unde provine. RAM-ul este memoria temporară, stocarea păstrează fișierele, procesorul execută instrucțiuni, iar coolerul transportă căldura spre aer. Conexiunea este la fel de importantă ca piesa: o componentă fără alimentare sau date nu își poate face rolul.",
    "Exemplu concret: dacă scoți un SSD, calculatorul poate părea că nu mai găsește sistemul de operare, deși procesorul și RAM-ul sunt încă acolo. Dacă scoți un modul RAM, pornirea poate eșua sau sistemul poate raporta o eroare. Aceste observații trebuie făcute pe un aparat de laborator, nu pe dispozitivul familiei. Nu toate componentele sunt compatibile între calculatoare doar pentru că au aceeași formă.",
    "Legătura cu demo și limita: demonstrația îți arată ordinea fotografie → identificare → extragere → etichetare → expoziție. Panoul final trebuie să lege piesa de rol, alimentare și conexiuni. Un calculator desfăcut nu explică singur toate procesele interne, iar o fotografie de pe internet poate avea altă dispunere; compară sursele și scrie ce știi, ce ai observat și ce rămâne de verificat."
  ],
  demo: {
    type: "flow",
    title: "Procedura chirurgicală",
    steps: [
      { label: "🛡️ Siguranța", info: "Priză scoasă, 10 minute de așteptare, adult prezent, spațiu curat, pahare pentru șuruburi. Sursa NU se deschide niciodată!" },
      { label: "📸 Foto inițială", info: "Fotografiază TOT înainte să atingi ceva. Aceasta e harta ta de reasamblare." },
      { label: "🔩 Capacul", info: "Desurubează panoul lateral. Prima privire înăuntru! Identifică componentele pe care le cunoști." },
      { label: "📋 Extrage pe rând", info: "RAM → placa video → hard disk → cooler → sursă. Fiecare piesă: foto + etichetă + loc pe hârtie." },
      { label: "🎨 Expune", info: "Lipește piesele pe placă, trasează săgeți între ele, etichetează cu rolul fiecăreia. Semnează opera!" }
    ]
  },
  experiment: {
    title: "Fișa de autopsie",
    materials: ["Calculator vechi (scos din priză!)", "Surubelnițe", "Pahare pentru șuruburi", "Caiet + foto", "Un adult"],
    steps: [
      "Completează fișa pe măsură ce demontezi: Piesă / Ce face / Unde era conectată / Ceva surprinzător.",
      "Cântărește cooler-ul procesorului. De ce e atât de greu? (Răspuns: procesorul se încălzește ca un bec!)",
      "Găsește bateria rotundă de pe placă. Ce crezi că ține ea în viață? (Ceasul și setările!)",
      "Numără șuruburile la final. Trebuie să nu rămână niciunul fără explicație."
    ],
    expected: "Fișă completă cu minimum 5 componente, fiecare cu rol și observație."
  },
  project: {
    title: "Expoziția „Anatomia unui Calculator”",
    goal: "Creează un panou de expoziție cu piesele reale și prezintă-l ca un ghid de muzeu.",
    steps: [
      "Lipește piesele pe o placă de carton/poliester în ordinea conexiunilor.",
      "Trasează cu markerul „circuitele” dintre ele și colorează: input / procesare / output.",
      "Scrie pentru fiecare piesă o etichetă de muzeu: nume, rol, fapt tare.",
      "Prezintă panoul familiei sau clasei în tur de 3 minute. Răspunde la 2 întrebări."
    ],
    success: ["Minimum 5 piese reale montate și etichetate", "Fluxul de date marcat cu săgeți", "Prezentare de 3 minute fără caiet"]
  },
  questions: [
    "Ce piesă te-a surprins cel mai mult? De ce?",
    "De ce are nevoie procesorul de un cooler atât de mare?",
    "Ce componentă ai lua cu tine pe o insulă pustiu dacă ai vrea să păstrezi amintirile familiei?",
    "Dacă ai reconstrui calculatorul cu piese duble, ce-ai face diferit?"
  ],
  exercises: [
    "Scrie în jurnal pașii de demontare, ca o rețetă pe care altcineva o poate urma.",
    "Compară interiorul calculatorului cu o poză din interiorul unui telefon: găsește cele 3 corespondențe.",
    "Calculează: cât costă piesele demontate dacă le-ai cumpăra separat? Merită un PC vechi?"
  ],
  parent: {
    watch: ["Respectarea regulilor de siguranță FĂRĂ reamintiri", "Documentarea ordonată, nu graba spre „a desface”"],
    help: ["Un PC vechi se găsește gratuit sau ~50 lei (anunțuri, firme care dotează)", "Filmați demontarea — materialul e perfect pentru portofoliul copilului"],
    redflags: ["Copilul vrea să deschidă sursa de alimentare sau monitorul — STOP absolut, explicați condensatorii", "Pierde șuruburi și nu-i pasă — pauză și discuție despre disciplina inginerească"]
  },
  pass: [
    "A demontat respectând toate regulile de siguranță",
    "Identifică fiecare piesă din panou și îi explică rolul",
    "Jurnalul de autopsie e complet și poate fi urmat de altcineva"
  ]
}
];
