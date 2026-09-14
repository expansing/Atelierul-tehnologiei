# Atelierul Tehnologiei

Site educațional pentru copii, cu 12 niveluri și 69 de lecții practice: tehnologie, calculatoare, programare, rețele, electronică, robotică, siguranță digitală și AI.

## Pornire

Site-ul este static, dar trebuie deschis printr-un server local. Astfel toate paginile și scripturile sunt încărcate corect.

1. Deschide un terminal în folderul proiectului.
2. Rulează:

```bash
python3 -m http.server 8877
```

Pentru diagnostic local, adaugă `?debug=1` la orice pagină. Panoul afișează numai local numărul de niveluri și lecții, progresul, tema și runtime-ul browserului; nu trimite date nicăieri.

3. Deschide `http://localhost:8877` în browser.
4. Oprește serverul cu `Ctrl+C` când ai terminat.

Progresul este salvat local în browser. Pe pagina principală îl poți exporta într-un fișier JSON, importa pe alt browser sau reseta cu confirmare. Nu este trimis către un server.

Pe Linux, dacă `python3` nu este instalat, instalează Python 3 din managerul de pachete al distribuției. Nu este nevoie de Node.js pentru folosirea site-ului; Node.js este folosit doar pentru validarea conținutului de către autor.

## Verificare conținut

Din folderul proiectului rulează:

```bash
node validate-data.js
```

Comenzile echivalente din proiect sunt:

```bash
npm run check:syntax
npm run validate
npm run smoke:static
npm run smoke:browser
npm run quality
npm run check
```

`smoke:browser` folosește Playwright și Chromium; după instalarea dependențelor rulează `npx playwright install chromium` o singură dată. Celelalte scripturi folosesc doar Node.js.

Scriptul verifică cele 12 niveluri, cele 69 de lecții, câmpurile obligatorii, explicațiile și ghidul pregătitor pentru fiecare demonstrație.

Validatorul rulează și pe Node.js 12 sau mai nou și verifică suplimentar tipurile de demo, obiectivele, legătura explicită dintre explicație și demo, pașii de experiment/proiect, criteriile de trecere, ortografia textului pedagogic, alinierea etichetelor vizuale și metadatele fiecărui nivel: vârstă orientativă, dificultate, prerechizite, supraveghere și risc. Vârstele afișate sunt orientative, nu limite de acces. Un rezultat invalid încheie comanda cu cod de eroare.

## Materiale de bază

Acestea acoperă majoritatea lecțiilor din primele șase niveluri:

- Caiet/jurnal de proiect, hârtie A4, creioane colorate, pix, cartonașe, bandă adezivă, sfoară și plicuri.
- Calculator cu browser, terminal și editor de text.
- Python 3 și, opțional, Thonny sau IDLE pentru lecțiile de programare.
- Un calculator vechi pentru explorare; nu demonta un laptop, monitor sau sursă de alimentare.
- Acces la rețeaua proprie a familiei, numai împreună cu un adult pentru activități de rețea.

## Materiale pe nivel

| Nivel | Materiale principale |
| --- | --- |
| 1-2 | Hârtie, creioane, carton, mărgele în două culori, baterie, LED, agrafe/întrerupătoare, calculator vechi. |
| 3 | Calculator cu Linux sau mașină virtuală; opțional Raspberry Pi, card SD, alimentare și un al doilea dispozitiv din aceeași rețea. |
| 4 | Calculator cu Python 3 și browser pentru Scratch. |
| 5 | Terminal, browser și conexiune proprie la internet; serverul local de la nivelul 3 este opțional, dar recomandat. |
| 6 | `sqlite3` sau DB Browser for SQLite; Python 3 include modulul `sqlite3`. Folosește numai baze de date de exercițiu cu date inventate. |
| 7 | Breadboard, fire, LED-uri, rezistențe de 220-470 ohmi, butoane, multimetru, Arduino UNO sau ESP32, cablu USB, LDR/DHT11, micro-servo SG90 și opțional display OLED. |
| 8 | Kit robot 2WD, două motoare, roți, suport baterii, driver L298N, senzor HC-SR04, doi senzori IR TCRT5000 și bandă neagră pentru pistă. |
| 9 | Password manager, telefon/tabletă cu părinte, VirtualBox și imagine Linux pentru laborator izolat. Nu folosi parole reale în fișe sau demo-uri. |
| 10 | Cameră web sau telefon, Teachable Machine, cartonașe și zar pentru jocurile de probabilitate. |
| 11 | LLM, browser, surse de verificare și telefon/tabletă folosite împreună cu un părinte. |
| 12 | Combină ESP32, senzori, Raspberry Pi/server local, robotul de la nivelul 8 și modelul de la nivelul 10. |

## Siguranță

- Toate circuitele pentru copii funcționează la joasă tensiune: 3,3 V sau 5 V. Nu conecta niciodată proiecte la 230 V, gaz, calorifere, uși, încuietori sau sisteme de alarmă/siguranță.
- Un adult supraveghează demontarea unui calculator, încărcarea bateriilor, cablarea și setările de rețea.
- Experimentele digitale se fac numai pe dispozitive, conturi, date și rețele deținute de familie. Nu publica adrese IP, parole, imagini ale altor persoane sau programul familiei.
- Păstrează proiectele web și serverele în rețeaua locală. Nu configura redirecționări de porturi către internet.

## Structură

- `index.html`: meniul cu cele 12 niveluri.
- `level.html`: lista de lecții pentru un nivel.
- `lesson.html`: explicație, ghid înainte de demo, demonstrație, experiment, proiect și criterii de trecere.
- `assets/js/data-lessons-*.js`: conținutul lecțiilor.
- `assets/js/data-index.js`: indexul comun care leagă lecțiile și ghidurile înaintea motorului UI.
- `assets/js/progress-state.js`: progresul local, criteriile și export/import.
- `assets/js/ui-utils.js`: temă, URL-uri, escaping, reveal și ecrane de rutare invalidă.
- `assets/js/home-render.js`: randarea nivelurilor și progresului de pe pagina principală.
- `assets/js/level-render.js`: randarea antetului unui nivel și a listei de lecții.
- `assets/js/lesson-actions.js`: finalizarea lecției și navigarea anterioară/următoare.
- `assets/js/demo-render.js`: selectarea engine-ului pentru fiecare tip de demo.
- `assets/js/binary-engine.js`: engine-ul interactiv pentru numere binare.
- `assets/js/quiz-engine.js`: engine-ul interactiv pentru întrebări și scoruri.
- `assets/js/classify-engine.js`: engine-ul interactiv pentru sortarea în zone.
- `assets/js/flow-engine.js`: engine-ul interactiv pentru pași, animație și scene de proces.
- `assets/js/lesson-tabs.js`: taburile lecției, focusul și navigarea cu tastatura.
- `assets/js/logic-engine.js`: laboratorul interactiv pentru porți logice.
- `assets/js/explanation-render.js`: orchestrarea randării explicației interactive.
- `assets/js/diagnostics.js`: panoul de diagnostic local activat prin `?debug=1`.
- `assets/js/explanation-checks.js`: verificările interactive din explicația lecției.
- `assets/js/special-blocks.js`: blocuri de formule, pași, comparații, tabele și logic lab.
- `assets/js/lesson-render.js`: intrarea publică pentru randarea paginii de lecție.
- `assets/js/explanation-text.js`: paragrafele, ghidurile și glosarul explicației.
- `assets/js/demo-guides-*.js`: explicațiile obligatorii care pregătesc fiecare demo.
- `assets/data/audit-pedagogic.md`: standardul și auditul pedagogic al curriculumului.
