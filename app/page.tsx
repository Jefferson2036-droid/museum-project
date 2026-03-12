import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero-panel">
        <p className="eyebrow">Sprint 0 foundation</p>
        <h1>{siteConfig.title}</h1>
        <p className="lede">{siteConfig.description}</p>
        <div className="hero-grid" aria-label="Initial site focus areas">
          <article>
            <h2>Origins and early theory</h2>
            <p>
              The first release establishes the platform for tracing the ideas,
              laboratories, and people who shaped artificial intelligence.
            </p>
          </article>
          <article>
            <h2>Milestones and institutions</h2>
            <p>
              Future sprints will layer in structured content for timelines,
              profiles, and landmark moments in the field.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
