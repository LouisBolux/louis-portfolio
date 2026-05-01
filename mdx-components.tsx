import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-zinc-900 mt-10 mb-4 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-3 leading-snug">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-base font-semibold text-zinc-800 mt-6 mb-2">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-zinc-600 leading-relaxed mb-4 text-[17px]">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="space-y-1.5 mb-4 pl-0">{children}</ul>
    ),
    li: ({ children }) => (
      <li className="flex gap-2 text-zinc-600 text-[17px] leading-relaxed">
        <span className="text-indigo-400 mt-1.5 shrink-0">·</span>
        <span>{children}</span>
      </li>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-zinc-800">{children}</strong>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-indigo-200 pl-4 my-6 text-zinc-500 italic">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="border-zinc-100 my-10" />,
    ...components,
  };
}
