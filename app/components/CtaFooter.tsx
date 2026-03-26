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
  font-size: clamp(58px, 9vw, 110px);
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
  margin-bottom: 48px;
  line-height: 1.6;
}
.cta-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: left;
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
  border: 1px solid rgba(0,0,0,.1);
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
.form-field textarea:focus { border-color: rgba(0,0,0,.4); }
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
  margin-top: 8px;
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
  transition: opacity .15s;
}
.btn-demarrer:hover { opacity: .8; }
.form-note {
  font-family: var(--font-dm), 'DM Sans', sans-serif;
  font-size: 12px;
  color: #777;
  text-align: center;
}

/* ── FOOTER ── */
.lattic-footer {
  background: var(--bg-page);
  padding: 100px 48px 0;
  overflow: hidden;
  margin-top: 40px;
  border-top: 1px solid rgba(0,0,0,.07);
}
.footer-contact {
  display: flex;
  flex-direction: row;
  gap: 28px;
  margin-bottom: 60px;
}
.footer-contact a {
  font-family: var(--font-dm), 'DM Sans', sans-serif;
  font-size: 13px;
  color: #777;
  text-decoration: none;
  font-weight: 500;
  transition: color .15s;
}
.footer-contact a:hover { color: #0A0A0A; }
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
  margin-bottom: -0.18em;
}
@media(max-width:600px) {
  .form-row { grid-template-columns: 1fr; }
  .lattic-footer { padding: 60px 20px 0; }
  .footer-wordmark { margin-left: calc(-20px); }
  .footer-contact { flex-direction: column; gap: 8px; }
}
`;

export default function CtaFooter() {
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

        <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <div className="form-field">
              <label>Téléphone</label>
              <input type="tel" placeholder="Votre numéro de téléphone" />
            </div>
            <div className="form-field">
              <label>Email</label>
              <input type="email" placeholder="votre@email.com" />
            </div>
          </div>
          <div className="form-field">
            <label>Remarques <span className="optional">(facultatif)</span></label>
            <textarea placeholder="Décrivez votre projet, vos objectifs, vos questions..." />
          </div>
          <div className="form-submit">
            <button className="btn-demarrer" type="submit">Démarrer →</button>
            <span className="form-note">Aucun engagement. On vous recontacte sous 24h.</span>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="lattic-footer">
        <div className="footer-contact">
          <a href="mailto:lattic.agence@gmail.com">lattic.agence@gmail.com</a>
          <a href="tel:+33759750149">07 59 75 01 49</a>
        </div>

        <div className="footer-wordmark">LATTIC</div>
      </footer>
    </>
  );
}
