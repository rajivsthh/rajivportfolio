# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    # Rajiv Shrestha — Portfolio

    Hi — I'm Rajiv. This repository contains my personal portfolio built with React + Vite (plus a small static copy in `static_portfolio/`).

    ## About me

    - Where I started: I began with web development — building projects with HTML, CSS and JavaScript while learning the fundamentals of front-end engineering.
    - What I'm doing now: I'm a 2nd-year Computer Science student transitioning into cybersecurity. I focus on web application security, penetration testing, and practical network security. I also participate in CTFs and hackathons to sharpen hands-on skills.

    ## Selected projects

    - SEEKHANEPAL — KIST Hackathon: A platform to help students discover interests with interactive demos and an AI chatbot. (Live: https://seekhanepal.vercel.app/)
    - SarkarSevaSaathi — 100x Nepal Hackathon 2025: Team Control Bits — built Form Mitra Smart, a GovTech web app for helping citizens complete government forms.
    - Network Security Scanner: A Bash-based reconnaissance and port scanning tool for learning network security and assessments.

    ## Run locally (React)

    Install dependencies and start the Vite dev server:

    ```sh
    npm install
    npm run dev
    ```

    Open the URL shown by Vite (usually http://localhost:5173).

    There is also a standalone static copy you can open in a browser at `static_portfolio/index.html`.

    ## Contact

    - Email: rajiv@example.com
    - GitHub: https://github.com/yourusername

    ---

    If you'd like, I can further shorten or reword any section (or add a resume link and social icons). 
      // Enable lint rules for React
