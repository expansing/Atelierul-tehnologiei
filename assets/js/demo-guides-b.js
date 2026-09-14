/* Atelierul Tehnologiei - Ghiduri pentru demonstrații, nivelurile 4-6 */
const DEMO_GUIDES_B = {
  "4.1": [
    "Un algoritm este o lista de pași clari pentru un rezultat. In demonstrație, rezultatul este sandvisul: painea, pachetul, ingredientul, al doilea strat și inchiderea se fac în această ordine.",
    "O instrucțiune precisă spune acțiunea și detaliul important. „Pune ingredientul” lasa întrebări despre loc și cantitate; un robot urmează exact cuvintele, nu ghicește. Algoritmul are Start și Sfarsit, iar un pas greșit sau lipsa este un bug de reparat. Pentru un sandvis real, adultul manuieste cutitele și aparatele fierbinti."
  ],
  "4.2": [
    "O secventa face acțiuni una după altă, ca „deschide usa, intră, închide”. O conditie pune o întrebare cu drumuri diferite: dacă ploua, iei umbrela; altfel, iei sapca. In demo, culoarea rosie decide dacă stai sau treci.",
    "O bucla repetă o acțiune: de zece ori sau cât timp conditia rămâne adevărată. O bucla sigură are conditie de oprire și o schimbare care o apropie de oprire; fără ele devine infinita, adică nu se termina."
  ],
  "4.3": [
    "O variabila este o cutie etichetata care ține o valoare. `scor = 0` creeaza sau actualizeaza cutia scor cu zero. Semnul `=` pune o valoare în cutie, nu întreabă dacă două lucruri sunt egale.",
    "La `scor = scor + 10`, calculatorul citește scorul vechi, aduna 10 și pune rezultatul nou înapoi: 0 devine 10, apoi 20. La final, afisarea citește cutia și arată scorul final."
  ],
  "4.4": [
    "Scratch este un limbaj cu blocuri care se imbina. Un eveniment este ceva care pornește codul: „când se apasă steagul verde” începe stiva de blocuri când apesi steagul.",
    "Bucla „mereu” repetă blocurile din ea cât timp proiectul rulează și se oprește cu butonul Stop. Conditia întreabă, de exemplu, dacă personajul atinge marginea, iar variabila `scor` ține punctele; „schimbă scor cu 1” aduna un punct. Testarea înseamnă pornește, observă, schimbă un bloc și rulează din nou."
  ],
  "4.5": [
    "Python este un limbaj scris ca text. `input(...)` afiseaza o întrebare și așteaptă răspunsul, iar `nume = input(...)` il păstrează în variabila nume. `print(...)` afiseaza textul dintre ghilimele și valorile variabilelor fără ghilimele.",
    "Un fișier `.py`, precum `salut.py`, contine cod Python. Comanda `python3 salut.py` cere Python 3 să ruleze acel fișier din dosarul curent. Un `SyntaxError` spune ca s-a greșit o regulă de scriere; „line 2” arată a două linie, pe care o repari și rulezi iar. Foloseste numai nume inventate, fără parole sau date personale."
  ],
  "4.6": [
    "Un tip de date spune ce fel de valoare este: `42` este număr, iar `\"42\"` este text. `input()` intoarce mereu text; `int(...)` transforma un text format din cifre într-un număr întreg. Un boolean are doar `True` sau `False` și apare din comparatii ca `x < 5`.",
    "`while x < 5` repetă cât timp comparatia e adevărată, deci x trebuie schimbat ca bucla să se opreasca. `for i în range(3)` face exact trei ture cu 0, 1, 2. `if`, `elif`, `else` verifică cazurile în ordine, așa ca regulă cea mai speciala se scrie prima."
  ],
  "4.7": [
    "Debugging înseamnă gasirea cauzei cu dovezi: spui ce trebuia să se intample, ce s-a intamplat și unde difera. O eroare de sintaxa oprește programul; o eroare de logica lasa programul să ruleze, dar dă un rezultat greșit.",
    "O ipoteza este o explicație testabila. `print(\"DEBUG tip:\", type(varsta))` arată tipul valorii, iar `<class 'str'>` înseamnă text. `int(input(...))` transforma răspunsul numeric în număr; apoi testezi reparatia cu 5, 12 și 18, notezi lectia și stergi mesajul DEBUG."
  ],
  "4.8": [
    "`import random` face disponibil modulul cu unelte aleatorii, iar `random.randint(1, 100)` produce un număr pseudoaleator între 1 și 100, inclusiv capetele. `secret` ține numărul ales, iar `ghicit` ține propunerea jucatorului.",
    "`while ghicit != secret` continuă cât timp valorile nu sunt egale, dar ghicit trebuie să primeasca mai întâi o valoare. `if ghicit < secret` înseamnă prea mic, iar `elif ghicit > secret` prea mare; contorul crește la fiecare tura. Alegand jumatatea intervalului poti garanta cel mult 7 incercari; textul precum „abc” nu se transforma direct cu `int()`."
  ],
  "5.1": [
    "Browserul este programul pentru pagini web, iar URL-ul este adresă scrisă în el. DNS traduce numele `exemplu.ro` într-o adresă IP numerică. Cererea pleacă prin router, aparatul care trimite pachete spre următoarea etapă, către serverul care pregătește răspunsul.",
    "Pachetele sunt bucăți mici de date care pot trece prin mai multe routere și pot reveni pe alt drum. Browserul folosește HTML pentru structură și CSS pentru aspect ca să deseneze pagina. Harta demo este simplificată; folosește doar site-uri publice cunoscute și nu publică detalii despre rețeaua casei."
  ],
  "5.2": [
    "DNS, Domain Name System, găsește adresă IP pentru un nume de domeniu. Cache-ul este memoria temporara care păstrează un răspuns. Daca lipseste, resolverul poate intreba ierarhia: rădăcina, extensia `.ro`, apoi serverul autoritativ al domeniului.",
    "Un domeniu poate avea mai multe IP-uri; `203.0.113.7` este o adresă rezervata pentru exemple. Un răspuns DNS greșit poate indruma spre locul nepotrivit. HTTPS verifică certificatul domeniului și protejeaza conexiunea, dar verifici mereu domeniul complet și avertismentele; nu modifici DNS, hosts sau routerul."
  ],
  "5.3": [
    "O adresă IP identifica o destinatie, iar un pachet este o bucata de mesaj cu etichete despre destinatie și ordine. Routerul casei trimite pachetul spre furnizor; fiecare router alege doar următorul hop, nu tot drumul.",
    "`192.168.1.10` este exemplu de adresă privata, folosită numai în rețeaua locală. NAT este traducerea prin care routerul permite dispozitivelor private să primeasca răspunsuri prin conexiunea publică. Pachetele pot ajunge în altă ordine sau lipsi; protocolul stabilește dacă se reordoneaza ori se retrimit. Nu nota sau publică IP-ul public al familiei."
  ],
  "5.4": [
    "Clientul începe conversatia cerand ceva, iar serverul așteaptă cereri și răspunde. Browserul, aplicația YouTube sau jocul de consola sunt clienti în exemplele demo; nginx pe Pi este programul-server care serveste pagini.",
    "Rolul depinde de conversatie, nu de dispozitiv. Baza de date a bancii este server pentru programul bancii, nu pentru acces direct. Exersezi numai pe un server local controlat de familie, fără conturile ori datele altor persoane."
  ],
  "5.5": [
    "HTTP este protocolul, adică regulile dialogului web. `GET /despre` cere resursa de la calea `/despre`. Codul 200 înseamnă succes, 404 ca resursa nu a fost gasita, iar 500 ca serverul a avut o problemă interna; 4xx indica de obicei o problemă cu cererea sau accesul.",
    "HTTPS folosește TLS pentru a verifică certificatul domeniului și a cripta schimbul de date. Lacatul protejeaza conexiunea, nu dovedește ca site-ul este cinstit, deci verifici și adresă. Inspectezi doar pagina locală sau una permisa și nu introduci parole, carduri ori date private pentru test."
  ],
  "5.6": [
    "HTML descrie structură: `<h1>` începe un titlu, `</h1>` il incheie, iar `<p>` incadreaza un paragraf. `index.html` este numele obișnuit al paginii principale. CSS schimbă aspectul, precum fundalul, culorile și marimile.",
    "`scp index.html utilizator@server:/var/www/html/` copiaza securizat un fișier: scp copiaza, partea din mijloc identifica un cont și server controlate de familie, iar ultima parte este un dosar tipic de site. `nano` este editor de terminal, iar F5 reincarca pagina. Adultul confirma comandă; site-ul rămâne local, fără porturi deschise, IP publicat sau date personale."
  ],
  "6.1": [
    "Datele sunt informații. Cele structurate au aceleasi coloane pentru fiecare obiect, ca o lista de note sau un orar; randurile sunt obiectele, iar coloanele sunt felurile de informații. Datele nestructurate, ca un selfie, o poveste audio sau un desen, nu incap complet în aceleasi coloane.",
    "In demo alegi după întrebare: poate fiecare obiect fi pus în același format fără să-i pierzi partea principala? Foloseste numai obiecte, personaje și colectii inventate, nu persoane, note, adrese sau locatii reale."
  ],
  "6.2": [
    "Un tabel are coloane și randuri. O cheie primara este un identificator unic, ca `id=1`. In demo, JUCATOR păstrează fiecare jucator o singură dată, iar SCORURI păstrează rezultatele jocurilor.",
    "O cheie straina este o valoare dintr-un tabel care arată spre cheia primara din altul. `id_jucator=1` spune cui apartine scorul; astfel Ana poate avea mai multe scoruri fără să-i repetam numele. Relatiile permit schimbarea numelui într-un singur loc și folosesc doar personaje și identificatori inventati."
  ],
  "6.3": [
    "SQL este limbajul pentru întrebări către o bază de date. `SELECT nume, scor` alege coloanele, `FROM jucatori` numește tabelul, iar `WHERE scor > 100` filtreaza randurile potrivite. `ORDER BY scor DESC` sorteaza de la mare la mic; `ASC` ar sorta invers.",
    "Rezultatul `SELECT` este un mini-tabel și nu modifica datele. `*` cere toate coloanele, dar numele clare sunt mai usor de înțeles. Lucrezi numai cu bază de test și personaje inventate: înainte de `UPDATE` sau `DELETE`, rulezi `SELECT` cu același `WHERE`, fiindca fără filtru pot fi afectate toate randurile."
  ],
  "6.4": [
    "Cloud-ul înseamnă servicii oferite de calculatoare fizice din centre de date, cu servere, cabluri, electricitate și racire. Nu este un loc magic. Poate oferi stocare sau putere de calcul fără să cumperi și intretii tu hardware-ul.",
    "Comparam local, server local și cloud după administrator, acces la date, cost și copie de rezerva. Un serviciu gratuit poate fi sustinut prin abonamente, reclame, date agregate sau alt model, deci citesti regulile. Pi-ul este server personal, nu cloud comercial; folosește numai fișiere fictive și păstrează o copie independenta."
  ],
  "6.5": [
    "Python arată meniul și citește alegerea cu `input()`. SQLite este bază locală care păstrează randurile în `catalog.db`, astfel ca ele rămân după inchiderea programului. `INSERT` adauga, iar `SELECT` afiseaza sau caută.",
    "In `SELECT * FROM jocuri WHERE gen = ?`, `WHERE` filtreaza genul, iar `?` este un parametru: valoarea trimisa de Python rămâne separata de comandă SQL. `COUNT` numara și `AVG` calculează media. Foloseste date permise sau inventate, fa copie `.db` înainte de schimbări mari, cere confirmare pentru `DELETE` și testeaza restaurarea într-un dosar separat."
  ]
};
