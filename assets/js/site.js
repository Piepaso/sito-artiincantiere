(() => {
  const yearNode = document.querySelector("#year");
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }

  const courseCards = document.querySelectorAll(".course-card");

  courseCards.forEach((card) => {
    const total = Number(card.getAttribute("data-total"));
    let occupied = Number(card.getAttribute("data-occupied"));

    const freeNode = card.querySelector(".spots-free");
    const plusButton = card.querySelector(".js-plus");
    const minusButton = card.querySelector(".js-minus");

    const renderAvailability = () => {
      const free = Math.max(total - occupied, 0);
      if (freeNode) {
        freeNode.textContent = String(free);
      }
      card.setAttribute("data-occupied", String(occupied));
    };

    if (plusButton) {
      plusButton.addEventListener("click", () => {
        occupied = Math.min(occupied + 1, total);
        renderAvailability();
      });
    }

    if (minusButton) {
      minusButton.addEventListener("click", () => {
        occupied = Math.max(occupied - 1, 0);
        renderAvailability();
      });
    }

    renderAvailability();
  });
})();
