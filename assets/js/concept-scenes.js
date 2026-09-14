/* Scene conceptuale partajate de explicație și demo. */

let conceptSceneSequence = 0;
const conceptMotionAllowed = typeof window === "undefined" || !window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

function conceptVisualParts(object, fallback = "Idee") {
  const value = String(object || "");
  return {
    icon: value.match(/^(?:\p{Extended_Pictographic}|\p{Emoji_Presentation})/u)?.[0] || "💡",
    label: value.replace(/^\S+\s*/, "").trim() || fallback
  };
}
function conceptPhaseCount(visual) {
  const kind = String(visual?.kind || "").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return ["binary", "layers", "timeline", "scratch"].includes(kind) ? 4 : (Array.isArray(visual?.objects) ? visual.objects.length : 3);
}
function conceptSceneDefs(uid) {
  return `<defs>
    <linearGradient id="concept-bg-${uid}" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="var(--primary)" stop-opacity=".16"></stop>
      <stop offset="1" stop-color="var(--accent)" stop-opacity=".12"></stop>
    </linearGradient>
    <filter id="concept-shadow-${uid}" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="5" stdDeviation="4" flood-color="#22304a" flood-opacity=".16"></feDropShadow>
    </filter>
  </defs>`;
}
function conceptSceneNode(x, y, part, active, extra = "") {
  return `<g class="scene-node ${active ? "is-active" : ""} ${extra}" transform="translate(${x}, ${y})">
    <circle class="scene-node-ring" r="${active ? 43 : 34}"></circle>
    <circle class="scene-node-circle" r="${active ? 34 : 27}"></circle>
    <text class="scene-node-icon" y="9">${esc(part.icon)}</text>
    <text class="scene-node-label" y="57">${esc(part.label.slice(0, 18))}</text>
  </g>`;
}
function conceptSceneConnection(x1, y1, x2, y2) {
  const mx = (x1 + x2) / 2;
  const my = Math.min(y1, y2) - 24;
  return `<path class="scene-connection" d="M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}"></path>
    <path class="scene-arrowhead" d="M ${x2 - 8} ${y2 - 6} L ${x2 + 2} ${y2} L ${x2 - 4} ${y2 + 8} Z"></path>`;
}
function conceptScenePacket(path) {
  if (!conceptMotionAllowed) return `<circle class="scene-packet" r="7" cx="320" cy="150"></circle>`;
  return `<circle class="scene-packet" r="7"><animateMotion dur="2.4s" repeatCount="indefinite" path="${path}"></animateMotion></circle>`;
}
function conceptScenePanel(x, y, w, h, title, body = "", active = false) {
  return `<g class="scene-panel ${active ? "is-active" : ""}" transform="translate(${x}, ${y})">
    <rect width="${w}" height="${h}" rx="14"></rect>
    <text class="scene-panel-title" x="${w / 2}" y="28">${esc(title)}</text>
    ${body ? `<text class="scene-panel-body" x="${w / 2}" y="58">${esc(body)}</text>` : ""}
  </g>`;
}
function conceptSceneFrame(visual, kind, uid, body) {
  const titleId = `concept-title-${uid}`;
  return `<svg class="story-svg visual-svg visual-${esc(kind)}" viewBox="0 0 640 300" role="img" aria-labelledby="${titleId}">
    <title id="${titleId}">${esc(visual?.title || "Scenă vizuală a lecției")}</title>
    ${conceptSceneDefs(uid)}
    <rect class="story-sky" x="10" y="10" width="620" height="280" rx="24" fill="url(#concept-bg-${uid})"></rect>
    ${body}
  </svg>`;
}
function conceptStepIndex(stepIndex, stepCount, phaseCount) {
  if (phaseCount <= 1 || stepCount <= 1) return 0;
  return Math.round((stepIndex * (phaseCount - 1)) / (stepCount - 1));
}
function conceptThreeNodeScene(scene, parts, active, path = "M 145 150 C 205 92, 235 92, 295 150 S 435 208, 495 150") {
  const xs = [100, 320, 540];
  const nodes = parts.map((part, i) => conceptSceneNode(xs[i], 150, part, i === active)).join("");
  const links = [conceptSceneConnection(xs[0] + 42, 150, xs[1] - 42, 150), conceptSceneConnection(xs[1] + 42, 150, xs[2] - 42, 150)].join("");
  return `${links}${nodes}${conceptScenePacket(path)}`;
}
function conceptGenericScene(scene, parts, active, kind) {
  const labels = {
    objects: ["Nevoie", "Unealtă", "Soluție"],
    invention: ["Problemă", "Idee", "Prototip"],
    computer: ["Intrare", "Procesare", "Ieșire"],
    algorithm: ["Pasul 1", "Pasul 2", "Rezultat"]
  }[kind] || ["Intrare", "Proces", "Rezultat"];
  const nodes = parts.map((part, i) => conceptSceneNode(100 + i * 220, 150, { ...part, label: part.label || labels[i] }, active === i)).join("");
  return `${conceptSceneConnection(145, 150, 275, 150)}${conceptSceneConnection(365, 150, 495, 150)}${nodes}${conceptScenePacket("M 145 150 L 495 150")}`;
}
function renderConceptScene(visual, stepIndex, stepCount, uid = `concept-${++conceptSceneSequence}`) {
  const fallback = { kind: "idea", title: "Cum se leagă ideile?", objects: ["💡 Idee", "⚙️ Proces", "🎯 Rezultat"], story: "Urmărește cum se transformă o întrebare într-un rezultat." };
  const scene = { ...fallback, ...visual };
  const objects = Array.isArray(scene.objects) && scene.objects.length ? scene.objects : fallback.objects;
  const parts = objects.map((object, i) => conceptVisualParts(object, `Ideea ${i + 1}`));
  const kind = String(scene.kind || "idea").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const phaseCount = conceptPhaseCount(scene);
  const activeSteps = stepCount || phaseCount;
  const active = conceptStepIndex(stepIndex, activeSteps, phaseCount);
  let body = "";

  if (["objects", "invention", "computer", "algorithm"].includes(kind)) {
    body = conceptGenericScene(scene, parts, active, kind);
  } else if (kind === "logic") {
    const aOn = active === 0 || active === 2;
    const bOn = active === 1 || active === 2;
    const outputOn = aOn && bOn;
    body = `${conceptSceneConnection(125, 150, 255, 150)}${conceptSceneConnection(385, 150, 515, 150)}
      <g class="logic-switch ${aOn ? "is-closed" : ""}" transform="translate(100,150)"><circle class="scene-node-circle" r="30"></circle><path class="logic-lever" d="M -22 12 L 12 -12"></path><text class="scene-node-icon" y="9">${esc(parts[0]?.icon || "A")}</text><text class="scene-node-label" y="57">A</text></g>
      <g class="logic-switch ${bOn ? "is-closed" : ""}" transform="translate(320,150)"><circle class="scene-node-circle" r="30"></circle><path class="logic-lever" d="M -22 12 L 12 -12"></path><text class="scene-node-icon" y="9">${esc(parts[1]?.icon || "B")}</text><text class="scene-node-label" y="57">B</text></g>
      <g class="logic-bulb ${outputOn ? "is-lit" : ""}" transform="translate(540,150)"><circle class="scene-node-circle" r="32"></circle><text class="scene-node-icon" y="9">💡</text><text class="scene-node-label" y="57">IEȘIRE</text></g>
      ${conceptScenePacket("M 125 150 L 508 150")}`;
  } else if (kind === "binary") {
    const states = active === 2 ? [1, 1, 0, 1] : active === 1 ? [0, 0, 0, 1] : [0, 0, 0, 0];
    const weights = [8, 4, 2, 1];
    body = weights.map((weight, i) => `<g class="binary-bit ${states[i] ? "is-on" : ""} ${active === i ? "is-active" : ""}" transform="translate(${82 + i * 150},115)">
      <rect width="92" height="104" rx="16"></rect><text class="scene-panel-title" x="46" y="38">${weight}</text><text class="binary-bit-value" x="46" y="78">${states[i]}</text>
    </g>`).join("") + `<g class="binary-total" transform="translate(170,245)"><rect width="300" height="38" rx="12"></rect><text class="scene-panel-body" x="150" y="25">Total: ${states.reduce((sum, bit, i) => sum + bit * weights[i], 0)}</text></g>`;
  } else if (kind === "circuit") {
    body = `<path class="circuit-wire" d="M 95 220 L 95 82 L 320 82 L 320 220 L 545 220 L 545 82 L 95 82"></path>
      <g class="circuit-battery" transform="translate(95,220)"><rect x="-30" y="-20" width="60" height="40" rx="8"></rect><text class="scene-panel-title" x="0" y="7">${esc(parts[0]?.label || "Baterie")}</text></g>
      <g class="circuit-resistor ${active === 1 ? "is-active" : ""}" transform="translate(320,82)"><rect x="-48" y="-18" width="96" height="36" rx="8"></rect><text class="scene-panel-title" x="0" y="7">${esc(parts[1]?.label || "Rezistență")}</text></g>
      <g class="circuit-led ${active === 2 ? "is-lit" : ""}" transform="translate(545,82)"><circle class="scene-node-circle" r="30"></circle><text class="scene-node-icon" y="9">💡</text><text class="scene-node-label" y="57">${esc(parts[2]?.label || "LED")}</text></g>
      ${conceptScenePacket("M 95 220 L 95 82 L 320 82 L 545 82 L 545 220 L 95 220")}`;
  } else if (["network", "dns", "server"].includes(kind)) {
    const labels = kind === "dns" ? ["Nume", "DNS", "IP"] : kind === "server" ? ["Client", "Cerere", "Server"] : ["Intrare", "Drum", "Destinație"];
    const nodes = [conceptSceneNode(100, 150, parts[0] || conceptVisualParts(labels[0]), active === 0), conceptSceneNode(320, 150, parts[1] || conceptVisualParts(labels[1]), active === 1), conceptSceneNode(540, 150, parts[2] || conceptVisualParts(labels[2]), active === 2)].join("");
    body = `${conceptSceneConnection(145, 150, 275, 150)}${conceptSceneConnection(365, 150, 495, 150)}${nodes}${conceptScenePacket("M 145 150 C 205 100, 235 100, 275 150 S 435 200, 495 150")}`;
  } else if (kind === "layers") {
    const names = ["Hardware", "Firmware", "Sistem de operare", "Aplicație"];
    body = names.map((name, i) => `<g class="layer-block ${active === i ? "is-active" : ""}" transform="translate(${145 + i * 12}, ${58 + i * 48})"><rect width="350" height="38" rx="10"></rect><text class="scene-panel-title" x="175" y="25">${esc(parts[i]?.label || name)}</text></g>${i < names.length - 1 ? `<path class="layer-arrow" d="M 320 ${112 + i * 48} L 320 ${136 + i * 48}"></path>` : ""}`).join("");
  } else if (kind === "terminal") {
    body = `<g class="terminal-window"><rect x="90" y="55" width="460" height="180" rx="16"></rect><circle cx="122" cy="82" r="6"></circle><circle cx="145" cy="82" r="6"></circle><text class="terminal-command" x="120" y="125"><tspan class="${active === 0 ? "is-active" : ""}">$ ${esc(parts[0]?.label || "comandă")}</tspan></text><text class="terminal-output" x="120" y="160">${esc(parts[2]?.label || "rezultat")}</text><text class="terminal-cursor" x="310" y="160">▌</text></g>`;
  } else if (kind === "filesystem") {
    body = `${conceptSceneConnection(145, 105, 275, 155)}${conceptSceneConnection(365, 155, 495, 210)}${conceptSceneNode(100, 105, parts[0] || conceptVisualParts("🌳 /"), active === 0)}${conceptSceneNode(320, 155, parts[1] || conceptVisualParts("🏠 /home"), active === 1)}${conceptSceneNode(540, 210, parts[2] || conceptVisualParts("📄 Fișier"), active === 2)}<path class="filesystem-branch" d="M 100 135 V 220 H 540"></path>`;
  } else if (kind === "data") {
    body = `${conceptScenePanel(55, 70, 155, 160, parts[0]?.label || "Date", "rânduri", active === 0)}${conceptSceneConnection(210, 150, 275, 150)}${conceptScenePanel(280, 70, 155, 160, parts[1]?.label || "Întrebare", "SELECT", active === 1)}${conceptSceneConnection(435, 150, 485, 150)}${conceptScenePanel(490, 70, 105, 160, parts[2]?.label || "Rezultat", "tabel", active === 2)}${conceptScenePacket("M 210 150 L 485 150")}`;
  } else if (kind === "cloud") {
    body = `${conceptSceneNode(100, 150, parts[0] || conceptVisualParts("💻 Tu"), active === 0)}${conceptSceneConnection(145, 150, 255, 115)}<g class="cloud-shape ${active === 1 ? "is-active" : ""}" transform="translate(320,115)"><path d="M -55 18 Q -55 -18 -20 -18 Q -8 -42 20 -28 Q 52 -31 52 0 Q 70 4 58 22 Q 48 38 15 30 Q -35 42 -55 18 Z"></path><text class="cloud-label" x="0" y="10">☁️</text></g>${conceptSceneConnection(385, 145, 495, 190)}${conceptScenePanel(485, 165, 110, 70, parts[2]?.label || "Centru", "date", active === 2)}${conceptScenePacket("M 145 150 C 205 120, 255 120, 275 115 S 435 170, 495 190")}`;
  } else if (["microcontroller", "sensor", "iot", "motor"].includes(kind)) {
    const names = kind === "microcontroller" ? ["Cod", "Placă", "LED"] : kind === "sensor" ? ["Lumină", "Senzor", "Valoare"] : kind === "iot" ? ["Senzor", "I2C", "ESP32"] : ["Placă", "PWM", "Servo"];
    const nodes = names.map((name, i) => conceptSceneNode(100 + i * 220, 150, parts[i] || conceptVisualParts(name), active === i)).join("");
    body = `${conceptSceneConnection(145, 150, 275, 150)}${conceptSceneConnection(365, 150, 495, 150)}${nodes}${conceptScenePacket("M 145 150 L 495 150")}`;
  } else if (kind === "robot") {
    body = `${conceptSceneNode(100, 95, parts[0] || conceptVisualParts("👁️ SENSE"), active === 0)}${conceptSceneNode(320, 95, parts[1] || conceptVisualParts("🧠 THINK"), active === 1)}${conceptSceneNode(540, 95, parts[2] || conceptVisualParts("🦾 ACT"), active === 2)}${conceptSceneConnection(145, 95, 275, 95)}${conceptSceneConnection(365, 95, 495, 95)}<path class="robot-return" d="M 540 135 C 540 225, 100 225, 100 135"></path>${conceptScenePacket("M 540 135 C 540 225, 100 225, 100 135")}`;
  } else if (["security", "critical"].includes(kind)) {
    const names = kind === "security" ? ["Mesaj", "Verificare", "Cont protejat"] : ["Afirmație", "Sursă", "Verdict"];
    body = `${conceptSceneNode(100, 150, parts[0] || conceptVisualParts(names[0]), active === 0)}${conceptSceneConnection(145, 150, 275, 150)}<g class="security-shield ${active === 1 ? "is-active" : ""}" transform="translate(320,150)"><path d="M 0 -38 L 32 -25 V 7 Q 30 34 0 45 Q -30 34 -32 7 V -25 Z"></path><text class="shield-mark" x="0" y="12">${kind === "security" ? "🔒" : "🔎"}</text></g>${conceptSceneConnection(365, 150, 495, 150)}${conceptSceneNode(540, 150, parts[2] || conceptVisualParts(names[2]), active === 2)}${conceptScenePacket("M 145 150 L 275 150 M 365 150 L 495 150")}`;
  } else if (kind === "ai") {
    body = `${conceptScenePanel(55, 75, 145, 150, parts[0]?.label || "Exemple", "date", active === 0)}${conceptSceneConnection(200, 150, 265, 150)}<g class="ai-brain ${active === 1 ? "is-active" : ""}" transform="translate(330,150)"><path d="M -38 -22 Q -58 8 -34 25 Q -43 48 -12 43 Q -3 64 20 47 Q 50 54 48 25 Q 68 5 45 -17 Q 30 -43 2 -32 Q -22 -45 -38 -22 Z"></path><text class="brain-label" x="0" y="8">🧠</text></g>${conceptSceneConnection(395, 150, 465, 150)}${conceptScenePanel(470, 75, 125, 150, parts[2]?.label || "Predicție", "ieșire", active === 2)}${conceptScenePacket("M 200 150 L 465 150")}`;
  } else if (kind === "weather") {
    body = `${conceptSceneNode(100, 100, parts[0] || conceptVisualParts("🌡️ Senzor"), active === 0)}${conceptSceneConnection(145, 100, 275, 100)}${conceptScenePanel(280, 55, 155, 90, parts[1]?.label || "JSON", "mesaj", active === 1)}${conceptSceneConnection(435, 100, 495, 190)}<g class="weather-chart ${active === 2 ? "is-active" : ""}" transform="translate(500,190)"><rect x="-65" y="-45" width="130" height="90" rx="10"></rect><path class="chart-line" d="M -50 25 L -25 5 L 0 18 L 25 -18 L 50 -28"></path></g>${conceptScenePacket("M 145 100 L 495 190")}`;
  } else if (kind === "smart") {
    body = `${conceptSceneNode(100, 100, parts[0] || conceptVisualParts("🌙 Întuneric"), active === 0)}${conceptSceneConnection(145, 100, 275, 150)}<g class="smart-controller ${active === 1 ? "is-active" : ""}" transform="translate(320,150)"><rect x="-48" y="-32" width="96" height="64" rx="12"></rect><text class="scene-panel-title" x="0" y="8">DECIZIE</text></g>${conceptSceneConnection(365, 150, 495, 100)}<g class="smart-led ${active === 2 ? "is-lit" : ""}" transform="translate(540,100)"><circle class="scene-node-circle" r="31"></circle><text class="scene-node-icon" y="9">💡</text><text class="scene-node-label" y="57">LED</text></g>${conceptScenePacket("M 145 100 C 205 125, 255 145, 495 100")}`;
  } else if (kind === "vision") {
    body = `${conceptScenePanel(55, 70, 130, 160, parts[0]?.label || "Imagine", "📷", active === 0)}${conceptSceneConnection(185, 150, 255, 150)}<g class="vision-scan ${active === 1 ? "is-active" : ""}" transform="translate(320,150)"><rect x="-48" y="-50" width="96" height="100" rx="12"></rect><path class="scan-line" d="M -38 -30 H 38 M -38 0 H 38 M -38 30 H 38"></path></g>${conceptSceneConnection(368, 150, 455, 150)}<g class="vision-bars ${active === 2 ? "is-active" : ""}" transform="translate(510,150)"><rect x="-55" y="18" width="22" height="42"></rect><rect x="-22" y="-5" width="22" height="65"></rect><rect x="11" y="28" width="22" height="32"></rect><text class="vision-score" x="0" y="-20">scor</text></g>${conceptScenePacket("M 185 150 L 455 150")}`;
  } else if (kind === "virtual") {
    body = `${conceptScenePanel(55, 85, 130, 130, parts[0]?.label || "Gazdă", "PC", active === 0)}${conceptSceneConnection(185, 150, 255, 150)}<g class="virtual-machine ${active === 1 ? "is-active" : ""}" transform="translate(320,150)"><rect x="-50" y="-42" width="100" height="84" rx="12"></rect><rect x="-35" y="-25" width="70" height="18" rx="5"></rect><rect x="-35" y="0" width="70" height="18" rx="5"></rect></g>${conceptSceneConnection(370, 150, 455, 150)}${conceptScenePanel(460, 85, 130, 130, parts[2]?.label || "Snapshot", "revin", active === 2)}${conceptScenePacket("M 185 150 L 455 150")}`;
  } else if (kind === "timeline") {
    body = `<path class="timeline-line" d="M 80 155 H 560"></path>${parts.map((part, i) => { const x = 105 + i * 145; return `${conceptSceneNode(x, 155, part, active === i)}<path class="timeline-tick" d="M ${x} 178 V 205"></path>`; }).join("")}`;
  } else if (kind === "variables") {
    body = `${conceptScenePanel(70, 90, 135, 120, parts[0]?.label || "scor=0", "cutie", active === 0)}${conceptSceneConnection(205, 150, 275, 150)}<g class="variable-op" transform="translate(320,150)"><circle class="scene-node-circle" r="32"></circle><text class="scene-panel-title" x="0" y="8">+10</text></g>${conceptSceneConnection(365, 150, 435, 150)}${conceptScenePanel(440, 90, 135, 120, parts[2]?.label || "scor=10", "nou", active === 2)}${conceptScenePacket("M 205 150 L 435 150")}`;
  } else if (kind === "scratch") {
    body = [["when 🟢 clicked", 75], ["move 10 steps", 125], ["change score by 1", 175], ["say Salut!", 225]].map(([text, y], i) => `<g class="scratch-block ${active === i ? "is-active" : ""}" transform="translate(150,${y})"><rect width="340" height="38" rx="10"></rect><text class="scratch-text" x="20" y="25">${text}</text></g>`).join("");
  } else if (kind === "python") {
    body = `<g class="code-window"><rect x="90" y="55" width="460" height="190" rx="16"></rect><text class="code-line ${active === 0 ? "is-active" : ""}" x="120" y="105">salut.py</text><text class="code-line" x="120" y="145">print("Salut!")</text><text class="code-line ${active === 2 ? "is-active" : ""}" x="120" y="185">→ Salut!</text><text class="terminal-cursor" x="280" y="185">▌</text></g>`;
  } else if (kind === "debug") {
    body = `${conceptSceneNode(100, 150, parts[0] || conceptVisualParts("🐞 Problemă"), active === 0)}${conceptSceneConnection(145, 150, 275, 150)}<g class="debug-magnifier ${active === 1 ? "is-active" : ""}" transform="translate(320,150)"><circle class="scene-node-circle" r="34"></circle><path d="M 25 25 L 52 52"></path><text class="scene-node-icon" y="9">🔍</text></g>${conceptSceneConnection(365, 150, 495, 150)}${conceptSceneNode(540, 150, parts[2] || conceptVisualParts("✅ Test"), active === 2)}${conceptScenePacket("M 145 150 L 495 150")}`;
  } else {
    body = conceptThreeNodeScene(scene, parts, active);
  }

  return conceptSceneFrame(scene, kind, uid, body);
}
function renderStoryScene(visual, stepIndex = 0, stepCount, uid = `concept-${++conceptSceneSequence}`) {
  return renderConceptScene(visual, stepIndex, stepCount, uid);
}
function renderVisualStory(visual) {
  const uid = `concept-${++conceptSceneSequence}`;
  return `<div class="individual-scene" aria-label="${esc(visual.title)}">
    <div class="scene-heading"><span class="scene-spark">✦</span><strong>${esc(visual.title)}</strong><span class="scene-hint">privește ce se schimbă</span></div>
    <div class="scene-stage" data-demo-art>${renderConceptScene(visual, 0, undefined, uid)}</div>
    <p class="scene-story">${esc(visual.story)}</p>
  </div>`;
}
function updateDemoScene(visual, index) {
  const art = document.querySelector("[data-demo-art]");
  if (!art || !visual) return;
  art.innerHTML = renderConceptScene(visual, index, undefined, `demo-${++conceptSceneSequence}`);
}
function renderFlow(demo, host, visual) {
  host.innerHTML = `
    <div class="flow-demo">
      ${demo.steps.map((s, i) => `<div class="flow-node-wrap">${i ? '<span class="flow-arrow" aria-hidden="true">→</span>' : ""}<button class="flow-step" data-i="${i}" aria-label="Pasul ${i + 1}: ${esc(s.label)}"><span class="flow-number">${i + 1}</span><span class="flow-label">${esc(s.label)}</span></button></div>`).join("")}
    </div>
    <div class="flow-info" id="flow-info">👆 Alege sau pornește pașii; scena de mai sus arată mecanismul lecției.</div>
    <div class="flow-controls"><button class="btn btn-primary" id="flow-play">▶️ Pornește</button><button class="btn btn-ghost" id="flow-reset">🔄 Reset</button></div>`;
  const steps = [...host.querySelectorAll(".flow-step")];
  const info = host.querySelector("#flow-info");
  let timer = null;
  function showStep(i) {
    const step = demo.steps[i];
    steps.forEach((item, index) => item.classList.toggle("lit", index === i));
    updateDemoScene(visual, i);
    info.textContent = step.info;
  }
  function reset() {
    clearInterval(timer); timer = null;
    steps.forEach(s => s.classList.remove("lit"));
    updateDemoScene(visual, 0);
    info.textContent = "👆 Alege sau pornește pașii; scena de mai sus arată mecanismul lecției.";
    host.querySelector("#flow-play").disabled = false;
  }
  host.querySelector("#flow-play").addEventListener("click", e => {
    reset(); e.target.disabled = true;
    let i = 0;
    const tick = () => {
      if (i >= demo.steps.length) { e.target.disabled = false; clearInterval(timer); return; }
      showStep(i++);
    };
    tick();
    timer = setInterval(tick, 2600);
  });
  steps.forEach(s => s.addEventListener("click", () => { clearInterval(timer); showStep(+s.dataset.i); host.querySelector("#flow-play").disabled = false; }));
  host.querySelector("#flow-reset").addEventListener("click", reset);
}
