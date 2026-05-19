import { Suspense, lazy, useEffect, useState } from "react";
import { cvData, uiStrings } from "./cv-data";
import { useI18n } from "./i18n";
import { LanguageSwitcher } from "./components/LanguageSwitcher";

const Scene = lazy(() => import("./components/Scene"));

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

export default function App() {
  const { locale } = useI18n();
  const { sections, print } = uiStrings;
  const reducedMotion = usePrefersReducedMotion();

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

      <main className="cv">
        <div className="toolbar no-print">
          <LanguageSwitcher />
          <button
            type="button"
            className="print-btn"
            onClick={() => window.print()}
          >
            {print[locale]}
          </button>
        </div>

        <header className="header">
          <div className="header-main">
            <h1>{cvData.name}</h1>
            <p className="title">{cvData.title[locale]}</p>
            <ul className="contacts">
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
          </div>
          {cvData.photo && (
            <Avatar
              src={`${import.meta.env.BASE_URL}${cvData.photo}`}
              alt={cvData.name}
            />
          )}
        </header>

        <section className="section">
          <h2>{sections.summary[locale]}</h2>
          <p className="summary">{cvData.summary[locale]}</p>
        </section>

        <section className="section">
          <h2>{sections.experience[locale]}</h2>
          {cvData.experiences.map((exp, i) => (
            <article className="item" key={`${exp.company}-${i}`}>
              <div className="item-head">
                <h3>
                  {exp.role[locale]} ·{" "}
                  <span className="org">{exp.company}</span>
                </h3>
                <span className="period">{exp.period[locale]}</span>
              </div>
              {exp.location && (
                <p className="location">{exp.location[locale]}</p>
              )}
              <ul className="highlights">
                {exp.highlights.map((h, j) => (
                  <li key={j}>{h[locale]}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="section">
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

        <section className="section">
          <h2>{sections.education[locale]}</h2>
          {cvData.education.map((ed, i) => (
            <article className="item" key={`${ed.school}-${i}`}>
              <div className="item-head">
                <h3>
                  {ed.degree[locale]} ·{" "}
                  <span className="org">{ed.school}</span>
                </h3>
                <span className="period">{ed.period[locale]}</span>
              </div>
              {ed.details && (
                <ul className="highlights">
                  {ed.details.map((d, j) => (
                    <li key={j}>{d[locale]}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </section>

        <div className="two-col">
          <section className="section">
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
          </section>

          <section className="section">
            <h2>{sections.languages[locale]}</h2>
            <ul className="languages">
              {cvData.languages.map((lang) => (
                <li key={lang.name[locale]}>
                  <strong>{lang.name[locale]}</strong>
                  <span className="level">{lang.level[locale]}</span>
                </li>
              ))}
            </ul>

            <h2 className="spaced">{sections.interests[locale]}</h2>
            <ul className="tags">
              {cvData.interests.map((it) => (
                <li key={it[locale]} className="tag">
                  {it[locale]}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="section">
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

        <footer className="footer no-print">
          <span>Built with Bun · React · React Three Fiber · Vite</span>
        </footer>
      </main>
    </>
  );
}
