export const Osoite = () => {
  return (
    <section id="address" className=" px-6 custom-responsive">
      {/* Divider Text */}
      <div data-aos="fade-up" className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Osoite
        </h2>
        <div className="w-16 h-1 bg-gray-300 mx-auto mb-8"></div>
      </div>

      {/* Image and Text Layout */}
      <div className="flex flex-col md:flex-row items-center justify-center md:items-start md:justify-start gap-x-12 px-6 max-w-6xl mx-auto">
        {/* Image */}
        <div data-aos="fade-right" className="flex-1 w-full max-w-md">
          <a
            href="https://maps.app.goo.gl/9YRj74E5ezTWunFGA"
            target="_blank"
            data-aos="fade-right"
            className="flex-1"
          >
            <img
              src="images/location.png"
              alt="Parquet"
              className="w-full max-w-md h-auto rounded-lg shadow-lg"
            />
          </a>
        </div>

        {/* Text Content */}
        <div
          data-aos="fade-left"
          className="flex-1 mt-8 md:mt-0 text-start text-gray-300 md:pr-4"
        >
          <p className="text-lg leading-relaxed text-center md:text-start">
            Klikkaa karttaa löytääkseksi toimistollemme
          </p>

          <p className="text-lg leading-relaxed mt-6 text-center md:text-start">
            <strong>Sysmäläntie 1 Halli 34</strong>
          </p>
        </div>
      </div>
    </section>
  );
};
