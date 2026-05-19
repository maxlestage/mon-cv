import { useEffect, useId, useRef, useState } from "react";
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
  menuLabel: string;
  closeLabel: string;
}

export function Nav({
  items,
  active,
  locale,
  brand,
  navLabel,
  menuLabel,
  closeLabel,
}: NavProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Use the first letter of the brand as the small italic mark (e.g. "m")
  const mark = brand.trim().charAt(0).toLowerCase() || "·";

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    firstLinkRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="topbar no-print">
      <div className="topbar-inner">
        <a href="#top" className="topbar-mark" aria-label={brand}>
          {mark}
        </a>
        <button
          ref={triggerRef}
          type="button"
          className="topbar-menu"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? closeLabel : menuLabel}
        </button>
      </div>

      <nav
        id={panelId}
        className="menu-panel"
        aria-label={navLabel}
        hidden={!open}
      >
        <ul className="menu-list">
          {items.map((it, i) => (
            <li key={it.id}>
              <a
                ref={i === 0 ? firstLinkRef : undefined}
                href={`#${it.id}`}
                aria-current={active === it.id ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                <span>{it.label[locale]}</span>
                <span className="menu-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="menu-foot">
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
