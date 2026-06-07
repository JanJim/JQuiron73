import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post, Frontmatter } from './types';

const postsDirectory = path.join(process.cwd(), 'posts');

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      const readingTime = calculateReadingTime(content);

      return {
        slug,
        frontmatter: {
          ...(data as Frontmatter),
          readingTime,
        },
        content,
      };
    });

  return posts.sort(
    (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fileName = fs.readdirSync(postsDirectory).find(
      (file) => file.replace(/\.mdx?$/, '') === slug
    );

    if (!fileName) return null;

    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    const readingTime = calculateReadingTime(content);

    return {
      slug,
      frontmatter: {
        ...(data as Frontmatter),
        readingTime,
      },
      content,
    };
  } catch (error) {
    return null;
  }
}
