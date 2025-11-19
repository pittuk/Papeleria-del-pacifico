/**
 * ==========================================================================
 * FILTERS JAVASCRIPT - Papelera del Pacífico
 * Funcionalidad de filtros de productos
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', function() {
  initProductFilters();
});

/**
 * Inicializar filtros de productos
 */
function initProductFilters() {
  const filterForm = document.querySelector('.products-sidebar');
  const productsGrid = document.querySelector('.products-grid');

  if (!filterForm || !productsGrid) {
    return;
  }

  const filterInputs = filterForm.querySelectorAll('input[type="checkbox"], input[type="radio"]');
  const productCards = productsGrid.querySelectorAll('.product-card');

  // Event listeners para todos los filtros
  filterInputs.forEach(input => {
    input.addEventListener('change', applyFilters);
  });

  /**
   * Aplicar filtros a los productos
   */
  function applyFilters() {
    // Obtener filtros activos
    const activeCategories = getActiveFilters('category');
    const activeTypes = getActiveFilters('type');

    let visibleCount = 0;

    // Filtrar productos
    productCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const cardType = card.getAttribute('data-type');

      let shouldShow = true;

      // Filtrar por categoría
      if (activeCategories.length > 0 && !activeCategories.includes(cardCategory)) {
        shouldShow = false;
      }

      // Filtrar por tipo
      if (activeTypes.length > 0 && !activeTypes.includes(cardType)) {
        shouldShow = false;
      }

      // Mostrar u ocultar producto con animación
      if (shouldShow) {
        card.style.display = '';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        }, 10);
        visibleCount++;
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });

    // Mostrar mensaje si no hay resultados
    showNoResultsMessage(visibleCount === 0);
  }

  /**
   * Obtener filtros activos por tipo
   */
  function getActiveFilters(filterType) {
    const activeFilters = [];
    const inputs = filterForm.querySelectorAll(`input[name="${filterType}"]:checked`);

    inputs.forEach(input => {
      activeFilters.push(input.value);
    });

    return activeFilters;
  }

  /**
   * Mostrar mensaje de "no hay resultados"
   */
  function showNoResultsMessage(show) {
    let noResultsMessage = productsGrid.querySelector('.no-results-message');

    if (show) {
      if (!noResultsMessage) {
        noResultsMessage = document.createElement('div');
        noResultsMessage.className = 'no-results-message';
        noResultsMessage.innerHTML = `
          <div style="text-align: center; padding: 4rem 2rem;">
            <h3 style="margin-bottom: 1rem;">No se encontraron productos</h3>
            <p style="color: var(--color-neutral-600);">
              Intenta ajustar los filtros para ver más resultados.
            </p>
          </div>
        `;
        productsGrid.appendChild(noResultsMessage);
      }
      noResultsMessage.style.display = 'block';
    } else {
      if (noResultsMessage) {
        noResultsMessage.style.display = 'none';
      }
    }
  }

  /**
   * Botón para limpiar filtros
   */
  const clearFiltersBtn = document.querySelector('.clear-filters');
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', function() {
      // Desmarcar todos los checkboxes y radios
      filterInputs.forEach(input => {
        input.checked = false;
      });

      // Aplicar filtros (mostrar todos)
      applyFilters();
    });
  }
}

/**
 * Búsqueda de productos
 */
function initProductSearch() {
  const searchInput = document.querySelector('.product-search-input');
  const productsGrid = document.querySelector('.products-grid');

  if (!searchInput || !productsGrid) {
    return;
  }

  const productCards = productsGrid.querySelectorAll('.product-card');

  // Debounce para optimizar búsqueda
  let searchTimeout;

  searchInput.addEventListener('input', function(e) {
    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
      const searchTerm = e.target.value.toLowerCase().trim();
      let visibleCount = 0;

      productCards.forEach(card => {
        const productName = card.getAttribute('data-name')?.toLowerCase() || '';
        const productCategory = card.getAttribute('data-category')?.toLowerCase() || '';
        const productSpecs = card.querySelector('.product-card__specs')?.textContent.toLowerCase() || '';

        const matchesSearch =
          productName.includes(searchTerm) ||
          productCategory.includes(searchTerm) ||
          productSpecs.includes(searchTerm);

        if (matchesSearch || searchTerm === '') {
          card.style.display = '';
          card.style.opacity = '1';
          visibleCount++;
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });

      // Mostrar mensaje si no hay resultados
      showSearchNoResults(visibleCount === 0 && searchTerm !== '');
    }, 300);
  });

  function showSearchNoResults(show) {
    let noResultsMessage = productsGrid.querySelector('.search-no-results');

    if (show) {
      if (!noResultsMessage) {
        noResultsMessage = document.createElement('div');
        noResultsMessage.className = 'search-no-results';
        noResultsMessage.innerHTML = `
          <div style="text-align: center; padding: 4rem 2rem;">
            <h3 style="margin-bottom: 1rem;">No se encontraron productos</h3>
            <p style="color: var(--color-neutral-600);">
              No hay productos que coincidan con tu búsqueda.
            </p>
          </div>
        `;
        productsGrid.appendChild(noResultsMessage);
      }
      noResultsMessage.style.display = 'block';
    } else {
      if (noResultsMessage) {
        noResultsMessage.style.display = 'none';
      }
    }
  }
}

// Inicializar búsqueda si está disponible
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initProductSearch);
} else {
  initProductSearch();
}
