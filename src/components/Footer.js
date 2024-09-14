import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CgArrowLongUp } from "react-icons/cg";
import WouessiLogoFooter from "../WouessiLogoFooter.svg";
import "../styles/global.css";

function Footer() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[90%] pt-[3vw] pb-[3vw] flex gap-x-[6vw] border-t-[0.2vw] border-[#2B00AC] max-[450px]:flex-col max-[450px]:border-t-[0.6vw]">
          <div className="space-y-[1vw] text-left mt-[-1vw] max-[450px]:mt-[2vw]">
            <h1 className="text-[3vw] font-bold max-[450px]:text-[7.5vw]">
              Get in touch now.
            </h1>
            <p className="text-left text-[1vw] text-[#828282] max-[450px]:text-[3vw]">
              Wouessi is your key to digital in an ever evolving media
              landscape. From generating concepts to developing and online
              presence, we can do it all.
            </p>
            <div className="flex gap-x-[4vw] items-center max-[450px]:gap-x-[14vw]">
              <a
                href={require("../assets/Documents/WouessiBrochure.pdf")}
                download="WouessiBrochure.pdf"
                className="border-black border-[0.1vw] bg-[#F7F7F7] hover:bg-[#2703A5] hover:text-white transition ease-in-out duration-300 rounded-full flex items-center justify-center mt-[1vw] gap-x-[0.3vw] w-[14vw] h-[14vw] text-[1.1vw] text-center cursor-pointer z-10 max-[450px]:w-[25vw] max-[450px]:h-[25vw] max-[450px]:text-[3vw] max-[450px]:mb-[10vw] max-[450px]:mt-[5vw]"
              >
                Download <br></br> our Brochure
                <CgArrowLongUp className="text-[1.1vw] rotate-[60deg] max-[450px]:text-[3vw]" />
              </a>
              <div className="space-y-[2.5vw]">
                <div className="flex text-[#2703A5]  text-[1.5vw] gap-x-[1.6vw] max-[450px]:text-[8vw] max-[450px]:w-[30vw] max-[450px]:flex-wrap max-[450px]:gap-x-[10vw] max-[450px]:gap-y-[5vw]">
                  <a
                    href="https://www.facebook.com/WouessiD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FF9900]"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://x.com/WouessiD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FF9900]"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/wouessid/mycompany/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FF9900]"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.instagram.com/wouessid/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FF9900]"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UC5fsK-v4WpJOR_tp-ZLBz4A?app=desktop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FF9900]"
                  >
                    <FaYoutube />
                  </a>
                </div>
                <p className="text-[0.8vw] text-[#828282] max-[450px]:hidden">
                  Copyright &copy;2024 Wouessi Inc. All rights reserved.
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-x-[2vw] max-[450px]:flex-wrap max-[450px]:gap-x-[6vw] justify-between">
            <ul className="w-[13vw] space-y-[1.5vw] text-left text-[#828282] text-[1vw] max-[450px]:text-[4.5vw] max-[450px]:w-[40vw] max-[450px]:font-semibold">
              <li className="text-[#2B00AC] hover:text-[#FF9900]  ">
                <Link
                  to="frontend-react-wouessi-website-v2/"
                  className="navbar-link"
                >
                  Home
                </Link>
              </li>

              <li className="hover:text-[#FF9900]">
                <Link
                  to="frontend-react-wouessi-website-v2/Products"
                  className="navbar-link"
                >
                  Products
                </Link>
              </li>
              <li className="hover:text-[#FF9900]">
                <Link
                  to="frontend-react-wouessi-website-v2/Portfolio"
                  className="navbar-link"
                >
                  Portfolio
                </Link>
              </li>
              <li className=" hover:text-[#FF9900]  ">
                <Link
                  to="frontend-react-wouessi-website-v2/Services"
                  className="navbar-link"
                >
                  Services
                </Link>
              </li>
            </ul>
            <ul className="w-[13vw] space-y-[1.5vw] text-left text-[#828282] text-[1vw] max-[450px]:text-[4.5vw] max-[450px]:w-[30vw] max-[450px]:font-semibold">
              <li className="text-[#2B00AC] hover:text-[#FF9900]  ">
                <Link
                  to="frontend-react-wouessi-website-v2/AboutUs"
                  className="navbar-link"
                >
                  About Us
                </Link>
              </li>
              <li className=" hover:text-[#FF9900]  ">
                <Link
                  to="frontend-react-wouessi-website-v2/Blog"
                  className="navbar-link"
                >
                  Blogs
                </Link>
              </li>
              <li className=" hover:text-[#FF9900]  ">
                <Link
                  to="frontend-react-wouessi-website-v2/Careers"
                  className="navbar-link"
                >
                  Careers
                </Link>
              </li>
              <li className=" hover:text-[#FF9900]  ">
                <Link
                  to="frontend-react-wouessi-website-v2/CookiePolicy"
                  className="navbar-link"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
            <ul className="w-[13vw] space-y-[1.5vw] text-left text-[#828282] text-[1vw] max-[450px]:text-[4.5vw] max-[450px]:w-[45vw] max-[450px]:mt-[7vw] max-[450px]:font-semibold">
              <li className="text-[#2B00AC] hover:text-[#FF9900]  ">
                <Link
                  to="frontend-react-wouessi-website-v2/ContactUs"
                  className="navbar-link"
                >
                  Contact Us
                </Link>
              </li>
              <li className=" hover:text-[#FF9900]  ">
                <Link
                  to="frontend-react-wouessi-website-v2/TermsCondition"
                  className="navbar-link"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li className=" hover:text-[#FF9900]  ">
                <Link
                  to="frontend-react-wouessi-website-v2/PrivacyPolicy"
                  className="navbar-link"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className=" hover:text-[#FF9900]  ">
                <Link
                  to="frontend-react-wouessi-website-v2/CopyrightPolicy"
                  className="navbar-link"
                >
                  Copyright Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center max-[450px]:pb-[5vw]">
        <div className="w-[90%]">
          <img
            src={WouessiLogoFooter}
            className="w-[100%] h-[27vw] mt-[-10vw] max-[450px]:mt-0"
          ></img>
        </div>
      </div>
    </>
  );
}

export default Footer;
