import { useId, useState, type ReactNode } from "react";

interface ExpandableProps {
  title: ReactNode;
  moreLabel: string;
  lessLabel: string;
  children: ReactNode;
}

/** Editorial row that expands on click (whole row is clickable).
 *  The panel stays in the DOM and is forced visible when printing. */
export function Expandable({
  title,
  moreLabel,
  lessLabel,
  children,
}: ExpandableProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <article className={open ? "exp is-open" : "exp"}>
      <button
        type="button"
        className="exp-row"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
      >
        <h3 className="exp-title">{title}</h3>
        <span className="exp-toggle" aria-hidden="true">
          {open ? lessLabel : moreLabel}
        </span>
      </button>
      <div className="exp-panel" id={panelId} hidden={!open}>
        {children}
      </div>
    </article>
  );
}
