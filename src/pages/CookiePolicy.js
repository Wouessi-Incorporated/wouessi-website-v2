import React from "react";
import "../styles/Services.css";
import CookiePolicyIcon from "../assets/SVG/CookiePolicyIcon.svg";
import Accordion from "../components/Accordion";
import CookieData from "../helpers/CookiePolicyText.json";
import ContactUsSection from "../components/ContactUsSection";

function CookiePolicy() {
  return (
    <div className="flex justify-center mt-[5vw]">
      <div className="w-[80%]">
        <div className=" items-center justify-between max-[450px]:flex-col max-[450px]:gap-y-[6vw] relative">
          <div
            style={{ backgroundImage: `url(${CookiePolicyIcon})` }}
            className="w-[20vw] h-[20vw] bg-cover absolute right-40 max-[450px]:w-[50vw] max-[450px]:h-[50vw] max-[450px]:left-20 max-[450px]:top-5"
          ></div>
          <div>
            <h1 className="text-left w-[70%] text-[4vw]/[4vw] font-bold max-[450px]:text-[7.5vw]/[8.5vw] max-[450px]:w-full">
              Cookie Policy
            </h1>
          </div>
          <div className="flex gap-x-[2vw] mt-[3vw] max-[450px]:flex-col max-[450px]:gap-y-[2vw]">
            <div className="w-[7vw] border-t-[0.1vw] border-[#666666] max-[450px]:w-full max-[450px]:mt-[1vw] max-[450px]:w-[20vw]"></div>
            <div className="w-[65%] max-[450px]:w-[100%] max-[450px]:mt-[2vw] ">
              <p className="text-left text-[1.1vw] max-[450px]:text-[3vw] max-[450px]:font-semibold">
                Wouessi Inc. ("We," "Us," or "Our") operates the
                website https://wouessi.com ("Site"). This Cookie Policy
                explains how we use cookies and similar tracking technologies on
                our Site. This Cookies Policy explains what cookies are, how we
                use them, and your choices regarding their use.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-[1vw] mt-[5vw] max-[450px]:mt-[5vw]">
          <Accordion
            title="What Are Cookies?"
            InnerTextData={CookieData["What Are Cookies?"]}
          />
          <Accordion
            title="Types of Cookies We Use"
            InnerTextData={CookieData["Types of Cookies We Use"]}
          />
          <Accordion
            title="How We Use Cookies"
            InnerTextData={CookieData["How We Use Cookies"]}
          />
          <Accordion
            title="Third-Party Cookies"
            InnerTextData={CookieData["Third-Party Cookies"]}
          />
          <Accordion
            title="Consent to Use Cookies"
            InnerTextData={CookieData["Consent to Use Cookies"]}
          />
          <Accordion
            title="Your Cookie Preferences"
            InnerTextData={CookieData["Your Cookie Preferences"]}
          />
          <Accordion
            title="Cookie Retention Period"
            InnerTextData={CookieData["Cookie Retention Period"]}
          />
          <Accordion
            title="Security and Privacy Concerns"
            InnerTextData={CookieData["Security and Privacy Concerns"]}
          />
          <Accordion
            title="Changes to This Cookies Policy"
            InnerTextData={CookieData["Changes to This Cookies Policy"]}
          />
          <Accordion
            title="Your Rights Under Data Protection Laws"
            InnerTextData={CookieData["Your Rights Under Data Protection Laws"]}
          />
          <Accordion
            title="Contact Us"
            InnerTextData={CookieData["Contact Us"]}
          />
        </div>

        <ContactUsSection />
      </div>
    </div>
  );
}

export default CookiePolicy;
