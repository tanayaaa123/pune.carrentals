import { fleet } from "../data/fleet.js";

export default function Marquee() {
  const items = [...fleet, ...fleet, ...fleet, ...fleet];
  return (
    <div className="bg-navy-deep border-y border-gold/40 py-4 overflow-hidden" aria-hidden="true">
      <div className="marquee">
        {items.map((c, k) => (
          <span key={k} className="flex items-center font-display text-2xl text-paper whitespace-nowrap">
            <span className="px-8">{c.name}</span>
            <svg width="14" height="14" viewBox="0 0 14 14"><path d="M7 0l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#D4AF37" /></svg>
          </span>
        ))}
      </div>
    </div>
  );
}
