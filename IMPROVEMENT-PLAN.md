# Atelierul Tehnologiei - Plan de îmbunătățiri

Data scanării: 2026-09-14

## Status implementare

## Checklist implementare

### Milestone 1 - Baza verificabilă

- [x] Validator compatibil cu Node.js 12+ și cod de ieșire pentru probleme.
- [x] Contracte validate pentru demo-uri, scene vizuale, metadate și structura lecțiilor.
- [x] Ordine continuă, format și unicitate pentru cele 69 de ID-uri de lecții.
- [x] Acoperire automată pentru toate obiectivele lecțiilor.
- [x] Audit automat pentru exemplu cotidian sau analogie în fiecare lecție.
- [x] Audit automat de ortografie pentru textul pedagogic, cu excluderea identificatorilor de cod.
- [x] Audit automat de aliniere între etichetele scenelor vizuale și explicația/demo-ul lecției.
- [x] Smoke test static persistent pentru pagini și asset-uri.
- [x] Smoke test static pentru maparea celor 69 de scene vizuale.
- [x] Scene vizuale cu semnătură unică pentru fiecare lecție.
- [x] Audit ortografic extins la toate câmpurile lecției (titlu, demo, experiment, proiect, criterii).
- [x] Corectat contrastul temei întunecate: fundalurile fixe albe din explicație și scenele individuale folosesc acum variabile de temă.
- [x] Audit browser automat persistent în repository pentru interacțiuni și viewport-uri.

### Milestone 2 - Lecție accesibilă și robustă

- [x] Taburi ARIA cu navigare prin tastatură și tab activ în URL.
- [x] Focus vizibil și feedback `aria-live` pentru controalele interactive.
- [x] Demo-uri flow, binary, quiz, classify și logic lab utilizabile cu tastatura.
- [x] Scene SVG cu titlu, descriere text și `aria-describedby`.
- [x] Randare tolerantă la ghiduri demo lipsă.
- [x] Mesaje utile pentru niveluri și lecții inexistente.
- [x] Metadate de siguranță afișate pe nivel și în antetul lecției.

### Milestone 3 - Progres util

- [x] Progres local explicit, fără marcare automată la parcurgere.
- [x] Criterii de trecere bifabile și persistente.
- [x] Finalizarea lecției blocată până la bifarea tuturor criteriilor.
- [x] Export/import pentru progres și criterii.
- [x] Resetare controlată pentru progres și criterii.
- [x] Recomandarea următoarei lecții.
- [x] Versiune pentru formatul progresului exportat.
- [x] Mesaj pentru toate cele 69 de lecții finalizate.

### Milestone 4 - Curriculum și mentenanță

- [x] Vârste orientative lărgite, fără a fi limite de acces.
- [x] Prerechizite, dificultate, supraveghere și risc pentru toate nivelurile.
- [x] Exemple cotidiene adăugate în lecțiile care nu aveau acoperire explicită.
- [x] Diagnostic local prin `?debug=1`.
- [x] Scripturi standard `npm run check`, `npm run validate` și `npm run smoke:static`.
- [ ] Audit editorial manual complet pentru nivelurile 5, 6 și 12.
- [ ] Verificare manuală completă a coerenței explicație -> demo -> exercițiu pentru toate lecțiile.
- [x] Audit automat al potrivirii tematice `kind` ↔ subiectul lecției pentru toate cele 69 de scene (zero nepotriviri găsite; fiecare tip de scenă — circuit, binary, logic, dns/server, layers, terminal, filesystem, data, cloud, ai, vision, weather, smart, virtual, robot, security/critical, microcontroller/sensor/iot/motor, timeline, variables/scratch/python/debug — e specific familiei de concepte a lecției, nu generic).
- [x] Corectat scena vizuală supradimensionată și fără legătură cu acțiunea reală a demo-ului: pentru demo-urile `classify` (9 lecții) scena generică „nevoie→unealtă→soluție” a fost înlocuită cu un exemplu concret, extras direct din datele lecției (un obiect real → cutia lui corectă), iar pentru `quiz` (10 lecții) cu un rezumat text compact, fără SVG. Scena SVG mare rămâne doar pentru `flow`/`binary`, unde e sincronizată cu pașii, dar dimensiunea maximă a fost redusă global (`.individual-scene` acum plafonat la 480px, `.visual-svg` min-height redus de la 245px la 165px).
- [ ] Audit vizual manual (artistic) — proporții, culori, lizibilitate la citire cu voce tare — rămâne un pas ce necesită ochi uman; automatizarea a acoperit deja unicitatea, tipul corect și alinierea etichetă↔text.
- [ ] Feedback real de la copii, părinți sau profesori.
- [x] Prima etapă de migrare: indexul comun al datelor este separat în `assets/js/data-index.js`.
- [x] A doua etapă de migrare: starea progresului este separată în `assets/js/progress-state.js`.
- [x] A treia etapă de migrare: utilitarele UI comune sunt separate în `assets/js/ui-utils.js`.
- [x] A patra etapă de migrare: randarea home este separată în `assets/js/home-render.js`.
- [x] A cincea etapă de migrare: randarea nivelului este separată în `assets/js/level-render.js`.
- [x] A șasea etapă de migrare: acțiunile și navigarea lecției sunt separate în `assets/js/lesson-actions.js`.
- [x] A șaptea etapă de migrare: rutarea demo-urilor este separată în `assets/js/demo-render.js`.
- [x] A opta etapă de migrare: engine-ul binary este separat în `assets/js/binary-engine.js`.
- [x] A noua etapă de migrare: engine-ul quiz este separat în `assets/js/quiz-engine.js`.
- [x] A zecea etapă de migrare: engine-ul classify este separat în `assets/js/classify-engine.js`.
- [x] A unsprezecea etapă de migrare: engine-ul flow este separat în `assets/js/flow-engine.js`.
- [x] A douăsprezecea etapă de migrare: taburile lecției sunt separate în `assets/js/lesson-tabs.js`.
- [x] A treisprezecea etapă de migrare: laboratorul logic este separat în `assets/js/logic-engine.js`.
- [x] A paisprezecea etapă de migrare: orchestrarea explicației este separată în `assets/js/explanation-render.js`.
- [x] A cincisprezecea etapă de migrare: diagnosticul local este separat în `assets/js/diagnostics.js`.
- [x] A șaisprezecea etapă de migrare: verificările interactive ale explicației sunt separate în `assets/js/explanation-checks.js`.
- [x] A șaptesprezecea etapă de migrare: blocurile structurate ale explicației sunt separate în `assets/js/special-blocks.js`.
- [x] A optsprezecea etapă de migrare: intrarea paginii de lecție este separată în `assets/js/lesson-render.js`.
- [x] A nouăsprezecea etapă de migrare: randarea textului și glosarului explicației este separată în `assets/js/explanation-text.js`.
- [x] Cod mort eliminat din `app.js` și `concept-scenes.js` (funcțiile `legacy*` rămase din migrarea în module, nereferite nicăieri).
- [ ] Refactorizarea randărilor HTML mari din `app.js`.
- [x] Quality check pentru trailing whitespace, newline final, CRLF și JSON de configurare.

### Status curent

**Livrat tehnic:** toate itemurile marcate `[x]` sunt implementate și incluse în verificarea proiectului.

**Rămas:** itemurile `[ ]` sunt următoarele tranșe obligatorii; checklistul trebuie actualizat imediat după fiecare implementare și verificare.

### Livrat

- Validator compatibil cu Node.js 12+, cu cod de ieșire pentru date invalide, contracte pentru demo-uri, metadate de nivel, ordine continuă a lecțiilor și acoperirea obiectivelor în explicații/activități.
- Audit automat child-friendly pentru exemple/analogii și acoperirea obiectivelor; au fost corectate lecțiile `5.5`, `5.6` și `6.4`.
- Contract pentru scene vizuale: fiecare lecție trebuie să folosească un `kind` suportat explicit de renderer.
- Erorile de citire/scriere pentru progres și criterii sunt raportate controlat în consola locală, fără tracking sau colectare de date.
- Taburi accesibile, navigare cu tastatura, focus vizibil, feedback `aria-live`, stări semantice pentru demo-uri și descrieri text pentru scenele SVG.
- Progres local cu export, import, resetare, versiune, recomandarea următoarei lecții și mesaj de finalizare.
- Ecrane utile pentru URL-uri invalide, metadate orientative de vârstă, prerechizite, supraveghere și risc.
- `package.json` cu verificări reproductibile și panou de diagnostic local prin `?debug=1`.
- Smoke test static persistent în `smoke-static.js`, inclus în `npm run check`, pentru pagini, asset-uri și contractul minim de rutare.
- Smoke testul verifică și cele 69 de ID-uri de lecții: număr, format și unicitate.
- Smoke testul verifică și maparea vizuală: exact 69 de scene, câte una pentru fiecare lecție, fără duplicate.
- Smoke testing manual pe desktop și mobil pentru home, nivel, lecție și demo-uri.

### Următoarea tranșă

- Audit editorial manual al coerenței dintre explicație, poveste, demo, exerciții și rezultate, începând cu nivelurile 5-6 și 12.
- Revizuirea child-friendly a formulărilor și a exemplelor cotidiene, cu feedback de la copii/părinți când este posibil.
- Audit vizual individual pentru toate scenele: corectitudine tehnică, contrast, proporții, etichete și stări animate.
- Suită automată de browser persistentă în repository; verificările browser executate până acum sunt smoke tests manuale.
- Migrarea graduală de la globale și randare HTML monolitică la module/componente mai mici.

## 1. Ce este proiectul

Atelierul Tehnologiei este un site educațional static, în limba română, pentru copii și părinți. Curriculumul are 12 niveluri și 69 de lecții, de la noțiuni generale despre tehnologie până la proiecte cu electronică, robotică, securitate digitală și AI.

Fluxul principal este:

1. `index.html` afișează nivelurile și progresul global.
2. `level.html?n=...` afișează lecțiile unui nivel.
3. `lesson.html?level=...&lesson=...` afișează obiectivele, explicația, demo-ul interactiv, experimentul, proiectul, întrebările, exercițiile, ghidul pentru părinte și criteriile de trecere.

Aplicația nu are backend și nu folosește un framework. Conținutul este încărcat din fișiere JavaScript, randarea și interacțiunile sunt în `assets/js/app.js`, iar stilurile sunt în `assets/css/main.css`. Progresul și tema sunt salvate în `localStorage`. `validate-data.js` este verificarea editorială pentru curriculum și conținutul demo-urilor.

## 2. Situația actuală

### Puncte forte

- Arhitectură simplă, ușor de pornit local, fără dependențe de instalat pentru utilizare.
- Separare bună între pagini, date de lecții, ghiduri de demo, scene vizuale și conținut explicativ.
- Fiecare lecție are o structură pedagogică bogată și activități concrete.
- Există progres local, temă luminoasă/întunecată, demo-uri de tip flow/binary/quiz/classify și scene vizuale.
- Auditul pedagogic definește o ordine clară pentru introducerea conceptelor și reguli de siguranță.
- Validatorul verifică existența lecțiilor, câmpurile obligatorii, ghidurile, scenele, termenii, blocurile structurate și tabelele de adevăr.
- CSS-ul include deja suport pentru `prefers-reduced-motion` și layout responsive de bază.

### Probleme confirmate sau riscuri apropiate

- `node validate-data.js` nu pornește în runtime-ul Node disponibil: parserul respinge operatorul de optional chaining (`?.`). Astfel, verificarea de conținut este blocată înainte de execuție.
- Interacțiunile sunt în principal implementate prin `click` și clase vizuale. Taburile, jocurile și unele controale nu expun încă o stare semantică completă pentru cititoare de ecran și navigare cu tastatura.
- Taburile nu folosesc roluri ARIA, `aria-selected`, `aria-controls` sau management de focus. Panoul activ este controlat doar prin clase CSS.
- Progresul este salvat numai în `localStorage`, fără export/import, resetare controlată, versiune de schemă sau tratare explicită a erorilor la scriere.
- Pagina de lecție presupune că există un ghid pentru fiecare lecție (`DEMO_GUIDES[l.id].map(...)`), deși în alte locuri codul tratează ghidul ca opțional. O lipsă de date poate produce o eroare de randare în browser.
- Nu există o suită de teste pentru randarea paginilor, navigarea între taburi, demo-uri, progres sau comportamentul pe mobil.
- Nu există un flux vizibil pentru parametri URL invalizi, lecții lipsă sau redirecționări; utilizatorul este trimis acasă fără explicație.
- Conținutul și logica sunt încărcate prin multe scripturi globale. Pe măsură ce curriculumul crește, riscul de ID duplicat, ordine greșită de încărcare și regresii între fișiere crește.
- Interfața folosește multe emoji ca pictograme și are animații decorative continue. Este prietenoasă, dar ar trebui verificată mai riguros pentru lizibilitate, contrast, încărcare cognitivă și preferințe de mișcare.

## 3. Priorități

### P0 - Fiabilitate și verificare

1. **Repară validatorul pentru runtime-uri suportate**
   - Alege o versiune minimă de Node și documenteaz-o, sau rescrie sintaxa incompatibilă cu runtime-urile vechi.
   - Adaugă un mesaj clar când versiunea Node este prea veche.
   - Fă validatorul să returneze cod de ieșire nenul pentru orice problemă și să aibă un rezumat final ușor de citit.
   - Criteriu: `node validate-data.js` rulează în mediul documentat și poate bloca un review atunci când datele sunt invalide.

2. **Adaugă verificări de integritate pentru contractul UI-date**
   - Verifică tipurile de demo acceptate și câmpurile specifice fiecărui tip.
   - Verifică faptul că fiecare nivel, lecție și link intern poate fi rezolvat.
   - Verifică ghidurile înainte de demo fără acces direct nesigur la o cheie absentă.
   - Verifică duplicatele de nume globale, nu doar duplicatele locale dintr-o lecție.

3. **Testează smoke flow-ul în browser**
   - Home -> nivel -> lecție -> fiecare tab -> lecția următoare/anterioară.
   - Include o lecție pentru fiecare tip de demo și un caz cu progres deja salvat.
   - Rulează testele la viewport desktop și mobil.

4. **Verifică alinierea pedagogică a fiecărei lecții**
   - Urmărește traseul complet: situație/poveste familiară -> explicație clară -> demonstrație -> experiment sau exercițiu -> criteriu de trecere.
   - Pentru fiecare concept, notează unde este introdus, unde este exemplificat și unde este exersat; nu lăsa un demo sau exercițiu să ceară o idee care nu a fost explicată înainte.
   - Compară enunțurile, pașii și rezultatele așteptate din lecție cu comportamentul real al demo-ului; elimină contradicțiile de vocabular, valori, ordine sau rezultat.
   - Verifică faptul că povestea și explicația oferă suficiente indicii pentru ca un copil să poată începe exercițiul fără să ghicească regula.
   - Adaugă în validator o matrice minimă de concepte/obiective, cu avertismente pentru obiective fără activitate și activități fără obiectiv.
   - Criteriu: un evaluator poate răspunde pentru fiecare lecție la întrebările „Ce trebuie să înțeleagă?”, „Unde vede asta?”, „Ce face singur?” și „Cum știe că a reușit?”.

### P1 - Accesibilitate și experiență de învățare

5. **Transformă taburile în taburi accesibile**
   - Folosește `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected` și `aria-controls`.
   - Adaugă navigare cu săgeți, Home/End și focus vizibil.
   - Păstrează tabul activ în URL sau în istoria browserului, astfel încât refresh-ul și back/forward să fie previzibile.

6. **Fă demo-urile utilizabile fără mouse**
   - Asigură stări `focus-visible`, etichete clare și feedback anunțabil cu `aria-live`.
   - Pentru clasificare, separă alegerea itemului de alegerea zonei fără a depinde de click pe un container.
   - Pentru logic lab și binary, expune valoarea curentă și schimbările ca text semantic.
   - Verifică faptul că animațiile nu ascund rezultatul sau instrucțiunea.

7. **Clarifică progresul pentru copil și părinte**
   - Adaugă o pagină sau un panou de progres cu niveluri începute, finalizate și următoarea lecție recomandată.
   - Permite export/import JSON și resetare cu confirmare.
   - Versionează structura progresului în `localStorage` pentru schimbări viitoare.
   - Nu marca automat o lecție doar prin parcurgere; păstrează acțiunea explicită, dar oferă feedback despre criteriile nebifate.

8. **Îmbunătățește erorile de navigare**
   - Afișează o pagină de eroare prietenoasă pentru nivel sau lecție inexistentă.
   - Include link către home, nivelurile disponibile și, dacă se poate, sugestia cea mai apropiată.
   - Nu lăsa o excepție JavaScript să producă o pagină goală când datele sunt incomplete.

### P1 - Conținut, limbaj și siguranță

9. **Continuă auditul pedagogic în ordinea deja stabilită**
   - Nivelurile 5 și 6: rețele, date fictive, SQL și operații distructive.
   - Nivelul 12: proiecte integrate, pași intermediari și limite fizice/digitale.
   - Nivelurile 3, 4, 7 și 8: vocabular tehnic gradual.
   - Nivelurile 9, 10 și 11: limite, verificare și formulări factuale exacte.
   - După fiecare lot, actualizează `assets/data/audit-pedagogic.md` și rulează validatorul.

10. **Scrie conținut child-friendly, concret și natural**
   - Folosește propoziții scurte, verbe active și un singur concept nou important pe pas.
   - Începe cu situații pe care copilul le recunoaște: telecomandă, ghiozdan, bicicletă, semafor, joc, mesaj, bec, hartă sau căutare pe internet.
   - Leagă fiecare termen tehnic de un exemplu din viața de zi cu zi înainte de definiția formală și revino la același exemplu în demo sau exercițiu.
   - Evită jargonul, comparațiile care pot induce idei greșite și formulările condescendente; păstrează curiozitatea, umorul discret și dreptul de a greși.
   - Verifică lecțiile printr-o lectură cu voce tare și, când este posibil, prin feedback de la copii, părinți sau profesori.
   - Criteriu: un copil poate explica ideea cu propriile cuvinte și poate identifica un exemplu real înainte de a rezolva exercițiul.

11. **Introdu metadate pentru vârstă, dificultate și siguranță**
   - Folosește eticheta „Vârstă orientativă”, nu o limită de acces; intervalele trebuie să fie suficient de largi pentru învățare autodirijată și ritmuri diferite.
   - Adaugă câmpuri standard pentru interval de vârstă orientativ, prerechizite, timp, materiale, nivel de supraveghere adultă și risc.
   - Afișează aceste metadate în lista nivelului și în antetul lecției.
   - Folosește validatorul pentru a preveni lecții practice fără instrucțiuni de siguranță.
   - Criteriu: un părinte vede rapid cui i se potrivește nivelul, ce ar trebui să știe deja și când trebuie să participe un adult.

12. **Îmbunătățește grafica explicativă și corectitudinea vizuală**
   - Pentru fiecare concept greu de imaginat, adaugă o pictogramă, o diagramă sau o animație scurtă care arată relația corectă dintre obiecte și pași.
   - Leagă vizualul de poveste și demo: aceleași denumiri, simboluri, culori și ordine trebuie să apară în explicație, scenă și activitate.
   - Folosește animația pentru cauză și efect, flux, schimbare de stare sau comparație; nu folosi mișcare doar ca ornament.
   - Verifică fiecare scenă pentru proporții, direcția săgeților, etichete lizibile, contrast, stări inițiale/finale și variante pentru `prefers-reduced-motion`.
   - Adaugă descrieri text alternative și o explicație statică echivalentă pentru orice informație transmisă prin imagine sau animație.
   - Evită metaforele vizuale care contrazic modelul tehnic: o imagine atractivă nu este acceptată dacă îl învață pe copil o relație greșită.
   - Criteriu: copilul poate descrie ce se întâmplă în vizual, iar descrierea corespunde cu rezultatul demo-ului și cu explicația scrisă.

### P2 - Mentenabilitate și evoluție

13. **Redu dependența de globale și de script order**
    - Păstrează datele într-un format coerent și migrează gradual către module ES sau un loader unic.
    - Centralizează contractele pentru lecții și demo-uri.
    - Evită randarea HTML mare într-o singură funcție; extrage componente mici pentru taburi, progres, feedback și navigare.

14. **Adaugă instrumente de dezvoltare minimale**
    - Definește un `package.json` cu scripturi pentru validare și testare.
    - Adaugă linting/formatting doar dacă nu complică utilizarea proiectului static.
    - Documentează versiunea Node, browser-ele țintă și modul de testare locală.

15. **Îmbunătățește observabilitatea fără backend**
    - Adaugă un panou local de diagnostic pentru erori de date, progres și tema activă, vizibil doar printr-un parametru de dezvoltare.
    - Folosește `console.error` controlat pentru date lipsă și erori de persistență.
    - Nu colecta date despre copii și nu introduce tracking extern fără o decizie explicită de confidențialitate.

## 4. Ordinea recomandată de livrare

### Milestone 1 - Baza verificabilă

- Repară compatibilitatea validatorului și documentează runtime-ul.
- Completează verificările de integritate pentru date și linkuri.
- Definește fișa de audit pentru alinierea poveste -> explicație -> demo -> exercițiu și aplic-o pe un lot pilot.
- Adaugă un smoke test browser pentru cele trei pagini și cele patru tipuri de demo.

### Milestone 2 - Lecție accesibilă și robustă

- Refă taburile cu semnificație ARIA și tastatură.
- Adaugă `aria-live`, focus vizibil și feedback semantic în demo-uri.
- Fă randarea tolerantă la date lipsă și adaugă ecranul de eroare pentru URL-uri invalide.

### Milestone 3 - Progres util

- Adaugă progresul detaliat, următoarea lecție și export/import.
- Versionează datele din `localStorage` și testează migrarea/resetarea.
- Verifică fluxul copil-părinte pentru criteriile de trecere.

### Milestone 4 - Curriculum și mentenanță

- Livrează următorul lot din auditul pedagogic, începând cu nivelurile 5 și 6.
- Rescrie lecțiile prioritare în stil child-friendly, cu exemple cotidiene și terminologie consecventă.
- Revizuiește scenele vizuale ale lotului și verifică dacă ilustrațiile descriu corect explicația și demo-ul.
- Introdu metadatele de siguranță și vârstă.
- Începe migrarea controlată către module sau un model de date mai strict doar după stabilizarea testelor.

## 5. Definiția de „gata” pentru următoarea versiune

- Validatorul rulează în mediul documentat și eșuează clar la date invalide.
- Home, nivel și lecție funcționează pe desktop și mobil fără erori JavaScript.
- Taburile și demo-urile pot fi folosite cu tastatura și au feedback citibil de tehnologiile asistive.
- Fiecare lecție verificată are un traseu coerent de la poveste și explicație la demo, experiment și exercițiu, fără discrepanțe de enunț sau rezultat.
- Fiecare concept important are cel puțin un exemplu recognoscibil din viața de zi cu zi și este formulat clar pentru vârsta țintă.
- Pictogramele, animațiile și scenele vizuale arată corect ideea tehnică, au text alternativ și nu sunt singura cale de a înțelege conținutul.
- Un URL invalid primește un mesaj util, nu doar o redirecționare tăcută.
- Progresul poate fi inspectat, exportat și resetat controlat.
- Auditul pedagogic pentru lotul livrat este actualizat împreună cu validatorul.
- Nu se introduc analytics, conturi sau colectare de date despre copii fără o decizie explicită de confidențialitate.

## 6. Verificări utile la fiecare schimbare

```bash
node validate-data.js
python3 -m http.server 8877
```

În browser, verifică manual:

- `index.html`
- un nivel care conține mai multe lecții
- o lecție cu demo flow, una cu quiz, una cu binary și una cu classify
- tema luminoasă/întunecată și refresh-ul paginii
- progresul după bifare și revenire la home
- lățimea de telefon și navigarea numai cu tastatura
- pentru fiecare lecție pilot: povestea, explicația, demo-ul și exercițiul folosesc aceiași termeni și conduc la același rezultat
- un copil poate da un exemplu din viața de zi cu zi pentru conceptul lecției
- vizualul poate fi înțeles fără animație și nu contrazice pașii sau rezultatul demo-ului
