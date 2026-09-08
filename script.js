// Sin dependencias: pensado para GitHub Pages sin build ni servidor.

(function () {
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');
  var links = menu.querySelectorAll('a');
  var sections = Array.prototype.map.call(links, function (link) {
    return document.querySelector(link.getAttribute('href'));
  });

  // Fondo del nav al hacer scroll
  function onScroll() {
    nav.classList.toggle('is-scrolled', window.scrollY > 12);
    highlightActive();
  }

  // Resalta el link de la sección visible
  function highlightActive() {
    var offset = 96;
    var current = sections[0];
    for (var i = 0; i < sections.length; i++) {
      if (sections[i] && sections[i].getBoundingClientRect().top - offset <= 0) {
        current = sections[i];
      }
    }
    links.forEach(function (link, i) {
      link.classList.toggle('is-active', sections[i] === current);
    });
  }

  // Menú móvil
  toggle.addEventListener('click', function () {
    var isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  links.forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
