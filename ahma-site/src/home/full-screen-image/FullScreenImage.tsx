// import backgroundImage from "../../assets/background.jpg";
// import Navbar from "../1navbar/Navbar";

export const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Centered Text */}
      {/* <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          Welcome to Our Website
        </h1>
      </div> */}
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
    </section>
  );
};
