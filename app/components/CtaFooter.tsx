"use client";

import { useState } from "react";

const CSS = `
/* ── CTA SECTION ── */
.cta-section {
  padding: 120px 24px 100px;
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
}
.cta-eyebrow {
  display: inline-block;
  font-family: var(--font-dm), 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: #777;
  border: 1px solid rgba(0,0,0,.15);
  padding: 4px 14px;
  border-radius: 999px;
  margin-bottom: 22px;
}
.cta-title {
  font-family: var(--font-anton), Anton, Impact, sans-serif;
  font-size: clamp(52px, 8vw, 96px);
  text-transform: uppercase;
  line-height: .9;
  letter-spacing: -.01em;
  color: #0A0A0A;
  margin-bottom: 14px;
}
.cta-title span { display: block; }
.cta-sub {
  font-family: var(--font-dm), 'DM Sans', sans-serif;
  font-size: 15px;
  color: #777;
  margin-bottom: 40px;
  line-height: 1.6;
}

/* ── Bento box ── */
.form-bento {
  background: rgba(255,255,255,.72);
  border-radius: 20px;
  padding: 32px 32px 28px;
  text-align: left;
}
.cta-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.form-field {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.form-field label {
  font-family: var(--font-dm), 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .09em;
  color: #0A0A0A;
}
.form-field .optional {
  font-size: 10px;
  font-weight: 400;
  text-transform: none;
  letter-spacing: 0;
  color: #777;
  margin-left: 4px;
}
.form-field input,
.form-field textarea {
  background: #fff;
  border: 1px solid rgba(0,0,0,.08);
  border-radius: 10px;
  padding: 13px 14px;
  font-family: var(--font-dm), 'DM Sans', sans-serif;
  font-size: 14px;
  color: #0A0A0A;
  outline: none;
  transition: border-color .15s;
  width: 100%;
}
.form-field input::placeholder,
.form-field textarea::placeholder { color: rgba(0,0,0,.28); }
.form-field input:focus,
.form-field textarea:focus { border-color: rgba(0,0,0,.35); }
.form-field textarea {
  resize: none;
  height: 100px;
  line-height: 1.5;
}
.form-submit {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 4px;
}
.btn-demarrer {
  width: 100%;
  background: #0A0A0A;
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 16px;
  font-family: var(--font-dm), 'DM Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: .02em;
  transition: transform .2s cubic-bezier(.22,1,.36,1), box-shadow .2s cubic-bezier(.22,1,.36,1), opacity .15s;
}
.btn-demarrer:hover:not(:disabled) {
  transform: translateY(-3px) scale(1.015);
  box-shadow: 0 14px 40px rgba(0,0,0,.28);
}
.btn-demarrer:active { transform: translateY(0) scale(1); }
.btn-demarrer:disabled { opacity: .55; cursor: not-allowed; }
.form-note {
  font-family: var(--font-dm), 'DM Sans', sans-serif;
  font-size: 12px;
  color: #777;
  text-align: center;
}

/* ── Separator ── */
.form-sep {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 16px 0 4px;
}
.form-sep::before,
.form-sep::after {
  content: '';
  flex: 1;
  height: 1px;
  background: rgba(0,0,0,.1);
}
.form-sep span {
  font-family: var(--font-dm), 'DM Sans', sans-serif;
  font-size: 12px;
  color: #777;
  font-weight: 500;
}

/* ── WhatsApp button ── */
.btn-whatsapp {
  width: 100%;
  background: #25D366;
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 16px;
  font-family: var(--font-dm), 'DM Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: .02em;
  transition: transform .2s cubic-bezier(.22,1,.36,1), box-shadow .2s cubic-bezier(.22,1,.36,1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 12px;
}
.btn-whatsapp:hover {
  transform: translateY(-3px) scale(1.015);
  box-shadow: 0 14px 40px rgba(37,211,102,.45);
}
.btn-whatsapp:active { transform: translateY(0) scale(1); }

/* ── Success message ── */
.form-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 32px 0 8px;
  text-align: center;
}
.form-success-icon {
  width: 52px;
  height: 52px;
  background: #0A0A0A;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-success-title {
  font-family: var(--font-anton), Anton, Impact, sans-serif;
  font-size: 28px;
  text-transform: uppercase;
  color: #0A0A0A;
  line-height: 1;
  letter-spacing: -.01em;
}
.form-success-sub {
  font-family: var(--font-dm), 'DM Sans', sans-serif;
  font-size: 14px;
  color: #777;
  line-height: 1.6;
}

/* ── FOOTER ── */
.lattic-footer {
  background: var(--bg-page);
  padding: 60px 48px 0;
  overflow: hidden;
  margin-top: 40px;
}
.footer-wordmark {
  font-family: var(--font-anton), Anton, Impact, sans-serif;
  font-size: clamp(180px, 28vw, 9999px);
  line-height: .82;
  letter-spacing: -.02em;
  color: #0A0A0A;
  text-transform: uppercase;
  text-align: center;
  user-select: none;
  display: block;
  width: 100vw;
  margin-left: calc(-48px);
  margin-bottom: -0.09em;
}
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0 18px;
  margin-top: 6px;
}
.footer-bottom span {
  font-family: var(--font-dm), 'DM Sans', sans-serif;
  font-size: 11px;
  color: #777;
}
@media(max-width:600px) {
  .form-row { grid-template-columns: 1fr; }
  .form-bento { padding: 20px 16px; }
  .cta-section { padding: 100px 16px 80px; }
  .lattic-footer { padding: 40px 20px 0; }
  .footer-wordmark { margin-left: calc(-20px); }
}
`;

export default function CtaFooter() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!phone && !email) {
      setError("Merci de renseigner au moins un moyen de contact.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, email, message }),
      });
      if (!res.ok) throw new Error("Erreur serveur");
      setSent(true);
    } catch {
      setError("Une erreur est survenue. Réessayez ou contactez-nous sur WhatsApp.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* CTA / Contact section */}
      <section className="cta-section" id="contact">
        <div className="cta-eyebrow">Contact</div>
        <h2 className="cta-title">
          <span>Prêt à</span>
          <span>grandir ?</span>
        </h2>
        <p className="cta-sub">On répond sous 24h. Pas de jargon, juste des résultats.</p>

        <div className="form-bento">
          {sent ? (
            <div className="form-success">
              <div className="form-success-icon">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M4 11l5 5 9-9" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="form-success-title">Message envoyé !</p>
              <p className="form-success-sub">On revient vers vous sous 24h.<br/>À très vite.</p>
            </div>
          ) : (
            <form className="cta-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label>Téléphone</label>
                  <input
                    type="tel"
                    placeholder="Votre numéro de téléphone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required={!email}
                  />
                </div>
                <div className="form-field">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required={!phone}
                  />
                </div>
              </div>
              <div className="form-field">
                <label>Expliquez nous votre projet !</label>
                <textarea
                  placeholder="Décrivez votre projet, vos objectifs, vos questions..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              {error && (
                <p style={{ fontFamily: "var(--font-dm),'DM Sans',sans-serif", fontSize: "12px", color: "#c0392b" }}>
                  {error}
                </p>
              )}
              <div className="form-submit">
                <button className="btn-demarrer" type="submit" disabled={loading}>
                  {loading ? "Envoi en cours…" : "Démarrer →"}
                </button>
                <span className="form-note">Aucun engagement. On vous recontacte sous 24h.</span>
              </div>
            </form>
          )}

          <div className="form-sep"><span>ou</span></div>

          <button
            className="btn-whatsapp"
            onClick={() => window.open("https://wa.me/33759750149", "_blank")}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.938-1.42A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
            </svg>
            Écrire sur WhatsApp
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="lattic-footer">
        <div className="footer-wordmark">LATTIC</div>
        <div className="footer-bottom">
          <span>© 2026 Lattic. Tous droits réservés.</span>
        </div>
      </footer>
    </>
  );
}
