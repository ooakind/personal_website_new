# Personal Research Website

This is a personal research website built with React, Vite, and Tailwind CSS.

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Start the development server**:
    ```bash
    npm run dev
    ```

## Deployment to GitHub Pages

Pushing to `main` triggers the GitHub Actions workflow in `.github/workflows/`, which runs `npm run build` and publishes the result to GitHub Pages. Nothing else is needed.

`dist/` is a build output and is not tracked in git. Run `npm run build` locally only to preview the production bundle (`npm run preview`).

## Customization

-   **Content**: Edit `src/data.jsx`. Everything shown on the site (profile, news, publications, research themes, experience, teaching, patents, …) lives there.
    -   News items take an optional `image` (+ `link`, `video: true`) to show a thumbnail beside the item.
    -   Research themes list publication `id`s; a theme can hold any number of publications.
    -   `profile.photo` (optional, 4:5 portrait) adds a photo beside the About intro.
-   **Images**: Keep files in `public/` web-sized (JPEG, ≤ 1600px wide). Large originals slow the first load.
-   **Styling**: Design tokens (accent color, object shadow) are in `src/index.css`. Shared building blocks are in `src/components/ui.jsx`; each page is in `src/pages/`.
    -   Rule of thumb: text stays flat on white; only images use the `.obj` elevation; the accent color is used for text and lines, never as a background fill.
