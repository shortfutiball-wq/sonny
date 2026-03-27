const CSS = `
.portfolio-section {
  padding: 100px 0 80px;
  overflow: hidden;
  background: var(--bg-page);
}
.portfolio-header {
  text-align: center;
  margin-bottom: 56px;
  padding: 0 24px;
}
.p-eyebrow {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: #0A0A0A;
  border: 1px solid rgba(0,0,0,.2);
  padding: 5px 16px;
  border-radius: 999px;
  margin-bottom: 18px;
  font-family: var(--font-dm), 'DM Sans', sans-serif;
}
.portfolio-header h2 {
  font-family: var(--font-anton), Anton, Impact, sans-serif;
  font-size: clamp(52px, 8vw, 96px);
  text-transform: uppercase;
  line-height: .9;
  letter-spacing: -.01em;
  color: #0A0A0A;
}
.portfolio-header p {
  font-family: var(--font-dm), 'DM Sans', sans-serif;
  font-size: 15px;
  color: #777;
  margin-top: 14px;
}
.scroll-track-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.scroll-track-wrap::before,
.scroll-track-wrap::after {
  content: '';
  position: absolute;
  top: 0; bottom: 0;
  width: 120px;
  z-index: 2;
  pointer-events: none;
}
.scroll-track-wrap::before {
  left: 0;
  background: linear-gradient(to right, var(--bg-page) 0%, transparent 100%);
}
.scroll-track-wrap::after {
  right: 0;
  background: linear-gradient(to left, var(--bg-page) 0%, transparent 100%);
}
.scroll-row {
  display: flex;
  gap: 14px;
  width: max-content;
}
.scroll-row.sleft  { animation: scrollLeft  36s linear infinite; }
.scroll-row.sright { animation: scrollRight 42s linear infinite; }
@keyframes scrollLeft  { from{transform:translateX(0)} to{transform:translateX(-50%)} }
@keyframes scrollRight { from{transform:translateX(-50%)} to{transform:translateX(0)} }
.scroll-row:hover { animation-play-state: paused; }
.pcard {
  width: 280px;
  height: 180px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
  cursor: pointer;
  background: #1a1a1a;
  transition: transform .2s ease;
}
.pcard:hover { transform: scale(1.02); }
.pcard img {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
  transition: transform .4s ease;
}
.pcard:hover img { transform: scale(1.05); }
.pcard-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,.7) 0%, transparent 55%);
  display: flex;
  align-items: flex-end;
  padding: 14px 16px;
  opacity: 0;
  transition: opacity .25s ease;
}
.pcard:hover .pcard-overlay { opacity: 1; }
.pcard-label {
  font-family: var(--font-anton), Anton, sans-serif;
  font-size: 14px;
  color: #fff;
  letter-spacing: .04em;
  text-transform: uppercase;
}
.pcard-tag {
  position: absolute;
  top: 12px; left: 12px;
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .1em;
  padding: 3px 9px;
  border-radius: 999px;
  background: rgba(255,255,255,.15);
  backdrop-filter: blur(8px);
  color: #fff;
  border: 1px solid rgba(255,255,255,.2);
  font-family: var(--font-dm), 'DM Sans', sans-serif;
}
.pcard-placeholder {
  background: #e8e6e2;
  border: 2px dashed rgba(0,0,0,.12);
  display: flex;
  align-items: center;
  justify-content: center;
}
.pcard-placeholder span {
  font-size: 11px;
  font-weight: 600;
  color: rgba(0,0,0,.25);
  text-transform: uppercase;
  letter-spacing: .1em;
  font-family: var(--font-dm), 'DM Sans', sans-serif;
}
`;

const ROW1 = [
  { img: "/p-savor-luxury.png", tag: "Restaurant", label: "Savor Luxury" },
  { img: "/p-midnight-lounge.webp", tag: "Bar & Lounge", label: "Midnight Lounge" },
  { img: "/p-seafood-lounge.png", tag: "Restaurant", label: "Seafood & Lounge" },
  { img: "/p-mcdo-bigmac.jpg", tag: "Fast Food", label: "McDonald's" },
  { img: "/p-building-beyond.png", tag: "Architecture", label: "Building Beyond" },
  { img: "/p-menu-digital.jpg", tag: "Digital Signage", label: "Menu Digital" },
  { img: "/p-roofing.png", tag: "Site Web", label: "Roofing Pro" },
  { img: "/p-charleys.webp", tag: "Restauration", label: "Charley's" },
  { img: "/p-poke-bowl.png", tag: "Food", label: "Poke Bowl" },
  { img: "/p-visceri-truffes.png", tag: "Restaurant", label: "Visceri" },
  { img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=560&q=80", tag: "Formation", label: "Académie Pro" },
  { img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=560&q=80", tag: "Traiteur", label: "Le Festin" },
];

const ROW2 = [
  { img: "/p-precision-living.png", tag: "Immobilier", label: "Precision Living" },
  { img: "/p-tripadvisor-nfc.jpg", tag: "Avis Google", label: "NFC Reviews" },
  { img: "/p-burger-crispy.png", tag: "Fast Food", label: "Crispy Burger" },
  { img: "/p-apple-wallet.jpg", tag: "Mobile Pay", label: "Apple Wallet" },
  { img: "/p-mcdo-promo.png", tag: "Social Media", label: "McDonald's Promo" },
  { img: "/p-plomberie.jpg", tag: "Site Web", label: "Plomberie Pro" },
  { img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=560&q=80", tag: "E-commerce", label: "ShopNow" },
  { img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=560&q=80", tag: "Food", label: "Saveurs du Monde" },
  { img: "/p-resort-luxury.png", tag: "Hôtellerie", label: "New Perspectives" },
  { img: "/p-cabinet-juridique.png", tag: "Juridique", label: "Cabinet Nadine" },
  { img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=560&q=80", tag: "Corporate", label: "DeltaCorp" },
];

type CardData = { img?: string; tag?: string; label?: string; placeholder?: boolean };

function PCard({ card, idx }: { card: CardData; idx: number }) {
  if (card.placeholder) {
    return (
      <div className="pcard pcard-placeholder" key={idx}>
        <span>Ton projet ici</span>
      </div>
    );
  }
  return (
    <div className="pcard">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={card.img} alt={card.label} loading="lazy" />
      <span className="pcard-tag">{card.tag}</span>
      <div className="pcard-overlay">
        <span className="pcard-label">{card.label}</span>
      </div>
    </div>
  );
}

export default function Portfolio() {
  // Duplicate each row for infinite loop
  const r1 = [...ROW1, ...ROW1];
  const r2 = [...ROW2, ...ROW2];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <section className="portfolio-section">
        <div className="portfolio-header">
          <div className="p-eyebrow">Projets</div>
          <h2>Nos réalisations.</h2>
          <p>Focus sur nos +90 collaborations marquantes.</p>
        </div>

        <div className="scroll-track-wrap">
          <div className="scroll-row sleft">
            {r1.map((card, i) => <PCard key={i} card={card} idx={i} />)}
          </div>
          <div className="scroll-row sright">
            {r2.map((card, i) => <PCard key={i} card={card} idx={i} />)}
          </div>
        </div>
      </section>
    </>
  );
}
