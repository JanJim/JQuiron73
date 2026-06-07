import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rss';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import PostMeta from '@/components/PostMeta';
import Comments from '@/components/Comments';
import TableOfContents from '@/components/TableOfContents';
import mdxComponents from '@/lib/mdx-components';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.frontmatter.title} | JQuiron73`,
    description: post.frontmatter.excerpt,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      type: 'article',
      publishedTime: post.frontmatter.date,
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="space-y-8 max-w-3xl">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:gap-3 transition-all"
      >
        <ChevronLeft size={20} /> Volver al blog
      </Link>

      <header className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold">{post.frontmatter.title}</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          {post.frontmatter.excerpt}
        </p>
        <PostMeta post={post} />
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 prose dark:prose-invert max-w-none">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
        <aside className="lg:col-span-1">
          <TableOfContents content={post.content} />
        </aside>
      </div>

      <Comments postSlug={params.slug} />
    </article>
  );
}
