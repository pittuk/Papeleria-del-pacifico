# Integraciones - Papelera del Pacífico

## Tabla de Contenidos

- [Introduccion](#introduccion)
- [Google Analytics](#google-analytics)
- [Google Maps](#google-maps)
- [Formulario de Contacto](#formulario-de-contacto)
- [Redes Sociales](#redes-sociales)
- [Google Search Console](#google-search-console)
- [Email Marketing](#email-marketing)
- [Otras Integraciones](#otras-integraciones)

## Introduccion

Este documento detalla todas las integraciones de servicios externos implementadas en el sitio web de Papelera del Pacífico. Cada seccion incluye instrucciones de configuracion, uso y troubleshooting.

## Google Analytics

### Proposito

Rastrear y analizar el comportamiento de usuarios en el sitio web para tomar decisiones basadas en datos.

### Version

**Google Analytics 4 (GA4)** - La version mas reciente de Google Analytics

### Configuracion Inicial

#### Paso 1: Crear Cuenta de Google Analytics

1. **Ir a Google Analytics**
   ```
   URL: https://analytics.google.com
   ```

2. **Crear Cuenta**
   ```
   - Click "Start measuring"
   - Account name: "Papelera del Pacífico"
   - Configurar sharing settings
   - Click "Next"
   ```

3. **Crear Propiedad**
   ```
   - Property name: "Papelera del Pacífico Website"
   - Reporting time zone: "Chile (GMT-3)"
   - Currency: "Chilean Peso (CLP)"
   - Click "Next"
   ```

4. **Configurar Business Information**
   ```
   - Industry: "Manufacturing"
   - Business size: Seleccionar apropiado
   - How you intend to use: "Get insights..."
   - Click "Create"
   ```

5. **Aceptar Terms of Service**

6. **Configurar Data Stream**
   ```
   - Platform: "Web"
   - Website URL: "https://www.papeleraayd.cl"
   - Stream name: "AYD Web"
   - Click "Create stream"
   ```

7. **Obtener Measurement ID**
   ```
   Formato: G-XXXXXXXXXX
   Copiar este ID
   ```

#### Paso 2: Configurar en Figma Make

1. **Acceder a Figma Make Dashboard**
   ```
   Login > Proyecto "Papelera del Pacífico"
   ```

2. **Ir a Integrations**
   ```
   Settings > Integrations > Google Analytics
   ```

3. **Agregar Tracking ID**
   ```
   - Pegar Measurement ID: G-XXXXXXXXXX
   - Enable tracking: ON
   - Anonymize IP: ON (para privacy)
   - Save
   ```

4. **Deploy**
   ```
   - Deploy a staging primero
   - Verificar tracking funciona
   - Deploy a produccion
   ```

### Verificar Instalacion

#### Real-Time Testing

1. **Acceder a GA4**
   ```
   analytics.google.com > Realtime
   ```

2. **Visitar Sitio**
   ```
   Abrir sitio en otra pestana/navegador
   Navegar por varias paginas
   ```

3. **Verificar en Real-Time**
   ```
   Deberia aparecer:
   - 1 usuario activo
   - Pageviews registrando
   - Ubicacion geografica
   ```

#### Testing con Google Tag Assistant

1. **Instalar Extension**
   ```
   Chrome Web Store > "Tag Assistant Companion"
   ```

2. **Activar en Sitio**
   ```
   - Visitar sitio web
   - Click en extension
   - Deberia mostrar tags detectados
   - Verificar GA4 tag esta presente
   ```

### Eventos a Trackear

#### Eventos Automaticos (GA4)

```
- page_view: Cada vez que se carga una pagina
- scroll: Cuando usuario hace scroll (90%)
- click: Clicks en links externos
- file_download: Descargas de archivos (PDFs, etc)
- video_start, video_progress, video_complete: Videos
```

#### Eventos Personalizados (Configurar si necesario)

```javascript
// Click en Boton de Producto
gtag('event', 'product_view', {
  'product_name': 'Papel Toalla Maxifort XL',
  'product_category': 'Papel Toalla'
});

// Envio de Formulario de Contacto
gtag('event', 'contact_form_submit', {
  'form_name': 'contact'
});

// Click en Numero de Telefono
gtag('event', 'phone_click', {
  'phone_number': '+56...'
});

// Click en Email
gtag('event', 'email_click', {
  'email': 'contacto@papeleraayd.cl'
});
```

### Configurar Goals/Conversions

#### Conversion: Envio de Formulario de Contacto

1. **Ir a GA4 Admin**
   ```
   Admin > Events > Create event
   ```

2. **Configurar Evento**
   ```
   - Nombre: form_submit
   - Parametros:
     - event_name equals contact_form_submit
   ```

3. **Marcar como Conversion**
   ```
   - Admin > Conversions
   - Click "New conversion event"
   - Nombre: contact_form_submit
   ```

### Metricas Principales a Monitorear

#### Metricas de Trafico

```
- Users: Total de usuarios unicos
- Sessions: Total de sesiones
- Pageviews: Total de vistas de pagina
- Pages per session: Promedio de paginas por sesion
- Average session duration: Duracion promedio de sesion
- Bounce rate: Tasa de rebote
```

#### Metricas de Engagement

```
- Engaged sessions: Sesiones con engagement
- Engagement rate: % de sesiones engaged
- Average engagement time: Tiempo promedio engaged
```

#### Metricas de Conversiones

```
- Total conversions: Total de conversiones
- Conversion rate: Tasa de conversion
- Contact form submissions: Formularios enviados
```

### Reportes Utiles

#### Reporte de Paginas Mas Vistas

```
Reports > Engagement > Pages and screens
Ver:
- Cuales paginas tienen mas vistas
- Cuales tienen mayor bounce rate
- Cuales generan mas conversiones
```

#### Reporte de Acquisition

```
Reports > Acquisition > Traffic acquisition
Ver:
- De donde vienen los usuarios
- Organic search, Direct, Referral, Social
- Cual canal genera mas conversiones
```

#### Reporte de Comportamiento

```
Reports > Engagement > Events
Ver:
- Que eventos se disparan mas
- Conversiones por evento
- Engagement por tipo de contenido
```

### Troubleshooting

#### No Aparecen Datos

```
Verificar:
1. Tracking ID correcto (G-XXXXXXXXXX)
2. Codigo instalado (ver source del sitio)
3. Ad-blocker deshabilitado
4. Esperar 24-48h para datos historicos
5. Usar Real-Time para testing inmediato
```

#### Datos Parecen Incorrectos

```
Verificar:
1. No hay multiple instalaciones del mismo ID
2. No se esta trackeando desarrollo/staging
3. Filtros configurados correctamente
4. Time zone correcto
```

## Google Maps

### Proposito

Mostrar la ubicacion fisica de Papelera del Pacífico en la pagina de contacto.

### Direccion

```
Guardia vieja 202
Providencia, Santiago
Chile
```

### Configuracion

#### Metodo 1: Google Maps Embed (Recomendado)

1. **Ir a Google Maps**
   ```
   URL: https://maps.google.com
   ```

2. **Buscar Direccion**
   ```
   Buscar: "Guardia vieja 202, Providencia, Santiago"
   ```

3. **Generar Embed Code**
   ```
   - Click en "Share"
   - Tab "Embed a map"
   - Seleccionar tamano
   - Copiar HTML code
   ```

4. **Agregar a Figma**
   ```
   En Figma:
   - Crear frame para mapa
   - Agregar placeholder con dimensiones correctas
   - Documentar iframe code para Figma Make
   ```

5. **Configurar en Figma Make**
   ```
   - Identificar frame del mapa
   - Agregar HTML embed code
   ```

**Ejemplo de Embed Code:**
```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!..."
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

#### Metodo 2: Google Maps API (Avanzado)

Si necesitas mas personalizacion:

1. **Obtener API Key**
   ```
   - Ir a Google Cloud Console
   - Crear proyecto "Papelera del Pacífico"
   - Enable "Maps JavaScript API"
   - Crear credenciales (API Key)
   - Restringir key a dominio del sitio
   ```

2. **Configurar Mapa**
   ```javascript
   function initMap() {
     const location = { lat: -33.4372, lng: -70.6256 };
     const map = new google.maps.Map(
       document.getElementById("map"),
       {
         zoom: 15,
         center: location,
       }
     );
     const marker = new google.maps.Marker({
       position: location,
       map: map,
       title: "Papelera del Pacífico"
     });
   }
   ```

### Coordenadas

```
Latitud: -33.4372 (aproximado)
Longitud: -70.6256 (aproximado)

Nota: Verificar coordenadas exactas en Google Maps
```

### Customizacion del Mapa

#### Estilo del Mapa

Puedes customizar colores para que coincidan con brand:

```javascript
const mapStyles = [
  {
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [{"visibility": "off"}]
  },
  // Mas estilos...
];
```

#### Info Window

Agregar ventana de informacion al hacer click en marker:

```javascript
const infowindow = new google.maps.InfoWindow({
  content: `
    <div>
      <h3>Papelera del Pacífico SPA</h3>
      <p>Guardia vieja 202<br>
      Providencia, Santiago<br>
      Chile</p>
    </div>
  `
});

marker.addListener("click", () => {
  infowindow.open(map, marker);
});
```

### Troubleshooting

#### Mapa No Carga

```
Verificar:
1. API Key valida (si usas API)
2. Dominio autorizado en restricciones
3. Billing habilitado en Google Cloud
4. Iframe code correcto (si usas embed)
5. No hay ad-blocker bloqueando Google Maps
```

## Formulario de Contacto

### Proposito

Permitir a visitantes contactar a Papelera del Pacífico directamente desde el sitio web.

### Campos del Formulario

```
1. Nombre Completo (required)
   - Type: text
   - Validation: required, min 2 characters

2. Email (required)
   - Type: email
   - Validation: required, valid email format

3. Telefono (optional)
   - Type: tel
   - Validation: optional, valid phone format

4. Empresa (optional)
   - Type: text
   - Validation: optional

5. Mensaje (required)
   - Type: textarea
   - Validation: required, min 10 characters

6. Submit Button
   - Text: "Enviar"
```

### Configuracion en Figma Make

#### Paso 1: Disenar Formulario en Figma

```
Frame: Contact Form
Elementos:
├── Input: nombre (name="nombre")
├── Input: email (name="email")
├── Input: telefono (name="telefono")
├── Input: empresa (name="empresa")
├── Textarea: mensaje (name="mensaje")
└── Button: Enviar (type="submit")
```

#### Paso 2: Configurar en Figma Make

1. **Identificar Formulario**
   ```
   Figma Make detectara automaticamente formulario
   basado en estructura
   ```

2. **Configurar Email Destino**
   ```
   Settings > Forms > Contact Form
   - Email destino: contacto@papeleraayd.cl
   - Subject: "Nuevo contacto desde sitio web"
   - Reply-to: Email del usuario
   ```

3. **Configurar Validacion**
   ```
   - Habilitar validacion client-side
   - Habilitar validacion server-side
   - Anti-spam: reCAPTCHA o honeypot
   ```

4. **Mensajes**
   ```
   Success: "Gracias por contactarnos. Te responderemos pronto."
   Error: "Hubo un error. Por favor intenta nuevamente."
   ```

### Template de Email Recibido

```
Subject: Nuevo contacto desde sitio web

Nombre: [nombre]
Email: [email]
Telefono: [telefono]
Empresa: [empresa]

Mensaje:
[mensaje]

---
Enviado desde: www.papeleraayd.cl
Fecha: [fecha y hora]
IP: [ip address]
```

### Anti-Spam

#### Opcion 1: Google reCAPTCHA v3 (Recomendado)

Invisible, no interrumpe usuario:

1. **Obtener Keys**
   ```
   - Ir a: https://www.google.com/recaptcha/admin
   - Registrar sitio
   - Version: reCAPTCHA v3
   - Dominio: www.papeleraayd.cl
   - Obtener Site Key y Secret Key
   ```

2. **Configurar en Figma Make**
   ```
   Settings > Forms > Anti-Spam
   - Type: reCAPTCHA v3
   - Site Key: [key]
   - Secret Key: [key]
   - Score threshold: 0.5
   ```

#### Opcion 2: Honeypot

Campo oculto que bots llenan pero humanos no:

```html
<input
  type="text"
  name="website"
  style="display:none"
  tabindex="-1"
  autocomplete="off"
/>
```

Si campo esta lleno, rechazar submission.

### Notificaciones

#### Email a Empresa

```
Cada vez que se envia formulario:
- Email a: contacto@papeleraayd.cl
- Con informacion del contacto
- Opcion de responder directamente
```

#### Auto-Respuesta a Usuario (Opcional)

```
Email automatico a usuario confirmando:
- Recepcion de mensaje
- Tiempo estimado de respuesta
- Informacion de contacto alternativa
```

### Tracking con Analytics

Trackear envio de formulario como conversion:

```javascript
// Al enviar formulario exitosamente
gtag('event', 'contact_form_submit', {
  'event_category': 'Contact',
  'event_label': 'Contact Form'
});
```

### Troubleshooting

#### Formulario No Envia

```
Verificar:
1. Campos name correctos en Figma
2. Email destino configurado en Figma Make
3. Validacion no bloqueando submission
4. JavaScript habilitado en navegador
5. No hay ad-blocker interfiriendo
```

#### No Llegan Emails

```
Verificar:
1. Email destino correcto
2. Revisar carpeta de SPAM
3. Whitelist dominios de Figma Make
4. Logs en Figma Make (submissions recibidas?)
5. Configuracion SMTP si es custom
```

## Redes Sociales

### Enlaces a Redes Sociales

Agregar links en footer a perfiles sociales de Papelera del Pacífico.

#### Redes Disponibles

```
Facebook: [URL pendiente]
Instagram: [URL pendiente]
LinkedIn: [URL pendiente]
Twitter/X: [URL pendiente]
YouTube: [URL pendiente]
```

### Implementacion

#### En Figma

```
Footer frame:
├── Social Media Icons
│   ├── Facebook Icon (link: [url])
│   ├── Instagram Icon (link: [url])
│   ├── LinkedIn Icon (link: [url])
│   └── ...
```

#### Iconos

```
Formato: SVG
Tamano: 24x24px
Color: Blanco (sobre fondo oscuro del footer)
Hover: Color dorado corporativo (#C9B382)
```

### Open Graph Tags

Para que links compartidos se vean bien en redes sociales:

```html
<meta property="og:title" content="Papelera del Pacífico - Productos de Papel de Calidad">
<meta property="og:description" content="Fabricantes de papel toalla, papel higienico y sabanilla medica bajo la marca Maxifort.">
<meta property="og:image" content="https://www.papeleraayd.cl/og-image.jpg">
<meta property="og:url" content="https://www.papeleraayd.cl">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Papelera del Pacífico - Productos de Papel de Calidad">
<meta name="twitter:description" content="Fabricantes de papel toalla, papel higienico y sabanilla medica bajo la marca Maxifort.">
<meta name="twitter:image" content="https://www.papeleraayd.cl/twitter-card.jpg">
```

### Imagen OG (Open Graph)

```
Tamano: 1200x630px
Formato: JPG
Peso: < 200KB
Contenido:
- Logo AYD
- Productos destacados
- Tagline: "Compromiso, Desarrollo e Innovacion"
```

## Google Search Console

### Proposito

Monitorear presencia del sitio en busqueda de Google, identificar errores y optimizar SEO.

### Configuracion

#### Paso 1: Agregar Propiedad

1. **Ir a Search Console**
   ```
   URL: https://search.google.com/search-console
   ```

2. **Agregar Propiedad**
   ```
   - Click "Add property"
   - Type: "URL prefix"
   - URL: https://www.papeleraayd.cl
   ```

3. **Verificar Propiedad**

   **Metodo 1: HTML Tag (Recomendado con Figma Make)**
   ```html
   <meta name="google-site-verification" content="XXXXXXXXXXXX">
   ```
   Agregar en configuracion de Figma Make.

   **Metodo 2: Google Analytics**
   ```
   Si GA ya esta configurado, puede auto-verificar
   ```

#### Paso 2: Enviar Sitemap

1. **Generar Sitemap**
   ```
   Figma Make genera automaticamente sitemap.xml
   URL: https://www.papeleraayd.cl/sitemap.xml
   ```

2. **Enviar a Search Console**
   ```
   - Search Console > Sitemaps
   - Add new sitemap
   - URL: sitemap.xml
   - Submit
   ```

### Que Monitorear

#### Performance

```
- Total clicks desde Google
- Total impressions
- Average CTR (Click-Through Rate)
- Average position en resultados
```

#### Coverage

```
- Paginas indexadas vs no indexadas
- Errores de indexacion
- Warnings
- Paginas excluidas
```

#### Enhancements

```
- Core Web Vitals (performance)
- Mobile Usability
- Errores de estructura
```

## Email Marketing

### Opcion: Newsletter (Fase 2)

Si se decide implementar newsletter:

#### Servicio Recomendado

```
Mailchimp (Free tier: hasta 500 contactos)
O
Sendinblue
```

#### Integracion

1. **Formulario de Suscripcion**
   ```
   En footer:
   - Input email
   - Button "Suscribirse"
   ```

2. **Conectar con Mailchimp**
   ```
   - Crear cuenta Mailchimp
   - Crear audience
   - Generar embedded form code
   - Integrar en Figma Make
   ```

3. **Automation**
   ```
   - Email de bienvenida automatico
   - Newsletter mensual con novedades
   - Promociones especiales
   ```

## Otras Integraciones

### WhatsApp Business (Opcional)

Link directo para contacto via WhatsApp:

```html
<a href="https://wa.me/56912345678?text=Hola,%20me%20interesa%20conocer%20sus%20productos">
  Contactar por WhatsApp
</a>
```

### Facebook Pixel (Opcional)

Para remarketing si se hacen campanas de Facebook Ads:

```html
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

### Hotjar (Opcional)

Para heatmaps y grabacion de sesiones:

```html
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:YOUR_HOTJAR_ID,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

---

**Documento Mantenido por:** Equipo de Integraciones AgenciaDos
**Ultima Actualizacion:** Noviembre 2025
**Version:** 1.0
