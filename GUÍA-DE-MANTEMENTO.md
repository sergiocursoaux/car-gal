# Guía de mantemento de Carrocerías Galicia

Esta guía explica como modificar, ampliar e manter o proxecto.

## 1. Modificar textos

Cada páxina HTML contén o seu propio texto. Para cambialo:

1. Abre o ficheiro HTML correspondente (por exemplo, `servizos.html`).
2. Busca o texto que queres cambiar.
3. Edita o contido entre as etiquetas HTML.

**Exemplo:** Se queres cambiar o título da páxina de servizos, busca `<h1>` dentro de `servizos.html` e modifica o texto.

**Consello:** Non cambies as etiquetas HTML que envolven o texto, só o contido interior.

## 2. Modificar imaxes

As imaxes están na cartafol `img/`. Cada imaxes segue unha convención de nombrado:

- `01-logo.webp` — logotipo principal
- `03-inicio.webp` a `07-inicio.webp` — imaxes da páxina principal
- `22-catalogo.webp` a `28-catalogo.webp` — imaxes do catálogo

Para cambiar unha imaxe:

1. Coloca a nova imaxe na cartafol `img/`.
2. Mantén o mesmo nome de ficheiro ou actualiza a ruta no HTML.
3. Verifica que o atributo `alt` describa correctamente a nova imaxe.

**Formatos recomendados:** `.webp` para fotos (menor tamaño), `.png` para iconas con transparencia.

**Tamaños:** As imaxes do hero deberían ter uns 1200px de ancho. As imaxes de catálogo e proxectos, uns 600px.

## 3. Modificar imaxes de fondo

Algunhas imaxes estableceranse mediante CSS en lugar de `<img>`. Estas están definidas no ficheiro `css/style.css` coa propiedade `background-image`.

Para localizalas:

1. Abre `css/style.css`.
2. Busca `background-image: url(`.
3. Cambia a ruta do ficheiro ou o nome da imaxe.

**Importante:** As imaxes de fondo non teñen atributo `alt`. Se queres que sexan accesibles, engade un `aria-label` ou `role="img"` ao elemento HTML que as contén.

## 4. Engadir unha nova páxina

Para engadir unha páxina nova ao sitio:

1. Crea un novo ficheiro `.html` na raíz do proxecto (por exemplo, `promocions.html`).
2. Copia a estrutura básica dunha páxina existente (por exemplo, `sobre-nos.html`).
3. Modifica o contido do `<head>`:
   - `<title>` — título da páxina.
   - `<meta name="description">` — descrición para buscadores.
4. Modifica o contido do `<main>` co novo contido.
5. Engade un enlace na navegación de todas as páxinas HTML, dentro do `<ul>` do `<nav>`:

```html
<li><a href="promocions.html">Promocións</a></li>
```

6. Engade tamén o enlace no menú hamburguesa (a mesma lista `<ul>`).

**Lembre:** Tódalas páxinas deben ter o mesmo menú de navegación. Se engades unha páxina, debes actualizar o `<nav>` en tódolos ficheiros HTML.

## 5. Engadir un produto ao catálogo

O catálogo está en `catalogo.html`. Cada produto é unha tarxeta con esta estrutura:

```html
<a href="catalogo-detalle.html" class="catalog-product-card" tabindex="0"
   role="link" data-category="iluminacion">
    <div class="catalog-product-image"
         style="background-image: url('img/22-catalogo.webp');">
    </div>
    <div class="catalog-product-info">
        <h3>Faro dianteiro</h3>
        <span class="catalog-product-price">45,00 €</span>
    </div>
</a>
```

Para engadir un produto:

1. Duplica unha das tarxetas existentes en `catalogo.html`.
2. Cambia:
   - A ruta da imaxe en `background-image`.
   - O nome do produto no `<h3>`.
   - O prezo no `<span>`.
   - O valor de `data-category` (debe coincidir cunha categoría existente: `iluminacion`, `carroceria`, `electricidade`, `seguridade`).
3. Se o produto ten páxina de detalle propia, actualiza o `href` do `<a>`.

**Para engadir unha nova categoría de filtro:**

1. Engade un novo `<label>` na barra lateral de `catalogo.html`:

```html
<label class="filter-option">
    <input type="checkbox" name="category" value="nova-categoria">
    Nova categoría
</label>
```

2. Usa o mesmo valor en `data-category` das tarxetas de produtos que pertenzan a esa categoría.

## 6. Engadir un proxecto á galería

Os proxectos están en `proxectos.html`. Cada proxecto é unha tarxeta:

```html
<div class="project-card" data-category="carroceria">
    <div class="project-image"
         style="background-image: url('img/16-proxectos.webp');">
    </div>
    <div class="project-info">
        <h3>Reparación integral</h3>
        <p>Descrición curta do proxecto.</p>
    </div>
</div>
```

Para engadir un proxecto:

1. Duplica unha tarxeta existente en `proxectos.html`.
2. Cambia a imaxe, o título, a descrición e `data-category`.
3. As categorías dispoñibles son: `carroceria`, `pintura`, `mecanica`, `electricidade`.

## 7. Revisar ligazóns

Para verificar que tódalas ligazóns funcionan:

1. Abre cada páxina no navegador.
2. Fai clic en tódolos enlaces do menú de navegación.
3. Fai clic no botón "Solicitar orzamento".
4. Verifica os enlaces do pé de páxina.
5. No catálogo, fai clic en cada produto para ver se o enlace ao detalle funciona.

**Erros comúns:**
- Escribir mal o nome do ficheiro (por exemplo, `catalogo.html` en vez de `catalogo-detalle.html`).
- Esquecer de actualizar un enlace despois de renombrar un ficheiro.
- Usar rutas absolutas que non funcionarán na publicación.

**Erros coñecidos hoxe:**
- Tódalas ligazóns de redes sociais (Instagram, TikTok) apuntan a `href="#"` (placeholder).

## 8. Revisar o formulario de contacto

O formulario está en `contacto.html`. A validación faise en JavaScript (`script.js`, función `initContactForm`).

Para probar o formulario:

1. Abre `contacto.html` no navegador.
2. Enche todos os campos correctamente e envía — debe mostrar unha mensaxe de éxito.
3. Deixa o nome baleiro e envía — debe mostrar un erro.
4. Escribe un email incorrecto (por exemplo, "abc") e envía — debe mostrar un erro.
5. Non marque a casilla de privacidade e envía — debe mostrar un erro.

**Se engades un novo campo:**

1. Engade o `<input>` ou `<select>` no HTML dentro do `<form>`.
2. Engade a súa validación na función `initContactForm` de `script.js`.

## 9. Revisar o mapa

O mapa está en `contacto.html` como iframe de OpenStreetMap:

```html
<iframe
    src="https://www.openstreetmap.org/export/embed.html?..."
    title="Mapa de ubicación de Carrocerías Galicia"
    loading="lazy">
</iframe>
```

Para cambiar a ubicación:

1. Abre [https://www.openstreetmap.org](https://www.openstreetmap.org).
2. Busca a ubicación correcta.
3. Fai clic en "Compartir" → "Incorporar" e copia o código do iframe.
4. Substitúe o `src` do iframe en `contacto.html`.

## 10. Publicar unha nova versión

O proxecto estárase en GitHub. Para publicar cambios:

### Usando GitHub pola interface web:

1. Entra no repositorio en GitHub.
2. Fai clic en "Add file" → "Upload files" ou edita un ficheiro directamente.
3. Escribe unha mensaxe de commit clara (por exemplo, "Actualizo prezo do produto X").
4. Fai clic en "Commit changes".

## 11. Probas que se deben repetir

Despois de calquera cambio, verifica:

| Proba | Como facela |
|---|---|
| **Navegación** | Fai clic en cada enlace do menú en tódalas páxinas. |
| **Menú hamburguesa** | Reduce a ventá do navegador a menos de 768px e proba o menú móbil. |
| **Formulario** | Enche o formulario con datos válidos e inválidos. |
| **Catálogo** | Proba os filtros de categoría, stock, búsqueda e ordenación. |
| **Lightbox** | Fai clic nunha imaxe no catálogo ou proxectos e navega con frechas. |
| **FAQ** | Fai clic nas preguntas na páxina de servizos. |
| **Accesibilidade** | Navega co tabulador polo sitio para comprobar que o foco é visible. |
| **Responsive** | Proba en diferentes tamaños de pantalla (desktop, tablet, móbil). |
| **Imaxes** | Comproba que todas as imaxes cargan correctamente. |