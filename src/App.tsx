import { useEffect, useState } from "react";
import { cvData, uiStrings } from "./cv-data";
import { useI18n } from "./i18n";
import { Nav, type NavItem } from "./components/Nav";
import { Expandable } from "./components/Expandable";
import { BottomCTAs } from "./components/BottomCTAs";

const NAV_ITEMS: NavItem[] = [
  { id: "about", label: uiStrings.brief },
  { id: "experience", label: uiStrings.sections.experience },
  { id: "formation", label: uiStrings.sections.education },
  { id: "competences", label: uiStrings.sections.skills },
  { id: "atouts", label: uiStrings.sections.strengths },
  { id: "autres", label: uiStrings.sections.otherExperience },
  { id: "contact", label: uiStrings.contact },
];
const NAV_IDS = NAV_ITEMS.map((i) => i.id);

function Portrait({ src, alt }: { src: string; alt: string }) {
  const [ok, setOk] = useState(true);
  if (!ok) return null;
  return (
    <figure className="hero-portrait">
      <img src={src} alt={alt} onError={() => setOk(false)} />
    </figure>
  );
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
  const {
    sections,
    nav,
    skipToContent,
    brief,
    contact,
    more,
    less,
    menu,
    menuClose,
    downloadCV,
  } = uiStrings;
  const activeSection = useActiveSection(NAV_IDS);

  return (
    <>
      <a href="#content" className="skip-link">
        {skipToContent[locale]}
      </a>

      <Nav
        items={NAV_ITEMS}
        active={activeSection}
        locale={locale}
        brand={cvData.name}
        navLabel={nav[locale]}
        menuLabel={menu[locale]}
        closeLabel={menuClose[locale]}
      />

      <main className="cv" id="content" tabIndex={-1}>
        <section className="hero" id="top">
          {cvData.photo && (
            <Portrait
              src={`${import.meta.env.BASE_URL}${cvData.photo}`}
              alt={cvData.name}
            />
          )}
          <div className="hero-intro">
            <p>{cvData.summary[locale]}</p>
            <p className="hero-byline">
              <em>{cvData.name}</em> — {cvData.title[locale]}
            </p>
          </div>
        </section>

        <section className="section" id="about" aria-label={brief[locale]}>
          <h2>{brief[locale]}</h2>
          {cvData.note && (
            <div className="brief-note">
              {cvData.note.map((p, i) => (
                <p key={i}>{p[locale]}</p>
              ))}
            </div>
          )}
          <ul className="meta-grid">
            {cvData.contacts
              .filter((c) => !c.href)
              .map((c) => (
                <li key={c.label[locale]}>
                  <span className="meta-label">{c.label[locale]}</span>
                  <span>{c.value}</span>
                </li>
              ))}
            <li>
              <span className="meta-label">{sections.languages[locale]}</span>
              <span>
                {cvData.languages.map((l) => l.name[locale]).join(" · ")}
              </span>
            </li>
          </ul>
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
              title={exp.company}
            >
              <p className="role-line">
                <em>{exp.role[locale]}</em> · {exp.period[locale]}
                {exp.location && <> · {exp.location[locale]}</>}
              </p>
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
              title={ed.school}
            >
              <p className="role-line">
                <em>{ed.degree[locale]}</em> · {ed.period[locale]}
              </p>
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
          <dl className="skill-list">
            {cvData.skills.map((group) => (
              <div className="skill-row" key={group.category[locale]}>
                <dt>
                  <em>{group.category[locale]}</em>
                </dt>
                <dd>{group.items.join(" · ")}</dd>
              </div>
            ))}
            <div className="skill-row">
              <dt>
                <em>{sections.languages[locale]}</em>
              </dt>
              <dd>
                {cvData.languages
                  .map(
                    (l) => `${l.name[locale]} (${l.level[locale].toLowerCase()})`,
                  )
                  .join(" · ")}
              </dd>
            </div>
            <div className="skill-row">
              <dt>
                <em>{sections.interests[locale]}</em>
              </dt>
              <dd>{cvData.interests.map((it) => it[locale]).join(" · ")}</dd>
            </div>
          </dl>
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
                <h3>
                  <em>{s.name[locale]}</em>
                </h3>
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
                <span className="role-org">
                  {e.org}{" "}
                  <span className="role-name">
                    — <em>{e.role[locale]}</em>
                  </span>
                </span>
                <span className="period">{e.period[locale]}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section" id="contact" aria-label={contact[locale]}>
          <h2>{contact[locale]}</h2>
          <ul className="contact-list">
            {cvData.contacts.map((c) => (
              <li key={c.label[locale]}>
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noreferrer">
                    {c.value}
                  </a>
                ) : (
                  <span>{c.value}</span>
                )}
                <span className="contact-label">{c.label[locale]}</span>
              </li>
            ))}
          </ul>
        </section>

        <footer className="footer no-print">
          <span>
            <em>Maxime Lestage</em> — {new Date().getFullYear()}
          </span>
        </footer>
      </main>

      <BottomCTAs
        downloadLabel={downloadCV[locale]}
        contactLabel={contact[locale]}
        groupLabel={nav[locale]}
      />
    </>
  );
}
