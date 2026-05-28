export default function Home() {
  return (
    <main>
      <div className="bg-pattern" aria-hidden="true" />

      <div className="container">
        <section>
          <h1>
            <img
              src="/img/logo-medriox-white.svg"
              alt="Medriox"
              width={202}
              height={47}
              fetchPriority="high"
            />
          </h1>
          <p>
            <strong>Medriox</strong> medical device company, designs, develops,
            sells unique solution and technically support equipment to treat and
            heal Bladder cancer in a way to improve outcomes and cover its
            performance worldwide to increase the chance of life.
          </p>
          <p>
            MedRiox is to enable people all around the world to have easily and
            safely access to the reliable treatment.
          </p>
          <a href="mailto:contact@medriox.com" aria-label="Email Medriox">
            <img src="/img/icon-email.svg" alt="" width={24} height={24} />
            <span>contact@medriox.com</span>
          </a>
        </section>

        <figure>
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
