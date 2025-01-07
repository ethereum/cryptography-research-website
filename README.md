[![Netlify Status](https://api.netlify.com/api/v1/badges/5d7b96c5-01cc-4feb-867f-109a2e2c9277/deploy-status)](https://app.netlify.com/sites/cryptography-research/deploys)

<h1 align="center">
  Ethereum Foundation Cryptography Research
</h1>

The Ethereum Foundation leads research into cryptographic protocols that are useful within
the greater Ethereum community and more generally. Cryptography is a key tool that enables
greater functionality, security, efficiency, and auditability in decentralized settings.
We are currently conducting research into verifiable delay functions, multiparty
computation, vector commitments, and zero-knowledge proofs etc. We have a culture of open
source and no patents are put on any work that we produce.

This repository holds the codebase to our website, [crypto.ethereum.org](crypto.ethereum.org)

## Stack

The main stack used in the project includes:

- [Next.js](https://nextjs.org/).
- [TypeScript](https://www.typescriptlang.org/).
- [ChakraUI](https://chakra-ui.com/) as component library.
- [KaTeX](https://katex.org/) to render LaTeX math syntax.

## Local development

The project is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), with a custom scaffolding.

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Project Structure

The following list describes the main elements of the project structure:

- `public`: contains static assets like fonts and images.
- `src`: contains the source code.
  - `components`: React components.
    - components with state are directly located inside `/components`.
    - `layout`: components used to contain and apply different layouts to different pages.
    - `UI`: stateless (functional) components.
  - `pages`: includes components that renders to pages and [NextJS API Routes](https://nextjs.org/docs/api-routes/introduction).
  - `posts`: markdown blog posts.
  - `styles`: css stylesheets.
    - `global.css`: global stylesheet.
  - `theme`: contains the [Chakra UI custom theme](https://chakra-ui.com/docs/styled-system/theming/customize-theme), organized in `foundations` and `components` for better scaling.
  - `utils`: utilitary stuff.
  - `constants.ts`: this is the _global_ constants file, containing URLs and lists of elements we use across the site.
  - `types.ts`: contains the custom defined TypeScript types and interfaces.

## Markdown & LaTex support on blog posts

### Markdown

Support for [GitHub Flavored Markdown](https://github.github.com/gfm/), which is a superset of CommonMark and adds supports to other features like tables.

### LaTeX

The site uses [KaTeX](https://katex.org) to render LaTeX/math and inside `/research` publications abstracts. LaTeX-rendering libs are not 100% compatible with LaTex yet, so please check the [support table](https://katex.org/docs/support_table.html) if you are having issues with some expression.

## How to add a new blog post

The site supports both _internal_ and _external_ blog posts.

- **Internal posts**: to add a new one, just create a new markdown (`.md`) file under `src/posts` (make sure first this directory exists, otherwise create it first, under `/src`). The name of the file should follow the [kebab case](https://www.theserverside.com/definition/Kebab-case) convention, as it will be used to generate the url to the post. You also have to add some [Front Matter](https://frontmatter.codes/docs/markdown) metadata, like the post `title`, `author(s)` and `date`, which are required.

Metadata example:

```
---
title: 'VDF Proving with SnarkPack'
description 'Some awesome description for social media snippets, under 160 characters'
author: 'Mary Maller'
date: '2022-03-16'
---
```

Post titles should be under 60 characters. [Learn more on title tags](https://moz.com/learn/seo/title-tag).

Post descriptions should be under 160 characters. [Learn more on meta descriptions](https://moz.com/learn/seo/meta-description).

- **External posts**: you can also link to an external post from the `/blog` page by appending an object with the required data (`title`, `date`, `link`) to the `externalLinks` list from the `src/pages/blog/index.tsx` file. See the example below:

```
const externalLinks = [
  {
    title: 'Ethereum Merge: Run the majority client at your own peril!',
    date: '2022-03-24',
    link: 'https://dankradfeist.de/ethereum/2022/03/24/run-the-majority-client-at-your-own-peril.html'
  }
];
```

### How to add images to a local post

Image files should be placed inside `/public/images/` and the path to the image will be referenced as `/images/${filename}`. For example, we can insert the EF logo in a post by using

```
![EF logo](/images/ef-logo-bg-white.png "EF logo")
```

Take into account that images are automatically centered, no need to add extra HTML.

### How to add footnotes to a local post

Follow [this syntax](https://github.blog/changelog/2021-09-30-footnotes-now-supported-in-markdown-fields/).

## How to deploy changes succesfully

- **Locally**: **Make sure the site builds** locally, otherwise the build will break and the new version of the site (e.g.: adding a new post) will not be generated. To be sure of this, run the `yarn build` command locally and check that you get no errors.
- **On GitHub**: check that the `Deploy Preview` passes succesfully.

## Bounties pages

The source files (`.md`) for the bounties pages are located at `/src/bounties-data-source`. If you need to update the content from a certain bounty, just modify the corresponding file. LaTeX/math is also supported here.

For a better organization, images used in bounties pages are placed inside `/public/images/bounties/` and the path to the image have to be referenced as `/images/bounties/${filename}` (check `/src/bounties-data-source/rsa/assumptions.md` as example).

## How to add a new entry (Publication) on Research page

The best way is to just follow the current `Publication` structure you can find in `/src/pages/research.tsx` and use any other existent entry as example. For publications that are not associated to a conference, just use the `year` prop, with a numeric value, like the example below:

```
<Publication
  title='Fast amortized KZG proofs'
  authors='Dankrad Feist, Dmitry Khovratovich'
  year={2023}
  link='https://eprint.iacr.org/2023/033'
>
  <Text mb={4} fontSize='sm'>
    <em>
      In this note we explain how to compute n KZG proofs for a polynomial of degree d in
      time superlinear of (n+d). Our technique is used in lookup arguments and vector
      commitment schemes.
    </em>
  </Text>
</Publication>
```

For publications associated to a conference, use the `conference` property instead, with a text value. Don't use `year` in this case, just include it as part of the `conference` value, as you can see in the example below:

```
<Publication
  title='Aggregatable subvector commitments for stateless cryptocurrencies'
  authors='Alin Tomescu, Ittai Abraham, Vitalik Buterin, Justin Drake, Dankrad Feist, Dmitry
  Khovratovich'
  conference='SCN 2020.'
  link='https://eprint.iacr.org/2020/527.pdf'
>
  <Text fontSize='sm'>
    <em>
      An aggregatable subvector commitment (aSVC) scheme is a vector commitment (VC)
      scheme that can aggregate multiple proofs into a single, small subvector proof. In
      this paper, we formalize aSVCs and give a construction from constant-sized
      polynomial commitments. Our construction is unique in that it has linear-sized
      public parameters, it can compute all constant-sized proofs in quasilinear time, it
      updates proofs in constant time and it can aggregate multiple proofs into a
      constant-sized subvector proof. Furthermore, our concrete proof sizes are small due
      to our use of pairing-friendly groups. We use our aSVC to obtain a payments-only
      stateless cryptocurrency with very low communication and computation overheads.
      Specifically, our constant-sized, aggregatable proofs reduce each block&apos;s proof
      overhead to a single group element, which is optimal. Furthermore, our subvector
      proofs speed up block verification and our smaller public parameters further reduce
      block size.
    </em>
  </Text>
</Publication>
```

## How to add a new entry on Events page

Follow the current `Event` structure you can find in `/src/pages/events.tsx` and use any other existent entry as example, like the example below:

```
<Event
  conference='Cryptographic Frontier 2022, Trondheim'
  workshop='Open Problems in Decentralized Computation at Eurocrypt 2022'
  url='https://sites.google.com/view/cryptographic-frontier-2022/'
>
  this workshop brings the most interesting and challenging open cryptographic questions
  that Ethereum, Filecoin and other blockchain systems face, to the attention of academia.
  We will cover a large spectrum of research topics, such as vector commitments, SNARKs,
  shuffles, authenticated data structures and more. We will start the day with an update
  on to the problems discussed at last year&apos;s workshop.
</Event>
```

Be sure to provide a value for `conference`, `workshop` and the correct `url`.

### Notes

- Dates should follow the `yyyy-mm-dd` format (for both internal and external posts), like `date: '2022-03-16'`
- Blog posts are sorted automatically by date, regardless the order of insertion.
- Check the current sample posts on `src/posts`.

## Tutorials

### Learning NextJS

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

### Adding ChakraUI to a NextJS project

[This](https://chakra-ui.com/guides/getting-started/nextjs-guide) is a very clear and step-by-step guide on it.

### Learning ChakraUI

We recommend checking the [official docs](https://chakra-ui.com/docs/getting-started).
