/* Atelierul Tehnologiei - Conținut structurat pentru explicații interactive */
const EXPLANATION_CONTENT = {
  "2.3": {
    blocks: [
      {
        type: "table",
        title: "Valorile pozițiilor binare",
        headers: ["Poziție", "Valoare", "Dacă bitul este 1"],
        rows: [
          ["8", "opt", "Adaugă 8 la total"],
          ["4", "patru", "Adaugă 4 la total"],
          ["2", "doi", "Adaugă 2 la total"],
          ["1", "unu", "Adaugă 1 la total"]
        ],
        note: "Un bit aprins adaugă valoarea poziției sale. Un bit stins adaugă zero."
      },
      {
        type: "callout",
        tone: "warn",
        title: "Binar nu înseamnă „număr cu multe zerouri”",
        body: "Fiecare poziție are o greutate diferită, exact ca o cutie de 8, una de 4, una de 2 și una de 1. Scrierea 1011 înseamnă 8 + 0 + 2 + 1 = 11."
      }
    ],
    checks: [
      {
        q: "Ce valoare adaugă bitul de pe poziția cu greutatea 4 dacă este aprins?",
        options: ["2", "4", "8", "0"],
        correct: 1,
        why: "Greutatea poziției spune cât adaugă bitul aprins."
      },
      {
        q: "Care este valoarea zecimală a scrierii binare 1011?",
        options: ["7", "9", "11", "13"],
        correct: 2,
        why: "1011 = 8 + 0 + 2 + 1 = 11."
      }
    ]
  },
  "2.4": {
    terms: [
      { names: ["semnal digital", "stare logică", "0 logic", "1 logic"], definition: "Un semnal cu două stări clare, reprezentate convențional prin 0 și 1." },
      { names: ["tensiune"], definition: "Diferența electrică folosită pentru a reprezenta o stare; pragurile reale depind de circuit." },
      { names: ["tranzistor", "semiconductor", "MOSFET"], definition: "Un component microscopic comandat electric, care poate permite sau limita curgerea curentului." },
      { names: ["terminal de control", "sursă", "drenă", "conductanță"], definition: "Părți și mărimi care descriu cum comandăm și măsurăm trecerea curentului printr-un tranzistor." },
      { names: ["poartă logică", "intrare", "ieșire", "tabel de adevăr"], definition: "Un bloc care transformă una sau mai multe stări de intrare într-o stare de ieșire după o regulă." },
      { names: ["AND", "ȘI", "OR", "SAU", "NOT", "NU"], definition: "Numele porților care combină sau inversează stările logice." },
      { names: ["circuit serie", "circuit paralel"], definition: "Moduri de conectare a întrerupătoarelor; seria cere toate condițiile, iar paralela cere cel puțin una." },
      { names: ["adunător", "memorie", "unitate de control", "CPU"], definition: "Blocuri construite din porți: calculează, păstrează stări și coordonează un calculator." }
    ],
    blocks: [
      {
        type: "callout",
        tone: "info",
        title: "1. De la tensiune la 0 și 1",
        body: "În lumea reală, un fir are o tensiune care se schimbă continuu. Un circuit digital împarte valorile măsurate în două zone: sub un prag citim 0 logic, iar peste un prag citim 1 logic. Astfel, un semnal complicat devine o decizie simplă."
      },
      {
        type: "compare",
        title: "2. Cum se comportă un tranzistor",
        items: [
          { title: "Comandat", body: "Tensiunea aplicată terminalului de control schimbă conductanța dintre sursă și drenă. Curentul poate trece mai ușor." },
          { title: "Necomandat", body: "Tranzistorul limitează puternic trecerea curentului. Nu este un robinet mecanic, ci un component electric microscopic." },
          { title: "Folosit ca poartă", body: "Conectăm unul sau mai multe tranzistoare astfel încât ieșirea să respecte o regulă AND, OR sau NOT." }
        ]
      },
      {
        type: "truthTable",
        gate: "AND / ȘI",
        title: "Tabela de adevăr AND",
        headers: ["Intrarea A", "Intrarea B", "Ieșirea"],
        rows: [[0, 0, 0], [0, 1, 0], [1, 0, 0], [1, 1, 1]],
        rule: "Becul se aprinde numai când A = 1 ȘI B = 1.",
        note: "Într-un circuit serie, curentul are nevoie de ambele întrerupătoare închise."
      },
      {
        type: "truthTable",
        gate: "OR / SAU",
        title: "Tabela de adevăr OR",
        headers: ["Intrarea A", "Intrarea B", "Ieșirea"],
        rows: [[0, 0, 0], [0, 1, 1], [1, 0, 1], [1, 1, 1]],
        rule: "Becul se aprinde când A = 1 SAU B = 1, inclusiv când ambele sunt 1.",
        note: "Într-un circuit paralel, există cel puțin un drum pornit către bec."
      },
      {
        type: "truthTable",
        gate: "NOT / NU",
        title: "Tabela de adevăr NOT",
        headers: ["Intrarea A", "Ieșirea"],
        rows: [[0, 1], [1, 0]],
        rule: "Ieșirea este mereu starea opusă intrării.",
        note: "NOT are o singură intrare. Nu confunda inversarea cu oprirea alimentării."
      },
      {
        type: "logicLab",
        title: "3. Laborator: porți logice",
        body: "Atinge A sau B pentru a schimba starea lor. Alege poarta și compară becul aprins cu rândul corespunzător din tabelele de mai sus."
      },
      {
        type: "callout",
        tone: "warn",
        title: "4. Analogia cu întrerupătoarele are limite",
        body: "Întrerupătoarele și becurile te ajută să vezi regula, dar tranzistoarele reale sunt microscopice, se comandă electric și nu sunt apăsate mecanic. Circuitele reale au praguri de tensiune, întârziere de propagare și consum de energie."
      },
      {
        type: "steps",
        title: "5. Cum construiești calculul din porți",
        steps: [
          "Alegi ce înseamnă 0 și 1 pentru problema ta.",
          "Scrii regula logică, de exemplu: aprinde becul dacă A și B sunt pornite.",
          "Completezi tabelul de adevăr cu toate combinațiile posibile.",
          "Alegi poarta sau combini mai multe porți pentru regula dorită.",
          "Testezi fiecare rând înainte să construiești un bloc mai mare."
        ]
      }
    ],
    checks: [
      {
        q: "Pentru poarta AND, ce se întâmplă când A = 1 și B = 0?",
        options: ["Ieșirea este 0", "Ieșirea este 1", "Ieșirea se inversează", "Circuitul dispare"],
        correct: 0,
        why: "AND cere ca ambele intrări să fie 1."
      },
      {
        q: "Care poartă are o singură intrare și întoarce starea opusă?",
        options: ["AND", "OR", "NOT", "CPU"],
        correct: 2,
        why: "NOT inversează 0 în 1 și 1 în 0."
      },
      {
        q: "De ce nu este perfectă analogia cu un întrerupător mecanic?",
        options: ["Tranzistoarele sunt mari", "Ele sunt comandate electric și au praguri, întârziere și consum", "Nu folosesc niciodată tensiune", "Nu pot fi conectate în circuite"],
        correct: 1,
        why: "Analogia explică regula, dar nu toate proprietățile fizice reale."
      }
    ]
  },
  "5.5": {
    blocks: [
      {
        type: "table",
        title: "Coduri HTTP pe care le poți întâlni",
        headers: ["Cod", "Ce înseamnă", "Cine indică problema"],
        rows: [
          ["200", "Cererea a reușit", "Nimeni — răspunsul este bun"],
          ["404", "Resursa nu a fost găsită", "De obicei calea sau cererea"],
          ["403", "Acces interzis", "Permisiunea sau identitatea"],
          ["500", "Eroare internă a serverului", "Serverul"]
        ],
        note: "Codul nu spune singur cauza exactă. Citește răspunsul și verifică pașii care au condus la el."
      }
    ],
    checks: [
      {
        q: "Un server răspunde 404. Ce înseamnă cel mai direct?",
        options: ["Resursa nu a fost găsită", "Serverul s-a oprit", "Browserul a criptat pagina", "Cererea a reușit perfect"],
        correct: 0,
        why: "404 indică faptul că resursa cerută nu a fost găsită."
      }
    ]
  },
  "6.2": {
    blocks: [
      {
        type: "compare",
        title: "Cheia primară și cheia străină",
        items: [
          { title: "Cheie primară", body: "Identifică unic un rând din tabel. În JUCATORI, id=1 nu apare de două ori." },
          { title: "Cheie străină", body: "Trimite un rând spre cheia primară din alt tabel. id_jucator=1 spune cui aparține scorul." },
          { title: "De ce ajută", body: "Numele se schimbă într-un singur loc, iar rezultatele rămân legate corect." }
        ]
      }
    ]
  },
  "6.3": {
    blocks: [
      {
        type: "table",
        title: "Patru comenzi SQL de bază",
        headers: ["Comanda", "Acțiune", "Întrebarea la care răspunde"],
        rows: [
          ["SELECT", "Citește rânduri", "Ce date există?"],
          ["INSERT", "Adaugă un rând nou", "Ce înregistrez?"],
          ["UPDATE", "Schimbă rânduri existente", "Ce corectez?"],
          ["DELETE", "Șterge rânduri existente", "Ce elimin?"]
        ],
        note: "Înainte de UPDATE sau DELETE, verifică filtrul WHERE cu SELECT."
      }
    ]
  },
  "7.1": {
    blocks: [
      {
        type: "formula",
        title: "Legea lui Ohm",
        formula: "U = R × I",
        body: "Tensiunea U se măsoară în volti, rezistența R în ohmi, iar curentul I în amperi. Dacă cunoști două mărimi, o poți calcula pe a treia."
      },
      {
        type: "table",
        title: "Exemplul LED-ului",
        headers: ["Mărime", "Valoare", "Semnificație"],
        rows: [
          ["U", "9 V", "Tensiunea sursei"],
          ["R", "450 ohm", "Rezistența care limitează curentul"],
          ["I", "0,02 A = 20 mA", "Curentul rezultat"]
        ],
        note: "9 V ÷ 450 ohm = 0,02 A. Folosește numai baterii și montaje de joasă tensiune."
      }
    ]
  },
  "7.5": {
    blocks: [
      {
        type: "compare",
        title: "Comparație rapidă între comunicații",
        items: [
          { title: "I2C", body: "Folosește SDA pentru date și SCL pentru ceas; dispozitivele au adrese." },
          { title: "UART", body: "Trimite un șir de biți pe o legătură serială; emitterul și receptorul trebuie să folosească aceeași viteză." },
          { title: "Wi-Fi", body: "Trimite date prin unde radio către router și rețeaua locală." },
          { title: "HTTP", body: "Este protocolul aplicației: cere și primește resurse web." }
        ]
      }
    ]
  },
  "9.4": {
    blocks: [
      {
        type: "table",
        title: "Porturi și servicii — exemplu orientativ",
        headers: ["Port", "Serviciu frecvent", "Regula de siguranță"],
        rows: [
          ["80", "HTTP", "Folosește-l numai în laboratorul permis"],
          ["443", "HTTPS", "Verifică certificatul și domeniul"],
          ["22", "SSH", "Nu partaja parole și nu deschide accesul fără adult"],
          ["3306", "Bază de date", "Nu expune baza direct internetului"]
        ],
        note: "Un port este o etichetă numerică, nu o garanție că serviciul este sigur."
      }
    ]
  },
  "10.1": {
    blocks: [
      {
        type: "table",
        title: "Ce face fiecare tip de AI?",
        headers: ["Tip", "Întrebarea sistemului", "Exemplu"],
        rows: [
          ["Clasificare", "În ce categorie pune acest lucru?", "Spam sau nu spam"],
          ["Recunoaștere", "Ce tipar găsește?", "Transformarea vorbirii în text"],
          ["Recomandare", "Ce ar putea urma?", "Ordinea clipurilor din feed"],
          ["Predicție", "Ce valoare estimez?", "Timpul estimat al unei curse"],
          ["Generare", "Ce conținut nou creez?", "Un text sau un sunet nou"]
        ],
        note: "Un produs poate combina mai multe tipuri. Întreabă ce face fiecare parte, nu doar cum se numește produsul."
      }
    ]
  },
  "10.5": {
    blocks: [
      {
        type: "compare",
        title: "Token, probabilitate și temperatură",
        items: [
          { title: "Token", body: "O bucată de text citită de model; poate fi un cuvânt, o parte de cuvânt sau un semn." },
          { title: "Probabilitate", body: "Cât de plauzibilă pare fiecare continuare posibilă la pasul curent." },
          { title: "Temperatură", body: "Influențează cât de des sunt alese variante mai puțin probabile; nu măsoară adevărul." }
        ]
      },
      {
        type: "callout",
        tone: "warn",
        title: "Fluență nu înseamnă verificare",
        body: "Un răspuns poate suna natural și totuși conține o afirmație inventată. O halucinație trebuie verificată cu surse potrivite."
      }
    ]
  },
  "11.1": {
    blocks: [
      {
        type: "compare",
        title: "Afirmație verificabilă sau opinie?",
        items: [
          { title: "Afirmație verificabilă", body: "Poate fi confirmată sau contrazisă cu dovezi: „Canberra este capitala Australiei”." },
          { title: "Opinie", body: "Folosește preferințe sau criterii: „Canberra este frumoasă”." },
          { title: "Metoda bună", body: "Scrie afirmația exact, alege dovada potrivită și caută cel puțin o sursă independentă." }
        ]
      }
    ]
  },
  "12.4": {
    blocks: [
      {
        type: "table",
        title: "Exemplu de matrice de confuzie",
        headers: ["Real / Predicat", "Pisică", "Câine", "Altceva"],
        rows: [
          ["Pisică", "42", "3", "1"],
          ["Câine", "2", "38", "0"],
          ["Altceva", "1", "0", "13"]
        ],
        note: "Diagonala arată clasificările corecte. Celulele din afara diagonalei arată confuziile."
      },
      {
        type: "callout",
        tone: "info",
        title: "Ce faci când modelul nu este sigur?",
        body: "Sub pragul de decizie, sistemul spune „nesigur” și cere verificare. Fallback-ul este comportamentul prudent, nu o scuză pentru a ignora eroarea."
      }
    ]
  }
};

const EXPLANATION_TERM_DICTIONARY = Object.entries(EXPLANATION_CONTENT).flatMap(([lesson, content]) =>
  (content.terms || []).map(term => ({ lesson, names: term.names || [], definition: term.definition }))
);
