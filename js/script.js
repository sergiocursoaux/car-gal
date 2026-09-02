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

    // SIDEBAR DO CATÁLOGO
    function initCatalogSidebar() {
        var sidebar = document.querySelector(".catalog-sidebar");
        if (!sidebar) return;

        var categoryOptions = sidebar.querySelectorAll(".sidebar-group:first-child .sidebar-option");
        var stockOptions = sidebar.querySelectorAll(".sidebar-group:last-child .sidebar-option");
        var searchInput = document.querySelector(".search-bar input");
        var sortSelect = document.querySelector(".sort-select");
        var productCards = document.querySelectorAll(".catalog-product-card");

        var activeCategories = ["Todas as pezas"];
        var activeStock = "En stock";

        function getStockFromCard(card) {
            var badge = card.querySelector(".badge-stock");
            if (!badge) return "";
            return badge.classList.contains("in-stock") ? "En stock" : "Baixo pedido";
        }

        function getCategoryFromCard(card) {
            var cat = card.querySelector(".category");
            return cat ? cat.textContent.trim() : "";
        }

        function filterProducts() {
            var searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : "";

            productCards.forEach(function (card) {
                var cardCategory = getCategoryFromCard(card);
                var cardStock = getStockFromCard(card);
                var cardName = card.querySelector("h4") ? card.querySelector("h4").textContent.toLowerCase() : "";

                var matchCategory = activeCategories.indexOf("Todas as pezas") !== -1 || activeCategories.indexOf(cardCategory) !== -1;
                var matchStock = activeStock === "" || cardStock === activeStock;
                var matchSearch = searchTerm === "" || cardName.indexOf(searchTerm) !== -1;

                if (matchCategory && matchStock && matchSearch) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }
            });

            sortProducts();
        }

        function sortProducts() {
            if (!sortSelect) return;
            var grid = document.querySelector(".catalog-products-grid");
            if (!grid) return;

            var cards = Array.from(grid.querySelectorAll(".catalog-product-card"));
            var value = sortSelect.value;

            cards.sort(function (a, b) {
                if (value === "Nome A-Z") {
                    var nameA = a.querySelector("h4") ? a.querySelector("h4").textContent : "";
                    var nameB = b.querySelector("h4") ? b.querySelector("h4").textContent : "";
                    return nameA.localeCompare(nameB, "gl");
                }
                return 0;
            });

            cards.forEach(function (card) {
                grid.appendChild(card);
            });
        }

        categoryOptions.forEach(function (option) {
            option.addEventListener("click", function () {
                var span = option.querySelector("span");
                var value = span ? span.textContent.trim() : "";
                var checkbox = option.querySelector(".sidebar-checkbox");

                if (value === "Todas as pezas") {
                    activeCategories = ["Todas as pezas"];
                    categoryOptions.forEach(function (opt) {
                        var cb = opt.querySelector(".sidebar-checkbox");
                        if (cb) cb.classList.remove("checked");
                    });
                    if (checkbox) checkbox.classList.add("checked");
                } else {
                    var allCheckbox = categoryOptions[0].querySelector(".sidebar-checkbox");
                    allCheckbox.classList.remove("checked");
                    activeCategories = activeCategories.filter(function (c) { return c !== "Todas as pezas"; });

                    var idx = activeCategories.indexOf(value);
                    if (idx !== -1) {
                        activeCategories.splice(idx, 1);
                        if (checkbox) checkbox.classList.remove("checked");
                    } else {
                        activeCategories.push(value);
                        if (checkbox) checkbox.classList.add("checked");
                    }

                    if (activeCategories.length === 0) {
                        activeCategories = ["Todas as pezas"];
                        if (allCheckbox) allCheckbox.classList.add("checked");
                    }
                }

                filterProducts();
            });
        });

        stockOptions.forEach(function (option) {
            option.addEventListener("click", function () {
                var span = option.querySelector("span");
                activeStock = span ? span.textContent.trim() : "";

                stockOptions.forEach(function (opt) {
                    var radio = opt.querySelector(".sidebar-radio");
                    if (radio) radio.classList.remove("checked");
                });

                var radio = option.querySelector(".sidebar-radio");
                if (radio) radio.classList.add("checked");

                filterProducts();
            });
        });

        if (searchInput) {
            searchInput.addEventListener("input", filterProducts);
        }

        if (sortSelect) {
            sortSelect.addEventListener("change", filterProducts);
        }
    }

    // GALERÍA FICHA DE PRODUCTO
    function initProductGallery() {
        var thumbnails = document.querySelectorAll(".product-thumbnail");
        var mainImage = document.querySelector(".product-main-image");
        if (!thumbnails.length || !mainImage) return;

        thumbnails.forEach(function (thumb) {
            thumb.addEventListener("click", function () {
                thumbnails.forEach(function (t) { t.classList.remove("active"); });
                thumb.classList.add("active");

                var bgImage = thumb.style.backgroundImage;
                if (bgImage) {
                    mainImage.style.backgroundImage = bgImage;
                }
            });
        });
    }

    // FORMULARIO DE CONTACTO
    function initContactForm() {
        var form = document.querySelector(".contact-form-card form");
        if (!form) return;

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            var nome = form.querySelector("#nome");
            var email = form.querySelector("#email");
            var asunto = form.querySelector("#asunto");
            var mensaxe = form.querySelector("#mensaxe");
            var privacidade = form.querySelector("#privacidade");
            var submitBtn = form.querySelector(".btn-submit");

            // Limpar erros anteriores
            form.querySelectorAll(".form-error").forEach(function (el) { el.remove(); });
            form.querySelectorAll("input, select, textarea").forEach(function (el) {
                el.style.borderColor = "";
            });

            var valid = true;

            function showError(field, message) {
                var errorEl = document.createElement("span");
                errorEl.className = "form-error";
                errorEl.textContent = message;
                errorEl.style.color = "#D32F2F";
                errorEl.style.fontSize = "12px";
                errorEl.style.fontWeight = "500";
                errorEl.style.marginTop = "4px";
                errorEl.style.display = "block";
                field.parentElement.appendChild(errorEl);
                field.style.borderColor = "#D32F2F";
                valid = false;
            }

            if (!nome.value.trim()) {
                showError(nome, "Por favor, introduza o seu nome.");
            }
            if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                showError(email, "Por favor, introduza un correo electrónico válido.");
            }
            if (!asunto.value) {
                showError(asunto, "Por favor, seleccione un asunto.");
            }
            if (!mensaxe.value.trim()) {
                showError(mensaxe, "Por favor, escriba a súa mensaxe.");
            }
            if (!privacidade.checked) {
                showError(privacidade, "Debe aceptar a Política de Privacidade.");
            }

            if (!valid) return;

            // Simular envío
            submitBtn.textContent = "Enviando…";
            submitBtn.disabled = true;
            submitBtn.style.opacity = "0.7";

            setTimeout(function () {
                form.innerHTML =
                    '<div style="text-align:center; padding:40px 0;">' +
                    '<div style="font-size:48px; margin-bottom:16px;">✓</div>' +
                    '<h3 style="color:#2E7D32; margin-bottom:8px;">Mensaxe enviada</h3>' +
                    '<p style="color:#6C8494;">Grazas por contactar connosco. <br> Responderémoslle o antes posible.</p>' +
                    "</div>";
            }, 1000);
        });
    }

    // BARRA DE NAVEGACIÓN
    function initActiveNav() {
        var currentPage = window.location.pathname.split("/").pop() || "index.html";
        var navLinks = document.querySelectorAll("nav ul li a");

        navLinks.forEach(function (link) {
            var href = link.getAttribute("href");
            if (href === currentPage) {
                link.style.fontWeight = "700";
                link.style.borderBottom = "2px solid #171717";
                link.style.paddingBottom = "4px";
            }
        });
    }

    // INICIALIZACIÓN
    document.addEventListener("DOMContentLoaded", function () {
        initFaqAccordion();
        initProjectFilters();
        initLoadMore();
        initCatalogSidebar();
        initProductGallery();
        initContactForm();
        initActiveNav();
    });
})();