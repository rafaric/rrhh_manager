# HRM - Online ⚡️

## Esta es una aplicación realizada con Qwik City, meta framework de Qwik

## Estructura del proyecto

Dentro del proyecto, verás la siguiente estructura de directorios

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── routes/
        └── ...
```

- `src/routes`: Provee el ruteo basado en directorio, el cual puede incluir jerarquías de archivos de layout `layout.tsx`, y un `index.tsx` como página. Adicionalmente los archivos `index.ts` son endpoints.

- `src/components`: Directorio recomentado para componentes

- `public`: Cualquier recurso estático, como las imágenes, puede ser ubicadas en la carpeta publica.

## Agregar Integraciones

Usar el comando `npm run qwik add` para agregar integraciones adicionales. Algunos ejemplos son: Cloudflare, Netlify or Express Server, y el [Static Site Generator (SSG)](https://qwik.dev/qwikcity/guides/static-site-generation/).

```shell
npm run qwik add # or `yarn qwik add`
```

## Desarrollo

El modo desarrollo usa [Vite's development server](https://vitejs.dev/). El comando `dev` realizará la salida server-side render (SSR) durante el desarrollo. Para ver el proyecto utilizar:

```shell
npm start # or `yarn start`
```
