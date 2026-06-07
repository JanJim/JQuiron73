'use client';

import { useState } from 'react';
import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import SearchBox from '@/components/SearchBox';
import TagFilter from '@/components/TagFilter';

export default function BlogPage() {
  const posts = getAllPosts();
  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.frontmatter.tags || []))
  );

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-slate-600 dark:text-slate-400">
          {posts.length} artículos publicados
        </p>
      </div>

      <SearchBox />
      <TagFilter tags={allTags} />

      <div className="grid gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
