import parquet from "../../assets/parquet.jpg";

export const AboutMe = () => {
  return (
    <section className="py-12 px-6 text-center custom-responsive md:pb-96">
      {/* Divider Text */}
      <div data-aos="fade-up" className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Päätoimiala
        </h2>
        <div className="w-16 h-1 bg-gray-300 mx-auto mb-8"></div>
      </div>

      {/* Content Below */}
      <div className="flex flex-col md:flex-row items-start justify-between px-6">
        {/* Image */}
        <div data-aos="fade-right" className="flex-1">
          <img
            src={parquet}
            alt="Parquet"
            className="w-full max-w-md h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div data-aos="fade-left" className="flex-1 mt-8 md:mt-0 md:ml-8">
          <p className="text-lg text-gray-300 text-start">
            Mattotyöt ja parkettityöt ,Kosteuvaurio korjaukset,haitallisten
            päästöjen kapseloinnit,Lattioiden halkeamien korjaukset, oikomiset,
            tasoitukset ja kaatojen teot mattotyöt ja parketti työt, kosteat
            tilat, autotallit ja varastojen, käytävien pinnoitukset,
            Yksityiset,Yritykset ja julkiset kohtee
          </p>

          <p className="text-lg text-gray-300 mt-4 text-start">
            Sivutoimialamme: - Pienremontit - Sauna- ja pesuhuoneremontit
          </p>
        </div>
      </div>
    </section>
  );
};
