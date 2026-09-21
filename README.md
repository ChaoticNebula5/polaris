# POLARIS — Antarctic station digital twin MVP

React + TypeScript + Vinext, Three.js, Cloudflare Workers/D1, Drizzle, and Radix UI.

## What you receive

The complete application source. Two conceptual 3D station models, eight selectable assets, simulated telemetry and fault scenarios, energy and logistics views, environmental scenario calculations, a rule-based assistant, JSON exports, and durable maintenance work orders. No live station equipment is connected.

### Main files

- `app/page.tsx` — dashboard and operational workflows
- `app/twin.tsx` — procedural 3D models, camera, selection, and national flag geometry
- `app/globals.css` — interface design and responsive layouts
- `lib/model.ts` — synthetic station data, telemetry and fuel calculations
- `app/api/orders/route.ts` — work-order API with input validation
- `lib/database.ts`, `db/schema.ts`, `drizzle/` — D1 access and schema migrations
- `PITCH-USPS.md` — defensible slide copy and proposed differentiators
- `PRODUCT.md` — demo walkthrough and production boundaries

## Local setup

Use Node.js 22.13 or newer and the pnpm version declared in `package.json`.

```sh
corepack enable
pnpm install
pnpm dev
```

The UI and simulation run without external API keys. The browser needs JavaScript. Three.js uses WebGL when available and a software renderer otherwise.

### Enable local work-order persistence

The D1 binding is declared as `DB` in `.openai/hosting.json`. Generate the Worker configuration and apply the initial migration to your local database:

```sh
pnpm build
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_old_miss_america.sql
pnpm start
```

Use the address printed by the development server. Apply the migration once per new local database. In the absence of a database, the UI reports that saved work orders are unavailable; the 3D and simulation views still work.

### Production

The hosted app currently uses Sites with owner-only access. The downloadable archive omits the existing site's project ID, credentials, dependencies, compiled output, and database contents. Register a separate deployment and provision D1 before hosting your own copy. Do not expose the work-order API publicly without adding application authentication, permissions, and abuse controls.

## Honest scope

- Geometry is conceptual, not a surveyed BIM replica.
- All station readings, inventory amounts and resupply schedules are synthetic.
- Anomaly detection is threshold-based, not trained predictive maintenance.
- The assistant is deterministic and rule-based, not an LLM.
- Energy scenarios are arithmetic estimates, not a validated thermodynamic model.
- No offline write queue, edge ingestion, remote actuator control, or automated procurement is implemented.

## Changes in this revision

Freestanding flags clear of both station buildings, correct 3:2 tricolour geometry, blue 24-spoke Ashoka Chakra visible on both sides, and a restrained station-planning interface. No glow or gradient cards, no promotional slogans, and no invented environmental score on the operational overview.
