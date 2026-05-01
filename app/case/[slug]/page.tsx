import Link from "next/link";

export function generateStaticParams() {
  return [
    { slug: "pyxo" },
    { slug: "ledger-swap" },
    { slug: "calldesk" },
  ];
}

export const dynamicParams = false;

type CaseMeta = {
  company: string;
  period: string;
  domain: string;
  tagline: string;
  intro: string;
};

export async function generateMetadata({ params }: PageProps<"/case/[slug]">) {
  const { slug } = await params;
  const { meta } = (await import(`@/content/${slug}.mdx`)) as { meta: CaseMeta };
  return {
    title: `${meta.company} — Louis Bolatre`,
    description: meta.tagline,
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/case/[slug]">) {
  const { slug } = await params;
  const { default: Content, meta } = (await import(
    `@/content/${slug}.mdx`
  )) as { default: React.ComponentType; meta: CaseMeta };

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            ← Louis Bolatre
          </Link>
          <span className="text-xs text-zinc-400 font-medium tracking-wide uppercase">
            Case Study
          </span>
        </div>
      </nav>

      <header className="max-w-4xl mx-auto px-6 pt-16 pb-12 border-b border-zinc-100">
        <p className="text-xs font-semibold text-indigo-600 tracking-widest uppercase mb-4">
          {meta.domain} · {meta.period}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight mb-4">
          {meta.company}
        </h1>
        <p className="text-xl text-zinc-500 max-w-xl leading-relaxed mb-3">
          {meta.tagline}
        </p>
        <p className="text-sm text-zinc-400">{meta.intro}</p>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-14">
        <div className="max-w-2xl">
          <Content />
        </div>
      </main>

      <footer className="border-t border-zinc-100 py-12">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-sm text-zinc-500 mb-1">Autres case studies</p>
            <div className="flex gap-4 flex-wrap">
              {[
                { label: "Pyxo", slug: "pyxo" },
                { label: "Ledger SWAP", slug: "ledger-swap" },
                { label: "Calldesk", slug: "calldesk" },
              ]
                .filter((c) => c.slug !== slug)
                .map((c) => (
                  <Link
                    key={c.slug}
                    href={`/case/${c.slug}`}
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    {c.label} →
                  </Link>
                ))}
            </div>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-zinc-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-700 transition-colors"
          >
            Me contacter
          </Link>
        </div>
      </footer>
    </div>
  );
}
