"use client";

import { useEffect, useState } from "react";

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
  justify-content: space-between;
  background: transparent;
  border-radius: 14px;
  padding: 10px 10px 10px 28px;
  width: 100%;
  max-width: 580px;
  transition: background .25s ease, backdrop-filter .25s ease, border-color .25s ease;
  border: 1px solid transparent;
}
.navbar.scrolled {
  background: rgba(255,255,255,.72);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-color: rgba(0,0,0,.08);
}
.nav-logo {
  font-family: var(--font-anton), Anton, Impact, sans-serif;
  font-size: 32px;
  letter-spacing: .03em;
  color: #0A0A0A;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 1;
}
.nav-cta {
  font-family: var(--font-dm), 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background: #0A0A0A;
  border: none;
  border-radius: 10px;
  padding: 11px 26px;
  cursor: pointer;
  letter-spacing: .02em;
  transition: opacity .15s;
}
.nav-cta:hover { opacity: .78; }
.nav-spacer-top { height: 72px; }
@media(max-width:600px) {
  .navbar { width: calc(100vw - 32px); max-width: none; }
}
`;

export default function NavLattic() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="nav-wrap">
        <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
          <a className="nav-logo" href="#">Lattic</a>
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
