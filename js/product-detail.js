/**
 * ==========================================================================
 * PRODUCT DETAIL - Papelera del Pacífico
 * Carga dinámica de información del producto según el ID de la URL
 * ==========================================================================
 */

// Base de datos de productos
const products = {
  // LÍNEA ECONÓMICA
  'eco-hig-x6': {
    name: 'Higiénico Económico x 6',
    line: 'Económica',
    badgeClass: 'badge-economica',
    description: 'Papel higiénico económico de alta calidad, fabricado con 100% celulosa virgen. Ideal para uso institucional y comercial.',
    image: 'assets/images/products/economica/Higienico-Economico-x-6-rollos-celulosa-para-dispensadores.webp',
    specs: {
      'Presentación': 'Pack x6 rollos',
      'Material': '100% celulosa virgen',
      'Uso': 'Para dispensadores',
      'Tipo': 'Simple hoja'
    },
    category: 'papel-higienico'
  },
  'eco-toa-190': {
    name: 'Toalla Económica 190 x 2',
    line: 'Económica',
    badgeClass: 'badge-economica',
    description: 'Toalla de papel económica con 190 metros de longitud, fabricada con 100% celulosa virgen. Perfecta para alto tráfico.',
    image: 'assets/images/products/economica/Toalla-Economica-tipo-190x2-rollos-para-dispensadores.webp',
    specs: {
      'Presentación': 'Pack x2 rollos',
      'Metraje': '190 metros por rollo',
      'Material': '100% celulosa virgen',
      'Uso': 'Para dispensadores'
    },
    category: 'toalla'
  },
  'eco-toa-250': {
    name: 'Toalla Económica 250 x 2',
    line: 'Económica',
    badgeClass: 'badge-economica',
    description: 'Toalla de papel económica con 250 metros de longitud, fabricada con 100% celulosa virgen. Máximo rendimiento.',
    image: 'assets/images/products/economica/Toalla-Economica-tipo-250x2-rollos-para-dispensadores.webp',
    specs: {
      'Presentación': 'Pack x2 rollos',
      'Metraje': '250 metros por rollo',
      'Material': '100% celulosa virgen',
      'Uso': 'Para dispensadores'
    },
    category: 'toalla'
  },

  // LÍNEA MAXIFORT
  'max-hig-300-x6': {
    name: 'Higiénico Maxifort 300 x 6',
    line: 'Maxifort',
    badgeClass: 'badge-maxifort',
    description: 'Papel higiénico Maxifort de 300 metros, fabricado con 100% celulosa virgen. Calidad superior para uso profesional.',
    image: 'assets/images/products/maxifort/Higienico-300x6-premium-celulosa-dispensadores.webp',
    specs: {
      'Presentación': 'Pack x6 rollos',
      'Metraje': '300 metros por rollo',
      'Material': '100% celulosa virgen',
      'Uso': 'Para dispensadores'
    },
    category: 'papel-higienico'
  },
  'max-hig-500-x4': {
    name: 'Higiénico Maxifort 500 x 4',
    line: 'Maxifort',
    badgeClass: 'badge-maxifort',
    description: 'Papel higiénico Maxifort de 500 metros, fabricado con 100% celulosa virgen. Alta durabilidad para uso intensivo.',
    image: 'assets/images/products/maxifort/Higienico-500x4-premium-celulosa-dispensadores.webp',
    specs: {
      'Presentación': 'Pack x4 rollos',
      'Metraje': '500 metros por rollo',
      'Material': '100% celulosa virgen',
      'Uso': 'Para dispensadores'
    },
    category: 'papel-higienico'
  },
  'max-hig-500-x6': {
    name: 'Higiénico Maxifort 500 x 6',
    line: 'Maxifort',
    badgeClass: 'badge-maxifort',
    description: 'Papel higiénico Maxifort de 500 metros en pack de 6, fabricado con 100% celulosa virgen. Máximo rendimiento.',
    image: 'assets/images/products/maxifort/Higienico-500x6-premium-celulosa-dispensadores.webp',
    specs: {
      'Presentación': 'Pack x6 rollos',
      'Metraje': '500 metros por rollo',
      'Material': '100% celulosa virgen',
      'Uso': 'Para dispensadores'
    },
    category: 'papel-higienico'
  },
  'max-toa-190': {
    name: 'Toalla Maxifort 190 x 2',
    line: 'Maxifort',
    badgeClass: 'badge-maxifort',
    description: 'Toalla de papel Maxifort con 190 metros de longitud, fabricada con 100% celulosa virgen. Calidad profesional.',
    image: 'assets/images/products/maxifort/Toalla-190x2-Maxifort-Celulosa-dispensadores.webp',
    specs: {
      'Presentación': 'Pack x2 rollos',
      'Metraje': '190 metros por rollo',
      'Material': '100% celulosa virgen',
      'Uso': 'Para dispensadores'
    },
    category: 'toalla'
  },
  'max-toa-250': {
    name: 'Toalla Maxifort 250 x 2',
    line: 'Maxifort',
    badgeClass: 'badge-maxifort',
    description: 'Toalla de papel Maxifort con 250 metros de longitud, fabricada con 100% celulosa virgen. Alto rendimiento.',
    image: 'assets/images/products/maxifort/Toalla-250x2-Maxifort-celulosa-dispensadores.webp',
    specs: {
      'Presentación': 'Pack x2 rollos',
      'Metraje': '250 metros por rollo',
      'Material': '100% celulosa virgen',
      'Uso': 'Para dispensadores'
    },
    category: 'toalla'
  },
  // LÍNEA HOGAR DOBLE HOJA
  'hogar-dh-80': {
    name: 'Toalla Hogar Doble Hoja 80m',
    line: 'Hogar Doble Hoja',
    badgeClass: 'badge-hogar-dh',
    description: 'Toalla de papel doble hoja con diseño y tinta laminada. 80 metros de suavidad y absorción para el hogar.',
    image: 'assets/images/products/hogar doble hoja/toalla-Maxifort-doble-hoja-diseño-tinta-laminada-80-mts.webp',
    specs: {
      'Metraje': '80 metros',
      'Tipo': 'Doble hoja con diseño',
      'Material': '100% celulosa virgen',
      'Acabado': 'Tinta laminada'
    },
    category: 'toalla-hogar'
  },
  'hogar-dh-100': {
    name: 'Toalla Hogar Doble Hoja 100m',
    line: 'Hogar Doble Hoja',
    badgeClass: 'badge-hogar-dh',
    description: 'Toalla de papel doble hoja con diseño y tinta laminada. 100 metros de calidad premium para el hogar.',
    image: 'assets/images/products/hogar doble hoja/toalla Maxifort doble hoja diseño tinta laminada 100 mts.jpeg',
    specs: {
      'Metraje': '100 metros',
      'Tipo': 'Doble hoja con diseño',
      'Material': '100% celulosa virgen',
      'Acabado': 'Tinta laminada'
    },
    category: 'toalla-hogar'
  },
  'hogar-dh-150': {
    name: 'Toalla Hogar Colosal Doble Hoja 150m',
    line: 'Hogar Doble Hoja',
    badgeClass: 'badge-hogar-dh',
    description: 'Toalla de papel Colosal doble hoja con diseño y tinta laminada. 150 metros de máximo rendimiento para el hogar.',
    image: 'assets/images/products/hogar doble hoja/toalla-Maxifort-Colosal-doble-hoja-diseno-tinta-laminada-150mts.webp',
    specs: {
      'Metraje': '150 metros',
      'Tipo': 'Doble hoja con diseño',
      'Material': '100% celulosa virgen',
      'Acabado': 'Tinta laminada'
    },
    category: 'toalla-hogar'
  },

  // LÍNEA PLUS
  'plus-hig-300': {
    name: 'Higiénico Plus 300 x 6',
    line: 'Plus',
    badgeClass: 'badge-plus',
    description: 'Papel higiénico Plus de 300 metros, fabricado con 100% celulosa virgen. Equilibrio perfecto entre calidad y economía.',
    image: 'assets/images/products/plus/Higienico-300mtsx6-plus-celulosa-dispensadores.webp',
    specs: {
      'Presentación': 'Pack x6 rollos',
      'Metraje': '300 metros por rollo',
      'Material': '100% celulosa virgen',
      'Uso': 'Para dispensadores'
    },
    category: 'papel-higienico'
  },
  'plus-toa-190': {
    name: 'Toalla Plus 190 x 2',
    line: 'Plus',
    badgeClass: 'badge-plus',
    description: 'Toalla de papel Plus con 190 metros de longitud, fabricada con 100% celulosa virgen. Calidad garantizada.',
    image: 'assets/images/products/plus/Toalla-190mtsx2-plus-celulosa-dispensadores.webp',
    specs: {
      'Presentación': 'Pack x2 rollos',
      'Metraje': '190 metros por rollo',
      'Material': '100% celulosa virgen',
      'Uso': 'Para dispensadores'
    },
    category: 'toalla'
  },
  'plus-toa-250': {
    name: 'Toalla Plus 250 x 2',
    line: 'Plus',
    badgeClass: 'badge-plus',
    description: 'Toalla de papel Plus con 250 metros de longitud, fabricada con 100% celulosa virgen. Mayor rendimiento.',
    image: 'assets/images/products/plus/Toalla-250mtsx2-plus-celulosa-dispensadores.webp',
    specs: {
      'Presentación': 'Pack x2 rollos',
      'Metraje': '250 metros por rollo',
      'Material': '100% celulosa virgen',
      'Uso': 'Para dispensadores'
    },
    category: 'toalla'
  },

  // LÍNEA MÉDICA
  'sabanilla-medica': {
    name: 'Sabanilla Médica',
    line: 'Línea Médica',
    badgeClass: 'badge-premium',
    description: 'Sabanilla médica de alta calidad, fabricada con 100% celulosa virgen. Prepicada para uso profesional en el sector salud.',
    image: 'assets/images/products/sabanilla/sabanillas-medicas-papelera-del-pacifico.webp',
    specs: {
      'Material': '100% celulosa virgen',
      'Tipo': 'Prepicado',
      'Uso': 'Profesional médico',
      'Aplicación': 'Camillas y superficies médicas'
    },
    category: 'sabanilla-medica'
  }
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  loadProductDetail();
  initImageZoom();
  initLightbox();
});

/**
 * Cargar los detalles del producto según el ID de la URL
 */
function loadProductDetail() {
  // Obtener el ID del producto de la URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  if (!productId) {
    showProductNotFound();
    return;
  }

  const product = products[productId];

  if (!product) {
    showProductNotFound();
    return;
  }

  // Actualizar el contenido de la página
  updateProductContent(product);
  updatePageTitle(product.name);
  loadRelatedProducts(product.category, productId);
}

/**
 * Actualizar el contenido de la página con la información del producto
 */
function updateProductContent(product) {
  // Actualizar imagen principal
  const mainImage = document.querySelector('.product-detail__main-image img');
  if (mainImage) {
    mainImage.src = product.image;
    mainImage.alt = product.name;
    mainImage.onerror = function() {
      this.src = generatePlaceholderSVG(product.line);
    };
  }

  // Actualizar badge
  const badge = document.querySelector('.product-detail__info .badge');
  if (badge) {
    badge.textContent = product.line;
    badge.className = 'badge ' + product.badgeClass + ' badge-medium mb-md';
  }

  // Actualizar título
  const title = document.querySelector('.product-detail__info h1');
  if (title) {
    title.textContent = product.name;
  }

  // Actualizar descripción
  const description = document.querySelector('.product-detail__info .text-large');
  if (description) {
    description.textContent = product.description;
  }

  // Actualizar tabla de especificaciones
  const specsTable = document.querySelector('.specs-table');
  if (specsTable) {
    specsTable.innerHTML = '';
    for (const [key, value] of Object.entries(product.specs)) {
      const row = document.createElement('tr');
      row.innerHTML = `<th>${key}</th><td>${value}</td>`;
      specsTable.appendChild(row);
    }
  }
}

/**
 * Actualizar el título de la página
 */
function updatePageTitle(productName) {
  document.title = productName + ' - Papelera del Pacífico';
}

/**
 * Mostrar mensaje cuando el producto no existe
 */
function showProductNotFound() {
  const detailSection = document.querySelector('.product-detail');
  if (detailSection) {
    detailSection.innerHTML = `
      <div style="text-align: center; padding: var(--spacing-2xl);">
        <h1 style="margin-bottom: var(--spacing-md);">Producto no encontrado</h1>
        <p style="margin-bottom: var(--spacing-lg); color: var(--color-neutral-600);">
          Lo sentimos, el producto que buscas no existe o ha sido removido.
        </p>
        <a href="productos.html" class="btn btn-primary">Ver todos los productos</a>
      </div>
    `;
  }

  // Ocultar productos relacionados
  const relatedSection = document.querySelector('.section__header.mt-2xl');
  if (relatedSection) {
    relatedSection.style.display = 'none';
  }
  const relatedGrid = document.querySelector('.section__header.mt-2xl + .grid');
  if (relatedGrid) {
    relatedGrid.style.display = 'none';
  }
}

/**
 * Cargar productos relacionados de la misma categoría
 */
function loadRelatedProducts(category, currentProductId) {
  const relatedGrid = document.querySelector('.section__header.mt-2xl + .grid');
  if (!relatedGrid) return;

  // Filtrar productos de la misma categoría (excluyendo el actual)
  const relatedProducts = Object.entries(products)
    .filter(([id, product]) => product.category === category && id !== currentProductId)
    .slice(0, 3);

  if (relatedProducts.length === 0) {
    // Ocultar sección si no hay productos relacionados
    const relatedSection = document.querySelector('.section__header.mt-2xl');
    if (relatedSection) relatedSection.style.display = 'none';
    relatedGrid.style.display = 'none';
    return;
  }

  relatedGrid.innerHTML = relatedProducts.map(([id, product]) => `
    <div class="card product-card">
      <div class="product-card__image">
        <img src="${product.image}" alt="${product.name}"
             onerror="this.src='${generatePlaceholderSVG(product.line)}'">
        <span class="badge ${product.badgeClass} product-card__badge">${product.line}</span>
      </div>
      <div class="product-card__content">
        <h3 class="product-card__title">${product.name}</h3>
        <ul class="product-card__specs">
          ${Object.values(product.specs).slice(0, 2).map(spec => `<li>${spec}</li>`).join('')}
        </ul>
        <div class="product-card__action">
          <a href="producto-detalle.html?id=${id}" class="btn btn-primary" style="width: 100%;">Ver detalles</a>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * Generar SVG placeholder según la línea de producto
 */
function generatePlaceholderSVG(line) {
  const colors = {
    'Económica': '%234CAF50',
    'Maxifort': '%23E53935',
    'Plus': '%230098D8',
    'Premium': '%23000000'
  };
  const color = colors[line] || '%230098D8';
  const textColor = line === 'Premium' ? '%23FFD54F' : 'white';

  return `data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22500%22 height=%22500%22%3E%3Crect fill=%22${color}%22 width=%22500%22 height=%22500%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22${textColor}%22 font-size=%2248%22 font-family=%22Arial%22 font-weight=%22bold%22%3E${line}%3C/text%3E%3C/svg%3E`;
}

/**
 * ==========================================================================
 * IMAGE ZOOM FUNCTIONALITY
 * ==========================================================================
 */

/**
 * Inicializar el efecto de zoom tipo lupa
 */
function initImageZoom() {
  const imageContainer = document.querySelector('.product-detail__main-image');
  if (!imageContainer) return;

  const img = imageContainer.querySelector('img');
  if (!img) return;

  // Evitar duplicar elementos si ya existen
  let zoomLens = imageContainer.querySelector('.zoom-lens');
  let zoomHint = imageContainer.querySelector('.zoom-hint');

  if (!zoomLens) {
    // Crear el elemento de la lupa
    zoomLens = document.createElement('div');
    zoomLens.className = 'zoom-lens';
    imageContainer.appendChild(zoomLens);
  }

  if (!zoomHint) {
    // Crear hint de zoom con icono de lupa
    zoomHint = document.createElement('div');
    zoomHint.className = 'zoom-hint';
    zoomHint.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>`;
    imageContainer.appendChild(zoomHint);
  }

  // Zoom level
  const zoomLevel = 2.5;

  // Variable para rastrear la última imagen cargada
  let currentImageSrc = '';

  function setupZoomBackground() {
    // Solo actualizar si la imagen cambió o no se ha configurado
    if (img.src && img.src !== currentImageSrc) {
      currentImageSrc = img.src;
      zoomLens.style.backgroundImage = `url('${img.src}')`;
    }
  }

  // Esperar a que la imagen cargue
  img.addEventListener('load', function() {
    setupZoomBackground();
  });

  // Si la imagen ya está cargada
  if (img.complete && img.src) {
    setupZoomBackground();
  }

  // Evento de movimiento del mouse
  imageContainer.addEventListener('mousemove', function(e) {
    // Actualizar el fondo en cada movimiento para asegurar sincronización
    if (img.src !== currentImageSrc) {
      setupZoomBackground();
    }

    const rect = imageContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Posicionar la lupa centrada en el cursor
    const lensSize = 180;
    const lensX = x - lensSize / 2;
    const lensY = y - lensSize / 2;

    zoomLens.style.left = lensX + 'px';
    zoomLens.style.top = lensY + 'px';

    // Calcular la posición del background para el zoom
    const bgX = (x / rect.width) * 100;
    const bgY = (y / rect.height) * 100;

    zoomLens.style.backgroundSize = `${rect.width * zoomLevel}px ${rect.height * zoomLevel}px`;
    zoomLens.style.backgroundPosition = `${bgX}% ${bgY}%`;
  });

  // Ocultar lupa al salir
  imageContainer.addEventListener('mouseleave', function() {
    zoomLens.style.opacity = '0';
  });

  // Mostrar lupa al entrar - actualizar el fondo y restaurar opacidad
  imageContainer.addEventListener('mouseenter', function() {
    setupZoomBackground();
    zoomLens.style.opacity = '1';
  });
}

/**
 * Inicializar el lightbox para ver la imagen en pantalla completa
 */
function initLightbox() {
  const imageContainer = document.querySelector('.product-detail__main-image');
  if (!imageContainer) return;

  const img = imageContainer.querySelector('img');
  if (!img) return;

  // Crear el lightbox
  const lightbox = document.createElement('div');
  lightbox.className = 'image-lightbox';
  lightbox.innerHTML = `
    <button class="image-lightbox__close" aria-label="Cerrar">&times;</button>
    <div class="image-lightbox__content">
      <img class="image-lightbox__img" src="" alt="">
    </div>
    <p class="image-lightbox__hint">Presiona ESC o haz clic para cerrar</p>
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('.image-lightbox__img');
  const closeBtn = lightbox.querySelector('.image-lightbox__close');

  // Abrir lightbox al hacer clic en la imagen
  imageContainer.addEventListener('click', function() {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  // Cerrar lightbox
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    closeLightbox();
  });

  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox || e.target === lightbox.querySelector('.image-lightbox__content')) {
      closeLightbox();
    }
  });

  // Cerrar con ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}
