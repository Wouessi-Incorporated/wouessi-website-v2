import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import { CgArrowLongUp } from "react-icons/cg";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/SVG/Wouessi_Logo_horizontal_tag.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import "../../styles/global.css";
import { useParams, useNavigate } from "react-router-dom";
import content from "../../content/Layout/Navbar.json";
import { LanguageContext } from "../Utils/languageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function NavbarMobile() {
  const [navMenu, updateNavMenu] = useState(false); //Tray
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [hamburgerMenu, openHamburgerMenu] = useState(false);

  const { language, switchLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();

  const handleLanguageChange = (newLang) => {
    const path = window.location.pathname.replace(/^\/[a-z]{2}\//, "/");
    switchLanguage(newLang);
    navigate(`/${newLang}${path}`);
    window.location.reload();
    setLanguageDropdown(!languageDropdown);
    handleMenuToggle(); // Ensure menu closes when selecting language
  };

  const { lang } = useParams();
  const Content = content[lang];

  const currentLang = lang || "en";

  const handleMenuToggle = () => {
    openHamburgerMenu((prev) => !prev); // Toggle hamburger menu state
    updateNavMenu((prev) => !prev); // Toggle navigation menu state
  };

  useEffect(() => {
    // Apply or remove no-scroll class based on navMenu state
    if (navMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Reset menu states on window resize
    const handleResize = () => {
      updateNavMenu(false);
      setLanguageDropdown(false);
      openHamburgerMenu(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.classList.remove("no-scroll"); // Clean up class on component unmount
    };
  }, [navMenu]);

  return (
    <>
      <div className="flex justify-center pl-[1vw] pr-[1vw] navbar min-[450px]:hidden">
        <div className="flex items-center justify-center h-[8vw] border-b-[0.001vw] text-[#2B00AC] border-[#B8B8B8] max-[450px]:w-[80%] max-[450px]:border-none max-[450px]:pt-[13vw] max-[450px]:pb-[9vw]">
          <div className="flex items-center gap-x-[10vw] w-[95%]">
            <Link
              to={`/${currentLang}`}
              className="w-[20%] max-[450px]:w-[50%]">
              <img alt="" src={logo} className="cursor-pointer"></img>
            </Link>
          </div>

          {hamburgerMenu ? (
            <RxCross1
              onClick={handleMenuToggle}
              className="w-[7vw] h-[7vw] cursor-pointer text-black min-[450.1px]:hidden"
            />
          ) : (
            <GiHamburgerMenu
              onClick={handleMenuToggle}
              className="w-[7vw] h-[7vw] cursor-pointer text-black min-[450.1px]:hidden"
            />
          )}
        </div>
      </div>
      <motion.div
        className={`fixed navbar-slider top-0 left-0 w-full bg-[#F4F4F4] z-100 overflow-hidden ${
          navMenu ? "h-screen" : "h-0"
        }`}
        initial={{ height: 0 }}
        animate={{ height: navMenu ? "100vh" : 0 }}
        transition={{ duration: 0.5 }}>
        {navMenu && (
          <motion.div
            className="pt-[30vw] flex justify-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}>
            <motion.div
              className="w-full h-full space-y-[10vw]"
              variants={containerVariants}>
              <motion.div variants={itemVariants}>
                <Link
                  to={`/${currentLang}/ContactUs`}
                  onClick={handleMenuToggle}>
                  <div className="w-full flex justify-center">
                    <div className="w-[40vw] h-[12vw] gap-x-[1vw] rounded-full border-[0.1vw] border-[#2B00AC] hover:border-[#FF9900] hover:text-[#FF9900] text-[6vw] font-semibold flex items-center justify-center">
                      {Content.letstalk}
                      <CgArrowLongUp className="ml-[1vw] text-[6vw] rotate-[90deg]" />
                    </div>
                  </div>
                </Link>
              </motion.div>
              {[
                { name: `${Content.home}`, route: "/" },
                { name: `${Content.aboutUs}`, route: "/AboutUs" },
                { name: `${Content.services}`, route: "/Services" },
                { name: `${Content.products}`, route: "/Products" },
                { name: `${Content.portfolio}`, route: "/Portfolio" },
              ].map((item, index) => (
                <div onClick={handleMenuToggle} key={index}>
                  <motion.h1
                    className="text-[6vw] hover:text-[#FF9900] underline font-semibold"
                    variants={itemVariants}>
                    <Link to={`/${currentLang + item.route}`}>
                      <div>{item.name}</div>
                    </Link>
                  </motion.h1>
                </div>
              ))}
              <motion.div
                variants={itemVariants}
                className="flex justify-center">
                <div className="w-fit">
                  <div
                    onClick={() => {
                      setLanguageDropdown(!languageDropdown);
                    }}
                    className={`${
                      languageDropdown ? "text-[#FF9900]" : ""
                    } py-[2vw] gap-x-[1vw] flex items-center cursor-pointer hover:text-[#FF9900] text-[#2B00AC] text-[5vw] font-bold`}>
                    <IoIosArrowForward
                      className={`${
                        languageDropdown
                          ? "rotate-[90deg] transition-all duration-300 font-bold"
                          : "font-bold transition-all duration-300"
                      }`}
                    />
                    <div className="transition-all duration-300">
                      {currentLang.toUpperCase()}
                    </div>
                  </div>
                  {languageDropdown && (
                    <div className="absolute pl-[4vw]">
                      <div
                        className="flex items-center text-[#2B00AC] hover:text-[#FF9900] text-[5vw] font-bold cursor-pointer"
                        onClick={() => {
                          handleLanguageChange("en");
                        }}>
                        <IoIosArrowForward className="text-[4vw]" /> EN
                      </div>
                      <div
                        className="flex items-center text-[#2B00AC] hover:text-[#FF9900] text-[5vw] font-bold cursor-pointer"
                        onClick={() => {
                          handleLanguageChange("fr");
                        }}>
                        <IoIosArrowForward className="text-[4vw]" /> FR
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}

export default NavbarMobile;
