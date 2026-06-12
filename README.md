# Gasfíter Hoy

Sitio web estático para un servicio de gasfitería, listo para publicar en GitHub Pages usando el dominio personalizado:

```text
https://gasfiterhoy.cl/
```

## Estructura

```text
gasfiterhoy-web/
├── index.html
├── styles.css
├── script.js
├── CNAME
├── assets/
│   └── logo.svg
└── README.md
```

## Qué debes editar antes de publicar

En `index.html`, reemplaza:

- `+56 9 1234 5678` por el teléfono real.
- `56912345678` en los enlaces de WhatsApp por el número real sin `+`, espacios ni guiones.
- `contacto@gasfiterhoy.cl` si usarás otro correo.
- Comunas de cobertura.
- Precios referenciales.
- Textos de servicios si quieres ajustar la oferta.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub, por ejemplo:

```text
gasfiterhoy-web
```

2. Sube todos los archivos a la raíz del repositorio.
3. Entra al repositorio en GitHub.
4. Ve a **Settings > Pages**.
5. En **Build and deployment**, selecciona:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
6. Guarda los cambios.
7. En **Custom domain**, escribe:

```text
gasfiterhoy.cl
```

8. Activa **Enforce HTTPS** cuando GitHub lo permita.

El archivo `CNAME` ya viene incluido y contiene:

```text
gasfiterhoy.cl
```

## Configurar DNS del dominio

En el proveedor donde compres o administres `gasfiterhoy.cl`, debes crear registros DNS para apuntar el dominio a GitHub Pages.

Para el dominio raíz `gasfiterhoy.cl`, usa registros `A` hacia GitHub Pages:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

También puedes crear un registro `CNAME` para `www`:

```text
www -> TU-USUARIO.github.io
```

Ejemplo:

```text
www.gasfiterhoy.cl -> camiloacunay.github.io
```

Después de configurar DNS, puede tardar desde algunos minutos hasta varias horas en propagarse.

## Publicar usando Git desde el computador

```bash
git init
git add .
git commit -m "Sitio web Gasfiter Hoy"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/gasfiterhoy-web.git
git push -u origin main
```

Luego activa GitHub Pages desde **Settings > Pages**.

## Recomendaciones posteriores

Para una web real de negocio, conviene agregar:

- Dominio propio configurado con HTTPS.
- Google Business Profile.
- Formulario funcional con Formspree, Netlify Forms o backend propio.
- Google Analytics o Plausible.
- Fotos reales de trabajos realizados.
- SEO local para búsquedas como `gasfíter urgente`, `gasfíter a domicilio`, `gasfíter Peñalolén` o `gasfitería Santiago`.
