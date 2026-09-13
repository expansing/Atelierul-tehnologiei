/* Atelierul Tehnologiei - Lecții Nivelurile 5-8 */
const LESSONS_C = [
/* ==================== NIVELUL 5 ==================== */
{
  id: "5.1", level: 5, num: 1, title: "Ce se întâmplă când deschizi un site", icon: "🌍", duration: "50 min",
  objectives: [
    "Să enumere în ordine pașii: URL → DNS → IP → router → server → răspuns → browser",
    "Să explice fiecare pas cu cuvintele lui",
    "Să deseneze diagrama completă a unei vizite pe un site"
  ],
  explanation: [
    "Un URL este adresa textuală a unei resurse web, de exemplu `https://exemplu.ro`. Browserul este clientul care cere resursa, iar serverul este calculatorul sau programul care o păstrează și răspunde. Pentru a găsi serverul, browserul are nevoie de IP, o adresă numerică folosită de rețea.",
    "De ce sunt mai multe etape? Oamenii preferă nume, routerele lucrează cu adrese, iar pagina este alcătuită din mai multe fișiere. Browserul caută mai întâi un răspuns DNS păstrat local, apoi trimite cererea prin router și furnizor către server. Serverul trimite HTML, CSS, imagini și alte resurse.",
    "Exemplul pas cu pas este: 1) scrii adresa, 2) DNS o traduce în IP, 3) routerul alege următorul drum, 4) serverul primește cererea, 5) răspunsul se întoarce în pachete, 6) browserul reunește fișierele și desenează pagina. O imagine poate cere încă o cerere după ce HTML-ul a sosit.",
    "O limită importantă este că nu vezi întotdeauna traseul real și nu poți deduce locul exact al unui server doar din IP. Unele routere nu răspund la diagnostice, iar o pagină lentă poate fi cauzată de Wi-Fi, server sau conținut. Nu testa adrese suspecte și nu publica IP-uri sau detalii ale rețelei casei.",
    "Demo-ul „Călătoria unui click pe www.exemplu.ro” arată exact ordinea tu → browser → DNS → router → internet → server → pagină. Apasă fiecare etapă și explică ce informație intră și ce iese; apoi compară cu `nslookup`, `ping` și `traceroute` din experiment."
  ],
  demo: {
    type: "flow",
    title: "Călătoria unui click pe www.exemplu.ro",
    steps: [
      { label: "🧑 Tu", info: "Scrii adresa și apeși Enter. Tocmai ai pornit o cursă de ștafetă prin jumătate de planetă." },
      { label: "🌐 Browser", info: "Browserul pregătește cererea: „Vreau pagina principală, vă rog!” Dar are o problemă: nu știe unde să o trimită." },
      { label: "📖 DNS", info: "Agenda telefonică a internetului: „exemplu.ro = 93.184.216.34”. Acum știm adresa reală!" },
      { label: "📡 Router", info: "Routerul de acasă primește cererea și o trimite mai departe, spre furnizor, spre lume." },
      { label: "🌍 Internet", info: "Pachetele sar din router în router, prin cabluri, fibre, poate chiar prin ocean, către server." },
      { label: "🖥️ Server", info: "Un calculator dintr-un centru de date primește cererea, găsește pagina și o trimite înapoi." },
      { label: "🎨 Pagina!", info: "Browserul primește bucățile, le lipește și desenează site-ul. Total: de obicei sub o secundă." }
    ]
  },
  experiment: {
    title: "Urmărește pachetul!",
    materials: ["Terminal", "Conexiune la internet"],
    steps: [
      "Alege un site public cunoscut și sigur; nu testa adrese primite în mesaje. Rulează ping -c 4 exemplu.ro și notează timpul de răspuns.",
      "Rulează nslookup exemplu.ro și observă răspunsul DNS. Notează doar domeniul și ce ai învățat, nu publica adresele rețelei tale.",
      "Rulează traceroute exemplu.ro (sau tracepath) doar ca observație. Fiecare linie arată un hop posibil; unele routere aleg să nu răspundă, ceea ce nu înseamnă automat că este o problemă.",
      "Compară timpii către două site-uri publice cunoscute. Formulează o ipoteză despre distanță și aglomerație, fără să presupui locul exact al serverului."
    ],
    expected: "Copilul a văzut IP-uri reale, timpi reali și drumul real al pachetelor. Surpriza: sunt zeci de hopuri!"
  },
  project: {
    title: "Harta unei călătorii",
    goal: "Documentează vizual drumul complet al unei cereri către site-ul tău preferat.",
    steps: [
      "Rulează nslookup, ping și traceroute pentru un site public cunoscut sau pentru propriul server local.",
      "Desenează harta conceptuală: dispozitiv → router local → internet → server. Folosește etichete, nu IP-uri ori nume ale rețelei casei.",
      "Marchează ce părți pot adăuga întârziere: Wi-Fi, router, distanță sau server.",
      "Explică prudent: dacă o rută devine indisponibilă, rețeaua poate găsi altă rută, dar nu este garantat pentru fiecare pachet sau serviciu."
    ],
    success: ["Diagramă cu toate cele 8 etape", "IP-uri și timpi reali notați", "Explicația rezilienței rețelei"]
  },
  questions: [
    "De ce e internetul făcut din multe drumuri și nu unul singur?",
    "Ce s-ar întâmpla dacă toate serverele DNS s-ar opri o zi?",
    "De ce durează mai mult să ajungi la un server din Australia decât la unul din România?",
    "Unde „este” internetul, fizic, de fapt?"
  ],
  exercises: [
    "Fă ping la 3 site-uri din 3 continente și compară timpii.",
    "Găsește IP-ul propriului tău router (hint: ip route | grep default).",
    "Desenează din memorie lanțul complet al unei cereri web."
  ],
  parent: {
    watch: ["Copilul vede internetul ca infrastructură fizică, nu ca „nor magic”", "Confort cu comenzile de diagnostic"],
    help: ["Căutați împreună o imagine cu cablurile submarine de internet — efect wow garantat", "La fiecare „nu merge netul”, invitați copilul să diagnosticheze cu ping"],
    redflags: ["Copilul crede că site-urile „locuiesc” în browser — clarificați cu analogia scrisorii"]
  },
  pass: [
    "Recitește cele 8 etape din memorie",
    "Rulează și interpretează ping, nslookup, traceroute",
    "Explică de ce pachetele pot ocoli un router căzut"
  ]
},
{
  id: "5.2", level: 5, num: 2, title: "DNS - agenda telefonică a internetului", icon: "📖", duration: "45 min",
  objectives: [
    "Să explice DNS ca traducere nume → adresă IP",
    "Să folosească nslookup pentru a interoga DNS",
    "Să înțeleagă de ce DNS e o țintă de securitate"
  ],
  explanation: [
    "DNS, Domain Name System, este sistemul care traduce un nume de domeniu, precum `exemplu.ro`, într-una sau mai multe adrese IP. Domeniul este numele ușor de citit, IP-ul este adresa folosită de rețea, iar resolverul este serviciul care caută răspunsul pentru browser.",
    "Avem nevoie de DNS fiindcă oamenii rețin nume, nu șiruri de cifre, iar serverele se pot muta sau multiplica. Browserul caută întâi în cache, memoria temporară. Dacă nu găsește răspunsul, resolverul întreabă ierarhia DNS, iar rezultatul are un TTL, adică o perioadă după care trebuie verificat din nou.",
    "Urmărește cererea: browserul cere IP-ul, resolverul întreabă serverele potrivite pentru extensie și domeniu, apoi primește o înregistrare. `nslookup exemplu.ro` poate afișa adresele observate acum. Unele domenii au mai multe IP-uri pentru distribuirea traficului și disponibilitate.",
    "DNS nu dovedește singur că un site este autentic: un răspuns poate fi modificat sau un domeniu poate imita alt nume. HTTPS verifică certificatul și protejează conexiunea, dar tu trebuie să citești domeniul complet. Nu modifica `/etc/hosts`, DNS-ul routerului sau setările rețelei fără un adult.",
    "În demo-ul „Interogarea DNS pas cu pas”, urmărește cache → resolver → ierarhie → răspuns → risc. Experimentul folosește numai domenii publice cunoscute și observare fără modificări; leagă fiecare rezultat `nslookup` de etapa corectă din diagramă."
  ],
  demo: {
    type: "flow",
    title: "Interogarea DNS pas cu pas",
    steps: [
      { label: "❓ Întrebarea", info: "Browser: „Care e IP-ul pentru jocuri-cool.ro?” Prima oprire: memoria locală (cache) — poate am mai fost." },
      { label: "🏢 DNS-ul providerului", info: "Dacă nu e în cache, întrebăm serverul DNS al furnizorului. El știe milioane de nume." },
      { label: "🌳 Ierarhia", info: "Dacă nici el nu știe: întreabă serverul rădăcină → serverul .ro → serverul domeniului. Fiecare știe o felie." },
      { label: "✅ Răspunsul", info: "IP-ul se întoarce: 203.0.113.7. Browserul îl ține minte o vreme (cache) ca să nu întrebe iar." },
      { label: "⚠️ Pericolul", info: "Dar dacă răspunsul e FALS? Un DNS otrăvit te trimite la o copie a site-ului. Verifică mereu lacătul HTTPS!" }
    ]
  },
  experiment: {
    title: "Detectivul DNS",
    materials: ["Terminal"],
    steps: [
      "Rulează nslookup pentru două domenii publice cunoscute și notează că răspunsul poate conține mai multe adrese.",
      "Rulează ping -c 3 pentru unul dintre ele. Compară numele rezolvat cu răspunsul, fără a concluziona că toate serviciile folosesc o singură adresă.",
      "Privește, fără `sudo` și fără modificări, un exemplu de fișier hosts oferit în materialul lecției. El este o listă locală de nume și adrese.",
      "Discuție pe hârtie: dacă o listă locală ar asocia greșit un nume cu o adresă, browserul ar putea ajunge în locul nepotrivit. Cum te ajută domeniul corect și avertismentele HTTPS?"
    ],
    expected: "IP-uri reale descoperite + înțelegerea fișierului hosts ca „agendă locală”."
  },
  project: {
    title: "Agenda DNS a casei",
    goal: "Construiește un tabel cu nume → IP pentru 10 site-uri + experiment ghidat cu fișierul hosts.",
    steps: [
      "Folosește nslookup pentru 5 domenii publice cunoscute și notează doar domeniul, numărul de răspunsuri și data observării.",
      "Observă că unele domenii au mai multe adrese; discută despre distribuirea cererilor și disponibilitate.",
      "Pe hârtie, creează o listă DNS fictivă: `club-local.test → 127.0.0.1`. Nu modifica `/etc/hosts`, setările DNS sau routerul.",
      "Scrie concluzia: un nume asociat greșit poate induce în eroare; apărarea include domeniul corect, certificatul HTTPS și evitarea linkurilor suspecte."
    ],
    success: ["Tabel cu 10 intrări reale", "Experiment hosts făcut și anulat", "Concluzie de securitate scrisă"]
  },
  questions: [
    "De ce ținem DNS-ul pe servere distribuite, nu pe unul singur gigantic?",
    "Ce e cache-ul DNS și de ce face internetul mai rapid?",
    "Cum verifici că ești pe site-ul adevărat al băncii?",
    "De ce nu folosim direct IP-uri, fără nume?"
  ],
  exercises: [
    "Găsește IP-urile a 5 site-uri și verifică dacă se schimbă după o zi.",
    "Explică bunicii ce e DNS-ul folosind agenda telefonică.",
    "Află ce server DNS folosește calculatorul tău (cat /etc/resolv.conf)."
  ],
  parent: {
    watch: ["Copilul face legătura DNS → securitate singur", "Verificarea adresei din browser devine reflex"],
    help: ["Experimentați hosts împreună, cu voia tare, ca o demonstrație de „atac” inofensiv", "Discutați știrile despre „DNS hijacking” la nivel de poveste"],
    redflags: ["Copilul modifică hosts sau setări DNS fără supraveghere — regula: experimente doar împreună", "Nu distinge site fals de cel real — exersați cu capturi de ecran reale"]
  },
  pass: [
    "Explică lanțul de interogare DNS",
    "Folosește nslookup și interpretează răspunsul",
    "Explică riscul DNS otrăvit și apărarea de bază"
  ]
},
{
  id: "5.3", level: 5, num: 3, title: "IP, routere și pachete", icon: "📦", duration: "45 min",
  objectives: [
    "Să explice adresa IP ca adresă poștală a unui calculator",
    "Să descrie cum routerele dirijează pachetele",
    "Să înțeleagă de ce mesajele se taie în pachete"
  ],
  explanation: [
    "O adresă IP este un identificator folosit pentru a livra date într-o rețea, asemănător cu adresa de pe un plic. Un pachet este o bucată de mesaj cu informații de control, iar routerul este dispozitivul care îl trimite către următorul hop pe baza unei hărți de rute.",
    "Mesajele sunt împărțite în pachete pentru ca mai mulți utilizatori să poată împărți legăturile și pentru ca o problemă să afecteze doar o bucată. Pachetele pot ajunge cu întârziere, în altă ordine sau pot lipsi; protocoalele de transport decid dacă se confirmă și se retrimit.",
    "Exemplul cu cinci bilete funcționează astfel: numerotezi bucățile, le amesteci, fiecare router citește destinația și trimite următorul pas, iar destinatarul le ordonează după număr. Dacă lipsește biletul 4, destinatarul știe exact ce trebuie cerut din nou, dacă protocolul oferă această garanție.",
    "O limită este că analogia poștei ascunde viteza, criptarea și diferențele dintre protocoale. IP privat, cum este `192.168.1.10`, funcționează de obicei doar în casa ta, iar IP-ul public este folosit spre internet. Nu publica harta sau adresa publică a rețelei fără motiv.",
    "Demo-ul „Viața unui pachet” arată tăierea, routerul casei, hopurile, serverul și răspunsul. În experimentul cu plicuri, scoate un bilet și observă cum se vede pierderea; apoi leagă observația de diferența IP privat/public și de `ping`."
  ],
  demo: {
    type: "flow",
    title: "Viața unui pachet",
    steps: [
      { label: "✂️ Tăierea", info: "Mesajul tău („Salut!”) e tăiat în pachete mici, fiecare cu eticheta: DE LA ip-ul meu, CĂTRE ip-ul serverului, bucata 3 din 5." },
      { label: "🏠 Routerul casei", info: "Primul oficiu poștal: „Asta nu e pentru casă, pleacă spre provider!” Traduce IP-ul privat în cel public." },
      { label: "🔀 Hop, hop", info: "Fiecare router din drum citește DOAR adresa destinație și alege următorul pas. Nimeni nu știe tot drumul dinainte!" },
      { label: "📬 Serverul", info: "Pachetele sosesc (poate în altă ordine!). Serverul le pune la loc după numere și citește mesajul complet." },
      { label: "🔁 Răspunsul", info: "Răspunsul face drumul invers, tot în pachete. Dacă unul lipsește: „retrimite bucata 4, te rog!”" }
    ]
  },
  experiment: {
    title: "Poștașul de pachete",
    materials: ["Terminal", "Hârtie și plicuri (jocul fizic)"],
    steps: [
      "Observă, fără capturi sau publicare, că dispozitivul are o adresă privată: ip addr (Linux) sau ipconfig (Windows).",
      "Folosește exemplul fictiv 192.168.1.10 pentru a compara o adresă privată cu ideea de adresă publică; nu căuta și nu nota adresa publică a casei.",
      "Jocul fizic: scrie o poveste pe 5 bilete numerotate. Amestecă-le și dă-le unui „router” (părinte) care le împachetează pe rând. Destinatarul le reordonează și citește. Pierde un bilet — ce face destinatarul?",
      "Rulează ping -c 10 și privește: timpii diferă puțin de la pachet la pachet. Fiecare și-a găsit drumul!"
    ],
    expected: "Copilul explică diferența IP privat/public și reasamblarea pachetelor după numere."
  },
  project: {
    title: "Harta rețelei casei",
    goal: "Inventariază toate dispozitivele din rețeaua casei și desenează topologia reală.",
    steps: [
      "Desenează o rețea-model cu dispozitive inventate: laptop, telefon, televizor și router; nu te autentifica în router pentru acest proiect.",
      "Atribuie adrese private fictive, de exemplu 192.168.1.10, și scrie tipul fiecărui dispozitiv.",
      "Desenează routerul în centru și conexiunile Wi-Fi sau prin cablu.",
      "Dacă vedeți un dispozitiv necunoscut într-o aplicație de familie, nu îl investigați singuri și nu schimbați setări; anunțați adultul care administrează rețeaua."
    ],
    success: ["Hartă completă cu IP-uri reale", "Toate dispozitivele identificate", "Explicația rolului routerului"]
  },
  questions: [
    "De ce pot două case să aibă același IP privat (192.168.1.10) fără conflict?",
    "Ce se întâmplă dacă pachetele sosesc în ordine greșită?",
    "De ce e mai sigur să trimiți multe pachete mici decât unul uriaș?",
    "Cum știe routerul unde să trimită un pachet pentru un server din Japonia?"
  ],
  exercises: [
    "Găsește IP-urile a 3 dispozitive din casă fără ajutor.",
    "Explică cu plicuri și bilete cum funcționează pierderea unui pachet.",
    "Desenează diferența: rețea cu un singur drum vs rețea cu drumuri multiple."
  ],
  parent: {
    watch: ["Copilul înțelege NAT ca traducător hotel/cameră", "Interes pentru topologia reală a casei"],
    help: ["Accesul la interfața routerului e o lectie în sine — faceți-o împreună și NU schimbați setări", "Jocul cu plicuri: adăugați „pachete pierdute” intenționat"],
    redflags: ["Copilul expune sau publică IP-ul public al casei online — discuție despre ce e privat", "Confuzie IP privat/public persistentă — reluați analogia hotelului"]
  },
  pass: [
    "Distinge și explică IP privat vs public",
    "Povestește călătoria unui pachet cu toate etapele",
    "A desenat harta reală a rețelei casei"
  ]
},
{
  id: "5.4", level: 5, num: 4, title: "Client și Server", icon: "🤝", duration: "45 min",
  objectives: [
    "Să definească rolurile client și server",
    "Să recunoască arhitectura client-server în 5 aplicații diferite",
    "Să joace rolul de client și server într-un joc de rol"
  ],
  explanation: [
    "Un client este programul sau dispozitivul care inițiază o cerere, iar un server este programul sau calculatorul care așteaptă cereri și oferă un serviciu. Browserul este client când cere o pagină, iar nginx poate fi server când trimite fișierele. Aceeași mașină poate avea ambele roluri în conversații diferite.",
    "Modelul separă responsabilitățile: clientul cere și afișează, serverul verifică, procesează și răspunde. Pașii obișnuiți sunt cerere → interpretare → răspuns sau eroare → afișare. Această separare permite multor clienți să folosească același serviciu fără să cunoască interiorul serverului.",
    "Exemplul restaurantului web este concret: clientul scrie `GET /meniu`, serverul caută resursa, trimite conținutul, iar pentru `GET /inexistent` trimite `404 Not Found`. Cu doi clienți, serverul trebuie să gestioneze cererile fără să amestece răspunsurile.",
    "O limită este că „serverul nu vorbește primul” este o simplificare pentru modelul cerere-răspuns. Notificările și conexiunile persistente pot permite mesaje pornite de server, dar există tot o conexiune și reguli clare. Nu confunda rolul cu tipul dispozitivului și nu testa pe conturile altora.",
    "Demo-ul „Cine e client, cine e server?” clasifică browserul, aplicațiile și serviciile. În jocul Restaurantul Web, joacă pe rând fiecare rol și observă 404; apoi verifică aceeași relație pe serverul local propriu, exact cum cere proiectul."
  ],
  demo: {
    type: "classify",
    title: "Cine e client, cine e server?",
    intro: "Sortează fiecare element în rolul lui!",
    zones: ["📱 Client", "🖥️ Server"],
    items: [
      { label: "Browserul tău", zone: 0 },
      { label: "nginx pe Pi", zone: 1 },
      { label: "Aplicația YouTube", zone: 0 },
      { label: "Centru de date Netflix", zone: 1 },
      { label: "Jocul de pe consolă", zone: 0 },
      { label: "Serverul de email", zone: 1 },
      { label: "Smart TV când dă play", zone: 0 },
      { label: "Baza de date a băncii", zone: 1 }
    ]
  },
  experiment: {
    title: "Jocul de rol: Restaurantul Web",
    materials: ["2+ persoane", "Fișe cu roluri", "Hârtie pentru „cereri” și „răspunsuri”"],
    steps: [
      "Unul e CLIENTUL: scrie cereri pe bilete („GET /pagina-principala”). Altul e SERVERUL: răspunde cu conținut desenat.",
      "Regula serverului: NU vorbește primul. Doar așteaptă cereri și răspunde. Exact ca nginx!",
      "Introduceți erori: cerere pentru pagină inexistentă → serverul răspunde „404 Not Found”.",
      "Adăugați un al doilea client. Serverul îi servește pe amândoi? Felicitări: ați simulat concurența!"
    ],
    expected: "Râsete + înțelegerea profundă: serverul e pasiv, clientul inițiază, erorile au coduri."
  },
  project: {
    title: "Client și server cu serverul TĂU",
    goal: "Demonstrează arhitectura client-server folosind propriul server din nivelul 3.",
    steps: [
      "Pornește un server local pe Pi sau VM pe care familia îl administrează. De pe un dispozitiv din aceeași rețea, vizitează pagina și desenează rolurile.",
      "Privește doar propriile cereri în jurnalul serverului sau într-un jurnal de test. Nu copia, publica sau interpreta datele de acces ale altor persoane.",
      "Cere o pagină inexistentă pe serverul local și observă răspunsul 404 în jurnal.",
      "Scrie concluzia folosind cererile tale de test: ce a cerut clientul și ce a trimis serverul?"
    ],
    success: ["Log real citit și interpretat", "404 observat și explicat", "Diagramă client-server cu dispozitivele casei"]
  },
  questions: [
    "Serverul poate trimite ceva fără să fie întrebat? (De obicei nu — de aceea există notificările ca truc!)",
    "Ce se întâmplă când 10.000 de clienți cer simultan? Cum se descurcă Netflix?",
    "Telefonul tău poate fi și server? Dă un exemplu.",
    "Într-un joc multiplayer, cine decide dacă ai câștigat: clientul sau serverul? De ce e important?"
  ],
  exercises: [
    "Listează 5 aplicații folosite azi și identifică clientul și serverul fiecăreia.",
    "Găsește în logul nginx 3 coduri de răspuns diferite (200, 304, 404) și explică-le.",
    "Jocul de rol cu 2 clienți și un server lent — ce probleme apar?"
  ],
  parent: {
    watch: ["Copilul vede PRETUTINDENI client-server", "Entuziasmul la citirea logurilor live"],
    help: ["Jocul de rol e de aur la vârsta asta — jucați-l și cu frați/bunici", "Arătați-i că și AI-ul pe care-l folosește e un server undeva"],
    redflags: ["Copilul crede că serverul „îți trimite reclame singur” — clarificați: clientul cere întâi pagina care conține reclamele"]
  },
  pass: [
    "Definește ambele roluri cu exemple proprii",
    "A citit și interpretat un log real de server",
    "Explică de ce serverul e pasiv și clientul inițiază"
  ]
},
{
  id: "5.5", level: 5, num: 5, title: "HTTP, HTTPS și cererile web", icon: "🔐", duration: "50 min",
  objectives: [
    "Să explice structura cerere-răspuns HTTP",
    "Să distingă HTTP de HTTPS și să explice criptarea simplu",
    "Să inspecteze o cerere reală cu uneltele browserului"
  ],
  explanation: [
    "HTTP este un protocol, adică un set de reguli pentru comunicarea web. O cerere are o metodă, o cale și antete; `GET /despre` cere o resursă. Răspunsul are un cod de status: 2xx indică succes, 4xx o problemă a cererii sau accesului, iar 5xx o problemă întâlnită de server.",
    "HTTPS este HTTP transportat prin TLS, un mecanism care verifică certificatul domeniului și criptează schimbul. Criptarea face mai greu ca cineva de pe drum să citească sau să schimbe datele. Lacătul confirmă protecția conexiunii, nu adevărul sau bunătatea fiecărei informații de pe site.",
    "Urmărește o cerere pas cu pas în fila Network: browserul cere `index.html`, serverul răspunde cu 200, apoi browserul cere CSS și imagini. Dacă introduci o cale inventată, primești de obicei 404; dacă serverul nu poate lucra, poate apărea 500. Metoda, URL-ul, statusul și tipul resursei spun povestea.",
    "O confuzie frecventă este să crezi că 404 înseamnă că internetul a căzut sau că HTTPS înseamnă site sigur în orice sens. De asemenea, codurile pot fi ascunse de interfață și pot exista redirecționări. Inspectează doar pagini proprii sau publice, fără parole, carduri ori date personale.",
    "Demo-ul „Codurile lui HTTP” leagă fiecare status de o situație, iar fila Network din experiment arată cererea reală. Alege o resursă locală, urmărește cerere → răspuns și compară codul din browser cu jurnalul serverului propriu."
  ],
  demo: {
    type: "quiz",
    title: "Codurile lui HTTP",
    questions: [
      { q: "Serverul răspunde „200”. Ce înseamnă?", opts: ["Totul OK, iată pagina", "Pagina nu există"], correct: 0, why: "200 = succes. E codul pe care-l primești de mii de ori pe zi fără să-l vezi." },
      { q: "Celebrul „404” înseamnă...", opts: ["Serverul s-a stricat", "Pagina cerută nu există"], correct: 1, why: "404 = Not Found. Clientul a cerut ceva ce serverul nu are." },
      { q: "Codul „500” spune că...", opts: ["E vina serverului (eroare internă)", "E vina clientului"], correct: 0, why: "5xx = serverul a greșit. 4xx = clientul a cerut prost." },
      { q: "Pe ce fel de site e OK să-ți scrii parola?", opts: ["Orice site cu design frumos", "Doar site cu HTTPS (lacăt) și adresa corectă"], correct: 1, why: "HTTPS criptează conversația. Fără lacăt, parola călătorește ca o carte poștală." }
    ]
  },
  experiment: {
    title: "Ochii dezvoltatorului",
    materials: ["Browser (F12)", "Site-ul serverului propriu (din N3) sau orice site"],
    steps: [
      "Deschide propria pagină locală și apasă F12 → fila Network/Rețea. Reîncarcă pagina ca să vezi cererile de test.",
      "Alege o cerere pentru un fișier propriu și observă metoda, statusul și tipul resursei. Nu trimite formulare și nu inspecta date de autentificare.",
      "Adaugă o imagine sau un fișier CSS propriu și numără cererile paginii locale.",
      "Urmărește aceeași cerere în browser și în jurnalul propriului server; compară metoda și codul de răspuns."
    ],
    expected: "Copilul a văzut cereri HTTP reale cu coduri de status și a numărat cererile unei pagini."
  },
  project: {
    title: "Detectivul codurilor de status",
    goal: "Colecționează 6 coduri de status reale, observate în browser, și explică povestea fiecăruia.",
    steps: [
      "Cu F12 deschis pe serverul local, observă 200 pentru o pagină bună, 404 pentru o pagină inventată și, dacă apare natural, 304 pentru o resursă din cache. Nu crea intenționat erori 500 și nu căuta zone restricționate ale altor site-uri.",
      "Pentru fiecare: captură sau notiță + poveste („am cerut X, serverul a zis Y pentru că Z”).",
      "Creează un afiș „Zodia Statusurilor” cu emoji pentru fiecare cod.",
      "Verifică 5 site-uri din istoricul tău: toate au HTTPS? Notează-le pe cele fără și cercetează de ce."
    ],
    success: ["6 coduri observate real, nu citite", "Afiș cu explicații proprii", "Raport HTTPS pe 5 site-uri"]
  },
  questions: [
    "De ce se numește HTTP „protocol” și nu „limbaj de programare”?",
    "Ce poate vedea cineva care îți interceptează traficul HTTP? Și pe HTTPS?",
    "De ce e bine că browserele marchează site-urile fără HTTPS ca „Nesecurizat”?",
    "Un site are lacăt HTTPS. Înseamnă automat că e de încredere? (NU! Hoții au și ei lacăte.)"
  ],
  exercises: [
    "Prinde codul 301 redirecționând de la http:// la https:// pe un site.",
    "Scrie „dialogul HTTP” pentru vizitarea serverului tău: cerere + răspuns, cuvânt cu cuvânt.",
    "Explică cuiva mai mic diferența HTTP/HTTPS cu plicul și cartea poștală."
  ],
  parent: {
    watch: ["Reflexul de a privi bara de adrese înainte de a introduce date", "Copilul deschide F12 din curiozitate, nu din temere"],
    help: ["Explorați F12 împreună — e fascinant și inofensiv", "Jucați „ghicește codul”: 200, 404, 500... puncte pentru explicații"],
    redflags: ["Copilul ignoră avertismentul „Nesecurizat” — regula fermă: fără date personale acolo", "Crede că HTTPS = site sigur moral — discutați diferența dintre conexiune criptată și conținut onest"]
  },
  pass: [
    "Explică structura cerere/răspuns și 6 coduri de status",
    "Folosește F12 pentru a inspecta cereri reale",
    "Aplică regula HTTPS la decizii reale de siguranță"
  ]
},
{
  id: "5.6", level: 5, num: 6, title: "Proiect: Primul meu site pe serverul propriu", icon: "🚀", duration: "90 min", isProject: true,
  objectives: [
    "Să construiască o pagină web HTML cu CSS propriu",
    "Să o publice pe serverul personal (Pi/VM) și s-o acceseze din rețea",
    "Să itereze: modifcă → reîncarcă → observă"
  ],
  explanation: [
    "Un server web este programul care trimite fișierele unei pagini atunci când un browser le cere. În acest proiect lucrezi local, pe Pi sau VM controlat de familie, pentru ca procesul să fie observabil fără expunere publică. HTML descrie structura, iar CSS descrie aspectul.",
    "HTML folosește elemente precum `<h1>` pentru titlu, `<p>` pentru paragraf, `<ul>` pentru listă și `<img>` pentru imagine. CSS poate schimba culori, spații și dimensiuni, dar nu transformă singur o pagină într-un serviciu securizat. Browserul citește fișierele în ordinea cerută.",
    "Construiește pas cu pas: creează `index.html`, verifică titlul în browser, adaugă paragraful, leagă `style.css`, apoi copiază fișierele în directorul servit. Când browserul face cererea, serverul răspunde, iar tu vezi rezultatul. Modifică o singură idee, salvează, reîncarcă și notează schimbarea.",
    "O limită este că pagina locală funcționează doar cât timp serverul și rețeaua sunt disponibile; ea nu devine automat publică. Nu deschide porturi și nu include adresa casei, nume complete, fotografii fără acord sau parole. O imagine poate avea metadata, deci folosește desene ori materiale permise.",
    "Demo-ul „De la fișier text la site live” arată scrii → stilizezi → publici → vizitezi → iterezi. Urmărește fiecare pas pe serverul propriu, apoi verifică în Network că browserul cere HTML, CSS și imaginea, fără să părăsești rețeaua locală."
  ],
  demo: {
    type: "flow",
    title: "De la fișier text la site live",
    steps: [
      { label: "✍️ Scrii", info: "Creezi index.html cu un <h1>Bun venit în lumea mea!</h1> și un paragraf. Doar text simplu!" },
      { label: "🎨 Stilizezi", info: "Adaugi CSS: fundal colorat, font mare, un emoji gigant. Pagina prinde personalitate." },
      { label: "📤 Publici", info: "Copiezi fișierul pe server: scp index.html utilizator@server:/var/www/html/ sau editezi direct cu nano." },
      { label: "🌍 Vizitezi", info: "Deschizi IP-ul serverului din browserul telefonului. PAGINA TA, pe alt ecran, servită de MAȘINA TA." },
      { label: "🔄 Iterezi", info: "Schimbi o culoare, salvezi, F5 — instant. Acum adaugă o poză. Apoi un link. Nu te mai oprești!" }
    ]
  },
  experiment: {
    title: "Site în 30 de minute",
    materials: ["Serverul din N3 funcțional", "Un editor de text", "Un browser"],
    steps: [
      "Scrie un index.html minimal cu un <h1>, un <p> și o listă <ul> despre un personaj sau un club inventat.",
      "Pune-l pe serverul local controlat de familie și vizitează-l doar din dispozitive aflate în aceeași rețea.",
      "Adaugă CSS: body { background: #1a1a2e; color: white; } și un stil pentru h1.",
      "Adaugă o imagine (<img>) și un link către altă pagină făcută de tine (pagina2.html).",
      "Test final: un dispozitiv al familiei aflat pe Wi-Fi deschide site-ul local fără ajutorul tău?"
    ],
    expected: "Site live cu 2 pagini legate, stilizat, accesibil din minim 2 dispozitive."
  },
  project: {
    title: "Portalul familiei",
    goal: "Construiește un mini-site util familiei: meniul săptămânii, regulile casei, poze, glume — gazduit pe serverul tău.",
    steps: [
      "Planifică un portal fictiv sau de familie fără date private: calendar de activități inventate, reguli generale, glume ori desene proprii. Fă o schiță.",
      "Construiește 3+ pagini legate printr-un meniu.",
      "Publică numai în rețeaua locală. Nu deschide porturi, nu configura acces din internet și nu publica adresa IP.",
      "Ține un „jurnal de administrator” o săptămână: vizite, modificări cerute de „clienți”, bug-uri reparate."
    ],
    success: ["3+ pagini cu navigație funcțională", "Folosit real de familie 7 zile", "Jurnal de administrator complet"]
  },
  questions: [
    "Ce se întâmplă cu site-ul tău dacă stingi serverul? Ce înveți despre „disponibilitate”?",
    "Cine poate vedea site-ul acum? Cum l-ai face vizibil din afara casei — și de ce NU facem asta încă?",
    "Ce te-a surprins la reacțiile „clienților” tăi (familia)?",
    "Ce ai adăuga dacă ai avea încă o săptămână?"
  ],
  exercises: [
    "Adaugă o pagină 404 personalizată și amuzantă.",
    "Fă site-ul să arate bine și pe telefon (CSS responsive simplu).",
    "Numără în log câte vizite a avut portalul săptămâna asta."
  ],
  parent: {
    watch: ["Mândria lansării — marcați momentul ca pe o premieră", "Copilul răspunde la „cerințe de client” fără supărare"],
    help: ["Fiți clienți exigenți dar corecți: cereți modificări mici și realiste", "Ajutați cu pozele/conținutul, dar HTML-ul e teritoriul copilului"],
    redflags: ["Copilul vrea pe internet public — amintiți: întâi nivelul 9 (securitate), apoi lumea", "Perfecționism blocant pe design — regula „live urât bate perfect nevăzut”"]
  },
  pass: [
    "Site propriu live pe server, accesibil din rețea",
    "A iterat pe baza feedback-ului real",
    "Explică lanțul complet: fișier → server → browser"
  ]
},
/* ==================== NIVELUL 6 ==================== */
{
  id: "6.1", level: 6, num: 1, title: "Date structurate vs nestructurate", icon: "🗂️", duration: "45 min",
  objectives: [
    "Să distingă datele structurate (tabele) de cele nestructurate (poze, texte)",
    "Să transforme informații haotice într-un tabel",
    "Să explice de ce calculatoarele iubesc structura"
  ],
  explanation: [
    "Datele sunt informații păstrate pentru a fi citite, comparate sau folosite într-o decizie. Datele structurate au un format previzibil, precum un tabel cu coloane și rânduri; datele nestructurate includ fotografii, audio și texte libere, unde informația nu urmează aceleași câmpuri pentru fiecare obiect.",
    "Structura există pentru a face întrebările eficiente. Dacă un catalog are coloanele `titlu`, `gen` și `an`, poți sorta după an sau filtra după gen. Fără o structură comună, calculatorul trebuie să interpreteze fiecare text separat și nu poate compara sigur valori care sunt scrise diferit.",
    "Exemplul se construiește așa: alegi zece jocuri inventate, definești coloanele, completezi un rând pentru fiecare, apoi întrebi „care sunt jocurile de aventură?” și „care este cel mai vechi?”. Rândurile și coloanele fac întrebările repetabile, nu doar memorabile.",
    "O limită este că o fotografie poate avea și metadata structurată, precum data sau dimensiunea, iar un tabel poate conține texte foarte libere. Structurat nu înseamnă automat corect sau complet. Nu transforma date personale ale colegilor în exercițiu fără acord; folosește colecții proprii sau inventate.",
    "Demo-ul „Structurat sau nestructurat?” clasifică exemplele, apoi experimentul arată cum aceleași obiecte devin un tabel. Leagă fiecare alegere de o întrebare pe care tabelul o poate răspunde și verifică dacă răspunsul chiar se poate calcula."
  ],
  demo: {
    type: "classify",
    title: "Structurat sau nestructurat?",
    intro: "Sortează datele după tipul lor!",
    zones: ["📊 Structurat", "🎨 Nestructurat"],
    items: [
      { label: "Lista de note", zone: 0 },
      { label: "Un selfie", zone: 1 },
      { label: "Tabel de prețuri", zone: 0 },
      { label: "O poveste audio", zone: 1 },
      { label: "Orarul școlii", zone: 0 },
      { label: "Un desen liber", zone: 1 },
      { label: "Scorurile unui campionat", zone: 0 },
      { label: "Un meme", zone: 1 }
    ]
  },
  experiment: {
    title: "De la haos la tabel",
    materials: ["Colecția ta de jocuri/cărți/figurine", "Hârtie sau foaie de calcul"],
    steps: [
      "Pune pe masă o colecție proprie sau inventată. Nu folosi liste cu persoane, note, adrese sau locații.",
      "Alege 4 coloane utile (titlu, tip, an, cât de tare e din 10).",
      "Completează tabelul pentru 10 obiecte.",
      "Pune-ți 3 întrebări care ERU grele înainte și acum sunt instant (ex: „care e cel mai vechi?”). Bucură-te de putere."
    ],
    expected: "Un tabel complet cu 10 rânduri + demonstrația că interogările devin instantanee."
  },
  project: {
    title: "Catalogul colecției mele",
    goal: "Cataloghează digital întreaga colecție cu un tabel bine gândit.",
    steps: [
      "Decide coloanele (minimum 5) și justifică fiecare: la ce întrebări ajută?",
      "Completează colecția întreagă (sau minimum 20 de obiecte).",
      "Adaugă o coloană calculată (ex: „vechime” = anul curent − anul).",
      "Prezintă 3 descoperiri surprinzătoare din propriul catalog."
    ],
    success: ["Tabel cu 5+ coloane, 20+ rânduri", "Coloanele au justificare", "3 concluzii extrase din date"]
  },
  questions: [
    "O poză e nestructurată. Dar DATA și LOCA pozei? (Sunt structurate — metadata!)",
    "Cum ar „structura” Spotify o melodie? Ce coloane are?",
    "Ce pierzi când transformi ceva nestructurat în structurat?",
    "De ce nu pot fi căutate ușor toate meme-urile după „ce e în ele”?"
  ],
  exercises: [
    "Structurați împreună frigiderul: tabel cu produs/cantitate/expiră.",
    "Găsește metadata unei poze din telefon (detalii/informații).",
    "Scrie 3 întrebări pe care doar un tabel structurat le poate răspunde rapid."
  ],
  parent: {
    watch: ["Copilul alege coloane UTILE, nu decorative", "Entuziasmul pentru „întrebările care devin ușoare”"],
    help: ["Foaia de calcul (LibreOffice/Excel) e uneltele perfectă aici", "Lăsați copilul să aleagă colecția — motivația e în obiect"],
    redflags: ["Tabel cu coloane nefolositoare — cereți întrebarea pe care o răspunde fiecare coloană"]
  },
  pass: [
    "Clasifică corect 10 tipuri de date",
    "Construiește singur un tabel util din date haotice",
    "Explică metadata cu un exemplu real"
  ]
},
{
  id: "6.2", level: 6, num: 2, title: "Tabele, relații și chei", icon: "🔑", duration: "50 min",
  objectives: [
    "Să explice structura unui tabel: rânduri, coloane, cheie primară",
    "Să lege două tabele printr-o cheie străină",
    "Să evite duplicarea datelor prin relații"
  ],
  explanation: [
    "Un tabel are coloane pentru proprietăți și rânduri pentru înregistrări. O cheie primară este o valoare unică ce identifică un singur rând, de exemplu `id = 17`. Folosește identificatori de proiect, nu CNP-uri, numere de document sau alte date reale ale copiilor.",
    "O cheie străină este o valoare dintr-un tabel care indică cheia primară din alt tabel. În JUCATORI, `id=1` poate identifica personajul Ana; în SCORURI, `id_jucator=1` spune cui aparține scorul. Astfel numele nu este copiat în fiecare scor.",
    "Modelează pas cu pas: 1) identifică tipurile de obiecte, 2) creează un tabel pentru fiecare tip, 3) alege cheia primară, 4) pune cheia străină pe tabelul cu multe exemple, 5) verifică legătura cu o întrebare. Trei scoruri pentru un jucător vor avea aceeași cheie străină.",
    "Confuzia comună este să alegi numele drept cheie; două persoane pot avea același nume, iar un nume se poate schimba. Relațiile reduc duplicarea, dar cer ca cheia străină să indice o cheie existentă. Dacă ștergi un rând referit, trebuie să știi ce se întâmplă cu înregistrările legate.",
    "Demo-ul „Cum se leagă două tabele” urmărește jucătorul, scorurile, săgeata și schimbarea numelui. În experiment, mută degetul de la `id_jucator` la rândul corect și observă de ce modificarea unui singur cartonaș este suficientă."
  ],
  demo: {
    type: "flow",
    title: "Cum se leagă două tabele",
    steps: [
      { label: "👤 JUCATOR", info: "Tabelul jucătorilor: id=1, nume=Ana. id=2, nume=Vlad. Fiecare om o SINGURĂ dată aici." },
      { label: "🎮 SCORURI", info: "Tabelul scorurilor: (id=10, id_jucator=1, joc=Șah, puncte=500). Atenție la id_jucator=1 — cui aparține?" },
      { label: "🔗 Cheia străină", info: "id_jucator=1 e o SĂGEATĂ către rândul Anei. Scorul ei, fără să copiem numele ei!" },
      { label: "➕ Mai multe scoruri", info: "Ana mai are (11, 1, Tetris, 900) și (12, 1, Șah, 650). Trei scoruri, zero copii ale numelui." },
      { label: "✏️ Schimbarea", info: "Ana devine „Ana M.”: modificăm UN rând în JUCATOR. Toate scorurile arată automat corect. Asta e puterea relațiilor!" }
    ]
  },
  experiment: {
    title: "Baza de date de hârtie",
    materials: ["Fișe/cartonașe de două culori", "Pix"],
    steps: [
      "Cartonașe albe = JUCATORI (scrie id și nume pentru 3 personaje imaginare).",
      "Cartonașe colorate = SCORURI (câte 3 per jucător, fiecare cu id_jucator scris).",
      "Joacă rolul calculatorului: „găsește toate scorurile lui Ana” — urmărește săgețile cu degetul.",
      "Schimbă numele unui jucător pe cartonașul lui. Verifică: scorurile încă indică corect? Fără nicio corectură? AȘA funcționează bazele de date."
    ],
    expected: "2 tabele fizice legate prin chei + jocul de interogare manual reușit."
  },
  project: {
    title: "Modelăm o școală",
    goal: "Proiectează pe hârtie baza de date a unei școli: elevi, clase, profesori, note — cu relații corecte.",
    steps: [
      "Modelează o școală imaginară: inventează elevii, profesorii și clasele. Minim 3 tabele.",
      "Pentru fiecare tabel: coloanele + cheia primară.",
      "Desenează săgețile (chei străine): nota → elev, nota → materie, elev → clasă.",
      "Testul suprem: schimbă numele unui profesor. În CÂTE locuri îl modifici? Dacă răspunsul e 1, modelul e bun."
    ],
    success: ["3+ tabele cu chei primare", "Relații desenate corect", "Testul modificării trecut cu 1 singur loc"]
  },
  questions: [
    "De ce e periculos să copiezi numele jucătorului în fiecare rând de scor?",
    "Poate o cheie primară să fie numele? Ce se întâmplă când doi elevi se numesc la fel?",
    "Într-un magazin online, ce tabele legate crezi că există?",
    "O clasă are 30 de elevi. Săgeata merge de la clasă la elevi sau invers? De ce?"
  ],
  exercises: [
    "Modelează o bibliotecă: cărți, cititori, împrumuturi. Desenează săgețile.",
    "Găsește „cheia primară” din viața reală: CNP, serie buletin, număr de inventar.",
    "Repară modelul prost: tabel unic cu numele profesorului repetat pe fiecare notă."
  ],
  parent: {
    watch: ["Copilul simte duplicarea ca pe ceva „urât” instinctiv", "Întreabă singur „dar dacă se schimbă X?”"],
    help: ["Jocul cu cartonașe fizice e esențial — relațiile trebuie văzute cu mâinile întâi", "Arătați-i lista de contacte din telefon: e un tabel cu chei!"],
    redflags: ["Copilul bagă totul într-un singur tabel gigantic — arătați-i problema modificării cu un exemplu concret"]
  },
  pass: [
    "Proiectează 2+ tabele relaționate corect",
    "Explică cheia primară și străină cu exemple proprii",
    "Trece „testul modificării” pe modelul lui"
  ]
},
{
  id: "6.3", level: 6, num: 3, title: "SQL - limbajul bazelor de date", icon: "💬", duration: "60 min",
  objectives: [
    "Să scrie interogări SELECT cu WHERE și ORDER BY",
    "Să folosească INSERT, UPDATE, DELETE cu înțelegere",
    "Să creeze o bază de date SQLite reală și s-o interogheze"
  ],
  explanation: [
    "SQL, Structured Query Language, este limbajul prin care ceri date și modifici tabele. În `SELECT nume, scor FROM jucatori`, `SELECT` spune ce coloane vrei, iar `FROM` spune tabelul. `WHERE` filtrează rânduri, iar `ORDER BY` le sortează pentru a obține un răspuns ușor de citit.",
    "Operațiile principale sunt INSERT pentru adăugare, SELECT pentru citire, UPDATE pentru modificare și DELETE pentru ștergere. Le folosim pentru că o bază poate avea multe rânduri și trebuie să exprimăm întrebarea precis, fără să citim manual tot fișierul.",
    "Exemplul se citește pas cu pas: `SELECT nume, scor` alege coloane, `FROM jucatori` alege sursa, `WHERE scor > 100` elimină rândurile mici, iar `ORDER BY scor DESC` pune scorul cel mai mare primul. Înainte de `UPDATE` sau `DELETE`, rulează un `SELECT` cu același `WHERE` și verifică rezultatul.",
    "Limita și riscul major sunt comenzile fără filtru: `DELETE FROM jucatori` poate șterge toate rândurile. SQLite este potrivit local, dar nu rezolvă singur accesul simultan al unei aplicații mari. În Python folosește parametri precum `WHERE nume = ?`, nu lipi inputul utilizatorului în SQL; lucrează pe date inventate și backup.",
    "Demo-ul „Anatomia unei interogări SELECT” desface comanda în coloane, tabel, filtru, sortare și rezultat. În experiment, apasă mental aceleași etape pentru fiecare query și verifică după modificări că rezultatul corespunde poveștii tale."
  ],
  demo: {
    type: "flow",
    title: "Anatomia unei interogări SELECT",
    steps: [
      { label: "SELECT nume, scor", info: "CE coloane vreau? Pot cere toate cu * sau doar pe cele utile." },
      { label: "FROM jucatori", info: "DIN CE tabel? Baza poate avea zeci de tabele — trebuie să spun din care." },
      { label: "WHERE scor > 100", info: "FILTRUL: doar rândurile care trec testul. Ca un site de căutare pentru date." },
      { label: "ORDER BY scor DESC", info: "SORTAREA: DESC = de la mare la mic. ASC = invers." },
      { label: "📤 Rezultat", info: "Un mini-tabel cu exact ce-am cerut. Din 10.000 de rânduri → cele 5 care contează, instant." }
    ]
  },
  experiment: {
    title: "Prima bază de date reală",
    materials: ["Terminal", "sqlite3 (sau aplicația DB Browser for SQLite)"],
    steps: [
      "Creează o bază de test: sqlite3 jocuri-test.db, apoi CREATE TABLE jucatori (id INTEGER PRIMARY KEY, nume TEXT, nivel INTEGER, scor INTEGER);. Fă imediat o copie: cp jocuri-test.db jocuri-test-backup.db.",
      "INSERT INTO jucatori (nume, nivel, scor) VALUES ('Ada', 3, 450); — adaugă 5 personaje inventate.",
      "SELECT * FROM jucatori; — vezi totul. Apoi SELECT nume FROM jucatori WHERE nivel > 2;",
      "Rulează mai întâi SELECT * FROM jucatori WHERE nume = 'Ada';, apoi UPDATE jucatori SET scor = 500 WHERE nume = 'Ada'; și verifică din nou cu SELECT.",
      "Adaugă un rând numit 'Test', verifică-l cu SELECT și apoi rulează DELETE FROM jucatori WHERE nume = 'Test';. Păstrează backupul; fără WHERE, DELETE poate șterge toate rândurile."
    ],
    expected: "Bază de date funcțională cu 5 rânduri, interogată cu 4+ comenzi SQL diferite."
  },
  project: {
    title: "Baza de date a lumii mele",
    goal: "Creează o bază cu 2 tabele relaționate despre ceva ce te pasionează + 10 interogări cu povești.",
    steps: [
      "Alege subiectul (jocuri, cărți, dinozauri...) și proiectează 2 tabele legate (ex: jocuri + realizări).",
      "Populează cu minim 10 rânduri reale de cunoștințe.",
      "Scrie 10 întrebări interesante și tradu-le în SQL. Salvează fiecare cu rezultatul ei.",
      "Prezintă familiei „interviul cu baza de date”: ei pun întrebarea, tu scrii SQL-ul live!"
    ],
    success: ["2 tabele relaționate, populate", "10 interogări salvate cu rezultate", "Sesiune live de interogări pentru public"]
  },
  questions: [
    "De ce e DELETE fără WHERE cea mai periculoasă comandă din lume?",
    "Cum ai găsi „al treilea cel mai bun jucător” doar cu SQL?",
    "De ce scriem comenzile SQL cu MAJUSCULE? (Tradiție + lizibilitate — SQL nu cere asta!)",
    "Ce s-ar întâmpla dacă doi oameni fac UPDATE pe același rând în același timp?"
  ],
  exercises: [
    "Scrie SELECT care găsește toți jucătorii cu scor între 100 și 300.",
    "Adaugă o coloană nouă tabelului (ALTER TABLE) și completeaz-o cu UPDATE.",
    "Scrie interogarea care răspunde: „câți jucători sunt pe fiecare nivel?” (COUNT + GROUP BY)."
  ],
  parent: {
    watch: ["Copilul scrie SQL pentru întrebările LUI, nu doar exerciții", "Precauția instinctivă la UPDATE/DELETE (verifică cu SELECT întâi!)"],
    help: ["DB Browser for SQLite oferă interfață vizuală — excelentă ca rampă", "Jucați „interviul live”: voi puneți întrebarea, copilul scrie SQL-ul"],
    redflags: ["Copilul execută UPDATE/DELETE fără WHERE — instalați ritualul: SELECT cu același WHERE ÎNTÂI", "Memorează sintaxa fără să priceapă filtrul — reveniți la „site de căutare”"]
  },
  pass: [
    "Scrie singur SELECT cu WHERE + ORDER BY",
    "Folosește corect INSERT/UPDATE/DELETE cu WHERE",
    "A construit o bază cu 2 tabele legate și o interoghează fluent"
  ]
},
{
  id: "6.4", level: 6, num: 4, title: "Cloud - demistificat", icon: "☁️", duration: "45 min",
  objectives: [
    "Să explice cloud-ul ca „calculatoare reale în centre de date”",
    "Să compare rularea locală vs pe server propriu vs cloud",
    "Să înțeleagă avantajele și costurile cloud-ului"
  ],
  explanation: [
    "Cloud-ul este folosirea unor servicii de calcul oferite prin rețea de calculatoare reale din centre de date. Stocarea în cloud înseamnă că fișierele ajung pe serverele unui furnizor; puterea de calcul înseamnă că programul rulează acolo, nu doar pe laptopul tău. „Norul” este o metaforă, nu un loc magic.",
    "Îl folosim pentru spațiu, disponibilitate și scalare, adică posibilitatea de a crește resursele când apar mai mulți utilizatori. Furnizorul întreține clădirea, rețeaua și hardware-ul, dar tu rămâi responsabil de conturi, permisiuni și alegerile de date. Serviciul poate avea cost, reguli și limite.",
    "Compară aceeași aplicație în trei locuri: local, pe serverul familiei și în cloud. Pentru fiecare întreabă: cine administrează hardware-ul, cine poate vedea datele, cât costă, ce se întâmplă fără internet și unde este backup-ul. Această comparație transformă metafora într-o decizie concretă.",
    "O limită este că cloud-ul nu elimină întreruperile, distanța sau riscul de pierdere a contului. Un serviciu gratuit poate fi plătit prin reclame sau folosirea datelor, iar sincronizarea nu este totuna cu o copie de siguranță. Nu încărca poze private, parole sau date de familie în experiment.",
    "Demo-ul „Cloud: adevărat sau fals?” înlocuiește norul cu centre de date, costuri și responsabilități. În experiment, completează tabelul pentru local/Pi/cloud și leagă fiecare observație de avantajul sau limita arătată de quiz."
  ],
  demo: {
    type: "quiz",
    title: "Cloud: adevărat sau fals?",
    questions: [
      { q: "„Datele din cloud plutesc undeva deasupra noastră.”", opts: ["Adevărat", "Fals - sunt pe servere fizice în centre de date"], correct: 1, why: "Cloud = calculatoare reale, clădiri reale, cabluri reale. Norul e doar metafora de marketing." },
      { q: "Avantajul principal al cloud-ului este...", opts: ["Închiriezi putere de calcul fără să cumperi și să întreții hardware", "E mereu gratuit"], correct: 0, why: "Plătești doar ce folosești și lași mentenanța pe seama altora. Dar GRATUIT nu e — cineva plătește mereu." },
      { q: "Dacă un serviciu cloud e „gratuit” pentru tine...", opts: ["E un cadou", "Probabil plătești cu datele tale sau cu atenția ta"], correct: 1, why: "Serverele costă. Dacă nu plătești cu bani, plătești altfel. Întrebarea sănătoasă: cum câștigă EI bani?" },
      { q: "Serverul tău Raspberry Pi de acasă e un fel de...", opts: ["Mini-cloud personal", "Nu are legătură cu cloud-ul"], correct: 0, why: "Exact! Ai construit un cloud minuscul: un server care servește date prin rețea. Principiul e identic." }
    ]
  },
  experiment: {
    title: "Aceeași aplicație, trei locuri",
    materials: ["Calculatorul tău", "Serverul Pi/VM", "(opțional) un serviciu cloud gratuit"],
    steps: [
      "Rulează un mic server de fișiere doar pentru rețeaua locală, de exemplu python3 -m http.server --bind 127.0.0.1. Accesează-l doar din propriul browser: LOCAL.",
      "Rulează același exemplu pe Pi sau VM local, cu acordul administratorului. Compară responsabilitățile, fără a-l publica pe internet.",
      "Compară în tabel: viteză, cost, cine-l repară, cine vede datele, funcționează fără internet?",
      "Discuție finală cu exemple fictive: unde ai păstra o colecție importantă și de ce ai avea o copie de rezervă?"
    ],
    expected: "Tabel comparativ complet + decizie argumentată pentru un caz real."
  },
  project: {
    title: "Ghidul cloud al familiei",
    goal: "Creează un ghid vizual care explică familiei ce e cloud-ul și unde sunt datele noastre.",
    steps: [
      "Folosește trei servicii inventate pentru inventar: poze, documente și jocuri; nu cere parole, ecrane de cont sau liste de fișiere ale familiei.",
      "Pentru fiecare, imaginează ce tip de date are, costul posibil și ce s-ar întâmpla dacă serviciul nu ar fi disponibil.",
      "Desenează o hartă de exemplu: calculator local / server local / cloud.",
      "Recomandă o regulă de backup: ce e CRITIC și trebuie să existe în 2 locuri?"
    ],
    success: ["Inventar complet al serviciilor cloud", "Hartă vizuală a datelor", "Regulă de backup adoptată de familie"]
  },
  questions: [
    "De ce au centrele de date nevoie de atâta răcire?",
    "Ce riscuri are „toată viața mea digitală la o singură companie”?",
    "Când e Pi-ul tău mai bun decât cloud-ul? Când e invers?",
    "Cine „deține” pozele tale din cloud, legal vorbind? Citește cu un părinte termenii unui serviciu."
  ],
  exercises: [
    "Calculează: cât costă pe an stocarea a 200 GB de poze în 2 servicii diferite?",
    "Găsește pe hartă unde sunt centrele de date ale unui mare provider. Cel mai apropiat de România?",
    "Explică bunicii ce e cloud-ul fără să folosești cuvântul „nor”."
  ],
  parent: {
    watch: ["Copilul întreabă singur „cum câștigă ei bani?” la servicii gratuite", "Conștiința costurilor reale (electricitate, abonamente)"],
    help: ["Faceți împreună inventarul cloud al familiei — veți fi surprinși amândoi", "Discuția despre backup e oportunitate de a salva pozele de familie ACUM"],
    redflags: ["Copilul crede că „gratuit” înseamnă fără preț — aprofundați modelul reclame/date", "Vrea să șteargă tot din cloud de frică — calibrați: risc vs utilitate, nu panică"]
  },
  pass: [
    "Explică cloud-ul fizic, fără metafore magice",
    "Compară argumentat local/self-hosted/cloud",
    "A aplicat regula de backup pe date reale ale familiei"
  ]
},
{
  id: "6.5", level: 6, num: 5, title: "Proiect: Catalog de jocuri cu bază de date", icon: "🎮", duration: "2×60 min", isProject: true,
  objectives: [
    "Să construiască o aplicație Python completă care folosește SQLite",
    "Să implementeze toate operațiile CRUD dintr-un meniu interactiv",
    "Să creeze un raport cu statistici din date"
  ],
  explanation: [
    "Vei construi un catalog local cu Python și SQLite. Python conduce meniul și validează alegerile, iar SQLite păstrează tabelul în `catalog.db`, astfel încât datele rămân după închiderea programului. CRUD înseamnă Create, Read, Update, Delete: adaugi, citești, modifici și ștergi înregistrări.",
    "Aplicația are roluri separate: meniul citește opțiunea, funcția de date pregătește SQL-ul, baza execută comanda, iar programul afișează rezultatul. Parametrul `?` ține valoarea separată de instrucțiune și este un obicei important pentru siguranță. Folosește titluri fictive și nu colecta date personale.",
    "Exemplul se construiește incremental: creezi tabelul, inserezi un joc, rulezi `SELECT`, cauți cu `WHERE`, modifici cu `UPDATE`, ceri confirmare înainte de `DELETE`, apoi verifici. După ce închizi și redeschizi programul, rândurile încă există deoarece SQLite le-a scris pe disc.",
    "Limita este că un fișier SQLite local nu este automat o soluție pentru sute de utilizatori simultan. Un `DELETE` greșit poate pierde date, iar un backup neverificat poate să nu ajute. Fă o copie înaintea modificărilor mari, testează restaurarea într-un alt folder și nu lipi texte direct în SQL.",
    "Demo-ul „Cum colaborează Python cu baza de date” arată meniul → Python → SQLite → căutare → raport. Folosește fiecare etapă ca reper în experiment, apoi verifică în proiect că statisticile COUNT, AVG și GROUP BY spun aceeași poveste ca rândurile catalogului."
  ],
  demo: {
    type: "flow",
    title: "Cum colaborează Python cu baza de date",
    steps: [
      { label: "📋 Meniul", info: "Programul arată: 1-Adaugă 2-Caută 3-Notează 4-Statistici 0-Ieșire. Utilizatorul alege." },
      { label: "🐍 Python", info: "Alegerea 1 → input() pentru titlu/gen/an → Python construiește comanda INSERT." },
      { label: "🗄️ SQLite", info: "Baza execută INSERT și salvează pe disc, în fișierul catalog.db. Permanent!" },
      { label: "🔍 Căutarea", info: "Alegerea 2 → input genul → SELECT * FROM jocuri WHERE gen = ? → rezultate afișate frumos." },
      { label: "📊 Raportul", info: "Alegerea 4 → COUNT, AVG: „ai 12 jocuri, media notelor 8.3, genul favorit: aventură”. Datele vorbesc!" }
    ]
  },
  experiment: {
    title: "Skeletul aplicației",
    materials: ["Python 3 (modulul sqlite3 e inclus)", "Editor de cod", "Jurnalul"],
    steps: [
      "Scrie funcția de conectare și CREATE TABLE jocuri (id, titlu, gen, an, nota) în `catalog-test.db`. Testează că fișierul apare și fă o copie `catalog-test-backup.db`.",
      "Adaugă funcția adauga() cu input-uri și INSERT parametrizat. Rulează, apoi verifică baza cu sqlite3 din terminal — rândul fictiv este acolo?",
      "Adaugă afiseaza_toate() cu SELECT * și un for care printează frumos fiecare rând.",
      "Construiește bucla meniului (while True + input + if/elif). Primul program complet al tău!",
      "TESTE: adaugă 5 jocuri fictive, închide programul, redeschide-l și verifică rândurile. Testează și restaurarea copiei într-un dosar separat."
    ],
    expected: "Aplicație cu meniu care adaugă și listează jocuri, cu date persistente."
  },
  project: {
    title: "Catalogul complet + raportul analistului",
    goal: "Aplicația finală cu toate operațiile + un raport de statistici prezentat familiei.",
    steps: [
      "Completează CRUD: caută (WHERE), notează (UPDATE), șterge (DELETE cu confirmare: „sigur? da/nu”).",
      "Adaugă meniul Statistici: câte jocuri, media notelor, cel mai vechi/nou, jocuri pe genuri (GROUP BY).",
      "Populează cu 15+ jocuri inventate sau cu titluri despre care poți vorbi public; nu adăuga nume, conturi sau alte date despre prieteni.",
      "Prezintă familiei: demonstrezi aplicația live + raportul analistului („ce spune baza de date despre gusturile noastre?”)."
    ],
    success: ["CRUD complet și testat", "3+ statistici funcționale", "Prezentare live fără erori fatale"]
  },
  questions: [
    "De ce e baza de date mai bună decât o listă Python salvată cu print?",
    "Ce s-ar întâmpla dacă doi prieteni ar folosi catalogul simultan pe același fișier?",
    "Cum ai adăuga funcția „împrumut jocul unui prieten”? Ce coloane/tabele noi?",
    "Unde e limita SQLite? Când ai nevoie de o bază de date „mare”?"
  ],
  exercises: [
    "Adaugă sortarea: listează jocurile după notă, descrescător.",
    "Adaugă căutare parțială: WHERE titlu LIKE '%zelda%'.",
    "Scrie o funcție export() care salvează catalogul ca fișier text lizibil."
  ],
  parent: {
    watch: ["Copilul testează fiecare funcție imediat după ce o scrie", "Confirmarea la DELETE — reflex de siguranță a datelor"],
    help: ["La blocaje, întrebați: „ce ar trebui să facă SQL-ul aici?” — separați problema SQL de problema Python", "Fiți primul utilizator real: cereți o funcție nouă și urmăriți cum negociază"],
    redflags: ["Copilul scrie 200 de linii fără să ruleze nimic — impuneți regula: funcție nouă = test imediat", "SQL injection nu e relevantă încă, dar obișnuiți-l cu parametri (?) în loc de lipire de stringuri — bun obicei din prima zi"]
  },
  pass: [
    "Aplicație CRUD completă, funcțională, cu persistență",
    "Raport cu statistici generate din SQL",
    "Explică fiecare interogare din codul propriu"
  ]
},
/* ==================== NIVELUL 7 ==================== */
{
  id: "7.1", level: 7, num: 1, title: "Tensiune, curent, rezistență", icon: "⚡", duration: "50 min",
  objectives: [
    "Să explice tensiunea, curentul și rezistența cu analogia apei",
    "Să aplice legea lui Ohm (U = R × I) pe exemple simple",
    "Să măsoare tensiunea unei baterii cu un multimetru"
  ],
  explanation: [
    "Tensiunea este diferența de energie dintre două puncte, măsurată în volți (V), iar curentul este trecerea sarcinilor prin circuit, măsurată în amperi (A). Rezistența, măsurată în ohmi (Ω), limitează această trecere. Ca analogie, bateria seamănă cu o pompă, firele cu un furtun, tensiunea cu presiunea, iar curentul cu debitul; analogia ajută, dar electricitatea nu este apă.",
    "Legea lui Ohm leagă mărimile prin U = R × I. Dacă știm tensiunea și rezistența, curentul este I = U / R; dacă mărim rezistența, curentul scade. Un LED este o diodă care produce lumină și are nevoie de limitare, de aceea o rezistență se pune în serie. Nu aflăm limita prin încercări care ard componente.",
    "Exemplu lucrat: pentru o baterie de 5 V, un LED care are nevoie de aproximativ 2 V și 0,01 A lasă rezistenței circa 3 V. Calculăm R = 3 / 0,01 = 300 Ω și alegem o valoare apropiată, de 330 Ω. Verificăm polaritatea, legăm bateria - rezistență - LED - retur, apoi măsurăm înainte de a alimenta.",
    "Greșeala frecventă este confundarea tensiunii cu curentul sau măsurarea curentului punând multimetrul direct între borne, ceea ce poate produce un scurtcircuit. O altă limită este că rezistențele reale au toleranțe, iar bateria își schimbă tensiunea. Lucrăm doar cu baterii, USB și module de joasă tensiune, niciodată cu prize sau instalații de 230 V.",
    "În demo, pompa, furtunul, strâmtoarea și morișca devin bateria, firele, rezistența și LED-ul. Urmărește calculul 9 V / 450 Ω = 0,02 A, apoi verifică pe banc cum o verigă ruptă oprește circuitul. Demo-ul pregătește întrebarea „ce valoare ar trebui să văd?” înainte de experiment."
  ],
  demo: {
    type: "flow",
    title: "Circuitul = furtunul de grădină",
    steps: [
      { label: "🔋 Bateria = pompa", info: "Bateria e pompa care crează presiune (tensiune). O baterie de 9V împinge mai tare decât una de 1.5V." },
      { label: "🚿 Furtunul = firele", info: "Firele sunt furtunul prin care curge apa (curentul). Fără furtun închis la loc, apa nu circulă — circuitul trebuie ÎNCHIS." },
      { label: "🌀 Rezistența = strâmtoarea", info: "O rezistență e o îngustare a furtunului: limitează curentul. Fără ea, LED-ul primește prea mult și... poc." },
      { label: "💡 LED-ul = morișca", info: "LED-ul e ca o morișcă de apă: curentul care trece o învârte... adică o aprinde. Curent prea mare = morișca se rupe." },
      { label: "📏 Legea lui Ohm", info: "U = R × I. Baterie 9V, rezistență 450Ω → curent I = 9/450 = 0.02A = 20mA. Fix ce-i trebuie unui LED!" }
    ]
  },
  experiment: {
    title: "Primul circuit și prima măsurătoare",
    materials: ["Baterie 9V sau 2×AA", "LED", "Rezistență 220-470Ω", "Fire", "Multimetru (20-50 lei — investiție de laborator)"],
    steps: [
      "Măsoară bateria cu multimetrul (modul V⎓): ce zice eticheta vs ce măsori real?",
      "Construiește: baterie + rezistență + LED (piciorul lung = plus!). Circuit închis → LED-ul se aprinde!",
      "Compară pe hârtie calculul cu și fără rezistență; nu alimenta LED-ul fără rezistență. Acum poți explica de ce componenta de protecție este obligatorie.",
      "Măsoară curentul prin circuit (modul A⎓, în serie) și verifică legea lui Ohm cu numere reale.",
      "Deschide circuitul (un fir desfacut): LED mort. Circuitul e un lanț — o verigă ruptă oprește TOTUL."
    ],
    expected: "LED aprins corect cu rezistență + o măsurătoare reală de tensiune și una de curent, notate în jurnal."
  },
  project: {
    title: "Afișul legii lui Ohm",
    goal: "Creează un afiș de laborator care explică U = R × I cu analogia apei și 3 exemple calculate.",
    steps: [
      "Desenează circuitul ca furtun: pompă, furtun, strâmtoare, morișcă.",
      "Scrie formula și triunghiul magic U-R-I (acoperă ce cauți și vezi formula).",
      "Calculează 3 exemple reale: ce rezistență îmi trebuie pentru LED la 5V? La 9V? La 12V?",
      "Lipește afișul deasupra bancului de lucru — va fi consultat la fiecare proiect viitor."
    ],
    success: ["Analogia desenată corect", "3 calcule corecte verificate", "Afiș expus în laborator"]
  },
  questions: [
    "De ce moare un LED fără rezistență, explicat cu furtunul?",
    "Ce se întâmplă cu curentul dacă dublezi rezistența? (Se înjumătățește!)",
    "De ce e pasărea pe firul de înaltă tensiune teafără? (Circuitul nu se închide prin ea!)",
    "Curentul sau tensiunea — care e mai periculoasă pentru oameni? Discutați cu un adult."
  ],
  exercises: [
    "Calculează: U=5V, R=250Ω. Cât e I?",
    "Măsoară 3 baterii din casă și compară eticheta cu realitatea.",
    "Explică de ce un fir rupt oprește tot circuitul, folosind analogia apei."
  ],
  parent: {
    watch: ["Respectul pentru regula baterii-vs-priză fără reamintiri", "Copilul măsoară înainte să calculeze — spirit experimental"],
    help: ["Un multimetru ieftin + kit de LED-uri/rezistențe/breadboard (~100 lei) deschid tot nivelul 7", "Verificați ÎMPREUNĂ primele circuite până prinde reflexele"],
    redflags: ["Orice curiozitate spre priză/prelungitoare desfăcute — discuție serioasă + canalizare spre circuite sigure", "Copilul sare peste rezistență „că merge și așa” — arătați-i un LED ars (experiment controlat cu supraveghere)"]
  },
  pass: [
    "Explică cele 3 mărimi cu analogia apei",
    "Calculează și măsoară un circuit LED real",
    "Recitește și respectă regulile de siguranță"
  ]
},
{
  id: "7.2", level: 7, num: 2, title: "Breadboard, butoane și componente de bază", icon: "🧱", duration: "50 min",
  objectives: [
    "Să folosească un breadboard fără lipituri",
    "Să cunoască: LED, rezistență, buton, condensator, buzzer",
    "Să citească schema unui circuit simplu"
  ],
  explanation: [
    "Breadboardul este o placă de prototipare fără lipire: găurile sunt unite în grupuri metalice, de obicei câte cinci, iar șinele laterale distribuie alimentarea. LED-ul transformă energia în lumină, rezistența limitează curentul, butonul deschide sau închide circuitul, buzzerul produce sunet, iar condensatorul stochează temporar sarcină. Verificăm traseul intern al plăcii, fiindcă modelele diferă.",
    "Imaginează-ți o gară cu peroane conectate: două picioare puse pe același peron sunt legate, iar picioarele puse pe peroane diferite nu comunică. Schema este harta acestei gări. Polaritatea LED-ului și a condensatorului contează; rezistența nu are polaritate, dar poziția ei în serie contează pentru protecție.",
    "Exemplu pas cu pas: 1) desenăm plusul către buton, 2) ieșim din buton spre anodul LED-ului prin rezistență de 330 Ω, 3) legăm catodul la minus, 4) verificăm fiecare rând cu multimetrul, 5) alimentăm la 5 V și apăsăm butonul. Dacă LED-ul nu se aprinde, izolăm cauza: polaritate, rând greșit sau contact slab.",
    "Greșeala tipică este presupunerea că toate găurile vecine sunt conectate sau că șina laterală continuă neîntrerupt. O limită este că breadboardul nu este potrivit pentru curenți mari, vibrații sau montaje definitive. Folosim doar baterii, USB și componente de joasă tensiune; nu introducem fire legate la priză și nu forțăm piesele.",
    "Demo-ul „Cunoști echipa?” verifică rolul fiecărei componente, iar circuitul cu buton arată diferența dintre circuit deschis și închis. După fiecare răspuns, urmărește pe o schemă drumul curentului și reconstruiește-l pe breadboard. Quizul devine astfel puntea dintre vocabular, montaj și depanare."
  ],
  demo: {
    type: "quiz",
    title: "Cunoști echipa?",
    questions: [
      { q: "Pe breadboard, găurile dintr-un rând de 5 sunt...", opts: ["Conectate între ele pe dedesubt", "Izolate unele de altele"], correct: 0, why: "Rândurile de 5 sunt șine comune — de aceea poți înfige LED-ul și firul în același rând și se conectează singure." },
      { q: "Piciorul lung al LED-ului se conectează...", opts: ["La plus (+)", "La minus (−)"], correct: 0, why: "LED-ul are polaritate: anodul (lung) la plus, catodul (scurt) la minus. Invers — nu se aprinde, dar nu se arde." },
      { q: "Ce componentă stochează puțin curent ca un mini-acumulator?", opts: ["Rezistența", "Condensatorul"], correct: 1, why: "Condensatorul se încarcă și se descarcă — ca un rezervor mic de apă în sistemul nostru de furtunuri." },
      { q: "Butonul într-un circuit e de fapt...", opts: ["Un întrerupător temporar", "O rezistență variabilă"], correct: 0, why: "Apăsat = circuit închis, liber = circuit deschis. Cel mai simplu senzor din lume: simte DEGETUL." }
    ]
  },
  experiment: {
    title: "Circuitul cu buton",
    materials: ["Breadboard", "LED + rezistență 220Ω", "Buton", "Baterie 5V/9V", "Fire"],
    steps: [
      "Construiește circuitul LED din lecția trecută, dar pe breadboard. Verifică: se aprinde?",
      "Adaugă butonul ÎN SERIE cu LED-ul. Acum lumina se aprinde doar cât apeși. Tocmai ai construit un INPUT fizic!",
      "Experimentul morse: trimite S-O-S cu butonul (3 scurte, 3 lungi, 3 scurte). Poate cineva „citii” lumina?",
      "Adaugă un buzzer în paralel cu LED-ul: sunet + lumină la o apăsare. Ai inventat soneria."
    ],
    expected: "Circuit cu buton funcțional pe breadboard + mesaj morse transmis și recepționat."
  },
  project: {
    title: "Soneria casei",
    goal: "Construiește o sonerie completă (buton + LED + buzzer) și desenează-i schema corectă cu simboluri standard.",
    steps: [
      "Construiește circuitul pe breadboard și testează-l temeinic.",
      "Desenează schema: baterie, buton, LED+rezistență, buzzer — cu simbolurile corecte din manual.",
      "Cere unui părinte să reconstruiască circuitul URMÂND DOAR SCHEMA ta. Funcționează? Schema e bună.",
      "Bonus: carcasează soneria într-o cutie de carton decorată."
    ],
    success: ["Sonerie funcțională", "Schemă corectă cu simboluri standard", "Un alt om a reconstruit doar din schemă"]
  },
  questions: [
    "De ce e breadboardul mai bun decât lipitura pentru învățat? Când e lipitura mai bună?",
    "Ce componente din echipă au polaritate? De ce contează?",
    "Un buton e input sau output, în limbajul nostru IPO?",
    "Cum ai face ca LED-ul să rămână aprins DUPĂ ce ridici degetul? (Indiciu: condensatorul!)"
  ],
  exercises: [
    "Desenează schema circuitului buton→LED din memorie.",
    "Construiește circuitul „2 butoane în serie = poarta AND fizică” din nivelul 2!",
    "Identifică 5 componente într-un aparat vechi desfăcut (cu adult)."
  ],
  parent: {
    watch: ["Copilul verifică polaritatea SINGUR înainte de alimentare", "Răbdarea la circuite care nu merg din prima (fir în gaura greșită = clasic)"],
    help: ["Greșeala clasică: firul pus în rândul greșit — învățați-l să urmărească șinele cu degetul", "Fotografiați fiecare circuit reușit pentru portofoliu"],
    redflags: ["Copilul forțează componentele în breadboard — picioarele îndoite nu mai fac contact bun", "Schema desenată după ureche — cereți reconstrucția de către altcineva ca test"]
  },
  pass: [
    "Construiește singur 3 circuite pe breadboard",
    "Citește și desenează scheme cu simboluri corecte",
    "Explică rolul fiecărei componente din echipă"
  ]
},
{
  id: "7.3", level: 7, num: 3, title: "Microcontrolere: Arduino și ESP32", icon: "🎛️", duration: "60 min",
  objectives: [
    "Să explice ce e un microcontroler și cum diferă de un calculator",
    "Să scrie și să încarce primul program pe Arduino/ESP32 (Blink)",
    "Să înțeleagă ciclul: scriu cod → încarc → rulează pe hardware real"
  ],
  explanation: [
    "Un microcontroler este un calculator mic, cu procesor, memorie și pini de intrare-ieșire, proiectat pentru control fizic. Un pin poate citi un buton sau un senzor și poate comanda un LED ori un driver. Arduino UNO este o placă de învățare simplă, iar ESP32 este un microcontroler cu Wi-Fi și Bluetooth; niciunul nu este sursă de putere pentru motoare mari.",
    "Analogia este un dirijor: placa nu împinge energia prin instrumente, ci dă semnale ordonate. Calculatorul compilează partitura, USB-ul o transportă, memoria plăcii o păstrează, iar microcontrolerul o execută după scoaterea cablului. Alimentarea rămâne limitată la baterii, USB și module de joasă tensiune.",
    "Exemplu lucrat: 1) alegem pinul 2 ca ieșire cu pinMode(2, OUTPUT), 2) scriem digitalWrite(2, HIGH), 3) așteptăm 500 ms, 4) scriem LOW, 5) așteptăm încă 500 ms și repetăm. setup() rulează o dată, loop() continuu. Încărcăm, observăm clipirea, schimbăm durata și comparăm rezultatul.",
    "Greșeala obișnuită este alegerea plăcii sau portului greșit în IDE și concluzia că programul nu funcționează. O limită este memoria mică și numărul de pini; delay() poate bloca alte sarcini. Nu legăm motoare direct la pini, nu folosim tensiuni necunoscute și nu modificăm alimentarea fără adult.",
    "Demo-ul „De la cod la lumină reală” urmărește traseul scrie - încarcă - setup - loop - hardware. Oprește-te la fiecare pas și cere copilului să prezică ce se va vedea înainte de a apăsa butonul. Predicția și observația leagă editorul de LED-ul care clipește."
  ],
  demo: {
    type: "flow",
    title: "De la cod la lumină reală",
    steps: [
      { label: "💻 Scrii codul", info: "În Arduino IDE scrii: setup() rulează O DATĂ la pornire, loop() rulează LA INFINIT. Exact bucla noastră din programare!" },
      { label: "🔌 Încarci", info: "Prin cablul USB, codul compilat zboară din calculator în memoria plăcii. Din acest moment, placa e independentă." },
      { label: "🧠 setup()", info: "pinMode(2, OUTPUT) — „pinul 2 va fi o ieșire”. Spui microcontrolerului cum să-și folosească picioarele." },
      { label: "🔁 loop()", info: "digitalWrite(2, HIGH) → delay(500) → digitalWrite(2, LOW) → delay(500). Aprinde, așteaptă, stinge, așteaptă. La infinit." },
      { label: "💡 MAGIA", info: "Scoți cablul USB, alimentezi placa din baterie. LED-ul clipește SINGUR. Codul tău trăiește acum în hardware!" }
    ]
  },
  experiment: {
    title: "Blink + variațiuni",
    materials: ["Arduino UNO sau ESP32", "Cablu USB", "Arduino IDE instalat", "LED + rezistență (sau LED-ul integrat al plăcii)"],
    steps: [
      "Instalează Arduino IDE, conectează placa, selectează modelul și portul.",
      "Deschide exemplul File → Examples → Basics → Blink și încarcă-l. Privește LED-ul. TU ai făcut asta.",
      "Modifică delay-urile: clipire rapidă, apoi lentă, apoi S-O-S în morse. Fiecare schimbare = reîncărcare = bucla de feedback a inginerului.",
      "Adaugă al doilea LED pe alt pin și fă-le să clipească alternativ (semafor!).",
      "Provocare: scrie programul care clipește numele tău în morse."
    ],
    expected: "Blink funcțional + 2 variațiuni proprii + înțelegerea setup/loop."
  },
  project: {
    title: "Semaforul inteligent",
    goal: "Construiește un semafor cu 3 LED-uri (roșu/galben/verde) cu temporizări realiste.",
    steps: [
      "Planifică secvența pe hârtie: cât stă fiecare culoare? Ce tranziții sunt legale?",
      "Conectează 3 LED-uri pe 3 pini, fiecare cu rezistența lui.",
      "Programează secvența completă: verde → galben → roșu → (roșu+galben) → verde.",
      "Extensie: adaugă un BUTON de pieton — verdele mașinilor se întrerupe la apăsare. Primul tău sistem interactiv!"
    ],
    success: ["Semafor cu 3 culori și temporizări", "Buton de pieton funcțional", "Cod explicat linie cu linie"]
  },
  questions: [
    "De ce are microcontrolerul nevoie de loop() la infinit, dar programul tău de catalog nu?",
    "Ce dispozitive din casă au probabil un microcontroler? Listează 5.",
    "Cât durează un delay(1000)? Cum ai face o pauză de 2.5 secunde?",
    "De ce învățăm pe hardware real și nu doar simulator? Ce înveți diferit?"
  ],
  exercises: [
    "Scrie codul pentru 2 LED-uri care clipesc alternativ la fiecare 300ms.",
    "Fă LED-ul să pulsing crescător: clipiri din ce în ce mai rapide, apoi reset.",
    "Numără pinii plăcii tale și marchează care sunt digitali vs analogici."
  ],
  parent: {
    watch: ["Fața copilului la primul Blink — e momentul de aur, sărbătoriți-l", "Copilul modifică delay-urile ÎNAINTE să i se sugereze"],
    help: ["Un kit Arduino starter (~150-250 lei) include tot ce trebuie pentru tot nivelul 7-8", "La erori de încărcare: verificați portul și modelul plăcii — 90% din probleme sunt aici"],
    redflags: ["Copilul copiază proiecte complexe de pe net fără să înțeleagă Blink — reveniți la bază", "Frustrare la erori de compilare — erorile Arduino sunt criptice; citiți-le împreună cu voia tare"]
  },
  pass: [
    "Încarcă și modifică singur un program pe placă",
    "Explică setup() vs loop() și pinMode/digitalWrite/delay",
    "Semafor + buton de pieton funcțional"
  ]
},
{
  id: "7.4", level: 7, num: 4, title: "Senzori - simțurile mașinilor", icon: "🌡️", duration: "60 min",
  objectives: [
    "Să explice senzorul ca „organ de simț” al circuitului",
    "Să citească valori de la un senzor (lumină/temperatură) pe Serial Monitor",
    "Să construiască o decizie bazată pe senzor (dacă e întuneric → LED)"
  ],
  explanation: [
    "Un senzor este o componentă care transformă o mărime fizică într-un semnal citibil. LDR-ul reacționează la lumină, termistorul la temperatură, iar senzorul ultrasonic la timpul ecoului. Senzorul nu este un ochi perfect: oferă o măsurare influențată de poziție, zgomot, materiale, cabluri și alimentare.",
    "Imaginează-ți un paznic care nu spune „întuneric”, ci arată un bilet cu un număr. Programul compară numărul cu un prag și decide. Pentru o lampă, măsurăm camera luminată, camera întunecată și lanterna; alegem pragul dintre ele, nu îl inventăm din memorie.",
    "Exemplu pas cu pas: 1) LDR-ul este montat într-un divizor, 2) analogRead(A0) produce 280, 3) regula verifică 280 < 300, 4) condiția este adevărată, 5) LED-ul se aprinde, iar Serial Monitor notează `lumina=280, LED=aprins`. Repetăm cu senzorul acoperit.",
    "Greșeala frecventă este tratarea unei singure citiri ca adevăr și alegerea pragului înainte de calibrare. Valorile oscilează, iar senzorul poate fi păcălit de praf, umbre, reflexii sau baterie slabă. Dacă datele sunt imposibile, oprim alimentarea. Lucrăm la 5 V sau mai puțin, niciodată cu 230 V.",
    "Demo-ul „De la foton la decizie” arată lanțul lume - senzor - număr - if - LED. La fiecare etapă întreabă ce s-a schimbat fizic, ce număr a apărut și ce regulă l-a interpretat. Compară apoi predicția din demo cu valorile reale din Serial Monitor."
  ],
  demo: {
    type: "flow",
    title: "De la foton la decizie",
    steps: [
      { label: "🔆 Lumea", info: "Lumina din cameră lovește senzorul LDR. Multă lumină → rezistență mică. Întuneric → rezistență mare." },
      { label: "🔢 Citirea", info: "lumina = analogRead(A0) — placa transformă rezistența în număr: 0 (beznă) până la 1023 (flood de lumină)." },
      { label: "📺 Afișarea", info: "Serial.println(lumina) — numărul apare pe ecran. Pune mâna pe senzor: numărul se prăbușește LIVE." },
      { label: "🧠 Decizia", info: "if (lumina < 300) → programul TĂU decide: e destul de întuneric pentru lumină de veghe?" },
      { label: "💡 Acțiunea", info: "digitalWrite(LED, HIGH) — lumina se aprinde singură. Ai construit o lampă automată ca cele din holurile blocurilor!" }
    ]
  },
  experiment: {
    title: "Citește lumea în numere",
    materials: ["Arduino/ESP32", "Senzor LDR (sau DHT11)", "Rezistență 10kΩ", "Breadboard", "Fire"],
    steps: [
      "Construiește circuitul LDR (divizor de tensiune: LDR + rezistență 10k, mijlocul la pinul A0).",
      "Scrie programul care citește analogRead(A0) și afișează valoarea pe Serial la fiecare 500ms.",
      "Mapează senzorul: notează valoarea la beznă totală, lumină de cameră, lanternă directă. Ai calibrat primul senzor!",
      "Adaugă decizia: sub un prag ales de TINE, LED-ul se aprinde. Testează acoperind senzorul.",
      "Provocare: fă pragul ajustabil — modifică-l din cod, reîncarcă, observă schimbarea comportamentului."
    ],
    expected: "Senzor citit live pe Serial + lumină automată funcțională cu prag ales de copil."
  },
  project: {
    title: "Lumina de veghe automată",
    goal: "Produs finit: lampă de veghe care se aprinde singură la întuneric, într-o carcasă construită de tine.",
    steps: [
      "Perfectionează circuitul LDR + LED și alege pragul prin experimente serale reale.",
      "Construiește carcasa: cutie de carton, difuzor din hârtie de copt, design propriu.",
      "Test de 3 seri: funcționează la apus? Se stinge la răsărit? Notează în jurnal comportamentul.",
      "Versiunea 2: adaugă un al doilea prag — lumină slabă = LED galben, beznă = LED alb."
    ],
    success: ["Funcționează 3 seri consecutiv", "Carcasă finisată", "Jurnal cu praguri și comportament real"]
  },
  questions: [
    "Ce alte „simțuri” ai vrea să-i dai unui robot? Ce senzor ar acoperi fiecare?",
    "De ce e calibrarea esențială? Ce se întâmplă dacă pragul e ales la întâmplare?",
    "Un senzor poate „minți”? Dă 2 exemple (umbră, praf, baterie slabă...).",
    "Cum ți se pare că măsoară telefonul tău lumina ca să-și ajusteze ecranul?"
  ],
  exercises: [
    "Desenează lanțul complet: lume → senzor → număr → decizie → acțiune, pentru 3 senzori diferiți.",
    "Citește DHT11 (cu biblioteca lui) și afișează temperatura camerei pe Serial.",
    "Fă un „termometru de LED-uri”: 3 LED-uri care se aprind progresiv cu temperatura."
  ],
  parent: {
    watch: ["Copilul CALIBREAZĂ prin experiment, nu ghicește pragul", "Obsesia sănătoasă pentru „ce zice Serial Monitor”"],
    help: ["Seara e cel mai bun laborator: experimentele cu lumina sunt magice la apus", "Dacă citirile sar haotic: fir prost, contact imperfect — învățați-l să verifice conexiunile întâi"],
    redflags: ["Copilul nu înțelege de ce valorile „nu stau locului” — lumea reală e zgomotoasă, nu e bug! Asta E lecția", "Vrea să conecteze senzori de 230V (prezență în prize etc.) — interzis fără echipamente specializate; rămânem la 5V"]
  },
  pass: [
    "Citește și calibrează un senzor real",
    "Scrie decizia if pe baza senzorului, cu prag justificat",
    "Lampa automată funcționează 3 seri la rând"
  ]
},
{
  id: "7.5", level: 7, num: 5, title: "Comunicații: I2C, UART, Wi-Fi, Bluetooth", icon: "📡", duration: "50 min",
  objectives: [
    "Să explice de ce dispozitivele au nevoie de protocoale comune",
    "Să distingă: I2C/SPI/UART (pe cablu) vs Wi-Fi/Bluetooth (radio)",
    "Să deseneze un lanț complet senzor → ESP32 → server → dashboard"
  ],
  explanation: [
    "Un protocol este un set de reguli pentru schimbul de date: format, ordine, ritm, adresă și confirmare. UART este o conversație simplă între două dispozitive; I2C permite module pe SDA și SCL, fiecare cu adresă; SPI folosește linii separate pentru schimburi rapide. Wi-Fi și Bluetooth transportă date prin radio, dar tot au reguli.",
    "Analogia este o poștă: firele sau undele sunt drumul, protocolul este formularul, iar adresa spune cui ajunge plicul. Wi-Fi leagă ESP32 de rețeaua locală, Bluetooth este potrivit pentru distanțe mici. Folosim doar dispozitivele noastre, fără porturi publice, fără secrete în cod și fără date în cloud.",
    "Exemplu lucrat: 1) senzorul măsoară 22,5 °C, 2) ESP32 cere valoarea pe I2C la 0x76, 3) pune numărul într-un mesaj, 4) îl trimite prin Wi-Fi către serverul local, 5) serverul îl validează și îl salvează în SQLite, 6) pagina locală îl desenează. Dacă Wi-Fi cade, păstrăm funcția locală.",
    "Greșeala frecventă este confundarea drumului cu limba: Wi-Fi nu explică singur ce înseamnă datele. Protocoalele pot pierde mesaje, avea întârzieri sau cere configurații compatibile. Nu publicăm SSID, parole, IP-uri sau date despre familie și nu redirecționăm porturi spre internet.",
    "Demo-ul „Lanțul IoT complet” face vizibile verigile, de la senzor la dashboard. La fiecare pas întreabă expeditorul, receptorul și reacția la întrerupere. Repetă traseul în laboratorul local cu date fictive și verifică faptul că demonstrația nu cere niciun secret real."
  ],
  demo: {
    type: "flow",
    title: "Lanțul IoT complet",
    steps: [
      { label: "🌡️ Senzor", info: "Senzorul măsoară temperatura: 22.5°C. Dar stă pe o placă mică — cum ajunge numărul la ESP32?" },
      { label: "🔌 I2C", info: "Prin 2 fire (SDA=date, SCL=ceas), senzorul răspunde când e strigat pe adresa lui: „0x76, dă-mi temperatura!”" },
      { label: "🧠 ESP32", info: "Microcontrolerul primește numărul și îl împachetează: pregătit de călătorie lungă." },
      { label: "📶 Wi-Fi", info: "Prin radio, ESP32 trimite pachetul către router, exact ca telefonul tău. Casa devine autostradă de date." },
      { label: "🖥️ Server", info: "Raspberry Pi-ul primește datele prin HTTP și le salvează în baza de date SQLite pe care știi să o faci!" },
      { label: "📊 Dashboard", info: "Pagina web de pe server citește baza și desenează graficul. Tu privești temperatura casei de oriunde din casă. CONSTRUIT DE TINE." }
    ]
  },
  experiment: {
    title: "ESP32 vorbește cu lumea",
    materials: ["ESP32", "Rețeaua Wi-Fi a casei", "Serverul Pi funcțional"],
    steps: [
      "Cu un adult, conectează ESP32 numai la rețeaua proprie sau la o rețea de laborator. Păstrează SSID-ul și parola într-un fișier local nepublicat, exclus din proiect; nu le scrie în cod, jurnal sau capturi. Afișează pe Serial doar adresa locală primită.",
      "Fă ESP32 să ceară o pagină de test de pe serverul Pi local, folosind date nepersonale. Verifică răspunsul pe Serial: două dispozitive ale voastre schimbă un mesaj în rețeaua locală.",
      "Opțional, pornește un server de demonstrație pe ESP32 accesibil numai din aceeași rețea locală; adultul verifică faptul că routerul nu are redirecționare de porturi către internet. Desenează în jurnal cine este client și cine este server în fiecare experiment."
    ],
    expected: "ESP32 conectat la Wi-Fi + un schimb real de date cu serverul Pi, documentat."
  },
  project: {
    title: "Jurnalul de temperatură wireless",
    goal: "ESP32 citește temperatura și o trimite automat la server, unde se salvează în baza de date.",
    steps: [
      "Conectează senzorul de temperatură la ESP32 și citește-l corect (Serial).",
      "Scrie pe Pi un mic receiver (Python: un endpoint simplu care primește date și le bagă în SQLite).",
      "ESP32 trimite temperatura la fiecare 60 de secunde, automat, fără tine.",
      "Lasă sistemul să ruleze 24h și desenează graficul temperaturii casei. Ce observi noaptea? Când gătește cineva?"
    ],
    success: ["Date reale în baza de date, trimise automat", "24h de funcționare", "Grafic + 2 observații despre casă"]
  },
  questions: [
    "De ce are I2C nevoie de adrese, dar UART nu?",
    "Ce avantaj are Wi-Fi față de Bluetooth? Și invers?",
    "Câte protocoale diferite a traversat temperatura din senzor până în grafic?",
    "Ce se întâmplă cu sistemul tău dacă pică Wi-Fi-ul? Cum ai putea salva datele local până revine?"
  ],
  exercises: [
    "Desenează din memorie lanțul IoT cu toate protocoalele etichetate.",
    "Găsește 5 dispozitive din casă și ghicește ce protocol folosesc.",
    "Schimbă intervalul de trimitere la 10 secunde vs 10 minute: ce câștigi, ce pierzi?"
  ],
  parent: {
    watch: ["Copilul recunoaște protocoalele ca „limbi” și nu le amestecă", "Gândirea de sistem: ce se întâmplă când o verigă cade?"],
    help: ["Parola Wi-Fi în cod e o ocazie de lecție: cine mai vede acest fișier? (pregătire pentru nivelul 9)", "Sărbătoriți primul rând din baza de date venit „din aer” — e un moment istoric personal"],
    redflags: ["Copilul vrea cloud public imediat — amintiți planul: întâi securitatea (N9), apoi lumea", "Date corupte în bază și copilul le ignoră — învățați validarea: „22.5°C e plauzibil, 850°C nu”"]
  },
  pass: [
    "Explică 4 protocoale și când le folosești",
    "A realizat un transfer real ESP32 → server",
    "Sistemul funcționează autonom 24h cu date corecte"
  ]
},
{
  id: "7.6", level: 7, num: 6, title: "Ieșiri: motoare, servo-uri și display-uri", icon: "🎡", duration: "60 min",
  objectives: [
  "Să controleze un servomotor și un display OLED/LCD de pe microcontroler",
    "Să înțeleagă diferența dintre tipuri de motoare (DC, servo, stepper)",
    "Să creeze un sistem care afișează și acționează pe baza datelor"
  ],
  explanation: [
    "O ieșire este partea care produce un efect observabil: lumină, sunet, text sau mișcare. Motorul DC se rotește continuu, servomotorul urmărește un unghi limitat, iar motorul pas cu pas avansează în pași. PWM este o succesiune rapidă de impulsuri; raportul timp-pornit/timp-oprit poate regla viteza sau poziția, dar nu este tensiune analogică adevărată.",
    "Alege componenta după sarcină, ca atunci când alegi un instrument: ventilatorul are nevoie de rotație continuă, un braț are nevoie de unghi, iar un plotter are nevoie de pași. GND este masa, adică referința comună pentru semnale. Dacă sursa servo-ului este separată, masa plăcii și a sursei trebuie legate împreună.",
    "Exemplu pas cu pas: 1) conectăm semnalul SG90 la un pin PWM, 2) alimentăm servo-ul la 5 V și GND, 3) cerem write(0), 4) așteptăm, 5) cerem write(90) și apoi write(180), 6) afișăm unghiul pe OLED. Dacă senzorul dă 512 din intervalul 0-1023, maparea poate cere aproximativ 90 de grade.",
    "Greșelile comune sunt alimentarea motorului direct din pin, uitarea GND-ului comun și forțarea servo-ului peste limita mecanică. Display-ul poate fi lent, iar PWM-ul diferă între plăci. Folosim numai micro-servo-uri și motoare mici, baterii sau USB de joasă tensiune, cu adultul prezent; la miros, căldură sau blocaj oprim alimentarea.",
    "Demo-ul „Ce motor alegi?” leagă aplicația de tipul de ieșire. După clasificare, urmărește servo-ul care transformă valoarea senzorului într-un unghi și display-ul care arată aceeași decizie. Demo-ul pregătește alegerea tehnică înainte de montaj, nu promite că orice motor poate face orice mișcare."
  ],
  demo: {
    type: "classify",
    title: "Ce motor alegi?",
    intro: "Potrivește aplicația cu motorul potrivit!",
    zones: ["🌀 Motor DC (rotire continuă)", "🎯 Servo (unghi exact)", "👣 Stepper (pași preciși)"],
    items: [
      { label: "Ventilator de birou", zone: 0 },
      { label: "Braț de robot care prinde", zone: 1 },
      { label: "Imprimanta 3D", zone: 2 },
      { label: "Roata mașinuței", zone: 0 },
      { label: "Bariera parcării", zone: 1 },
      { label: "Plotter CNC", zone: 2 },
      { label: "Dronă (elice)", zone: 0 },
      { label: "Ușă automată de garaj mică", zone: 1 }
    ]
  },
  experiment: {
    title: "Servo-ul ascultător",
    materials: ["Arduino/ESP32", "Servomotor SG90", "Senzor LDR sau potențiometru", "(opțional) display OLED"],
    steps: [
      "Conectează servo-ul (fir portocaliu=semnal la pin, roșu=5V, maro=GND).",
      "Scrie: servo.write(0) → delay → write(90) → delay → write(180). Brațul dansează!",
      "Leagă-l de senzor: unghiul servo-ului urmărește lumina (map(valoare, 0, 1023, 0, 180)). Mișcă mâna peste senzor — servo-ul te urmărește!",
      "Adaugă display-ul: afișează temperatura sau un mesaj. Microcontrolerul vorbește ȘI arată."
    ],
    expected: "Servo controlat de un senzor real + display funcțional cu date live."
  },
  project: {
    title: "Indicatorul analogic de temperatură",
    goal: "Construiește un „termometru cu ac”: servo-ul mișcă un ac indicator pe un cadran desenat de tine, citind senzorul.",
    steps: [
      "Desenează cadranul: scală de la 0 la 40°C, culori, design propriu.",
      "Programează: temperatura → unghi (map). Testează cu mâna caldă pe senzor.",
      "Montează acul indicator pe servo și calibrează capetele scalei.",
      "Versiunea 2: afișează și valoarea exactă pe OLED, sub cadran. Analog + digital, ca la mașinile clasice!"
    ],
    success: ["Ac indicator care urmărește temperatura reală", "Cadran calibrat corect la 3 puncte", "Display cu valoarea numerică"]
  },
  questions: [
    "De ce are nevoie o imprimantă 3D de stepper și nu de motor DC simplu?",
    "Ce se întâmplă dacă ceri servo-ului 200°? (Limitele fizice contează!)",
    "Cum ai folosi PWM ca să controlezi VITEZA unui motor DC?",
    "Unde ai văzut azi un servo în viața reală fără să știi?"
  ],
  exercises: [
    "Fă servo-ul să meargă lin de la 0 la 180 în pași de 1° (bucla for!).",
    "Scrie pe OLED numele tău și temperatura, actualizate la 2 secunde.",
    "Construiește „cateușul”: servo care se întoarce spre mâna ta (senzor distanță sau lumină)."
  ],
  parent: {
    watch: ["Copilul respectă limitele fizice ale servo-ului (nu forțează brațul)", "Bucuria mișcării fizice controlate din cod — al doilea mare moment de aur"],
    help: ["Servo-urile SG90 sunt ieftine (~15 lei); luați 2-3 de rezervă, se mai ard în experimente", "Alimentarea motoarelor: de la 5V al plăcii doar pentru micro-servo; motoare mari = alimentare separată, discutați împreună schema"],
    redflags: ["Copilul alimentează motoare mari direct din placă — risc de ardere a plăcii; regula: motoarele mari au sursa lor", "Forțează brațul servo-ului blocat — învață: servo-ul care „bâzâie blocat” cere ajutor"]
  },
  pass: [
    "Controlează servo din senzor cu map()",
    "Afișează date reale pe display",
    "Explică alegerea motorului potrivit pentru 3 aplicații"
  ]
},
{
  id: "7.7", level: 7, num: 7, title: "Proiect: Lumină automată cu ESP32", icon: "💡", duration: "2×60 min", isProject: true,
  objectives: [
    "Să integreze senzor + logică + acționare + comunicație într-un singur sistem",
    "Să adauge robustețe: histerezis, valori imposibile filtrate, teste",
    "Să documenteze proiectul ca un inginer (schemă, cod, teste, lecții)"
  ],
  explanation: [
    "Proiectul este un sistem de control: senzorul măsoară lumina, ESP32 este microcontrolerul care decide, iar LED-ul este ieșirea. Starea lămpii înseamnă dacă este aprinsă sau stinsă. Histerezisul folosește două praguri, iar filtrarea reduce efectul citirilor zgomotoase. Jurnalul notează măsurarea și motivul deciziei.",
    "Analogia este un întrerupător cu memorie: nu reacționează la fiecare umbră trecătoare, ci pornește sub pragul de întuneric și se oprește abia peste pragul de lumină. Senzorul rămâne local, iar un server din aceeași rețea poate păstra evenimentele. Lumina trebuie să funcționeze și când serverul este oprit.",
    "Exemplu lucrat: 1) citim 233, 2) pragul de pornire este 250, deci aprindem, 3) următoarea citire este 280, între praguri, deci păstrăm aprins, 4) la 360 depășim pragul de oprire 350, deci stingem, 5) trimitem local doar evenimentul nepersonal. Astfel evităm clipirea la amurg.",
    "Greșeala este folosirea unui singur prag sau a unei singure citiri. O limită este că filtrarea poate întârzia reacția, iar Wi-Fi-ul poate cădea. Nu transmitem parole, IP-uri publice sau programul familiei și nu expunem serverul local pe internet. Alimentarea rămâne la LED-uri și module de joasă tensiune, fără 230 V.",
    "Demo-ul urmărește senzor - decizie - histerezis - LED - server. Apasă pașii și cere copilului să prezică starea pentru 233, 280 și 360, apoi compară cu exemplul real. Legătura explicită arată de ce fiecare etapă din demo apare și în tabelul de teste."
  ],
  demo: {
    type: "flow",
    title: "Arhitectura sistemului complet",
    steps: [
      { label: "🌗 Senzor LDR", info: "Măsoară lumina la fiecare 2 secunde. Valorile absurde (<0 sau >1023) se aruncă direct la gunoi cu un if." },
      { label: "🧠 ESP32 decide", info: "Histerezis: sub 250 → aprinde. Peste 350 → stinge. Între → păstrează starea. Zero clipiri nervoase la amurg!" },
      { label: "💡 Acționarea", info: "LED-ul se aprinde/stinge lin. Starea curentă e ținută într-o variabilă — memoria sistemului." },
      { label: "📶 Raportarea", info: "La fiecare schimbare de stare, ESP32 trimite evenimentul pe Wi-Fi: „18:42 — LUMINA APRINSĂ, luminozitate 233”." },
      { label: "📊 Serverul", info: "Pi-ul primește, salvează în SQLite, afișează istoricul pe o pagină web. Câte ore a stat aprinsă lumina săptămâna asta? TU știi!" }
    ]
  },
  experiment: {
    title: "Construcția incrementală",
    materials: ["ESP32", "LDR + rezistență", "LED/bandă LED + tranzistor (după caz)", "Serverul Pi", "Jurnalul de proiect"],
    steps: [
      "V1: senzor → LED, fără Wi-Fi. Fă pragul simplu să meargă.",
      "V2: adaugă histerezisul. Testează amurgul simulat (mâna care se apropie încet de senzor): oscilează? Nu mai oscilează? VICTORIE.",
      "V3: filtrul de valori imposibile + log pe Serial a fiecărei decizii cu motivul ei.",
      "V4 opțional: pe rețeaua proprie și cu adult, trimite doar evenimente nepersonale către un server local. Nu expune serverul pe internet și nu transmite parole, adrese sau programul familiei. Verifică în baza de date că sosesc corect.",
      "V5: pagina web cu istoricul. Test final: 48 de ore de funcționare neîntreruptă."
    ],
    expected: "Sistem funcțional în 5 versiuni salvate, fiecare testată, fără oscilații, cu date în server."
  },
  project: {
    title: "Dosarul de proiect complet",
    goal: "Primul tău dosar de inginerie: schemă, cod comentat, jurnal de teste, lecții învățate, prezentare.",
    steps: [
      "Schema electrică desenată corect (simboluri standard din 7.2).",
      "Codul final comentat: fiecare secțiune explică DE CE, nu doar CE.",
      "Jurnalul de teste: tabel cu test / rezultat așteptat / rezultat real / verdict. Minim 10 teste!",
      "Pagina „Ce-aș face diferit la versiunea 2”: minim 3 idei oneste.",
      "Prezentare de 5 minute pentru familie: problemă → soluție → demonstrație live → lecții."
    ],
    success: ["Dosar complet (schemă + cod + teste + lecții)", "48h de funcționare dovedită cu log", "Prezentare live reușită"]
  },
  questions: [
    "De ce e histerezisul mai bun decât pragul simplu? Unde mai apare în casă? (Termostatul!)",
    "Ce s-ar întâmpla dacă serverul e oprit? Cum ai face sistemul tolerant la asta?",
    "Cât curent consumă sistemul tău? Cât costă pe lună? Calculează cu P = U × I.",
    "Ce date NU ar trebui să trimită sistemul tău niciodată pe rețea? De ce?"
  ],
  exercises: [
    "Adaugă un buton de override manual: apăsat = forțez starea până la reapăsare.",
    "Fă pragurile configurabile de pe pagina web (server → ESP32, direcția inversă!).",
    "Calculează consumul lunar real și scrie-l în dosar."
  ],
  parent: {
    watch: ["Versiunile salvate și testate separat — disciplina de inginer se formează AICI", "Copilul anticipează singur cazurile ciudate (amurg, valori absurde)"],
    help: ["Testul de 48h e testul de maturitate al proiectului — susțineți-l cu un colț permanent de laborator", "La prezentare, puneți ÎNTREBĂRI DE INGINER („ce se întâmplă dacă...?”), nu doar admirație"],
    redflags: ["Copilul ascunde testele eșuate din dosar — fix cele eșuate sunt cele prețioase; celebrați-le", "Vrea să treacă la proiect nou fără documentație — regula: nedocumentat = neterminat"]
  },
  pass: [
    "Sistem integrat senzor→logică→acțiune→rețea funcțional 48h",
    "Histerezis și filtrare implementate și explicate",
    "Dosar de proiect complet + prezentare susținută"
  ]
},
/* ==================== NIVELUL 8 ==================== */
{
  id: "8.1", level: 8, num: 1, title: "Bucla SENSE → THINK → ACT", icon: "🔄", duration: "50 min",
  objectives: [
    "Să descrie bucla de control: simte → decide → acționează → simte din nou",
    "Să identifice bucla în sisteme reale (termostat, mașină, om)",
    "Să compare bucla deschisă vs bucla închisă"
  ],
  explanation: [
    "Un robot este un sistem care poate percepe, decide și acționa. În bucla SENSE - THINK - ACT, senzorul citește lumea, programul interpretează valoarea, iar actuatorul produce o schimbare. Un actuator este o componentă care mișcă sau aprinde ceva. Bucla repetată este necesară deoarece acțiunea schimbă mediul.",
    "O buclă deschisă pornește o acțiune fără să verifice efectul, precum un ventilator programat zece minute. O buclă închisă măsoară din nou, ca un termostat. Analogia termostatului este utilă, dar senzorul poate fi lent sau inexact, deci o buclă închisă nu repară automat datele proaste.",
    "Exemplu pas cu pas: 1) ultrasonic citește 20 cm, 2) THINK compară cu pragul 30 cm, 3) ACT oprește motorul și virează, 4) senzorul citește 45 cm, 5) programul decide că drumul este liber și pornește. Fiecare iterație are citire, decizie, acțiune și verificare, nu doar o comandă oarbă.",
    "Greșeala este presupunerea că automat înseamnă inteligent sau că un senzor nu poate da valori imposibile. Bucla poate oscila dacă reacționează prea repede, iar robotul poate răni obiecte dacă rulează prea repede. Testăm doar pe pistă liberă, la viteză mică, cu baterii sau USB de joasă tensiune și cu adultul capabil să întrerupă alimentarea.",
    "Demo-ul „O secundă din viața unui robot” arată cele cinci momente ale buclei. La fiecare pas, indică valoarea care intră și comanda care iese; apoi repetă cu distanța 45 cm. Demo-ul devine planul pentru pseudocod și pentru tabelul de iterații din experiment."
  ],
  demo: {
    type: "flow",
    title: "O secundă din viața unui robot",
    steps: [
      { label: "👁️ SENSE", info: "Senzorul ultrasonic trimite un „piuit” și măsoară ecoul: obstacol la 20 cm! (Ca liliecii — ecolocație reală.)" },
      { label: "🧠 THINK", info: "Programul compară: 20 cm < 30 cm (pragul). Decizie: OPIRE + viraj stânga. Totul în milisecunde." },
      { label: "🦾 ACT", info: "Motorul drept se oprește, cel stâng încetinește — robotul virează. Lumea fizică tocmai s-a schimbat." },
      { label: "🔁 SENSE (din nou)", info: "Noua măsurătoare: 45 cm liber. Decizia nouă: înainte! Bucla a validat că acțiunea a FUNCȚIONAT." },
      { label: "♾️ La infinit", info: "De 10-100 de ori pe secundă, mereu. Un robot e o buclă care nu doarme niciodată." }
    ]
  },
  experiment: {
    title: "Termostatul uman",
    materials: ["Un pahar cu apă caldă + termometru (sau senzorul de temperatură + Arduino din N7)"],
    steps: [
      "Joacă rolul termostatului: ținta e 40°C. Măsoară, decide (adaugă apă caldă/rece), acționează, măsoară din nou.",
      "Notează fiecare iterație: citire / decizie / acțiune / noua citire. Câte bucle până la țintă?",
      "Acum joacă rolul proastului: fă acțiuni FĂRĂ să măsori (buclă deschisă). Ce se întâmplă cu apa?",
      "Discuție: de ce a durat mai mult cu bucla deschisă? Unde vezi bucle deschise proaste în viața reală?"
    ],
    expected: "Tabel cu 5+ iterații de buclă + concluzia scrisă: măsurarea după acțiune e neegociabilă."
  },
  project: {
    title: "Vânătoarea de bucle de control",
    goal: "Documentează 8 bucle SENSE-THINK-ACT din casă și din natură, cu diagrama fiecăreia.",
    steps: [
      "Vânează în casă: frigider, centrală, aragaz, lampa cu senzor, mașina de spălat...",
      "Vânează în natură: tu când mergi pe bicicletă, pisica care vânează, planta care se întoarce spre soare.",
      "Pentru fiecare: desenează bucla cu cele 3 etaje și numește SENZORUL concret.",
      "Marchează cu roșu orice buclă DESCHISĂ găsită — și propune-i îmbunătățirea."
    ],
    success: ["8 bucle documentate", "Senzorul numit concret la fiecare", "Cel puțin o buclă deschisă descoperită și reparată pe hârtie"]
  },
  questions: [
    "Un deshidrator cu temporizator e buclă deschisă sau închisă? Cum l-ai îmbunătăți?",
    "Care parte a buclei lipsește la un sistem care „pornește aerul condiționat la ora 14 fix”?",
    "De ce măsoară roboții de 10-100 de ori pe secundă și nu o dată pe minut?",
    "Tu ești acum într-o buclă SENSE-THINK-ACT? Demonstrează."
  ],
  exercises: [
    "Desenează bucla completă pentru: croaziera automată a mașinii.",
    "Scrie pseudocodul buclei pentru robotul care evită obstacole.",
    "Găsește în casă un aparat cu temporizator orb și proiectează-i senzorul lipsă."
  ],
  parent: {
    watch: ["Copilul VEDE bucle pretutindeni — semnul că conceptul a prins", "Distinge spontan deschis vs închis la aparatele din casă"],
    help: ["În trafic: „ce buclă face ABS-ul? și pilotul automat?” — mașina e o sală de clasă pe roți", "Jocul „termostatul uman” merge și cu îmbrăcăminte: prea cald/prea rece/pregătit"],
    redflags: ["Copilul crede că „automat = inteligent” — arătați-i bucla deschisă proastă: automatizarea proastă e automatizată prost încontinuu", "Nu vede de ce trebuie RE-măsurare: experimentul cu apa e decisiv, nu-l săriți"]
  },
  pass: [
    "Explică bucla cu 2 exemple din afara informaticii",
    "Distinge și argumentează deschis vs închis",
    "A documentat 8 bucle reale cu senzori concreți"
  ]
},
{
  id: "8.2", level: 8, num: 2, title: "Șasiul robotului: motoare și mișcare", icon: "🚗", duration: "60 min",
  objectives: [
    "Să construiască un șasiu cu 2 motoare DC controlate prin driver",
    "Să programeze mișcările de bază: înainte, înapoi, viraje, oprire",
    "Să înțeleagă de ce motoarele au nevoie de driver și alimentare separată"
  ],
  explanation: [
    "Un motor DC transformă energie electrică în rotație. Microcontrolerul trimite semnale, dar pinii lui nu pot furniza curentul de pornire al motorului; driverul este circuitul de putere care comută energia bateriei către motor. Șasiul este cadrul, roata liberă sprijină robotul, iar GND este referința comună pentru semnale.",
    "Analogia este un dirijor și un amplificator: placa spune „mai repede” sau „înapoi”, driverul face comutarea puternică, iar motoarele mișcă roțile. La tracțiune diferențială, două motoare înainte înseamnă drept, unul mai lent înseamnă curbă, iar sensuri opuse înseamnă rotație pe loc. Podeaua și roțile introduc diferențe reale.",
    "Exemplu pas cu pas: 1) conectăm bateria la intrarea driverului, 2) conectăm driverul la motoare, 3) legăm pinii de comandă ai ESP32, 4) legăm toate masele, 5) testăm cu roțile ridicate, 6) comandăm ambele motoare înainte două secunde și apoi STOP. Dacă robotul deviază, măsurăm și ajustăm PWM-ul, nu ghicim.",
    "Greșeala periculoasă este motor direct pe pin, baterie inversată sau lipsa GND-ului comun. Un driver are limite de curent și se poate încălzi, iar calibrarea nu poate elimina complet frecarea. Folosim numai baterii potrivite și joasă tensiune, nu prize; testăm pe spațiu liber, cu adultul lângă întrerupător și cu mâinile departe de roți.",
    "Demo-ul „Cum virează robotul?” clasifică comenzile celor două motoare. După fiecare card, leagă răspunsul de funcțiile `inainte`, `stanga`, `dreapta` și `stop` din cod. Apoi verifică fizic, cu roțile ridicate, că mișcarea din demo corespunde semnalelor trimise driverului."
  ],
  demo: {
    type: "classify",
    title: "Cum virează robotul?",
    intro: "Potrivește comanda motoarelor cu mișcarea rezultată!",
    zones: ["⬆️ Înainte", "↪️ Virează dreapta", "🔄 Se rotește pe loc"],
    items: [
      { label: "Ambele motoare înainte", zone: 0 },
      { label: "Stânga înainte, dreapta oprit", zone: 1 },
      { label: "Stânga înainte, dreapta ÎNAPOI", zone: 2 },
      { label: "Ambele la fel de repede", zone: 0 },
      { label: "Dreapta încet, stânga repede", zone: 1 },
      { label: "Motoare opuse, aceeași viteză", zone: 2 }
    ]
  },
  experiment: {
    title: "Primii pași ai șasiului",
    materials: ["Kit șasiu 2WD (~60-100 lei): șasiu, 2 motoare, roți, suport baterii", "Driver L298N", "ESP32/Arduino", "Baterii", "Fire"],
    steps: [
      "Asamblează șasiul: motoare, roți, roată liberă (sau bila) față. Deja arată a robot!",
      "Conectează: baterii → driver, driver → motoare, ESP32 → pinii de comandă ai driverului. GND comun peste tot!",
      "Scrie funcțiile: inainte(), inapoi(), stanga(), dreapta(), stop(). Fiecare = câteva digitalWrite pe pini.",
      "Test pe podea: inainte 2 secunde, stop. MERGE DREPT? (Un motor e mereu mai rapid — notează diferența!)",
      "Corectura: ajustează vitezele (PWM sau timpi) până merge drept. Prima ta calibrare de robot!"
    ],
    expected: "Șasiu care execută toate cele 5 mișcări + înțelegerea diferenței dintre motoare."
  },
  project: {
    title: "Dansul robotului",
    goal: "Programează o coregrafie de 60 de secunde: robotul „dansează” pe o melodie, doar din funcțiile tale de mișcare.",
    steps: [
      "Compune coregrafia pe hârtie: secvență de mișcări cu durate (ex: inainte 1s, stânga 0.4s...).",
      "Programeaz-o și testeaz-o de 10 ori. Roboții reali nu sunt perfecți — adaptează duratele!",
      "Adaugă un LED care pulsează și buzzer care „cântă” ritmul.",
      "Spectacol pentru familie + filmare. Primul videoclip din cariera robotului."
    ],
    success: ["Coregrafie de 60s executată complet", "Funcții de mișcare reutilizabile în cod", "Spectacol susținut în fața publicului"]
  },
  questions: [
    "De ce nu merge robotul PERFECT drept, oricât ai calibra? Ce factori joacă împotriva?",
    "Cum ai mișca robotul „pe diagonală lin”? E posibil cu 2 motoare?",
    "De ce are tancul aceeași strategie de viraj ca robotul tău?",
    "Ce s-ar întâmpla dacă uiti GND comun între placă și driver? De ce?"
  ],
  exercises: [
    "Scrie funcția cerc() care face robotul să meargă aproximativ în cerc.",
    "Adaugă PWM: fă robotul să accelereze lin și să frâneze lin.",
    "Măsoară: câți cm parcurge robotul pe secundă? Calculează-i viteza reală."
  ],
  parent: {
    watch: ["Copilul verifică polaritatea bateriilor ÎNAINTE de conectare — reflex vital", "Înțelege calibrarea ca pe ceva normal, nu ca eșec"],
    help: ["Kit-urile 2WD din comerț sunt ideale; lipiturile le faceți ÎMPREUNĂ sau cumpărați variante presudate", "Bateriile: folosiți reîncărcabile și învățați regulile (nu scurtcircuitați, nu încărcați nesupravegheate)"],
    redflags: ["Copilul conectează motoarele direct la pini „să vedem dacă merge” — pinul moare; regula driverului e absolută", "Frustrare când robotul nu merge drept — aici se naște inginerul real: calibrare, nu perfecțiune"]
  },
  pass: [
    "Șasiu funcțional cu 5 mișcări programate ca funcții",
    "Explică rolul driverului și alimentarea separată",
    "A calibrat robotul să meargă aproximativ drept"
  ]
},
{
  id: "8.3", level: 8, num: 3, title: "Evitarea obstacolelor", icon: "🚧", duration: "60 min",
  objectives: [
    "Să folosească senzorul ultrasonic pentru măsurarea distanței",
    "Să implementeze algoritmul complet de evitare: măsoară → compară → virează → reverifică",
    "Să testeze sistematic și să ajusteze pragurile"
  ],
  explanation: [
    "Senzorul ultrasonic trimite un impuls de sunet și măsoară timpul până la ecou; distanța aproximativă este viteză × timp / 2, fiindcă sunetul merge și se întoarce. Pragul este limita la care robotul schimbă comportamentul. Un algoritm este o succesiune de pași care transformă măsurarea în decizie.",
    "Analogia este un strigăt într-o peșteră: auzi ecoul mai repede de la un perete apropiat. Dar materialul moale absoarbe, suprafața înclinată reflectă în altă direcție, iar temperatura schimbă viteza sunetului. Senzorul nu vede ca omul, ci estimează folosind un semnal și un model simplu.",
    "Exemplu lucrat: pentru ecou de 3 ms și viteză aproximativă 343 m/s, calculăm 343 × 0,003 / 2 = 0,5145 m, adică circa 51 cm. Dacă pragul este 25 cm, continuăm; la 18 cm, oprim, mergem încet înapoi, virăm și remăsurăm. Nu reluăm mersul până nu avem o citire sigură.",
    "Greșeala este folosirea unei singure citiri sau creșterea pragului până când robotul pare că nu se lovește. Un prag prea mare poate bloca misiunea, unul prea mic poate întârzia oprirea. Testăm doar cutii și obiecte ușoare pe pistă delimitată, cu viteză mică, joasă tensiune și adultul lângă oprire; nu testăm pe oameni sau animale.",
    "Demo-ul „Creierul anti-accident” arată ping, distanță, mers, prag și manevră. Calculează împreună cu copilul valoarea de 51 cm, apoi schimbă în demo la 18 cm și urmărește de ce apare STOP. Acest traseu devine direct codul și tabelul de teste cu materiale diferite."
  ],
  demo: {
    type: "flow",
    title: "Creierul anti-accident în 5 pași",
    steps: [
      { label: "📡 Ping!", info: "Senzorul trimite impulsul ultrasonic și pornește cronometrul intern. Așteaptă ecoul..." },
      { label: "📏 Distanța", info: "Ecoul a revenit în 3 milisecunde → distanță ≈ 51 cm. Drum liber, pragul e 25 cm." },
      { label: "➡️ Mergi", info: "Motoarele merg înainte. Bucla se repetă de 10 ori pe secundă. Vigilență permanentă." },
      { label: "⚠️ Prag!", info: "Distanță = 18 cm! SUB PRAG. Oprire imediată — motoarele primesc STOP în milisecunde." },
      { label: "🔀 Manevra", info: "Înapoi 0.5s → viraj stânga 0.4s → măsurare nouă: 60 cm liber! Înainte. Obstacolul e în spate, robotul învață... de fapt, doar supraviețuiește elegant." }
    ]
  },
  experiment: {
    title: "Ochiul ultrasonic",
    materials: ["Robotul din 8.2", "Senzor HC-SR04", "Breadboard", "Obstacole diverse (cutii, perne, sticle, oglindă!)"],
    steps: [
      "Montează senzorul în fața robotului, ca niște ochi. Conectează Trig și Echo la pini.",
      "Scrie funcția masoaraDistanta() și testeaz-o cu robotul pe loc: apropie palma și vezi numerele pe Serial.",
      "Calibrează: măsoară cu rigla distanțele reale vs cele raportate. Cât de exact e senzorul?",
      "TESTUL ADEVĂRULUI: ce zice senzorul la o pernă? La o sticlă? La o OGLINDĂ înclinată? Notează toate minciunile senzorului!",
      "Implementează evitarea completă și lasă robotul singur într-un ring de cutii."
    ],
    expected: "Tabel cu materiale testate (care „mint” senzorul) + robot care evită cutiile din ring."
  },
  project: {
    title: "Arena obstacolelor",
    goal: "Construiește o arenă cu obstacole diverse și demonstrează robotul care le evită pe toate (sau documentează eșecurile!).",
    steps: [
      "Arena: cutii, conuri de hârtie, tunel, pernă-capcană, zonă cu obstacole subțiri.",
      "Testează robotul de 10 ori și notează în tabel: fiecare obstacol, evitat sau lovit, și DE CE.",
      "Îmbunătățește algoritmul pentru obstacolul cel mai greu (ex: două măsurători în loc de una, viraje aleatorii).",
      "Prezintă: demonstrație live + raportul onest „ce nu știe robotul meu”. Asta e cercetare reală!"
    ],
    success: ["Arena construită și folosită", "Tabel de teste onest (inclusiv eșecuri!)", "O îmbunătățire măsurabilă a succesului"]
  },
  questions: [
    "De ce „minte” senzorul la unghiuri oblice? Desenează drumul sunetului.",
    "Cum rezolvă mașinile autonome reale aceste limite? (Mai mulți senzori + camere + radar!)",
    "Ce e mai bun la lovire iminentă: viraj stânga mereu, sau viraj aleatoriu? Argumentează.",
    "Robotul tău „vede” o pisică așezată? De ce da / de ce nu?"
  ],
  exercises: [
    "Adaugă al doilea senzor (lateral) și compară: „care parte e mai liberă?”",
    "Fă robotul să URMEZE un perete la 20 cm distanță constantă.",
    "Scrie în jurnal cele 3 materiale care păcălesc senzorul și explicația fizică."
  ],
  parent: {
    watch: ["Copilul notează EȘECURILE cu aceeași seriozitate ca reușitele", "Întrebările „de ce nu m-a văzut?” devin investigații, nu frustrări"],
    help: ["Arena e locul unde copiii excelează — lăsați-i să construiască capcane creative pentru robot", "Pisica casei NU e un obstacol de test etic — discuție scurtă despre respect"],
    redflags: ["Copilul crește pragul ca robotul să „nu se mai lovească niciodată” — discutați compromisul: prea precaut = nu mai merge nicăieri", "Ascunde ratările la prezentare — raportul onest e partea cea mai valoroasă a proiectului"]
  },
  pass: [
    "Măsoară distanța corect și explică ecolocația",
    "Algoritm de evitare funcțional în arenă",
    "Raport onest al limitelor senzorului, cu dovezi"
  ]
},
{
  id: "8.4", level: 8, num: 4, title: "Urmărirea liniei", icon: "🛤️", duration: "60 min",
  objectives: [
    "Să folosească senzori IR pentru a distinge linia neagră de fundal",
    "Să implementeze urmărirea liniei cu 2 senzori (stânga/dreapta)",
    "Să înțeleagă controlul proporțional simplu (viraj lin vs brusc)"
  ],
  explanation: [
    "Senzorul IR emite lumină infraroșie invizibilă și măsoară reflexia. Albul reflectă de obicei mai mult decât banda neagră, iar robotul folosește această diferență pentru a estima unde este linia. Valoarea nu este universală: distanța, lumina ambientală și materialul schimbă citirea, deci calibrarea înseamnă măsurarea albului și negrului.",
    "Cei doi senzori sunt ca două tălpi care simt pista. Dacă dreapta vede negru, linia este spre dreapta și robotul corectează în acea direcție; dacă stânga vede negru, corectează invers. Controlul proporțional folosește mărimea erorii: abatere mică înseamnă viraj mic, abatere mare viraj mai puternic.",
    "Exemplu pas cu pas: 1) citim stânga 820 și dreapta 300, 2) după calibrare interpretăm dreapta ca linie, 3) calculăm eroarea 820 - 300 = 520, 4) cu factorul 0,1 obținem corecție 52, 5) scădem 52 din viteza motorului drept sau o adăugăm celui stâng, 6) remăsurăm. Factorul nu se alege după impresie, ci prin teste.",
    "Greșeala frecventă este pragul copiat de pe internet, fără calibrare pe pista proprie. Reflexiile și curbele strânse pot produce citiri greșite; un factor prea mare face robotul să oscileze, iar viteza prea mare depășește timpul de reacție. Pista rămâne locală, liberă și sigură, iar robotul funcționează la joasă tensiune, supravegheat.",
    "Demo-ul „Creierul urmăritorului de linie” trece de la alb-alb la abatere și corecție. Înainte de fiecare pas, cere predicția valorilor și a motorului care încetinește. Apoi compară cu Serial Monitor și leagă demonstrația de formula proporțională și de timpii măsurați pe pistă."
  ],
  demo: {
    type: "flow",
    title: "Creierul urmăritorului de linie",
    steps: [
      { label: "👁️ Citirea", info: "Senzor stânga: ALB. Senzor dreapta: ALB. Linia e fix între ei — perfect!" },
      { label: "➡️ Drept", info: "Ambele motoare aceeași viteză. Robotul zboară drept pe linie." },
      { label: "⚠️ Deraiaj", info: "Curba! Senzorul DREPT vede negru: linia a fugit în dreapta, noi am rămas pe stânga ei." },
      { label: "🔧 Corecția", info: "Motorul drept încetinește (sau stângul accelerează) → robotul virează dreapta, înapoi spre linie." },
      { label: "🎢 Versiunea PRO", info: "Cu senzori analogici măsori CÂT de mult ai deraiat și corectezi proporțional: viraj fin, nu smucitură. Schior olimpic, nu începător." }
    ]
  },
  experiment: {
    title: "Pista de curse",
    materials: ["Robotul", "2 senzori IR de linie (TCRT5000)", "Bandă izolieră neagră sau hârtie neagră", "Foaie mare albă / podea deschisă"],
    steps: [
      "Montează senzorii sub robot, la 0.5-1 cm de podea, depărtați cât lățimea liniei.",
      "Citește-i pe Serial: ce valori dau pe alb? Pe negru? Alege pragul LA MIJLOC. (Calibrare, din nou!)",
      "Trasează pista: bandă neagră pe podea — linie dreaptă, curbe largi, apoi curbe strânse.",
      "Implementează logica cu 2 senzori. Prima tură completă fără ieșire de pe pistă = CÂȘTIG!",
      "Cronometrează turele. Apoi îmbunătățește: viteze mai mari pe drept, frâne în curbe. Cursa contra cronometru a început."
    ],
    expected: "Robot care completează pista cu curbe + prag calibrat documentat + timpi pe tură."
  },
  project: {
    title: "Campionatul de urmărire",
    goal: "Construiește o pistă oficială, calibreză robotul pentru cel mai bun timp și organizează un concurs (chiar și contra cronometru).",
    steps: [
      "Pista oficială: drept, curbe largi, curbe strânse, o chicană. Măsoară-i lungimea.",
      "Documentează 5 configurații (viteză, prag, stil de viraj) și timpul fiecăreia: DATE, nu păreri.",
      "Alege configurația câștigătoare și explică DE CE a câștigat.",
      "Campionatul: invită familia, comentează cursele, premiază robotul. Ceremonie completă!"
    ],
    success: ["Tabel cu 5 configurații și timpi", "Cel mai bun timp îmbunătățit cu minim 20%", "Analiza „de ce a câștigat” scrisă"]
  },
  questions: [
    "De ce e mai bună corecția proporțională decât cea bruscă? Ce simte pasagerul unei mașini reale?",
    "Ce se întâmplă la o intersecție de linii (o cruce)? Cum ar trebui să decidă robotul?",
    "Cum ai urmări o linie ALBĂ pe podea NEAGRĂ? Ce schimbi?",
    "Unde sunt folosiți roboți urmăritori de linie în industria reală? Ce transportă?"
  ],
  exercises: [
    "Adaugă un al 3-lea senzor central și rescrie logica mai fină.",
    "Fă robotul să numere intersecțiile și să se oprească la a 3-a.",
    "Scrie pseudocodul pentru „urmărește linia ȘI evită obstacolele” (combină cu 8.3!)."
  ],
  parent: {
    watch: ["Copilul optimizează pe baza DATELOR (timpi), nu a senzației", "Răbdarea la calibrare — 90% din succesul acestui proiect e calibrare"],
    help: ["Banda izolieră neagră mată e pista perfectă; podeaua lucioasă dă bătăi de cap senzorilor — și asta e o lecție", "Campionatul e o sărbătoare: trofeu de carton, comentarii sportive, tot tacâmul"],
    redflags: ["Copilul crește viteza fără să ajusteze logica și nu pricepe de ce derape — lecție de fizică: la viteză mare, bucla e prea lentă; măsoară mai des!", "Concurența devine ne-sănătoasă — cronometrul e adversarul, nu frații"]
  },
  pass: [
    "Calibrează senzorii IR cu prag documentat",
    "Robotul completează pista cu curbe fără intervenție",
    "A optimizat configurația pe baza măsurătorilor"
  ]
},
{
  id: "8.5", level: 8, num: 5, title: "Proiect: Robot autonom cu misiune", icon: "🏁", duration: "2×90 min", isProject: true,
  objectives: [
    "Să combine mișcare + senzori + logică într-un robot cu o misiune clară",
    "Să proiecteze misiunea ca o succesiune de stări (mașină de stări)",
    "Să livreze robotul cu dosar de proiect și demonstrație publică"
  ],
  explanation: [
    "Un robot autonom este un sistem care execută o misiune fără comandă manuală la fiecare secundă, folosind senzori, program și actuatori. O mașină de stări este o hartă cu situații numite și tranziții între ele. Exemplul nostru poate porni, urmări linia, evita o cutie, reveni la bază și semnaliza finalul.",
    "Analogia este un joc de aventură: personajul este în „așteaptă”, apoi intră în „urmărește linia”; un eveniment, precum obstacolul, schimbă nivelul în „evită”. Fiecare stare are intrări, acțiuni și condiții de ieșire. O stare de oprire sigură există pentru pierderea pistei, date imposibile sau intervenția adultului.",
    "Exemplu pas cu pas: 1) butonul trece din ASTEAPTA în URMARESTE, 2) marcajul zonei produce EVITA, 3) ultrasonic confirmă drumul liber, 4) robotul revine în CAUTA_LINIA, 5) marcajul bazei produce REVENIRE, 6) ajunge în FINAL și stinge motoarele. Jurnalul înregistrează starea, evenimentul și rezultatul fiecărei tranziții.",
    "Greșeala este un lanț uriaș de if-uri fără stare clară, care permite comenzi contradictorii. Autonomia are limite: bateria scade, senzorii greșesc, roțile alunecă. Folosim viteză mică, timp maxim, obstacole ușoare, pistă proprie și joasă tensiune; nu lăsăm robotul nesupravegheat și nu îl conectăm la obiecte sau instalații periculoase.",
    "Demo-ul „Mașina de stări a misiunii” arată tranziția bază - linie - obstacol - revenire - sărbătoare. Pentru fiecare pas, urmărește evenimentul care schimbă starea și ieșirea care oprește sau mișcă robotul. Diagrama din demo trebuie copiată pe hârtie înainte de cod și verificată prin cele cinci misiuni de test."
  ],
  demo: {
    type: "flow",
    title: "Mașina de stări a misiunii",
    steps: [
      { label: "🏠 BAZA", info: "Robotul așteaptă butonul de start. LED roșu: „în așteptare”. Apeși → trece în URMĂREȘTE_LINIE." },
      { label: "🛤️ URMĂREȘTE_LINIE", info: "Logica din 8.4 rulează. Evenimentul-cheie: senzorul central vede MARCAJUL zonei (linie dublă) → schimbă starea." },
      { label: "🚧 EVITĂ_OBSTACOL", info: "În zonă, senzorul ultrasonic e șef: cub detectat → ocolire planificată → revine pe linie → stare nouă." },
      { label: "🔙 SE_ÎNTOARCE", info: "Urmărește linia în sens invers până vede marcajul bazei. Aproape gata!" },
      { label: "🎉 SĂRBĂTORE", info: "LED-uri multicolore + buzzer + dansul victoriei. Misiune îndeplinită. Autonom. De tine construit." }
    ]
  },
  experiment: {
    title: "Construiește stările una câte una",
    materials: ["Robotul complet (8.2-8.4)", "Pista + zona de misiune", "Jurnalul de proiect"],
    steps: [
      "Desenează ÎNTÂI diagrama de stări pe hârtie: stări, evenimente, tranziții. Niciun cod până nu e clară!",
      "Programează scheletul: variabila stare + un loop cu if pentru fiecare stare, toate goale. Testează tranzițiile cu Serial.",
      "Umple stările una câte una, testând fiecare separat (ai deja toate bucățile din lecțiile trecute!).",
      "Leagă tranzițiile. Fiecare eșec = o ipoteză, un print de debug, un test. Metoda din 4.7 lucrează pentru tine.",
      "Testul final: 5 misiuni consecutive, fără atingere. Notează scorul și cele mai frecvente puncte de eșec."
    ],
    expected: "Diagramă de stări pe hârtie + robot care completează misiunea de 3+ ori din 5."
  },
  project: {
    title: "Demonstrația publică + dosarul",
    goal: "Evenimentul de final de nivel: demonstrație live a misiunii + dosar complet de inginerie.",
    steps: [
      "Dosarul: diagrama de stări, schema electrică, codul comentat, tabelul de teste, pagina „ce-aș face diferit”.",
      "Pregătește discursul de 5 minute: misiunea, provocările, momentul în care „a murit” și cum l-ai readus la viață.",
      "Demonstrația live pentru familie/prieteni, cu comentariu în timp real („acum a simțit marcajul, urmează ocolirea!”).",
      "Sesiune de întrebări: răspunde ca un inginer — cu „nu știu încă, dar iată cum aș afla” unde e cazul."
    ],
    success: ["Misiune completă demonstrată live", "Dosar de proiect complet", "Răspunsuri la 3+ întrebări ale publicului"]
  },
  questions: [
    "De ce e mașina de stări mai bună decât un lanț uriaș de if-uri?",
    "Care stare a fost cea mai greu de făcut să meargă și de ce?",
    "Ce-ar trebui adăugat ca robotul să se DESCURCE când pierde linia complet? (Stare de cĂUTARE!)",
    "Cum arată mașina de stări a unei mașini autonome reale? Ce stări ai adăuga?"
  ],
  exercises: [
    "Adaugă starea CAUTĂ_LINIE pentru cazul „am pierdut pista”.",
    "Opțional, fă robotul să-și raporteze starea fără date personale către un server local propriu; nu expune serviciul pe internet și lucrează cu un adult. Scrie în jurnal povestea celui mai greu bug al proiectului, cu metoda în 8 pași."
  ],
  parent: {
    watch: ["Copilul descompune problema MARE în stări mici — abilitatea-vedetă a ingineriei", "Tranșează eșecurile cu metodă, nu cu emoție (măcar în 80% din cazuri!)"],
    help: ["Faceți eveniment din demonstrație: invitați bunici pe video, aplauze, diplomă de absolvire a nivelului 8", "Păstrați robotul intact sau dezasamblați-l CEREMONIAL — discuție despre ciclul vieții proiectelor"],
    redflags: ["Copilul vrea misiunea perfectă și refuză demo-ul din cauza unei rate de 80% — lecție de inginerie reală: 80% demonstrat bate 100% nevăzut", "Tentative de a simplifica misiunea în secret înainte de demo — onestitatea e parte din dosar"]
  },
  pass: [
    "Misiune autonomă multi-stare funcțională (3/5 reușite)",
    "Diagramă de stări clară, cod organizat pe stări",
    "Demonstrație publică + dosar complet"
  ]
}
];
