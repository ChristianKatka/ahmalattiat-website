export const AboutMe = () => {
  return (
    <section className="py-16 px-6 custom-responsive md:pb-72">
      {/* Divider Text */}
      <div data-aos="fade-up" className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Päätoimiala
        </h2>
        <div className="w-16 h-1 bg-gray-300 mx-auto mb-8"></div>
      </div>

      {/* Image and Text Layout */}
      <div className="flex flex-col md:flex-row items-center justify-center md:items-start md:justify-start gap-x-12 px-6 max-w-6xl mx-auto">
        {/* Image */}
        <div data-aos="fade-right" className="flex-1 w-full max-w-md">
          <img
            src="/images/lprksksairaala.png"
            alt="Parquet"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div
          data-aos="fade-left"
          className="flex-1 mt-8 md:mt-0 text-start text-gray-300 md:pr-4"
        >
          <p className="text-lg leading-relaxed text-center md:text-start">
            Mattotyöt ja parkettityöt, kosteusvaurio korjaukset, haitallisten
            päästöjen kapseloinnit, lattioiden halkeamien korjaukset, oikomiset,
            tasoitukset ja kaatojen teot. Mattotyöt ja parkettityöt kosteisiin
            tiloihin, autotalleihin, varastoihin ja käytäviin. Palvelemme sekä
            yksityisiä että yrityksiä ja julkisia kohteita.
          </p>

          <p className="text-lg leading-relaxed mt-6 text-center md:text-start">
            <strong>Sivutoimialamme:</strong> Pienremontit – Sauna- ja
            pesuhuoneremontit
          </p>
        </div>
      </div>
    </section>
  );
};
