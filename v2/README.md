# Website

This website is built using [VuePress 2](https://v2.vuepress.vuejs.org/), a static site generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn docs:dev
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn docs:build
```

This command generates static content into the `.vuepress/dist` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

