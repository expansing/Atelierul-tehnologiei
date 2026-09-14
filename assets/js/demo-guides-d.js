const DEMO_GUIDES_D = {
  "10.1": [
    "AI este un nume pentru programe care caută tipare în exemple. Clasificarea pune un lucru într-o categorie aleasă dinainte: filtrul de email decide între «spam» și «nu spam». Recunoașterea este altceva: găsește sau identifică un tipar, de exemplu transformă vorbirea în text ori localizează fețe în fotografie; poate folosi clasificare în interior, dar nu înseamnă doar alegerea unei etichete.",
    "Recomandarea ordonează lucrurile pe care o aplicație crede că ai vrea să le vezi, predicția estimează ceva ce urmează, iar generarea creează text, imagini sau sunete noi. În demonstrație, întreabă pentru fiecare exemplu: alege o categorie, sugerează, estimează sau creează? Telefonul poate recunoaște o față, în timp ce filtrul de spam clasifică un mesaj; fiecare rezultat rămâne o estimare, nu o certitudine."
  ],
  "10.2": [
    "Un program clasic urmează reguli scrise clar de oameni: dacă apare un anumit semn, face o anumită acțiune. Pentru un exemplu mic de spam, regula poate căuta două cuvinte suspecte, dar cei care trimit mesaje nedorite pot schimba scrierea. Când se adună multe excepții, regulile devin greu de citit și verificat.",
    "În machine learning, oamenii pregătesc exemple etichetate, adică exemple cu răspunsul corect deja notat, precum «spam» sau «nu spam». Modelul este rezultatul antrenării: un calcul care a învățat tipare din exemple și estimează eticheta unui mesaj nou. Nu ghicește magic și nu garantează răspunsul; alegem ML doar când tiparul e greu de descris prin reguli, iar rezultatul poate fi verificat de un om."
  ],
  "10.3": [
    "Datele de antrenament sunt exemplele din care modelul învață, iar datele de test sunt păstrate deoparte pentru un examen cinstit. Un rezultat perfect pe pozele văzute deja poate însemna memorare, nu înțelegerea tiparului. De aceea demonstrația compară aceeași sarcină pe exemple cunoscute și pe obiecte noi, în lumină sau poziție diferită.",
    "Diversitatea înseamnă că exemplele variază: fundal, unghi, distanță, lumină și obiecte care nu aparțin claselor. Dacă toate pozele cu pisici au aceeași canapea, modelul poate învăța canapeaua în locul pisicii. GIGO înseamnă «date proaste la intrare, rezultate proaste la ieșire»: un scor de 97% arată cât de sigur pare modelul, nu dovedește că are dreptate."
  ],
  "10.4": [
    "Un neuron artificial este un mic calcul: primește numere, dă fiecărei intrări o greutate, le adună și compară suma cu un prag. Greutatea arată cât contează o intrare; una negativă împinge rezultatul în direcția opusă. În exemplul cu sandwichul, legumele pot avea influență pozitivă, iar multe calorii una negativă.",
    "Mai mulți neuroni așezați în straturi formează o rețea neuronală. Un strat trimite numerele sale următorului, așa că o rețea de imagini poate trece de la pixeli la forme și apoi la o categorie. La antrenare, compară răspunsul cu eticheta corectă și ajustează puțin greutățile pentru a micșora eroarea. Este matematică inspirată doar vag de creier, nu un creier viu care înțelege."
  ],
  "10.5": [
    "Un token este o bucată de text pe care modelul o poate citi: uneori un cuvânt, alteori o parte de cuvânt sau un semn. Tokenizarea sparge textul în astfel de bucăți, apoi fiecare bucată devine un număr. LLM înseamnă Large Language Model: o rețea antrenată să estimeze ce token ar putea urma după cele dinainte.",
    "La fiecare pas, modelul dă mai multe probabilități, ca o listă de continuări posibile. Alege un token, îl adaugă la text și repetă; de aceea același prompt poate avea răspunsuri diferite. Temperatura controlează cât de mult poate alege dintre variante, nu cât de adevărat este răspunsul. O halucinație este o afirmație inventată, dar plauzibilă, așa că fluența nu înlocuiește verificarea faptelor."
  ],
  "10.6": [
    "AI poate fi profesor atunci când explică, pune întrebări, oferă un indiciu sau verifică un pas pe care l-ai încercat tu. Devine o cârjă când îi ceri produsul gata făcut ca să nu mai gândești. În demonstrație, ascultă intenția cererii: «explică-mi» și «nu-mi dă răspunsul» susțin învățarea, iar «rezolvă tot» o ocolesc.",
    "Regula «Întâi gândește» înseamnă: încearcă singur, scrie unde te-ai blocat, apoi pune o întrebare precisă. După ajutor, refă problema fără AI și explică ideea a doua zi. Aceasta este proba înțelegerii. Un răspuns AI poate avea greșeli sau poate rata cerința profesorului, iar parolele, datele personale și lucrările altora nu se introduc în conversație."
  ],
  "10.7": [
    "Un proiect de clasificare începe cu o problemă mică, măsurabilă, și cu clase clare: de exemplu, câteva obiecte proprii și o clasă «altceva». Datele sunt poze cu acord, variate ca lumină, unghi și fundal. Antrenarea transformă aceste exemple într-o primă versiune de model; nu este finalul proiectului.",
    "Evaluarea este examenul cu cazuri noi, nefolosite la antrenare. Notează răspunsurile corecte și greșite, apoi caută tiparul erorilor: poate două obiecte roșii se confundă în lumină slabă. Iterația înseamnă că adaugi exact datele care lipsesc, faci versiunea următoare și compari cinstit pe același test. Raportul trebuie să includă limitările, nu doar reușitele."
  ],
  "11.1": [
    "O afirmație poate fi verificată: «Canberra este capitala Australiei». O opinie, precum «Canberra este frumoasă», are nevoie de criterii și nu are un singur răspuns măsurabil. Începe verificarea prin a scrie afirmația mică și exactă, apoi întreabă ce fel de dovadă ar putea să o confirme sau să o contrazică.",
    "O sursă primară este un material apropiat de eveniment, cum ar fi o măsurătoare originală, un studiu sau un document creat atunci. O enciclopedie ori un site oficial pot fi surse secundare sau instituționale utile pentru context, dar nu sunt automat surse primare. Verifică autorul, data și independența: două pagini care repetă aceeași idee nu devin două dovezi. Când se poate, un experiment sigur și repetabil adaugă propria observație."
  ],
  "11.2": [
    "Un deepfake este conținut audio, video sau imagine creat ori modificat pentru a părea real. Imperfecțiunile vizuale pot fi indicii, dar nu sunt detectori siguri: imaginile se îmbunătățesc, iar o imagine reală poate fi scoasă din context. Primul lucru verificat este originea: cine a publicat și unde este materialul original?",
    "Căutarea inversă pornește de la o imagine pentru a vedea unde a mai apărut și când. Ea poate arăta că o fotografie veche este prezentată ca un eveniment nou. Pentru un clip șocant sau un apel care cere bani, oprește distribuirea și verifică pe un canal cunoscut, separat. Un conținut amuzant cu chipul altcuiva cere acord; nu-l răspândi doar fiindcă pare convingător."
  ],
  "11.3": [
    "Un algoritm de recomandare folosește semnale precum timpul de vizionare, aprecierile, pauzele sau derularea. Aceste date nu spun perfect ce îți place ori ce îți face bine; spun doar ce ai făcut în aplicație. Platforma folosește apoi tiparele pentru a decide ce postare îți arată în continuare.",
    "Bucla de feedback are pași repetați: comportament, date, recomandare, apoi comportament nou. Dacă rămâi la câteva clipuri despre jocuri, feedul poate arăta mai multe clipuri similare, iar alegerea următoare întărește sau slăbește semnalul. O cameră de rezonanță apare când aceleași idei se repetă mult. Demonstrația nu dovedește că toate recomandările au un singur scop, ci ajută copilul să observe cum propriile acțiuni modelează feedul."
  ],
  "11.4": [
    "O permisiune este acordul dat unei aplicații să folosească o parte a dispozitivului, cum ar fi camera, locația sau contactele. Întrebarea bună nu este doar «poate aplicația?», ci «are nevoie funcția de această permisiune acum?». O aplicație foto are un motiv pentru cameră; o lanternă care cere contacte merită privită cu atenție.",
    "Datele personale pot include numele, vocea, locația, pozele și obiceiurile. În demonstrație, clasificăm cererile după legătura lor cu funcția promisă, nu presupunem că orice cerere este rea. Revocarea unei permisiuni se face cu un adult și poate schimba funcționarea aplicației. Etica adaugă întrebarea: chiar dacă pot publica o poză sau colecta o informație, am acordul și este corect?"
  ],
  "11.5": [
    "Un asistent AI responsabil începe cu un rol scris: ajută la învățare prin explicații și întrebări, nu face tema în locul copilului. Filtrul de date este regula care oprește introducerea numelui complet, adresei, școlii, parolelor, codurilor sau imaginilor altora fără acord. O întrebare bună spune contextul, ce ai încercat și ce fel de ajutor ceri.",
    "Avertismentul «verifică afirmațiile importante» amintește că răspunsul nu este dovadă. Pentru o informație care contează, folosim protocolul: afirmație precisă, dovadă potrivită, surse independente și, când e sigur, experiment. Jurnalul nu este o listă de rușini; notează o eroare prinsă, verificarea făcută și regula care ar putea evita aceeași greșeală dată viitoare."
  ],
  "12.1": [
    "O stație meteo IoT este un lanț de verigi: senzorul măsoară, ESP32 citește, trimite un mesaj, serverul îl primește, baza de date îl păstrează, iar dashboardul îl arată. JSON este text organizat în perechi nume-valoare, de pildă temperatură și umiditate. Fiecare măsurare are nevoie și de momentul în care a fost făcută.",
    "Validarea verifică dacă un mesaj are toate câmpurile și valori plauzibile înainte de a fi salvat. Un server poate refuza o temperatură imposibilă sau un mesaj fără timp; asta nu repară senzorul, dar oprește datele greșite să devină grafic. «POST» înseamnă că dispozitivul trimite date serverului, iar INSERT adaugă un rând în baza de date. Tot montajul rămâne la 5 V, iar Wi-Fi și senzorii se testează pe rând."
  ],
  "12.2": [
    "O automatizare mică urmează lanțul intrare, condiție, acțiune: senzorul de lumină vede întuneric, iar ESP32 aprinde pentru scurt timp un LED de 5 V. O regulă bună precizează când începe, cât durează și cum poate omul să o oprească manual. În demonstrație, «mișcare» și «întuneric» sunt doar date de test pentru un indicator luminos local, nu pentru un sistem de siguranță.",
    "Fault tolerance înseamnă că sistemul gestionează o eroare previzibilă fără comportament ciudat. Dacă un senzor rămâne blocat, Wi-Fi cade sau valoarea nu se schimbă mult timp, programul limitează durata, notează ce a observat și lasă un control manual. Fail-safe înseamnă că ieșirea de test ajunge într-o stare cunoscută, de exemplu LED-ul stins și un mesaj local «senzor de verificat». Nu folosim alarme, instalații ori dispozitive de siguranță."
  ],
  "12.3": [
    "Un robot are senzori, care observă, și actuatori, care produc mișcare ori lumină. Prioritățile rezolvă reguli care se bat cap în cap: dacă senzorul de distanță vede un obstacol aproape, robotul oprește motoarele înainte să urmărească linia. Acesta este primul nivel al deciziei; abia după drum liber pot lucra senzorii IR și regulile de misiune.",
    "Telemetria este un mesaj periodic cu starea robotului, distanțele și decizia curentă, trimis către un dashboard pentru observare. Ea ajută la debugging, dar robotul trebuie să poată opri local chiar când Wi-Fi lipsește. În demonstrație, istoricul arată unde a ezitat, nu ce «gândea» ca un om. Testele se fac la viteză mică, pe traseu liber, cu un adult care poate opri alimentarea."
  ],
  "12.4": [
    "AI Vision leagă camera de un clasificator: camera oferă imaginea, modelul estimează clasa, iar programul alege o acțiune mică. Pragul de decizie este scorul minim stabilit de proiectant pentru acțiune. Sub prag, sistemul spune «nesigur» și cere verificare; peste prag poate aprinde un LED de 5 V sau actualiza un dashboard. Scorul nu este garanție.",
    "Fiecare clasificare poate intra într-un jurnal cu timpul și scorul, astfel încât să comparăm predicția cu ce era de fapt în cadru. O matrice de confuzie este un tabel care arată ce obiect real a fost confundat cu ce etichetă. Fallback-ul este comportamentul prudent când modelul nu este sigur. Camera rămâne orientată spre obiecte, cu acordul persoanelor din zonă, fără recunoaștere facială sau publicarea imaginilor."
  ],
  "12.5": [
    "Un proiect de inginerie începe cu observarea unei probleme reale, nu cu alegerea unei piese interesante. O cerință spune clar ce trebuie să facă prototipul și cum se verifică; de exemplu, un LED de test se aprinde în cel mult două secunde după ce senzorul detectează întunericul. Prototipul este o versiune mică din care învățăm, nu un produs perfect.",
    "Cei zece pași sunt o metodă repetabilă: observă, definește, imaginează, proiectează, construiește, testează, depanează, îmbunătățește, documentează și prezintă. Arhitectura este harta componentelor și a datelor, iar riscurile spun ce trebuie evitat sau testat cu adultul. Testarea cu utilizatori cere acord, rezultate notate și dreptul de a se opri. Documentația păstrează deciziile, măsurătorile și limitele, ca prezentarea să fie onestă."
  ]
};
