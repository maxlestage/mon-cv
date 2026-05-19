import { cvData, uiStrings } from "./cv-data";
import { useI18n } from "./i18n";
import { LanguageSwitcher } from "./components/LanguageSwitcher";

export default function App() {
  const { locale } = useI18n();
  const { sections, print } = uiStrings;

  return (
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
        <h1>{cvData.name}</h1>
        <p className="title">{cvData.title[locale]}</p>
        <ul className="contacts">
          {cvData.contacts.map((c) => (
            <li key={c.label}>
              <span className="contact-label">{c.label}</span>
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
                {exp.role[locale]} · <span className="org">{exp.company}</span>
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
        </section>
      </div>
    </main>
  );
}
