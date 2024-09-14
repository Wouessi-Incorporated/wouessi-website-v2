import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/SVG/Wouessi_Logo_horizontal_tag.svg";
import { CgArrowLongUp } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import "../styles/global.css";

function Navbar({ onClick, onMenuItemClick }) {
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [hamburgerMenu, openHamburgerMenu] = useState(false);

  const handleMenuToggle = () => {
    openHamburgerMenu(!hamburgerMenu);
    onClick(hamburgerMenu);
  };

  useEffect(() => {
    openHamburgerMenu(!onMenuItemClick);
  }, [onMenuItemClick]);

  return (
    <>
      <div className="flex justify-center pl-[1vw] pr-[1vw] z-1000">
        <div className="flex items-center justify-center text-[#2B00AC] h-[8vw] border-b-[0.001vw] border-[#B8B8B8] max-[450px]:w-[80%] max-[450px]:border-none max-[450px]:pt-[13vw] max-[450px]:pb-[9vw]">
          <div className="flex items-center gap-x-[10vw] w-[95%]">
            <Link
              to="frontend-react-wouessi-website-v2/"
              className="w-[20%] max-[450px]:w-[50%]">
              <img src={logo} className="cursor-pointer"></img>
            </Link>
            <ul className="flex gap-x-[2vw] py-3 w-[58vw] text-[1.1vw] justify-center cursor-pointer max-[450px]:hidden">
              <Link
                to="frontend-react-wouessi-website-v2/"
                className="navbar-link">
                <li className="py-2 hover:text-[#FF9900]  ">Home</li>
              </Link>
              <Link
                to="frontend-react-wouessi-website-v2/AboutUs"
                className="navbar-link">
                <li className="py-2 hover:text-[#FF9900]   ">About Us</li>
              </Link>
              <Link
                to="frontend-react-wouessi-website-v2/Services"
                className="navbar-link">
                <li className="py-2 hover:text-[#FF9900]   ">Services</li>
              </Link>
              <Link
                to="frontend-react-wouessi-website-v2/Products"
                className="navbar-link">
                <li className="py-2 hover:text-[#FF9900]   ">Products</li>
              </Link>
              <Link
                to="frontend-react-wouessi-website-v2/Portfolio"
                className="navbar-link">
                <li className="py-2 hover:text-[#FF9900]   ">Portfolio</li>
              </Link>
              <Link
                to="frontend-react-wouessi-website-v2/ContactUs"
                className="navbar-link">
                <li className="py-2 hover:text-[#FF9900]   ">Contact Us</li>
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setLanguageDropdown(true)}
                onMouseLeave={() => setLanguageDropdown(false)}>
                <div className="py-2 flex items-center gap-x-[0.2vw] cursor-pointer">
                  <p
                    className={`${
                      languageDropdown
                        ? "rotate-[90deg] transition-transform duration-300 font-bold"
                        : "font-bold"
                    }`}>
                    &gt;
                  </p>
                  <p>{language}</p>
                </div>
                {languageDropdown && (
                  <div className="absolute top-full left-0 mt-[0.5rem] w-max bg-white border border-gray-300 shadow-lg rounded-md z-10">
                    <p
                      className="px-4 py-2 hover:bg-[#FF9900] hover:text-white cursor-pointer transition-colors duration-300"
                      onClick={() => setLanguage("EN")}>
                      &gt; EN
                    </p>
                    <p
                      className="px-4 py-2 hover:bg-[#FF9900] hover:text-white cursor-pointer transition-colors duration-300"
                      onClick={() => setLanguage("FR")}>
                      &gt; FR
                    </p>
                  </div>
                )}
              </div>
            </ul>
          </div>
          <Link to="frontend-react-wouessi-website-v2/ContactUs">
            <div className="max-[450px]:hidden w-[9vw] h-[3vw] rounded-full border-[0.1vw] border-[#2B00AC] hover:bg-[#0033A0] hover:text-[#FFFFFF] text-[#2B00AC] flex items-center justify-center transition-all duration-300 ease-in-out relative shadow-inner hover:shadow-inner-custom text-[1.2vw]">
              Let's Talk
              <CgArrowLongUp className="ml-[1vw] text-[1.2vw] rotate-[90deg]" />
              <div className="absolute inset-0 rounded-full bg-[#0033A0] opacity-0 hover:opacity-20 transition-opacity duration-300 ease-in-out"></div>
            </div>
          </Link>
          {hamburgerMenu ? (
            <GiHamburgerMenu
              onClick={handleMenuToggle}
              className="w-[7vw] h-[7vw] cursor-pointer text-black min-[450.1px]:hidden"
            />
          ) : (
            <RxCross1
              onClick={handleMenuToggle}
              className="w-[7vw] h-[7vw] cursor-pointer text-black min-[450.1px]:hidden"
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
