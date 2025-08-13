import React, { useState } from "react";
import "../styles/Home.css";
import { PiArrowCircleRightLight } from "react-icons/pi";
import { PiArrowCircleLeftLight } from "react-icons/pi";
import { CgArrowLongUp } from "react-icons/cg";
import HeroBannerVideo from "../assets/Video/HeroBannerVideo.mp4";
// import HartnamtemahLogo from "../HartnamtemahLogo.svg";
// import ASDICLogo from "../ASDICLogo.svg";
// import CADRLogo from "../CADRLogo.svg";
// import AfroTechTalkLogo from "../AfroTechTalkLogo.svg";
import Aldelia from "../assets/SVG/ClientsLogo/AldeliaLogo.svg";
import ARQCH from "../assets/SVG/ClientsLogo/ARQCHLogo.svg";
import Precision from "../assets/SVG/ClientsLogo/PrecisionLogo.svg";
import Charis from "../assets/SVG/ClientsLogo/CharisLogo.svg";
import KigaliRunningClub from "../assets/SVG/ClientsLogo/KigaliRunningClub.svg";

import WhyChooseUsBackground from "../assets/WhyChooseUsBackground.png";
import DigitalMarketingImage from "../assets/what-we-do-digital-marketing.jpeg";
import SoftwareEngineeringImage from "../assets/what-we-do-software-engineering.jpeg";
import SliderData from "../helpers/RecentProjectSlider";
// import { SliderHome } from "../GraphQL/Queries";
import { gql, useQuery } from "@apollo/client";
import Achievements from "../components/Achievements";
import OurPartners from "../components/OurPartners";
import NewsletterRegister from "../components/NewsletterRegister";
import OurClients from "../components/OurClients";
import RedefineCollab from "../assets/SVG/RedefineCollab.svg";
import DriveTransformation from "../assets/SVG/DriveTransformation.svg";
import RiipenLogo from "../assets/SVG/RiipenLogo.svg";
import BipocFoundationLogo from "../assets/SVG/BipocFoundationLogo.svg";
import HomepageUnknownPartnerLogo from "../assets/SVG/HomepageUnknownPartnerLogo.svg";
import AyaLogo from "../assets/SVG/AyaLogo.svg";
import DigitalMainStLogo from "../assets/SVG/DigitalMainStLogo.svg";

import ClientTestimonySlider from "../components/ClientTestimonySlider";
import MobileSEOServicesBlogImage from "../assets/MobileSEOServicesBlogImage.jpeg";
import TechnicalSEOServicesBlogImage from "../assets/TechnicalSEOServicesBlogImage.jpeg";
import OurVision from "../assets/SVG/HomepageOurVision.svg";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const SLIDER_HOME = gql`
  query Sliderhome {
    page(idType: URI, id: "slider-home") {
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;

const CLIENTS = gql`
  query clients {
    posts(where: { categoryName: "client-data" }) {
      edges {
        node {
          title
          featuredImage {
            node {
              title
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

const WHY_CHOOSE_US_HOME = gql`
  query whyChooseUsHome {
    page(idType: URI, id: "why-choose-us-home") {
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;

const SERVICES_HOME = gql`
  query servicesHome {
    posts(where: { categoryName: "services" }, last: 2) {
      edges {
        node {
          title
          content
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

const GET_PORTFOLIOS = gql`
  query GetPortfolios {
    posts(where: { categoryName: "Portfolio" }) {
      edges {
        node {
          title
          content
          image: featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

const GET_TESTIMONIALS = gql`
  query GetTestimonials {
    posts(where: { categoryName: "Testimonials" }) {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`;

const SERVICE_QUOTE = gql`
  query serviceQuote {
    post(idType: URI, id: "2024/07/08/amazing-digital-service") {
      title
      content
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
    }
  }
`;

const BOTTOM_QUOTE = gql`
  query bottomQuote {
    post(idType: URI, id: "2024/07/08/work-with-us") {
      title
      content
    }
  }
`;

function Home() {
  const { error, loading, data } = useQuery(SLIDER_HOME);
  const [WouessiPronunciation, setWouessiPronunciation] = useState(false);

  const [projSlider, updateProjSlider] = useState(0);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  const services = [
    "WEB DEVELOPMENT",
    "LOGO DESIGN",
    "AI SERVICES",
    "BRAND DESIGN",
    "SOCIAL MEDIA",
    "GRAPHIC DESIGN",
    "SOFTWARE ENGINEERING",
    "CONCEPT DEVELOPMENT",
    "DIGITAL MARKETING",
    "VIDEO PRODUCTION",
    "DEVOPS",
  ];

  return (
    <div className="overflow-hidden">
      <div className="flex justify-center mt-[5vw]">
        <div className="flex justify-left w-[80%] text-left max-[450px]:justify-center">
          <div className="flex flex-col">
            <h2 className="text-[2vw] font-light max-[450px]:text-[5vw]">
              TRANSFORM YOUR
            </h2>
            <div className="flex items-center gap-x-[1vw] mt-[-4vw]">
              <h1 className="text-[12vw] font-extrabold max-[450px]:text-[18vw]">
                BUSI
              </h1>
              <div className="bg-[#FF9900] rounded-full w-[7vw] h-[7vw] ml-[25vw] mt-[5vw] min-[450.1px]:hidden"></div>
              <p className="w-[16vw] text-left text-[1.3vw] max-[450px]:hidden">
                We provide innovative digital solutions to help your business
                succeed.
              </p>
            </div>
            <div className="flex items-center mt-[-8vw] max-[450px]:mt-[-12vw]">
              <div className="flex justify-center w-[24vw] max-[450px]:w-[27.5vw]">
                <div className="bg-[#FF9900] rounded-full w-[5vw] h-[5vw] max-[450px]:hidden"></div>
              </div>
              <h1 className="text-[12vw] font-extrabold z-10 max-[450px]:text-[18vw]">
                NESS
              </h1>
            </div>
          </div>
          <div>
            <Link to="/frontend-react-wouessi-website-v2/Portfolio">
              <div className="border-black border-[0.1vw] hover:bg-[#2703A5] hover:text-white transition ease-in-out duration-300 rounded-full flex items-center justify-center mt-[1vw] ml-[8vw] gap-x-[0.3vw] w-[14vw] h-[14vw] text-[1.1vw] cursor-pointer max-[450px]:hidden">
                See Our Work
                <CgArrowLongUp className="text-[1.1vw] rotate-[60deg]" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[-5vw] max-[450px]:mt-[-7vw]">
        <div className="flex justify-end w-[80%] h-[28vw] max-[450px]:w-full max-[450px]:flex-none max-[450px]:justify-start max-[450px]:h-[42vw]">
          <div className="w-[62vw] max-[450px]:w-full relative">
            <video
              src={HeroBannerVideo}
              className="h-full bg-cover bg-[center_-6vw] opacity-90 max-[450px]:w-full max-[450px]:bg-[center_-10vw]"
              autoPlay
              muted
              loop
              controls={false}>
              Your browser does not support the video tag.
            </video>
            <div className="w-[95%] h-fit mt-[-43vw] mb-[4vw] flex justify-end text-[#2703A5] z-10 min-[450.1px]:hidden">
              {WouessiPronunciation ? (
                <div className="p-[2vw] pt-[3vw] pb-[3vw] bg-white rounded-lg absolute">
                  <h1 className="text-[4.5vw] font-bold">
                    Wou-essi /wu: ε si:/
                  </h1>
                  <div className="border-[0.1vw] border-[#2703A5]"></div>
                  <p className="text-[2.5vw] mt-[1.1vw]">
                    The way we pronounce our name is "woo-eh-ssi".
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="w-[95%] h-full flex justify-end items-center min-[450.1px]:hidden">
              <div
                onClick={() => setWouessiPronunciation(!WouessiPronunciation)}
                className={`${
                  WouessiPronunciation
                    ? "bg-[#FF9900] hover:bg-[#FF9900] z-10"
                    : "bg-[#2703A5] z-10"
                } transition ease-in-out duration-300 rounded-full flex items-center justify-center mt-[1vw] w-[12vw] h-[12vw] text-[1.1vw] cursor-pointer`}>
                {WouessiPronunciation ? (
                  <ImCross className="w-[7vw] h-[7vw] text-white" />
                ) : (
                  <HiOutlineSpeakerWave className="w-[8vw] h-[8vw] rotate-[-30deg] text-white" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[95%] h-fit flex justify-end text-[#2703A5] max-[450px]:hidden">
        {WouessiPronunciation ? (
          <div className="mt-[-9vw] p-[2vw] pt-[2vw] pb-[2vw] bg-white rounded-lg">
            <h1 className="text-[2vw] font-bold">Wou-essi /wu: ε si:/</h1>
            <div className="border-[0.1vw] border-[#2703A5]"></div>
            <p className="text-[1.1vw] mt-[1.1vw]">
              The way we pronounce our name is "woo-eh-ssi".
            </p>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="w-[95%] flex justify-end mb-[-7vw] mt-[1.5vw] max-[450px]:hidden">
        <div
          onClick={() => setWouessiPronunciation(!WouessiPronunciation)}
          className={`${
            WouessiPronunciation
              ? "bg-[#FF9900]"
              : "bg-[#2703A5] hover:bg-[#FF9900]"
          } transition ease-in-out duration-300 rounded-full flex items-center justify-center mt-[1vw] w-[6vw] h-[6vw] text-[1.1vw] cursor-pointer`}>
          {WouessiPronunciation ? (
            <ImCross className="w-[3vw] h-[3vw] text-white hover:text-[#2703A5]" />
          ) : (
            <HiOutlineSpeakerWave className="w-[3vw] h-[3vw] rotate-[-30deg] text-white" />
          )}
        </div>
      </div>

      <div className="flex justify-center mt-[3vw] min-[450.1px]:hidden">
        <div className="flex justify-center justify-between items-center w-[80%] text-left">
          <div className="w-[50%] text-[3vw]/[5vw]">
            Empowering your business with AI-driven solutions and expert
            consulting.
          </div>
          <div>
            {" "}
            <Link to="/frontend-react-wouessi-website-v2/Portfolio">
              <div className="border-black border-[0.1vw] hover:bg-[#2703A5] hover:text-white transition ease-in-out duration-300 rounded-full flex items-center justify-center mt-[1vw] gap-x-[0.3vw] w-[25vw] h-[25vw] text-[3vw] cursor-pointer min-[450.1px]:hidden">
                See Our Work
                <CgArrowLongUp className="text-[3vw] rotate-[60deg]" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <section>
        <div className="flex justify-center mb-[2vw]">
          <div className="w-[80%]">
            <h1 className="text-[3vw] text-left font-bold max-[450px]:text-[7vw]">
              Our Clients
            </h1>
          </div>
        </div>
        <OurClients
          Logo1={ARQCH}
          Logo2={Precision}
          Logo3={Aldelia}
          Logo4={Charis}
          Logo5={KigaliRunningClub}
        />
      </section>

      <div className="bg-[#2B00AC] mt-[2vw]">
        <div className="flex justify-center bg-[#2B00AC] max-[450px]:mb-[10vw]">
          <div className="w-[80%] max-[450px]:mt-[3vw]">
            <h2 className="text-[1.1vw] text-left mt-[5vw] text-[#FF9900] max-[450px]:text-[2.5vw]">
              About Us
            </h2>
            <h1 className="text-[3.5vw] text-left mb-[0.7vw] text-white font-bold max-[450px]:text-[7vw]">
              Our Vision
            </h1>
            <div className="flex justify-center justify-between mt-[2vw] max-[450px]:flex-col max-[450px]:gap-y-[5vw] max-[450px]:mt-[6vw]">
              <div className="flex flex-col text-left text-white w-[43%] max-[450px]:w-full gap-y-[2vw] max-[450px]:gap-y-[5vw]">
                <p className="text-[1.3vw] max-[450px]:text-[3vw]">
                  At Wouessi, we transcend geographical boundaries to envision a
                  world where digital innovation knows no limits.{" "}
                </p>
                <p className="text-[1.3vw] max-[450px]:text-[3vw]">
                  Our vision is to emerge as a global leader, spearheading
                  groundbreaking initiatives that redefine collaboration and
                  drive transformative change on a worldwide scale.
                </p>
              </div>
              <div className="space-y-[3vw] text-white text-left z-10 max-[450px]:space-y-[5vw] max-[450px]:mt-[6vw]">
                <div className="flex gap-x-[2vw] items-center">
                  <img
                    src={RedefineCollab}
                    className="w-[3vw] h-[3vw] max-[450px]:w-[8vw] max-[450px]:h-[8vw]"></img>
                  <p className="text-[1.5vw] font-bold max-[450px]:text-[4vw]">
                    REDEFINE COLLABORATION
                  </p>
                </div>
                <div className="flex gap-x-[2vw] items-center max-[450px]:pb-[6vw]">
                  <img
                    src={DriveTransformation}
                    className="w-[3vw] h-[3vw] max-[450px]:w-[8vw] max-[450px]:h-[8vw]"></img>
                  <p className="text-[1.5vw] font-bold max-[450px]:text-[4vw]">
                    DRIVE TRANSFORMATION
                  </p>
                </div>
                <div>
                  <Link to="/frontend-react-wouessi-website-v2/AboutUs">
                    <div className="border-white border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] mt-[2vw] w-[10vw] h-[10vw] text-[1.1vw] text-white cursor-pointer hover:bg-[#FF9900] hover:text-white hover:border-[#FF9900] transition ease-in-out duration-300 max-[450px]:w-[25vw] max-[450px]:h-[25vw] max-[450px]:text-[3vw]">
                      View More
                      <CgArrowLongUp className="text-[1.1vw] rotate-[60deg] max-[450px]:text-[3vw]" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={OurVision} className="w-full mt-[-5vw]"></img>
      </div>

      <div className="bg-[#F4F4F4] pb-[5vw] pt-[4vw] flex justify-center max-[450px]:pt-[8vw] max-[450px]:pb-[10vw]">
        <div className="w-[80%] h-full text-left">
          <p className="text-[1.1vw] text-[#666666] font-normal max-[450px]:text-[2.5vw]">
            OUR SERVICES
          </p>
          <h1 className="text-[3.5vw] text-[#2E2E2E] font-bold mb-[1vw] max-[450px]:text-[6vw] max-[450px]:mt-[2vw]">
            What we do
          </h1>

          <div className="flex justify-between pt-[2vw] pb-[2vw] max-[450px]:flex-col">
            <div className="flex flex-col">
              <h1 className="text-[3vw] text-[#2E2E2E] font-bold max-[450px]:text-[4.5vw]/[5.5vw]">
                Software <br /> Engineering
              </h1>
              <div className="flex w-[36vw] items-end justify-between max-[450px]:w-full max-[450px]:items-center">
                <div className="flex items-center border-[#9C9C9C] border-l-[0.1vw] h-[7vw] w-[22vw] text-[1.3vw] text-[#787878] pl-[1vw] ml-[2.8vw] max-[450px]:text-[2.7vw] max-[450px]:h-fit max-[450px]:w-[40vw]">
                  Dedicated to building robust, scalable, and high-performance
                  digital solutions.
                </div>
                <div>
                  <Link to="/frontend-react-wouessi-website-v2/Services">
                    <div className="border-black border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] w-[10vw] h-[10vw] text-[1.1vw] text-black cursor-pointer hover:bg-[#FF9900] hover:text-white hover:border-[#FF9900] transition ease-in-out duration-300 max-[450px]:w-[25vw] max-[450px]:h-[25vw] max-[450px]:text-[3vw] mt-[-6vw]">
                      Details
                      <CgArrowLongUp className="text-[1.1vw] rotate-[60deg] max-[450px]:text-[3vw]" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${SoftwareEngineeringImage})` }}
              className="w-[35vw] h-[25vw] mt-[5vw] bg-cover bg-[center] flex max-[450px]:w-full max-[450px]:h-[55vw]"></div>
          </div>

          <div className="flex justify-between border-t-[0.01vw] border-[#9C9C9C] pt-[2vw] max-[450px]:w-full max-[450px]:flex-col max-[450px]:w-full max-[450px]:gap-y-[4vw] max-[450px]:border-none">
            <div className="flex flex-col mt-[6vw] min-[450.1px]:hidden">
              <h1 className="text-[3vw] text-[#2E2E2E] font-bold text-[4.5vw]/[5.5vw]">
                Digital Marketing <br /> and Branding
              </h1>
              <div className="flex w-[36vw] items-end justify-between w-full items-center">
                <div className="flex items-center border-[#9C9C9C] border-l-[0.1vw] h-[7vw] w-[22vw] text-[1.3vw] text-[#787878] pl-[1vw] ml-[2.8vw] text-[2.7vw] h-fit w-[40vw]">
                  Propel your business forward in the online landscape.
                </div>
                <div>
                  <Link to="/frontend-react-wouessi-website-v2/Services">
                    <div className="border-black border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] w-[10vw] h-[10vw] text-[1.1vw] text-black cursor-pointer hover:bg-[#FF9900] hover:text-white hover:border-[#FF9900] transition ease-in-out duration-300 max-[450px]:w-[25vw] max-[450px]:h-[25vw] max-[450px]:text-[3vw] mt-[-6vw]">
                      Details
                      <CgArrowLongUp className="text-[1.1vw] rotate-[60deg] max-[450px]:text-[3vw]" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${DigitalMarketingImage})` }}
              className="w-[35vw] h-[25vw] bg-cover bg-[center_right_-0.5vw] flex max-[450px]:w-full max-[450px]:h-[55vw]"></div>
            <div className="flex flex-col max-[450px]:hidden">
              <h1 className="text-[3vw] text-[#2E2E2E] font-bold">
                Digital Marketing <br /> and Branding
              </h1>
              <div className="flex w-[36vw] items-end justify-between">
                <div className="flex border-[#9C9C9C] border-l-[0.1vw] h-[7vw] w-[22vw] text-[1.3vw] text-[#787878] pl-[1vw] ml-[2.8vw] items-center">
                  Propel your business forward in the online landscape.
                </div>
                <div>
                  <Link to="/frontend-react-wouessi-website-v2/Services">
                    <div className="border-black border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] w-[10vw] h-[10vw] text-[1.1vw] text-black cursor-pointer hover:bg-[#FF9900] hover:text-white hover:border-[#FF9900] transition ease-in-out duration-300 max-[450px]:w-[25vw] max-[450px]:h-[25vw] max-[450px]:text-[3vw] mt-[-6vw]">
                      Details
                      <CgArrowLongUp className="text-[1.1vw] rotate-[60deg] max-[450px]:text-[3vw]" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white pt-[4vw] pb-[5vw] flex justify-center max-[450px]:pt-[7vw] max-[450px]:pb-[7vw]">
        <div className="w-[80%] h-full text-left">
          <p className="text-[1.1vw] text-[#666666] font-normal max-[450px]:text-[2.5vw]">
            OUR SERVICES
          </p>
          <h1 className="text-[3.5vw] text-[#2E2E2E] font-bold mt-[0.2vw] mb-[4vw] max-[450px]:text-[6vw] max-[450px]:mt-[2vw]">
            Services Spotlight
          </h1>
          <div className="flex flex-wrap gap-y-[1vw] justify-center max-[450px]:gap-y-[2vw] max-[450px]:gap-x-[1vw]">
            {services.map((service, index) => (
              <div
                key={index}
                className={`rounded-full border-[0.02vw] text-[3vw] border-[#2B00AC] p-[1vw] text-[#2B00AC] cursor-pointer transition-all ease-in-out duration-500 max-[450px]:text-[4vw] max-[450px]:p-[2vw]
            ${
              hoveredIndex === index
                ? "scale-100 border-[#FF9900] text-[#FF9900]"
                : "scale-95"
            }
            ${
              hoveredIndex !== null && hoveredIndex !== index
                ? "scale-95 opacity-50"
                : ""
            }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}>
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-[#2B00AC] gap-x-[6vw] mt-[2vw]">
        <img
          src={WhyChooseUsBackground}
          className="w-[30vw] h-[45vw] mt-[6vw] mb-[6vw] max-[450px]:hidden"></img>
        <div className="flex flex-col text-left w-[38vw] max-[450px]:w-[80%] max-[450px]:mt-[4vw]">
          <h2 className="text-[1.1vw] mb-[0.7vw] mt-[6vw] text-[#FF9900] max-[450px]:text-[2.5vw]">
            WHY CHOOSE US
          </h2>
          <h1 className="text-[4vw]/[4.5vw] text-left font-bold text-white max-[450px]:text-[6vw]/[7.5vw] max-[450px]:mt-[3vw]">
            Empower Businesses With Innovative Digital Solutions.
          </h1>
          <div
            style={{ backgroundImage: `url(${WhyChooseUsBackground})` }}
            className="w-full h-[70vw] mt-[6vw] mb-[6vw] bg-cover bg-center min-[450.1px]:hidden"></div>
          <h3 className="text-[1.2vw] mt-[2vw] text-white max-[450px]:text-[3vw] ">
            We are committed to helping business owners leverage digital
            technology and solutions, increase their digital footprint, harness
            the benefits of digital presence, and gain a cutting edge ahead of
            their competitors.
          </h3>
          <div>
            <Link to="/frontend-react-wouessi-website-v2/Services">
              <div className="border-white border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] mt-[4vw] w-[10vw] h-[10vw] text-[1.1vw] text-white cursor-pointer hover:bg-[#FF9900] hover:text-white hover:border-[#FF9900] transition ease-in-out duration-300 max-[450px]:w-[25vw] max-[450px]:h-[25vw] max-[450px]:text-[3vw] max-[450px]:mb-[10vw] max-[450px]:mt-[8vw]">
                Details
                <CgArrowLongUp className="text-[1.1vw] rotate-[60deg] max-[450px]:text-[3vw]" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Achievements />

      <div className="bg-[#2B00AC] flex justify-center pt-[6vw] pb-[6vw] max-[450px]:pb-[10vw]">
        <div className="w-[80%] text-left flex flex-col">
          <h1 className="text-[#FF9900] text-[1.1vw] font-normal max-[450px]:text-[2.5vw] max-[450px]:mt-[3vw]">
            RECENT PROJECTS
          </h1>
          <div className="flex items-center justify-center">
            <PiArrowCircleLeftLight
              onClick={() =>
                updateProjSlider(projSlider === 0 ? 4 : projSlider - 1)
              }
              className="text-[7vw] text-[#C8CFD5] hover:fill-[#FF9900] cursor-pointer mr-[4vw] max-[450px]:text-[10vw]"
            />
            <div className="flex items-center w-[70%] max-[450px]:flex-col">
              <div className="flex flex-col jusitfy-center text-white text-[7.5vw] font-extrabold w-[40%] mr-[-13vw] z-10 max-[450px]:mt-[5vw] max-[450px]:mb-[-4vw] max-[450px]:mr-0">
                <h1>{SliderData[projSlider].titleFirstLine}</h1>
                {SliderData[projSlider].titleSecondLine ? (
                  <h1 className="w-[100%] flex justify-center mt-[-3vw] mb-[-3vw]">
                    {SliderData[projSlider].titleSecondLine}
                  </h1>
                ) : (
                  <div className="mt-[-3vw]"></div>
                )}
                {SliderData[projSlider].titleThirdLine ? (
                  <h1>{SliderData[projSlider].titleThirdLine}</h1>
                ) : (
                  ""
                )}
              </div>
              <div
                style={{
                  backgroundImage: `url(${SliderData[projSlider].thumbnail})`,
                }}
                className="w-[45vw] h-[40vw] bg-cover bg-[left] flex transition-all ease-in-out duration-300 max-[450px]:w-[55vw] max-[450px]:h-[50vw]">
                <div className="w-full h-full bg-slate-900/50"></div>
              </div>
            </div>
            <PiArrowCircleRightLight
              onClick={() =>
                updateProjSlider(projSlider === 4 ? 0 : projSlider + 1)
              }
              className="text-[7vw] text-[#C8CFD5] hover:fill-[#FF9900] cursor-pointer ml-[4vw] max-[450px]:text-[10vw]"
            />
          </div>
        </div>
      </div>

      <ClientTestimonySlider />

      <NewsletterRegister />

      <div className="flex justify-center mt-[4vw] text-black text-left">
        <div className="w-[80%] max-[450px]:mt-[5vw] max-[450px]:mb-[5vw] max-[450px]:w-full">
          <p className="text-[1.1vw] text-[#666666] font-normal max-[450px]:text-[2.5vw] max-[450px]:pl-[10vw]">
            RECENT BLOGS
          </p>
          <div className="flex gap-x-[10vw] mt-[1vw] items-center max-[450px]:flex-col max-[450px]:space-y-[8vw]">
            <h1 className="text-[4vw]/[5vw] text-left w-[55vw] font-bold max-[450px]:text-[7vw]/[7.5vw] max-[450px]:w-[80%] max-[450px]:mt-[3vw]">
              Where Software Engineering Meets Digital Marketing
            </h1>
            <p className="w-[40vw] text-[1.1vw] text-left text-black float-right max-[450px]:text-[3vw] max-[450px]:w-[80%]">
              Discover insights for businesses seeking digital transformation.
              Explore trends, strategies, and technologies related to software
              optimization, data-driven marketing, and the online platform
              ecosystem. Get practical tips to stay updated and gain a
              competitive edge.
            </p>
          </div>
          <div className="flex justify-between max-[450px]:flex-col max-[450px]:gap-y-[5vw] max-[450px]:mt-[7vw]">
            <div className="flex mt-[5vw]">
              <div
                style={{
                  backgroundImage: `url(${MobileSEOServicesBlogImage})`,
                }}
                className="w-[20vw] h-[30vw] bg-cover bg-center max-[450px]:w-[40vw] max-[450px]:h-[60vw]"></div>
              <div className="w-[20vw] h-fit mt-[6vw] ml-[-5vw] p-[1.5vw] space-y-[2vw] bg-white max-[450px]:w-[60vw] max-[450px]:p-[6vw] max-[450px]:ml-[-15vw] max-[450px]:mt-[10vw] max-[450px]:space-y-[7vw]">
                <div className="text-[1.2vw] text-[#666666] border-[0.1vw] border-[#F2F2F2] p-[0.5vw] max-[450px]:text-[3vw]">
                  <p>SEO SERVICES</p>
                  <p className="text-[#A7A9AA]">11 July 2024</p>
                </div>
                <p className="text-[1.7vw] font-bold max-[450px]:text-[5vw]">
                  Key Reasons Why Your Business Needs Mobile SEO Services
                </p>
                <p className="text-[1.1vw] text-[#666666] hover:text-[#FF9900] cursor-pointer underline max-[450px]:text-[3vw]">
                  <Link to="BlogPost">Read more</Link>
                </p>
              </div>
            </div>

            <div className="flex mt-[5vw] mb-[5vw] max-[450px]:justify-between">
              <div
                style={{
                  backgroundImage: `url(${TechnicalSEOServicesBlogImage})`,
                }}
                className="w-[20vw] h-[30vw] bg-cover bg-[center_1vw] max-[450px]:hidden"></div>
              <div className="w-[20vw] h-fit mt-[6vw] ml-[-5vw] p-[1.5vw] space-y-[2vw] bg-white z-10 max-[450px]:w-[60vw] max-[450px]:p-[6vw] max-[450px]:ml-[10vw] max-[450px]:mt-[10vw] max-[450px]:space-y-[7vw]">
                <div className="text-[1.2vw] text-[#666666] border-[0.1vw] border-[#F2F2F2] p-[0.5vw] max-[450px]:text-[3vw]">
                  <p>SEO SERVICES</p>
                  <p className="text-[#A7A9AA]">11 July 2024</p>
                </div>
                <p className="text-[1.7vw] font-bold max-[450px]:text-[5vw]">
                  Technical SEO Services: Optimize and Rank your Website
                </p>
                <p className="text-[1.1vw] text-[#666666] hover:text-[#FF9900] cursor-pointer underline max-[450px]:text-[3vw]">
                  Read more
                </p>
              </div>
              <div
                style={{
                  backgroundImage: `url(${TechnicalSEOServicesBlogImage})`,
                }}
                className="w-[20vw] h-[30vw] bg-cover bg-[center_1vw] min-[450.1px]:hidden max-[450px]:w-[40vw] max-[450px]:h-[60vw] max-[450px]:ml-[-30vw]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        {loading && <h3> Data is loading...</h3>}
        {error && <h3> {error.message} </h3>}
        {data && parse(data.page.content)}
      </div> */}

      {/* <motion.div
        className="text-end font-bold text-[9vw] text-[#2B00AC] mb-4 mt-4 flex max-[450px]:text-[15vw]"
        initial={{ x: "100%" }}
        animate={{ x: ["-98%", "3%", "-98%"] }}
        transition={{
          repeat: Infinity,
          type: "tween",
          duration: 20,
          repeatType: "loop",
          ease: "linear",
        }}>
        Digital<span className="text-[#FF9900]"> - </span>Design
        <span className="text-[#FF9900]"> - </span>Development
        <span className="text-[#FF9900]"> - </span>Technology
      </motion.div> */}
    </div>
  );
}

export default Home;
