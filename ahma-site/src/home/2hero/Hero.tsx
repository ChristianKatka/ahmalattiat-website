export const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-start items-center text-center min-h-screen px-4 pt-24
                 bg-[url('/images/hero-bg.JPG')] bg-cover bg-center bg-no-repeat"
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Text content */}
      <div
        data-aos="fade-up"
        className="relative z-10 max-w-4xl bg-black/60 p-4 md:p-6 rounded-lg"
      >
        <h1 className="text-4xl md:text-6xl font-bold pb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-orange-700 to-orange-600 inline">
          Ahmalattiat Oy
        </h1>
        <h3 className="text-lg md:text-2xl text-white mb-6 mt-10 text-bo">
          Olemme lattian pinnoituksiin erikoistunut asennus- ja myyntiliike
          Jyväskylän Keljossa. Kauttamme saat korkealaatuiset materiaalit
          asennuksineen alusta loppuun.
        </h3>
      </div>
    </section>
  );
};
