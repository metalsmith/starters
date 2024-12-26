# Bare Metalsmith starter

This bare Metalsmith starter provides a basic setup for a metalsmith web project.  
It shows templating basics including baseurl handling and different ways of accessing and using `metalsmith.metadata()` and data from other files.

It defines:

- a place to store templates and includes at `lib/layouts`
- a place to store local metalsmith plugins at `lib/metalsmith`
- a place to store project contents at `src`

It includes:

- npm scripts to run development & production builds, in watch-mode or served statically
- 7 essential metalsmith core plugins and a jstransformer for Nunjucks
- a basic content setup just enough to demonstrate:
  - optimal structure of a metalsmith build file
  - front-matter usage and excerpts
  - using metadata in layouts
  - baseuri & permalink handling, markdown & navigation rendering
  - creating your own local plugin
  - accessing the metalsmith environment in JS

To get started run:

```sh
npm install
npm start # dev-server with live-reload at localhost:3000
```

`npm start` will build a NODE_ENV=development build & start browser-sync with live-reload
`npm run dev` will build a NODE_ENV=development build
`npm run build` will build a NODE_ENV=production build
`npm run serve` will serve the build at `./build`  
`npm run watch` will rebuild without triggering browser live-reload
