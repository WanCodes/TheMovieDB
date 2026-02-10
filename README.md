# The Movie DB Challenge

## Overview

This is a small React application built as a coding challenge using data from **The Movie Database (TMDB)** API.  
It was bootstrapped with `create-react-app` and enhanced with SASS support, a rating slider, and basic component tests.

## Prerequisites

- **Node.js & npm** installed on your machine.
- A **TMDB API key** which you can generate from your TMDB account.

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment**
   - In the project root, create a file named `.env.development`.
   - Add the following line, replacing the placeholder with your TMDB API key:
     ```bash
     REACT_APP_DEV_API_KEY=your-tmdb-api-key-here
     ```

3. **Run the app**
   ```bash
   npm start
   ```
   This will start the development server and open the app at `http://localhost:3000/`.

4. **Run tests**
   ```bash
   npm test
   ```
   This launches the test runner in interactive watch mode.

## Available Scripts

The following npm scripts are defined in `package.json`:

- **`npm start`**: Builds SASS, watches for SASS changes, and starts the CRA dev server.
- **`npm run build`**: Builds SASS and creates a production build of the app.
- **`npm test`**: Runs the test suite using `react-scripts test`.
- **`npm run eject`**: Ejects from `create-react-app` (irreversible).

## Tech Stack & Libraries

- **React 16** with `create-react-app`.
- **SASS support** via `node-sass-chokidar`, orchestrated with `npm-run-all` for watching and compiling styles.
- **HTTP client**: `axios` for calling the TMDB API.
- **Component testing**: `enzyme`, `enzyme-adapter-react-16`, and `react-test-renderer` to verify components render correctly with given props.
- **Prop validation**: `prop-types` to validate component props at runtime.
- **UI controls**: `rc-slider` for the vote slider and tooltip.

## Notes

- Environment variables prefixed with `REACT_APP_` are exposed to the React app at build time.  
- For non-development environments, you can create corresponding `.env` files (for example `.env.production`) following the same pattern as `.env.development`.
