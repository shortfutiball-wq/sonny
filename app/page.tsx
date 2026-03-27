"use client";

import Image from "next/image";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import NavLattic from "./components/NavLattic";
import CtaFooter from "./components/CtaFooter";

/* ─── SVG COMPONENTS ─────────────────────────────────────────── */

function PhoneMockup({ small = false }: { small?: boolean }) {
  const w = small ? 180 : 260;
  const h = small ? 360 : 520;
  const r = small ? 28 : 40;
  return (
    <svg viewBox="0 0 260 520" width={w} height={h} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="258" height="518" rx={r} fill="white" stroke="#D0D0C8" strokeWidth="2"/>
      <rect x="8" y="8" width="244" height="504" rx={r - 4} fill="#F8F8F6"/>
      <rect x="90" y="18" width="80" height="20" rx="10" fill="#0A0A0A"/>
      <text x="20" y="60" fontFamily="Inter,sans-serif" fontSize="10" fill="#666">UGLYCASH ✦</text>
      <text x="240" y="60" fontFamily="Inter,sans-serif" fontSize="10" fill="#666" textAnchor="end">⚙</text>
      <text x="20" y="100" fontFamily="Inter,sans-serif" fontSize="11" fill="#999" letterSpacing="0.5">BALANCE</text>
      <text x="20" y="132" fontFamily="Inter,sans-serif" fontSize="36" fontWeight="700" fill="#0A0A0A">$2,400</text>
      <text x="20" y="148" fontFamily="Inter,sans-serif" fontSize="10" fill="#999">NET / EST</text>
      <rect x="20" y="162" width="100" height="32" rx="16" fill="#0A0A0A"/>
      <text x="70" y="183" fontFamily="Inter,sans-serif" fontSize="12" fill="white" textAnchor="middle">Add</text>
      <rect x="130" y="162" width="110" height="32" rx="16" fill="#EFEFEA"/>
      <text x="185" y="183" fontFamily="Inter,sans-serif" fontSize="12" fill="#0A0A0A" textAnchor="middle">Withdraw</text>
      <text x="20" y="220" fontFamily="Inter,sans-serif" fontSize="10" fill="#999">Rewards pts</text>
      <text x="20" y="242" fontFamily="Inter,sans-serif" fontSize="24" fontWeight="700" fill="#0A0A0A">$070</text>
      <rect x="20" y="258" width="220" height="38" rx="19" fill="#D4FF00"/>
      <text x="130" y="283" fontFamily="Inter,sans-serif" fontSize="12" fontWeight="700" fill="#0A0A0A" textAnchor="middle">Up to 6% Cashback</text>
      <line x1="20" y1="315" x2="240" y2="315" stroke="#E8E8E0" strokeWidth="1"/>
      <circle cx="35" cy="338" r="12" fill="#F0F0EA"/>
      <text x="35" y="343" fontFamily="Inter,sans-serif" fontSize="10" fill="#666" textAnchor="middle">Sp</text>
      <text x="56" y="335" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="600" fill="#0A0A0A">Spotify</text>
      <text x="56" y="348" fontFamily="Inter,sans-serif" fontSize="10" fill="#999">Music</text>
      <text x="240" y="338" fontFamily="Inter,sans-serif" fontSize="11" fill="#0A0A0A" textAnchor="end">-$9.99</text>
      <line x1="20" y1="360" x2="240" y2="360" stroke="#F0F0E8" strokeWidth="1"/>
      <circle cx="35" cy="383" r="12" fill="#F0F0EA"/>
      <text x="35" y="388" fontFamily="Inter,sans-serif" fontSize="10" fill="#666" textAnchor="middle">Am</text>
      <text x="56" y="380" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="600" fill="#0A0A0A">Amazon</text>
      <text x="56" y="393" fontFamily="Inter,sans-serif" fontSize="10" fill="#999">Shopping</text>
      <text x="240" y="383" fontFamily="Inter,sans-serif" fontSize="11" fill="#0A0A0A" textAnchor="end">-$34.50</text>
      <line x1="20" y1="405" x2="240" y2="405" stroke="#F0F0E8" strokeWidth="1"/>
      <circle cx="35" cy="428" r="12" fill="#D4FF00"/>
      <text x="35" y="433" fontFamily="Inter,sans-serif" fontSize="10" fill="#0A0A0A" textAnchor="middle">CB</text>
      <text x="56" y="425" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="600" fill="#0A0A0A">Cashback</text>
      <text x="56" y="438" fontFamily="Inter,sans-serif" fontSize="10" fill="#999">Rewards</text>
      <text x="240" y="428" fontFamily="Inter,sans-serif" fontSize="11" fill="#3a8a52" textAnchor="end">+$2.40</text>
      <line x1="0" y1="470" x2="260" y2="470" stroke="#E8E8E0" strokeWidth="1"/>
      <text x="40" y="494" fontFamily="Inter,sans-serif" fontSize="18" fill="#0A0A0A" textAnchor="middle">⌂</text>
      <text x="100" y="494" fontFamily="Inter,sans-serif" fontSize="18" fill="#999" textAnchor="middle">↔</text>
      <text x="160" y="494" fontFamily="Inter,sans-serif" fontSize="18" fill="#999" textAnchor="middle">◎</text>
      <text x="220" y="494" fontFamily="Inter,sans-serif" fontSize="18" fill="#999" textAnchor="middle">☰</text>
    </svg>
  );
}

function PhoneSmall2() {
  return (
    <svg viewBox="0 0 220 440" width="220" height="440" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="218" height="438" rx="34" fill="white" stroke="#D0D0C8" strokeWidth="2"/>
      <rect x="7" y="7" width="206" height="426" rx="30" fill="#F8F8F6"/>
      <rect x="76" y="14" width="68" height="18" rx="9" fill="#0A0A0A"/>
      <rect x="15" y="50" width="85" height="140" rx="12" fill="#EFEFEA"/>
      <rect x="110" y="50" width="95" height="65" rx="12" fill="#0A0A0A"/>
      <text x="157" y="88" fontFamily="Inter,sans-serif" fontSize="10" fill="white" textAnchor="middle">Portfolio</text>
      <text x="157" y="102" fontFamily="Inter,sans-serif" fontSize="14" fontWeight="700" fill="#D4FF00" textAnchor="middle">+4.2%</text>
      <rect x="110" y="125" width="95" height="65" rx="12" fill="#FF00FF"/>
      <text x="157" y="160" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="700" fill="white" textAnchor="middle">Cashback</text>
      <text x="157" y="176" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="700" fill="white" textAnchor="middle">6% back</text>
      <rect x="15" y="205" width="190" height="100" rx="10" fill="#F0F0EA"/>
      <polyline points="20,295 50,270 80,280 110,250 140,260 160,235 190,220" stroke="#0A0A0A" strokeWidth="2" fill="none"/>
      <text x="20" y="225" fontFamily="Inter,sans-serif" fontSize="9" fill="#999">Performance</text>
      <rect x="15" y="320" width="190" height="40" rx="8" fill="white" stroke="#E8E8E0" strokeWidth="1"/>
      <text x="25" y="345" fontFamily="Inter,sans-serif" fontSize="11" fill="#0A0A0A">🇺🇸 US Bank Account</text>
      <rect x="15" y="368" width="190" height="40" rx="8" fill="white" stroke="#E8E8E0" strokeWidth="1"/>
      <text x="25" y="393" fontFamily="Inter,sans-serif" fontSize="11" fill="#0A0A0A">🇪🇺 EUR Bank Account</text>
    </svg>
  );
}

function MoneyBag() {
  return (
    <svg viewBox="0 0 200 220" width="160" height="176" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="78" y="10" width="44" height="30" rx="8" fill="#1a7a3a"/>
      <ellipse cx="100" cy="10" rx="18" ry="10" fill="#2a9a4a"/>
      <ellipse cx="100" cy="140" rx="75" ry="80" fill="#2ecc5a"/>
      <text x="100" y="158" fontFamily="Anton,Impact,sans-serif" fontSize="60" fill="white" textAnchor="middle">$</text>
      <ellipse cx="72" cy="100" rx="18" ry="26" fill="#4ae87a" opacity="0.5"/>
    </svg>
  );
}

function RiskBag() {
  return (
    <svg viewBox="0 0 180 200" width="150" height="167" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="60" width="140" height="130" rx="14" fill="#FF4500"/>
      <rect x="65" y="20" width="50" height="50" rx="8" fill="none" stroke="#FF4500" strokeWidth="10"/>
      <text x="90" y="118" fontFamily="Anton,Impact,sans-serif" fontSize="30" fill="white" textAnchor="middle" letterSpacing="2">RISK</text>
      <rect x="20" y="155" width="140" height="16" fill="#FF6A3A" opacity="0.5"/>
      <text x="90" y="178" fontFamily="Inter,sans-serif" fontSize="22" fontWeight="900" fill="white" textAnchor="middle">!</text>
    </svg>
  );
}

function Eagle() {
  return (
    <svg viewBox="0 0 300 200" width="240" height="160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M150 100 C120 60 60 30 10 50 C40 60 70 70 90 90 C60 75 30 80 10 95 C40 90 75 95 95 105 C70 100 45 110 30 125 C60 115 90 112 110 115 Z" fill="#333"/>
      <path d="M150 100 C180 60 240 30 290 50 C260 60 230 70 210 90 C240 75 270 80 290 95 C260 90 225 95 205 105 C230 100 255 110 270 125 C240 115 210 112 190 115 Z" fill="#333"/>
      <ellipse cx="150" cy="105" rx="28" ry="45" fill="#1a1a1a"/>
      <circle cx="150" cy="65" r="22" fill="#1a1a1a"/>
      <circle cx="150" cy="62" r="16" fill="#666"/>
      <path d="M150 68 L165 78 L150 75 Z" fill="#888"/>
      <circle cx="155" cy="60" r="4" fill="#1a1a1a"/>
      <circle cx="156" cy="59" r="1.5" fill="white"/>
      <path d="M138 148 L128 162 M138 148 L135 165 M138 148 L142 164" stroke="#444" strokeWidth="3" strokeLinecap="round"/>
      <path d="M162 148 L152 162 M162 148 L159 165 M162 148 L166 164" stroke="#444" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

function CreditCard() {
  return (
    <svg viewBox="0 0 320 200" width="280" height="175" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" rx="16" fill="#111111"/>
      <rect x="24" y="60" width="44" height="34" rx="6" fill="#888" opacity="0.7"/>
      <line x1="24" y1="77" x2="68" y2="77" stroke="#666" strokeWidth="1"/>
      <line x1="46" y1="60" x2="46" y2="94" stroke="#666" strokeWidth="1"/>
      <text x="24" y="135" fontFamily="Inter,monospace" fontSize="13" fill="#666" letterSpacing="3">•••• •••• •••• 4821</text>
      <text x="24" y="172" fontFamily="Anton,Impact,sans-serif" fontSize="16" fill="white" letterSpacing="2">UGLYCASH</text>
      <text x="280" y="172" fontFamily="Inter,sans-serif" fontSize="18" fontWeight="900" fontStyle="italic" fill="white" textAnchor="end">VISA</text>
      <path d="M270 50 C278 42 278 28 270 20" stroke="white" strokeWidth="2.5" fill="none" opacity="0.7"/>
      <path d="M263 57 C275 45 275 25 263 13" stroke="white" strokeWidth="2.5" fill="none" opacity="0.5"/>
      <circle cx="260" cy="80" r="18" fill="none" stroke="#444" strokeWidth="1"/>
      <circle cx="260" cy="80" r="12" fill="#2a2a2a"/>
    </svg>
  );
}

function IconSend() {
  return (
    <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
      <rect width="40" height="40" rx="10" fill="#0A0A0A"/>
      <path d="M12 20 L28 12 L22 20 L28 28 Z" fill="white"/>
    </svg>
  );
}

function IconReceive() {
  return (
    <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
      <rect width="40" height="40" rx="10" fill="#0A0A0A"/>
      <path d="M28 20 L12 12 L18 20 L12 28 Z" fill="white"/>
    </svg>
  );
}

function IconATM() {
  return (
    <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
      <rect width="40" height="40" rx="10" fill="#0A0A0A"/>
      <rect x="10" y="13" width="20" height="14" rx="2" stroke="white" strokeWidth="1.5" fill="none"/>
      <line x1="10" y1="18" x2="30" y2="18" stroke="white" strokeWidth="1.5"/>
      <rect x="16" y="29" width="8" height="4" rx="1" fill="white"/>
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
      <rect width="40" height="40" rx="10" fill="#0A0A0A"/>
      <circle cx="20" cy="20" r="9" stroke="white" strokeWidth="1.5" fill="none"/>
      <ellipse cx="20" cy="20" rx="4" ry="9" stroke="white" strokeWidth="1.5" fill="none"/>
      <line x1="11" y1="20" x2="29" y2="20" stroke="white" strokeWidth="1.5"/>
    </svg>
  );
}

function StickerPack() {
  return (
    <div style={{ position: "relative", width: "100%", height: "320px" }}>
      <div style={{ position: "absolute", top: "20px", left: "60px", transform: "rotate(-8deg)" }}>
        <MoneyBag />
      </div>
      <div style={{ position: "absolute", top: "10px", right: "40px", transform: "rotate(6deg)" }}>
        <RiskBag />
      </div>
      <div style={{
        position: "absolute",
        bottom: "20px",
        left: "20px",
        background: "#D4FF00",
        padding: "10px 18px",
        borderRadius: "8px",
        transform: "rotate(-5deg)",
        fontFamily: "var(--font-anton), Anton, Impact, sans-serif",
        fontSize: "22px",
        color: "#0A0A0A",
      }}>
        $$$
      </div>
      <div style={{
        position: "absolute",
        bottom: "60px",
        right: "60px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        background: "#00CFFF",
        transform: "rotate(12deg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-anton), Anton, Impact, sans-serif",
        fontSize: "11px",
        color: "#0A0A0A",
        textAlign: "center",
        lineHeight: 1.1,
      }}>
        FREE<br/>CASH
      </div>
    </div>
  );
}

/* ─── NAVBAR ─────────────────────────────────────────────────── */

function Navbar() {
  return (
    <nav style={{
      background: "var(--bg-dark)",
      height: "56px",
      position: "sticky",
      top: 0,
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 40px",
    }}>
      <span className="font-anton" style={{ color: "white", fontSize: "18px", letterSpacing: "0.05em" }}>
        UGLYCASH
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div style={{ display: "flex", gap: "16px" }}>
          {["★", "♡", "⬆"].map((icon, i) => (
            <button key={i} style={{ background: "none", border: "none", color: "white", fontSize: "18px", cursor: "pointer", opacity: 0.8 }}>
              {icon}
            </button>
          ))}
        </div>
        <button style={{
          background: "white", color: "#0A0A0A", border: "none",
          borderRadius: "100px", padding: "8px 20px", fontSize: "12px",
          fontWeight: 700, fontFamily: "var(--font-inter), Inter, sans-serif", cursor: "pointer",
        }}>
          Get the app
        </button>
      </div>
    </nav>
  );
}

/* ─── HERO ───────────────────────────────────────────────────── */

function Hero() {
  return (
    <section style={{
      background: "var(--bg-page)",
      textAlign: "center",
      padding: "80px 0 60px",
      position: "relative",
      overflow: "hidden",
    }}>
      <div className="container-uc" style={{ position: "relative" }}>
        <h1 className="font-anton" style={{
          fontSize: "clamp(92px, 14vw, 154px)",
          lineHeight: 0.88,
          letterSpacing: "-0.01em",
          textTransform: "uppercase",
          color: "var(--text-primary)",
        }}>
          PLUS DE CLIENTS,
          <br />
          TOUT SIMPLEMENT
        </h1>

        <div style={{
          marginTop: "32px",
          position: "relative",
          width: "320px",
          height: "650px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <Image
            src="/phone-lattic.png"
            alt="App Lattic"
            fill
            quality={100}
            priority
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>

        <p style={{
          fontFamily: "var(--font-inter), Inter, sans-serif",
          fontSize: "14px",
          color: "var(--text-muted)",
          marginTop: "24px",
        }}>
          Agence experte en référencement Google.
        </p>
      </div>
    </section>
  );
}

/* ─── SERVICES BENTO ─────────────────────────────────────────── */

const AUTO_SQUARES = [
  true, true, false, true, false, true,
  false, true, true, false, true, false,
  true, false, true, true, false, true,
  true, true, false, false, true, false,
];

function ServicesSection() {
  return (
    <section style={{ background: "var(--bg-page)", padding: "80px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 48px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{
            display: "inline-block",
            fontFamily: "var(--font-dm),'DM Sans',sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: ".14em",
            textTransform: "uppercase",
            color: "#777",
            border: "1px solid rgba(0,0,0,.15)",
            padding: "4px 14px",
            borderRadius: "999px",
            marginBottom: "20px",
          }}>Expertise</div>
          <h2 className="font-anton" style={{
            fontSize: "clamp(48px, 7vw, 88px)",
            lineHeight: 0.9,
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
            color: "#0A0A0A",
            display: "block",
          }}>
            TOUT CE DONT<br />VOUS AVEZ BESOIN.
          </h2>
        </div>

        {/* Bento grid */}
        <div className="svc-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "10px",
        }}>

          {/* C1 — Site haute conversion — 7 cols, noir */}
          <div className="svc-card" style={{
            gridColumn: "span 7",
            background: "var(--c1-bg)",
            color: "white",
            minHeight: "240px",
            animationDelay: ".05s",
          }}>
            <span className="svc-card-num" style={{ color: "rgba(255,255,255,.2)" }}>01</span>
            <span className="svc-card-tag" style={{ background: "white", color: "#000" }}>Web</span>
            <div className="svc-card-title">Site haute<br/>conversion</div>
            <p className="svc-card-body" style={{ color: "rgba(255,255,255,.4)" }}>
              Un site conçu pour transformer chaque visiteur en client. Design percutant, chargement éclair, copywriting qui vend.
            </p>
            <span className="svc-bg-text" style={{ color: "rgba(255,255,255,.04)", right: "-20px", bottom: "-18px" }}>WEB</span>
            {/* Visual bars */}
            <div className="svc-c1-visual" style={{
              position: "absolute", right: "26px", top: "50%",
              transform: "translateY(-50%)",
              display: "flex", flexDirection: "column", gap: "5px",
            }}>
              {[
                { w: "88px", active: true },
                { w: "128px", active: false },
                { w: "100px", active: true },
                { w: "68px", active: false },
                { w: "118px", active: false },
              ].map((bar, i) => (
                <div key={i} style={{
                  height: "5px",
                  width: bar.w,
                  borderRadius: "3px",
                  background: bar.active ? "rgba(255,255,255,.55)" : "rgba(255,255,255,.1)",
                }}/>
              ))}
            </div>
          </div>

          {/* C2 — Référencement Google — 5 cols */}
          <div className="svc-card" style={{
            gridColumn: "span 5",
            background: "#DFF0E4",
            color: "#0A0A0A",
            minHeight: "240px",
            border: "1px solid rgba(0,0,0,.07)",
            animationDelay: ".10s",
          }}>
            <span className="svc-card-num">02</span>
            <span className="svc-card-tag" style={{ background: "#1A5C3A", color: "#fff" }}>SEO</span>
            <div className="svc-card-title">Référencement<br/>Google</div>
            <p className="svc-card-body" style={{ color: "rgba(0,0,0,.5)" }}>
              Apparaître en tête des résultats locaux. Plus de visibilité, plus de clients qui vous trouvent eux-mêmes.
            </p>
            <div style={{ display: "flex", gap: "3px", marginTop: "12px" }}>
              {[1,2,3,4,5].map((i) => (
                <div key={i} style={{
                  width: "18px", height: "18px",
                  background: "#1A5C3A",
                  clipPath: "polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)",
                }}/>
              ))}
            </div>
            <span className="svc-bg-text" style={{ color: "rgba(26,92,58,.07)", right: "-10px", bottom: "-18px" }}>SEO</span>
          </div>

          {/* C3 — Carte fidélité — 4 cols */}
          <div className="svc-card" style={{
            gridColumn: "span 4",
            background: "#FFFFFF",
            color: "#0A0A0A",
            border: "1px solid rgba(0,0,0,.07)",
            minHeight: "210px",
            animationDelay: ".15s",
          }}>
            <span className="svc-card-num">03</span>
            <span className="svc-card-tag" style={{ background: "#0A0A0A", color: "#fff" }}>Fidélité</span>
            <div className="svc-card-title">Carte de fidélité<br/>digitale</div>
            <p className="svc-card-body" style={{ color: "#777" }}>
              Zéro papier. Vos clients reviennent plus souvent grâce à un programme dans leur téléphone.
            </p>
            <div style={{
              position: "absolute", bottom: "24px", right: "18px",
              width: "72px", height: "46px", background: "#0A0A0A",
              borderRadius: "7px", transform: "rotate(8deg)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ fontFamily: "var(--font-anton),Anton,sans-serif", fontSize: "8px", color: "rgba(255,255,255,.55)", letterSpacing: ".08em" }}>CARTE</span>
            </div>
            <span className="svc-bg-text" style={{ color: "rgba(0,0,0,.04)", right: "-15px", bottom: "-10px" }}>VIP</span>
          </div>

          {/* C4 — Avis Google — 4 cols */}
          <div className="svc-card" style={{
            gridColumn: "span 4",
            background: "#F5E5D0",
            color: "#0A0A0A",
            border: "1px solid rgba(0,0,0,.07)",
            minHeight: "210px",
            animationDelay: ".20s",
          }}>
            <span className="svc-card-num">04</span>
            <span className="svc-card-tag" style={{ background: "#8A4010", color: "#fff" }}>Réputation</span>
            <div className="svc-card-title">Avis Google<br/>certifiés</div>
            <p className="svc-card-body" style={{ color: "#777" }}>
              Collectez de vrais avis 5 étoiles automatiquement. Votre réputation en pilote automatique.
            </p>
            <div style={{
              position: "absolute", bottom: "24px", right: "18px",
              display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "2px",
            }}>
              <span style={{ fontFamily: "var(--font-anton),Anton,sans-serif", fontSize: "34px", color: "#0A0A0A", lineHeight: 1, letterSpacing: "-.02em" }}>5.0</span>
              <span style={{ fontSize: "8px", fontWeight: 700, color: "#777", letterSpacing: ".08em", textTransform: "uppercase" }}>Google Rating</span>
            </div>
            <span className="svc-bg-text" style={{ color: "rgba(0,0,0,.04)", right: "-10px", bottom: "-10px" }}>★★★</span>
          </div>

          {/* C5 — Menuboard & flyers — 4 cols */}
          <div className="svc-card" style={{
            gridColumn: "span 4",
            background: "#1C2E40",
            color: "white",
            minHeight: "210px",
            animationDelay: ".25s",
          }}>
            <span className="svc-card-num" style={{ color: "rgba(255,255,255,.2)" }}>05</span>
            <span className="svc-card-tag" style={{
              background: "rgba(255,255,255,.12)", color: "rgba(255,255,255,.8)",
              border: "1px solid rgba(255,255,255,.15)",
            }}>Design</span>
            <div className="svc-card-title">Menuboard<br/>&amp; flyers</div>
            <p className="svc-card-body" style={{ color: "rgba(255,255,255,.4)" }}>
              Supports visuels qui donnent faim. Menuboards digitaux, flyers et affiches qui font vendre.
            </p>
            <div style={{
              position: "absolute", bottom: "24px", right: "18px",
              display: "flex", flexDirection: "column", gap: "4px", alignItems: "flex-end",
            }}>
              {["52px","68px","44px","60px"].map((w, i) => (
                <div key={i} style={{ height: "4px", width: w, borderRadius: "2px", background: "rgba(255,255,255,.18)" }}/>
              ))}
            </div>
            <span className="svc-bg-text" style={{ color: "rgba(255,255,255,.05)", right: "-10px", bottom: "-10px" }}>ART</span>
          </div>

          {/* C6 — Automatisation — 12 cols */}
          <div className="svc-card svc-c6" style={{
            gridColumn: "span 12",
            background: "#E5EDF8",
            color: "#0A0A0A",
            border: "1px solid rgba(0,0,0,.07)",
            padding: "28px 36px",
            display: "flex",
            alignItems: "center",
            gap: "48px",
            minHeight: 0,
            animationDelay: ".30s",
          }}>
            <div style={{ flex: 1 }}>
              <span className="svc-card-num" style={{ color: "rgba(0,0,0,.2)", marginBottom: "10px" }}>06</span>
              <span className="svc-card-tag" style={{ background: "#0A0A0A", color: "#fff", marginBottom: "10px" }}>IA &amp; Auto</span>
              <div className="svc-card-title" style={{ fontSize: "36px" }}>Automatisation business</div>
              <p className="svc-card-body" style={{ color: "#777", maxWidth: "500px" }}>
                Relances clients, confirmations de réservation, rappels d&apos;avis, newsletters — tout tourne sans que vous leviez le petit doigt.
              </p>
            </div>
            {/* Automation dot grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(6,1fr)",
              gap: "5px",
              flexShrink: 0,
            }}>
              {AUTO_SQUARES.map((on, i) => (
                <div key={i} style={{
                  width: "10px", height: "10px", borderRadius: "2px",
                  background: on ? "#0A0A0A" : "rgba(0,0,0,.1)",
                }}/>
              ))}
            </div>
            <span className="svc-bg-text" style={{
              color: "rgba(0,0,0,.04)",
              right: "36px", top: "50%", transform: "translateY(-50%)",
              fontSize: "140px",
            }}>AUTO</span>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─── UNUSED BELOW — kept for SVG helpers used elsewhere ─────── */
/* ─── WHAT UGLYCASH ENABLES ──────────────────────────────────── */

function BankListCard() {
  const banks = [
    { flag: "🇺🇸", name: "U.S. Bank Account", sub: "Standard at most US banks" },
    { flag: "🇪🇺", name: "EUR Bank Account", sub: "Standard European SEPA" },
    { flag: "🌐", name: "WIN Bank Account", sub: "International transfers" },
  ];
  return (
    <div style={{ background: "white", border: "1px solid var(--border-light)", borderRadius: "16px", padding: "24px" }}>
      {banks.map((bank, i) => (
        <div key={bank.name}>
          {i > 0 && <div style={{ height: "1px", background: "var(--border-light)" }}/>}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontSize: "22px" }}>{bank.flag}</span>
              <div>
                <p style={{ fontFamily: "var(--font-inter),Inter,sans-serif", fontSize: "13px", fontWeight: 600, color: "var(--text-primary)" }}>{bank.name}</p>
                <p style={{ fontFamily: "var(--font-inter),Inter,sans-serif", fontSize: "11px", color: "var(--text-muted)" }}>{bank.sub}</p>
              </div>
            </div>
            <button style={{
              background: "none", border: "1px solid #D0D0C8", borderRadius: "100px",
              padding: "5px 14px", fontSize: "11px", fontWeight: 600,
              fontFamily: "var(--font-inter),Inter,sans-serif", color: "var(--text-primary)", cursor: "pointer",
            }}>Open</button>
          </div>
        </div>
      ))}
    </div>
  );
}

function WhatEnables() {
  return (
    <section style={{ background: "var(--bg-page)", padding: "80px 0" }}>
      <div className="container-uc">
        <h2 style={{ fontFamily: "var(--font-inter),Inter,sans-serif", fontSize: "28px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "32px" }}>
          What UGLYCASH enables
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "14px", marginBottom: "14px" }}>
          <BankListCard />
          <div style={{ background: "var(--bg-dark)", borderRadius: "16px", padding: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ transform: "rotate(8deg)" }}><CreditCard /></div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "14px", marginBottom: "14px" }}>
          <p style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "var(--font-inter),Inter,sans-serif", lineHeight: 1.5 }}>
            <strong style={{ color: "var(--text-primary)", fontWeight: 700 }}>Multiple ways to get paid</strong><br/>
            From US, EU and MLS bank accounts, crypto, and transfers — all in one place.
          </p>
          <p style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "var(--font-inter),Inter,sans-serif", lineHeight: 1.5 }}>
            <strong style={{ color: "var(--text-primary)", fontWeight: 700 }}>Everyday spending, made simple</strong><br/>
            Cards with up to 6% cashback, and easy bank withdrawals.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
          <div style={{ background: "white", border: "1px solid var(--border-light)", borderRadius: "16px", padding: "24px", display: "flex", gap: "16px", alignItems: "center", justifyContent: "center" }}>
            <PhoneMockup small />
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {["BTC +12%", "ETH +4%", "SOL +8%"].map((t) => (
                <div key={t} style={{ background: "var(--bg-page)", borderRadius: "8px", padding: "8px 12px", fontSize: "12px", fontWeight: 600, fontFamily: "var(--font-inter),Inter,sans-serif", color: "#3a8a52", whiteSpace: "nowrap" }}>{t}</div>
              ))}
            </div>
          </div>
          <div style={{ background: "var(--accent-mag)", borderRadius: "16px", padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "24px" }}>
              <IconSend /><IconReceive /><IconATM /><IconGlobe />
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-inter),Inter,sans-serif", fontSize: "16px", fontWeight: 700, color: "#0A0A0A", marginBottom: "6px" }}>Money that moves freely</p>
              <p style={{ fontFamily: "var(--font-inter),Inter,sans-serif", fontSize: "12px", color: "#0A0A0A", opacity: 0.7 }}>Bridge between crypto and banks, locally and across borders.</p>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
          <p style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "var(--font-inter),Inter,sans-serif", lineHeight: 1.5 }}>
            <strong style={{ color: "var(--text-primary)", fontWeight: 700 }}>Follow traders in real-time</strong><br/>
            Track any asset or chain with a single view. Supports Solana, Base, Binance Smart Chain and more.
          </p>
          <p style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "var(--font-inter),Inter,sans-serif", lineHeight: 1.5 }}>
            <strong style={{ color: "var(--text-primary)", fontWeight: 700 }}>Money that moves freely</strong><br/>
            Bridge between crypto and banks, locally and across borders.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── REGULATORY CLARITY — 2-COL ─────────────────────────────── */

function RegulatoryClarity1() {
  return (
    <section style={{ background: "var(--bg-page)", padding: "80px 0" }}>
      <div className="container-uc">
        <h2 style={{ fontFamily: "var(--font-inter),Inter,sans-serif", fontSize: "28px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "32px" }}>
          Regulatory clarity
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
          <div style={{ background: "white", border: "1px solid var(--border-light)", borderRadius: "16px", padding: "32px", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
            <div style={{ opacity: 0.6 }}><Eagle /></div>
            <PhoneMockup small />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ background: "var(--bg-page)", border: "1px solid var(--border-light)", borderRadius: "16px", padding: "32px", display: "flex", alignItems: "center", justifyContent: "center", flex: 1 }}>
              <RiskBag />
            </div>
            <div style={{ background: "var(--accent-mag)", borderRadius: "16px", padding: "32px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
              <p style={{ fontFamily: "var(--font-inter),Inter,sans-serif", fontSize: "16px", fontWeight: 700, color: "#0A0A0A", marginBottom: "6px" }}>Money that moves freely</p>
              <p style={{ fontFamily: "var(--font-inter),Inter,sans-serif", fontSize: "12px", color: "#0A0A0A", opacity: 0.7, lineHeight: 1.5 }}>Bridge between crypto and banks, locally and across borders.</p>
            </div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginTop: "16px" }}>
          <p style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "var(--font-inter),Inter,sans-serif", lineHeight: 1.5 }}>
            <strong style={{ color: "var(--text-primary)", fontWeight: 700 }}>Follow traders in real-time</strong><br/>
            Track any asset on chain with a single view. Supports Solana, Base, Binance Smart Chain and more.
          </p>
          <p style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "var(--font-inter),Inter,sans-serif", lineHeight: 1.5 }}>
            <strong style={{ color: "var(--text-primary)", fontWeight: 700 }}>Money that moves freely</strong><br/>
            Bridge between crypto and banks, locally and across borders.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── REGULATORY CLARITY — LIME FULL BLEED ───────────────────── */

function RegulatoryClarity2() {
  return (
    <section style={{ background: "var(--accent-lime)", width: "100%", padding: "80px 0", position: "relative", overflow: "hidden" }}>
      <div className="container-uc" style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: "0", top: "50%", transform: "translateY(-50%)", opacity: 0.6 }}>
          <Eagle />
        </div>
        <h2 className="font-anton" style={{ fontSize: "clamp(60px, 9vw, 110px)", lineHeight: 0.88, textTransform: "uppercase", color: "var(--text-primary)", textAlign: "center", letterSpacing: "-0.01em" }}>
          GROW MONEY<br />GLOBALLY.
        </h2>
        <div style={{ position: "absolute", right: "0", top: "50%", transform: "translateY(-50%) rotate(6deg)" }}>
          <RiskBag />
        </div>
      </div>
    </section>
  );
}

/* ─── FROM THE FIELD ─────────────────────────────────────────── */

function FromTheField() {
  return (
    <section style={{ background: "var(--bg-dark)", padding: "60px 0" }}>
      <div className="container-uc">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
          <h2 style={{ fontFamily: "var(--font-inter),Inter,sans-serif", fontSize: "22px", fontWeight: 700, color: "white" }}>From the field</h2>
          <button style={{ background: "white", color: "#0A0A0A", border: "none", borderRadius: "100px", padding: "7px 16px", fontSize: "12px", fontWeight: 700, fontFamily: "var(--font-inter),Inter,sans-serif", cursor: "pointer" }}>More videos</button>
        </div>
        <div style={{ width: "100%", aspectRatio: "16/9", background: "#111", borderRadius: "12px", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #0A0A0A 0%, #1a1a2e 50%, #0A0A0A 100%)" }}/>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "#0A0A0A", clipPath: "polygon(0 60%, 5% 40%, 8% 40%, 8% 20%, 12% 20%, 12% 35%, 15% 35%, 15% 10%, 19% 10%, 19% 35%, 22% 35%, 22% 25%, 26% 25%, 26% 35%, 30% 35%, 30% 15%, 34% 15%, 34% 35%, 38% 35%, 38% 50%, 42% 50%, 42% 30%, 46% 30%, 46% 45%, 50% 45%, 50% 20%, 54% 20%, 54% 45%, 58% 45%, 58% 35%, 62% 35%, 62% 15%, 66% 15%, 66% 35%, 70% 35%, 70% 45%, 75% 45%, 75% 25%, 79% 25%, 79% 40%, 83% 40%, 83% 30%, 87% 30%, 87% 50%, 90% 50%, 90% 60%, 95% 40%, 100% 40%, 100% 100%, 0 100%)" }}/>
          <div style={{ position: "absolute", left: "40px", top: "50%", transform: "translateY(-50%)" }}>
            <span className="font-anton" style={{ fontSize: "clamp(60px, 8vw, 100px)", color: "white", letterSpacing: "0.05em", lineHeight: 0.9 }}>THE</span>
          </div>
          <div style={{ position: "absolute", right: "40px", top: "50%", transform: "translateY(-50%)" }}>
            <span className="font-anton" style={{ fontSize: "clamp(60px, 8vw, 100px)", color: "white", letterSpacing: "0.05em", lineHeight: 0.9 }}>APP</span>
          </div>
          <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap" }}>
            <span className="font-anton" style={{ fontSize: "clamp(40px, 6vw, 72px)", color: "white", letterSpacing: "0.05em" }}>OPPORTUNITY</span>
          </div>
          <div style={{ position: "relative", zIndex: 2, width: "64px", height: "64px", borderRadius: "50%", background: "rgba(255,255,255,.15)", border: "2px solid rgba(255,255,255,.3)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <span style={{ color: "white", fontSize: "24px", marginLeft: "4px" }}>▶</span>
          </div>
          <div style={{ position: "absolute", top: "20px", left: "50%", transform: "translateX(-50%)" }}>
            <span className="font-anton" style={{ fontSize: "14px", color: "rgba(255,255,255,.5)", letterSpacing: "0.1em" }}>UGLYCASH</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── DISCOVER MORE ──────────────────────────────────────────── */

function DiscoverMore() {
  return (
    <section style={{ background: "var(--bg-page)", padding: "80px 0" }}>
      <div className="container-uc">
        <h2 style={{ fontFamily: "var(--font-inter),Inter,sans-serif", fontSize: "28px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "32px" }}>
          Discover more
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px" }}>
          {/* Magazine */}
          <div>
            <div style={{ background: "#F0EEE8", borderRadius: "12px", height: "300px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 240 300" width="240" height="300" fill="none">
                <rect x="30" y="20" width="180" height="260" rx="4" fill="white" stroke="#D0D0C8" strokeWidth="1"/>
                <rect x="40" y="30" width="160" height="100" rx="2" fill="#E8E6E0"/>
                <text x="120" y="90" fontFamily="Anton,Impact,sans-serif" fontSize="20" fill="#0A0A0A" textAnchor="middle">RIDICULOUSLY</text>
                <text x="120" y="108" fontFamily="Anton,Impact,sans-serif" fontSize="20" fill="#0A0A0A" textAnchor="middle">EXCLUSIVE</text>
                <rect x="40" y="145" width="70" height="8" rx="2" fill="#D0D0C8"/>
                <rect x="40" y="160" width="160" height="1" fill="#E8E8E0"/>
                <rect x="40" y="170" width="90" height="8" rx="2" fill="#D0D0C8"/>
                <rect x="40" y="185" width="160" height="6" rx="2" fill="#EEEEE8"/>
                <rect x="40" y="198" width="130" height="6" rx="2" fill="#EEEEE8"/>
                <rect x="40" y="211" width="150" height="6" rx="2" fill="#EEEEE8"/>
                <rect x="40" y="230" width="60" height="20" rx="10" fill="#0A0A0A"/>
                <text x="70" y="244" fontFamily="Inter,sans-serif" fontSize="9" fill="white" textAnchor="middle">Read more</text>
              </svg>
            </div>
            <div style={{ paddingTop: "12px" }}>
              <p style={{ fontFamily: "var(--font-inter),Inter,sans-serif", fontSize: "13px", fontWeight: 700, color: "var(--text-primary)" }}>Ridiculously Exclusive</p>
              <p style={{ fontFamily: "var(--font-inter),Inter,sans-serif", fontSize: "12px", color: "var(--text-muted)", marginTop: "2px" }}>Boost your cashback to 6%</p>
            </div>
          </div>
          {/* Business */}
          <div>
            <div style={{ background: "var(--bg-dark)", borderRadius: "12px", height: "300px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 280 300" width="280" height="300" fill="none">
                <rect x="40" y="80" width="200" height="130" rx="8" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
                <rect x="48" y="88" width="184" height="114" rx="4" fill="#0A0A0A"/>
                <rect x="56" y="96" width="168" height="98" rx="2" fill="#111"/>
                <text x="140" y="128" fontFamily="Anton,Impact,sans-serif" fontSize="14" fill="white" textAnchor="middle">UGLYCASH</text>
                <text x="140" y="144" fontFamily="Anton,Impact,sans-serif" fontSize="11" fill="#D4FF00" textAnchor="middle">BUSINESS</text>
                <rect x="60" y="152" width="100" height="6" rx="2" fill="#2a2a2a"/>
                <rect x="60" y="163" width="80" height="6" rx="2" fill="#2a2a2a"/>
                <rect x="60" y="174" width="120" height="6" rx="2" fill="#2a2a2a"/>
                <ellipse cx="140" cy="218" rx="110" ry="6" fill="#111"/>
                <rect x="100" y="212" width="80" height="8" rx="2" fill="#0A0A0A"/>
                <text x="140" y="248" fontFamily="Anton,Impact,sans-serif" fontSize="11" fill="white" textAnchor="middle" letterSpacing="1">BUSINESS</text>
              </svg>
            </div>
            <div style={{ paddingTop: "12px" }}>
              <p style={{ fontFamily: "var(--font-inter),Inter,sans-serif", fontSize: "13px", fontWeight: 700, color: "var(--text-primary)" }}>UGLYCASH Business</p>
              <p style={{ fontFamily: "var(--font-inter),Inter,sans-serif", fontSize: "12px", color: "var(--text-muted)", marginTop: "2px" }}>For global USD and EUR accounts for international businesses</p>
            </div>
          </div>
          {/* Store */}
          <div>
            <div style={{ background: "white", border: "1px solid var(--border-light)", borderRadius: "12px", height: "300px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 240 300" width="240" height="300" fill="none">
                <path d="M80 80 L60 95 L50 140 L75 140 L75 240 L165 240 L165 140 L190 140 L180 95 L160 80 C155 95 145 105 120 105 C95 105 85 95 80 80 Z" fill="#FF00FF"/>
                <path d="M80 80 C85 65 95 60 120 58 C145 60 155 65 160 80 Z" fill="#EE00EE"/>
                <text x="120" y="165" fontFamily="Anton,Impact,sans-serif" fontSize="13" fill="white" textAnchor="middle" letterSpacing="1">UGLY</text>
                <text x="120" y="183" fontFamily="Anton,Impact,sans-serif" fontSize="13" fill="white" textAnchor="middle" letterSpacing="1">CASH</text>
                <path d="M60 95 L30 110 L38 140 L75 130 Z" fill="#FF00FF"/>
                <path d="M180 95 L210 110 L202 140 L165 130 Z" fill="#FF00FF"/>
              </svg>
            </div>
            <div style={{ paddingTop: "12px" }}>
              <p style={{ fontFamily: "var(--font-inter),Inter,sans-serif", fontSize: "13px", fontWeight: 700, color: "var(--text-primary)" }}>Store</p>
              <p style={{ fontFamily: "var(--font-inter),Inter,sans-serif", fontSize: "12px", color: "var(--text-muted)", marginTop: "2px" }}>Custom merch and limited editions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT + FOOTER ─────────────────────────────────────────── */

function About() {
  const regions = ["North America", "Europe", "Central America", "South America", "Africa", "Asia"];
  return (
    <section style={{ background: "var(--bg-page)", padding: "80px 0 0" }}>
      <div className="container-uc">
        <div style={{ display: "grid", gridTemplateColumns: "55fr 45fr", gap: "60px", marginBottom: "60px", alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: "var(--font-inter),Inter,sans-serif", fontSize: "20px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "24px", lineHeight: 1.3 }}>
              UGLYCASH created in San Francisco, distributed worldwide
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {regions.map((r) => (
                <span key={r} style={{ fontFamily: "var(--font-inter),Inter,sans-serif", fontSize: "13px", color: "var(--text-muted)", lineHeight: 2.2, borderBottom: "1px solid var(--border-light)" }}>{r}</span>
              ))}
            </div>
          </div>
          <StickerPack />
        </div>
        <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: "24px", textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginBottom: "8px" }}>
            {["A Reserve Project", "App Store", "Google Play"].map((link) => (
              <a key={link} href="#" style={{ fontFamily: "var(--font-inter),Inter,sans-serif", fontSize: "12px", color: "var(--text-muted)", textDecoration: "none" }}>{link}</a>
            ))}
          </div>
          <div className="font-anton" style={{ fontSize: "clamp(80px, 15vw, 200px)", lineHeight: 0.88, color: "var(--text-primary)", letterSpacing: "-0.01em", overflow: "hidden" }}>
            UGLYCASH
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "20px 0 40px" }}>
            <p style={{ fontFamily: "var(--font-inter),Inter,sans-serif", fontSize: "11px", color: "#999", maxWidth: "480px", lineHeight: 1.6, textAlign: "left" }}>
              Reserve your spot with UGLYCASH&apos;s cash rewards — participate in cashback, earn on your digital assets. Investment assets provided by Reserve. UGLYCASH is not a bank. Any investment, including crypto, is at risk.
            </p>
            <div style={{ textAlign: "right" }}>
              {["support@ugly.cash", "UGLYCash Business", "Help Center", "Legal"].map((t) => (
                <p key={t} style={{ fontFamily: "var(--font-inter),Inter,sans-serif", fontSize: "11px", color: "#999" }}>{t}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PAGE ROOT ──────────────────────────────────────────────── */

export default function Home() {
  return (
    <main>
      <NavLattic />
      <Hero />
      <ServicesSection />
      <Portfolio />
      <Testimonials />
      <CtaFooter />
    </main>
  );
}
