# Atelierul Tehnologiei

Site educațional pentru copii, cu 12 niveluri și 69 de lecții practice: tehnologie, calculatoare, programare, rețele, electronică, robotică, siguranță digitală și AI.

## Pornire

Site-ul este static, dar trebuie deschis printr-un server local. Astfel toate paginile și scripturile sunt încărcate corect.

1. Deschide un terminal în folderul proiectului.
2. Rulează:

```bash
python3 -m http.server 8877
```

3. Deschide `http://localhost:8877` în browser.
4. Oprește serverul cu `Ctrl+C` când ai terminat.

Pe Linux, dacă `python3` nu este instalat, instalează Python 3 din managerul de pachete al distribuției. Nu este nevoie de Node.js pentru folosirea site-ului; Node.js este folosit doar pentru validarea conținutului de către autor.

## Verificare conținut

Din folderul proiectului rulează:

```bash
node validate-data.js
```

Scriptul verifică cele 12 niveluri, cele 69 de lecții, câmpurile obligatorii, explicațiile și ghidul pregătitor pentru fiecare demonstrație.

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
- `assets/js/demo-guides-*.js`: explicațiile obligatorii care pregătesc fiecare demo.
- `assets/data/audit-pedagogic.md`: standardul și auditul pedagogic al curriculumului.