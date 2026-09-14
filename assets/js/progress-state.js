/* Stare locală, export/import și criterii de progres. */

const PROGRESS_KEY = "at_progress";
const CRITERIA_KEY = "at_criteria";
const PROGRESS_VERSION = 1;

function getProgress() {
  try {
    const stored = JSON.parse(localStorage.getItem(PROGRESS_KEY));
    if (!stored || Array.isArray(stored) || typeof stored !== "object") return {};
    return Object.keys(stored).reduce((progress, id) => {
      if (stored[id] === true) progress[id] = true;
      return progress;
    }, {});
  } catch (error) {
    console.error("[Atelierul Tehnologiei] Nu s-a putut citi progresul local.", error);
    return {};
  }
}
function saveProgress(progress) {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    return true;
  } catch (error) {
    console.error("[Atelierul Tehnologiei] Nu s-a putut salva progresul local.", error);
    return false;
  }
}
function getCriteria() {
  try {
    const stored = JSON.parse(localStorage.getItem(CRITERIA_KEY));
    if (!stored || Array.isArray(stored) || typeof stored !== "object") return {};
    return stored;
  } catch (error) {
    console.error("[Atelierul Tehnologiei] Nu s-au putut citi criteriile locale.", error);
    return {};
  }
}
function saveCriteria(criteria) {
  try {
    localStorage.setItem(CRITERIA_KEY, JSON.stringify(criteria));
    return true;
  } catch (error) {
    console.error("[Atelierul Tehnologiei] Nu s-au putut salva criteriile locale.", error);
    return false;
  }
}
function downloadProgress() {
  const payload = { version: PROGRESS_VERSION, completed: getProgress(), criteria: getCriteria(), exportedAt: new Date().toISOString() };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "atelierul-tehnologiei-progres.json";
  link.click();
  URL.revokeObjectURL(link.href);
}
function importProgress(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const payload = JSON.parse(reader.result);
      const completed = payload && payload.completed;
      if (!completed || typeof completed !== "object" || Array.isArray(completed)) throw new Error("format");
      const knownIds = new Set(LESSONS.map(lesson => lesson.id));
      const clean = Object.keys(completed).reduce((progress, id) => {
        if (knownIds.has(id) && completed[id] === true) progress[id] = true;
        return progress;
      }, {});
      const criteria = Object.keys(payload.criteria || {}).reduce((result, id) => {
        if (knownIds.has(id) && Array.isArray(payload.criteria[id])) result[id] = payload.criteria[id].filter(value => Number.isInteger(value) && value >= 0);
        return result;
      }, {});
      if (!saveProgress(clean) || !saveCriteria(criteria)) throw new Error("storage");
      location.reload();
    } catch (error) {
      console.error("[Atelierul Tehnologiei] Importul progresului a eșuat.", error);
      window.alert("Fișierul de progres nu este valid.");
    }
  };
  reader.readAsText(file);
}
function bindProgressTools() {
  const exportButton = document.getElementById("export-progress");
  const importButton = document.getElementById("import-progress");
  const importInput = document.getElementById("progress-file");
  const resetButton = document.getElementById("reset-progress");
  if (exportButton) exportButton.addEventListener("click", downloadProgress);
  if (importButton && importInput) importButton.addEventListener("click", () => importInput.click());
  if (importInput) importInput.addEventListener("change", () => {
    if (importInput.files[0]) importProgress(importInput.files[0]);
  });
  if (resetButton) resetButton.addEventListener("click", () => {
    if (window.confirm("Ștergi tot progresul salvat în acest browser?")) {
      localStorage.removeItem(PROGRESS_KEY);
      localStorage.removeItem(CRITERIA_KEY);
      location.reload();
    }
  });
}
function isDone(id) { return !!getProgress()[id]; }
function toggleDone(id) {
  const progress = getProgress();
  if (progress[id]) delete progress[id]; else progress[id] = true;
  saveProgress(progress);
  return !!progress[id];
}
function levelProgress(number) {
  const lessons = LESSONS.filter(lesson => lesson.level === number);
  const done = lessons.filter(lesson => isDone(lesson.id)).length;
  return { done, total: lessons.length, pct: lessons.length ? Math.round(done / lessons.length * 100) : 0 };
}
function totalProgress() {
  const done = LESSONS.filter(lesson => isDone(lesson.id)).length;
  return { done, total: LESSONS.length, pct: Math.round(done / LESSONS.length * 100) };
}
function nextIncompleteLesson() {
  return LESSONS.find(lesson => !isDone(lesson.id)) || null;
}
