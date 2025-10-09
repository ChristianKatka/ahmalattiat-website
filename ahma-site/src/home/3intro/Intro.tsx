export const Intro = () => {
  return (
    <section className="flex flex-col mt-48 md:flex-row items-start justify-between px-6 py-12 custom-responsive md:pb-72">
      {/* Left Side */}
      <div
        data-aos="fade-right"
        className="flex-1 text-center md:text-left md:pr-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Janne Kätkä
        </h1>
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-orange-600 via-orange-800 to-orange-700 text-transparent bg-clip-text mb-4">
          Yrittäjä / Pinnoittaja
        </h2>
        <p className="text-lg text-gray-300">
          Olen toiminut alalla vuodesta 1996 lähtien ja yrittäjänä vuodesta 2007
          eteenpäin. Kauttamme saat korkealaatuiset materiaalit asennuksineen
          alusta loppuun.
        </p>
        <p className="text-lg text-gray-300 mt-4">
          Olemme lattian pinnoituksiin (matto, parketti, vinyyli ja muut lattian
          pinnoitus materiaalit) erikoistunut asennus- ja myyntiliike Jyväskylän
          Keljossa.
        </p>
      </div>
      {/* Right Side */}
      <div data-aos="fade-left" className="flex-1 mt-8 md:mt-0">
        <img
          src="/images/janne.JPG"
          alt="Placeholder"
          className="w-full max-w-md h-auto rounded shadow-lg"
        />
      </div>
    </section>
  );
};
