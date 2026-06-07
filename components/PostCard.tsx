import Link from 'next/link';
import { Post } from '@/lib/types';
import Tag from './Tag';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const date = new Date(post.frontmatter.date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="group border border-slate-200 dark:border-slate-800 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-lg/20 transition-all">
      <Link href={`/blog/${post.slug}`}>
        <h2 className="text-2xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {post.frontmatter.title}
        </h2>
      </Link>
      <p className="text-slate-600 dark:text-slate-400 mb-4">
        {post.frontmatter.excerpt}
      </p>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <time className="text-sm text-slate-500 dark:text-slate-500">
          {date}
        </time>
        <span className="text-sm text-slate-500 dark:text-slate-500">
          {post.frontmatter.readingTime} min de lectura
        </span>
      </div>
      {post.frontmatter.tags && (
        <div className="flex flex-wrap gap-2 mb-4">
          {post.frontmatter.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      )}
      <Link
        href={`/blog/${post.slug}`}
        className="inline-block text-primary-600 dark:text-primary-400 font-semibold hover:underline"
      >
        Leer más →
      </Link>
    </article>
  );
}
