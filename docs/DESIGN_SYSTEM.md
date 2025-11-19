# Sistema de Diseno - Papelera del Pacífico

## Tabla de Contenidos

- [Vision General](#vision-general)
- [Principios de Diseno](#principios-de-diseno)
- [Tokens de Diseno](#tokens-de-diseno)
- [Componentes](#componentes)
- [Patrones de UI](#patrones-de-ui)
- [Responsive Design](#responsive-design)
- [Accesibilidad](#accesibilidad)

## Vision General

El sistema de diseno de Papelera del Pacífico esta construido sobre los valores de marca: Compromiso, Desarrollo e Innovacion. Combina profesionalismo con calidez, reflejando la calidad de los productos Maxifort y el compromiso con los clientes.

### Objetivos del Sistema

1. **Consistencia**: Experiencia visual uniforme en todo el sitio
2. **Eficiencia**: Acelerar el proceso de diseno y desarrollo
3. **Escalabilidad**: Facilitar la expansion del sitio con nuevas paginas
4. **Mantenibilidad**: Simplificar actualizaciones y cambios globales
5. **Accesibilidad**: Garantizar usabilidad para todos los usuarios

## Principios de Diseno

### 1. Claridad y Legibilidad

El contenido debe ser facilmente comprensible. Usamos tipografia clara, espaciados generosos y jerarquia visual bien definida.

### 2. Profesionalismo con Calidez

Balance entre la seriedad corporativa y la accesibilidad, reflejando que somos una empresa seria pero cercana.

### 3. Enfoque en Producto

Los productos son el protagonista. El diseno debe resaltarlos sin sobrecargar con elementos visuales innecesarios.

### 4. Identidad de Marca Fuerte

Los colores corporativos (especialmente el azul navy #1B4F72 y los verdes del logotipo) deben estar presentes de manera estratégica para reforzar la marca Papelera del Pacífico.

### 5. Responsive y Accesible

El sitio debe funcionar perfectamente en cualquier dispositivo y ser accesible para todos los usuarios.

## Tokens de Diseno

### Paleta de Colores

#### Colores Primarios

```css
/* Color Principal Papelera del Pacífico - Azul Navy del logotipo */
--color-primary-navy: #1B4F72;
--color-primary-navy-light: #2C6A94;
--color-primary-navy-dark: #123A56;

/* Colores secundarios del logotipo */
--color-secondary-green-dark: #006B3F;
--color-secondary-green-light: #7CB342;
--color-secondary-cyan: #00BCD4;
--color-secondary-blue: #1976D2;

/* Base */
--color-white: #FFFFFF;
--color-black: #000000;
```

**Uso:**
- `primary-navy`: Botones principales, títulos, acentos corporativos
- `primary-navy-light`: Hover states, fondos sutiles
- `primary-navy-dark`: Bordes, texto sobre fondos claros
- `secondary-green-dark`: Elementos premium, acentos de naturaleza
- `secondary-green-light`: Iconos, badges, elementos ecológicos
- `secondary-cyan`: Links, elementos interactivos, olas/agua
- `secondary-blue`: Botones secundarios, elementos de soporte

#### Colores de Linea de Producto

```css
/* Línea Maxifort Azul Pacífico */
--color-maxifort-blue: #00BCD4;
--color-maxifort-blue-light: #4DD0E1;
--color-maxifort-blue-dark: #0097A7;

/* Línea Maxifort Azul Medio */
--color-maxifort-blue-medium: #1976D2;
--color-maxifort-blue-medium-light: #42A5F5;
--color-maxifort-blue-medium-dark: #1565C0;

/* Línea Maxifort Verde */
--color-maxifort-green: #7CB342;
--color-maxifort-green-light: #9CCC65;
--color-maxifort-green-dark: #558B2F;

/* Línea Premium Verde Oscuro */
--color-premium-green: #006B3F;
--color-premium-green-light: #00875A;
--color-premium-green-dark: #004D2C;
```

**Uso:**
- Badges de categoria de producto
- Indicadores visuales de linea
- Acentos en paginas de detalle

#### Colores Neutrales

```css
/* Grises */
--color-neutral-50: #FAFAFA;
--color-neutral-100: #F5F5F5;
--color-neutral-200: #EEEEEE;
--color-neutral-300: #E0E0E0;
--color-neutral-400: #BDBDBD;
--color-neutral-500: #9E9E9E;
--color-neutral-600: #757575;
--color-neutral-700: #4A4A4A;
--color-neutral-800: #2C2C2C;
--color-neutral-900: #1A1A1A;
```

**Uso:**
- Fondos de seccion
- Bordes y divisores
- Texto secundario
- Estados deshabilitados

#### Colores de Estado

```css
/* Success */
--color-success: #4CAF50;
--color-success-light: #81C784;
--color-success-dark: #388E3C;

/* Error */
--color-error: #F44336;
--color-error-light: #E57373;
--color-error-dark: #D32F2F;

/* Warning */
--color-warning: #FF9800;
--color-warning-light: #FFB74D;
--color-warning-dark: #F57C00;

/* Info */
--color-info: #2196F3;
--color-info-light: #64B5F6;
--color-info-dark: #1976D2;
```

### Tipografia

#### Familias de Fuentes

```css
/* Titulos y Headlines */
--font-family-headings: 'Montserrat', sans-serif;

/* Cuerpo de Texto */
--font-family-body: 'Open Sans', sans-serif;

/* Monospace (si se necesita) */
--font-family-mono: 'Courier New', monospace;
```

#### Escala Tipografica - Desktop

```css
/* Headings */
--font-size-h1: 48px;
--font-size-h2: 36px;
--font-size-h3: 28px;
--font-size-h4: 24px;
--font-size-h5: 20px;
--font-size-h6: 18px;

/* Body */
--font-size-body-large: 18px;
--font-size-body: 16px;
--font-size-body-small: 14px;
--font-size-caption: 12px;

/* Line Heights */
--line-height-tight: 1.2;
--line-height-normal: 1.5;
--line-height-relaxed: 1.75;

/* Font Weights */
--font-weight-light: 300;
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

#### Escala Tipografica - Tablet

```css
--font-size-h1-tablet: 40px;
--font-size-h2-tablet: 32px;
--font-size-h3-tablet: 24px;
--font-size-h4-tablet: 20px;
--font-size-h5-tablet: 18px;
--font-size-h6-tablet: 16px;
--font-size-body-tablet: 16px;
```

#### Escala Tipografica - Mobile

```css
--font-size-h1-mobile: 32px;
--font-size-h2-mobile: 28px;
--font-size-h3-mobile: 22px;
--font-size-h4-mobile: 18px;
--font-size-h5-mobile: 16px;
--font-size-h6-mobile: 14px;
--font-size-body-mobile: 14px;
```

### Espaciado

#### Sistema de Espaciado (8px base)

```css
--spacing-xs: 4px;    /* 0.25rem */
--spacing-sm: 8px;    /* 0.5rem */
--spacing-md: 16px;   /* 1rem */
--spacing-lg: 24px;   /* 1.5rem */
--spacing-xl: 32px;   /* 2rem */
--spacing-2xl: 48px;  /* 3rem */
--spacing-3xl: 64px;  /* 4rem */
--spacing-4xl: 96px;  /* 6rem */
--spacing-5xl: 128px; /* 8rem */
```

**Uso:**
- `xs, sm`: Espacios entre elementos pequenos (iconos, badges)
- `md, lg`: Padding de componentes, espacios entre elementos
- `xl, 2xl`: Margenes de secciones
- `3xl, 4xl, 5xl`: Espaciado entre secciones principales

### Sombras

```css
/* Elevaciones */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

/* Hover states */
--shadow-hover: 0 12px 20px -5px rgba(0, 0, 0, 0.15);
```

### Border Radius

```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-2xl: 24px;
--radius-full: 9999px; /* Pills/Circular */
```

### Grid System

```css
/* Grid de 12 columnas */
--grid-columns: 12;
--grid-gutter: 20px;
--grid-margin: 24px;

/* Container max-width */
--container-desktop: 1440px;
--container-tablet: 768px;
--container-mobile: 375px;
```

## Componentes

### Botones

#### Boton Primario

```
Variantes: Default, Hover, Active, Disabled
Color de fondo: var(--color-primary-gold)
Color de texto: var(--color-white)
Padding: 12px 24px
Border radius: var(--radius-md)
Font: Montserrat SemiBold 16px
```

**Estados:**
- **Default**: Background gold, texto blanco
- **Hover**: Background gold-dark, sombra elevada
- **Active**: Background gold-dark, sin sombra
- **Disabled**: Opacity 0.5, cursor not-allowed

**Codigo Figma:**
```
Component: Button/Primary
Auto Layout: Horizontal, 12px 24px padding
Fill: Brand/Primary/Gold
Text: White, Montserrat SemiBold 16px
Corner Radius: 8px
Effect: Shadow/Button
```

#### Boton Secundario

```
Variantes: Default, Hover, Active, Disabled
Color de fondo: Transparente
Color de texto: var(--color-primary-gold)
Border: 2px solid var(--color-primary-gold)
Padding: 12px 24px
Border radius: var(--radius-md)
Font: Montserrat SemiBold 16px
```

**Estados:**
- **Default**: Outline gold, texto gold
- **Hover**: Background gold, texto blanco
- **Active**: Background gold-dark, texto blanco
- **Disabled**: Opacity 0.5, cursor not-allowed

#### Boton Texto

```
Sin fondo, solo texto
Color: var(--color-primary-gold)
Font: Montserrat Medium 16px
Underline en hover
```

### Cards

#### Product Card

```
Estructura:
├── Container (Auto Layout Vertical)
│   ├── Image Container
│   │   └── Product Image
│   ├── Badge Container
│   │   └── Category Badge
│   ├── Content
│   │   ├── Product Name (H3)
│   │   ├── Description (Body Small)
│   │   └── Specs List
│   └── Action
│       └── Button "Ver detalles"
```

**Especificaciones:**
- Width: 360px (Desktop), 100% (Mobile)
- Padding: 24px
- Background: White
- Border: 1px solid neutral-200
- Border Radius: var(--radius-lg)
- Shadow: var(--shadow-md)
- Shadow Hover: var(--shadow-lg)

**Codigo Figma:**
```
Component: Product/Card
Auto Layout: Vertical, 16px gap
Padding: 24px
Fill: White
Stroke: Neutral/200, 1px
Corner Radius: 12px
Effect: Shadow/Card
```

#### Feature Card

```
Icono + Titulo + Descripcion
Centrado
Padding: 32px
Background: Neutral-50
```

**Codigo Figma:**
```
Component: Content/Feature-Card
Auto Layout: Vertical, 16px gap, Center aligned
Padding: 32px
Fill: Neutral/50
Corner Radius: 12px
```

#### Value Card

```
Para seccion de Valores corporativos
Icono grande + Titulo + Texto
```

### Badges

#### Category Badge

```
Variantes: Hogar, Institucional, Premium, Medica
Size: Small (24px height), Medium (32px height)
Border Radius: var(--radius-full)
Padding: 4px 12px
Font: Montserrat SemiBold 12px
```

**Variantes de Color:**
- **Hogar**: Background blue-light, Text blue-dark
- **Institucional**: Background green-light, Text green-dark
- **Premium**: Background yellow-light, Text neutral-900
- **Medica**: Background red-light, Text red-dark

**Codigo Figma:**
```
Component: Badge/Category
Variants: [Hogar, Institucional, Premium, Medica] x [Small, Medium]
Auto Layout: Horizontal, 4px 12px padding
Corner Radius: 999px
```

### Forms

#### Input Text

```
Height: 48px
Padding: 12px 16px
Border: 1px solid neutral-300
Border Radius: var(--radius-md)
Font: Open Sans Regular 16px
```

**Estados:**
- **Default**: Border neutral-300
- **Focus**: Border primary-gold, shadow-sm
- **Error**: Border error, helper text rojo
- **Disabled**: Background neutral-100, opacity 0.6

#### Textarea

```
Min Height: 120px
Padding: 12px 16px
Border: 1px solid neutral-300
Border Radius: var(--radius-md)
Font: Open Sans Regular 16px
Resize: vertical
```

#### Select Dropdown

```
Height: 48px
Similar a Input Text
Icono de dropdown a la derecha
```

### Navigation

#### Header Desktop

```
Height: 80px
Background: White
Border bottom: 1px solid neutral-200
Shadow: var(--shadow-sm)
```

**Estructura:**
```
Container (Max-width 1440px, Padding 24px)
├── Logo (Left)
├── Nav Menu (Center/Right)
│   ├── Inicio
│   ├── Nosotros
│   ├── Productos
│   └── Contacto
└── CTA Button (Optional)
```

#### Header Mobile

```
Height: 64px
Background: White
Shadow: var(--shadow-sm)
```

**Estructura:**
```
├── Logo (Left)
└── Hamburger Icon (Right)
```

#### Footer

```
Background: neutral-900
Color: White
Padding: 48px 24px
```

**Estructura:**
```
Grid 3 columnas (Desktop) / Stack (Mobile)
├── Column 1: Logo + Descripcion breve
├── Column 2: Links rapidos
└── Column 3: Informacion de contacto
└── Bottom: Copyright + Redes sociales
```

### Sections

#### Hero Section

```
Min Height: 500px (Desktop), 400px (Mobile)
Background: Image + Overlay
Content: Centrado vertical y horizontalmente
```

**Estructura:**
```
├── Background Image
├── Overlay (negro 0.3 opacity)
├── Content Container
│   ├── Logo o Titulo (H1)
│   ├── Tagline (Body Large)
│   └── CTA Buttons
```

#### CTA Section

```
Background: var(--color-primary-gold)
Padding: 64px 24px
Text Align: Center
```

**Estructura:**
```
├── Heading (H2, Blanco)
├── Description (Body, Blanco)
└── Button (Secundario Invertido)
```

#### Product Grid Section

```
Grid: 3 columnas (Desktop), 2 (Tablet), 1 (Mobile)
Gap: 24px
```

### Divisores

#### Paper Tear Effect

```
Imagen SVG de papel rasgado
Height: 40px
Color: Blanco o neutral segun contexto
Posicion: Entre secciones
```

## Patrones de UI

### Patron de Jerarquia Visual

```
1. Hero/Header de Pagina
   └── H1 + Descripcion breve

2. Secciones Principales
   └── H2 + Contenido

3. Subsecciones
   └── H3 + Contenido

4. Elementos
   └── Body text, imagenes, cards
```

### Patron de Spacing Vertical

```
Entre secciones principales: var(--spacing-4xl) - 96px
Entre subsecciones: var(--spacing-2xl) - 48px
Entre elementos: var(--spacing-lg) - 24px
Entre elementos pequenos: var(--spacing-md) - 16px
```

### Patron de Grid Layout

#### Desktop (1440px)

```
3 columnas para productos
2 columnas para features
1 columna para contenido largo
```

#### Tablet (768px)

```
2 columnas para productos
2 columnas para features
1 columna para contenido largo
```

#### Mobile (375px)

```
1 columna para todo
Stack vertical
```

### Patron de Navegacion

```
Desktop: Horizontal menu en header
Tablet: Horizontal menu colapsado
Mobile: Hamburger menu con overlay
```

### Patron de Imagenes

#### Imagenes de Producto

```
Aspect Ratio: 1:1 (cuadrado)
Format: PNG con fondo transparente
Size: 800x800px minimo
Optimization: WebP con fallback PNG
```

#### Imagenes Lifestyle

```
Aspect Ratio: 16:9 o 4:3
Format: JPEG optimizado
Size: 1920px width maximo
Optimization: WebP con fallback JPEG
```

#### Iconos

```
Format: SVG
Size: 24x24px, 32x32px, 48x48px
Color: Monochrome, puede teñirse via CSS
```

## Responsive Design

### Breakpoints

```css
/* Mobile First Approach */
--breakpoint-mobile: 375px;   /* Default */
--breakpoint-tablet: 768px;   /* @media (min-width: 768px) */
--breakpoint-desktop: 1440px; /* @media (min-width: 1440px) */
--breakpoint-wide: 1920px;    /* @media (min-width: 1920px) */
```

### Reglas Responsive

#### Tipografia

```
Mobile: Tamaños base reducidos
Tablet: Tamaños intermedios
Desktop: Tamaños completos
```

#### Espaciado

```
Mobile: Reducir spacing en 50% (ej: 2xl -> xl)
Tablet: Reducir spacing en 25%
Desktop: Spacing completo
```

#### Layout

```
Mobile: Stack vertical, 1 columna
Tablet: 2 columnas donde sea apropiado
Desktop: 3 columnas, layout completo
```

### Grid Responsive

#### Desktop Grid (12 columnas)

```
Column width: Variable
Gutter: 20px
Margin: 24px
```

#### Tablet Grid (8 columnas)

```
Column width: Variable
Gutter: 16px
Margin: 20px
```

#### Mobile Grid (4 columnas)

```
Column width: Variable
Gutter: 16px
Margin: 16px
```

## Accesibilidad

### Contraste de Color

Cumplir WCAG 2.1 nivel AA:

```
Texto normal (16px+): Ratio minimo 4.5:1
Texto grande (24px+): Ratio minimo 3:1
Elementos UI: Ratio minimo 3:1
```

**Combinaciones Validadas:**

| Fondo | Texto | Ratio | Estado |
|-------|-------|-------|--------|
| White | Neutral-900 | 16.5:1 | Pass AAA |
| White | Neutral-700 | 9.7:1 | Pass AAA |
| Gold | White | 4.8:1 | Pass AA |
| Gold | Neutral-900 | 3.5:1 | Pass (Large text) |
| Blue | White | 5.2:1 | Pass AA |

### Navegacion por Teclado

```
Todos los elementos interactivos deben ser accesibles via Tab
Focus states claramente visibles
Skip to main content link
```

### Focus States

```css
--focus-ring: 2px solid var(--color-primary-gold);
--focus-offset: 2px;
```

### Textos Alternativos

```
Todas las imagenes deben tener alt text descriptivo
Imagenes decorativas: alt=""
Logos: alt="Papelera del Pacífico"
Productos: alt="Papel Toalla Maxifort XL Hogar"
```

### ARIA Labels

```html
<!-- Navegacion -->
<nav aria-label="Main navigation">

<!-- Formulario -->
<form aria-label="Contact form">

<!-- Botones -->
<button aria-label="Open menu">

<!-- Links -->
<a href="..." aria-label="View product details">
```

### Estructura Semantica

```html
<header>
  <nav>
<main>
  <section>
    <h1>, <h2>, <h3>
  <article>
<aside>
<footer>
```

## Implementacion en Figma

### Organizacion de Styles

```
Color Styles/
├── Brand/
│   ├── Primary/Gold
│   ├── Secondary/Blue
│   ├── Secondary/Red
│   └── ...
├── Neutral/
│   ├── 50
│   ├── 100
│   └── ...
└── State/
    ├── Success
    ├── Error
    └── ...

Text Styles/
├── H1/
│   ├── Desktop
│   ├── Tablet
│   └── Mobile
├── H2/
│   ├── Desktop
│   └── ...
└── Body/
    ├── Regular
    └── Small

Effect Styles/
├── Shadow/
│   ├── Card
│   ├── Elevated
│   └── Button
```

### Organizacion de Components

```
Components/
├── Button/
│   ├── Primary
│   ├── Secondary
│   └── Text
├── Card/
│   ├── Product
│   ├── Feature
│   └── Value
├── Badge/
│   └── Category
├── Form/
│   ├── Input
│   ├── Textarea
│   └── Select
├── Navigation/
│   ├── Header-Desktop
│   ├── Header-Mobile
│   └── Footer
└── Section/
    ├── Hero
    ├── CTA
    └── Product-Grid
```

### Naming Conventions

```
Componentes: Component/Category/Name
Variantes: Property1=Value1, Property2=Value2
Instancias: Clear, descriptive names
```

**Ejemplos:**
```
Component/Button/Primary
  └── Variants: State [Default, Hover, Active, Disabled]

Component/Badge/Category
  └── Variants: Type [Hogar, Institucional, Premium, Medica], Size [Small, Medium]
```

### Auto Layout Guidelines

```
Usar Auto Layout en TODOS los componentes
Definir padding y spacing consistentes
Configurar constraints apropiados (Center, Left, Right, etc)
Habilitar "Clip content" cuando sea necesario
```

### Component Properties

```
Usar Boolean props para variantes on/off
Usar Variant props para multiples estados
Usar Instance Swap para contenido intercambiable
Usar Text props para contenido editable
```

## Checklist de Calidad

### Pre-Publicacion

- [ ] Todos los colores usan Color Styles
- [ ] Todos los textos usan Text Styles
- [ ] Todos los efectos usan Effect Styles
- [ ] Componentes tienen Auto Layout configurado
- [ ] Constraints estan configurados correctamente
- [ ] Nombres de layers son claros y descriptivos
- [ ] Componentes estan organizados en pagina de Components
- [ ] Variantes estan correctamente configuradas
- [ ] Responsive funciona en 3 breakpoints
- [ ] Contraste de colores pasa WCAG AA
- [ ] Imagenes estan optimizadas
- [ ] Prototipo funciona correctamente

---

**Documento Mantenido por:** Equipo de Diseno AgenciaDos
**Ultima Actualizacion:** Noviembre 2025
**Version:** 1.0
