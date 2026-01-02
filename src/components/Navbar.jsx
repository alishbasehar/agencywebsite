import { useState } from "react";
import assets from "../images/assets";
import Theme from "./Theme";

const Navbar = ({ theme, settheme }) => {
  const [sidemenu, setsidemenu] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl">
      
      {/* INNER CONTAINER – SAME AS FOOTER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-4 flex justify-between items-center font-medium">
        
        {/* LOGO */}
        <img
          src={theme === "dark" ? assets.logo_dark : assets.logo}
          className="w-[120px]"
          alt="logo"
        />

        {/* NAV LINKS */}
        <nav
          className={`text-gray-700 dark:text-white
          ${!sidemenu ? "max-md:hidden" : "max-md:flex"}
          max-md:fixed max-md:top-0 max-md:right-0 max-md:h-screen
          max-md:w-[260px] max-md:flex-col max-md:bg-primary
          max-md:text-white max-md:pt-20 max-md:gap-6
          flex items-center gap-10`}
        >
          {/* CLOSE ICON (MOBILE) */}
          <img
            src={assets.close_icon}
            className="w-5 absolute right-4 top-4 md:hidden cursor-pointer"
            onClick={() => setsidemenu(false)}
            alt="close"
          />

          <a onClick={() => setsidemenu(false)} href="#hero" className="hover:border-b">
            Home
          </a>
          <a onClick={() => setsidemenu(false)} href="#services" className="hover:border-b">
            Services
          </a>
          <a onClick={() => setsidemenu(false)} href="#ourwork" className="hover:border-b">
            Our Work
          </a>
          <a onClick={() => setsidemenu(false)} href="#contactus" className="hover:border-b">
            Contact Us
          </a>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-6">
          <Theme theme={theme} settheme={settheme} />

          {/* MOBILE MENU ICON */}
          <img
            src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
            onClick={() => setsidemenu(true)}
            className="w-9 md:hidden cursor-pointer"
            alt="menu"
          />

          {/* DESKTOP BUTTON */}
          <a href="#contactus" className="hidden md:block">
            <button className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full hover:scale-105 transition-all">
              Connect
              <img src={assets.arrow_icon} width={14} alt="arrow" />
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
