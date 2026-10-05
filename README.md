# Sitio web de Marina Olvera

Sitio estático (HTML, CSS y JS sin dependencias) listo para GitHub Pages.

```
├── index.html          Página principal
├── 404.html            Página para direcciones inexistentes
├── css/styles.css      Estilos (modo claro y oscuro)
├── js/main.js          Sección de contacto y año del pie de página
├── fonts/              Tipografías Montserrat y Newsreader (alojadas aquí, sin Google Fonts)
├── img/                Foto, banner (JPG + WebP en 3 tamaños), imagen para compartir e íconos
├── robots.txt
├── sitemap.xml
└── .nojekyll           Le indica a GitHub Pages que publique los archivos tal cual
```

## Publicar en GitHub Pages

1. Crea una cuenta en https://github.com (por ejemplo, usuario `marinaolvera`).
2. Crea un repositorio público llamado exactamente **`marinaolvera.github.io`** (tu usuario + `.github.io`).
3. Sube **el contenido** de esta carpeta (no la carpeta misma) a la raíz del repositorio:
   *Add file → Upload files*, arrastra todo, incluido `.nojekyll`, y da *Commit changes*.
4. Ve a *Settings → Pages* y en *Source* elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`.
5. En 1 o 2 minutos el sitio estará en **https://marinaolvera.github.io/**

> **Si el usuario no es `marinaolvera`**, busca y reemplaza `https://marinaolvera.github.io/`
> por la dirección real en `index.html`, `robots.txt` y `sitemap.xml`.
> Si publicas en un repositorio con otro nombre (la dirección queda como `usuario.github.io/repositorio/`),
> cambia también en `404.html` las rutas que empiezan con `/` por `/repositorio/`.

## Después de publicar

- Agrega la dirección en LinkedIn: *Información de contacto → Sitio web* y en la sección *Destacados*.
- Revisa cómo se ve el enlace al compartirlo en https://www.linkedin.com/post-inspector/
- (Opcional) Registra el sitio en https://search.google.com/search-console para que Google lo indexe antes.

## Cambios comunes

| Quiero cambiar…            | Archivo                                              |
|----------------------------|------------------------------------------------------|
| Textos, experiencia, áreas | `index.html`                                         |
| Descripción de cada puesto | `index.html`, busca `DESCRIPCIÓN DEL PUESTO` (hay un ejemplo en el comentario) |
| Correo o LinkedIn          | `js/main.js` (objeto `CONTACT` al inicio)            |
| Colores                    | `css/styles.css` (variables en `:root`)              |
| Foto                       | reemplaza `img/foto.jpg` y `img/foto.webp` (360×360) |

El correo no aparece escrito en el HTML: se arma con JavaScript y se copia con el botón,
para que los robots que recolectan correos no lo encuentren.
