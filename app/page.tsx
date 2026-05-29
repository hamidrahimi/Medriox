export default function Home() {
  return (
    <main>
      <div className="aurora" aria-hidden="true">
        <span className="orb orb--1" />
        <span className="orb orb--2" />
        <span className="orb orb--3" />
      </div>
      <div className="bg-pattern" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="container">
        <section className="hero-copy">
          <h1 className="logo-wrap">
            <img
              src="/img/logo-medriox-white.svg"
              alt="Medriox"
              width={222}
              height={52}
              fetchPriority="high"
            />
          </h1>

          <span className="trust-badge">
            Where Healing and Technology come together
          </span>
          {/* <p className="tagline"></p> */}

          <p className="hero-text hero-text--1">
            <strong>Medriox</strong> medical device company, designs, develops,
            sells unique solution and technically support equipment to treat and
            heal Bladder cancer in a way to improve outcomes and cover its
            performance worldwide to increase the chance of life.
          </p>
          <p className="hero-text hero-text--2">
            MedRiox is to enable people all around the world to have easily and
            safely access to the reliable treatment.
          </p>

          <svg
            className="pulse-line"
            viewBox="0 0 320 24"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <path
              className="pulse-line__track"
              d="M0 12 H40 L48 12 L56 4 L64 20 L72 12 L88 12 L96 12 L104 4 L112 20 L120 12 L320 12"
            />
            <path
              className="pulse-line__beam"
              d="M0 12 H40 L48 12 L56 4 L64 20 L72 12 L88 12 L96 12 L104 4 L112 20 L120 12 L320 12"
            />
          </svg>

          <a
            className="contact-link"
            href="mailto:contact@medriox.com"
            aria-label="Email Medriox"
          >
            <span className="contact-link__ring" aria-hidden="true" />
            <img src="/img/icon-email.svg" alt="" width={24} height={24} />
            <span>contact@medriox.com</span>
          </a>
        </section>

        <figure className="hero-visual">
          <span className="hero-visual__halo" aria-hidden="true" />
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="/img/fig-intro-mobile.png"
            />
            <img
              className="intro-figure"
              src="/img/fig-intro-desktop.png"
              alt=""
              width={561}
              height={619}
              loading="lazy"
              decoding="async"
            />
          </picture>
        </figure>
      </div>
    </main>
  );
}
