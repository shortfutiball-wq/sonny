import Image from "next/image";

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
.scroll-row.sleft  { animation: scrollLeft  54s linear infinite; will-change: transform; }
.scroll-row.sright { animation: scrollRight 63s linear infinite; will-change: transform; }
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
  object-fit: cover;
  transition: transform .4s ease !important;
}
.pcard:hover img { transform: scale(1.06) !important; }
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
  { img: "/p-savor-luxury.jpg",    tag: "Restaurant",      label: "Savor Luxury",     pos: "50% 30%" },
  { img: "/p-midnight-lounge.webp",tag: "Bar & Lounge",    label: "Midnight Lounge",  pos: "50% 20%" },
  { img: "/p-seafood-lounge.jpg",  tag: "Restaurant",      label: "Seafood & Lounge", pos: "50% 25%" },
  { img: "/p-mcdo-bigmac.jpg",     tag: "Fast Food",       label: "McDonald's",       pos: "46% 25%" },
  { img: "/p-building-beyond.jpg", tag: "Architecture",    label: "Building Beyond",  pos: "50% 15%" },
  { img: "/p-menu-digital.jpg",    tag: "Digital Signage", label: "Menu Digital",     pos: "56% 37%" },
  { img: "/p-roofing.jpg",         tag: "Site Web",        label: "Roofing Pro",      pos: "49% 15%" },
  { img: "/p-charleys.webp",       tag: "Restauration",    label: "Charley's",        pos: "25% 0%"  },
  { img: "/p-poke-bowl.jpg",       tag: "Food",            label: "Poke Bowl",        pos: "49% 14%" },
  { img: "/p-visceri-truffes.jpg", tag: "Restaurant",      label: "Visceri",          pos: "0% 17%"  },
  { img: "/p-nova-btp.jpg",        tag: "Construction",    label: "Nova BTP",         pos: "60% 64%" },
  { img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=560&q=80", tag: "Traiteur", label: "Le Festin", pos: "70% 0%" },
];

const ROW2 = [
  { img: "/p-precision-living.jpg",  tag: "Immobilier",   label: "Precision Living",  pos: "50% 20%" },
  { img: "/p-tripadvisor-nfc.jpg",   tag: "Avis Google",  label: "NFC Reviews",       pos: "48% 23%" },
  { img: "/p-burger-crispy.jpg",     tag: "Fast Food",    label: "Crispy Burger",     pos: "55% 3%"  },
  { img: "/p-apple-wallet.jpg",      tag: "Mobile Pay",   label: "Apple Wallet",      pos: "51% 34%" },
  { img: "/p-mcdo-promo.jpg",        tag: "Social Media", label: "McDonald's Promo",  pos: "48% 36%" },
  { img: "/p-plomberie.jpg",         tag: "Site Web",     label: "Plomberie Pro",     pos: "47% 6%"  },
  { img: "/p-shopnow.jpg",           tag: "Architecture", label: "Timeless Design",   pos: "50% 15%" },
  { img: "/p-saveurs.jpg",           tag: "Restaurant",   label: "Pibza",             pos: "50% 20%" },
  { img: "/p-resort-luxury.jpg",     tag: "Hôtellerie",   label: "New Perspectives",  pos: "50% 25%" },
  { img: "/p-cabinet-juridique.jpg", tag: "Juridique",    label: "Cabinet Nadine",    pos: "50% 15%" },
  { img: "/p-bake-lounge.jpg",       tag: "Boulangerie",  label: "The Bake Lounge",   pos: "50% 20%" },
  { img: "/p-deltacorp-new.jpg",     tag: "Restaurant",   label: "Dark Lotus",        pos: "39% 14%" },
];

type CardData = { img?: string; tag?: string; label?: string; placeholder?: boolean; pos?: string };

function PCard({ card }: { card: CardData }) {
  if (card.placeholder) {
    return (
      <div className="pcard pcard-placeholder">
        <span>Ton projet ici</span>
      </div>
    );
  }
  return (
    <div className="pcard">
      <Image
        src={card.img!}
        alt={card.label || ""}
        fill
        sizes="(max-width: 600px) 220px, 280px"
        style={{ objectFit: "cover", objectPosition: card.pos ?? "50% 50%" }}
        loading="lazy"
      />
      <span className="pcard-tag">{card.tag}</span>
      <div className="pcard-overlay">
        <span className="pcard-label">{card.label}</span>
      </div>
    </div>
  );
}

export default function Portfolio() {
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
            {r1.map((card, i) => <PCard key={i} card={card} />)}
          </div>
          <div className="scroll-row sright">
            {r2.map((card, i) => <PCard key={i} card={card} />)}
          </div>
        </div>
      </section>
    </>
  );
}
