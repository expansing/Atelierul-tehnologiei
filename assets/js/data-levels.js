/* Atelierul Tehnologiei - Metadate nivele */
const LEVELS = [
  { n: 1,  title: "Ce este Tehnologia?",            icon: "🌍", color: "var(--c1)",  desc: "Descoperim că tehnologia înseamnă mult mai mult decât ecrane: de la roată la inteligența artificială.", tagline: "Utilizator curios" },
  { n: 2,  title: "Cum funcționează un Calculator?", icon: "💻", color: "var(--c2)",  desc: "Deschidem capota: CPU, RAM, biți, porți logice și modelul Input → Procesare → Output.", tagline: "Explorator hardware" },
  { n: 3,  title: "Sistemul de Operare și Linux",    icon: "🐧", color: "var(--c3)",  desc: "Terminalul, fișierele, procesele și permisiunile - controlăm calculatorul direct.", tagline: "Stăpân al terminalului" },
  { n: 4,  title: "Gândire Algoritmică și Programare", icon: "🧩", color: "var(--c4)", desc: "Algoritmi, bucle, variabile și primele programe Python scrise de tine.", tagline: "Programator" },
  { n: 5,  title: "Internetul și Rețelele",          icon: "🌐", color: "var(--c5)",  desc: "Ce se întâmplă când deschizi un site: DNS, IP, pachete, client și server.", tagline: "Navigator al rețelei" },
  { n: 6,  title: "Date, Baze de Date și Cloud",     icon: "🗄️", color: "var(--c6)",  desc: "Tabele, SQL și misterele cloud-ului - calculatoare reale în centre de date.", tagline: "Arhitect de date" },
  { n: 7,  title: "Electronică și Sisteme Embedded", icon: "⚡", color: "var(--c7)",  desc: "Circuite, LED-uri, senzori și microcontrolere - software-ul întâlnește lumea fizică.", tagline: "Constructor de circuite" },
  { n: 8,  title: "Automatizare și Robotică",        icon: "🤖", color: "var(--c8)",  desc: "Bucla SENSE → THINK → ACT și primul robot autonom care evită obstacole.", tagline: "Inginer de roboți" },
  { n: 9,  title: "Cybersecurity și Siguranță Digitală", icon: "🛡️", color: "var(--c9)", desc: "Parole, phishing, firewall-uri și laboratorul izolat de experimentare sigură.", tagline: "Apărător digital" },
  { n: 10, title: "Inteligența Artificială și ML",   icon: "🧠", color: "var(--c10)", desc: "Cum învață mașinile: date, modele, rețele neurale și cum generează text un LLM.", tagline: "Antrenor de AI" },
  { n: 11, title: "Utilizarea Responsabilă a AI",    icon: "⚖️", color: "var(--c11)", desc: "Verificarea răspunsurilor, deepfake-uri, algoritmi social media și etică.", tagline: "Gânditor critic" },
  { n: 12, title: "Proiecte de Inginerie Reale",     icon: "🏆", color: "var(--c12)", desc: "Stație meteo, casă inteligentă, robot autonom, AI Vision și marele proiect final.", tagline: "Inginer adevărat" }
];
