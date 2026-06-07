'use client';

import { useEffect, useState } from 'react';

interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const headingElements = doc.querySelectorAll('h1, h2, h3');

    const extractedHeadings: HeadingItem[] = Array.from(headingElements).map((el) => ({
      id: el.id || el.textContent?.replace(/\s+/g, '-').toLowerCase() || '',
      text: el.textContent || '',
      level: parseInt(el.tagName[1]),
    }));

    setHeadings(extractedHeadings);
  }, [content]);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-20 space-y-2 text-sm">
      <h3 className="font-bold text-slate-900 dark:text-slate-50">Contenido</h3>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id} style={{ marginLeft: `${(heading.level - 1) * 0.5}rem` }}>
            <a
              href={`#${heading.id}`}
              className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
