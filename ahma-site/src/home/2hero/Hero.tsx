export const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-start items-center text-center min-h-screen px-4 pt-24
                 bg-[url('/images/hero-bg.webp')] bg-cover bg-center bg-no-repeat"
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Text content */}
      <div data-aos="fade-up" className="relative z-10 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold pb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-800 to-orange-700 inline">
          Ahmalattiat Oy
        </h1>
        <h3 className="text-lg md:text-2xl text-white mb-6 mt-10 text-bo">
          Olemme Lattian pinnoituksiin erikoistunut asennus ja myynti liike
          Jyväskylän Keljossa. Kauttamme saat korkealaatuiset materiaalit
          asennuksineen alusta loppuun.
        </h3>
      </div>
    </section>
  );
};
