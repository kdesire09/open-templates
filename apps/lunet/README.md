# 🚀 Lunet

A scroll-driven, GSAP-powered product launch template built with **Nuxt 4**, **Nuxt UI**, **GSAP** (ScrollTrigger + SplitText) and **Lenis**. It showcases **Lunet One**, a fictional smartwatch drawn entirely in CSS/SVG so every layer can be animated. Light mode by default, dark mode one click away.

## 🔗 Preview

- [Live Demo](https://lunet.kdesire.com/)

## 🎬 Scenes

| Scene         | What happens                                                                                                                  |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **Hero**      | Loader draws the halo, the watch assembles from its layers, the wordmark flips up in 3D, the product tilts toward the pointer |
| **Design**    | Pinned exploded view: six layers separate, each label lights up, the hands turn with the scroll, then it reassembles          |
| **Halo**      | Pinned: the light ring changes color for each notification type while captions swap                                           |
| **Features**  | Horizontal scroll with velocity-based skew and icon reveals                                                                   |
| **Specs**     | Counters and gauges scrubbed to the scroll                                                                                    |
| **Finishes**  | Circular clip-path wipe between colorways, the watch turns to face you                                                        |
| **Statement** | Words light up one by one                                                                                                     |
| **Waitlist**  | Countdown to launch + reservation form                                                                                        |

## ✏️ Make it yours

- **Content**: everything (name, copy, layers, specs, finishes, launch date) lives in the `launch` block of `app/app.config.ts`.
- **Product visual**: replace `app/components/ProductWatch.vue` with your own product (image, video or 3D canvas). Keep the `data-layer` / `data-strap` hooks if you want the exploded view.
- **Theme**: colors and fonts are defined in `app/assets/css/main.css`.

## 🧩 Animation architecture

- `app/plugins/gsap.client.ts` registers GSAP plugins and syncs Lenis with ScrollTrigger.
- `useScrollScene(root, setup)` runs a scene after mount, scoped to its root, rebuilt across the desktop breakpoint and reverted on unmount. It is skipped for `prefers-reduced-motion`, which shows the static layout.
- `app/utils/animations.ts` holds reusable recipes: `revealText`, `scrubWords`, `scrubCounter`, `riseIn`, `magnetic`.
- The `anim:` Tailwind variant applies only when animations will run (e.g. `anim:invisible` hides an element before its intro).

## 🛠️ Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install

# npm
npm install

# yarn
yarn install

# bun
bun install
```

## 💻 Development

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm dev

# npm
npm run dev

# yarn
yarn dev

# bun
bun run dev
```

## 🏗️ Production

Build the application for production:

```bash
# pnpm
pnpm build

# npm
npm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# pnpm
pnpm preview

# npm
npm run preview

# yarn
yarn preview

# bun
bun run preview
```

---

Built with ❤️ by [Désiré Kouassi](https://github.com/desire-kouassi)

_Lunet is a fictional product created for this template._
