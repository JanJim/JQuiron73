import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="space-y-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
          JQuiron73
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
          Bienvenido a mi blog personal. Aquí comparto artículos sobre desarrollo web, tecnología y experiencias personales.
        </p>
      </section>

      {/* Featured Posts */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Últimas publicaciones</h2>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:gap-3 transition-all"
          >
            Ver todas <ChevronRight size={20} />
          </Link>
        </div>
        <div className="grid gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
