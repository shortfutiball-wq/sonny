"use client";

import { useEffect, useRef } from "react";

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
  background: rgba(255,255,255,.92);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 14px;
  padding: 10px 10px 10px 28px;
  width: 100%;
  max-width: 580px;
}
.nav-logo {
  font-family: var(--font-anton), Anton, Impact, sans-serif;
  font-size: 36px;
  letter-spacing: -.04em;
  color: #0A0A0A;
  text-transform: uppercase;
  text-decoration: none;
  line-height: .85;
}
.nav-cta-wrap {
  position: relative;
  flex-shrink: 0;
}
.nav-cta-wrap canvas {
  position: absolute;
  inset: -3px;
  width: calc(100% + 6px);
  height: calc(100% + 6px);
  border-radius: 13px;
  pointer-events: none;
  z-index: 0;
}
.nav-cta {
  position: relative;
  z-index: 1;
  font-family: var(--font-dm), 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 800;
  color: #fff;
  background: #0A0A0A;
  border: none;
  border-radius: 10px;
  padding: 12px 28px;
  cursor: pointer;
  letter-spacing: .04em;
  text-transform: uppercase;
  transition: transform .18s ease, box-shadow .18s ease;
  display: block;
  box-shadow: 0 4px 14px rgba(168,85,247,.45), 0 2px 6px rgba(192,38,211,.3), inset 0 1px 0 rgba(255,255,255,.08);
}
.nav-cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(168,85,247,.55), 0 4px 12px rgba(192,38,211,.4), inset 0 1px 0 rgba(255,255,255,.08);
}
.nav-cta:active { transform: translateY(0); }
.nav-spacer-top { height: 72px; }
@media(max-width:600px) {
  .navbar { width: calc(100vw - 32px); max-width: none; }
}
`;

export default function NavLattic() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn = btnRef.current;
    if (!canvas || !btn) return;

    let angle = 0;

    function resize() {
      const r = btn!.getBoundingClientRect();
      canvas!.width = r.width + 6;
      canvas!.height = r.height + 6;
    }

    function draw() {
      const ctx = canvas!.getContext("2d");
      if (!ctx) return;
      const W = canvas!.width;
      const H = canvas!.height;
      ctx.clearRect(0, 0, W, H);

      const rad = 13;
      ctx.beginPath();
      ctx.moveTo(rad, 0);
      ctx.arcTo(W, 0, W, H, rad);
      ctx.arcTo(W, H, 0, H, rad);
      ctx.arcTo(0, H, 0, 0, rad);
      ctx.arcTo(0, 0, W, 0, rad);
      ctx.closePath();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const gradient = (ctx as any).createConicGradient(angle * Math.PI * 2, W / 2, H / 2);
      gradient.addColorStop(0, "rgba(255,255,255,0)");
      gradient.addColorStop(0.08, "rgba(255,255,255,.9)");
      gradient.addColorStop(0.16, "rgba(255,255,255,0)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.stroke();

      angle += 0.006;
      rafRef.current = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="nav-wrap">
        <nav className="navbar">
          <a className="nav-logo" href="#">Lattic</a>
          <div className="nav-cta-wrap">
            <canvas ref={canvasRef} />
            <button className="nav-cta" ref={btnRef} onClick={scrollToContact}>
              Démarrer
            </button>
          </div>
        </nav>
      </div>
      <div className="nav-spacer-top" />
    </>
  );
}
