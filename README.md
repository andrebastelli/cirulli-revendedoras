# Atacado Cirulli — Landing Page

Vite + React + TypeScript + Tailwind CSS. Pronto para deploy no Vercel.

## Setup local

```bash
npm install
cp .env.example .env       # ajuste o WhatsApp
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Deploy no Vercel

1. Suba este projeto para um repositório no GitHub.
2. No Vercel, clique em **Add New Project** e importe o repositório.
3. Framework Preset: **Vite** (detectado automaticamente).
4. Build Command: `npm run build` · Output Directory: `dist`.
5. Em **Environment Variables**, adicione `VITE_WHATSAPP_NUMBER` (ex.: `5519999999999`).
6. Deploy.

## Estrutura

```
/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vercel.json
├── .env.example
├── .gitignore
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── vite-env.d.ts
    └── assets/
```
