(function () {
  "use strict";

  // FAQ
  function initFaqAccordion() {
    var faqButtons = document.querySelectorAll(".faq-question");
    if (!faqButtons.length) return;

    faqButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var item = btn.closest(".faq-item");
        var answer = item.querySelector(".faq-answer");
        var icon = btn.querySelector(".icon");
        var isOpen = item.classList.contains("open");

        // Pechar todos os demais
        document.querySelectorAll(".faq-item.open").forEach(function (openItem) {
          if (openItem !== item) {
            openItem.classList.remove("open");
            openItem.querySelector(".faq-answer").style.maxHeight = null;
            openItem.querySelector(".icon").textContent = "+";
          }
        });

        // Alternar o actual
        if (isOpen) {
          item.classList.remove("open");
          answer.style.maxHeight = null;
          icon.textContent = "+";
        } else {
          item.classList.add("open");
          answer.style.maxHeight = answer.scrollHeight + "px";
          icon.textContent = "×";
        }
      });
    });
  }

  // INICIALIZACIÓN
  document.addEventListener("DOMContentLoaded", function () {
    initFaqAccordion();
  });
})();