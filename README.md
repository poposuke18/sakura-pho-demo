# Sakura Phở — Demo Restaurant Website

> **AI HP営業販売プロジェクト**のデモサイト。
> 営業時に「こういうサイトを作れます」と提示するための架空店舗のリファレンス実装。

## Live

- **本番**: https://sakura-pho-demo.vercel.app
- GitHub: https://github.com/poposuke18/sakura-pho-demo
- Vercel ⇄ GitHub 自動デプロイ連携済み（mainへのpushで自動再デプロイ）

ホーチミン市タオディエンにあるという設定の、和の美意識を取り入れた本格ベトナム料理店「桜フォー（Sakura Phở）」の三言語対応サイト。

## Stack

- **Astro 6** (静的サイトジェネレーター)
- **Tailwind CSS v4** (スタイリング)
- **TypeScript strict**
- Cloudflare Pages / Vercel デプロイ対応

## Pages (12)

| Path | Locale | Page |
|---|---|---|
| `/` | ja | Home |
| `/menu` | ja | Menu |
| `/about` | ja | About |
| `/contact` | ja | Contact |
| `/vi/`, `/vi/menu`, `/vi/about`, `/vi/contact` | vi | All |
| `/en/`, `/en/menu`, `/en/about`, `/en/contact` | en | All |

## Local Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to dist/
npm run preview  # preview built site
```

## Project Structure

```
src/
├── i18n/translations.ts    # 全言語の翻訳データ
├── layouts/BaseLayout.astro
├── components/
│   ├── Header.astro        # ナビ＋言語切替
│   ├── Footer.astro
│   └── sections/           # ページセクション（ロケール別）
├── pages/                  # JP（デフォルト）
│   ├── vi/                 # Vietnamese
│   └── en/                 # English
└── styles/global.css       # Tailwind v4 + テーマ変数
```

## Design System

- Cream（`#faf7f3`）/ Ink（`#1a1714`）/ Sakura（`#e8a3a3`）/ Gold（`#c4a76d`）/ Forest（`#3a5a40`）
- Noto Serif JP / Noto Sans JP / Be Vietnam Pro / Cormorant Garamond
- 静的サイト + Cookieなし解析想定
