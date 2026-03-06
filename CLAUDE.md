# Project CLAUDE.md - Template Graveyard

## Project Overview

A collection of starter project templates ("closet full of skeletons for getting started") — Docker deploy, DOM Chef, GitHub Pages redirect, Koa+Mongo, and more.

## Tech Stack

- **Language:** TypeScript, JavaScript (ESM)
- **Templates:** Docker, Webpack, Koa, MongoDB starters
- **Linting:** mikey-pro (ESLint + Prettier + Stylelint)

## Architecture

```
docker-deploy/          # Docker deployment template (docker-compose, appspec)
dom-chef/               # DOM Chef client template (Webpack + TypeScript)
github-pages-redirect/  # GitHub Pages redirect template
koa-mongo/              # Koa + MongoDB full-stack template
.devcontainer/          # VS Code devcontainer config
eslint.config.js        # ESLint flat config
package.json            # Root package with ncu script
```

Each template is a self-contained directory with its own `package.json`.

## Commands

```bash
npm run ncu             # Update deps across all template package.json files
```

## Conventions

- ESM (`"type": "module"`)
- Prettier via `mikey-pro/prettier`
- Stylelint via `mikey-pro/stylelint`
- Conventional commits

## Testing

No tests. Template/starter collection.
