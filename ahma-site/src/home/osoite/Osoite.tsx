import halli from "../../assets/halli.png";

export const Osoite = () => {
  return (
    <section className="py-12 px-6 text-center custom-responsive md:pb-96">
      {/* Divider Text */}
      <div data-aos="fade-up" className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Osoite
        </h2>
        <div className="w-16 h-1 bg-gray-300 mx-auto mb-8"></div>
      </div>

      {/* Content Below */}
      <div className="flex flex-col md:flex-row items-start justify-between px-6">
        {/* Image */}
        <div data-aos="fade-right" className="flex-1">
          <img
            src={halli}
            alt="Parquet"
            className="w-full max-w-md h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div data-aos="fade-left" className="flex-1 mt-8 md:mt-0 md:ml-8">
          <p className="text-lg text-gray-300 text-start">
            Halliin löytyy käteväsit sisä pihan kautta
          </p>

          <p className="text-lg text-gray-300 mt-4 text-start">
            Voi tulla kahta reittiä, mutta tästä näkee
          </p>
        </div>
      </div>
    </section>
  );
  return (
    <section className="flex flex-col md:flex-row items-start justify-between px-6 py-12 custom-responsive md:pb-96">
      <div data-aos="fade-up" className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Päätoimiala
        </h2>
        <div className="w-16 h-1 bg-gray-300 mx-auto mb-8"></div>
      </div>
      <div
        data-aos="fade-right"
        className="flex-1 text-center md:text-left md:pr-10"
      >
        {/* <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Janne Kätkä
        </h1>
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-orange-600 via-orange-800 to-orange-700 text-transparent bg-clip-text mb-4">
          Yrittäjä / Pinnoittaja
        </h2> */}
        <p className="text-lg text-gray-300">
          Halliin löytyy käteväsit sisä pihan kautta
        </p>
        <p className="text-lg text-gray-300 mt-4">
          Voi tulla kahta reittiä, mutta tästä näkee
        </p>
      </div>
      {/* Right Side */}
      <div data-aos="fade-left" className="flex-1 mt-8 md:mt-0">
        <img
          src={halli}
          alt="Placeholder"
          className="w-full max-w-md h-auto rounded shadow-lg"
        />
      </div>
    </section>
  );
};
