# Open Templates Monorepo

Un monorepo basé sur Turborepo regroupant des templates et des applications (comme `home` et `motion-launch`).

Ce fichier donne aux agents d'IA de codage le contexte dont ils ont besoin pour travailler efficacement dans ce dépôt. Il est lu par [Codex](https://openai.com/codex), [Cursor](https://cursor.com), [Sourcegraph Amp](https://ampcode.com), [Aider](https://aider.chat), [Jules](https://jules.google), et d'autres agents qui respectent la spécification [AGENTS.md](https://agents.md).

## Architecture & Monorepo

- **Turborepo** : Le projet est un monorepo géré par [Turborepo](https://turbo.build/) et les espaces de travail de `pnpm`.
- **`apps/`** : Contient les applications Nuxt (`home`, `motion-launch`, etc.).
- **`packages/`** : Contient les paquets et configurations partagés (comme `packages/eslint-config`).
- **Commandes** : Toutes les commandes doivent être exécutées via Turborepo depuis la racine (ex: `turbo run dev`, `turbo run build`).

## Stack

- **Framework**: Vue + Nuxt (Vue 3 · Nuxt 4)
- **UI Framework**: Nuxt UI
- **CSS**: Tailwind CSS v4
- **Gestionnaire de paquets**: pnpm

## Setup

- **install**: `pnpm install`
- **dev**: `pnpm run dev` (qui lance `turbo run dev` pour toutes les apps en parallèle)
- **build**: `pnpm run build`
- **lint**: `pnpm run lint`

## Code Style

- **TypeScript everywhere** — Utilisez TypeScript pour tous les nouveaux fichiers.
- **ESLint partagé** — La configuration est gérée centralement par `@open-templates/eslint-config` (`packages/eslint-config`). Ne modifiez pas la configuration directement dans les apps sans raison valable.
- **Tailwind CSS** — Utilisez les classes utilitaires de Tailwind.
- **Composition API** — Utilisez `<script setup>` avec la Composition API de Vue. 
- **Nuxt UI First** — Privilégiez toujours l'utilisation des composants de `nuxt-ui` avant de créer un composant personnalisé.

## Pull Requests & Commits

- **Conventional Commits** — Suivez strictement les conventions de [Conventional Commits](https://www.conventionalcommits.org/) (ex: `feat:`, `fix:`, `chore:`, `docs:`).
- **Petites PRs** — Gardez les PRs concentrées sur une seule fonctionnalité ou application.

<!-- skilld -->

Avant de modifier du code, vérifiez .agents/skills/ pour les skills pertinents (notamment `turborepo`).
Lisez le SKILL.md de n'importe quel package correspondant avant de continuer.
Rédigez toujours vos plans et réponses en français.
Utilisez tant que possible des composants réutilisables.
Mettez toujours à jour ce fichier si de nouvelles règles d'architecture s'imposent.

<!-- /skilld -->
