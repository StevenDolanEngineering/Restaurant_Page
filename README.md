# Day Dreamers Restaurant

A single-page restaurant website inspired by an intimate Little Italy café with table service, espresso, artisan pastries, and craft cocktails—tucked among the evergreen forests of Washington. Built as part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page) Full Stack JavaScript curriculum to practice ES6 modules, Webpack bundling, and dynamic DOM manipulation.

**[View Live Demo](https://stevendolanengineering.github.io/Restaurant_Page/)**

## Features

* **100% Dynamic DOM Generation:** All page content across every view is created and rendered purely with vanilla JavaScript modules—leaving `template.html` with only the static header, navigation bar, and empty `#content` container.

* **Single-Page Tabbed Navigation:** Seamless switching between **Home**, **Menu**, **Specials**, and **About** views without page reloads, including interactive inline navigation links on the homepage.

* **Data-Driven Menu & Specials Layouts:** Menu categories (*Food*, *Drinks*, *Cocktails*) and daily specials are generated dynamically from structured JavaScript arrays using reusable DOM builder functions and Flexbox dotted leaders.

* **Custom Styling & Bundled Assets:** Styled with Google Fonts (*Fleur De Leah*), custom repeating grapevine background tiling, floated magazine-style image text-wrapping, and Webpack asset bundling.

## Built With

* **JavaScript (ES6+ Modules)**

* **HTML5 & CSS3** (Flexbox, Floats, CSS Reset)

* **Webpack** (`webpack-cli`, `html-webpack-plugin`, `style-loader`, `css-loader`, `html-loader`, `webpack-dev-server`)

* **GitHub Pages** (`gh-pages` subtree deployment)

## Project Structure

```text
Restaurant_Page/
├── src/
│   ├── assets/          # Bundled images and repeating background pattern
│   ├── template.html    # HTML skeleton with header, nav, and #content mount point
│   ├── styles.css       # Global styles, reset, and responsive layout rules
│   ├── index.js         # Entry point and tab-switching event listeners
│   ├── home.js          # Home tab DOM module
│   ├── menu.js          # Menu tab DOM module
│   ├── specials.js      # Specials tab DOM module
│   └── about.js         # About tab DOM module
├── webpack.config.js    # ES Module Webpack configuration
└── package.json
```

## Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Webpack development server:
   ```bash
   npx webpack serve
   ```
