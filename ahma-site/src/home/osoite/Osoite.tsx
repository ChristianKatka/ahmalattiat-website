import { CursorArrowRaysIcon, MapPinIcon } from "@heroicons/react/24/outline";

export const Osoite = () => {
  return (
    <section
      id="address"
      className="py-16 px-6 scroll-mt-20 custom-responsive"
    >
      {/* Divider Text */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Osoite
        </h2>
        <div className="w-16 h-1 bg-gray-300 mx-auto mb-8"></div>
      </div>

      {/* Icon-led map card */}
      <div className="max-w-md mx-auto rounded-lg border border-white/10 bg-white/5 overflow-hidden">
        <a href="https://maps.app.goo.gl/9YRj74E5ezTWunFGA" target="_blank">
          <img
            src="images/location.png"
            alt="Kartta Ahmalattiat Oy:n toimipisteeseen, Sysmäläntie 1 Halli 34"
            className="w-full h-auto"
          />
        </a>
        <div className="p-5 space-y-3">
          <div className="flex items-center gap-3 text-gray-300">
            <CursorArrowRaysIcon
              className="w-5 h-5 text-orange-300 flex-shrink-0"
              aria-hidden="true"
            />
            <p>Klikkaa karttaa löytääkseksi toimistollemme</p>
          </div>
          <div className="flex items-center gap-3">
            <MapPinIcon
              className="w-5 h-5 text-orange-300 flex-shrink-0"
              aria-hidden="true"
            />
            <p className="font-semibold text-white">Sysmäläntie 1 Halli 34</p>
          </div>
        </div>
      </div>
    </section>
  );
};
