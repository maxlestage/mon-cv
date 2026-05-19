import { useI18n } from "../i18n";
import type { Locale } from "../types";

const LOCALES: Locale[] = ["fr", "en"];

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="lang-switch" role="group" aria-label="Language / Langue">
      {LOCALES.map((code) => (
        <button
          key={code}
          type="button"
          className={code === locale ? "lang-btn active" : "lang-btn"}
          aria-pressed={code === locale}
          onClick={() => setLocale(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
