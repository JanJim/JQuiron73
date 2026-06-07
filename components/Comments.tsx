'use client';

import { useEffect } from 'react';

interface CommentsProps {
  postSlug: string;
}

export default function Comments({ postSlug }: CommentsProps) {
  useEffect(() => {
    // Cargar Giscus (sistema de comentarios basado en GitHub Discussions)
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'JanJim/JQuiron73');
    script.setAttribute('data-repo-id', 'YOUR_REPO_ID');
    script.setAttribute('data-category', 'Comentarios');
    script.setAttribute('data-category-id', 'YOUR_CATEGORY_ID');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'light');
    script.setAttribute('data-lang', 'es');
    script.setAttribute('data-loading', 'lazy');
    script.async = true;

    const commentsDiv = document.getElementById('giscus-container');
    if (commentsDiv) {
      commentsDiv.appendChild(script);
    }
  }, [postSlug]);

  return (
    <section className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
      <h2 className="text-2xl font-bold mb-6">Comentarios</h2>
      <div id="giscus-container" />
    </section>
  );
}
