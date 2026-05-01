import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <Hero />
        <About />
        <SideProjects />
        <TrackRecord />
        <HowIWork />
        <Contact />
      </main>
    </div>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-zinc-100">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-semibold text-zinc-900 text-sm">Louis Bolatre</span>
        <div className="flex gap-6 text-sm text-zinc-500">
          <a href="#about" className="hover:text-zinc-900 transition-colors">
            À propos
          </a>
          <a href="#projects" className="hover:text-zinc-900 transition-colors">
            Projets
          </a>
          <a href="#track-record" className="hover:text-zinc-900 transition-colors">
            Track Record
          </a>
          <a href="#contact" className="hover:text-zinc-900 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-24 pb-24">
      <p className="text-xs font-semibold text-indigo-600 tracking-widest uppercase mb-6">
        Senior Product Manager
      </p>
      <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 leading-none tracking-tight mb-8">
        Louis Bolatre
      </h1>
      <p className="text-xl md:text-2xl text-zinc-500 max-w-lg mb-2 leading-relaxed">
        Je ship en autonomie avec l&apos;IA.
      </p>
      <p className="text-xl md:text-2xl text-zinc-300 max-w-lg mb-12 leading-relaxed">
        Pas juste stratège.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href="#track-record"
          className="inline-flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-700 transition-colors"
        >
          Voir mes projets
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 border border-zinc-200 text-zinc-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors"
        >
          Me contacter
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-zinc-50 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>À propos</SectionLabel>
        <div className="max-w-2xl space-y-5 text-zinc-600 leading-relaxed text-[17px]">
          <p>
            J&apos;ai passé 6 ans à construire des produits dans des
            environnements où la vitesse compte — Ledger, Electra, Pyxo,
            Calldesk. À chaque fois, le même objectif : comprendre vite, aligner
            l&apos;équipe, livrer ce qui crée de la valeur.
          </p>
          <p>
            Ce qui me distingue en 2026 : je ne me contente pas de spécifier. Je
            ship. En dehors de mes missions, j&apos;ai construit 3 applications
            en autonomie avec l&apos;IA — une app sociale de recettes et de
            courses, un compteur de fléchettes, un site pour un commerce local.
            Pas pour le CV. Pour rester concret dans un métier qui dérive
            facilement vers l&apos;abstraction, et pour comprendre de
            l&apos;intérieur ce que vivent mes équipes techniques.
          </p>
          <p>
            Mon expérience la plus formative : 1er PM chez Pyxo juste après la
            Série A. Deux apps construites de zéro, 5 développeurs, un CTO en
            guise d&apos;EM. Pas de processus existant, pas de playbook. Juste
            les bons arbitrages au bon moment.
          </p>
          <p className="text-zinc-900 font-medium">
            Je cherche un poste de Senior PM, Lead PM, ou 1st PM dans une
            startup avec de l&apos;ambition et une vraie culture produit.
          </p>
        </div>
      </div>
    </section>
  );
}

const sideProjects = [
  {
    name: "Mescla",
    tagline: "App mobile de partage de recettes et de liste de courses",
    problem:
      "Créer un menu de la semaine prend du temps, faire les courses aussi. Avec des proches, c'est encore plus complexe.",
    solution:
      "Une app sociale où tu ajoutes tes recettes, pioches dans celles de tes proches, et génères ta liste de courses en 2 min.",
    stack: ["Next.js", "Supabase", "Tailwind", "Vercel"],
    links: [
      { label: "Voir l'app", href: "https://mescla-recipes.vercel.app/recipes" },
    ],
  },
  {
    name: "Darts Score Counter",
    tagline: "Compteur de score fléchettes — PWA installable",
    problem:
      "Les apps de fléchettes existantes sont surchargées, lentes, ou payantes.",
    solution:
      "Une PWA minimaliste, offline-first, qui démarre en 2 secondes.",
    stack: ["Vite", "React", "PWA"],
    links: [],
  },
  {
    name: "Épice & Tout 2A",
    tagline: "Site vitrine pour une épicerie corse",
    problem:
      "Mon père avait besoin d'une présence en ligne pour son épicerie. Aucun budget agence.",
    solution:
      "Un site complet avec présentation, carte des produits et contact — construit avec Claude, déployé en autonomie.",
    stack: [],
    links: [],
  },
];

function SideProjects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>Side Projects</SectionLabel>
        <p className="text-zinc-500 mb-12 max-w-xl">
          3 apps construites en autonomie avec l&apos;IA, de l&apos;idée à la
          production.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {sideProjects.map((p) => (
            <div
              key={p.name}
              className="border border-zinc-100 rounded-xl p-6 hover:border-zinc-200 hover:shadow-sm transition-all flex flex-col"
            >
              <h3 className="font-semibold text-zinc-900 mb-1">{p.name}</h3>
              <p className="text-xs text-indigo-600 font-medium mb-4">
                {p.tagline}
              </p>
              <div className="space-y-3 text-sm text-zinc-500 flex-1">
                <p>
                  <span className="font-medium text-zinc-700">Problème — </span>
                  {p.problem}
                </p>
                <p>
                  <span className="font-medium text-zinc-700">Solution — </span>
                  {p.solution}
                </p>
              </div>
              {p.stack.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded-md"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
              {p.links.length > 0 && (
                <div className="mt-4 flex gap-3">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      {l.label} →
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const trackRecordItems = [
  {
    company: "Pyxo",
    period: "2021 – 2023",
    domain: "FoodTech",
    tagline: "1er PM · 2 apps de zéro · 5 devs · post-Série A",
    highlight:
      "Grands comptes signés : McDonald's, CROUS, Sushi Shop, Metro.",
    slug: "pyxo",
  },
  {
    company: "Ledger",
    period: "2024",
    domain: "Crypto",
    tagline: "Feature SWAP → 70% du CA de Ledger Live",
    highlight:
      "Delivery dans les délais. Intégrations DEX opérationnelles.",
    slug: "ledger-swap",
  },
  {
    company: "Calldesk",
    period: "2019 – 2021",
    domain: "IA Conversationnelle",
    tagline: "Time-to-production : 6 mois → 2 semaines",
    highlight: "1 CSM suffit là où il fallait 2 devs + 1 CSM.",
    slug: "calldesk",
  },
];

function TrackRecord() {
  return (
    <section id="track-record" className="bg-zinc-50 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>PM Track Record</SectionLabel>
        <p className="text-zinc-500 mb-12 max-w-xl">
          6 ans de delivery en startup et scale-up.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {trackRecordItems.map((item) => (
            <Link
              key={item.slug}
              href={`/case/${item.slug}`}
              className="group border border-zinc-100 bg-white rounded-xl p-6 hover:border-indigo-200 hover:shadow-sm transition-all flex flex-col"
            >
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-bold text-zinc-900 text-lg">
                  {item.company}
                </h3>
                <span className="text-xs text-zinc-400 mt-1">{item.period}</span>
              </div>
              <span className="text-xs font-medium text-indigo-600 mb-4">
                {item.domain}
              </span>
              <p className="text-sm font-semibold text-zinc-800 mb-2 flex-1">
                {item.tagline}
              </p>
              <p className="text-sm text-zinc-500 mb-5">{item.highlight}</p>
              <span className="text-xs font-medium text-indigo-600 group-hover:text-indigo-800 transition-colors">
                Lire le case study →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowIWork() {
  return (
    <section id="how-i-work" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel>Comment je travaille</SectionLabel>
        <div className="grid gap-10 md:grid-cols-2 mt-2">
          <div>
            <h3 className="font-semibold text-zinc-900 mb-3">Méthodes</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Shape Up quand l&apos;équipe a besoin de focus et
              d&apos;itérations courtes. Agile dans les organisations déjà
              structurées. OKRs pour aligner vision et exécution sur le temps
              long. Je m&apos;adapte — ce qui compte c&apos;est que
              l&apos;équipe avance, pas le nom du processus.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 mb-3">
              IA dans ma pratique PM
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              J&apos;utilise l&apos;IA tous les jours : synthèse
              d&apos;interviews utilisateurs, analyse de feedback, rédaction de
              specs, préparation de présentations, exploration de solutions. Ce
              n&apos;est pas une posture — c&apos;est devenu une partie
              intégrante de comment je travaille.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 mb-3">
              IA comme outil de build
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Je ship des apps en autonomie avec Claude Code, Lovable, et
              Supabase. Trois projets en production. Ça m&apos;a rendu meilleur
              PM : je comprends mieux les contraintes techniques, je spécifie
              plus précisément, et je peux tester des idées sans mobiliser un
              dev.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 mb-3">Outils</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Figma",
                "Notion",
                "Jira",
                "Miro",
                "Mixpanel",
                "Metabase",
                "Intercom",
                "Claude Code",
                "Lovable",
                "Bolt.new",
                "Supabase",
              ].map((tool) => (
                <span
                  key={tool}
                  className="text-xs bg-zinc-100 text-zinc-600 px-2.5 py-1 rounded-md"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="bg-zinc-900 text-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Parlons-en.</h2>
        <div className="flex flex-col sm:flex-row gap-6 mb-16">
          <a
            href="mailto:louis.bolatre@gmail.com"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-indigo-500 transition-colors"
          >
            louis.bolatre@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/louisbolatre"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-zinc-700 text-zinc-300 px-6 py-3 rounded-lg text-sm font-medium hover:border-zinc-500 hover:text-white transition-colors"
          >
            LinkedIn →
          </a>
          <a
            href="https://github.com/louisbolatre"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-zinc-700 text-zinc-300 px-6 py-3 rounded-lg text-sm font-medium hover:border-zinc-500 hover:text-white transition-colors"
          >
            GitHub →
          </a>
        </div>
        <p className="text-xs text-zinc-600">
          Ce site a été construit avec{" "}
          <span className="text-zinc-500">Claude Code</span>.
        </p>
      </div>
    </footer>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold text-indigo-600 tracking-widest uppercase mb-4">
      {children}
    </p>
  );
}
