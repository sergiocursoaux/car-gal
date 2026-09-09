# Carrocerías Galicia

Web estática para un taller de carrocería especializado en reparación, mantemento e fabricación de carrocerías para vehículos. O sitio ofrece información sobre servizos, proxectos realizados, un catálogo de recambios e un formulario de contacto para solicitar orzamentos.

## Obxectivo

Crear unha presenza web profesional e accesible para un negocio local de carrocería en Galicia, orientado a particulares e empresas que necesitan servizos de reparación ou recambios.

## Público principal

- Particulares con vehículos que precisan reparacións de carrocería.
- Empresas do sector automobilístico que buscan provedor de recambios.
- Persoas interesadas en coñecer os servizos e proxectos do taller.

## Páxinas e funcionalidades

| Páxina | Descrición |
|---|---|
| `index.html` | Páxina principal con hero, servizos destacados, proxectos recentes e chamada á acción. |
| `sobre-nos.html` | Información sobre a empresa, historia e equipo. |
| `servizos.html` | Detalle dos servizos ofrecidos (chapas, mantemento, carrozados) con sección de preguntas frecuentes (FAQ). |
| `proxectos.html` | Galería de proxectos realizados con filtros por categoría e lightbox para ver imaxes ampliadas. |
| `catalogo.html` | Listado de produtos con barra lateral de filtros (categoría, stock, búsqueda por nome, ordenación). |
| `catalogo-detalle.html` | Ficha detallada dun produto con galería de imaxes e lightbox. |
| `contacto.html` | Formulario de contacto con validación en cliente e mapa de ubicación (OpenStreetMap). |
| `termos-legais-aviso-legal.html` | Aviso legal. |
| `termos-legais-cookies.html` | Política de cookies. |
| `termos-legais-privacidade.html` | Política de privacidade. |

**Funcionalidades JavaScript:**

- FAQ.
- Filtros de categoría na galería de proxectos.
- Barra lateral do catálogo con filtros de categoría, stock, búsqueda e ordenación.
- Galería de imaxes con lightbox.
- Formulario de contacto con validación en cliente.
- Navegación activa según a páxina actual.
- Menú hamburguesa responsive para móbiles.

## Tecnoloxías

- **HTML5** — estrutura semántica con etiquetas `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.
- **CSS3** — deseño responsive con Flexbox e Grid, breakpoints en 768px, 480px e 1440px.
- **JavaScript** — sen dependencias externas, código modular con funcións independentes.
- **OpenStreetMap** — iframe para mostra do mapa de ubicación.

Non se utiliza ningún framework, bundler ou preprocesador. O proxecto é 100% estático.

## Estrutura de cartafoles

```
car-gal/
css/
style.css
img/
01-logo.webp
02-logo-amarelo.webp
03-inicio.webp
js/
script.js 
index.html
sobre-nos.html
servizos.html
proxectos.html
catalogo.html
catalogo-detalle.html
contacto.html
termos-legais-aviso-legal.html
termos-legais-cookies.html
termos-legais-privacidade.html
README.md
```

## Ligazón á web publicada

https://wonderful-sutherland.87-106-228-101.plesk.page/

## Autoría e versión

- **Autor:** sergiocursoaux
- **Data de inicio:** setembro de 2026
- **Repositorio:** https://github.com/sergiocursoaux/car-gal