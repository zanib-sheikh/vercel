import React, { useState } from "react";
import logoa from "../assets/logoa.png";
import menu from "../assets/menu.png";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.setAttribute("dir", lng === "ar" ? "rtl" : "ltr");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="font-montserrat bg-[rgb(29,30,31)]">
      <nav className="relative flex items-center justify-between px-6 bg-transparent text-white z-10">
        {/* Logo - Fixed */}
        <div className={`flex items-center ${i18n.language === "ar" ? "ml-auto" : ""}`}>
          <img src={logoa} alt="Logo" className="w-36 h-auto object-contain" />
        </div>

        <div className={`hidden md:flex items-center space-x-24 justify-center text-sm font-lg ${i18n.language === "ar" ? "absolute top-6 left-2 gap-x-52 text-lg" : "absolute top-6 right-12"}`}>
        <div className={`flex ${i18n.language === "ar" ? " text-lg gap-x-20" : "text-md space-x-20"}`}>
    <a href="#about" className="hover:text-[#368146] transition duration-300">
      {t("navbar.about")}
    </a>
    <a href="#feature" className="hover:text-[#368146] transition duration-300">
      {t("navbar.feature")}
    </a>
    <a href="#subscription" className="hover:text-[#368146] transition duration-300">
      {t("navbar.subscription")}
    </a>
  </div>

  {/* Add gap between "فوائد الاشتراك" and the button in Arabic */}
  <div className={`hidden md:block ${i18n.language === "ar" ? "ml-8" : "mr-8"}`}>
    <button className="flex items-center px-3 py-2 bg-white hover:bg-gray-200 hover:text-black border-2 border-b-4 border-black rounded-full text-black font-semibold text-sm shadow-md transition duration-300">
      {t("navbar.signup")}
      <span 
        className={`mr-2 ml-2 flex items-center justify-center w-8 h-8 bg-green-800 text-white rounded-full shadow-inner 
        ${i18n.language === "ar" ? "rotate-180" : ""}`}
      >
        ➙
      </span>
    </button>
  </div>
</div>


        {/* Hamburger Menu (Mobile View) */}
        <div className="md:hidden flex py-1 items-center">
          <button onClick={toggleMenu} className="text-white" aria-label="Toggle Navigation">
            <img src={menu} alt="Hamburger Menu" className="w-6 h-6" />
          </button>
        </div>

        {/* Dropdown Menu (Mobile View) */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden absolute top-full left-0 w-full h-auto bg-black py-2 flex flex-col items-center space-y-4 ${i18n.language === "ar" ? "flex-row-reverse" : ""}`}
        >
          <a href="#about" className="hover:text-[#368146] text-white transition duration-300">
            {t("navbar.about")}
          </a>
          <a href="#feature" className="hover:text-[#368146] text-white transition duration-300">
            {t("navbar.feature")}
          </a>
          <a href="#subscription" className="hover:text-[#368146] text-white transition duration-300">
            {t("navbar.subscription")}
          </a>
          <button className="flex items-center px-3 py-2 bg-white hover:bg-gray-200 hover:text-black border-2 border-b-4 border-black rounded-full text-black font-semibold text-sm shadow-md transition duration-300">
            {t("navbar.signup")}
            <span 
              className={`mr-2 ml-2 flex items-center justify-center w-8 h-8 bg-green-800 text-white rounded-full shadow-inner 
              ${i18n.language === "ar" ? "rotate-180" : ""}`}
            >
              ➙
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
