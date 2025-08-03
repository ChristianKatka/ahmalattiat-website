import React from "react";
import ahlsell from "../../assets/kumppanit/ahlsell.svg";
import kRauta from "../../assets/kumppanit/k-rauta.svg";
import tarkett from "../../assets/kumppanit/tarkett-logo.svg";

export const Technologies: React.FC = () => {
  return (
    <section className="py-12 px-6 text-center md:pb-72">
      {/* Divider Text */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Yhteistyökumppanit
        </h2>
        <div className="w-24 h-1 bg-gray-300 mx-auto mb-8"></div>
      </div>

      {/* Technology Icons */}
      <div className="flex flex-wrap flex-col items-center gap-16 px-6 text-white">
        <img
          src="images/mapei.png"
          className="w-full max-w-60 md:max-w-sm h-auto"
          alt="mapei"
        />
        <img
          src={tarkett}
          className="w-full max-w-60 md:max-w-sm h-auto"
          alt="tarkett"
        />

        <img
          src={kRauta}
          className="w-full max-w-60 md:max-w-sm h-auto"
          alt="k-rauta"
        />

        <img
          src={ahlsell}
          className="w-full max-w-60 md:max-w-sm h-auto"
          alt="ahlsell"
        />

        <img
          src="images/maalari-mestarit.svg"
          className="w-full max-w-60 md:max-w-sm h-auto"
          alt="rtv"
        />
      </div>
    </section>
  );
};
