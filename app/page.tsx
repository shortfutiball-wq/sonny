export default function Home() {
  return (
    <div className="h-screen bg-[#F5F0E8] flex flex-col overflow-hidden">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 md:px-16 py-7 z-10">
        <span
          className="text-[#0d0d0d] text-xl font-bold"
          style={{ letterSpacing: "-0.04em" }}
        >
          Sonny
        </span>
        <a
          href="#"
          className="bg-[#0d0d0d] text-[#F5F0E8] text-sm font-semibold px-6 py-3 rounded-full hover:opacity-75 transition-opacity"
          style={{ letterSpacing: "0.01em" }}
        >
          Prendre rendez-vous &rarr;
        </a>
      </nav>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 relative">

        {/* Blob glow vert doux */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[320px] rounded-full pointer-events-none select-none"
          style={{
            background: "#4a9e62",
            filter: "blur(140px)",
            opacity: 0.2,
          }}
          aria-hidden="true"
        />

        {/* Titre principal */}
        <h1
          className="relative text-[#0d0d0d] font-bold leading-[1.06] max-w-4xl"
          style={{
            fontSize: "clamp(2.4rem, 5.8vw, 5.2rem)",
            letterSpacing: "-0.035em",
          }}
        >
          {"De nouveaux clients chaque mois."}
          <br />
          <span
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: "1.08em",
              letterSpacing: "-0.01em",
            }}
          >
            Tout simplement.
          </span>
        </h1>

        {/* Sous-titre */}
        <p
          className="relative mt-8 text-[#787062] max-w-sm leading-relaxed font-normal"
          style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}
        >
          {"On s\u2019occupe de votre croissance."}
          <br />
          {"Vous vous occupez de votre m\u00E9tier."}
        </p>

        {/* CTA */}
        <a
          href="#"
          className="relative mt-11 inline-flex items-center bg-[#0d0d0d] text-[#F5F0E8] text-sm font-semibold px-9 py-4 rounded-full hover:opacity-75 transition-opacity"
          style={{ letterSpacing: "0.01em" }}
        >
          Prendre rendez-vous &rarr;
        </a>

      </main>
    </div>
  );
}
