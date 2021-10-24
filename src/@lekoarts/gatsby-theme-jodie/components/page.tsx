/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import Layout from "@lekoarts/gatsby-theme-jodie/src/components/layout";
import Seo from "@lekoarts/gatsby-theme-jodie/src/components/seo";
import TeX from "@matejmazur/react-katex";

// intercept these HTML elements from the markdown & replace them with KaTeX styles
const components = {
  div: (props) => {
    if (props.className && props.className.includes("math-display")) {
      import("katex/dist/katex.min.css");
      return <TeX block math={props.children} />;
    }
    return <div {...props} />;
  },
  span: (props) => {
    if (props.className && props.className.includes("math-inline")) {
      import("katex/dist/katex.min.css");
      return <TeX math={props.children} />;
    }
    return <span {...props} />;
  },
};

type DataProps = {
  page: {
    title: string;
    slug: string;
    excerpt: string;
    body: string;
    color: string;
    custom: boolean;
    cover: {
      childImageSharp: {
        resize: {
          src: string;
        };
      };
    };
  };
};

// component for a standard markdown page, such as 'Research', 'Bounties' & 'Team'
const Page: React.FC<PageProps<DataProps>> = ({ data: { page }, location }) => (
  <Layout color={page.color || undefined}>
    <Seo
      title={page.title}
      description={page.excerpt}
      pathname={location.pathname}
      image={page.cover.childImageSharp.resize.src}
    />
    <div
      sx={{
        variant: page.custom ? `content.custom` : `content.page`,
      }}
      data-testid="page-content"
    >
      <MDXProvider components={components}>
        <MDXRenderer>{page.body}</MDXRenderer>
      </MDXProvider>
    </div>
  </Layout>
);

export default Page;
