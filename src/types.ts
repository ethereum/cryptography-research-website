export type MarkdownPost = {
  slug: string;
  frontmatter: {
    [key: string]: any;
  };
};

export type ExternalPost = {
  title: string;
  date: string;
  link: string;
};
