# Scarlet — Landing Page

Landing page oficial do Scarlet, o assistente inteligente para corretores de imóveis.

## Stack

- React 18 + Vite
- Tailwind CSS (instalado via npm — sem CDN)
- Framer Motion (animações e reveals de scroll)

## Como rodar

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Estrutura

```
public/
  favicon.svg
  robots.txt
src/
  assets/
    scarlet-mark.svg       ícone da marca, importado pelo Vite (processado no build)
  components/               peças reutilizáveis e genéricas
    Reveal.jsx                wrapper de animação de entrada (scroll reveal)
    Logo.jsx                   marca + wordmark (usado no Nav e no Footer)
    FeatureCard.jsx             card usado no grid de funcionalidades
    RoadmapItem.jsx              item usado na timeline "Em breve"
    StatusPill.jsx                selo de status usado nos mockups
    MockupChrome.jsx               barra de janela compartilhada entre os mockups
  sections/                  blocos de página, cada um com seu id de âncora
    Nav.jsx
    Hero.jsx
    TrustStrip.jsx
    Features.jsx
    Story.jsx
    ProductShowcase.jsx
    Timeline.jsx
    Waitlist.jsx               formulário de lista de espera (estado controlado)
    Footer.jsx
  hooks/
    useScrollPosition.js        detecta scroll para o fundo do Nav
    useDisclosure.js              estado de abrir/fechar (menu mobile)
    useLockBodyScroll.js           trava o scroll do body com o menu aberto
  App.jsx
  main.jsx
  index.css
```

## Design tokens

Definidos em `tailwind.config.js`:

- `paper` `#FBFBFA` — fundo
- `mist` `#F1F1EF` — fundo secundário
- `line` `#E4E4E1` — bordas
- `ink` `#111113` — texto principal / seções escuras
- `graphite` `#57575C` — texto secundário
- `smoke` `#8C8C90` — texto terciário / labels
- `scarlet` `#E01A2B` — cor de marca, usada só em detalhes (CTA, ícones, indicadores)

Tipografia: Instrument Sans (display), Inter (corpo), IBM Plex Mono (labels/dados).

## SEO e performance

- `index.html` com title, meta description, Open Graph, Twitter Card, canonical e JSON-LD (schema.org `SoftwareApplication`).
- `public/robots.txt` liberando indexação.
- Sem Tailwind via CDN — CSS é gerado no build e minificado (`vite.config.js` com `cssMinify` e `target: 'esnext'`).
- Fontes carregadas via `preconnect` + `display=swap`.
- `prefers-reduced-motion` respeitado em `index.css`.
- Ícones em SVG inline (sem requisições extras de imagem).

## Próximos passos sugeridos

- Conectar o formulário de `sections/Waitlist.jsx` a um endpoint real (ex: Supabase, Resend, Airtable).
- Adicionar uma imagem OG real em `public/og-image.png`.
- Configurar analytics (Plausible ou similar) respeitando LGPD.
