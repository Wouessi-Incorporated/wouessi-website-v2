import React from "react";
import "../styles/Services.css";
import CallToActionSection from "../components/Reusable/CallToActionSection";
import HeroBanner from "../components/Reusable/HeroBanner";
import ServicesHeroBanner from "../assets/Images/ServicesHeroImage.jpeg";
import Accordion from "../components/Services/Accordion";
import Data from "../content/ServicesData.json";
import { useParams } from "react-router-dom";

function Services() {
  const {lang} = useParams();
  return (
    <div className="flex justify-center mt-[5vw] page-background">
      <div className="w-[80%]">
        <HeroBanner
          BannerImage={ServicesHeroBanner}
          Header="Services We Offer"
          Content="Our specialized team of researchers, strategists, designers,
              developers, and project managers work with streamlined processes
              to break through organizational roadblocks."
        />
        <div className="mb-[-1vw] mt-[-5vw] max-[450px]:mt-[5vw]">
          <Accordion
            title="Website & Software Engineering"
            InnerTextData={Data.Engineering}
          />
          <Accordion title="Digital Marketing" InnerTextData={Data.Marketing} />
          <Accordion
            title="Content Production & Design"
            InnerTextData={Data.Content}
          />
          <Accordion title="Branding" InnerTextData={Data.Branding} />
          <Accordion
            title="Microsoft Cloud Services"
            InnerTextData={Data.Microsoft}
          />
          <Accordion
            title="Talent Outsourcing"
            InnerTextData={Data.Outsourcing}
          />
        </div>

        <CallToActionSection
          Title="OUR PRODUCT"
          Content="Looking for services and guidance? Let's get in touch!"
          CallToAction="Let's Talk!"
          lang ={lang}
        />
      </div>
    </div>
  );
}

export default Services;
