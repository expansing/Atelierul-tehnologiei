const DEMO_GUIDES_D = {
  "10.1": [
    "AI este un nume pentru programe care caută tipare în exemple. Clasificarea pune un lucru într-o categorie aleasă dinainte: filtrul de email decide între «spam» și «nu spam». Recunoasterea este altceva: găsește sau identifica un tipar, de exemplu transforma vorbirea în text ori localizeaza fețe în fotografie; poate folosi clasificare în interior, dar nu înseamnă doar alegerea unei etichete.",
    "Recomandarea ordoneaza lucrurile pe care o aplicație crede ca ai vrea să le vezi, predicția estimeaza ceva ce urmează, iar generarea creeaza text, imagini sau sunete noi. In demonstrație, întreabă pentru fiecare exemplu: alege o categorie, sugereaza, estimeaza sau creeaza? Telefonul poate recunoaste o față, în timp ce filtrul de spam clasifica un mesaj; fiecare rezultat rămâne o estimare, nu o certitudine."
  ],
  "10.2": [
    "Un program clasic urmează reguli scrise clar de oameni: dacă apare un anumit semn, face o anumita acțiune. Pentru un exemplu mic de spam, regulă poate caută două cuvinte suspecte, dar cei care trimit mesaje nedorite pot schimbă scrierea. Cand se aduna multe exceptii, regulile devin greu de citit și verificat.",
    "In machine learning, oamenii pregatesc exemple etichetate, adică exemple cu răspunsul corect deja notat, precum «spam» sau «nu spam». Modelul este rezultatul antrenarii: un calcul care a învățat tipare din exemple și estimeaza etichetă unui mesaj nou. Nu ghicește magic și nu garanteaza răspunsul; alegem ML doar când tiparul e greu de descris prin reguli, iar rezultatul poate fi verificat de un om."
  ],
  "10.3": [
    "Datele de antrenament sunt exemplele din care modelul învață, iar datele de test sunt păstrate deoparte pentru un examen cinstit. Un rezultat perfect pe pozele vazute deja poate insemna memorare, nu înțelegerea tiparului. De aceea demonstratia compară aceeași sarcina pe exemple cunoscute și pe obiecte noi, în lumină sau pozitie diferita.",
    "Diversitatea înseamnă ca exemplele variaza: fundal, unghi, distanță, lumină și obiecte care nu apartin claselor. Daca toate pozele cu pisici au aceeași canapea, modelul poate învață canapeaua în locul pisicii. GIGO înseamnă «date proaste la intrare, rezultate proaste la ieșire»: un scor de 97% arată cât de sigur pară modelul, nu dovedește ca are dreptate."
  ],
  "10.4": [
    "Un neuron artificial este un mic calcul: primește numere, dă fiecarei intrari o greutate, le aduna și compară suma cu un prag. Greutatea arată cât conteaza o intrare; una negativa impinge rezultatul în directia opusa. In exemplul cu sandwichul, legumele pot avea influenta pozitiva, iar multe calorii una negativa.",
    "Mai mulți neuroni asezati în straturi formeaza o rețea neuronala. Un strat trimite numerele sale urmatorului, așa ca o rețea de imagini poate trece de la pixeli la forme și apoi la o categorie. La antrenare, compară răspunsul cu etichetă corectă și ajusteaza puțîn greutatile pentru a micsora eroarea. Este matematica inspirata doar vag de creier, nu un creier viu care înțelege."
  ],
  "10.5": [
    "Un token este o bucata de text pe care modelul o poate citi: uneori un cuvant, alteori o parte de cuvant sau un semn. Tokenizarea sparge textul în astfel de bucăți, apoi fiecare bucata devine un număr. LLM înseamnă Large Language Model: o rețea antrenata să estimeze ce token ar putea urma după cele dinainte.",
    "La fiecare pas, modelul dă mai multe probabilitati, ca o lista de continuari posibile. Alege un token, il adauga la text și repetă; de aceea același prompt poate avea răspunsuri diferite. Temperatura controleaza cât de mult poate alege dintre variante, nu cât de adevărat este răspunsul. O halucinatie este o afirmație inventata, dar plauzibilă, așa ca fluenta nu înlocuiește verificarea faptelor."
  ],
  "10.6": [
    "AI poate fi profesor atunci când explica, pune întrebări, ofera un indiciu sau verifică un pas pe care l-ai incercat tu. Devine o carja când ii ceri produsul gata făcut ca să nu mai gandesti. In demonstrație, asculta intentia cererii: «explica-mi» și «nu-mi dă răspunsul» sustin invatarea, iar «rezolva tot» o ocolesc.",
    "Regula «Intai gândește» înseamnă: încearcă singur, scrie unde te-ai blocat, apoi pune o întrebare precisă. Dupa ajutor, refa problemă fără AI și explica ideea a două zi. Aceasta este proba intelegerii. Un răspuns AI poate avea greseli sau poate rata cerinta profesorului, iar parolele, datele personale și lucrarile altora nu se introduc în conversatie."
  ],
  "10.7": [
    "Un proiect de clasificare începe cu o problemă mică, masurabila, și cu clase clare: de exemplu, cateva obiecte proprii și o clasa «altceva». Datele sunt poze cu acord, variate ca lumină, unghi și fundal. Antrenarea transforma aceste exemple într-o prima versiune de model; nu este finalul proiectului.",
    "Evaluarea este examenul cu cazuri noi, nefolosite la antrenare. Noteaza raspunsurile corecte și greșite, apoi caută tiparul erorilor: poate două obiecte roșii se confunda în lumină slaba. Iteratia înseamnă ca adaugi exact datele care lipsesc, faci versiunea următoare și compari cinstit pe același test. Raportul trebuie să includă limitările, nu doar reusitele."
  ],
  "11.1": [
    "O afirmație poate fi verificata: «Canberra este capitala Australiei». O opinie, precum «Canberra este frumoasă», are nevoie de criterii și nu are un singur răspuns măsurabil. Incepe verificarea prin a scrie afirmatia mică și exactă, apoi întreabă ce fel de dovadă ar putea să o confirme sau să o contrazică.",
    "O sursa primara este un material apropiat de eveniment, cum ar fi o măsurătoare originala, un studiu sau un document creat atunci. O enciclopedie ori un site oficial pot fi surse secundare sau institutionale utile pentru context, dar nu sunt automat surse primare. Verifica autorul, dată și independenta: două pagini care repetă aceeași idee nu devin două dovezi. Cand se poate, un experiment sigur și repetabil adauga propria observatie."
  ],
  "11.2": [
    "Un deepfake este conținut audio, video sau imagine creat ori modificat pentru a parea real. Imperfectiunile vizuale pot fi indicii, dar nu sunt detectori siguri: imaginile se îmbunătățesc, iar o imagine reala poate fi scoasă din context. Primul lucru verificat este originea: cine a publicat și unde este materialul original?",
    "Cautarea inversa pornește de la o imagine pentru a vedea unde a mai aparut și când. Ea poate arată ca o fotografie veche este prezentata ca un eveniment nou. Pentru un clip socant sau un apel care cere bani, oprește distribuirea și verifică pe un canal cunoscut, separat. Un conținut amuzant cu chipul altcuiva cere acord; nu-l raspandi doar fiindca pară convingator."
  ],
  "11.3": [
    "Un algoritm de recomandare folosește semnale precum timpul de vizionare, aprecierile, pauzele sau derularea. Aceste date nu spun perfect ce iti place ori ce iti face bine; spun doar ce ai făcut în aplicație. Platforma folosește apoi tiparele pentru a decide ce postare iti arată în continuare.",
    "Bucla de feedback are pași repetati: comportament, date, recomandare, apoi comportament nou. Daca rămâi la cateva clipuri despre jocuri, feedul poate arată mai multe clipuri similare, iar alegerea următoare întărește sau slăbește semnalul. O camera de rezonanță apare când aceleasi idei se repetă mult. Demonstrația nu dovedește ca toate recomandarile au un singur scop, ci ajută copilul să observe cum propriile acțiuni modeleaza feedul."
  ],
  "11.4": [
    "O permisiune este acordul dat unei aplicatii să foloseasca o parte a dispozitivului, cum ar fi camera, locatia sau contactele. Intrebarea buna nu este doar «poate aplicația?», ci «are nevoie functia de această permisiune acum?». O aplicație foto are un motiv pentru camera; o lanterna care cere contacte merita privita cu atentie.",
    "Datele personale pot include numele, vocea, locatia, pozele și obiceiurile. In demonstrație, clasificam cererile după legatura lor cu functia promisa, nu presupunem ca orice cerere este rea. Revocarea unei permisiuni se face cu un adult și poate schimbă functionarea aplicatiei. Etica adauga întrebarea: chiar dacă pot publică o poză sau colecta o informație, am acordul și este corect?"
  ],
  "11.5": [
    "Un asistent AI responsabil începe cu un rol scris: ajută la invatare prin explicații și întrebări, nu face tema în locul copilului. Filtrul de date este regulă care oprește introducerea numelui complet, adresei, scolii, parolelor, codurilor sau imaginilor altora fără acord. O întrebare buna spune contextul, ce ai incercat și ce fel de ajutor ceri.",
    "Avertismentul «verifică afirmatiile importante» aminteste ca răspunsul nu este dovadă. Pentru o informație care conteaza, folosim protocolul: afirmație precisă, dovadă potrivită, surse independente și, când e sigur, experiment. Jurnalul nu este o lista de rușini; noteaza o eroare prinsă, verificarea făcută și regulă care ar putea evita aceeași greșeală dată viitoare."
  ],
  "12.1": [
    "O stație meteo IoT este un lanț de verigi: senzorul măsoară, ESP32 citește, trimite un mesaj, serverul il primește, bază de date il păstrează, iar dashboardul il arată. JSON este text organizat în perechi nume-valoare, de pilda temperatură și umiditate. Fiecare măsurare are nevoie și de momentul în care a fost făcută.",
    "Validarea verifică dacă un mesaj are toate campurile și valori plauzibile înainte de a fi salvat. Un server poate refuza o temperatură imposibilă sau un mesaj fără timp; asta nu repara senzorul, dar oprește datele greșite să devina grafic. «POST» înseamnă ca dispozitivul trimite date serverului, iar INSERT adauga un rând în bază de date. Tot montajul rămâne la 5 V, iar Wi-Fi și senzorii se testeaza pe rând."
  ],
  "12.2": [
    "O automatizare mică urmează lantul intrare, conditie, acțiune: senzorul de lumină vede întuneric, iar ESP32 aprinde pentru scurt timp un LED de 5 V. O regulă buna precizeaza când începe, cât dureaza și cum poate omul să o opreasca manual. In demonstrație, «mișcare» și «întuneric» sunt doar date de test pentru un indicator luminos local, nu pentru un sistem de siguranță.",
    "Fault tolerance înseamnă ca sistemul gestioneaza o eroare previzibila fără comportament ciudat. Daca un senzor rămâne blocat, Wi-Fi cade sau valoarea nu se schimbă mult timp, programul limitează durata, noteaza ce a observat și lasa un control manual. Fail-safe înseamnă ca iesirea de test ajunge într-o stare cunoscută, de exemplu LED-ul stins și un mesaj local «senzor de verificat». Nu folosim alarme, instalatii ori dispozitive de siguranță."
  ],
  "12.3": [
    "Un robot are senzori, care observă, și actuatori, care produc mișcare ori lumină. Prioritatile rezolva reguli care se bat cap în cap: dacă senzorul de distanță vede un obstacol aproape, robotul oprește motoarele înainte să urmareasca linia. Acesta este primul nivel al deciziei; abia după drum liber pot lucra senzorii IR și regulile de misiune.",
    "Telemetria este un mesaj periodic cu starea robotului, distantele și decizia curenta, trimis către un dashboard pentru observare. Ea ajută la debugging, dar robotul trebuie să poată opri local chiar când Wi-Fi lipseste. In demonstrație, istoricul arată unde a ezitat, nu ce «gandea» ca un om. Testele se fac la viteză mică, pe traseu liber, cu un adult care poate opri alimentarea."
  ],
  "12.4": [
    "AI Vision leagă camera de un clasificator: camera ofera imaginea, modelul estimeaza clasa, iar programul alege o acțiune mică. Pragul de decizie este scorul minim stabilit de proiectant pentru acțiune. Sub prag, sistemul spune «nesigur» și cere verificare; peste prag poate aprinde un LED de 5 V sau actualiza un dashboard. Scorul nu este garantie.",
    "Fiecare clasificare poate intră într-un jurnal cu timpul și scorul, astfel incat să comparam predictia cu ce era de fapt în cadru. O matrice de confuzie este un tabel care arată ce obiect real a fost confundat cu ce etichetă. Fallback-ul este comportamentul prudent când modelul nu este sigur. Camera rămâne orientata spre obiecte, cu acordul persoanelor din zona, fără recunoastere faciala sau publicarea imaginilor."
  ],
  "12.5": [
    "Un proiect de inginerie începe cu observarea unei probleme reale, nu cu alegerea unei piese interesante. O cerinta spune clar ce trebuie să faca prototipul și cum se verifică; de exemplu, un LED de test se aprinde în cel mult două secunde după ce senzorul detecteaza intunericul. Prototipul este o versiune mică din care învățăm, nu un produs perfect.",
    "Cei zece pași sunt o metoda repetabila: observă, defineste, imaginează, proiecteaza, construieste, testeaza, depaneaza, imbunatateste, documenteaza și prezinta. Arhitectura este harta componentelor și a datelor, iar riscurile spun ce trebuie evitat sau testat cu adultul. Testarea cu utilizatori cere acord, rezultate notate și dreptul de a se opri. Documentatia păstrează deciziile, masuratorile și limitele, ca prezentarea să fie onesta."
  ]
};
