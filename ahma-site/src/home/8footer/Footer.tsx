import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import logo from "../../assets/logo.png";

const navLinks = [
  { href: "#tyot", label: "Työt" },
  { href: "#employees", label: "Työntekijät" },
  { href: "#address", label: "Sijainti" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-6 custom-responsive pt-16 pb-8">
      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-3">
        <div>
          <img src={logo} alt="Ahmalattiat Oy" className="w-28 h-auto mb-4" />
          <p className="text-sm text-gray-400 max-w-xs">
            Lattianpäällystykseen ja pienremontointiin erikoistunut asennus- ja
            myyntiliike Jyväskylän Keljossa.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-4">
            Yhteystiedot
          </h3>
          <div className="space-y-2 text-sm text-gray-300">
            <a
              href="tel:0509110686"
              className="flex items-center gap-2 hover:text-orange-300"
            >
              <PhoneIcon
                className="w-4 h-4 text-orange-300"
                aria-hidden="true"
              />
              050 911 0686
            </a>
            <a
              href="mailto:janne.katka@ahmalattiat.fi"
              className="flex items-center gap-2 hover:text-orange-300"
            >
              <EnvelopeIcon
                className="w-4 h-4 text-orange-300"
                aria-hidden="true"
              />
              janne.katka@ahmalattiat.fi
            </a>
            <p className="flex items-start gap-2">
              <MapPinIcon
                className="w-4 h-4 text-orange-300 mt-0.5 flex-shrink-0"
                aria-hidden="true"
              />
              Sysmäläntie 1 Halli 34, 40530 Jyväskylä
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-4">
            Yrityksen tiedot
          </h3>
          <div className="space-y-2 text-sm text-gray-300">
            <p>Y-tunnus: 2185717-7</p>
            <p>Verkkolaskutusosoite: 003721857177</p>
            <p>Välittäjä: Maventa</p>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Ahmalattiat Oy. Kaikki oikeudet
          pidätetään.
        </p>
        <div className="flex gap-5">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-orange-300">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
