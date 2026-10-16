import { ArrowDownIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export const Hero = () => {
  return (
    <section id="home" className="home-hero" aria-labelledby="hero-title">
      <img
        src="/images/hero-bg.JPG"
        alt="Ahmalattioiden tiimi ja työautot yrityksen toimitilojen edessä"
        width={5712}
        height={4284}
        fetchPriority="high"
        className="hero-photo"
      />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-layout">
        <div className="hero-copy">
          <h1 id="hero-title">Ahmalattiat Oy</h1>
          <p>
            Olemme lattian pinnoituksiin erikoistunut asennus- ja myyntiliike
            Jyväskylän Keljossa. Kauttamme saat korkealaatuiset materiaalit
            asennuksineen alusta loppuun.
          </p>
        </div>
        <div className="hero-bottom">
          <div className="hero-actions">
            <a className="hero-button hero-button-primary" href="tel:+358509110686">
              <PhoneIcon aria-hidden="true" />
              Soita
            </a>
            <a
              className="hero-button hero-button-secondary"
              href="mailto:janne.katka@ahmalattiat.fi"
              aria-label="Lähetä sähköpostia"
            >
              <EnvelopeIcon aria-hidden="true" />
              Sähköposti
            </a>
          </div>
          <a className="hero-explore" href="#tyot">
            Tutustu töihimme
            <ArrowDownIcon aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
