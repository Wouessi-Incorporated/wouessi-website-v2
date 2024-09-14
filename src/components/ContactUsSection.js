import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function ContactUsSection() {
  return (
    <>
      <div className="flex justify-around mt-[4vw] mb-[3vw] max-[450px]:flex max-[450px]:flex-wrap max-[450px]:w-full max-[450px]:p-0 max-[450px]:font-semibold">
        <div className="flex gap-x-[1vw] max-[450px]:w-[55%]">
          <div className="w-[5vw] h-[5vw] bg-white rounded-lg flex justify-center items-center text-[2vw] text-[#2B00AC] max-[450px]:text-[5vw] max-[450px]:w-[9vw] max-[450px]:h-[9vw]">
            <FaPhoneVolume />
          </div>
          <div className="flex flex-col text-left mt-[-0.4vw] max-[450px]:ml-[2vw]">
            <h2 className="text-[1.1vw] font-light text-[#2B00AC] font-extrabold max-[450px]:text-[3.5vw] max-[450px]:font-semibold">
              Call Anytime
            </h2>
            <p className="text-[1.1vw] max-[450px]:text-[2.5vw]">
              +1 844 317 2845
            </p>
          </div>
        </div>
        <div className="flex gap-x-[1vw] max-[450px]:mt-0">
          <div className="w-[5vw] h-[5vw] bg-white rounded-lg flex justify-center items-center text-[2vw] text-[#2B00AC] max-[450px]:text-[5.5vw] max-[450px]:w-[9vw] max-[450px]:h-[9vw]">
            <MdEmail />
          </div>
          <div className="flex flex-col text-left mt-[-0.4vw] max-[450px]:ml-[2vw]">
            <h2 className="text-[1.1vw] font-light text-[#2B00AC] font-extrabold max-[450px]:text-[3.5vw] max-[450px]:font-semibold">
              Send Email
            </h2>
            <p className="text-[1.1vw] max-[450px]:text-[2.5vw]">
              info@wouessi.com
            </p>
          </div>
        </div>
        <div className="flex gap-x-[1vw] mb-[2.7vw] max-[450px]:w-full max-[450px]:mt-[6vw]">
          <div className="w-[5vw] h-[5vw] bg-white rounded-lg flex justify-center items-center text-[2vw] text-[#2B00AC] max-[450px]:text-[5vw] max-[450px]:w-[9vw] max-[450px]:h-[9vw]">
            <FaLocationDot />
          </div>
          <div className="flex flex-col text-left mt-[-0.4vw] max-[450px]:ml-[2vw]">
            <h2 className="text-[1.1vw] font-light text-[#2B00AC] font-extrabold max-[450px]:text-[3.5vw] max-[450px]:font-semibold">
              Visit Us
            </h2>
            <p className="text-[1.1vw] w-[15vw] max-[450px]:text-[2.5vw] max-[450px]:w-full">
              Unit 202, 117 Peter street, Toronto, M5V1X1
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsSection;
