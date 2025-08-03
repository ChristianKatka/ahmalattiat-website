import { HomeIcon, MapIcon, PhoneIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className=" text-white">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Left Side: logo */}
        <img src={logo} alt="Logo" className="h-20 w-auto" />
        {/* Right Side: Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#home" className="hover:text-orange-500">
            <HomeIcon className="h-6 w-6" />
          </a>
          <a href="#employees" className="hover:text-orange-500">
            <PhoneIcon className="h-6 w-6" />
          </a>
          <a href="#address" className="hover:text-orange-500">
            <MapIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
