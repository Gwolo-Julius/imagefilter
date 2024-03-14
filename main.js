(() => {
  "use strict";

  const buttons = document.querySelectorAll(".btn");
  const storeItems = document.querySelectorAll(".item");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const filteredItem = e.target.dataset.filter;

      storeItems.forEach((item) => {
        if (filteredItem === "all") {
          item.style.display = "block";
        } else {
          if (item.classList.contains(filteredItem)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        }
      });
    });
  });
})();
