# Plan de Acción Inmediato - Papelera del Pacífico

## 🎯 Objetivo: Iniciar Desarrollo en 48 Horas

Este documento proporciona pasos concretos y accionables para iniciar el desarrollo del sitio web de Papelera del Pacífico de manera inmediata.

---

## ⚡ FASE DE ACCIÓN INMEDIATA (48 Horas)

### 🔴 PRIORIDAD CRÍTICA - Hacer HOY

#### 1. Contactar al Cliente (2 horas)

**Email Template para el Cliente:**

```
Asunto: Proyecto Sitio Web Papelera del Pacífico - Información Requerida

Estimado equipo de Papelera del Pacífico,

Nos complace informar que hemos completado la planificación completa de su sitio web
corporativo. Para iniciar el diseño, necesitamos la siguiente información:

INFORMACIÓN DE CONTACTO:
□ Teléfono principal de la empresa
□ Email de contacto general
□ Email de ventas/cotizaciones
□ Horario de atención
□ Enlaces a redes sociales (Facebook, Instagram, LinkedIn)

UBICACIÓN:
□ Dirección completa: Guardia vieja 202, Providencia, Santiago
□ Coordenadas GPS exactas para Google Maps

ASSETS VISUALES (Alta Prioridad):
□ Logo AYD en formato SVG o AI (vectorial)
□ Logo AYD en PNG de alta resolución
□ Imágenes de los 10 productos principales:
   - Papel Toalla Maxifort L, XL, XXL (Hogar)
   - Papel Toalla Maxifort XXL, XXXL (Institucional)
   - Papel Toalla Premium XL
   - Papel Higiénico Premium XL, XXL x6, XXL x4
   - Sabanilla Médica

   FORMATO: PNG con fondo transparente, mínimo 800x800px

□ 3-5 imágenes lifestyle (familias usando productos) - JPEG alta calidad

CONTENIDO:
□ Textos adicionales si desean agregar algo al contenido ya preparado
□ Certificaciones o sellos de calidad (si existen)

ACCESOS (si ya existen):
□ Dominio web (si ya está registrado)
□ Google Analytics (si ya tienen cuenta)

¿Cuándo lo necesitamos?
Idealmente en las próximas 48 horas para mantener el timeline de 4 semanas.

Adjunto encontrarán:
- PRD completo del proyecto
- Resumen ejecutivo con detalles del diseño

Quedamos atentos a su respuesta.

Saludos cordiales,
[Tu nombre]
AgenciaDos
```

**Acción:**
- [ ] Enviar email al cliente
- [ ] Agendar llamada de seguimiento (24-48h)
- [ ] Preparar presentación del PRD si es necesario

---

#### 2. Setup de Figma (3 horas)

##### Paso 1: Crear Archivo de Figma

**Checklist:**
- [ ] Abrir Figma
- [ ] Crear nuevo archivo: "Papelera del Pacífico - Sitio Web"
- [ ] Configurar permisos (compartir con equipo)
- [ ] Crear estructura de páginas:
  ```
  00_Design_System
  01_Home
  02_Nosotros
  03_Productos_Listado
  04_Productos_Detalle
  05_Contacto
  ```

##### Paso 2: Configurar Design System

**En página "00_Design_System", crear:**

**A) Color Styles**

Crear los siguientes Color Styles en Figma:

```
Brand/Primary/Gold          → #C9B382
Brand/Primary/Gold-Light    → #D9C9A8
Brand/Primary/Gold-Dark     → #B8A26F

Brand/Secondary/Blue        → #0098D8
Brand/Secondary/Blue-Light  → #33ADE0
Brand/Secondary/Blue-Dark   → #0077AD

Brand/Secondary/Red         → #E53935
Brand/Secondary/Red-Light   → #EF5350
Brand/Secondary/Red-Dark    → #C62828

Brand/Secondary/Green       → #4CAF50
Brand/Secondary/Green-Light → #66BB6A
Brand/Secondary/Green-Dark  → #388E3C

Brand/Secondary/Yellow      → #FFD54F
Brand/Secondary/Yellow-Light → #FFE082
Brand/Secondary/Yellow-Dark  → #FFC107

Neutral/White               → #FFFFFF
Neutral/Black               → #000000
Neutral/50                  → #FAFAFA
Neutral/100                 → #F5F5F5
Neutral/200                 → #EEEEEE
Neutral/300                 → #E0E0E0
Neutral/700                 → #4A4A4A
Neutral/900                 → #1A1A1A
```

**Acción:**
- [ ] Ir a Local Styles en Figma
- [ ] Crear cada color style con su nombre y código hex
- [ ] Organizar en carpetas (Brand, Neutral)

**B) Text Styles**

Descargar fuentes:
- [ ] Montserrat (Google Fonts)
- [ ] Open Sans (Google Fonts)

Crear Text Styles:

```
H1/Desktop     → Montserrat Bold, 48px, Line height 120%
H1/Tablet      → Montserrat Bold, 40px, Line height 120%
H1/Mobile      → Montserrat Bold, 32px, Line height 120%

H2/Desktop     → Montserrat Bold, 36px, Line height 120%
H2/Tablet      → Montserrat Bold, 32px, Line height 120%
H2/Mobile      → Montserrat Bold, 28px, Line height 120%

H3/Desktop     → Montserrat SemiBold, 28px, Line height 130%
H3/Tablet      → Montserrat SemiBold, 24px, Line height 130%
H3/Mobile      → Montserrat SemiBold, 22px, Line height 130%

Body/Regular   → Open Sans Regular, 16px, Line height 150%
Body/Large     → Open Sans Regular, 18px, Line height 150%
Body/Small     → Open Sans Regular, 14px, Line height 150%

Button/Text    → Montserrat SemiBold, 16px, Line height 100%
```

**Acción:**
- [ ] Crear cada Text Style en Figma
- [ ] Aplicar fuentes correctas
- [ ] Configurar tamaños y line heights
- [ ] Organizar por jerarquía

**C) Effect Styles (Sombras)**

```
Shadow/Card     → 0px 4px 6px rgba(0, 0, 0, 0.1)
Shadow/Elevated → 0px 10px 15px rgba(0, 0, 0, 0.1)
Shadow/Button   → 0px 2px 4px rgba(0, 0, 0, 0.15)
```

**Acción:**
- [ ] Crear Effect Styles en Figma
- [ ] Configurar blur y offset correctos

##### Paso 3: Configurar Grid System

**Para cada página, configurar layout grid:**

```
Desktop (1440px):
- 12 columnas
- Gutter: 20px
- Margin: 24px

Tablet (768px):
- 8 columnas
- Gutter: 16px
- Margin: 20px

Mobile (375px):
- 4 columnas
- Gutter: 16px
- Margin: 16px
```

**Acción:**
- [ ] En cada página, activar Layout Grid
- [ ] Configurar según especificaciones
- [ ] Aplicar colores de guía visibles

---

#### 3. Crear Componentes Base (4 horas)

##### A) Component: Button/Primary

```
1. Crear frame: 160px ancho, 48px alto
2. Aplicar Auto Layout:
   - Padding: 12px vertical, 24px horizontal
   - Gap: 8px (si hay icono)
3. Fill: Brand/Primary/Gold
4. Add text: "Button Text"
5. Apply text style: Button/Text
6. Text color: Neutral/White
7. Corner radius: 8px
8. Add effect: Shadow/Button
9. Crear variantes:
   - State: Default, Hover, Active, Disabled
```

**Acciones detalladas:**
- [ ] Crear frame base
- [ ] Configurar Auto Layout
- [ ] Aplicar estilos
- [ ] Crear componente (Cmd+Alt+K / Ctrl+Alt+K)
- [ ] Renombrar: "Component/Button/Primary"
- [ ] Agregar variantes de estado
- [ ] Configurar hover state (background Gold-Dark, shadow elevated)
- [ ] Configurar disabled state (opacity 50%)

##### B) Component: Button/Secondary

```
Similar a Primary pero:
- Fill: Transparente
- Stroke: 2px, Brand/Primary/Gold
- Text color: Brand/Primary/Gold
- Hover: Fill Gold, Text White
```

**Acción:**
- [ ] Duplicar Button/Primary
- [ ] Modificar estilos según especificaciones
- [ ] Renombrar: "Component/Button/Secondary"
- [ ] Configurar variantes

##### C) Component: Badge/Category

```
1. Crear frame: Auto width, 32px alto
2. Auto Layout: Horizontal
3. Padding: 4px vertical, 12px horizontal
4. Corner radius: 999px (pill shape)
5. Add text: "Hogar"
6. Text: Montserrat SemiBold, 12px
7. Crear variantes:
   - Type: Hogar, Institucional, Premium, Medica
   - Size: Small (24px), Medium (32px)
```

**Configurar colores por variante:**
```
Hogar:         Background Blue-Light, Text Blue-Dark
Institucional: Background Green-Light, Text Green-Dark
Premium:       Background Yellow-Light, Text Neutral/900
Medica:        Background Red-Light, Text Red-Dark
```

**Acción:**
- [ ] Crear frame con Auto Layout
- [ ] Aplicar estilos base
- [ ] Crear componente
- [ ] Configurar 8 variantes (4 tipos x 2 tamaños)
- [ ] Aplicar colores correspondientes

##### D) Component: Card/Product

```
Estructura:
Frame principal (360px x Auto)
├── Auto Layout Vertical, Gap: 16px, Padding: 24px
├── Image Container (312px x 312px)
│   └── [Placeholder para imagen producto]
├── Badge Container (Auto Layout Horizontal)
│   └── [Instancia de Badge/Category]
├── Content (Auto Layout Vertical, Gap: 8px)
│   ├── Product Name (H3)
│   ├── Description (Body/Small, 2 líneas)
│   └── Specs (Body/Small, lista con bullets)
└── Action (Auto Layout Horizontal, Center)
    └── [Instancia de Button/Secondary]
```

**Estilos:**
- Fill: White
- Stroke: 1px, Neutral/200
- Corner radius: 12px
- Effect: Shadow/Card

**Acción:**
- [ ] Crear frame principal con dimensiones
- [ ] Agregar Auto Layout vertical
- [ ] Crear secciones internas
- [ ] Agregar placeholder de imagen
- [ ] Insertar instancias de Badge y Button
- [ ] Aplicar textos de ejemplo
- [ ] Aplicar estilos (fill, stroke, shadow)
- [ ] Crear componente

---

### 🟡 PRIORIDAD ALTA - Hacer MAÑANA

#### 4. Diseñar Primera Página: INICIO (6-8 horas)

##### Sección 1: Hero Section

```
Frame: 1440px x 600px (Desktop)
├── Background: Imagen de productos + overlay negro 30%
├── Content Container (Centrado)
│   ├── Logo AYD (placeholder por ahora)
│   ├── H1: "Papelera del Pacífico"
│   ├── Tagline (Body/Large): "Calidad y Compromiso en Productos de Papel"
│   └── Button: "Conocer Productos"
```

**Acción:**
- [ ] Crear frame de 1440x600
- [ ] Agregar imagen placeholder de fondo
- [ ] Agregar overlay (rectángulo negro, 30% opacity)
- [ ] Crear Auto Layout para contenido (vertical, centrado)
- [ ] Agregar textos con estilos correctos
- [ ] Agregar botón (instancia de Button/Primary)

##### Sección 2: Compromiso

```
Frame: Full width x Auto height
Background: Brand/Primary/Gold
Padding: 64px vertical

Content (Centrado, Max-width 960px):
├── H2: "Compromiso"
├── Body: [Texto del PRD]
└── Button: "Conocer más"
```

**Acción:**
- [ ] Crear frame con fondo dorado
- [ ] Agregar Auto Layout vertical
- [ ] Insertar H2 con text style correcto
- [ ] Insertar párrafo de texto
- [ ] Agregar botón (instancia de Button/Secondary invertido)

##### Sección 3: Desarrollo e Innovación

```
Frame: Full width x Auto height
Background: White
Padding: 96px vertical

Content:
├── H2: "Desarrollo e Innovación"
├── Body: [Texto del PRD]
└── Icons Row (3 iconos)
    ├── Sabanilla médica
    ├── Papel higiénico
    └── Papel toalla
```

**Acción:**
- [ ] Crear frame con fondo blanco
- [ ] Agregar contenido con Auto Layout
- [ ] Insertar textos
- [ ] Crear placeholders para iconos (círculos 64px)
- [ ] Agregar labels debajo de cada icono

##### Sección 4: Productos Destacados

```
Frame: Full width x Auto height
Background: Neutral/50
Padding: 96px vertical

Content:
├── H2: "Nuestros Productos"
└── Product Grid (3 columnas, Gap: 24px)
    ├── [Product Card 1]
    ├── [Product Card 2]
    └── [Product Card 3]
```

**Acción:**
- [ ] Crear frame
- [ ] Agregar H2 centrado
- [ ] Crear Auto Layout horizontal con wrap
- [ ] Insertar 3 instancias de Card/Product
- [ ] Personalizar cada card con info de producto diferente

##### Sección 5: CTA Final

```
Frame: Full width x Auto height
Background: Brand/Primary/Gold
Padding: 64px vertical

Content (Centrado):
├── H2: "¿Necesitas más información?"
└── Button: "Contáctanos"
```

**Acción:**
- [ ] Crear frame con fondo dorado
- [ ] Centrar contenido
- [ ] Agregar H2 (color blanco)
- [ ] Agregar botón

##### Divisor de Papel Rasgado (Entre Secciones)

**Crear como componente:**
```
Component: Decoration/Paper-Tear
- SVG de papel rasgado (buscar en recursos gratuitos)
- Height: 40px
- Color: Variable según contexto
```

**Acción:**
- [ ] Buscar SVG de papel rasgado en:
  - https://www.svgrepo.com/
  - https://heroicons.com/
  - Figma Community
- [ ] Importar a Figma
- [ ] Crear componente reutilizable
- [ ] Insertar entre secciones

---

#### 5. Crear Versión Mobile de Inicio (3-4 horas)

**Frame: 375px**

Adaptar cada sección:

```
Hero Section:
- Height: 400px (reducido)
- Textos más pequeños (usar text styles mobile)

Compromiso:
- Padding: 48px vertical (reducido)
- Texto más compacto

Desarrollo e Innovación:
- Iconos en stack vertical (no horizontal)
- Padding reducido

Productos Destacados:
- 1 columna (no 3)
- Cards full width

CTA Final:
- Igual estructura, padding reducido
```

**Acción:**
- [ ] Duplicar página 01_Home
- [ ] Renombrar a "01_Home_Mobile"
- [ ] Cambiar frame width a 375px
- [ ] Adaptar cada sección
- [ ] Ajustar textos a mobile text styles
- [ ] Reducir spacings

---

### 🟢 SIGUIENTE (Día 3-4)

#### 6. Diseñar Componentes Restantes

- [ ] Component: Navigation/Header-Desktop
- [ ] Component: Navigation/Header-Mobile
- [ ] Component: Navigation/Footer
- [ ] Component: Form/Input
- [ ] Component: Form/Textarea
- [ ] Component: Form/Select

#### 7. Diseñar Páginas Restantes

- [ ] Página Nosotros (Desktop + Mobile)
- [ ] Página Productos Listado (Desktop + Mobile)
- [ ] Página Producto Detalle (Desktop + Mobile)
- [ ] Página Contacto (Desktop + Mobile)

---

## 📋 Checklist Diaria

### Antes de Empezar Cada Día

- [ ] Revisar documentación relevante (DESIGN_SYSTEM.md)
- [ ] Abrir archivo de Figma
- [ ] Verificar que todos los estilos estén configurados
- [ ] Tener PRD abierto como referencia

### Al Finalizar Cada Día

- [ ] Guardar y sincronizar Figma (auto-save)
- [ ] Tomar screenshots de progreso
- [ ] Actualizar checklist de tareas completadas
- [ ] Documentar decisiones importantes
- [ ] Compartir progreso con equipo/cliente (si aplica)

---

## 🚨 Problemas Comunes y Soluciones

### Problema: No tengo las imágenes de productos del cliente

**Solución:**
- Usar imágenes del PDF corporativo mientras tanto
- Crear placeholders de alta calidad:
  - Rectángulos con color de la línea de producto
  - Agregar texto "Producto [Nombre]"
  - Mantener aspect ratio correcto (1:1)
- Reemplazar cuando cliente envíe imágenes reales

### Problema: No sé qué texto poner en algunas secciones

**Solución:**
- Usar textos del PRD (sección "Contenido de Texto")
- Usar Lorem Ipsum como placeholder temporal
- Marcar claramente áreas con contenido pendiente
- Crear lista de textos que faltan

### Problema: Los colores no se ven bien juntos

**Solución:**
- Referirse a DESIGN_SYSTEM.md sección "Contraste de Color"
- Usar herramienta de contraste: https://webaim.org/resources/contrastchecker/
- Verificar que cumple WCAG AA (mínimo 4.5:1 para texto normal)
- Ajustar opacidad o usar variantes light/dark

### Problema: No entiendo cómo funciona Auto Layout

**Solución:**
- Ver tutorial oficial de Figma: https://help.figma.com/hc/en-us/articles/360040451373
- Práctica: Crear rectángulos simples primero
- Probar diferentes direcciones (horizontal/vertical)
- Experimentar con padding y gap
- Usar "Resizing" para controlar comportamiento

---

## 📚 Recursos Útiles

### Tutoriales de Figma
- [Auto Layout Guide](https://help.figma.com/hc/en-us/articles/360040451373)
- [Components Best Practices](https://help.figma.com/hc/en-us/articles/360038662654)
- [Constraints Guide](https://help.figma.com/hc/en-us/articles/360039957734)

### Recursos de Assets
- **Iconos:** [Heroicons](https://heroicons.com/), [Feather Icons](https://feathericons.com/)
- **Imágenes Stock:** [Unsplash](https://unsplash.com/), [Pexels](https://www.pexels.com/)
- **SVG Patterns:** [Hero Patterns](https://heropatterns.com/)
- **Optimización:** [TinyPNG](https://tinypng.com/)

### Herramientas de Verificación
- **Contraste:** [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- **Accesibilidad:** Plugin Figma "Stark"
- **Responsive:** Plugin Figma "Responsively"

---

## ✅ Criterios de Completitud

### Una sección está "completa" cuando:

- [ ] Usa componentes del Design System (no elementos sueltos)
- [ ] Todos los textos usan Text Styles
- [ ] Todos los colores usan Color Styles
- [ ] Tiene Auto Layout configurado
- [ ] Responsive funciona (constraints correctos)
- [ ] Contraste de colores pasa WCAG AA
- [ ] Espaciados son consistentes (múltiplos de 8px)
- [ ] Layers tienen nombres descriptivos
- [ ] No hay warnings de Figma

### Una página está "completa" cuando:

- [ ] Todas las secciones están completas
- [ ] Existe versión Desktop, Tablet y Mobile
- [ ] Prototipo funciona (links entre páginas)
- [ ] Ha sido revisada por al menos 1 persona
- [ ] Cliente ha dado feedback inicial (si aplica)

---

## 🎯 Meta de 48 Horas

Al finalizar las primeras 48 horas deberías tener:

✅ **Configuración completa:**
- Archivo de Figma creado y estructurado
- Design System implementado (colores, textos, efectos)
- Grid system configurado

✅ **Componentes base:**
- Botones (Primario, Secundario)
- Badges de categoría
- Card de producto
- Divisor de papel rasgado

✅ **Primera página:**
- Página de Inicio diseñada (Desktop)
- Página de Inicio diseñada (Mobile)
- Todas las secciones con contenido

✅ **Comunicación:**
- Email enviado al cliente
- Assets solicitados
- Timeline confirmado

---

## 📞 Siguientes Pasos Después de 48H

1. **Reunión de revisión interna** (1 hora)
   - Mostrar progreso al equipo
   - Recibir feedback
   - Ajustar approach si es necesario

2. **Presentación preliminar al cliente** (si es posible)
   - Mostrar página de inicio
   - Confirmar dirección visual
   - Ajustar según feedback

3. **Continuar con páginas restantes**
   - Seguir roadmap de 4 semanas
   - Mantener momentum

---

## 💪 Motivación

> "El mejor momento para empezar fue ayer. El segundo mejor momento es ahora."

Tienes toda la documentación, el plan está claro, los pasos están definidos.
**¡Es hora de crear algo increíble! 🚀**

---

**Documento creado:** Noviembre 2025
**Para:** Equipo de Desarrollo AgenciaDos
**Proyecto:** Papelera del Pacífico Web

---

**¿Listo para empezar? ¡Abre Figma y comencemos! 💻**