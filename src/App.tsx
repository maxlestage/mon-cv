import { Suspense, lazy, useEffect, useState } from "react";
import { cvData, uiStrings } from "./cv-data";
import { useI18n } from "./i18n";
import { Nav, type NavItem } from "./components/Nav";
import { Counter } from "./components/Counter";
import { Expandable } from "./components/Expandable";

const Scene = lazy(() => import("./components/Scene"));

const NAV_ITEMS: NavItem[] = [
  { id: "brief", label: uiStrings.brief },
  { id: "experience", label: uiStrings.sections.experience },
  { id: "formation", label: uiStrings.sections.education },
  { id: "competences", label: uiStrings.sections.skills },
  { id: "atouts", label: uiStrings.sections.strengths },
  { id: "autres", label: uiStrings.sections.otherExperience },
  { id: "contact", label: uiStrings.contact },
];
const NAV_IDS = NAV_ITEMS.map((i) => i.id);

function stamp(): string {
  const d = new Date();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yy = String(d.getFullYear()).slice(-2);
  return `${mm}.${yy}`;
}

function Avatar({ src, alt }: { src: string; alt: string }) {
  const [ok, setOk] = useState(true);
  if (!ok) return null;
  return (
    <div className="avatar">
      <img src={src} alt={alt} onError={() => setOk(false)} />
    </div>
  );
}

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export default function App() {
  const { locale } = useI18n();
  const { sections, print, nav, skipToContent, brief, contact, more, less, actual, cvWordmark } =
    uiStrings;
  const reducedMotion = usePrefersReducedMotion();
  const activeSection = useActiveSection(NAV_IDS);

  return (
    <>
      <div className="bg" aria-hidden="true">
        <div className="bg-gradient" />
        {!reducedMotion && (
          <div className="bg-canvas no-print">
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </div>
        )}
      </div>

      <a href="#content" className="skip-link">
        {skipToContent[locale]}
      </a>

      <Nav
        items={NAV_ITEMS}
        active={activeSection}
        locale={locale}
        brand={cvData.name}
        navLabel={nav[locale]}
        printLabel={print[locale]}
        onPrint={() => window.print()}
      />

      <main className="cv" id="content" tabIndex={-1}>
        <header className="hero">
          <p className="hero-kicker">
            <span>
              {cvWordmark[locale]} — {actual[locale]} ({stamp()})
            </span>
            <Counter reduced={reducedMotion} />
          </p>
          <h1>{cvData.name}</h1>
          <p className="hero-title">{cvData.title[locale]}</p>
        </header>

        <section className="section" id="brief" aria-label={brief[locale]}>
          <h2>{brief[locale]}</h2>
          <div className="brief">
            {cvData.photo && (
              <Avatar
                src={`${import.meta.env.BASE_URL}${cvData.photo}`}
                alt={cvData.name}
              />
            )}
            <p className="summary">{cvData.summary[locale]}</p>
          </div>
        </section>

        <section
          className="section"
          id="experience"
          aria-label={sections.experience[locale]}
        >
          <h2>{sections.experience[locale]}</h2>
          {cvData.experiences.map((exp, i) => (
            <Expandable
              key={`${exp.company}-${i}`}
              moreLabel={more[locale]}
              lessLabel={less[locale]}
              title={
                <>
                  {exp.role[locale]} ·{" "}
                  <span className="org">{exp.company}</span>
                </>
              }
              meta={
                <>
                  <span className="period">{exp.period[locale]}</span>
                  {exp.location && (
                    <span className="dot-sep">{exp.location[locale]}</span>
                  )}
                </>
              }
            >
              <ul className="highlights">
                {exp.highlights.map((h, j) => (
                  <li key={j}>{h[locale]}</li>
                ))}
              </ul>
            </Expandable>
          ))}
        </section>

        <section
          className="section"
          id="formation"
          aria-label={sections.education[locale]}
        >
          <h2>{sections.education[locale]}</h2>
          {cvData.education.map((ed, i) => (
            <Expandable
              key={`${ed.school}-${i}`}
              moreLabel={more[locale]}
              lessLabel={less[locale]}
              title={
                <>
                  {ed.degree[locale]} ·{" "}
                  <span className="org">{ed.school}</span>
                </>
              }
              meta={<span className="period">{ed.period[locale]}</span>}
            >
              {ed.details && (
                <ul className="highlights">
                  {ed.details.map((d, j) => (
                    <li key={j}>{d[locale]}</li>
                  ))}
                </ul>
              )}
            </Expandable>
          ))}
        </section>

        <section
          className="section"
          id="competences"
          aria-label={sections.skills[locale]}
        >
          <h2>{sections.skills[locale]}</h2>
          {cvData.skills.map((group) => (
            <div className="skill-group" key={group.category[locale]}>
              <h4>{group.category[locale]}</h4>
              <ul className="tags">
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <h3 className="subhead">{sections.languages[locale]}</h3>
          <ul className="languages">
            {cvData.languages.map((lang) => (
              <li key={lang.name[locale]}>
                <strong>{lang.name[locale]}</strong>
                <span className="level">{lang.level[locale]}</span>
              </li>
            ))}
          </ul>

          <h3 className="subhead">{sections.interests[locale]}</h3>
          <ul className="tags">
            {cvData.interests.map((it) => (
              <li key={it[locale]} className="tag">
                {it[locale]}
              </li>
            ))}
          </ul>
        </section>

        <section
          className="section"
          id="atouts"
          aria-label={sections.strengths[locale]}
        >
          <h2>{sections.strengths[locale]}</h2>
          <div className="strengths">
            {cvData.strengths.map((s) => (
              <div className="strength" key={s.name[locale]}>
                <h4>{s.name[locale]}</h4>
                <p>{s.description[locale]}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="section"
          id="autres"
          aria-label={sections.otherExperience[locale]}
        >
          <h2>{sections.otherExperience[locale]}</h2>
          <ul className="other-list">
            {cvData.otherExperiences.map((e, i) => (
              <li key={`${e.org}-${i}`}>
                <span>
                  <strong>{e.role[locale]}</strong> · {e.org}
                </span>
                <span className="period">{e.period[locale]}</span>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="section"
          id="contact"
          aria-label={contact[locale]}
        >
          <h2>{contact[locale]}</h2>
          <ul className="contact-list">
            {cvData.contacts.map((c) => (
              <li key={c.label[locale]}>
                <span className="contact-label">{c.label[locale]}</span>
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noreferrer">
                    {c.value}
                  </a>
                ) : (
                  <span>{c.value}</span>
                )}
              </li>
            ))}
          </ul>
        </section>

        <footer className="footer no-print">
          <span>Built with Bun · React · React Three Fiber · Vite</span>
        </footer>
      </main>
    </>
  );
}
