# Desconchadero El Jaibo — Landing

Sitio público independiente de `jaibo-pos-web`, construido con Astro 5, TypeScript y Tailwind CSS 4.

## Abrir en IntelliJ IDEA

1. Descomprimir el ZIP.
2. **File > Open** y seleccionar la carpeta `jaibo-landing`.
3. Configurar Node.js 24 (o Node 20.19+ compatible con Astro 5).
4. Ejecutar:

```bash
npm install
npm run dev
```

5. Abrir http://localhost:4321.

Para generar el sitio estático: `npm run build` (salida `dist/`). Para Cloudflare Pages: build command `npm run build`, output directory `dist`.

## Archivos principales

- `src/pages/index.astro`: landing completa.
- `src/data/menu.ts`: menú de 49 artículos y seis especialidades.
- `src/data/site.ts`: teléfono, WhatsApp, horarios, ubicación, enlaces.
- `src/layouts/BaseLayout.astro`: metadatos y datos estructurados.
- `src/styles/global.css`: estilos y Tailwind.
- `public/images/logo.png`: logo oficial proporcionado.

## Importante antes de publicar

- `public/images/aguachile-temporal.png` es **una imagen temporal**, no una fotografía real del producto. Reemplazarla por una fotografía real del aguachile.
- Las tarjetas sin fotografía usan emojis como marcadores de posición. Incorporar fotografías reales de cada especialidad.
- Confirmar los enlaces externos, dirección, precios y disponibilidad antes de desplegar.
- Revisar si el enlace de Google Maps abre la ficha exacta del puesto.
- La sección de ubicación usa un enlace a Google Maps en lugar de un mapa incrustado hasta verificar el identificador preciso del negocio.
- Configurar Google Search Console y analítica al publicar. No se incluyeron IDs ficticios.
- El diseño es una primera versión funcional inspirada en la maqueta aprobada, no una reproducción pixel-perfect.
