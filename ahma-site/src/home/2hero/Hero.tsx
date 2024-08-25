export const Hero = () => {
  return (
    <section
      data-aos="fade-up"
      className="flex flex-col justify-center items-center text-center min-h-screen bg-transparent px-4 custom-responsive"
    >
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold pb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-800 to-orange-700 inline">
          Ahmalattiat Oy
        </h1>
        <p className="text-lg md:text-2xl text-white mb-6 mt-10">
          Olemme Lattian pinnoituksiin erikoistunut asennus ja myynti liike
          Jyväskylän Keljossa. Kauttamme saat korkealaatuiset materiaalit
          asennuksineen alusta loppuun.
        </p>
      </div>
    </section>
  );
};
