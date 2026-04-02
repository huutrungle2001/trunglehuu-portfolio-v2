import type { CSSProperties } from "react";
import {
  activities,
  awards,
  certifications,
  education,
  experiences,
  focusAreas,
  profile,
  projects,
  publication,
  skillGroups,
} from "@/data/portfolio";

const quickFacts = [
  { label: "Current Track", value: "AI-first full-stack roles" },
  { label: "Primary Stack", value: "Next.js, FastAPI, Supabase" },
  { label: "Research Focus", value: "Optimization and agentic AI" },
];

const stagger = (ms: number): CSSProperties =>
  ({ ["--delay" as string]: `${ms}ms` }) as CSSProperties;

function SectionTitle({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="space-y-2">
      <p className="eyebrow">{label}</p>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-x-clip pb-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <header className="page-shell pt-6 md:pt-9">
        <nav className="glass-panel reveal flex flex-wrap items-center justify-between gap-3 px-4 py-3 md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            Portfolio 2026
          </p>
          <div className="flex flex-wrap gap-2 text-sm">
            <a className="pill-link" href="#projects">
              Projects
            </a>
            <a className="pill-link" href="#experience">
              Experience
            </a>
            <a className="pill-link" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="page-shell mt-8 space-y-14 md:mt-10 md:space-y-18">
        <section className="grid items-end gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="space-y-6 reveal" style={stagger(120)}>
            <p className="eyebrow">{profile.title}</p>
            <h1 className="font-display text-4xl leading-tight text-balance sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
              {profile.summary}
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="button-primary" href={`mailto:${profile.email}`}>
                Email Me
              </a>
              <a
                className="button-secondary"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="button-secondary"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <aside className="panel reveal space-y-5 p-5 md:p-6" style={stagger(260)}>
            <p className="eyebrow">Quick Snapshot</p>
            <div className="space-y-3">
              <p className="text-sm text-[var(--muted)]">{profile.location}</p>
              <p className="text-sm text-[var(--muted)]">{profile.phone}</p>
              <p className="text-sm text-[var(--muted)]">{profile.email}</p>
            </div>
            <div className="space-y-3 pt-2">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="stat-row">
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section id="focus" className="space-y-5">
          <SectionTitle label="Approach" title="How I Execute" />
          <div className="grid gap-4 md:grid-cols-2">
            {focusAreas.map((item, index) => (
              <article
                key={item}
                className="panel reveal p-5"
                style={stagger(80 + index * 80)}
              >
                <p className="leading-relaxed text-[var(--muted)]">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="space-y-5">
          <SectionTitle label="Track Record" title="Experience" />
          <div className="space-y-4">
            {experiences.map((experience, index) => (
              <article
                key={experience.organization}
                className="panel reveal p-5 md:p-6"
                style={stagger(120 + index * 90)}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-2xl">{experience.organization}</h3>
                  <span className="chip">{experience.period}</span>
                </div>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
                  {experience.role} | {experience.location}
                </p>
                <ul className="mt-4 space-y-2">
                  {experience.highlights.map((point) => (
                    <li key={point} className="list-line">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="space-y-5">
          <SectionTitle label="Builds" title="Selected Projects" />
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="panel reveal p-5 md:p-6"
                style={stagger(100 + index * 80)}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  {project.stack}
                </p>
                <h3 className="mt-3 font-display text-2xl">{project.name}</h3>
                <p className="mt-3 leading-relaxed text-[var(--muted)]">
                  {project.summary}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <SectionTitle label="Capabilities" title="Technical Skills" />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group, index) => (
              <article
                key={group.title}
                className="panel reveal p-5"
                style={stagger(100 + index * 70)}
              >
                <h3 className="font-display text-2xl">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <article className="panel reveal space-y-5 p-5 md:p-6" style={stagger(120)}>
            <SectionTitle label="Research" title="Publication" />
            <h3 className="font-display text-2xl leading-snug">{publication.title}</h3>
            <p className="text-[var(--muted)]">{publication.venue}</p>
            <p className="leading-relaxed text-[var(--muted)]">
              {publication.contribution}
            </p>
            <a
              className="button-secondary inline-flex"
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Publication
            </a>

            <div className="border-t border-[var(--line)] pt-5">
              <SectionTitle label="Education" title={education.degree} />
              <p className="mt-3 text-[var(--muted)]">
                {education.school} | {education.period}
              </p>
              <p className="mt-1 text-[var(--muted)]">Major: {education.major}</p>
              <p className="mt-1 text-[var(--muted)]">GPA: {education.gpa}</p>
              <p className="mt-1 text-[var(--muted)]">Thesis: {education.thesis}</p>
            </div>
          </article>

          <article className="panel reveal space-y-5 p-5 md:p-6" style={stagger(220)}>
            <SectionTitle label="Recognition" title="Awards and Activities" />
            <ul className="space-y-2">
              {awards.map((award) => (
                <li key={award} className="list-line">
                  {award}
                </li>
              ))}
            </ul>

            <div className="border-t border-[var(--line)] pt-5">
              <h3 className="font-display text-2xl">Community and Leadership</h3>
              <ul className="mt-3 space-y-2">
                {activities.map((activity) => (
                  <li key={activity} className="list-line">
                    {activity}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-[var(--line)] pt-5">
              <h3 className="font-display text-2xl">Certification</h3>
              <ul className="mt-3 space-y-2">
                {certifications.map((cert) => (
                  <li key={cert} className="list-line">
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </section>

        <section id="contact" className="glass-panel reveal p-6 text-center md:p-8" style={stagger(300)}>
          <p className="eyebrow">Open to New Opportunities</p>
          <h2 className="mx-auto mt-2 max-w-3xl font-display text-3xl leading-tight sm:text-4xl">
            Building practical, reliable AI-first products for real users.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--muted)]">
            If you are hiring for AI-first full-stack roles or collaborative
            research-to-product work, I am happy to connect.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a className="button-primary" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a
              className="button-secondary"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/huutrungle2001
            </a>
          </div>
        </section>
      </main>

      <footer className="page-shell mt-10 pb-8 text-center text-xs uppercase tracking-[0.15em] text-[var(--muted)]">
        Trung Le Huu | Hanoi, Vietnam
      </footer>
    </div>
  );
}
