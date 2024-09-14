import React from "react";
import "../styles/Services.css";
import TermsIcon from "../assets/SVG/TermsConditionIcon.svg";
import Accordion from "../components/Accordion";
import TermsData from "../helpers/TermsConditionText.json";
import ContactUsSection from "../components/ContactUsSection";

function TermsCondition() {
  return (
    <div className="flex justify-center mt-[5vw]">
      <div className="w-[80%]">
        <div className=" items-center justify-between max-[450px]:flex-col max-[450px]:gap-y-[6vw] relative">
        <div
          style={{ backgroundImage: `url(${TermsIcon})`}}
          className="w-[20vw] h-[20vw] bg-cover absolute right-40 max-[450px]:w-[50vw] max-[450px]:h-[50vw] max-[450px]:left-20 max-[450px]:top-5"
        ></div>
          <div>
            <h1 className="text-left w-[70%] text-[4vw]/[4vw] font-bold max-[450px]:text-[7.5vw]/[8.5vw] max-[450px]:w-full">
              Terms and Condition
            </h1>
          </div>
          <div className="flex gap-x-[2vw] mt-[3vw] max-[450px]:flex-col max-[450px]:gap-y-[2vw]">
            <div className="w-[7vw] border-t-[0.1vw] border-[#666666] max-[450px]:w-full max-[450px]:mt-[1vw] max-[450px]:w-[20vw]"></div>
            <div className="w-[65%] max-[450px]:w-[100%] max-[450px]:mt-[2vw] ">
              <p className="text-left text-[1.1vw] max-[450px]:text-[3vw] max-[450px]:font-semibold">
                These Terms and Conditions (the “Terms”) constitute a legally
                binding agreement between you (“User” or “You”) and Wouessi Inc.
                (“Company,” “We,” “Us,” or “Our”). By accessing or using our
                website located at https://wouessi.com (the “Site”), you agree
                to comply with and be bound by these Terms and our Privacy
                Policy. If you do not agree with these Terms, please discontinue
                use of the Site.
              </p>
            </div>
          </div>
          
        </div>
        

        <div className="mb-[1vw] mt-[5vw] max-[450px]:mt-[5vw]">
          <Accordion
            title="Definitions"
            InnerTextData={TermsData.Definitions}
          />
          <Accordion
            title="Entity Names"
            InnerTextData={TermsData["Entity Names"]}
          />
          <Accordion
            title="Acceptance of Terms"
            InnerTextData={TermsData["Acceptance of Terms"]}
          />
          <Accordion
            title="Modifications to Terms"
            InnerTextData={TermsData["Modifications to Terms"]}
          />
          <Accordion
            title="Use of the Site"
            InnerTextData={TermsData["Use of the Site"]}
          />
          <Accordion
            title="CCPA Compliance"
            InnerTextData={TermsData["CCPA Compliance"]}
          />
          <Accordion
            title="Intellectural Property"
            InnerTextData={TermsData["Intellectual Property"]}
          />
          <Accordion
            title="Services Provided"
            InnerTextData={TermsData["Services Provided"]}
          />
          <Accordion
            title="Client Responsibilities"
            InnerTextData={TermsData["Client Responsibilities"]}
          />
          <Accordion
            title="Disclaimer of Warranties"
            InnerTextData={TermsData["Disclaimer of Warranties"]}
          />
          <Accordion
            title="Limitation of Liability"
            InnerTextData={TermsData["Limitation of Liability"]}
          />
          <Accordion
            title="Indemnification"
            InnerTextData={TermsData["Indemnification"]}
          />
          <Accordion
            title="Third-Party Links"
            InnerTextData={TermsData["Third-Party Links"]}
          />
          <Accordion
            title="Privacy and Data Protection"
            InnerTextData={TermsData["Privacy and Data Protection"]}
          />
          <Accordion
            title="Termination"
            InnerTextData={TermsData["Termination"]}
          />
          <Accordion
            title="Governing Law"
            InnerTextData={TermsData["Governing Law"]}
          />
          <Accordion
            title="Dispute Resolution"
            InnerTextData={TermsData["Dispute Resolution"]}
          />
          <Accordion
            title="Contact Us"
            InnerTextData={TermsData["Contact Us"]}
          />
        </div>

        <ContactUsSection />
      </div>
    </div>
  );
}

export default TermsCondition;
