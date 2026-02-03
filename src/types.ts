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

export interface MarkdownBounty {
  frontmatter: {
    [key: string]: any;
  };
  content: string;
}

export type WorkItem = {
  title: string;
  description: string;
  tags: string[];
  url: string;
  date: string;
  author: string;
  authorDisplay: string;
  authorTwitter: string | null;
};
