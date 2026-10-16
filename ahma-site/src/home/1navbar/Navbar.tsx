import { useRef, useState } from "react";
import { Bars3Icon, PhoneIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const links = [
    { href: "#home", label: "Etusivu" },
    { href: "#tyot", label: "Työt" },
    { href: "#employees", label: "Yhteystiedot" },
    { href: "#address", label: "Sijainti" },
  ];

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <a className="skip-link" href="#main-content">Siirry sisältöön</a>
      <div className="header-inner">
        <a className="site-brand" href="#home" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Ahmalattiat Oy – etusivu" width={389} height={280} />
        </a>
        <nav className="desktop-navigation" aria-label="Päänavigaatio">
          {links.slice(1).map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="header-phone" href="tel:+358509110686" aria-label="Soita Jannelle, 050 911 0686">
            <PhoneIcon aria-hidden="true" />
            <span className="phone-number">050 911 0686</span>
            <span className="phone-label">Soita</span>
          </a>
          <button
            ref={menuButton}
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Sulje valikko" : "Avaa valikko"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <XMarkIcon aria-hidden="true" /> : <Bars3Icon aria-hidden="true" />}
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobiilinavigaatio" hidden={!menuOpen}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
