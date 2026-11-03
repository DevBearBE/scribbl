# scribbl

pnpm monorepo.

## Structure

```
apps/
  web/        web app (React & Typescript)
  api/        API (Nitro)
packages/
  ui/         shared UI components
  types/      shared types
  utils/      shared helpers
  db/         database access (Drizzle ORM)
```

Internal packages are linked with the `workspace:*` protocol.

## Requirements

- Node 26.x
- pnpm 12.x

## Getting started

```bash
pnpm install
```

Run a script in every package:

```bash
pnpm -r run build
```

Run a script in one package:

```bash
pnpm --filter @scribbl/web run dev
```
