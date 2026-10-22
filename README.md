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

1.  **Configure `package.json`**:
    Update the `homepage` field in `package.json` with your actual GitHub Pages URL:
    ```json
    "homepage": "https://yourusername.github.io/your-repo-name"
    ```

2.  **Deploy**:
    Run the deploy script to build and push to the `gh-pages` branch:
    ```bash
    npm run deploy
    ```

    This will create a `dist` folder, initialize a git repo (if one doesn't exist inside dist, though `gh-pages` handles this), and push it to the `gh-pages` branch of your remote repository.

    **Note**: Ensure your local project is connected to a remote GitHub repository.
    ```bash
    git remote add origin https://github.com/yourusername/your-repo-name.git
    ```

## Customization

-   **Content**: Edit `src/data.jsx`. Everything shown on the site (profile, news, publications, research themes, experience, teaching, patents, …) lives there.
    -   News items take an optional `image` (+ `link`, `video: true`) to show a thumbnail beside the item.
    -   Research themes list publication `id`s; a theme can hold any number of publications.
    -   `profile.photo` (optional, 4:5 portrait) adds a photo beside the About intro.
-   **Images**: Keep files in `public/` web-sized (JPEG, ≤ 1600px wide). Large originals slow the first load.
-   **Styling**: Design tokens (accent color, object shadow) are in `src/index.css`. Shared building blocks are in `src/components/ui.jsx`; each page is in `src/pages/`.
    -   Rule of thumb: text stays flat on white; only images use the `.obj` elevation; the accent color is used for text and lines, never as a background fill.
