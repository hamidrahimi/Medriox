export default function NotFound() {
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
            />
          </h1>
          <p>Page not found.</p>
          <a href="/">Return home</a>
        </section>
      </div>
    </main>
  );
}
