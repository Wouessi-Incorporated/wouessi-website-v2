import React from "react";
import "../styles/global.css";
import { motion } from "framer-motion";

import {
  ATRCyberLogo,
  AyaLogo,
  BantuLogo,
  BipocLogo,
  BogolLogo,
  DigitalMainStLogo,
  EgoluLogo,
  EPlogo,
  EuclidesLogo,
  ISMLogo,
  JKMediDesignLogo,
  KPDILogo,
  NeuralAILogo,
  PrimeCementLogo,
  RiipenLogo,
  RockPowerLogo,
  RocksteadyConsultingLogo,
  StartupYMMLogo,
  VelocityLogo,
  YoshiLogo,
} from "../assets/SVG/PartnersLogo";

function OurPartners() {
  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-x-[6vw] w-max"
        initial={{ x: "0" }} // Start position
        animate={{ x: ["5%", "-78%", "0"] }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}>
        {/* First set of logos */}
        <img src={ATRCyberLogo} alt="ATRCyber Logo" className="h-12 w-[13vw]" />
        <img src={AyaLogo} alt="Aya Logo" className="h-12 w-[13vw]" />
        <img src={BantuLogo} alt="Bantu Logo" className="h-12 w-[13vw]" />
        <img src={BipocLogo} alt="Bipoc Logo" className="h-12 w-[13vw]" />
        <img src={BogolLogo} alt="Bogol Logo" className="h-12 w-[13vw]" />
        <img
          src={DigitalMainStLogo}
          alt="Digital Main St Logo"
          className="h-12 w-[13vw]"
        />
        <img src={EgoluLogo} alt="Egolu Logo" className="h-12 w-[13vw]" />
        <img src={EPlogo} alt="EP Logo" className="h-12 w-[13vw]" />
        <img src={EuclidesLogo} alt="Euclides Logo" className="h-12 w-[13vw]" />
        <img src={ISMLogo} alt="ISM Logo" className="h-12 w-[13vw]" />
        <img
          src={JKMediDesignLogo}
          alt="JK Medi Design Logo"
          className="h-12 w-[13vw]"
        />
        <img src={KPDILogo} alt="KPD Logo" className="h-12 w-[13vw]" />
        <img
          src={NeuralAILogo}
          alt="Neural AI Logo"
          className="h-12 w-[13vw]"
        />
        <img
          src={PrimeCementLogo}
          alt="Prime Cement Logo"
          className="h-12 w-[13vw]"
        />
        <img src={RiipenLogo} alt="Riipen Logo" className="h-12 w-[13vw]" />
        <img
          src={RockPowerLogo}
          alt="Rock Power Logo"
          className="h-12 w-[13vw]"
        />
        <img
          src={RocksteadyConsultingLogo}
          alt="Rocksteady Consulting Logo"
          className="h-12 w-[13vw]"
        />
        <img
          src={StartupYMMLogo}
          alt="Startup YMM Logo"
          className="h-12 w-[13vw]"
        />
        <img src={VelocityLogo} alt="Velocity Logo" className="h-12 w-[13vw]" />
        <img src={YoshiLogo} alt="Yoshi Logo" className="h-12 w-[13vw]" />
      </motion.div>
    </div>
  );
}

export default OurPartners;
