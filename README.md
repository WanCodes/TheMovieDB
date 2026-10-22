# The Movie DB

A React coding exercise by [Wan Yau](https://github.com/WanCodes) that lists movies currently in theaters and filters them in the browser.

Movie and genre data come from [The Movie Database (TMDB)](https://www.themoviedb.org/) API. This repository is an independent exercise and is not affiliated with TMDB.

## Features

- Loads the first page of TMDB **now playing** movies (`language=en-US`) and the movie genre list.
- Shows a responsive card grid. Each card uses the `w500` poster, the title, and the genre names.
- Opens a filter panel from the top bar and closes it from the panel control.
- Filters by minimum vote average. The slider runs from 0 to 10 in steps of 0.5 and defaults to 3. A value above 0 keeps movies whose `vote_average` is at least that value. The panel labels this as "Movies voted N+".
- Filters by genre with checkboxes. A movie stays in the list only when it includes every selected genre. With nothing selected, every loaded movie remains eligible.
- Checkbox options are the genres that appear in the loaded page, sorted by name.
- Sorts the visible cards by popularity, highest first.

## Stack

| Area | Choice |
| --- | --- |
| UI | React 16 (`react` and `react-dom` 16.7) |
| Tooling | Create React App (`react-scripts` 2.1.3) |
| HTTP | axios 0.18 |
| Styles | Sass via `node-sass-chokidar`, compiled beside each component. `npm-run-all` runs the Sass watch and the dev server together |
| Slider | `rc-slider` 8, with a tooltip while dragging |
| Prop checks | `prop-types` |
| Tests | Enzyme 3, `enzyme-adapter-react-16`, `react-test-renderer`, Jest through Create React App |

`MoviesPage` is a class component and owns loading plus filter state. The top bar, filter panel, list, and cards are function components. Layout uses CSS Grid, shared Sass variables, and the Oswald webfont.

## How it fits together

`src/index.js` mounts `App`, which renders `MoviesPage`. The Create React App service worker stays unregistered.

On mount, `MoviesPage` requests genres, then now-playing movies:

- `GET https://api.themoviedb.org/3/genre/movie/list`
- `GET https://api.themoviedb.org/3/movie/now_playing` with `page=1` and `language=en-US`

Both calls send `api_key` from `REACT_APP_DEV_API_KEY`. Each movie keeps its `genre_ids` for filtering and gains a `genres` array of names for the card. Posters are requested from `https://image.tmdb.org/t/p/w500` plus `poster_path`.

Filtering stays in the browser after that single page of results:

- `src/shared/utils.js` — `ArrayContainsArray` requires every selected genre id to be present. `CompareValues` sorts by a field.
- `src/components/MovieList/MovieList.js` — applies the genre filter, then the vote filter, then sorts by `popularity` descending.
- `src/services/axios.js` — the two TMDB calls.

## Project layout

```text
src/
  index.js                         Entry. Renders App.
  App.js                           Page shell.
  containers/MoviesPage/           Fetch, filter state, and composition.
  components/TopBar/               Fixed title bar. Toggles the filter panel.
  components/MovieFilter/          Vote slider and genre checkboxes.
  components/MovieList/            Filtered grid and movie cards.
  services/axios.js                TMDB client.
  shared/utils.js                  Genre match and sort helpers.
  sass/                            Shared color, type, and breakpoint variables.
public/
  index.html                       Document shell and Oswald webfont.
```

Component styles are authored in Sass. `npm start` and `npm run build` compile them to the `.css` files those components import.

## Run locally

You need Node.js, npm, and a TMDB v3 API key from your TMDB account. Keep the key out of git.

1. Install dependencies.

   ```bash
   npm install
   ```

2. Add the key to a gitignored env file in the project root. The app reads one variable, `REACT_APP_DEV_API_KEY` (`src/services/axios.js`). Create React App inlines `REACT_APP_*` values when the bundle is built.

   For the dev server, create `.env.development` (already listed in `.gitignore`):

   ```bash
   REACT_APP_DEV_API_KEY=
   ```

   Put the key after `=`.

   `npm run build` does not load `.env.development`. For a production bundle, set the same variable in `.env.production.local`, which is also gitignored.

3. Start the app.

   ```bash
   npm start
   ```

   Sass compiles and watches in parallel with the Create React App dev server. Open http://localhost:3000/.

## Scripts

| Script | What it does |
| --- | --- |
| `npm start` | Compiles Sass, watches `src/` for style changes, and runs the dev server |
| `npm run build` | Compiles Sass, then writes the production bundle to `build/` |
| `npm test` | Runs the Jest suite in watch mode |
| `npm run eject` | Copies the Create React App config into this project. This cannot be undone. |

## Tests

```bash
npm test
```

Run once and exit:

```bash
CI=true npm test
```

`GenreCheckBox`, `MovieFilter`, and `MovieList` are covered with Enzyme shallow rendering:

- `GenreCheckBox` renders the genre label and adds the `checked` class when selected.
- `MovieFilter` renders one checkbox for each genre it is given.
- `MovieList` renders card markup from movie props, keeps the movie that contains the selected genre id, and keeps movies at or above the vote threshold.

`App.test.js` mounts the tree with `ReactDOM` and expects it to render without throwing.

## Scope

The exercise is one screen: the first page of now-playing titles, filtered and sorted on the client. Pagination, search, and a movie detail view are outside that brief. Request failures are logged to the console.
