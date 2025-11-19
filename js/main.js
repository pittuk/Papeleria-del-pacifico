/**
 * ==========================================================================
 * MAIN JAVASCRIPT - Papelera del Pacífico
 * Funcionalidad principal del sitio web
 * ==========================================================================
 */

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar todos los módulos
  initSmoothScroll();
  initActiveNavLinks();
  initLazyLoading();

  console.log('Sitio web de Papelera del Pacífico cargado correctamente');
});

/**
 * Smooth Scroll para enlaces internos
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Ignorar enlaces vacíos
      if (href === '#' || href === '#!') {
        return;
      }

      e.preventDefault();

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Marcar enlace de navegación activo según la página actual
 */
function initActiveNavLinks() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav__link, .mobile-menu__link');

  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;

    if (linkPath === currentPath ||
        (currentPath === '/' && linkPath.endsWith('index.html')) ||
        (currentPath.endsWith('/') && linkPath.endsWith('index.html'))) {
      link.classList.add('nav__link--active');
      link.classList.add('mobile-menu__link--active');
    }
  });
}

/**
 * Lazy Loading para imágenes
 */
function initLazyLoading() {
  // Verificar si el navegador soporta IntersectionObserver
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');

          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            img.classList.add('loaded');
          }

          observer.unobserve(img);
        }
      });
    });

    // Observar todas las imágenes con data-src
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback: cargar todas las imágenes inmediatamente
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
      const src = img.getAttribute('data-src');
      if (src) {
        img.src = src;
        img.removeAttribute('data-src');
      }
    });
  }
}

/**
 * Utilidad: Mostrar/ocultar elementos
 */
function toggleElement(element, show) {
  if (show) {
    element.classList.remove('d-none');
  } else {
    element.classList.add('d-none');
  }
}

/**
 * Utilidad: Hacer scroll hasta un elemento
 */
function scrollToElement(element, offset = 0) {
  const targetPosition = element.offsetTop - offset;
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}

/**
 * Utilidad: Debounce para optimizar eventos
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Exportar funciones para uso en otros módulos
window.AYD = {
  toggleElement,
  scrollToElement,
  debounce
};
