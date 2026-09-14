/* Router pentru demo-urile interactive ale lecțiilor. */

function renderDemoIntro(demo, visual) {
  if (!visual) return "";
  if (demo.type === "classify") return renderClassifyExample(demo, visual);
  if (demo.type === "quiz") return renderQuizIntro(visual);
  return renderVisualStory(visual);
}

function renderDemo(demo, host, lessonId) {
  if (!demo || !host) return;
  const visual = DEMO_VISUALS[lessonId];
  host.innerHTML = renderDemoIntro(demo, visual) + '<div class="demo-engine"></div>';
  const engine = host.querySelector(".demo-engine");
  if (demo.type === "flow") renderFlow(demo, engine, visual);
  else if (demo.type === "binary") renderBinary(demo, engine);
  else if (demo.type === "quiz") renderQuiz(demo, engine);
  else if (demo.type === "classify") renderClassify(demo, engine);
}

