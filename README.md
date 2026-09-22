# Order Tracking

A mobile-only order tracking screen for an ecommerce app, rebuilt from a
plain-text status list into a clear, animated, at-a-glance experience.
Presented inside a realistic iPhone mockup frame so it can be reviewed
without a physical device.

No backend — all data is mocked and swappable via an on-page control
panel, so every state (including edge cases that are hard to trigger on
a real order) is viewable instantly.

## Live features

- **Visual delivery timeline** — a stepper (Processing → Shipped → Out
  for delivery → Delivered) with a pulsing indicator on the current
  step, spring-based entrance animation, and a pop-in checkmark per
  completed step.
- **Estimated delivery** — date/time shown clearly, with a distinct
  delayed-state treatment once the estimate has passed.
- **Order summary** — product image, name, quantity, and price.
- **Contact support** — a bottom-sheet modal with chat/call/email
  options, reachable from anywhere on the screen.
- **Loading, empty, and error states** — a bouncing shopping-bag loader
  over a dimmed skeleton (rather than a bare spinner or blank screen),
  plus dedicated empty/error cards, all centered in the screen.

### Edge cases (the actual point of the exercise)

Real order tracking breaks in predictable ways; this screen handles
three of them explicitly, using the same component set as the happy path:

1. **Delayed delivery** — estimate has passed → amber banner, explicit
   "delayed" messaging, refresh and contact-support actions.
2. **Delivered but not received** — status says delivered → a "report
   missing package" action appears, with its own confirmation state.
3. **No tracking data yet** — order exists, no tracking events → a
   reassuring "still preparing" card instead of a blank or broken
   timeline.

## Design

- Rounded corners, soft shadows, generous spacing — no boxy cards or
  dense text blocks.
- White backgrounds with an emerald-green accent palette for
  interactive/brand elements; amber and rose are reserved for
  warning/danger states (delayed, missing, error) rather than used
  decoratively, so severity stays visually distinct.
- Framer Motion throughout: spring-based card and button
  micro-interactions (hover/tap), staggered timeline entrance, and a
  scale/fade transition whenever the scenario or state changes.
- Wrapped in an iPhone-style mockup (notch, side buttons, home
  indicator) with safe-area padding, so content never sits under the
  device chrome.

## Stack

React 19 + TypeScript, Tailwind CSS v4, Framer Motion, Vite. `oxlint`
for linting, `tsc` for type-checking.

## Setup & run

```bash
npm install
npm run dev
```

Open the URL Vite prints (default `http://localhost:5173`). The layout
is mobile-only by design — the phone mockup renders at a fixed size, so
no need to resize the browser.

## Demo controls

The panel above the phone frame switches between states with no
backend:

- **Normal / Delayed / Missing / No tracking** — the four order
  scenarios described above.
- **Loading / Empty / Error** — override buttons that preview those
  states regardless of which scenario is selected.

## Other scripts

```bash
npm run build   # type-check + production build
npm run lint    # oxlint
npm run preview # preview the production build locally
```

## Project structure

```
src/
  components/
    PhoneFrame.tsx               device mockup shell (notch, home indicator, safe area)
    OrderTrackingScreen.tsx      main screen composition
    DeliveryTimeline.tsx         animated stepper
    EstimatedDelivery.tsx        estimate / delayed banner
    OrderSummaryCard.tsx         product summary
    SupportModal.tsx             contact-support bottom sheet
    ReportMissingPackageBanner.tsx
    NoTrackingYetState.tsx
    LoadingState.tsx / EmptyState.tsx / ErrorState.tsx
    Card.tsx                     shared card shell
  data/mockOrders.ts             mock data per scenario
  types.ts                       shared types
  App.tsx                        demo control panel + state switching
```
