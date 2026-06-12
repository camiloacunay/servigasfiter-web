# ServiGasfíter

Sitio web estático para un servicio de gasfitería, listo para publicar en GitHub Pages usando el dominio personalizado:

```text
https://servigasfiter.cl/
```

## Estructura

```text
servigasfiter-web/
├── index.html
├── styles.css
├── script.js
├── CNAME
├── assets/
│   └── logo.svg
└── README.md
```

## Datos principales configurados

```text
Marca: ServiGasfíter
Dominio: servigasfiter.cl
Email: contacto@servigasfiter.cl
Repositorio sugerido: servigasfiter-web
```

## Qué debes editar antes de publicar

En `index.html`, reemplaza:

- `+56 9 1234 5678` por el teléfono real.
- `56912345678` en los enlaces de WhatsApp por el número real sin `+`, espacios ni guiones.
- `contacto@servigasfiter.cl` si usarás otro correo.
- Comunas de cobertura.
- Precios referenciales.
- Textos de servicios si quieres ajustar la oferta.

## Publicar en GitHub Pages con dominio propio

1. Crea un repositorio nuevo en GitHub llamado:

```text
servigasfiter-web
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
servigasfiter.cl
```

8. Activa **Enforce HTTPS** cuando GitHub lo permita.

El archivo `CNAME` ya viene incluido y contiene:

```text
servigasfiter.cl
```

## Configuración DNS recomendada para GitHub Pages

Cuando tengas comprado el dominio, en tu proveedor DNS crea estos registros `A` para el dominio raíz:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Y para `www`:

```text
Type: CNAME
Name: www
Value: TU-USUARIO.github.io
```

Ejemplo:

```text
www.servigasfiter.cl -> camiloacunay.github.io
```

## Publicar usando Git desde el computador

```bash
git init
git add .
git commit -m "Sitio web ServiGasfíter"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/servigasfiter-web.git
git push -u origin main
```
