import Image from 'next/image';
import Link from 'next/link';

const mdxComponents = {
  h1: ({ children }: any) => (
    <h1 className="text-4xl font-bold mt-8 mb-4 text-slate-900 dark:text-slate-50">
      {children}
    </h1>
  ),
  h2: ({ children }: any) => (
    <h2 className="text-3xl font-bold mt-8 mb-4 text-slate-900 dark:text-slate-50">
      {children}
    </h2>
  ),
  h3: ({ children }: any) => (
    <h3 className="text-2xl font-bold mt-6 mb-3 text-slate-900 dark:text-slate-50">
      {children}
    </h3>
  ),
  p: ({ children }: any) => (
    <p className="text-base leading-7 mb-4 text-slate-700 dark:text-slate-300">
      {children}
    </p>
  ),
  a: ({ children, href }: any) => (
    <Link
      href={href}
      className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
    >
      {children}
    </Link>
  ),
  code: ({ children, className }: any) => (
    <code
      className={`rounded px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm font-mono ${
        className || ''
      }`}
    >
      {children}
    </code>
  ),
  pre: ({ children }: any) => (
    <pre className="rounded-lg bg-slate-900 dark:bg-slate-950 p-4 overflow-x-auto mb-4">
      <code className="text-slate-100 font-mono text-sm">{children}</code>
    </pre>
  ),
  ul: ({ children }: any) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-slate-700 dark:text-slate-300">
      {children}
    </ul>
  ),
  ol: ({ children }: any) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-slate-700 dark:text-slate-300">
      {children}
    </ol>
  ),
  blockquote: ({ children }: any) => (
    <blockquote className="border-l-4 border-primary-600 pl-4 italic mb-4 text-slate-600 dark:text-slate-400">
      {children}
    </blockquote>
  ),
  img: ({ src, alt }: any) => (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={400}
      className="rounded-lg my-4 max-w-full h-auto"
    />
  ),
};

export default mdxComponents;
