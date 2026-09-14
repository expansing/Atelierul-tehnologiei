/* Index comun pentru datele curriculumului, încărcat înaintea motorului UI. */
const LESSONS = [...LESSONS_A, ...LESSONS_B, ...LESSONS_C, ...LESSONS_D];
const DEMO_GUIDES = {
  ...(typeof DEMO_GUIDES_A !== "undefined" ? DEMO_GUIDES_A : {}),
  ...(typeof DEMO_GUIDES_B !== "undefined" ? DEMO_GUIDES_B : {}),
  ...(typeof DEMO_GUIDES_C !== "undefined" ? DEMO_GUIDES_C : {}),
  ...(typeof DEMO_GUIDES_D !== "undefined" ? DEMO_GUIDES_D : {})
};
