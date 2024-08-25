import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center text-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-12">Ota yhteyttä</h2>
      <div className="flex items-center mb-3">
        <PhoneIcon className="h-6 w-6 mr-2"></PhoneIcon>
        <p>
          <a href="tel:045 139 3535">045 139 3535</a>
        </p>
      </div>
      <div className="flex items-center mb-3">
        <EnvelopeIcon className="h-6 w-6 mr-2"></EnvelopeIcon>
        <p>
          <a href="mailto:janne.katka@ahmalattiat.fi">
            janne.katka@ahmalattiat.fi
          </a>
        </p>
      </div>
      <p className="text-lg ">Sysmäläntie 1 Halli 34, 40530 Jyväskylä</p>
      <p className="text-lg ">Y-tunnus: 2185717-7</p>
      <p className="text-lg ">Verkkolaskutusosoite: 003721857177</p>
      <p className="text-lg ">Välittäjä: Maventa</p>

      <div className="mt-12 text-sm text-gray-400 mb-6">
        <p>
          &copy; {new Date().getFullYear()} Ahmalattiat Oy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
