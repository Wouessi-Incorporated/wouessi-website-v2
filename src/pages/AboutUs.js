import React from "react";
import "../styles/AboutUs.css";

import { CgArrowLongUp } from "react-icons/cg";
import NewsletterRegister from "../components/Reusable/NewsletterRegister.js";
import ClientTestimonySlider from "../components/Home/ClientTestimonySlider.js";
import CallToActionSection from "../components/Reusable/CallToActionSection.js";
import OurTeamCarousel from "../components/AboutUs/OurTeamCarousel.js";
import OurPartners from "../components/AboutUs/OurPartners.js";
import OurApproachCarousel from "../components/AboutUs/OurApproachCarousel.js";
import TechStack from "../components/AboutUs/TechStack.js";
import WorkerTestimonial from "../components/AboutUs/WorkerTestimonial.js";
import AboutPageHeroImage from "../assets/SVG/AboutPageHeroImage.svg";
import OurMissionTopImage from "../assets/Images/OurMissionTopImage.png";
import OurMissionSideImage from "../assets/Images/OurMissionSideImage.png";
import { useParams } from "react-router-dom";

function AboutUs() {
  const { lang } = useParams();

  const handleScroll = () => {
    document
      .getElementById("target-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="page-background">
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

          <img
            alt=""
            src={AboutPageHeroImage}
            className="w-[100%] h-[43vw]"></img>

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

      <section>
        <OurTeamCarousel lang={lang} />
      </section>

      <section>
        <WorkerTestimonial lang={lang} />
      </section>

      <section>
        <OurPartners lang={lang} />
      </section>

      <section id="target-section">
        <OurApproachCarousel lang={lang} />
      </section>

      <section>
        <ClientTestimonySlider lang={lang} isHomepage={false} />
      </section>

      <section>
        <TechStack lang={lang} />
      </section>

      <section>
        <NewsletterRegister lang={lang} />
      </section>

      <section>
        <CallToActionSection
          Content="We would love to hear more about your project"
          CallToAction="Let's Talk"
          Title="WORK WITH US"
          lang={lang}
        />
      </section>
    </div>
  );
}

export default AboutUs;
