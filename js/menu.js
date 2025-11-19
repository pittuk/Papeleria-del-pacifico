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

  let lastScrollY = window.scrollY;
  let ticking = false;
  const scrollThreshold = 10; // Umbral para evitar cambios rápidos

  function updateHeaderState() {
    const currentScrollY = window.scrollY;
    const scrollDifference = Math.abs(currentScrollY - lastScrollY);

    // Solo actualizar si el scroll cambió más del umbral
    if (scrollDifference < scrollThreshold) {
      ticking = false;
      return;
    }

    // Si el scroll es mayor a 100px
    if (currentScrollY > 100) {
      if (currentScrollY > lastScrollY) {
        // Scroll hacia abajo - ocultar menú, mostrar hamburguesa
        header.classList.add('header--scrolling-down');

        // Ajustar posición del menú móvil si existe
        if (mobileMenu && window.innerWidth >= 769) {
          mobileMenu.style.top = '80px';
        }
      } else {
        // Scroll hacia arriba - mostrar menú completo
        header.classList.remove('header--scrolling-down');

        // Restaurar posición del menú móvil si existe
        if (mobileMenu && window.innerWidth >= 769) {
          mobileMenu.style.top = '120px';
        }
      }
    } else {
      // En la parte superior - siempre mostrar menú completo
      header.classList.remove('header--scrolling-down');

      // Restaurar posición del menú móvil si existe
      if (mobileMenu && window.innerWidth >= 769) {
        mobileMenu.style.top = '120px';
      }
    }

    lastScrollY = currentScrollY;
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(updateHeaderState);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}

// Inicializar scroll spy si está disponible
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollSpy);
} else {
  initScrollSpy();
}
