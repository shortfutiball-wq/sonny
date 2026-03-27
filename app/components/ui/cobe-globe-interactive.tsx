"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export function GlobeInteractive() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef<{ down: boolean; x: number; phi: number }>({
    down: false,
    x: 0,
    phi: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let phi = 0;
    let width = canvas.offsetWidth;
    let rafId: number;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi,
      theta: 0.3,
      dark: 0,
      diffuse: 0.4,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: [0.1, 0.1, 0.1],
      glowColor: [0.9, 0.9, 0.87],
      markers: [
        { location: [48.8566, 2.3522], size: 0.07 },    // Paris
        { location: [51.5074, -0.1278], size: 0.05 },   // London
        { location: [40.7128, -74.006], size: 0.07 },   // New York
        { location: [35.6762, 139.6503], size: 0.06 },  // Tokyo
        { location: [-33.8688, 151.2093], size: 0.05 }, // Sydney
        { location: [55.7558, 37.6176], size: 0.05 },   // Moscow
        { location: [19.4326, -99.1332], size: 0.05 },  // Mexico City
        { location: [-23.5505, -46.6333], size: 0.05 }, // São Paulo
      ],
    });

    function animate() {
      if (!pointerRef.current.down) {
        phi += 0.005;
      }
      globe.update({
        phi: phi + pointerRef.current.phi,
        width: width * 2,
        height: width * 2,
      });
      rafId = requestAnimationFrame(animate);
    }

    setTimeout(() => {
      canvas.style.opacity = "1";
    });

    rafId = requestAnimationFrame(animate);

    function onResize() {
      if (canvas) width = canvas.offsetWidth;
    }
    window.addEventListener("resize", onResize);

    return () => {
      globe.destroy();
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  function onPointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
    pointerRef.current.down = true;
    pointerRef.current.x = e.clientX;
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
  }

  function onPointerUp() {
    pointerRef.current.down = false;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
  }

  function onPointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
    if (pointerRef.current.down) {
      const delta = e.clientX - pointerRef.current.x;
      pointerRef.current.phi = delta / 200;
    }
  }

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 560,
        aspectRatio: "1",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          contain: "layout paint size",
          opacity: 0,
          transition: "opacity 600ms ease",
          cursor: "grab",
        }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerOut={onPointerUp}
        onPointerMove={onPointerMove}
      />
    </div>
  );
}
