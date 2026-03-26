"use client";

import { useEffect, useRef } from "react";

const GRADIENTS = [
  "linear-gradient(135deg,#A855F7,#EC4899)",
  "linear-gradient(135deg,#7B2FBE,#C026D3)",
  "linear-gradient(135deg,#6366F1,#8B5CF6)",
  "linear-gradient(135deg,#0EA5E9,#6366F1)",
  "linear-gradient(135deg,#10B981,#06B6D4)",
];

const CSS = `
/* ── PHONE SHELL ── */
.uc-phone-wrap {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.uc-phone {
  position: relative;
  width: 290px;
  height: 596px;
  background: #1C1C1E;
  border-radius: 46px;
  box-shadow:
    inset 0 0 0 1.5px #3A3A3C,
    inset 0 0 0 10px #0A0A0A,
    0 32px 80px rgba(0,0,0,.72),
    0 0 0 1px rgba(255,255,255,.045);
  animation: phoneIn .7s cubic-bezier(.22,1,.36,1) both;
}
@keyframes phoneIn {
  from { opacity:0; transform:translateY(28px) scale(.95); }
  to   { opacity:1; transform:translateY(0) scale(1); }
}
.uc-btn { position:absolute; background:#2C2C2E; border-radius:2.5px; }
.uc-btn-vu  { left:-10px; top:110px; width:3.5px; height:30px; }
.uc-btn-vd  { left:-10px; top:150px; width:3.5px; height:30px; }
.uc-btn-pw  { right:-10px; top:136px; width:3.5px; height:56px; }
.uc-screen-wrap {
  position: absolute;
  inset: 10px;
  border-radius: 38px;
  overflow: hidden;
  background: #0A0A0A;
}
.uc-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg,#A855F7,#EC4899);
  transition: background .8s ease;
  z-index: 0;
}
.uc-di {
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: 112px;
  height: 32px;
  background: #0A0A0A;
  border-radius: 20px;
  z-index: 20;
}
.uc-screen {
  position: absolute;
  inset: 0;
  z-index: 10;
  overflow: hidden;
}

/* ── PALLETTE ── */
.uc-pallette {
  display: flex;
  gap: 8px;
  justify-content: center;
}
.uc-pallette-dot {
  width: 13px;
  height: 13px;
  border-radius: 50%;
  cursor: pointer;
  border: 1.5px solid rgba(255,255,255,.22);
  transition: transform .18s;
}
.uc-pallette-dot:hover { transform: scale(1.38); }

/* ── LATTIC SCREEN ── */
.lattic-screen {
  background: #F2F2F7;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0;
  overflow: hidden;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  height: 100%;
}
.l-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px 0;
  font-size: 13px;
  font-weight: 600;
  color: #000;
  height: 50px;
  flex-shrink: 0;
}
.l-grad-bar {
  height: 7px;
  background: linear-gradient(90deg,#7B2FBE,#C026D3,#E040C8,#FF79C6);
  flex-shrink: 0;
}
.l-nav {
  display: flex;
  gap: 18px;
  padding: 10px 18px 8px;
  background: #F2F2F7;
  font-size: 12px;
  flex-shrink: 0;
  overflow-x: auto;
  scrollbar-width: none;
}
.l-nav::-webkit-scrollbar { display: none; }
.l-nav a {
  color: #8E8E93;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
}
.l-nav a.lactive {
  color: #000;
  font-weight: 700;
  border-bottom: 2px solid #000;
  padding-bottom: 6px;
}
.l-nav a.ldot::after {
  content: '';
  display: inline-block;
  width: 5px;
  height: 5px;
  background: #C026D3;
  border-radius: 50%;
  vertical-align: super;
  margin-left: 1px;
}
.l-header {
  background: #0A0A0A;
  padding: 9px 14px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.l-lattic-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #1E1E1E;
  border: 1px solid #2E2E2E;
  border-radius: 8px;
  padding: 5px 12px 5px 7px;
}
.l-icon {
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg,#A855F7,#EC4899);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  color: #fff;
  font-weight: 900;
}
.l-lattic-badge span {
  font-size: 12px;
  font-weight: 600;
  color: #fff;
}
.l-card {
  background: #fff;
  border-radius: 18px;
  padding: 14px;
  margin: 0 10px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}
.l-card-label {
  font-size: 12px;
  font-weight: 500;
  color: #3C3C43;
}
.l-apy-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: linear-gradient(135deg,#5B21B6,#7C3AED);
  border-radius: 9px;
  padding: 5px 9px;
  transform: rotate(4deg);
  text-align: center;
  font-size: 9px;
  color: #fff;
  font-weight: 700;
  line-height: 1.3;
}
.l-apy-badge b {
  font-size: 18px;
  display: block;
  line-height: 1;
}
.l-amount {
  font-size: 36px;
  font-weight: 800;
  color: #000;
  letter-spacing: -1.5px;
  line-height: 1;
  margin-top: 4px;
}
.l-amount span {
  font-size: 18px;
  font-weight: 400;
  color: #8E8E93;
}
.l-sublabel {
  font-size: 10px;
  color: #8E8E93;
  margin-top: 3px;
}
.l-btn-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7px;
  margin-top: 10px;
}
.l-btn-row button {
  background: #F2F2F7;
  border: none;
  border-radius: 11px;
  height: 40px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
}
.l-avis {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.l-avis-val {
  font-size: 26px;
  font-weight: 800;
  color: #34C759;
  letter-spacing: -1px;
  margin-top: 2px;
}
.l-btn-voir {
  background: linear-gradient(135deg,#C026D3,#A21CAF);
  color: #fff;
  border: none;
  border-radius: 999px;
  width: 68px;
  height: 40px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
}
.l-section-title {
  font-size: 15px;
  font-weight: 700;
  color: #000;
  padding: 2px 10px 0;
  flex-shrink: 0;
}
.l-cash { padding-bottom: 0; }
.l-eyebrow {
  font-size: 10px;
  font-weight: 600;
  color: #8E8E93;
  text-transform: uppercase;
  letter-spacing: .04em;
}
.l-cash-title {
  font-size: 18px;
  font-weight: 800;
  color: #000;
  letter-spacing: -.4px;
  margin-top: 3px;
  line-height: 1.2;
}
.l-cards-stack {
  position: relative;
  height: 108px;
  margin-top: 12px;
}
.wc {
  position: absolute;
  width: 190px;
  height: 70px;
  border-radius: 11px;
  padding: 9px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.wc-mcdo {
  background: linear-gradient(130deg,#DA291C,#C8161F);
  bottom: 18px; left: -6px;
  transform: rotate(-11deg);
  z-index: 1;
  box-shadow: 0 6px 18px rgba(218,41,28,.4);
}
.wc-kfc {
  background: linear-gradient(130deg,#E4002B,#AE0020);
  bottom: 8px; left: 50px;
  transform: rotate(-3deg);
  z-index: 2;
  box-shadow: 0 6px 18px rgba(174,0,32,.35);
}
.wc-sub {
  background: linear-gradient(130deg,#009B48,#006930);
  bottom: 3px; left: 108px;
  transform: rotate(6deg);
  z-index: 3;
  box-shadow: 0 6px 18px rgba(0,105,48,.35);
}
.wc-top, .wc-bot {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.wc-m { font-size:16px; font-weight:900; color:#FFC72C; }
.wc-kfc-logo {
  width:24px; height:24px; background:#fff; border-radius:50%;
  display:flex; align-items:center; justify-content:center;
  font-size:7px; font-weight:900; color:#E4002B;
}
.wc-sub-logo { font-size:9px; font-weight:900; color:#FFD700; letter-spacing:.03em; }
.wc-aw { font-size:6px; color:rgba(255,255,255,.55); text-transform:uppercase; letter-spacing:.1em; }
.wc-bot b { font-size:10px; font-weight:900; color:#fff; }
.wc-bot span { font-size:7px; color:rgba(255,255,255,.55); }

.l-bottom-nav {
  background: rgba(242,242,247,.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: .5px solid rgba(0,0,0,.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 8px 24px 20px;
  margin-top: auto;
  flex-shrink: 0;
}
.l-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  font-size: 9px;
  font-weight: 500;
  color: #8E8E93;
}
.l-nav-item.lactive { color:#000; font-weight:700; }
.l-sphere {
  width: 52px;
  height: 52px;
  margin-top: -16px;
  border-radius: 50%;
  background: linear-gradient(135deg,#C850C0,#9B4DEB);
  box-shadow: 0 5px 18px rgba(155,77,235,.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
}
`;

export default function PhoneLattic() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {};
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const setGradient = (g: string) => {
    if (bgRef.current) bgRef.current.style.background = g;
  };

  const randomGradient = () => {
    const colors = [
      "#7B2FBE","#C026D3","#E040C8","#FF79C6",
      "#A855F7","#EC4899","#6366F1","#0EA5E9","#10B981",
    ];
    const a = colors[Math.floor(Math.random() * colors.length)];
    const b = colors[Math.floor(Math.random() * colors.length)];
    setGradient(`linear-gradient(135deg,${a},${b})`);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="uc-phone-wrap">
        <div className="uc-phone">
          {/* Side buttons */}
          <div className="uc-btn uc-btn-vu" />
          <div className="uc-btn uc-btn-vd" />
          <div className="uc-btn uc-btn-pw" />

          <div className="uc-screen-wrap">
            {/* Gradient background */}
            <div className="uc-bg" ref={bgRef} />
            {/* Dynamic Island */}
            <div className="uc-di" />

            {/* LATTIC Screen */}
            <div className="uc-screen lattic-screen">

              {/* Status bar */}
              <div className="l-status">
                <span>9:41</span>
                <svg width="54" height="14" viewBox="0 0 54 14" fill="none">
                  <rect x="0" y="8" width="3" height="6" rx="1" fill="black"/>
                  <rect x="5" y="5" width="3" height="9" rx="1" fill="black"/>
                  <rect x="10" y="2" width="3" height="12" rx="1" fill="black"/>
                  <rect x="15" y="0" width="3" height="14" rx="1" fill="black" opacity="0.3"/>
                  <path d="M25 10 C27 8 29 8 31 10" stroke="black" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  <path d="M23 8 C26 5 30 5 33 8" stroke="black" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>
                  <circle cx="28" cy="12" r="1.5" fill="black"/>
                  <rect x="39" y="2" width="13" height="10" rx="2.5" stroke="black" strokeWidth="1.2" fill="none"/>
                  <rect x="52.2" y="4.5" width="1.5" height="5" rx="0.75" fill="black" opacity="0.4"/>
                  <rect x="40.5" y="3.5" width="9" height="7" rx="1.5" fill="black"/>
                </svg>
              </div>

              {/* Purple gradient bar */}
              <div className="l-grad-bar" />

              {/* Nav tabs */}
              <nav className="l-nav">
                <a className="lactive">Home</a>
                <a>Portfolio</a>
                <a>Rewards</a>
                <a className="ldot">Profile</a>
                <a>Apps</a>
              </nav>

              {/* Dark header with LATTIC badge */}
              <div className="l-header">
                <div className="l-lattic-badge">
                  <div className="l-icon">L</div>
                  <span>LATTIC</span>
                </div>
              </div>

              {/* Balance card */}
              <div className="l-card">
                <div className="l-card-label">📊 Chiffre d&apos;affaires</div>
                <div className="l-apy-badge">
                  3%<br/><b>7%</b><br/>APY
                </div>
                <div className="l-amount">$24,200<span>.20</span></div>
                <div className="l-sublabel">Solde en eUSD</div>
                <div className="l-btn-row">
                  <button>Encaisser</button>
                  <button>Retirer</button>
                </div>
              </div>

              {/* Avis Google card */}
              <div className="l-card l-avis">
                <div>
                  <div className="l-card-label">Nouveaux avis Google</div>
                  <div className="l-avis-val">+55</div>
                </div>
                <button className="l-btn-voir">Voir</button>
              </div>

              {/* Section title */}
              <div className="l-section-title">Carte de fidélité</div>

              {/* Loyalty cards */}
              <div className="l-card l-cash">
                <div className="l-eyebrow">Carte restaurant</div>
                <div className="l-cash-title">30 nouveaux clients fidèles</div>
                <div className="l-cards-stack">
                  <div className="wc wc-mcdo">
                    <div className="wc-top">
                      <span className="wc-m">M</span>
                      <div className="wc-aw">Apple Wallet</div>
                    </div>
                    <div className="wc-bot">
                      <b>McDONALD&apos;S</b>
                      <span>Loyalty Card</span>
                    </div>
                  </div>
                  <div className="wc wc-kfc">
                    <div className="wc-top">
                      <div className="wc-kfc-logo">KFC</div>
                      <div className="wc-aw">Apple Wallet</div>
                    </div>
                    <div className="wc-bot">
                      <b>KFC</b>
                      <span>Rewards Card</span>
                    </div>
                  </div>
                  <div className="wc wc-sub">
                    <div className="wc-top">
                      <span className="wc-sub-logo">SUBWAY</span>
                      <div className="wc-aw">Apple Wallet</div>
                    </div>
                    <div className="wc-bot">
                      <b>SUBWAY</b>
                      <span>Subway Card</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom nav */}
              <div className="l-bottom-nav">
                <div className="l-nav-item lactive">LATTIC</div>
                <div className="l-sphere">✦</div>
                <div className="l-nav-item">CASH</div>
              </div>

            </div>
          </div>
        </div>

        {/* Color palette */}
        <div className="uc-pallette">
          {GRADIENTS.map((g, i) => (
            <div
              key={i}
              className="uc-pallette-dot"
              style={{ background: g }}
              onClick={() => setGradient(g)}
            />
          ))}
          <div
            className="uc-pallette-dot"
            style={{ background: "conic-gradient(red,orange,yellow,green,blue,violet,red)" }}
            onClick={randomGradient}
            title="Aléatoire"
          />
        </div>
      </div>
    </>
  );
}
