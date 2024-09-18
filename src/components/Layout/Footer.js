import { Link, useParams } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CgArrowLongUp } from "react-icons/cg";
import WouessiLogoFooter from "../../assets/SVG/WouessiLogoFooter.svg";
import "../../styles/global.css";
import content from "../../content/Layout/Footer.json";

function Footer() {
  const { lang } = useParams(); 
  const Content = content[lang] || content["en"]; // Fallback to English if `Content` is undefined

  return (
    <>
      <footer className="flex flex-wrap w-full h-screen align-center justify-center relative footer">
        <div className="flex justify-center w-full h-auto pt-20 pb-[calc(80px_+_25vw)] md:mb-0 md:py-0 md:h-[calc(100%_-_25vw)]">
          <div className="w-[90%] pt-[3vw] pb-[3vw] flex gap-x-[6vw] border-t-[0.2vw] border-[#2B00AC] max-[450px]:flex-col max-[450px]:border-t-[0.6vw]">
            <div className="space-y-[1vw] text-left mt-[-1vw] max-[450px]:mt-[2vw]">
              <h1 className="text-[3vw] font-bold max-[450px]:text-[7.5vw]">
                {Content.getInTouch}
              </h1>
              <p className="text-left text-[1vw] text-[#828282] max-[450px]:text-[3vw]">
                {Content.description}
              </p>
              <div className="flex gap-x-[4vw] items-center max-[450px]:gap-x-[14vw]">
                <a
                  href={require("../../assets/Documents/WouessiBrochure.pdf")}
                  download="WouessiBrochure.pdf"
                  className="border-black border-[0.1vw] bg-[#2703A5] hover:bg-white text-white hover:text-black transition ease-in-out duration-300 rounded-full flex items-center justify-center mt-[1vw] gap-x-[0.3vw] w-[14vw] h-[14vw] text-[1.1vw] text-center cursor-pointer z-10 max-[450px]:w-[25vw] max-[450px]:h-[25vw] max-[450px]:text-[3vw] max-[450px]:mb-[10vw] max-[450px]:mt-[5vw]"
                >
                  {Content.downloadBrochure}
                  <CgArrowLongUp className="text-[1.1vw] rotate-[60deg] max-[450px]:text-[3vw]" />
                </a>
                <div className="space-y-[2.5vw]">
                  <div className="flex text-[#2703A5] text-[1.5vw] gap-x-[1.6vw] max-[450px]:text-[8vw] max-[450px]:w-[30vw] max-[450px]:flex-wrap max-[450px]:gap-x-[10vw] max-[450px]:gap-y-[5vw]">
                    <a
                      href={Content.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-150 transition-transform duration-300 z-10"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href={Content.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-150 transition-transform duration-300 z-10"
                    >
                      <FaXTwitter />
                    </a>
                    <a
                      href={Content.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-150 transition-transform duration-300 z-10"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href={Content.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-150 transition-transform duration-300 z-10"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href={Content.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-150 transition-transform duration-300 z-10"
                    >
                      <FaYoutube />
                    </a>
                  </div>
                  <p className="text-[0.8vw] text-[#828282] max-[450px]:hidden">
                    {Content.copyright}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-x-[2vw] max-[450px]:flex-wrap max-[450px]:gap-x-[6vw] justify-between">
              <ul className="w-[13vw] space-y-[1.5vw] text-left text-[#828282] text-[1vw] max-[450px]:text-[4.5vw] max-[450px]:w-[40vw] max-[450px]:font-semibold">
                <li className="text-[#2B00AC]">
                  <Link to={`/${lang}/`} className="footer-link">
                    {Content.home}
                  </Link>
                </li>
                <li>
                  <Link to={`/${lang}/Products`} className="footer-link">
                    {Content.products}
                  </Link>
                </li>
                <li>
                  <Link to={`/${lang}/Portfolio`} className="footer-link">
                    {Content.portfolio}
                  </Link>
                </li>
                <li>
                  <Link to={`/${lang}/Services`} className="footer-link">
                    {Content.services}
                  </Link>
                </li>
              </ul>
              <ul className="w-[13vw] space-y-[1.5vw] text-left text-[#828282] text-[1vw] max-[450px]:text-[4.5vw] max-[450px]:w-[30vw] max-[450px]:font-semibold">
                <li className="text-[#2B00AC]">
                  <Link to={`/${lang}/AboutUs`} className="footer-link">
                    {Content.aboutUs}
                  </Link>
                </li>
                <li>
                  <Link to={`/${lang}/Blogs`} className="footer-link">
                    {Content.blogs}
                  </Link>
                </li>
                <li>
                  <Link to={`/${lang}/Careers`} className="footer-link">
                    {Content.careers}
                  </Link>
                </li>
                <li>
                  <Link to={`/${lang}/CookiePolicy`} className="footer-link">
                    {Content.cookiePolicy}
                  </Link>
                </li>
              </ul>
              <ul className="w-[13vw] space-y-[1.5vw] text-left text-[#828282] text-[1vw] max-[450px]:text-[4.5vw] max-[450px]:w-[45vw] max-[450px]:mt-[7vw] max-[450px]:font-semibold">
                <li className="text-[#2B00AC]">
                  <Link to={`/${lang}/ContactUs`} className="footer-link">
                    {Content.contactUs}
                  </Link>
                </li>
                <li>
                  <Link to={`/${lang}/TermsCondition`} className="footer-link">
                    {Content.termsConditions}
                  </Link>
                </li>
                <li>
                  <Link to={`/${lang}/PrivacyPolicy`} className="footer-link">
                    {Content.privacyPolicy}
                  </Link>
                </li>
                <li>
                  <Link to={`/${lang}/CopyrightPolicy`} className="footer-link">
                    {Content.copyrightPolicy}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="wouessi-background">
          <div className="flex justify-center max-[450px]:pb-[5vw] pt-8 absolute bottom-0">
            <div className="w-[90%]">
              <img
                alt=""
                src={WouessiLogoFooter}
                className="w-[100%] h-[27vw] mt-[-10vw] max-[450px]:mt-0"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
