interface Props {
  downloadLabel: string;
  contactLabel: string;
  groupLabel: string;
}

export function BottomCTAs({ downloadLabel, contactLabel, groupLabel }: Props) {
  return (
    <div className="bottom-ctas no-print" role="group" aria-label={groupLabel}>
      <button
        type="button"
        className="cta cta-light"
        onClick={() => window.print()}
      >
        {downloadLabel} <span aria-hidden="true">↓</span>
      </button>
      <a className="cta cta-dark" href="#contact">
        {contactLabel} <span aria-hidden="true">···</span>
      </a>
    </div>
  );
}
