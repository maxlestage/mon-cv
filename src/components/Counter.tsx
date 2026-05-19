import { useEffect, useState } from "react";

function Digit({ speed, reduced }: { speed: number; reduced: boolean }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setN((x) => (x + 1) % 10), speed);
    return () => clearInterval(id);
  }, [speed, reduced]);

  return <span>{n}</span>;
}

/** Decorative 0–9 odometer motif (à la artemshcherban). */
export function Counter({ reduced }: { reduced: boolean }) {
  return (
    <span className="counter" aria-hidden="true">
      <Digit speed={90} reduced={reduced} />
      <Digit speed={130} reduced={reduced} />
      <Digit speed={170} reduced={reduced} />
    </span>
  );
}
