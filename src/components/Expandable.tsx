import { useId, useState, type ReactNode } from "react";

interface ExpandableProps {
  title: ReactNode;
  meta: ReactNode;
  moreLabel: string;
  lessLabel: string;
  children: ReactNode;
}

/** Editorial card with an accessible "More info / Close" toggle.
 *  The panel stays in the DOM so it is fully visible when printing. */
export function Expandable({
  title,
  meta,
  moreLabel,
  lessLabel,
  children,
}: ExpandableProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <article className={open ? "exp is-open" : "exp"}>
      <div className="exp-row">
        <div className="exp-head">
          <h3>{title}</h3>
          <div className="exp-meta">{meta}</div>
        </div>
        <button
          type="button"
          className="exp-toggle no-print"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? lessLabel : moreLabel}
        </button>
      </div>
      <div className="exp-panel" id={panelId} hidden={!open}>
        {children}
      </div>
    </article>
  );
}
