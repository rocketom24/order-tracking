# Order Tracking

Mobile-only order tracking screen. Visual delivery timeline, estimated
delivery, order summary, and contact support, with dedicated states for
delayed delivery, a missing package after "delivered", and tracking not
yet available. All data is mocked — no backend.

## Stack

React + TypeScript + Tailwind CSS v4 + Framer Motion, on Vite.

## Setup

```bash
npm install
```

## Run

```bash
npm run dev
```

Open the URL Vite prints (default `http://localhost:5173`). Resize the
browser to ~360–430px wide (or use device emulation) — the layout is
mobile-only and not designed for wider viewports.

## Demo controls

The panel at the top of the page lets you switch between the scenarios
without a backend:

- **Normal** — in-progress order, live timeline
- **Delayed** — estimate has passed, shows a delayed banner with refresh
  / contact support actions
- **Missing** — marked delivered, shows a "report missing package" action
- **No tracking** — order exists but has no tracking events yet

`Loading`, `Empty`, and `Error` buttons override whichever scenario is
selected to preview those states.

## Other scripts

```bash
npm run build   # type-check + production build
npm run lint    # oxlint
npm run preview # preview the production build locally
```

## Structure

```
src/
  components/   UI components (timeline, cards, states, modal)
  data/         mock order data per scenario
  types.ts      shared types
  App.tsx       demo control panel + screen switching
```
