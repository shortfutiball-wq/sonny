"use client";

const CSS = `
.nav-wrap {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  padding: 12px 24px;
  pointer-events: none;
}
.navbar {
  pointer-events: all;
  display: flex;
  align-items: center;
  background: rgba(251,251,249,.82);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(0,0,0,.1);
  border-radius: 999px;
  padding: 6px 6px 6px 20px;
  box-shadow: 0 2px 20px rgba(0,0,0,.08);
  width: auto;
  min-width: 420px;
  max-width: 600px;
  gap: 0;
}
.nav-logo {
  font-family: var(--font-anton), Anton, Impact, sans-serif;
  font-size: 18px;
  letter-spacing: .03em;
  color: #0A0A0A;
  text-transform: uppercase;
  text-decoration: none;
  flex-shrink: 0;
}
.nav-spacer { flex: 1; }
.nav-spacer2 { flex: 1; }
.nav-cta {
  font-family: var(--font-dm), 'DM Sans', sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  background: #0A0A0A;
  border: none;
  border-radius: 999px;
  padding: 9px 22px;
  cursor: pointer;
  letter-spacing: .02em;
  transition: opacity .15s;
  outline: 2px solid rgba(192,38,211,.5);
  outline-offset: 1px;
  flex-shrink: 0;
}
.nav-cta:hover { opacity: .78; }
.nav-spacer-top { height: 72px; }
@media(max-width:600px) {
  .navbar { min-width: 0; width: calc(100vw - 32px); }
}
`;

export default function NavLattic() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="nav-wrap">
        <nav className="navbar">
          <a className="nav-logo" href="#">Lattic</a>
          <div className="nav-spacer" />
          <div className="nav-spacer2" />
          <button className="nav-cta" onClick={scrollToContact}>
            Démarrer
          </button>
        </nav>
      </div>
      {/* Push content below fixed navbar */}
      <div className="nav-spacer-top" />
    </>
  );
}
