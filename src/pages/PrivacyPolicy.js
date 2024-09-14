import React from "react";
import "../styles/Services.css";
import PrivacyIcon from "../assets/SVG/PrivacyPolicyIcon.svg";
import Accordion from "../components/Accordion";
import PrivacyData from "../helpers/PrivacyPolicyText.json";
import ContactUsSection from "../components/ContactUsSection";

function PrivacyPolicy() {
  return (
    <div className="flex justify-center mt-[5vw]">
      <div className="w-[80%]">
        <div className=" items-center justify-between max-[450px]:flex-col max-[450px]:gap-y-[6vw] relative">
        <div
          style={{ backgroundImage: `url(${PrivacyIcon})`}}
          className="w-[20vw] h-[20vw] bg-cover absolute right-40 max-[450px]:w-[50vw] max-[450px]:h-[50vw] max-[450px]:left-20 max-[450px]:top-5"
        ></div>
          <div>
            <h1 className="text-left w-[70%] text-[4vw]/[4vw] font-bold max-[450px]:text-[7.5vw]/[8.5vw] max-[450px]:w-full">
            Privacy Policy
            </h1>
          </div>
          <div className="flex gap-x-[2vw] mt-[3vw] max-[450px]:flex-col max-[450px]:gap-y-[2vw]">
            <div className="w-[7vw] border-t-[0.1vw] border-[#666666] max-[450px]:w-full max-[450px]:mt-[1vw] max-[450px]:w-[20vw]"></div>
            <div className="w-[65%] max-[450px]:w-[100%] max-[450px]:mt-[2vw] ">
              <p className="text-left text-[1.1vw] max-[450px]:text-[3vw] max-[450px]:font-semibold">
              Wouessi Inc. (“Company,” “We,” “Us,” or “Our”) is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information in compliance with the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and the Personal Information Protection and Electronic Documents Act (PIPEDA). By using our website https://wouessi.com (the “Site”) or engaging with our services, you agree to the collection and use of information in accordance with this policy.   
              </p>
            </div>
          </div>
          
        </div>
        

        <div className="mb-[1vw] mt-[5vw] max-[450px]:mt-[5vw]">
          <Accordion
            title="Information We Collect"
            InnerTextData={PrivacyData["Information We Collect"]}
          />
          <Accordion
            title="How We Use Your Information"
            InnerTextData={PrivacyData["How We Use Your Information"]}
          />
          <Accordion
            title="Legal Bases for Processing (GDPR)"
            InnerTextData={PrivacyData["Legal Bases for Processing (GDPR)"]}
          />
          <Accordion
            title="Your Data Protection Rights (GDPR)"
            InnerTextData={PrivacyData["Your Data Protection Rights (GDPR)"]}
          />
          <Accordion
            title="Data Protection Officer (DPO)"
            InnerTextData={PrivacyData["Data Protection Officer (DPO)"]}
          />
          <Accordion
            title="CCPA Compliance"
            InnerTextData={PrivacyData["CCPA Compliance"]}
          />
          <Accordion
            title="PIPEDA Compliance"
            InnerTextData={PrivacyData["PIPEDA Compliance"]}
          />
          <Accordion
            title="Data Security"
            InnerTextData={PrivacyData["Data Security"]}
          />
          <Accordion
            title="Data Transfer"
            InnerTextData={PrivacyData["Data Transfer"]}
          />
          <Accordion
            title="Data Retention"
            InnerTextData={PrivacyData["Data Retention"]}
          />
          <Accordion
            title="Third-Party Links"
            InnerTextData={PrivacyData["Third-Party Links"]}
          />
          <Accordion
            title="Changes to This Policy"
            InnerTextData={PrivacyData["Changes to This Policy"]}
          />
          <Accordion
            title="Contact Us"
            InnerTextData={PrivacyData["Contact Us"]}
          />
        </div>

        <ContactUsSection />
      </div>
    </div>
  );
}

export default PrivacyPolicy;
