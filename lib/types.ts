export interface Frontmatter {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags?: string[];
  readingTime: number;
  featured?: boolean;
}

export interface Post {
  slug: string;
  frontmatter: Frontmatter;
  content: string;
}
