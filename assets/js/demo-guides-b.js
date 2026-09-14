/* Atelierul Tehnologiei - Ghiduri pentru demonstrații, nivelurile 4-6 */
const DEMO_GUIDES_B = {
  "4.1": [
    "Un algoritm este o listă de pași clari pentru un rezultat. În demonstrație, rezultatul este sandvișul: pâinea, pachetul, ingredientul, al doilea strat și închiderea se fac în această ordine.",
    "O instrucțiune precisă spune acțiunea și detaliul important. „Pune ingredientul” lasă întrebări despre loc și cantitate; un robot urmează exact cuvintele, nu ghicește. Algoritmul are Start și Sfârșit, iar un pas greșit sau lipsă este un bug de reparat. Pentru un sandviș real, adultul mânuiește cuțitele și aparatele fierbinți."
  ],
  "4.2": [
    "O secvență face acțiuni una după alta, ca „deschide ușa, intră, închide”. O condiție pune o întrebare cu drumuri diferite: dacă plouă, iei umbrela; altfel, iei șapca. În demo, culoarea roșie decide dacă stai sau treci.",
    "O buclă repetă o acțiune: de zece ori sau cât timp condiția rămâne adevărată. O buclă sigură are condiție de oprire și o schimbare care o apropie de oprire; fără ele devine infinită, adică nu se termină."
  ],
  "4.3": [
    "O variabilă este o cutie etichetată care ține o valoare. `scor = 0` creează sau actualizează cutia scor cu zero. Semnul `=` pune o valoare în cutie, nu întreabă dacă două lucruri sunt egale.",
    "La `scor = scor + 10`, calculatorul citește scorul vechi, aduna 10 și pune rezultatul nou înapoi: 0 devine 10, apoi 20. La final, afișarea citește cutia și arată scorul final."
  ],
  "4.4": [
    "Scratch este un limbaj cu blocuri care se îmbină. Un eveniment este ceva care pornește codul: „când se apasă steagul verde” începe stiva de blocuri când apeși steagul.",
    "Bucla „mereu” repetă blocurile din ea cât timp proiectul rulează și se oprește cu butonul Stop. Condiția întreabă, de exemplu, dacă personajul atinge marginea, iar variabila `scor` ține punctele; „schimbă scor cu 1” adună un punct. Testarea înseamnă pornește, observă, schimbă un bloc și rulează din nou."
  ],
  "4.5": [
    "Python este un limbaj scris ca text. `input(...)` afișează o întrebare și așteaptă răspunsul, iar `nume = input(...)` îl păstrează în variabila nume. `print(...)` afișează textul dintre ghilimele și valorile variabilelor fără ghilimele.",
    "Un fișier `.py`, precum `salut.py`, conține cod Python. Comanda `python3 salut.py` cere Python 3 să ruleze acel fișier din dosarul curent. Un `SyntaxError` spune că s-a greșit o regulă de scriere; „line 2” arată a doua linie, pe care o repari și rulezi iar. Folosește numai nume inventate, fără parole sau date personale."
  ],
  "4.6": [
    "Un tip de date spune ce fel de valoare este: `42` este număr, iar `\"42\"` este text. `input()` întoarce mereu text; `int(...)` transformă un text format din cifre într-un număr întreg. Un boolean are doar `True` sau `False` și apare din comparații ca `x < 5`.",
    "`while x < 5` repetă cât timp comparația e adevărată, deci x trebuie schimbat ca bucla să se oprească. `for i in range(3)` face exact trei ture cu 0, 1, 2. `if`, `elif`, `else` verifică cazurile în ordine, așa că regula cea mai specială se scrie prima."
  ],
  "4.7": [
    "Debugging înseamnă găsirea cauzei cu dovezi: spui ce trebuia să se întâmple, ce s-a întâmplat și unde diferă. O eroare de sintaxă oprește programul; o eroare de logică lasă programul să ruleze, dar dă un rezultat greșit.",
    "O ipoteză este o explicație testabilă. `print(\"DEBUG tip:\", type(varsta))` arată tipul valorii, iar `<class 'str'>` înseamnă text. `int(input(...))` transformă răspunsul numeric în număr; apoi testezi reparația cu 5, 12 și 18, notezi lecția și ștergi mesajul DEBUG."
  ],
  "4.8": [
    "`import random` face disponibil modulul cu unelte aleatorii, iar `random.randint(1, 100)` produce un număr pseudoaleator între 1 și 100, inclusiv capetele. `secret` ține numărul ales, iar `ghicit` ține propunerea jucătorului.",
    "`while ghicit != secret` continuă cât timp valorile nu sunt egale, dar ghicit trebuie să primească mai întâi o valoare. `if ghicit < secret` înseamnă prea mic, iar `elif ghicit > secret` prea mare; contorul crește la fiecare tură. Alegând jumătatea intervalului poți garanta cel mult 7 încercări; textul precum „abc” nu se transformă direct cu `int()`."
  ],
  "5.1": [
    "Browserul este programul pentru pagini web, iar URL-ul este adresă scrisă în el. DNS traduce numele `exemplu.ro` într-o adresă IP numerică. Cererea pleacă prin router, aparatul care trimite pachete spre următoarea etapă, către serverul care pregătește răspunsul.",
    "Pachetele sunt bucăți mici de date care pot trece prin mai multe routere și pot reveni pe alt drum. Browserul folosește HTML pentru structură și CSS pentru aspect ca să deseneze pagina. Harta demo este simplificată; folosește doar site-uri publice cunoscute și nu publică detalii despre rețeaua casei."
  ],
  "5.2": [
    "DNS, Domain Name System, găsește adresă IP pentru un nume de domeniu. Cache-ul este memoria temporară care păstrează un răspuns. Dacă lipsește, resolverul poate întreba ierarhia: rădăcina, extensia `.ro`, apoi serverul autoritativ al domeniului.",
    "Un domeniu poate avea mai multe IP-uri; `203.0.113.7` este o adresă rezervată pentru exemple. Un răspuns DNS greșit poate îndruma spre locul nepotrivit. HTTPS verifică certificatul domeniului și protejează conexiunea, dar verifici mereu domeniul complet și avertismentele; nu modifici DNS, hosts sau routerul."
  ],
  "5.3": [
    "O adresă IP identifică o destinație, iar un pachet este o bucată de mesaj cu etichete despre destinație și ordine. Routerul casei trimite pachetul spre furnizor; fiecare router alege doar următorul hop, nu tot drumul.",
    "`192.168.1.10` este exemplu de adresă privată, folosită numai în rețeaua locală. NAT este traducerea prin care routerul permite dispozitivelor private să primească răspunsuri prin conexiunea publică. Pachetele pot ajunge în altă ordine sau lipsi; protocolul stabilește dacă se reordonează ori se retrimit. Nu nota sau publică IP-ul public al familiei."
  ],
  "5.4": [
    "Clientul începe conversația cerând ceva, iar serverul așteaptă cereri și răspunde. Browserul, aplicația YouTube sau jocul de consolă sunt clienți în exemplele demo; nginx pe Pi este programul-server care servește pagini.",
    "Rolul depinde de conversație, nu de dispozitiv. Baza de date a băncii este server pentru programul băncii, nu pentru acces direct. Exersezi numai pe un server local controlat de familie, fără conturile ori datele altor persoane."
  ],
  "5.5": [
    "HTTP este protocolul, adică regulile dialogului web. `GET /despre` cere resursa de la calea `/despre`. Codul 200 înseamnă succes, 404 că resursa nu a fost găsită, iar 500 că serverul a avut o problemă internă; 4xx indică de obicei o problemă cu cererea sau accesul.",
    "HTTPS folosește TLS pentru a verifica certificatul domeniului și a cripta schimbul de date. Lacătul protejează conexiunea, nu dovedește că site-ul este cinstit, deci verifici și adresa. Inspectezi doar pagina locală sau una permisă și nu introduci parole, carduri ori date private pentru test."
  ],
  "5.6": [
    "HTML descrie structură: `<h1>` începe un titlu, `</h1>` îl încheie, iar `<p>` încadrează un paragraf. `index.html` este numele obișnuit al paginii principale. CSS schimbă aspectul, precum fundalul, culorile și mărimile.",
    "`scp index.html utilizator@server:/var/www/html/` copiază securizat un fișier: scp copiază, partea din mijloc identifică un cont și server controlate de familie, iar ultima parte este un dosar tipic de site. `nano` este editor de terminal, iar F5 reîncarcă pagina. Adultul confirmă comanda; site-ul rămâne local, fără porturi deschise, IP publicat sau date personale."
  ],
  "6.1": [
    "Datele sunt informații. Cele structurate au aceleași coloane pentru fiecare obiect, ca o listă de note sau un orar; rândurile sunt obiectele, iar coloanele sunt felurile de informații. Datele nestructurate, ca un selfie, o poveste audio sau un desen, nu încap complet în aceleași coloane.",
    "În demo alegi după întrebare: poate fiecare obiect fi pus în același format fără să-i pierzi partea principală? Folosește numai obiecte, personaje și colecții inventate, nu persoane, note, adrese sau locații reale."
  ],
  "6.2": [
    "Un tabel are coloane și rânduri. O cheie primară este un identificator unic, ca `id=1`. În demo, JUCATOR păstrează fiecare jucător o singură dată, iar SCORURI păstrează rezultatele jocurilor.",
    "O cheie străină este o valoare dintr-un tabel care arată spre cheia primară din altul. `id_jucator=1` spune cui aparține scorul; astfel Ana poate avea mai multe scoruri fără să-i repetăm numele. Relațiile permit schimbarea numelui într-un singur loc și folosesc doar personaje și identificatori inventați."
  ],
  "6.3": [
    "SQL este limbajul pentru întrebări către o bază de date. `SELECT nume, scor` alege coloanele, `FROM jucatori` numește tabelul, iar `WHERE scor > 100` filtrează rândurile potrivite. `ORDER BY scor DESC` sortează de la mare la mic; `ASC` ar sorta invers.",
    "Rezultatul `SELECT` este un mini-tabel și nu modifică datele. `*` cere toate coloanele, dar numele clare sunt mai ușor de înțeles. Lucrezi numai cu bază de test și personaje inventate: înainte de `UPDATE` sau `DELETE`, rulezi `SELECT` cu același `WHERE`, fiindcă fără filtru pot fi afectate toate rândurile."
  ],
  "6.4": [
    "Cloud-ul înseamnă servicii oferite de calculatoare fizice din centre de date, cu servere, cabluri, electricitate și răcire. Nu este un loc magic. Poate oferi stocare sau putere de calcul fără să cumperi și întreții tu hardware-ul.",
    "Comparăm local, server local și cloud după administrator, acces la date, cost și copie de rezervă. Un serviciu gratuit poate fi susținut prin abonamente, reclame, date agregate sau alt model, deci citești regulile. Pi-ul este server personal, nu cloud comercial; folosește numai fișiere fictive și păstrează o copie independentă."
  ],
  "6.5": [
    "Python arată meniul și citește alegerea cu `input()`. SQLite este bază locală care păstrează rândurile în `catalog.db`, astfel ca ele rămân după închiderea programului. `INSERT` adaugă, iar `SELECT` afișează sau caută.",
    "În `SELECT * FROM jocuri WHERE gen = ?`, `WHERE` filtrează genul, iar `?` este un parametru: valoarea trimisă de Python rămâne separată de comanda SQL. `COUNT` numără și `AVG` calculează media. Folosește date permise sau inventate, fă copie `.db` înainte de schimbări mari, cere confirmare pentru `DELETE` și testează restaurarea într-un dosar separat."
  ]
};
