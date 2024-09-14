import React from "react";
import { motion } from "framer-motion";

function OurClients({ Logo1, Logo2, Logo3, Logo4, Logo5 }) {
  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-x-[6vw] w-max"
        initial={{ x: "0" }} // Start position
        animate={{ x: ["15%", "-78%", "0"] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}>
        <img src={Logo1} className="h-12 w-[13vw]"></img>
        <img src={Logo2} className="h-12 w-[13vw]"></img>
        <img src={Logo3} className="h-12 w-[13vw]"></img>
        <img src={Logo4} className="h-12 w-[13vw]"></img>
        <img src={Logo5} className="h-12 w-[13vw]"></img>
      </motion.div>
    </div>
  );
}

export default OurClients;
