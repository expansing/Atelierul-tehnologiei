/* Engine pentru demo-urile de clasificare. */

function renderClassify(demo, host) {
  let remaining = demo.items.length;
  host.innerHTML = `
    <div class="classify-items">
      ${demo.items.map((item, index) => `<button class="classify-item" type="button" data-i="${index}">${esc(item.label)}</button>`).join("")}
    </div>
    <div class="classify-zones">
      ${demo.zones.map((zone, index) => `
        <div class="classify-zone" data-z="${index}" role="button" tabindex="0" aria-label="Cutia ${esc(zone)}">
          <h5>${esc(zone)}</h5><div class="zone-items"></div>
        </div>`).join("")}
    </div>
    <div class="quiz-feedback" id="cl-fb" aria-live="polite"></div>`;
  const feedback = host.querySelector("#cl-fb");
  host.querySelectorAll(".classify-item").forEach(button => button.addEventListener("click", () => {
    if (button.classList.contains("placed")) return;
    const item = demo.items[+button.dataset.i];
    host.querySelectorAll(".classify-zone").forEach(zone => zone.style.borderColor = "var(--accent)");
    feedback.textContent = `Unde merge „${item.label}”? Apasă pe cutia potrivită!`;
    host.querySelectorAll(".classify-zone").forEach(zone => {
      const placeItem = () => {
        const zoneIndex = +zone.dataset.z;
        if (zoneIndex === item.zone) {
          const tag = document.createElement("span");
          tag.className = "tag";
          tag.textContent = item.label;
          zone.querySelector(".zone-items").appendChild(tag);
          button.classList.add("placed");
          zone.classList.add("flash-ok");
          setTimeout(() => zone.classList.remove("flash-ok"), 600);
          remaining--;
          feedback.style.color = "var(--success)";
          feedback.textContent = remaining ? `✅ Corect! Mai ai ${remaining} de sortat.` : "🏆 TOATE CORECTE! Bravo, sortorule!";
          if (!remaining) confetti();
        } else {
          zone.classList.add("flash-bad");
          setTimeout(() => zone.classList.remove("flash-bad"), 600);
          feedback.style.color = "var(--danger)";
          feedback.textContent = "🤔 Hmm, mai gândește-te! Unde crezi că merge de fapt?";
        }
        host.querySelectorAll(".classify-zone").forEach(itemZone => itemZone.style.borderColor = "");
      };
      zone.onclick = placeItem;
      zone.onkeydown = event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          placeItem();
        }
      };
    });
  }));
}
