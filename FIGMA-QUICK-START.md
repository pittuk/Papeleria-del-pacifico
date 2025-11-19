# Figma Quick Start Guide - Papelera del Pacífico

## 🚀 Guía rápida para iniciar el diseño en Figma

---

## Parte 1: Configuración Inicial (30 minutos)

### Paso 1: Crear el Archivo

1. Abrir Figma (desktop app o web)
2. Click en "New Design File"
3. Renombrar: "Papelera del Pacífico - Sitio Web"
4. Mover a Team/Project apropiado (si aplica)

### Paso 2: Crear Estructura de Páginas

En el panel izquierdo, crear las siguientes páginas:

```
📄 00_Design_System
📄 01_Home
📄 02_Nosotros
📄 03_Productos_Listado
📄 04_Productos_Detalle
📄 05_Contacto
```

**Cómo crear páginas:**
- Click derecho en área de páginas → "Add page"
- O: Click en "+" junto a la página actual
- Renombrar con doble-click

---

## Parte 2: Design System (60 minutos)

### Ir a página "00_Design_System"

### A) Descargar Fuentes (5 min)

1. **Montserrat:**
   - Ir a: https://fonts.google.com/specimen/Montserrat
   - Download Family
   - Instalar: Bold (700), SemiBold (600), Medium (500)

2. **Open Sans:**
   - Ir a: https://fonts.google.com/specimen/Open+Sans
   - Download Family
   - Instalar: Regular (400), Light (300)

3. Reiniciar Figma para que reconozca las fuentes

### B) Crear Color Styles (15 min)

**Cómo crear un Color Style:**
1. Crear un rectángulo (R)
2. Aplicar color en Fill
3. Click en los 4 puntos del panel de Fill
4. Click en "+" para crear style
5. Nombrar según convención
6. Eliminar el rectángulo (ya no se necesita)

**Crear estos Color Styles:**

```css
/* BRAND COLORS */
Brand/Primary/Gold              #C9B382
Brand/Primary/Gold-Light        #D9C9A8
Brand/Primary/Gold-Dark         #B8A26F

/* MAXIFORT COLORS */
Brand/Secondary/Blue            #0098D8
Brand/Secondary/Blue-Light      #33ADE0
Brand/Secondary/Blue-Dark       #0077AD

Brand/Secondary/Red             #E53935
Brand/Secondary/Red-Light       #EF5350
Brand/Secondary/Red-Dark        #C62828

Brand/Secondary/Green           #4CAF50
Brand/Secondary/Green-Light     #66BB6A
Brand/Secondary/Green-Dark      #388E3C

Brand/Secondary/Yellow          #FFD54F
Brand/Secondary/Yellow-Light    #FFE082
Brand/Secondary/Yellow-Dark     #FFC107

/* NEUTRAL COLORS */
Neutral/White                   #FFFFFF
Neutral/Black                   #000000
Neutral/50                      #FAFAFA
Neutral/100                     #F5F5F5
Neutral/200                     #EEEEEE
Neutral/300                     #E0E0E0
Neutral/700                     #4A4A4A
Neutral/900                     #1A1A1A

/* STATE COLORS */
State/Success                   #4CAF50
State/Error                     #F44336
State/Warning                   #FF9800
State/Info                      #2196F3
```

**Tip:** Crea un rectángulo, aplica el primer color, crea el style, cambia el color al siguiente, crea el style, etc. Más rápido que crear/eliminar rectángulos.

### C) Crear Text Styles (20 min)

**Cómo crear un Text Style:**
1. Seleccionar herramienta de texto (T)
2. Crear texto "Sample Text"
3. Aplicar fuente, tamaño, peso
4. Con el texto seleccionado, ir al panel Text
5. Click en los 4 puntos → Create style
6. Nombrar
7. Eliminar el texto

**Crear estos Text Styles:**

```
DESKTOP HEADINGS:
H1/Desktop    → Montserrat Bold, 48px, Line 57.6px (120%), #1A1A1A
H2/Desktop    → Montserrat Bold, 36px, Line 43.2px (120%), #1A1A1A
H3/Desktop    → Montserrat SemiBold, 28px, Line 36.4px (130%), #2C2C2C
H4/Desktop    → Montserrat SemiBold, 24px, Line 31.2px (130%), #2C2C2C

TABLET HEADINGS:
H1/Tablet     → Montserrat Bold, 40px, Line 48px (120%), #1A1A1A
H2/Tablet     → Montserrat Bold, 32px, Line 38.4px (120%), #1A1A1A
H3/Tablet     → Montserrat SemiBold, 24px, Line 31.2px (130%), #2C2C2C

MOBILE HEADINGS:
H1/Mobile     → Montserrat Bold, 32px, Line 38.4px (120%), #1A1A1A
H2/Mobile     → Montserrat Bold, 28px, Line 33.6px (120%), #1A1A1A
H3/Mobile     → Montserrat SemiBold, 22px, Line 28.6px (130%), #2C2C2C

BODY TEXT:
Body/Large    → Open Sans Regular, 18px, Line 27px (150%), #2C2C2C
Body/Regular  → Open Sans Regular, 16px, Line 24px (150%), #2C2C2C
Body/Small    → Open Sans Regular, 14px, Line 21px (150%), #4A4A4A
Caption       → Open Sans Regular, 12px, Line 18px (150%), #757575

SPECIAL:
Button/Text   → Montserrat SemiBold, 16px, Line 16px (100%), #FFFFFF
```

**Configuración de Line Height en Figma:**
- 120% = multiplicar tamaño por 1.2
- 48px × 1.2 = 57.6px
- En Figma, puedes poner "120%" directamente o el valor calculado

### D) Crear Effect Styles (5 min)

**Cómo crear Effect Style:**
1. Crear rectángulo
2. En panel de "Effects" → Click "+"
3. Seleccionar "Drop shadow"
4. Configurar valores
5. Click en icono de style → Create style
6. Nombrar

**Crear estos Effect Styles:**

```
Shadow/Card
- Type: Drop Shadow
- X: 0, Y: 4
- Blur: 6
- Spread: 0
- Color: #000000, 10% opacity

Shadow/Elevated
- Type: Drop Shadow
- X: 0, Y: 10
- Blur: 15
- Spread: -3
- Color: #000000, 10% opacity

Shadow/Button
- Type: Drop Shadow
- X: 0, Y: 2
- Blur: 4
- Spread: 0
- Color: #000000, 15% opacity
```

### E) Configurar Grid System (15 min)

**En cada página (01_Home, 02_Nosotros, etc.):**

1. Crear 3 frames:
   - Frame Desktop: 1440 × 1024 (o más alto según contenido)
   - Frame Tablet: 768 × 1024
   - Frame Mobile: 375 × 812

**Cómo crear frames:**
- Herramienta Frame (F)
- En panel derecho, elegir preset o custom size
- Renombrar: "Desktop", "Tablet", "Mobile"

2. Configurar Layout Grid en cada frame:

**Desktop (1440px):**
- Click en frame
- Panel derecho → Layout Grid → Click "+"
- Type: Columns
- Count: 12
- Gutter: 20
- Margin: 24
- Color: Rojo/Azul con 10% opacity (para ver guías)

**Tablet (768px):**
- Count: 8
- Gutter: 16
- Margin: 20

**Mobile (375px):**
- Count: 4
- Gutter: 16
- Margin: 16

**Tip:** Puedes copiar el grid. Selecciona frame con grid configurado, copia las propiedades (Cmd/Ctrl + Alt + C), selecciona otro frame, pega (Cmd/Ctrl + Alt + V).

---

## Parte 3: Crear Primer Componente - Button/Primary (20 min)

### Paso a Paso Detallado:

1. **Crear frame base:**
   - Herramienta Frame (F)
   - Tamaño: 160 × 48 px
   - Renombrar: "Button Primary"

2. **Aplicar Auto Layout:**
   - Con el frame seleccionado: Shift + A
   - O: Panel derecho → Auto Layout → "+"
   - Configurar:
     - Direction: Horizontal
     - Padding: Top/Bottom: 12, Left/Right: 24
     - Gap between items: 8
     - Alignment: Center (icono de centro)

3. **Agregar texto:**
   - Seleccionar el frame
   - Herramienta Texto (T)
   - Click dentro del frame
   - Escribir: "Button Text"
   - Aplicar Text Style: "Button/Text"
   - Color: Neutral/White

4. **Aplicar estilos al frame:**
   - Fill: Brand/Primary/Gold
   - Corner Radius: 8px
   - Effect: Shadow/Button

5. **Convertir a componente:**
   - Seleccionar el frame
   - Cmd/Ctrl + Alt + K
   - O: Click derecho → Create Component
   - Renombrar componente: "Button/Primary"

6. **Crear variantes:**
   - Con el componente seleccionado
   - Panel derecho → Click en "+" junto a "Variants"
   - O: Click derecho → Add Variant

   Ahora tienes 2 variantes. Necesitamos 4 total (Default, Hover, Active, Disabled).

7. **Configurar propiedades de variantes:**
   - Click en el componente master (tiene icono de diamante morado)
   - Panel derecho → Properties → Cambiar nombre a "State"
   - Renombrar las variantes:
     - Variante 1: State = Default
     - Variante 2: State = Hover
     - Crear 2 más: State = Active, State = Disabled

8. **Estilizar cada variante:**

   **Hover:**
   - Fill: Brand/Primary/Gold-Dark
   - Effect: Shadow/Elevated

   **Active:**
   - Fill: Brand/Primary/Gold-Dark
   - Sin effect (eliminar sombra)

   **Disabled:**
   - Opacity: 50%

9. **Mover a página de Design System:**
   - Cortar el componente (Cmd/Ctrl + X)
   - Ir a página "00_Design_System"
   - Pegar (Cmd/Ctrl + V)
   - Organizar en sección "Components"

### ¡Listo! Tu primer componente está creado.

**Para usar el componente en otras páginas:**
- Ir a Assets panel (izquierda)
- Buscar "Button/Primary"
- Arrastrarlo al canvas
- Cambiar variante según necesites
- Editar texto

---

## Parte 4: Crear Component - Badge/Category (30 min)

Similar proceso, pero con más variantes:

### Setup Base:

1. Frame: Auto × 32
2. Auto Layout: Horizontal
3. Padding: 4 (vertical) × 12 (horizontal)
4. Corner Radius: 999 (pill shape)
5. Texto: "Hogar"
6. Text: Montserrat SemiBold, 12px

### Variantes (8 total):

**Properties:**
- Type: Hogar | Institucional | Premium | Medica
- Size: Small | Medium

**Configuración de colores por Type:**

```
Hogar:
- Fill: Brand/Secondary/Blue-Light
- Text: Brand/Secondary/Blue-Dark

Institucional:
- Fill: Brand/Secondary/Green-Light
- Text: Brand/Secondary/Green-Dark

Premium:
- Fill: Brand/Secondary/Yellow-Light
- Text: Neutral/900

Medica:
- Fill: Brand/Secondary/Red-Light
- Text: Brand/Secondary/Red-Dark
```

**Size:**
- Small: Height 24px (padding 2×10)
- Medium: Height 32px (padding 4×12)

---

## Parte 5: Crear Component - Card/Product (45 min)

Este es más complejo por tener estructura anidada.

### Estructura:

```
Frame Principal (360 × Auto)
└─ Auto Layout Vertical, Gap: 16, Padding: 24
   ├─ Image Container (312 × 312)
   │  └─ Rectangle (placeholder)
   ├─ Badge Container (Auto Layout Horizontal)
   │  └─ Instance of Badge/Category
   ├─ Content (Auto Layout Vertical, Gap: 8)
   │  ├─ Product Name (H3/Desktop)
   │  ├─ Description (Body/Small)
   │  └─ Specs (Body/Small)
   └─ Action (Auto Layout Horizontal, Center)
      └─ Instance of Button/Secondary
```

### Paso a Paso:

1. **Frame principal:**
   - 360 × auto height
   - Auto Layout: Vertical, Gap: 16, Padding: 24
   - Fill: White
   - Stroke: 1px, Neutral/200
   - Corner Radius: 12px
   - Effect: Shadow/Card

2. **Image Container:**
   - Frame: 312 × 312 (dentro del frame principal)
   - Fill: Neutral/100 (placeholder)
   - Corner Radius: 8px
   - Constraints: Left & Right (se expande con el contenedor)

3. **Badge Container:**
   - Auto Layout Horizontal
   - Drag instance of "Badge/Category" dentro

4. **Content:**
   - Auto Layout Vertical, Gap: 8
   - Añadir 3 textos:
     - "Papel Toalla Maxifort XL" (H3/Desktop)
     - "100% celulosa virgen..." (Body/Small, 2 líneas máx)
     - "• Size: XL\n• Metros: 100" (Body/Small)

5. **Action:**
   - Auto Layout Horizontal
   - Horizontal resizing: Fill container
   - Alignment: Center
   - Drag instance of "Button/Secondary"

6. **Convertir a componente:**
   - Cmd/Ctrl + Alt + K
   - Renombrar: "Card/Product"

---

## Parte 6: Diseñar Primera Sección - Hero (45 min)

### En página "01_Home":

1. **Frame Desktop (1440 × 600):**
   - Crear con herramienta Frame (F)
   - 1440 × 600 px

2. **Background Image:**
   - Rectangulo: 1440 × 600
   - Fill: Imagen (Cmd/Ctrl + Shift + K para importar)
   - Si no tienes imagen, usa color: Neutral/100

3. **Overlay:**
   - Rectangulo: 1440 × 600
   - Fill: Black, 30% opacity
   - Para poner encima: seleccionar y Cmd/Ctrl + ] (bring forward)

4. **Content Container:**
   - Auto Layout Vertical
   - Gap: 24
   - Padding: 48
   - Alignment: Center (horizontal y vertical)
   - Width: Fill container
   - Height: Fill container

5. **Contenido dentro del container:**
   - Logo (placeholder circle 120×120)
   - H1: "Papelera del Pacífico" (H1/Desktop, color White)
   - Tagline: "Calidad y Compromiso..." (Body/Large, color White)
   - Button: Instance of Button/Primary

6. **Centrar verticalmente:**
   - Seleccionar Content Container
   - Auto Layout → Alignment → Center vertical

---

## Atajos de Teclado Esenciales

### Navegación:
- `Space + Drag` - Pan/mover canvas
- `Cmd/Ctrl + Scroll` - Zoom
- `Cmd/Ctrl + 0` - Zoom to fit
- `Cmd/Ctrl + 1` - Zoom to 100%

### Herramientas:
- `F` - Frame
- `R` - Rectangle
- `O` - Ellipse
- `T` - Text
- `V` - Move (selección)

### Componentes:
- `Cmd/Ctrl + Alt + K` - Create component
- `Cmd/Ctrl + D` - Duplicate
- `Cmd/Ctrl + G` - Group
- `Shift + A` - Add Auto Layout

### Edición:
- `Cmd/Ctrl + ]` - Bring forward
- `Cmd/Ctrl + [` - Send backward
- `Cmd/Ctrl + Alt + C` - Copy properties
- `Cmd/Ctrl + Alt + V` - Paste properties

### Zoom a selección:
- `Shift + 2` - Zoom to selection

---

## Checklist de Progreso

### Setup Inicial:
- [ ] Archivo creado y nombrado
- [ ] Páginas creadas (6 páginas)
- [ ] Fuentes descargadas e instaladas

### Design System:
- [ ] 20+ Color Styles creados
- [ ] 15+ Text Styles creados
- [ ] 3 Effect Styles creados
- [ ] Grid configurado en frames

### Componentes Base:
- [ ] Button/Primary (4 variantes)
- [ ] Button/Secondary (4 variantes)
- [ ] Badge/Category (8 variantes)
- [ ] Card/Product

### Primera Página:
- [ ] Frame Desktop creado (1440px)
- [ ] Hero section diseñada
- [ ] Componentes utilizados correctamente

---

## Recursos y Ayuda

### Tutoriales Oficiales:
- [Figma Basics](https://help.figma.com/hc/en-us/categories/360002051613)
- [Auto Layout Guide](https://help.figma.com/hc/en-us/articles/360040451373)
- [Components Best Practices](https://help.figma.com/hc/en-us/articles/360038662654)

### Video Tutorials:
- [Figma YouTube Channel](https://www.youtube.com/c/Figmadesign)
- Buscar: "Figma Auto Layout Tutorial"
- Buscar: "Figma Components Tutorial"

### Plugins Útiles:
- **Unsplash** - Imágenes stock gratuitas
- **Stark** - Verificar accesibilidad
- **Content Reel** - Generar contenido placeholder
- **Iconify** - Miles de iconos gratuitos

**Cómo instalar plugins:**
- Click derecho en canvas → Plugins → Manage plugins
- O: Menu → Plugins → Browse plugins in Community

---

## Solución de Problemas Comunes

### "No veo las fuentes que instalé"
- Reinicia Figma completamente
- Asegúrate de instalar los archivos .ttf o .otf
- En Mac: Font Book → Validar fuentes

### "Auto Layout no funciona como esperaba"
- Verifica resizing settings (Hug/Fill/Fixed)
- Revisa constraints de elementos internos
- Practica con rectángulos simples primero

### "Los colores no coinciden"
- Usa Color Styles, no colores custom
- Verifica que el hex code sea exacto
- Revisa si hay opacity aplicada

### "El componente cambió cuando lo moví"
- Verifica constraints del componente
- Revisa si tiene Auto Layout bien configurado
- Asegúrate que no esté agrupado incorrectamente

---

## Próximos Pasos

Después de completar esta guía:

1. ✅ Crear componentes restantes:
   - Header
   - Footer
   - Form inputs

2. ✅ Diseñar secciones de Home:
   - Compromiso
   - Desarrollo e Innovación
   - Productos destacados
   - CTA

3. ✅ Versión Mobile de Home

4. ✅ Páginas restantes

---

**Documento creado:** Noviembre 2025
**Para proyecto:** Papelera del Pacífico Web
**Tiempo estimado:** 3-4 horas para completar toda esta guía

**¡Buena suerte y diviértete diseñando! 🎨**