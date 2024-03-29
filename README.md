# Website

This website is built using [VuePress 2](https://v2.vuepress.vuejs.org/), a static site generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn dev
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `.vuepress/dist` directory and can be served using any static contents hosting service.

### Deploy to GitHub

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Deploy to Vercel

#### For the classic and theme-hexo

[![v2](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Nofated095/vuepress-template/tree/master/v2)

Remember to change `Build & Development Settings` in the settings of your project in Vercel.

|key|value|
|:-:|:-:|
|BUILD COMMAND|yarn build|
|OUTPUT DIRECTORY|docs/.vuepress/dist|

#### For the project without `/docs`

[![root-docs](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Nofated095/vuepress-template/tree/master/root-docs)

Remember to change `Build & Development Settings` in the settings of your project in Vercel.

|key|value|
|:-:|:-:|
|BUILD COMMAND|yarn build|
|OUTPUT DIRECTORY|/.vuepress/dist|
