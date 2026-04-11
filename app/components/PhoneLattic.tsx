"use client";

const CSS = `
.uc-phone-wrap {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}
.uc-phone {
  position: relative;
  width: 320px;
  height: 650px;
  background: linear-gradient(160deg, #C8C8CC 0%, #A8A8AE 50%, #B4B4BA 100%);
  border-radius: 50px;
  border: 0.5px solid rgba(255,255,255,.55);
  box-shadow:
    0 0 0 0.8px rgba(0,0,0,.22),
    0 40px 100px rgba(0,0,0,.45),
    inset 0 1px 0 rgba(255,255,255,.4);
  padding: 11px;
  box-sizing: border-box;
}
.uc-btn { position: absolute; background: linear-gradient(160deg,#C8C8CC,#A8A8AE,#B4B4BA); box-shadow: inset 0 1px 0 rgba(255,255,255,.3); }
.uc-btn-lt { left:-3.5px; top:100px; width:3.5px; height:22px; border-radius:2px 0 0 2px; }
.uc-btn-lm { left:-3.5px; top:134px; width:3.5px; height:54px; border-radius:2px 0 0 2px; }
.uc-btn-lb { left:-3.5px; top:198px; width:3.5px; height:54px; border-radius:2px 0 0 2px; }
.uc-btn-r  { right:-3.5px; top:160px; width:3.5px; height:80px; border-radius:0 2px 2px 0; }

.uc-screen-wrap {
  width: 100%;
  height: 100%;
  border-radius: 40px;
  background: #F2F2F2;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
}
.uc-di {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 110px;
  height: 32px;
  background: #000;
  border-radius: 18px;
  z-index: 10;
  pointer-events: none;
}
.uc-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 22px;
  height: 50px;
  flex-shrink: 0;
  position: relative;
  z-index: 5;
}
.uc-time {
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #000;
}
.uc-tabs {
  display: flex;
  gap: 18px;
  padding: 0 16px 0;
  height: 36px;
  align-items: flex-end;
  flex-shrink: 0;
  overflow: hidden;
  border-bottom: 0.5px solid rgba(0,0,0,.08);
}
.uc-tab {
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #8E8E93;
  padding-bottom: 7px;
  white-space: nowrap;
  flex-shrink: 0;
}
.uc-tab.active {
  font-weight: 700;
  color: #000;
  border-bottom: 2px solid #000;
}
.uc-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.uc-banner {
  background: #1A1A1A;
  border-radius: 12px;
  margin: 10px 10px 0;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 42px;
  flex-shrink: 0;
}
.uc-banner-text {
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #fff;
}
.uc-rev-card {
  background: #fff;
  border-radius: 18px;
  margin: 8px 10px 0;
  padding: 14px 16px;
  flex-shrink: 0;
}
.uc-rev-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.uc-rev-label {
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #555;
}
.uc-rev-badge {
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 11px;
  font-weight: 700;
  color: #22C55E;
}
.uc-rev-amount {
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 38px;
  font-weight: 800;
  color: #000;
  letter-spacing: -1.5px;
  line-height: 1.1;
  margin-top: 2px;
}
.uc-rev-btns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 12px;
}
.uc-rev-btns button {
  height: 38px;
  background: #F2F2F2;
  border: none;
  border-radius: 10px;
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #000;
  cursor: pointer;
}
.uc-reviews {
  margin: 10px 14px 0;
  flex-shrink: 0;
}
.uc-reviews-label {
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #555;
}
.uc-reviews-count {
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 36px;
  font-weight: 900;
  color: #000;
  letter-spacing: -1px;
  line-height: 1.1;
  margin-bottom: 8px;
}
.uc-cards-wrap {
  position: relative;
  width: 100%;
  height: 155px;
  overflow: hidden;
  flex-shrink: 0;
}
.uc-wcard {
  position: absolute;
  width: 210px;
  height: 78px;
  border-radius: 12px;
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.uc-bottom-nav {
  background: rgba(242,242,247,.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 0.5px solid rgba(0,0,0,.1);
  height: 72px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 24px;
  position: relative;
  flex-shrink: 0;
}
.uc-nav-btn-main {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: linear-gradient(135deg, #9B4DEB, #C026D3);
  box-shadow: 0 4px 16px rgba(155,77,235,.5);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -18px;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
}
.uc-home-bar {
  position: absolute;
  bottom: 7px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 4px;
  background: rgba(0,0,0,.2);
  border-radius: 2px;
}
`;

export default function PhoneLattic() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="uc-phone-wrap">
        <div className="uc-phone">
          <div className="uc-btn uc-btn-lt" />
          <div className="uc-btn uc-btn-lm" />
          <div className="uc-btn uc-btn-lb" />
          <div className="uc-btn uc-btn-r" />

          <div className="uc-screen-wrap">
            <div className="uc-di" />

            {/* Status bar */}
            <div className="uc-status">
              <span className="uc-time">9:41</span>
              <svg width="66" height="14" viewBox="0 0 66 14" fill="none">
                <rect x="0" y="8" width="3" height="6" rx="1" fill="#000"/>
                <rect x="5" y="5" width="3" height="9" rx="1" fill="#000"/>
                <rect x="10" y="2" width="3" height="12" rx="1" fill="#000"/>
                <rect x="15" y="0" width="3" height="14" rx="1" fill="#000" opacity="0.3"/>
                <path d="M28 10 C30 8 32 8 34 10" stroke="#000" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                <path d="M26 8 C29 5 33 5 36 8" stroke="#000" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>
                <circle cx="31" cy="12" r="1.5" fill="#000"/>
                <rect x="46" y="2" width="16" height="10" rx="2.5" stroke="#000" strokeWidth="1.2" fill="none"/>
                <rect x="63.5" y="4.5" width="1.5" height="5" rx="0.75" fill="#000" opacity="0.4"/>
                <rect x="47.5" y="3.5" width="11" height="7" rx="1.5" fill="#000"/>
              </svg>
            </div>

            {/* Tab nav */}
            <div className="uc-tabs">
              <span className="uc-tab active">Accueil</span>
              <span className="uc-tab">Portefeuille</span>
              <span className="uc-tab">Récompenses</span>
              <span className="uc-tab">Prof...</span>
            </div>

            <div className="uc-content">
              {/* Dark banner — Search ranking */}
              <div className="uc-banner">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="7.5" cy="7.5" r="5" stroke="white" strokeWidth="1.5"/>
                  <line x1="11.5" y1="11.5" x2="15" y2="15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span className="uc-banner-text">Votre site est n°1</span>
              </div>

              {/* Revenue card */}
              <div className="uc-rev-card">
                <div className="uc-rev-top">
                  <span className="uc-rev-label">🛡️ Revenus</span>
                  <span className="uc-rev-badge">+30% CA</span>
                </div>
                <div className="uc-rev-amount">€24 000</div>
                <div className="uc-rev-btns">
                  <button>Clients</button>
                  <button>Rapport</button>
                </div>
              </div>

              {/* Google Reviews */}
              <div className="uc-reviews">
                <div className="uc-reviews-label">Google Reviews</div>
                <div className="uc-reviews-count">+55</div>
              </div>

              {/* Loyalty cards fan */}
              <div className="uc-cards-wrap">
                {/* Subway — behind left */}
                <div className="uc-wcard" style={{
                  background: "linear-gradient(135deg,#009B48,#007A37)",
                  transform: "rotate(-12deg) translate(-15px, 30px)",
                  zIndex: 1, left: 10, top: 0,
                }}>
                  <span style={{ fontFamily:"'Anton',Impact,sans-serif", fontSize:"14px", color:"#FFD700" }}>SUBWAY</span>
                  <span style={{ fontSize:"7px", color:"rgba(255,255,255,.6)", fontFamily:"Inter,sans-serif" }}>Subway Card</span>
                </div>
                {/* KFC — middle */}
                <div className="uc-wcard" style={{
                  background: "linear-gradient(135deg,#E4002B,#AE0020)",
                  transform: "rotate(-4deg) translate(20px, 15px)",
                  zIndex: 2, left: 30, top: 0,
                }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"6px" }}>
                    <div style={{
                      width:"26px", height:"26px", borderRadius:"50%",
                      background:"#fff", display:"flex", alignItems:"center", justifyContent:"center",
                      fontSize:"8px", fontWeight:900, color:"#E4002B", fontFamily:"Inter,sans-serif",
                    }}>KFC</div>
                  </div>
                  <span style={{ fontSize:"7px", color:"rgba(255,255,255,.6)", fontFamily:"Inter,sans-serif" }}>Rewards Card</span>
                </div>
                {/* McDonald's — front right */}
                <div className="uc-wcard" style={{
                  background: "linear-gradient(135deg,#DA291C,#FF6B35)",
                  transform: "rotate(5deg) translate(55px, 0px)",
                  zIndex: 3, left: 30, top: 0,
                  boxShadow: "0 8px 24px rgba(0,0,0,.3)",
                }}>
                  <span style={{ fontFamily:"Arial Black,sans-serif", fontSize:"22px", color:"#FFC72C", fontWeight:900, lineHeight:1 }}>M</span>
                  <span style={{ fontFamily:"'Anton',Impact,sans-serif", fontSize:"10px", color:"#fff" }}>McDONALD&apos;S</span>
                </div>
              </div>

              {/* Bottom nav */}
              <div className="uc-bottom-nav">
                <span style={{ fontSize:"22px", color:"#8E8E93" }}>😊</span>
                <button className="uc-nav-btn-main">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10 L15 4 L12 10 L15 16 Z" fill="white"/>
                  </svg>
                </button>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="2" y="4" width="18" height="14" rx="3" stroke="#8E8E93" strokeWidth="1.5" fill="none"/>
                  <circle cx="8" cy="11" r="2.5" stroke="#8E8E93" strokeWidth="1.5" fill="none"/>
                  <circle cx="15.5" cy="8.5" r="1.5" fill="#8E8E93"/>
                </svg>
                <div className="uc-home-bar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
