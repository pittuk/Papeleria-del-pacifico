# PRD: Sitio Web Corporativo - Papelera del Pacífico

## 1. INFORMACIÓN GENERAL DEL PROYECTO

**Nombre del Proyecto:** Sitio Web Corporativo Papelera del Pacífico
**Cliente:** Papelera del Pacífico SPA
**Plataforma de Desarrollo:** Figma Make
**Tipo de Sitio:** Sitio web corporativo informativo
**Fecha de Creación:** Noviembre 2025
**Ubicación Cliente:** Guardia vieja 202, Providencia, Santiago, Chile

---

## 2. RESUMEN EJECUTIVO

Desarrollo de un sitio web corporativo informativo para Papelera del Pacífico SPA, empresa dedicada a la fabricación y distribución de productos de papel (papel toalla, papel higiénico y sabanilla médica) bajo la marca Maxifort. El sitio será desarrollado utilizando Figma Make y deberá reflejar los valores de compromiso, desarrollo e innovación de la empresa, presentando su catálogo de productos de manera profesional y accesible.

---

## 3. OBJETIVOS DEL PROYECTO

### 3.1 Objetivos de Negocio
- Establecer presencia digital profesional de Papelera del Pacífico
- Presentar el catálogo completo de productos Maxifort
- Comunicar los valores corporativos: compromiso, desarrollo e innovación
- Facilitar el contacto con clientes potenciales y distribuidores
- Posicionar a AYD como fabricante de confianza en el sector papelero

### 3.2 Objetivos de Usuario
- Encontrar información clara sobre productos disponibles
- Conocer las especificaciones técnicas de cada producto
- Contactar fácilmente con la empresa
- Entender los valores y compromiso de la marca
- Acceder a información desde cualquier dispositivo

### 3.3 Métricas de Éxito
- Tiempo de carga menor a 3 segundos
- Tasa de rebote menor al 50%
- Al menos 3 solicitudes de contacto por semana
- 100% responsive en todos los dispositivos
- Accesibilidad WCAG 2.1 nivel AA

---

## 4. IDENTIDAD DE MARCA

### 4.1 Paleta de Colores Corporativos

**Colores Principales:**
- **Azul Navy Corporativo:** `#1B4F72` (color principal del logotipo Papelera del Pacífico)
  - Uso: Logo, elementos destacados, botones principales, fondos de sección

- **Blanco:** `#FFFFFF`
  - Uso: Fondos principales, texto sobre fondos oscuros, espacios respiratorios

**Colores Secundarios (para líneas de producto):**
- **Azul Maxifort:** `#0098D8`
  - Uso: Línea "Maxifort" azul (productos XL Hogar)

- **Rojo Maxifort:** `#E53935`
  - Uso: Línea "Maxifort" roja (productos L Hogar, XXL Hogar)

- **Verde Maxifort:** `#4CAF50`
  - Uso: Línea institucional verde (productos XXXL)

- **Amarillo Maxifort:** `#FFD54F`
  - Uso: Línea Premium amarilla

**Colores de Soporte:**
- **Negro:** `#000000` / `#2C2C2C`
  - Uso: Textos principales, footer

- **Gris oscuro:** `#4A4A4A`
  - Uso: Textos secundarios

- **Gris claro:** `#F5F5F5`
  - Uso: Fondos alternativos, separadores

### 4.2 Tipografía
- **Fuente Principal (Títulos):** Montserrat Bold/SemiBold
- **Fuente Secundaria (Cuerpo):** Open Sans Regular/Light
- **Tamaños sugeridos:**
  - H1: 48px
  - H2: 36px
  - H3: 28px
  - Body: 16px
  - Small: 14px

### 4.3 Elementos Visuales
- Efecto de "papel rasgado" como divisor de secciones (presente en la presentación corporativa)
- Fotografías de productos con fondo limpio y profesional
- Imágenes lifestyle mostrando uso familiar de los productos
- Iconos simples para categorías: sabanilla médica, papel higiénico, papel toalla

---

## 5. ARQUITECTURA DE INFORMACIÓN

### 5.1 Estructura del Sitio (Menú de Navegación)

```
├── Inicio
├── Nosotros
│   ├── Quiénes Somos
│   ├── Misión y Visión
│   └── Valores
├── Productos
│   ├── Papel Toalla
│   │   ├── Hogar (L, XL, XXL)
│   │   ├── Institucional (XXL, XXXL)
│   │   └── Premium (XL)
│   ├── Papel Higiénico
│   │   ├── Premium XL
│   │   └── Premium XXL
│   └── Sabanilla Médica
├── Contacto
└── Footer
    ├── Datos de contacto
    ├── Dirección
    ├── Redes sociales
    └── Copyright
```

### 5.2 Wireframe de Páginas

#### 5.2.1 PÁGINA DE INICIO

**Sección 1 - Hero Section**
- Imagen hero full-width con productos Maxifort
- Logo AYD prominente
- Tagline: "Compromiso, Desarrollo e Innovación"
- CTA: "Ver Productos" / "Contactar"

**Sección 2 - Sobre Nosotros (Resumen)**
- Fondo con color azul navy corporativo o verde claro del logotipo
- Título: "Compromiso"
- Texto: "Papelera del Pacífico SPA está comprometida con valores, la comunidad y el medio ambiente, contribuye al desarrollo de agentes económicos, satisfaciendo de forma innovadora sus necesidades y otras relacionadas."
- CTA: "Conocer más"

**Sección 3 - Desarrollo e Innovación**
- Fondo blanco
- Título: "Desarrollo e Innovación"
- Texto: "Nuestra empresa siempre se ha dedicado y puesto énfasis en las necesidades del mercado y de nuestros clientes, generando valor a los productos de nuestros socios comerciales y clientes. El desarrollo de marcas propias es un elemento diferenciador."
- Iconos de categorías: Sabanilla médica | Papel higiénico | Papel toalla

**Sección 4 - Productos Destacados**
- Grid de 3-6 productos principales
- Cada tarjeta incluye:
  - Imagen del producto
  - Nombre
  - Categoría (badge con color correspondiente)
  - Botón "Ver detalles"

**Sección 5 - Call to Action Final**
- Fondo azul navy o verde claro
- "¿Necesitas más información?"
- Botón: "Contáctanos"

#### 5.2.2 PÁGINA NOSOTROS

**Sección 1 - Banner**
- Imagen de empresa/equipo
- Título: "Papelera del Pacífico SPA"

**Sección 2 - Quiénes Somos**
- Texto corporativo
- Imagen de instalaciones o productos

**Sección 3 - Nuestros Valores**
- Cards con iconos:
  - Compromiso
  - Desarrollo
  - Innovación
  - Calidad
  - Medio Ambiente

**Sección 4 - Nuestra Ubicación**
- Información de dirección
- Mapa integrado (Google Maps)
- Dirección: Guardia vieja 202, Providencia, Santiago

#### 5.2.3 PÁGINA PRODUCTOS

**Layout:**
- Sidebar con filtros de categoría:
  - Todos
  - Papel Toalla
  - Papel Higiénico
  - Sabanilla Médica
  - Por uso (Hogar / Institucional / Premium)

**Grid de Productos:**
- Vista de catálogo en grid responsive (3 columnas desktop, 2 tablet, 1 móvil)
- Cada producto muestra:
  - Imagen del producto
  - Badge de categoría (con color correspondiente)
  - Nombre del producto
  - Características clave (3-4 bullet points)
  - Botón "Ver detalles"

#### 5.2.4 PÁGINA DETALLE DE PRODUCTO

**Layout de dos columnas:**

**Columna Izquierda (40%):**
- Galería de imágenes del producto
- Imagen principal grande
- Miniaturas debajo (si hay múltiples imágenes)

**Columna Derecha (60%):**
- Badge de categoría (con color)
- Nombre del producto
- Descripción breve
- Especificaciones técnicas:
  - Size
  - Metros
  - Hojas (si aplica)
  - Prepicado
  - Fabricación
  - Tipo de empaque
  - Para dispensadores (si aplica)
  - Pallet
  - Código
  - Código de barra

**Sección inferior:**
- Productos relacionados
- CTA: "Solicitar cotización"

#### 5.2.5 PÁGINA CONTACTO

**Layout:**
- Formulario de contacto (50%)
  - Nombre completo
  - Email
  - Teléfono
  - Empresa
  - Mensaje
  - Botón "Enviar"

- Información de contacto (50%)
  - Dirección: Guardia vieja 202, Providencia, Santiago
  - Teléfono: [pendiente]
  - Email: [pendiente]
  - Horario de atención
  - Mapa integrado

---

## 6. CATÁLOGO DE PRODUCTOS

### 6.1 PAPEL TOALLA - LÍNEA HOGAR

#### Producto 1: Papel Toalla Maxifort L Hogar
- **Categoría:** Hogar
- **Color de línea:** Rojo/Naranja
- **Especificaciones:**
  - Size: L
  - Metros: 80
  - Prepicado: Sí
  - Fabricación: 100% celulosa virgen
  - Tipo de empaque: Bolsón de 10 rollos
  - Pallet: 300 unidades
  - Código: TP0015
  - Código de barra: 7804679590045

#### Producto 2: Papel Toalla Maxifort XL Hogar
- **Categoría:** Hogar
- **Color de línea:** Azul
- **Especificaciones:**
  - Size: XL
  - Metros: 100
  - Prepicado: Sí
  - Fabricación: 100% celulosa virgen
  - Tipo de empaque: Bolsón de 10 rollos
  - Pallet: 300 unidades
  - Código: TP0019
  - Código de barra: 7804679590038

#### Producto 3: Papel Toalla Maxifort XXL Hogar
- **Categoría:** Hogar
- **Color de línea:** Rojo
- **Especificaciones:**
  - Size: XXL
  - Metros: 150
  - Prepicado: Sí
  - Fabricación: 100% celulosa virgen
  - Tipo de empaque: Bolsón de 10 rollos
  - Pallet: 300 unidades
  - Código: TP0021
  - Código de barra: 7804679590021

### 6.2 PAPEL TOALLA - LÍNEA INSTITUCIONAL

#### Producto 4: Papel Toalla Maxifort XXL Institucional
- **Categoría:** Institucional
- **Color de línea:** Azul
- **Especificaciones:**
  - Size: Pack x2
  - Metros: 190
  - Prepicado: Sí
  - Fabricación: 100% celulosa virgen
  - Tipo de empaque: Bolsón de 10 rollos
  - Para dispensadores: Sí
  - Pallet: 150 Pack
  - Código: TP0011
  - Código de barra: 7804679590007

#### Producto 5: Papel Toalla Maxifort XXXL Institucional
- **Categoría:** Institucional
- **Color de línea:** Verde
- **Especificaciones:**
  - Size: Pack x2
  - Metros: 250
  - Prepicado: Sí
  - Fabricación: 100% celulosa virgen
  - Tipo de empaque: Bolsón de 10 rollos
  - Para dispensadores: Sí
  - Pallet: 150 Pack
  - Código: TP0023
  - Código de barra: 7804666650059

### 6.3 PAPEL TOALLA - LÍNEA PREMIUM

#### Producto 6: Papel Toalla PREMIUM XL Maxifort
- **Categoría:** Premium
- **Color de línea:** Azul/Negro
- **Especificaciones:**
  - Size: XL
  - Metros: 100
  - Prepicado: Sí
  - Fabricación: 100% celulosa virgen
  - Tipo de empaque: Bolsón de 10 rollos
  - Pallet: 300 unidades
  - Código: TP0015
  - Código de barra: 7804679590045

### 6.4 PAPEL HIGIÉNICO - LÍNEA PREMIUM

#### Producto 7: Papel Higiénico Premium Ultra Suavidad XL
- **Categoría:** Premium
- **Color de línea:** Negro/Amarillo
- **Especificaciones:**
  - Size: Pack x6
  - Metros: 250
  - Hojas: Una Hoja
  - Prepicado: Sí
  - Fabricación: 100% celulosa virgen
  - Tipo de empaque: Bolsón de 10 rollos
  - Para dispensadores: Sí
  - Pallet: 70 Pack
  - Código: TP0013
  - Código de barra: 7804679590052

#### Producto 8: Papel Higiénico Premium Ultra Suavidad XXL
- **Categoría:** Premium
- **Color de línea:** Negro/Amarillo
- **Especificaciones:**
  - Size: Pack x6
  - Metros: 500
  - Hojas: N/A
  - Prepicado: Sí
  - Fabricación: 100% celulosa virgen
  - Tipo de empaque: Bolsón de 10 rollos
  - Para dispensadores: Sí
  - Pallet: 70 Pack
  - Código: TP0015
  - Código de barra: 7804679590076

#### Producto 9: Papel Higiénico Premium Ultra Suavidad XXL
- **Categoría:** Premium
- **Color de línea:** Negro/Amarillo
- **Especificaciones:**
  - Size: Pack x4
  - Metros: 500
  - Hojas: Una Hoja
  - Prepicado: Sí
  - Fabricación: 100% celulosa virgen
  - Tipo de empaque: Bolsón de 10 rollos
  - Para dispensadores: Sí
  - Pallet: 70 Pack
  - Código: TP0014
  - Código de barra: 7804679590090

### 6.5 SABANILLA MÉDICA

#### Producto 10: Sabanilla Médica Maxifort
- **Categoría:** Médica
- **Color de línea:** Azul
- **Especificaciones:**
  - Size: Pack x2
  - Metros: 50
  - Hojas: N/A
  - Prepicado: Sí
  - Fabricación: 100% celulosa virgen
  - Pallet: 204 Pack
  - Código: SN0001
  - Código de barra: N/A

---

## 7. ESPECIFICACIONES TÉCNICAS - FIGMA MAKE

### 7.1 Requisitos de Diseño en Figma

**Configuración del Archivo:**
- Nombre del archivo: "Papelera del Pacífico - Sitio Web"
- Frame base: Desktop 1440px
- Frames adicionales: Tablet 768px, Mobile 375px
- Grid system: 12 columnas con 20px gutter

**Componentes a Crear:**
1. **Componentes de Navegación:**
   - Header con logo y menú
   - Menu hamburguesa (móvil)
   - Breadcrumbs
   - Footer

2. **Componentes de Producto:**
   - Card de producto (grid view)
   - Card de producto destacado
   - Badge de categoría (variantes: Hogar, Institucional, Premium, Médica)
   - Galería de producto

3. **Componentes de UI:**
   - Botones (primario, secundario, terciario)
   - Formulario de contacto
   - Input fields
   - Textarea
   - Select dropdown
   - Divisor de papel rasgado

4. **Componentes de Contenido:**
   - Hero section
   - Section header
   - Card de valor corporativo
   - Testimonial card (si aplica)

### 7.2 Estilos a Definir

**Color Styles:**
- Primary/Navy: #1B4F72
- Secondary/Green-Light: #7CB342
- Secondary/Cyan: #00BCD4
- Secondary/Green-Dark: #006B3F
- Secondary/Blue: #0098D8
- Secondary/Red: #E53935
- Secondary/Green: #4CAF50
- Secondary/Yellow: #FFD54F
- Neutral/Black: #000000
- Neutral/Dark: #2C2C2C
- Neutral/Gray: #4A4A4A
- Neutral/Light: #F5F5F5
- Neutral/White: #FFFFFF

**Text Styles:**
- H1/Desktop
- H1/Tablet
- H1/Mobile
- H2/Desktop
- H2/Tablet
- H2/Mobile
- H3/Desktop
- H3/Tablet
- H3/Mobile
- Body/Regular
- Body/Small
- Button/Text

**Effect Styles:**
- Shadow/Card
- Shadow/Elevated
- Shadow/Button

### 7.3 Configuración de Auto Layout
- Aplicar Auto Layout a todos los componentes
- Padding consistente: 16px, 24px, 32px, 48px
- Spacing entre elementos: 8px, 16px, 24px, 32px

### 7.4 Responsividad
- Constraints configurados en todos los elementos
- Breakpoints:
  - Desktop: 1440px - 1920px
  - Tablet: 768px - 1024px
  - Mobile: 375px - 414px

---

## 8. CONTENIDO DE TEXTO

### 8.1 Textos de Página de Inicio

**Hero Section:**
- Título: "Papelera del Pacífico"
- Subtítulo: "Calidad y Compromiso en Productos de Papel"
- CTA: "Conocer Productos"

**Sección Compromiso:**
- Título: "Compromiso"
- Texto: "Papelera del Pacífico SPA está comprometida con valores, la comunidad y el medio ambiente, contribuye al desarrollo de agentes económicos, satisfaciendo de forma innovadora sus necesidades y otras relacionadas."

**Sección Desarrollo:**
- Título: "Desarrollo e Innovación"
- Texto: "Nuestra empresa siempre se ha dedicado y puesto énfasis en las necesidades del mercado y de nuestros clientes, generando valor a los productos de nuestros socios comerciales y clientes. El desarrollo de marcas propias es un elemento diferenciador. Todo el mix de productos pueden ser fabricados con marcas propias, gracias a la experiencia, gestión, trazabilidad y control de calidad rigurosos que hemos implementado para poder acceder a los clientes y mercados más exigentes."

### 8.2 Textos de Página Nosotros

**Quiénes Somos:**
"Papelera del Pacífico SPA es una empresa chilena dedicada a la fabricación y distribución de productos de papel de alta calidad. Con años de experiencia en el mercado, nos hemos posicionado como un fabricante confiable que satisface las necesidades de hogares, instituciones y el sector médico.

Nuestra marca principal, Maxifort, representa nuestro compromiso con la calidad, la innovación y la satisfacción del cliente. Ofrecemos una amplia gama de productos que incluyen papel toalla, papel higiénico y sabanilla médica, todos fabricados con 100% celulosa virgen."

**Misión:**
"Proporcionar productos de papel de la más alta calidad que satisfagan las necesidades de nuestros clientes, contribuyendo al desarrollo económico y al cuidado del medio ambiente."

**Visión:**
"Ser la empresa líder en el mercado chileno de productos de papel, reconocida por nuestra innovación, calidad y compromiso con la sustentabilidad."

**Valores:**
- Compromiso con nuestros clientes y la comunidad
- Desarrollo e innovación constante
- Calidad en todos nuestros procesos
- Respeto por el medio ambiente
- Trazabilidad y control de calidad rigurosos

### 8.3 Categorías de Productos - Descripciones

**Papel Toalla Hogar:**
"Nuestra línea de papel toalla para el hogar ofrece opciones en diferentes tamaños (L, XL, XXL) para satisfacer las necesidades de cada familia. Fabricados con 100% celulosa virgen, nuestros productos Maxifort garantizan máxima absorción y resistencia."

**Papel Toalla Institucional:**
"Diseñados especialmente para dispensadores automáticos o manuales, nuestros rollos institucionales (XXL y XXXL) ofrecen mayor rendimiento y economía para empresas, restaurantes, hoteles y oficinas."

**Papel Toalla Premium:**
"La línea Premium Maxifort combina calidad superior con diseño moderno. Ideal para espacios que buscan lo mejor en absorción y presentación."

**Papel Higiénico Premium:**
"Suavidad ultra superior en cada hoja. Nuestro papel higiénico Premium está diseñado para ofrecer máximo confort y rendimiento, disponible en presentaciones XL y XXL."

**Sabanilla Médica:**
"Productos especializados para el sector salud, fabricados con los más altos estándares de higiene y calidad. Ideal para consultorios, clínicas y hospitales."

---

## 9. FUNCIONALIDADES

### 9.1 Funcionalidades Esenciales (MVP)

1. **Navegación:**
   - Menú principal responsive
   - Menú hamburguesa para móvil
   - Breadcrumbs en páginas internas
   - Footer con enlaces importantes

2. **Catálogo de Productos:**
   - Listado de productos en grid
   - Filtros por categoría
   - Página de detalle de producto
   - Especificaciones técnicas visibles

3. **Formulario de Contacto:**
   - Validación de campos
   - Mensaje de confirmación
   - Integración con email (opcional si Figma Make lo permite)

4. **Información Corporativa:**
   - Página Nosotros
   - Valores y misión
   - Datos de contacto y ubicación

5. **Optimización:**
   - Responsive en todos los dispositivos
   - Optimización de imágenes
   - Velocidad de carga

### 9.2 Funcionalidades Deseables (Fase 2)

1. Buscador de productos
2. Descarga de catálogo en PDF
3. Formulario de cotización
4. Integración con WhatsApp Business
5. Sección de noticias/blog
6. Galería de proyectos
7. Testimonios de clientes
8. Newsletter subscription
9. Chat en vivo
10. Multiidioma (español/inglés)

---

## 10. REQUERIMIENTOS NO FUNCIONALES

### 10.1 Rendimiento
- Tiempo de carga inicial menor a 3 segundos
- Imágenes optimizadas (WebP o JPEG optimizado)
- Lazy loading en imágenes
- Caché de navegador configurado

### 10.2 Compatibilidad
- Navegadores: Chrome, Firefox, Safari, Edge (últimas 2 versiones)
- Dispositivos: Desktop, Tablet, Mobile
- Orientaciones: Portrait y Landscape

### 10.3 Accesibilidad
- Contraste de colores WCAG AA
- Textos alternativos en todas las imágenes
- Navegación por teclado
- Tamaños de fuente escalables
- Labels en formularios

### 10.4 SEO
- Meta títulos y descripciones
- Estructura de headings correcta (H1, H2, H3)
- URLs amigables
- Sitemap XML
- Schema markup para productos

### 10.5 Seguridad
- Formulario con validación anti-spam
- Certificado SSL
- Headers de seguridad configurados

---

## 11. GUÍA DE IMPLEMENTACIÓN EN FIGMA MAKE

### 11.1 Fases de Desarrollo

**FASE 1: Setup y Estructura (Semana 1)**
1. Crear archivo de Figma con estructura de páginas
2. Definir sistema de diseño (colores, tipografías, componentes)
3. Crear componentes base (header, footer, botones, cards)
4. Definir grillas y sistemas responsive

**FASE 2: Diseño de Páginas (Semana 2)**
1. Diseñar página de inicio (todas las secciones)
2. Diseñar página Nosotros
3. Diseñar página Productos (listado)
4. Diseñar página Detalle de Producto
5. Diseñar página Contacto

**FASE 3: Versiones Responsive (Semana 3)**
1. Adaptar todas las páginas a tablet (768px)
2. Adaptar todas las páginas a mobile (375px)
3. Revisar y ajustar componentes en todos los breakpoints

**FASE 4: Prototipado (Semana 3-4)**
1. Crear interacciones entre páginas
2. Crear hover states en botones y links
3. Crear animaciones de transición
4. Configurar overlay para menú móvil
5. Prototipar formulario de contacto

**FASE 5: Export a Figma Make (Semana 4)**
1. Preparar assets para exportación
2. Configurar export settings
3. Generar código desde Figma Make
4. Revisar y ajustar código generado
5. Pruebas de funcionalidad

### 11.2 Checklist de Componentes

#### Componentes Globales
- [ ] Logo AYD (versión horizontal y vertical)
- [ ] Navigation menu (desktop)
- [ ] Hamburger menu (mobile)
- [ ] Footer completo
- [ ] Botón primario (variantes: default, hover, active)
- [ ] Botón secundario (variantes: default, hover, active)
- [ ] Badge de categoría (variantes: Hogar, Institucional, Premium, Médica)
- [ ] Divisor de papel rasgado

#### Componentes de Producto
- [ ] Card de producto (grid view)
- [ ] Card de producto (list view)
- [ ] Galería de producto (desktop)
- [ ] Galería de producto (mobile)
- [ ] Tabla de especificaciones
- [ ] Iconos de categoría (sabanilla, papel toalla, papel higiénico)

#### Componentes de Formulario
- [ ] Input text
- [ ] Textarea
- [ ] Select dropdown
- [ ] Button submit
- [ ] Mensaje de éxito
- [ ] Mensaje de error

#### Secciones
- [ ] Hero section (variantes: con imagen, con video)
- [ ] Section header
- [ ] Feature section (3 columnas)
- [ ] CTA section
- [ ] Product grid section
- [ ] Contact form section
- [ ] Map section

### 11.3 Naming Conventions

**Páginas:**
- 01_Home
- 02_Nosotros
- 03_Productos_Listado
- 04_Productos_Detalle
- 05_Contacto

**Frames:**
- [Página]_Desktop_1440
- [Página]_Tablet_768
- [Página]_Mobile_375

**Componentes:**
- Component/[Categoría]/[Nombre]
- Ejemplo: Component/Button/Primary
- Ejemplo: Component/Product/Card-Grid

**Colores:**
- Brand/Primary/Gold
- Brand/Secondary/Blue
- Brand/Secondary/Red
- Brand/Secondary/Green
- Brand/Secondary/Yellow
- Neutral/Black
- Neutral/White

---

## 12. ASSETS REQUERIDOS

### 12.1 Imágenes de Productos (Alta Resolución)
- [ ] Papel Toalla Maxifort L Hogar (PNG transparente)
- [ ] Papel Toalla Maxifort XL Hogar (PNG transparente)
- [ ] Papel Toalla Maxifort XXL Hogar (PNG transparente)
- [ ] Papel Toalla Maxifort XXL Institucional (PNG transparente)
- [ ] Papel Toalla Maxifort XXXL Institucional (PNG transparente)
- [ ] Papel Toalla PREMIUM XL (PNG transparente)
- [ ] Papel Higiénico Premium XL (PNG transparente)
- [ ] Papel Higiénico Premium XXL Pack x6 (PNG transparente)
- [ ] Papel Higiénico Premium XXL Pack x4 (PNG transparente)
- [ ] Sabanilla Médica Maxifort (PNG transparente)

### 12.2 Imágenes Lifestyle
- [ ] Familia usando productos (3-5 imágenes)
- [ ] Ambientes de cocina/baño (2-3 imágenes)
- [ ] Contexto institucional (1-2 imágenes)
- [ ] Contexto médico (1-2 imágenes)

### 12.3 Logo y Marca
- [ ] Logo AYD horizontal (SVG, PNG alta res)
- [ ] Logo AYD vertical (SVG, PNG alta res)
- [ ] Logo Maxifort (si existe por separado)
- [ ] Favicon (múltiples tamaños)

### 12.4 Iconos
- [ ] Icono sabanilla médica
- [ ] Icono papel toalla
- [ ] Icono papel higiénico
- [ ] Iconos de redes sociales
- [ ] Iconos de contacto (teléfono, email, ubicación)
- [ ] Iconos de valores corporativos

### 12.5 Otros
- [ ] Imágenes de instalaciones (si disponible)
- [ ] Certificaciones o sellos de calidad (si aplica)
- [ ] Textura de papel rasgado para divisores

---

## 13. INFORMACIÓN DE CONTACTO PENDIENTE

Información que debe proporcionar el cliente:
- [ ] Número de teléfono principal
- [ ] Email de contacto general
- [ ] Email de ventas
- [ ] Horario de atención
- [ ] Enlaces a redes sociales (Facebook, Instagram, LinkedIn, etc.)
- [ ] Coordenadas exactas para Google Maps
- [ ] Información adicional de contacto

---

## 14. CRITERIOS DE ACEPTACIÓN

### 14.1 Diseño
- ✓ Todos los colores corporativos aplicados correctamente
- ✓ Tipografía consistente en todo el sitio
- ✓ Espaciados y márgenes uniformes
- ✓ Imágenes de alta calidad y optimizadas
- ✓ Diseño responsive funcionando en 3 breakpoints

### 14.2 Contenido
- ✓ Todos los textos revisados y sin errores ortográficos
- ✓ Información de todos los productos completa
- ✓ Datos de contacto actualizados
- ✓ Imágenes con textos alternativos

### 14.3 Funcionalidad
- ✓ Navegación fluida entre páginas
- ✓ Filtros de productos funcionando
- ✓ Formulario de contacto con validación
- ✓ Enlaces externos abriendo en nueva pestaña
- ✓ Botones con estados hover/active

### 14.4 Rendimiento
- ✓ Carga rápida en todos los dispositivos
- ✓ Sin errores de consola
- ✓ Imágenes optimizadas
- ✓ Transiciones suaves

### 14.5 Accesibilidad
- ✓ Contraste de colores adecuado
- ✓ Navegación por teclado posible
- ✓ Textos alternativos en imágenes
- ✓ Formularios con labels

---

## 15. TIMELINE ESTIMADO

**Semana 1: Setup y Diseño Base**
- Días 1-2: Configuración de Figma y sistema de diseño
- Días 3-5: Creación de componentes base

**Semana 2: Diseño de Páginas Desktop**
- Día 1: Página de inicio
- Día 2: Página Nosotros
- Días 3-4: Páginas de Productos
- Día 5: Página de Contacto

**Semana 3: Responsive y Ajustes**
- Días 1-3: Versiones tablet y mobile
- Días 4-5: Revisión y ajustes

**Semana 4: Prototipado y Exportación**
- Días 1-2: Prototipado e interacciones
- Días 3-4: Exportación a Figma Make
- Día 5: Pruebas y ajustes finales

**DURACIÓN TOTAL: 4 semanas**

---

## 16. RIESGOS Y MITIGACIÓN

| Riesgo | Impacto | Probabilidad | Mitigación |
|--------|---------|--------------|------------|
| Imágenes de productos de baja calidad | Alto | Media | Solicitar al cliente imágenes profesionales o realizar sesión fotográfica |
| Falta de información de contacto | Medio | Baja | Solicitar tempranamente toda la información |
| Contenido incompleto | Alto | Media | Establecer fechas límite para entrega de contenidos |
| Limitaciones de Figma Make | Medio | Media | Evaluar herramienta antes de iniciar y tener plan B |
| Cambios constantes en el alcance | Alto | Alta | Establecer proceso de control de cambios y firma de PRD |

---

## 17. NOTAS ADICIONALES

### 17.1 Consideraciones de Diseño
- El efecto de "papel rasgado" debe ser sutil y no interferir con la legibilidad
- Mantener equilibrio entre imágenes de producto y lifestyle
- Priorizar la claridad de información técnica de productos
- Usar espacios en blanco generosamente para respiración visual

### 17.2 Recomendaciones Post-Lanzamiento
- Implementar Google Analytics para seguimiento
- Configurar Google Search Console para SEO
- Establecer calendario de actualizaciones de contenido
- Considerar blog de marca para contenido regular
- Planificar campaña de marketing digital para dar a conocer el sitio

### 17.3 Mejoras Futuras
- Portal de clientes para pedidos online
- Sistema de cotización automática
- Calculadora de rendimiento de productos
- Comparador de productos
- Sección de descargas (fichas técnicas, certificados)

---

## 18. APROBACIONES

**Creado por:** [Nombre del Diseñador]
**Fecha:** Noviembre 2025
**Versión:** 1.0

**Aprobaciones requeridas:**
- [ ] Cliente (Papelera del Pacífico SPA)
- [ ] Equipo de Diseño
- [ ] Equipo de Desarrollo

**Firma del Cliente:** ___________________________
**Fecha:** _______________

---

**FIN DEL DOCUMENTO PRD**

---

Este PRD debe ser revisado y aprobado por todas las partes antes de iniciar el desarrollo en Figma Make.