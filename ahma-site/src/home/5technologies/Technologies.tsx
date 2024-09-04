import React from "react";
import tarkett from "../../assets/kumppanit/tarkett-logo.svg";
import rtv from "../../assets/kumppanit/rtv.png";
import kRauta from "../../assets/kumppanit/k-rauta.svg";
import ahlsell from "../../assets/kumppanit/ahlsell.svg";

export const Technologies: React.FC = () => {
  return (
    <section className="py-12 px-6 text-center md:pb-96">
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
          src="https://cdnmedia.mapei.com/images/librariesprovider41/logos/logo-header-finland.png?sfvrsn=15e9a7a_2"
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
          src={rtv}
          className="w-full max-w-32 md:max-w-44 h-auto"
          alt="rtv"
        />
      </div>
    </section>
  );
};
