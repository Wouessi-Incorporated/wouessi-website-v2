import React from "react";
import "../styles/AboutUs.css";
import NewsletterRegister from "../components/NewsletterRegister";
import {
  CgArrowLongUp,
  HiOutlineArrowSmRight,
  HiOutlineArrowSmLeft,
} from "react-icons/cg";
import AboutPageHeroImage from "../assets/SVG/AboutPageHeroImage.svg";
import OurClients from "../components/OurClients";

// import { PiArrowCircleRightLight } from "react-icons/pi";
// import { PiArrowCircleLeftLight } from "react-icons/pi";
// import MeetTheTeamImages from "../assets/africa-block-chain-slider.png";
// import HartnamtemahLogo from "../HartnamtemahLogo.svg";
// import ASDICLogo from "../ASDICLogo.svg";
// import CADRLogo from "../CADRLogo.svg";
// import AfroTechTalkLogo from "../AfroTechTalkLogo.svg";
// import KigaliRunningClub from "../assets/SVG/KigaliRunningClub.svg";

import CallToActionSection from "../components/CallToActionSection";
import QuoteIcon from "../QuoteIcon.svg";
import OurMissionTopImage from "../assets/OurMissionTopImage.png";
import OurMissionSideImage from "../assets/OurMissionSideImage.png";
import OurTeamCarousel from "../components/OurTeamCarousel";
import RodrigueFouafouHeadshot from "../assets/RodrigueFouafouHeadshot.png";
import BoSimangoHeadshot from "../assets/BoSimangoHeadshot.jpg"
import RosalinRimjhimHeadshot from "../assets/RosalinRimjhimHeadshot.png";
import StriveMazungaHeadshot from "../assets/StriveMazungaHeadshot.png";
import ReginaldNugentHeadshot from "../assets/ReginaldNugentHeadshot.png";
import FannyEneHeadshot from "../assets/FannyEneHeadshot.png";
import NelsonNwankwoHeadshot from "../assets/NelsonNwankwoHeadshot.png";
import MarieNsanaHeadshot from "../assets/MarieNsanaHeadshot.png";
import PamelaDefoHeadshot from "../assets/PamelaDefoHeadshot.png";
import BillTinglingHeadshot from "../assets/BillTinglingHeadshot.png";
import JasmineMHeadshot from "../assets/JasmineMHeadshot.png";
import OurPartners from "../components/OurPartners";
import OurApproachCarousel from "../components/OurApproachCarousel";

import ExpressJS from "../assets/SVG/ExpressJS.svg";
import ReactJS from "../assets/SVG/ReactJS.svg";
import Vue from "../assets/SVG/Vue.svg";
import Angular from "../assets/SVG/Angular.svg";
import Node from "../assets/SVG/Node.svg";
import Mongo from "../assets/SVG/Mongo.svg";
import PHP from "../assets/SVG/PHP.svg";
import Python from "../assets/SVG/Python.svg";
import Ruby from "../assets/SVG/Ruby.svg";
import Java from "../assets/SVG/Java.svg";
import Laravel from "../assets/SVG/Laravel.svg";
import Django from "../assets/SVG/Django.svg";
import RubyOnRails from "../assets/SVG/RubyOnRails.svg";
import Redis from "../assets/SVG/Redis.svg";
import AWS from "../assets/SVG/AWS.svg";
import Firebase from "../assets/SVG/Firebase.svg";
import Apache from "../assets/SVG/Apache.svg";
import MySQL from "../assets/SVG/MySQL.svg";
import DotNet from "../assets/SVG/DotNet.svg";
import Jenkins from "../assets/SVG/Jenkins.svg";
import Lambda from "../assets/SVG/Lambda.svg";
import GoogleCloud from "../assets/SVG/GoogleCloud.svg";
import Azure from "../assets/SVG/Azure.svg";
import Kubemetes from "../assets/SVG/Kubemetes.svg";
import NextJS from "../assets/SVG/NextJS.svg";

function AboutUs() {
  const handleScroll = () => {
    document
      .getElementById("target-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const cards = [
    {
      image: RodrigueFouafouHeadshot,
      title: "Rodrigue Fouafou",
      subtitle: "CEO",
      bio: "Welcome to the future of digital innovation at Wouessi Inc. Our mission is simple: to empower businesses globally through groundbreaking digital experiences.",
      linkedin: "https://www.linkedin.com/in/rodriguefouafou/"
    },
    {
      image: BoSimangoHeadshot,
      title: "Bo Simango",
      subtitle: "COO",
      bio: "Welcome to the future of digital innovation at Wouessi Inc. Our mission is simple: to empower businesses globally through groundbreaking digital experiences.",
      linkedin: "https://www.linkedin.com/in/bsimango/"
    },
    // {
    //   image: StriveMazungaHeadshot,
    //   title: "Strive Mazunga",
    //   subtitle: "CTO",
    //   bio: "Technology innovator with expertise in cutting-edge digital solutions and emerging technologies. Strive leads our technical vision, ensuring we stay at the forefront of technological advancement while maintaining the highest standards of code quality and system architecture.",
    //   linkedin: "#"
    // },
    // {
    //   image: ReginaldNugentHeadshot,
    //   title: "Reginald Nugent",
    //   subtitle: "CFO",
    //   bio: "Financial strategist with deep expertise in scaling technology companies and managing global operations. Reginald ensures sustainable growth through strategic financial planning, risk management, and investment optimization for our worldwide expansion initiatives.",
    //   linkedin: "#"
    // },
    // {
    //   image: NelsonNwankwoHeadshot,
    //   title: "Nelson Nwankwo",
    //   subtitle: "Director of Digital Services",
    //   bio: "Digital services expert focused on delivering exceptional client experiences and innovative solutions. Nelson oversees our comprehensive digital service portfolio, ensuring quality delivery, client satisfaction, and continuous innovation in every project engagement.",
    //   linkedin: "#"
    // },
    // {
    //   image: MarieNsanaHeadshot,
    //   title: "Marie Noel Nsana",
    //   subtitle: "Advisor",
    //   bio: "Strategic advisor with extensive experience in business development, market expansion, and organizational growth. Marie provides valuable insights for company strategy, helping navigate complex market dynamics and identifying new growth opportunities globally.",
    //   linkedin: "#"
    // },
    // {
    //   image: PamelaDefoHeadshot,
    //   title: "Pamela Moko Defo",
    //   subtitle: "Advisor",
    //   bio: "Business development advisor with expertise in strategic partnerships, client relations, and market penetration. Pamela helps drive growth initiatives, expand our market presence across different regions, and build lasting relationships with key stakeholders.",
    //   linkedin: "#"
    // },
    // {
    //   image: BillTinglingHeadshot,
    //   title: "Bill Tingling",
    //   subtitle: "Advisor",
    //   bio: "Technology and business strategy advisor with decades of experience in scaling digital companies and fostering innovation. Bill provides strategic guidance for sustainable growth, technological advancement, and maintaining competitive advantage in the digital marketplace.",
    //   linkedin: "#"
    // }
  ];

  const logos = [
    ExpressJS,
    ReactJS,
    Vue,
    Angular,
    Node,
    Mongo,
    PHP,
    Python,
    Ruby,
    Java,
    Laravel,
    Django,
    RubyOnRails,
    Redis,
    AWS,
    Firebase,
    Apache,
    MySQL,
    DotNet,
    Jenkins,
    Lambda,
    GoogleCloud,
    Azure,
    Kubemetes,
    NextJS,
  ];

  return (
    <>
      <div className="flex justify-center h-fit">
        <div className="w-[80%] text-left mt-[3vw]">
          <h1 className="text-[4vw]/[5vw] max-[450px]:text-[7vw]/[10vw] font-extrabold w-[75%] max-[450px]:w-[100%]">
            Powerful Digital Solutions for{" "}
            <span className="text-[#2703A5]">Business Growth</span>
          </h1>
          <div className="max-[450px]:block flex mt-[3vw] items-center justify-between">
            <p className="max-[450px]:w-[100%] max-[450px]:text-[3vw]/[5vw] max-[450px]:mb-[4vw] mb-[0vw] w-[65%] text-[1.3vw]">
              Wouessi Inc. stands as a beacon of innovation and excellence in
              the heart of Toronto, Canada, leading in revolutionizing the
              digital landscape worldwide. With a steadfast commitment to
              pushing boundaries and delivering unparalleled solutions, Wouessi
              offers a comprehensive suite of cutting-edge digital services
              tailored to meet the diverse needs of businesses across the globe.
            </p>
            <div
              className="border-black border-[0.1vw] hover:bg-[#2703A5] hover:text-white transition ease-in-out rounded-full flex items-center justify-center gap-x-[0.3vw] w-[25vw] h-[25vw] md:w-[14vw] md:h-[14vw] text-[1.1vw] cursor-pointer"
              onClick={handleScroll}>
              Our Approach
              <CgArrowLongUp className="text-[1.1vw] rotate-[60deg]" />
            </div>
          </div>

          <img src={AboutPageHeroImage} className="w-[100%] h-[43vw]"></img>

          <div className="mt-[4vw] flex justify-between max-[450px]:block ">
            <div className="flex flex-col gap-y-[1.5vw] w-[45%] max-[450px]:w-[100%] ">
              <p className="text-[1.3vw] text-[#666666] max-[450px]:text-[3vw]/[5vw] ">
                Our Mission
              </p>
              <h1 className="text-[3.8vw]/[5.2vw] max-[450px]:text-[6vw]/[8vw]  max-[450px]:w-[60%] font-normal">
                Empowering Businesses with Bespoke Digital Strategies for Global
                Success
              </h1>
              <p className="mt-[2vw] text-[1.3vw]  max-[450px]:text-[3vw]/[5vw] font-[bold] text-[#666666]">
                Our Vision
              </p>
              <p className="text-[1.3vw] border-l-[0.1vw] max-[450px]:text-[3vw]/[5vw] border-[#9C9C9C] pl-[1vw]">
                At Wouessi, we transcend geographical boundaries to envision a
                world where digital innovation knows no limits. Our vision is to
                emerge as a global leader, spearheading groundbreaking
                initiatives that redefine collaboration and drive transformative
                change on a worldwide scale.
              </p>
            </div>

            <div className="flex flex-col flex w-[33vw] max-[450px]:w-[100%] ">
              <div
                style={{ backgroundImage: `url(${OurMissionTopImage})` }}
                className="w-full h-[15vw] bg-center bg-cover"></div>
              <div className="flex">
                <div className="w-[23vw]  max-[450px]:w-[100%] h-[30vw] mt-[-3vw] bg-[#F4F4F4]">
                  <p className="mt-[2vw] mb-[2vw] text-[1.3vw] max-[450px]:text-[3vw]/[5vw] font-[bold] text-[#666666]">
                    Our Story
                  </p>
                  <p className="text-[1.3vw] border-l-[0.1vw] border-[#9C9C9C] pl-[1vw] pr-[1.2vw]">
                    Beyond our digital endeavors, Wouessi Digital is deeply
                    committed to community involvement and social
                    responsibility. Under the leadership of Mr. Rodrigue
                    Fouafou, our founder, we strive to drive positive change and
                    create
                  </p>
                </div>
                <div
                  style={{
                    backgroundImage: `url(${OurMissionSideImage})`,
                  }}
                  className="w-[15vw] h-[27vw] bg-cover bg-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OurTeamCarousel cards={cards} />

      <div className="flex justify-center mb-[3vw] mt-[8vw]">
        <div className="flex justify-center w-[80%]">
          <div
            style={{ backgroundImage: `url(${JasmineMHeadshot})` }}
            className="w-[30vw] h-[37vw] bg-cover bg-center"></div>
          <div>
            <img
              src={QuoteIcon}
              className="w-[6vw] h-[6vw] ml-[2vw] mb-[1vw]"></img>
            <div className="flex justify-center items-center text-left w-[35vw] h-[27vw] bg-white ml-[-4vw]">
              <div className="p-[3vw]">
                <h1 className="text-[3vw]/[3vw] font-bold">
                  Amazing Work Culture
                </h1>
                <p className="text-[1.1vw] mt-[1.5vw]">
                  I've been provided with the opportunity to expand my skillset
                  through the endless support, and choice in varying projects.
                  I've had a great experience so far and am excited to see where
                  this company goes in the future.
                </p>
                <h2 className="text-[1.8vw] font-bold text-[#0A0907] mt-[1vw]">
                  Jasmine M.
                </h2>
                <p className="text-[0.9vw] text-[#666666]">
                  PROJECT COORDINATOR, Calgary, AB Canada
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="flex justify-center mb-[2vw]">
          <div className="w-[80%]">
            <h1 className="text-[3vw] text-left font-bold max-[450px]:text-[7vw]">
              Our Partners
            </h1>
          </div>
        </div>
        <OurPartners />
      </section>

      <section id="target-section">
        <OurApproachCarousel />
      </section>

      <div className="flex justify-center my-[5vw] ">
        <div className="w-[80%]">
          <h1 className="text-[3vw] text-left font-bold max-[450px]:text-[7vw]">
            Tech Stack
          </h1>
          <div className="grid grid-cols-5 gap-4 mt-[3vw]  max-[450px]:mb-[8vw]">
            {logos.map((LogoComponent, index) => (
              <img
                key={index}
                src={LogoComponent}
                className={`flex justify-center items-center p-4 max-[450px]:p-1 w-[12vw] h-[12vw] ${
                  Math.floor(index / 5) !== 4 ? "border-b" : ""
                }`}></img>
            ))}
          </div>
        </div>
      </div>

      <NewsletterRegister />

      <CallToActionSection
        Content="We would love to hear more about your project"
        CallToAction="Let's Talk"
        Title="WORK WITH US"
      />
    </>
  );
}

export default AboutUs;