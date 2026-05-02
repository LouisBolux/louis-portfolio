import type { MDXComponents } from "mdx/types";

/* ── Custom case-study components ─────────────────────────────────────── */

function Metric({
  value,
  label,
  sub,
}: {
  value: string;
  label: string;
  sub?: string;
}) {
  return (
    <div className="flex flex-col gap-0.5 p-5 bg-zinc-50 rounded-xl border border-zinc-100">
      <p className="text-2xl font-bold text-zinc-900 leading-none">{value}</p>
      {sub && <p className="text-xs text-indigo-600 font-semibold mt-1">{sub}</p>}
      <p className="text-sm text-zinc-500 mt-1">{label}</p>
    </div>
  );
}

function MetricGroup({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-8">{children}</div>
  );
}

function Callout({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="my-8 border-l-2 border-indigo-400 bg-indigo-50/50 rounded-r-xl pl-5 pr-5 py-4">
      {title && (
        <p className="text-xs font-semibold text-indigo-600 tracking-widest uppercase mb-2">
          {title}
        </p>
      )}
      <div className="text-zinc-700 text-[15px] leading-relaxed">{children}</div>
    </div>
  );
}

function Role({
  title,
  period,
  team,
}: {
  title: string;
  period: string;
  team: string;
}) {
  return (
    <div className="flex flex-wrap gap-4 my-6 text-sm">
      <div>
        <p className="text-xs text-zinc-400 uppercase tracking-widest font-semibold mb-0.5">Rôle</p>
        <p className="text-zinc-800 font-medium">{title}</p>
      </div>
      <div>
        <p className="text-xs text-zinc-400 uppercase tracking-widest font-semibold mb-0.5">Période</p>
        <p className="text-zinc-800 font-medium">{period}</p>
      </div>
      <div>
        <p className="text-xs text-zinc-400 uppercase tracking-widest font-semibold mb-0.5">Équipe</p>
        <p className="text-zinc-800 font-medium">{team}</p>
      </div>
    </div>
  );
}

/* ── MDX component map ─────────────────────────────────────────────────── */

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
    // Custom components available in MDX files
    Metric,
    MetricGroup,
    Callout,
    Role,
    ...components,
  };
}
