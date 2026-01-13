/**
 * ==========================================================================
 * MENU JAVASCRIPT - Papelera del Pacífico
 * Funcionalidad del menú hamburguesa y navegación
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  initScrollDirection();
});

/**
 * Inicializar menú móvil (hamburguesa)
 */
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const body = document.body;

  if (!menuToggle || !mobileMenu) {
    return;
  }

  // Toggle del menú al hacer click en el botón hamburguesa
  menuToggle.addEventListener('click', function() {
    const isActive = menuToggle.classList.contains('menu-toggle--active');

    if (isActive) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Cerrar menú al hacer click en un enlace
  const mobileMenuLinks = mobileMenu.querySelectorAll('.mobile-menu__link');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
      closeMenu();
    });
  });

  // Cerrar menú al hacer click fuera de él
  document.addEventListener('click', function(e) {
    const isClickInsideMenu = mobileMenu.contains(e.target);
    const isClickOnToggle = menuToggle.contains(e.target);
    const isMenuOpen = menuToggle.classList.contains('menu-toggle--active');

    if (!isClickInsideMenu && !isClickOnToggle && isMenuOpen) {
      closeMenu();
    }
  });

  // Cerrar menú al presionar Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menuToggle.classList.contains('menu-toggle--active')) {
      closeMenu();
    }
  });

  // Cerrar menú al cambiar de tamaño de ventana (si se hace más grande)
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      if (window.innerWidth > 768 && menuToggle.classList.contains('menu-toggle--active')) {
        closeMenu();
      }
    }, 250);
  });

  /**
   * Abrir el menú móvil
   */
  function openMenu() {
    menuToggle.classList.add('menu-toggle--active');
    mobileMenu.classList.add('mobile-menu--active');
    body.style.overflow = 'hidden'; // Prevenir scroll del body

    // Accesibilidad
    menuToggle.setAttribute('aria-expanded', 'true');
    mobileMenu.setAttribute('aria-hidden', 'false');
  }

  /**
   * Cerrar el menú móvil
   */
  function closeMenu() {
    menuToggle.classList.remove('menu-toggle--active');
    mobileMenu.classList.remove('mobile-menu--active');
    body.style.overflow = ''; // Restaurar scroll del body

    // Accesibilidad
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  }
}

/**
 * Highlight del menú según scroll
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link, .mobile-menu__link');

  if (sections.length === 0) {
    return;
  }

  function highlightNavigation() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('nav__link--active', 'mobile-menu__link--active');

          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('nav__link--active', 'mobile-menu__link--active');
          }
        });
      }
    });
  }

  // Ejecutar al hacer scroll
  window.addEventListener('scroll', window.AYD?.debounce(highlightNavigation, 100) || highlightNavigation);

  // Ejecutar al cargar
  highlightNavigation();
}

/**
 * Detectar dirección del scroll y mostrar/ocultar menú
 */
function initScrollDirection() {
  const header = document.querySelector('.header');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (!header) {
    return;
  }

  let isCompact = false; // Estado actual del header
  let lastScrollY = window.scrollY;
  let accumulatedScroll = 0; // Scroll acumulado en una dirección

  const SCROLL_DOWN_THRESHOLD = 80; // Cuánto scroll hacia abajo para compactar
  const SCROLL_UP_THRESHOLD = 50; // Cuánto scroll hacia arriba para expandir
  const TOP_THRESHOLD = 100; // Zona superior donde siempre está expandido

  function setCompactMode(compact) {
    if (compact === isCompact) return; // No hacer nada si ya está en ese estado

    isCompact = compact;

    if (compact) {
      header.classList.add('header--scrolling-down');
      if (mobileMenu && window.innerWidth >= 769) {
        mobileMenu.style.top = '80px';
      }
    } else {
      header.classList.remove('header--scrolling-down');
      if (mobileMenu && window.innerWidth >= 769) {
        mobileMenu.style.top = '120px';
      }
    }
  }

  function onScroll() {
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - lastScrollY;

    // Si estamos en la zona superior, siempre expandido
    if (currentScrollY <= TOP_THRESHOLD) {
      accumulatedScroll = 0;
      setCompactMode(false);
      lastScrollY = currentScrollY;
      return;
    }

    // Acumular scroll en la dirección actual
    if (scrollDelta > 0) {
      // Scrolleando hacia abajo
      if (accumulatedScroll < 0) {
        accumulatedScroll = 0; // Reset si cambió de dirección
      }
      accumulatedScroll += scrollDelta;

      if (accumulatedScroll >= SCROLL_DOWN_THRESHOLD) {
        setCompactMode(true);
      }
    } else if (scrollDelta < 0) {
      // Scrolleando hacia arriba
      if (accumulatedScroll > 0) {
        accumulatedScroll = 0; // Reset si cambió de dirección
      }
      accumulatedScroll += scrollDelta; // scrollDelta es negativo

      if (accumulatedScroll <= -SCROLL_UP_THRESHOLD) {
        setCompactMode(false);
      }
    }

    lastScrollY = currentScrollY;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}

// Inicializar scroll spy si está disponible
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollSpy);
} else {
  initScrollSpy();
}
