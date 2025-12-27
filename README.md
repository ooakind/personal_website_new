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

-   **Content**: Edit `src/App.jsx` to update your profile, research, and experience data.
-   **Styling**: Use Tailwind CSS classes in `src/App.jsx` or basic CSS in `src/index.css`.
