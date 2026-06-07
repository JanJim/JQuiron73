'use client';

import { useState } from 'react';
import Tag from './Tag';

interface TagFilterProps {
  tags: string[];
}

export default function TagFilter({ tags }: TagFilterProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">Filtrar por tag</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              selectedTag === tag
                ? 'bg-primary-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
