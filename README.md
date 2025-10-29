# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Notes about Google Places dependency

When adding `react-google-places-autocomplete` the install can fail with an ERESOLVE peer dependency error on newer npm versions when the package's peer deps don't match your installed React version. In this repo React 19 is used.

What was done here:
- Installed the package with npm using the `--legacy-peer-deps` flag to bypass strict peer dependency resolution:

  npm install --save react-google-places-autocomplete --legacy-peer-deps

Alternatives if you prefer not to use `--legacy-peer-deps`:
- Use the Google Places JS SDK directly (no React peer deps). This is more manual but future-proof.
- Downgrade React to a version compatible with the package's peer dependency.
- Choose a different autocomplete component that supports React 19.

If you need, I can either wire the Places component into `src/create-trip/index.jsx` or replace it with a lightweight custom input that calls the Places REST/JS APIs.
