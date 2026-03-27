"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

const CSS = `
.portfolio-section {
  padding: 100px 0 80px;
  overflow: hidden;
  background: var(--bg-page);
  position: relative;
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

/* ── Edit mode ─────────────────────────────── */
.portfolio-edit-btn {
  position: absolute;
  top: 22px;
  right: 24px;
  font-family: var(--font-dm), 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .1em;
  background: transparent;
  color: #aaa;
  border: 1px solid rgba(0,0,0,.15);
  border-radius: 999px;
  padding: 6px 14px;
  cursor: pointer;
  transition: background .15s, color .15s, border-color .15s;
  z-index: 20;
}
.portfolio-edit-btn:hover { background: rgba(0,0,0,.06); color: #0A0A0A; border-color: rgba(0,0,0,.3); }
.portfolio-edit-btn.active { background: #0A0A0A; color: #fff; border-color: #0A0A0A; }

.edit-on .scroll-row { animation-play-state: paused !important; }

.pcard-draggable {
  cursor: grab !important;
  transform: none !important;
  transition: box-shadow .15s !important;
}
.pcard-draggable:hover { box-shadow: 0 0 0 2px #0A0A0A; transform: none !important; }
.pcard-dragging { cursor: grabbing !important; box-shadow: 0 0 0 2.5px #2855A0 !important; }

.pcard-pos-badge {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,.8);
  color: #fff;
  font-family: 'Courier New', monospace;
  font-size: 10px;
  padding: 3px 10px;
  border-radius: 999px;
  z-index: 20;
  pointer-events: none;
  white-space: nowrap;
  transition: none;
}

.portfolio-output {
  margin: 16px 24px 0;
  background: #0A0A0A;
  border-radius: 16px;
  padding: 18px 22px 20px;
  font-family: 'Courier New', monospace;
  font-size: 11px;
  color: #666;
  overflow-x: auto;
  line-height: 2;
}
.portfolio-output-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}
.portfolio-output-title {
  font-family: var(--font-dm), 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .1em;
  color: #555;
}
.portfolio-copy-btn {
  background: #fff;
  color: #0A0A0A;
  border: none;
  border-radius: 8px;
  padding: 5px 12px;
  font-family: var(--font-dm), 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity .15s;
}
.portfolio-copy-btn:hover { opacity: .75; }
.portfolio-output .lk { color: #D4FF00; }
.portfolio-output .lv { color: #fff; }
.portfolio-output .lc { color: #444; }
`;

// ── helpers ──────────────────────────────────────────────────────────
function toPct(raw: string): string {
  if (!raw || raw === "center center") return "50% 50%";
  const parts = raw.split(" ");
  const x = parts[0] === "center" ? "50" : parts[0].replace("%", "");
  const y = parts[1] === "center" ? "50" : (parts[1] ?? "50").replace("%", "");
  return `${x}% ${y}%`;
}
function parsePct(pos: string): [number, number] {
  const [x, y] = pos.split(" ").map(p => parseFloat(p) || 50);
  return [x, y];
}
function clamp(v: number, lo = 0, hi = 100) { return Math.max(lo, Math.min(hi, v)); }

// ── data ─────────────────────────────────────────────────────────────
const ROW1 = [
  { img: "/p-savor-luxury.jpg",    tag: "Restaurant",      label: "Savor Luxury",     pos: "50% 30%" },
  { img: "/p-midnight-lounge.webp",tag: "Bar & Lounge",    label: "Midnight Lounge",  pos: "50% 20%" },
  { img: "/p-seafood-lounge.jpg",  tag: "Restaurant",      label: "Seafood & Lounge", pos: "50% 25%" },
  { img: "/p-mcdo-bigmac.jpg",     tag: "Fast Food",       label: "McDonald's",       pos: "50% 50%" },
  { img: "/p-building-beyond.jpg", tag: "Architecture",    label: "Building Beyond",  pos: "50% 15%" },
  { img: "/p-menu-digital.jpg",    tag: "Digital Signage", label: "Menu Digital",     pos: "50% 20%" },
  { img: "/p-roofing.jpg",         tag: "Site Web",        label: "Roofing Pro",      pos: "50% 15%" },
  { img: "/p-charleys.webp",       tag: "Restauration",    label: "Charley's",        pos: "50% 20%" },
  { img: "/p-poke-bowl.jpg",       tag: "Food",            label: "Poke Bowl",        pos: "50% 50%" },
  { img: "/p-visceri-truffes.jpg", tag: "Restaurant",      label: "Visceri",          pos: "50% 25%" },
  { img: "/p-nova-btp.jpg",        tag: "Construction",    label: "Nova BTP",         pos: "50% 50%" },
  { img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=560&q=80", tag: "Traiteur", label: "Le Festin", pos: "50% 40%" },
];

const ROW2 = [
  { img: "/p-precision-living.jpg",  tag: "Immobilier",   label: "Precision Living",  pos: "50% 20%" },
  { img: "/p-tripadvisor-nfc.jpg",   tag: "Avis Google",  label: "NFC Reviews",       pos: "50% 30%" },
  { img: "/p-burger-crispy.jpg",     tag: "Fast Food",    label: "Crispy Burger",     pos: "50% 50%" },
  { img: "/p-apple-wallet.jpg",      tag: "Mobile Pay",   label: "Apple Wallet",      pos: "50% 20%" },
  { img: "/p-mcdo-promo.jpg",        tag: "Social Media", label: "McDonald's Promo",  pos: "50% 50%" },
  { img: "/p-plomberie.jpg",         tag: "Site Web",     label: "Plomberie Pro",     pos: "50% 15%" },
  { img: "/p-shopnow.jpg",           tag: "Architecture", label: "Timeless Design",   pos: "50% 15%" },
  { img: "/p-saveurs.jpg",           tag: "Restaurant",   label: "Pibza",             pos: "50% 20%" },
  { img: "/p-resort-luxury.jpg",     tag: "Hôtellerie",   label: "New Perspectives",  pos: "50% 25%" },
  { img: "/p-cabinet-juridique.jpg", tag: "Juridique",    label: "Cabinet Nadine",    pos: "50% 15%" },
  { img: "/p-bake-lounge.jpg",       tag: "Boulangerie",  label: "The Bake Lounge",   pos: "50% 20%" },
  { img: "/p-deltacorp-new.jpg",     tag: "Restaurant",   label: "Dark Lotus",        pos: "50% 25%" },
];

type CardData = { img?: string; tag?: string; label?: string; placeholder?: boolean; pos?: string };

// ── PCard ─────────────────────────────────────────────────────────────
interface PCardProps {
  card: CardData;
  idx: number;
  editMode: boolean;
  position: string;
  draggingLabel: string | null;
  onPointerDown: (e: React.PointerEvent<HTMLDivElement>, label: string) => void;
  onPointerMove: (e: React.PointerEvent<HTMLDivElement>, label: string) => void;
  onPointerUp: () => void;
}

function PCard({ card, idx, editMode, position, draggingLabel, onPointerDown, onPointerMove, onPointerUp }: PCardProps) {
  if (card.placeholder) {
    return <div className="pcard pcard-placeholder"><span>Ton projet ici</span></div>;
  }
  const isDragging = draggingLabel === card.label;
  return (
    <div
      className={`pcard${editMode ? " pcard-draggable" : ""}${isDragging ? " pcard-dragging" : ""}`}
      onPointerDown={editMode ? e => onPointerDown(e, card.label!) : undefined}
      onPointerMove={editMode ? e => onPointerMove(e, card.label!) : undefined}
      onPointerUp={editMode ? onPointerUp : undefined}
    >
      <Image
        src={card.img!}
        alt={card.label || ""}
        fill
        sizes="(max-width: 600px) 220px, 280px"
        style={{ objectFit: "cover", objectPosition: position, transition: "none" }}
        loading="lazy"
        draggable={false}
      />
      <span className="pcard-tag">{card.tag}</span>
      {editMode
        ? <div className="pcard-pos-badge">{position}</div>
        : <div className="pcard-overlay"><span className="pcard-label">{card.label}</span></div>
      }
    </div>
  );
}

// ── Portfolio ─────────────────────────────────────────────────────────
const INITIAL: Record<string, string> = {};
[...ROW1, ...ROW2].forEach(c => { INITIAL[c.label] = toPct(c.pos); });

export default function Portfolio() {
  const [editMode, setEditMode]     = useState(false);
  const [positions, setPositions]   = useState<Record<string, string>>(INITIAL);
  const [draggingLabel, setDragging] = useState<string | null>(null);
  const [copied, setCopied]          = useState(false);
  const dragRef = useRef<{ label: string; sx: number; sy: number; px: number; py: number } | null>(null);

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>, label: string) => {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    const [px, py] = parsePct(positions[label] ?? "50% 50%");
    dragRef.current = { label, sx: e.clientX, sy: e.clientY, px, py };
    setDragging(label);
  }, [positions]);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>, label: string) => {
    if (!dragRef.current || dragRef.current.label !== label) return;
    const { sx, sy, px, py } = dragRef.current;
    const nx = Math.round(clamp(px - (e.clientX - sx) * 0.3));
    const ny = Math.round(clamp(py - (e.clientY - sy) * 0.3));
    setPositions(prev => ({ ...prev, [label]: `${nx}% ${ny}%` }));
  }, []);

  const onPointerUp = useCallback(() => {
    dragRef.current = null;
    setDragging(null);
  }, []);

  function copyOutput() {
    const lines = [...ROW1, ...ROW2]
      .map(c => `  { label: "${c.label}", pos: "${positions[c.label] ?? c.pos}" },`)
      .join("\n");
    navigator.clipboard.writeText(lines).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const r1 = [...ROW1, ...ROW1];
  const r2 = [...ROW2, ...ROW2];

  const commonProps = { editMode, draggingLabel, onPointerDown, onPointerMove, onPointerUp };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <section className={`portfolio-section${editMode ? " edit-on" : ""}`}>
        <button
          className={`portfolio-edit-btn${editMode ? " active" : ""}`}
          onClick={() => setEditMode(v => !v)}
        >
          {editMode ? "✓ Terminé" : "⊕ Recadrer"}
        </button>

        <div className="portfolio-header">
          <div className="p-eyebrow">Projets</div>
          <h2>Nos réalisations.</h2>
          <p>Focus sur nos +90 collaborations marquantes.</p>
        </div>

        <div className="scroll-track-wrap">
          <div className="scroll-row sleft">
            {r1.map((card, i) => (
              <PCard key={`r1-${i}`} card={card} idx={i}
                position={positions[card.label!] ?? card.pos!}
                {...commonProps} />
            ))}
          </div>
          <div className="scroll-row sright">
            {r2.map((card, i) => (
              <PCard key={`r2-${i}`} card={card} idx={i}
                position={positions[card.label!] ?? card.pos!}
                {...commonProps} />
            ))}
          </div>
        </div>

        {editMode && (
          <div className="portfolio-output">
            <div className="portfolio-output-header">
              <span className="portfolio-output-title">Valeurs à coller dans Portfolio.tsx</span>
              <button className="portfolio-copy-btn" onClick={copyOutput}>
                {copied ? "✓ Copié !" : "Copier tout"}
              </button>
            </div>
            {[...ROW1, ...ROW2].map(c => (
              <div key={c.label}>
                <span className="lk">"{c.label}"</span>
                <span className="lc">: </span>
                <span className="lv">"{positions[c.label] ?? c.pos}"</span>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
