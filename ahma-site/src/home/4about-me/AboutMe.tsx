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
          <p className="text-lg leading-relaxed md:text-start">
            Olemme lattianpäällystyksen ja pienremontoinnin ammattilaisia.
            Tarjoamme korkealaatuisia lattian pinnoitusratkaisuja sekä uusiin
            että saneerattaviin tiloihin olipa kyseessä koti, liiketila tai
            julkinen kohde me olemme oikea valinta! Erikoisalaamme ovat:
          </p>
          <p className="mt-4">• Ongelmalattioiden asennus</p>
          <p>• Lattian saneeraus</p>
          <p>• Jalkalistojen ja muiden viimeistelyjen toteutus</p>
          <p>• Pienet sisäremontit</p>
          <p className="mb-4">• Lattioiden injektoinnit</p>
          <p>
            Palvelemme sekä yksityisasiakkaita että julkista sektoria, ja otamme
            hoitaaksemme niin pienet kuin suuret projektit ammattitaidolla ja
            luotettavasti. Ota yhteyttä – tehdään lattiastasi toimiva, kestävä
            ja tyylikäs!
          </p>
        </div>
      </div>
    </section>
  );
};
