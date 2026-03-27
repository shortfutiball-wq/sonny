const CSS = `
.testimonials-section {
  background: var(--bg-page);
  padding: 100px 0 80px;
}
.testimonials-header {
  text-align: center;
  padding: 0 24px;
  margin-bottom: 60px;
}
.t-eyebrow {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: #777;
  border: 1px solid rgba(0,0,0,.15);
  padding: 4px 14px;
  border-radius: 999px;
  margin-bottom: 20px;
  font-family: var(--font-dm), 'DM Sans', sans-serif;
}
.t-headline {
  font-family: var(--font-anton), Anton, Impact, sans-serif;
  font-size: clamp(52px, 8vw, 96px);
  text-transform: uppercase;
  line-height: .88;
  letter-spacing: -.01em;
  color: #0A0A0A;
}
.t-headline span { display: block; }
.t-sub {
  font-family: var(--font-dm), 'DM Sans', sans-serif;
  font-size: 15px;
  color: #777;
  margin-top: 18px;
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}
.t-columns-wrap {
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 0 24px;
  max-height: 700px;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%);
}
.t-col {
  flex: 1;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.t-col-inner {
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  animation: scrollUp var(--tdur, 20s) linear infinite;
}
@keyframes scrollUp { from{transform:translateY(0)} to{transform:translateY(-50%)} }
.t-col:hover .t-col-inner { animation-play-state: paused; }
.avis-card {
  background: #fff;
  border-radius: 18px;
  padding: 22px 20px;
  border: 1px solid rgba(0,0,0,.08);
  transition: transform .2s ease;
}
.avis-card:hover { transform: translateY(-2px); }
.avis-stars {
  display: flex;
  gap: 2px;
  margin-bottom: 12px;
}
.star-icon {
  width: 14px; height: 14px;
  background: #FF9500;
  clip-path: polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);
}
.avis-text {
  font-family: var(--font-dm), 'DM Sans', sans-serif;
  font-size: 13.5px;
  line-height: 1.6;
  color: #0A0A0A;
}
.avis-footer {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px solid rgba(0,0,0,.08);
}
.avis-avatar-placeholder {
  width: 36px; height: 36px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-anton), Anton, Impact, sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #fff;
  flex-shrink: 0;
}
.avis-name {
  font-family: var(--font-dm), 'DM Sans', sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: #0A0A0A;
  line-height: 1.2;
}
.avis-role {
  font-family: var(--font-dm), 'DM Sans', sans-serif;
  font-size: 11px;
  color: #777;
}
.avis-google-badge {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: var(--font-dm), 'DM Sans', sans-serif;
  font-size: 10px;
  font-weight: 600;
  color: #777;
}
.g-logo {
  width: 14px; height: 14px;
  border-radius: 50%;
  background: conic-gradient(#4285F4 0deg 90deg,#34A853 90deg 180deg,#FBBC05 180deg 270deg,#EA4335 270deg 360deg);
  position: relative;
  flex-shrink: 0;
}
.g-logo::after {
  content: 'G';
  position: absolute;
  inset: 2px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6px;
  font-weight: 900;
  color: #4285F4;
  line-height: 10px;
  text-align: center;
}
@media (max-width: 768px) {
  .t-col:nth-child(2), .t-col:nth-child(3) { display: none; }
}
@media (max-width: 1024px) {
  .t-col:nth-child(3) { display: none; }
}
`;

function Stars() {
  return (
    <div className="avis-stars">
      {[1,2,3,4,5].map(i => <div key={i} className="star-icon" />)}
    </div>
  );
}

function GoogleBadge() {
  return (
    <div className="avis-google-badge">
      <div className="g-logo" />
      Google
    </div>
  );
}

const AVATAR_COLORS: Record<string, string> = {
  K: "#1A5C3A", S: "#B04030", M: "#B06820", A: "#3D3A9F",
  J: "#1A7272", R: "#B04A18", C: "#2A3E8A", T: "#2A6034",
  N: "#8A2850", Y: "#3A4E5E", L: "#6A306A", P: "#7A4E18",
};

interface AvisData {
  init: string;
  name: string;
  role: string;
  text: string;
}

function AvisCard({ d }: { d: AvisData }) {
  return (
    <div className="avis-card">
      <Stars />
      <p className="avis-text">{d.text}</p>
      <div className="avis-footer">
        <div className="avis-avatar-placeholder" style={{ background: AVATAR_COLORS[d.init] ?? "#0A0A0A" }}>{d.init}</div>
        <div>
          <div className="avis-name">{d.name}</div>
          <div className="avis-role">{d.role}</div>
        </div>
        <GoogleBadge />
      </div>
    </div>
  );
}

const COL1: AvisData[] = [
  { init: "K", name: "Karim B.", role: "Restaurateur, Paris 11e", text: "En 3 semaines on a reçu 47 nouveaux avis Google. Avant on en avait peut-être 8 sur toute l'année. Impressionnant." },
  { init: "S", name: "Sophie L.", role: "Coach en ligne", text: "Mon site convertit vraiment maintenant. Avant les gens venaient et repartaient. Aujourd'hui on ferme des ventes directement depuis le site." },
  { init: "M", name: "Mohamed A.", role: "Propriétaire kebab", text: "La carte de fidélité digitale a changé le jeu. Mes clients reviennent 2x plus souvent depuis qu'on l'a mise en place." },
  { init: "A", name: "Amina T.", role: "Fondatrice startup", text: "Résultats rapides et équipe réactive. Exactement ce qu'on cherchait pour notre lancement. Je recommande les yeux fermés." },
];

const COL2: AvisData[] = [
  { init: "J", name: "Julie M.", role: "Gérante spa & bien-être", text: "On est passé de 3.8 à 4.9 étoiles sur Google en deux mois. On reçoit maintenant des clients qui citent nos avis comme raison de venir." },
  { init: "R", name: "Rachid O.", role: "Chef & restaurateur", text: "Le menuboard digital a transformé notre salle. Les clients commandent plus facilement et on a vu nos ventes additionnelles augmenter." },
  { init: "C", name: "Christelle V.", role: "Consultante RH", text: "Très pro, très rapide. Mon site était en ligne en moins d'une semaine et les résultats Google ont suivi dans le mois." },
  { init: "T", name: "Thomas G.", role: "Directeur commercial", text: "L'automatisation des relances nous a économisé facilement 10h par semaine. Ça tourne tout seul, c'est magique." },
];

const COL3: AvisData[] = [
  { init: "N", name: "Nadia H.", role: "Responsable marketing", text: "Notre référencement local a explosé. On apparaît maintenant en premier sur toutes les recherches de notre quartier. Les appels entrants ont doublé." },
  { init: "Y", name: "Youssef K.", role: "Gérant garage auto", text: "Je suis passé de 0 à 30 avis en 6 semaines. Mes concurrents ont mis des années pour ça. Le système est trop bien pensé." },
  { init: "L", name: "Laura D.", role: "Directrice boutique", text: "Le site qu'ils ont fait pour moi est exactement ce que je voulais. Moderne, rapide, et il vend vraiment. ROI en moins d'un mois." },
  { init: "P", name: "Pierre S.", role: "Gérant brasserie", text: "On a gagné 200 nouveaux clients fidèles en deux mois grâce à la carte digitale. Les gens adorent l'appli, c'est devenu un argument de vente." },
];

function TCol({ data, dur }: { data: AvisData[]; dur: string }) {
  const doubled = [...data, ...data];
  return (
    <div className="t-col">
      <div className="t-col-inner" style={{ "--tdur": dur } as React.CSSProperties}>
        {doubled.map((d, i) => <AvisCard key={i} d={d} />)}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <section className="testimonials-section">
        <div className="testimonials-header">
          <div className="t-eyebrow">Avis clients</div>
          <h2 className="t-headline">
            <span>SATISFAIT OU</span>
            <span>REMBOURSÉ.</span>
          </h2>
          <p className="t-sub">Des vrais clients, de vrais résultats. Zéro perte de temps.</p>
        </div>

        <div className="t-columns-wrap">
          <TCol data={COL1} dur="20s" />
          <TCol data={COL2} dur="26s" />
          <TCol data={COL3} dur="22s" />
        </div>
      </section>
    </>
  );
}
