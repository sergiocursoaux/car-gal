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

// FILTROS DE GALERÍA DE PROXECTOS 
  function initProjectFilters() {
    var filterBtns = document.querySelectorAll(".filter-btn");
    var projectCards = document.querySelectorAll(".project-card");
    if (!filterBtns.length || !projectCards.length) return;

    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {

        // Actualizar botón activo
        filterBtns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");

        var filter = btn.getAttribute("data-filter");

        projectCards.forEach(function (card) {
          var category = card.getAttribute("data-category");
          if (filter === "todos" || category === filter) {
            card.style.display = "";
            card.style.opacity = "0";
            card.style.transform = "translateY(12px)";
            requestAnimationFrame(function () {
              card.style.transition = "opacity 0.3s ease, transform 0.3s ease";
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            });
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  // BOTÓN "CARGAR MÁIS"
  function initLoadMore() {
    var loadMoreBtns = document.querySelectorAll(".btn-load-more");
    loadMoreBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var originalText = btn.textContent;
        btn.textContent = "Cargando…";
        btn.disabled = true;

        setTimeout(function () {
          btn.textContent = "Non hai máis elementos";
          btn.style.opacity = "0.5";
          btn.style.cursor = "default";
        }, 800);
      });
    });
  }

  // INICIALIZACIÓN
  document.addEventListener("DOMContentLoaded", function () {
    initFaqAccordion();
    initProjectFilters();
    initLoadMore();
  });
})();