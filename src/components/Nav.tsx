import { LanguageSwitcher } from "./LanguageSwitcher";
import type { Locale, Localized } from "../types";

export interface NavItem {
  id: string;
  label: Localized;
}

interface NavProps {
  items: NavItem[];
  active: string;
  locale: Locale;
  brand: string;
  navLabel: string;
  printLabel: string;
  onPrint: () => void;
}

export function Nav({
  items,
  active,
  locale,
  brand,
  navLabel,
  printLabel,
  onPrint,
}: NavProps) {
  return (
    <nav className="nav no-print" aria-label={navLabel}>
      <div className="nav-inner">
        <div className="nav-bar">
          <a href="#content" className="nav-brand">
            {brand}
          </a>
          <div className="nav-actions">
            <LanguageSwitcher />
            <button type="button" className="print-btn" onClick={onPrint}>
              {printLabel}
            </button>
          </div>
        </div>
        <ul className="nav-links">
          {items.map((it) => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                aria-current={active === it.id ? "true" : undefined}
              >
                {it.label[locale]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
