<h1 align="center">
  Ethereum Foundation Cryptography Website
</h1>

Web application for the Ethereum Foundation Cryptography team using the Gatsby Theme [`@lekoarts/gatsby-theme-jodie`](https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-jodie).

## ✨ Features

- MDX
- Fully customizable through the usage of Gatsby Themes (and Theme UI)
- Create a project by creating an MDX file and dropping the images into the same folder
- Extensible custom pages
- Define colors for each page and the sidebar & content will adapt while maintaining WCAG 2 AA contrast ratios
- SEO (Sitemap, OpenGraph tags, Twitter tags)
- WebApp Manifest

## 🚀 Getting Started

### 1. **Install dependencies.**

If you use npm 7 or above use the `--legacy-peer-deps` flag. If you use npm 6 you can use `npm install`.

```sh
npm install --legacy-peer-deps
```

### 2. **Open the code and start customizing!**

Start the site by running `npm run develop`.

Your site is now running at `http://localhost:8000`!

If you want to learn more about how you can use a Gatsby starter that is configured with a Gatsby theme, you can check out this [shorter](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/using-a-gatsby-theme/) or [longer](https://www.gatsbyjs.com/tutorial/using-a-theme/) tutorial. The tutorials don't exactly apply to this starter however the concepts are the same.

## 📝 Using and modifying the Gatsby starter

This projects use [`@lekoarts/gatsby-theme-jodie`](https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-jodie) - a [Gatsby theme](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/using-a-gatsby-theme/) for the primary application scaffolding, configuration and styling.

**Important Note:** Please read the guide [Shadowing in Gatsby Themes](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/) to understand how to customize the underlying theme!

Have a look at the theme's README and files to see what options are available and how you can shadow the various components including Theme UI. Generally speaking you will want to place your files into `src/@lekoarts/gatsby-theme-jodie/` to shadow/override files. The Theme UI config can be configured by shadowing its files in `src/gatsby-plugin-theme-ui/`.

### Changing your fonts

By default, the underlying theme and thus this starter uses "Work Sans" as its font. It's used throughout the site and set as a `font-family` on the `html` element.

If you want to change your default font or add any additional fonts, you'll need to change two things:

1. The configuration for `gatsby-omni-font-loader` => Responsible for loading the font CSS files
1. The Theme UI config and its `fonts` key (see [Theme UI Typography Docs](https://theme-ui.com/theming#typography)) => Responsible for setting the `font-family` in the example

After adjusting the configuration for `gatsby-omni-font-loader` you'll need to shadow the theme's Theme UI config and overwrite the `fonts` key. For the sake of this explanation it's assumed that you replaced "Work Sans" with "Roboto Mono".

Create a file at `src/gatsby-plugin-theme-ui/index.js` with the following contents:

```js
import { merge } from "theme-ui";
import originalTheme from "@lekoarts/gatsby-theme-jodie/src/gatsby-plugin-theme-ui/index";

const theme = merge(originalTheme, {
  fonts: {
    body: `"Roboto Mono", monospace`,
  },
});

export default theme;
```

As defined in the [Theme Specification](https://theme-ui.com/theme-spec#typography) `body` is the default body font family.

**Another example:** You didn't replace "Work Sans" but added "Roboto Mono" additionally since you want to use it for your headings.

Then you'd not overwrite `body` but add a `heading` key:

```js
import { merge } from "theme-ui";
import originalTheme from "@lekoarts/gatsby-theme-jodie/src/gatsby-plugin-theme-ui/index";

const theme = merge(originalTheme, {
  fonts: {
    heading: `"Roboto Mono", monospace`,
  },
});

export default theme;
```

### Change your `static` folder

The `static` folder contains the icons, social media images and `robots.txt`. Don't forget to change these files, too!

## 🤔 Questions or problems?

If you have general questions or need help with Gatsby, please go to one of the [support platforms](https://www.gatsbyjs.com/contributing/community/#where-to-get-support) mentioned in Gatsby's documentation. If you have a specific question about this project, you can head to the [GitHub Discussions](https://github.com/LekoArts/gatsby-themes/discussions) of the repository.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on Gatsby's website](https://www.gatsbyjs.com/).

### Themes

To learn more about Gatsby themes specifically, I recommend checking out the [theme docs](https://www.gatsbyjs.com/docs/themes/).

### General

- **For most developers, I recommend starting with the [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/docs/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to Gatsby's documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _How-to Guides_ and _Reference_ items in the primary navigation.
