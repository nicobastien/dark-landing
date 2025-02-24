"use client";
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { key: 1, src: acmeLogo, alt: "Acme Logo" },
  { key: 2, src: quantumLogo, alt: "Quantum Logo" },
  { key: 3, src: echoLogo, alt: "Echo Logo" },
  { key: 4, src: celestialLogo, alt: "Celestial Logo" },
  { key: 5, src: pulseLogo, alt: "Pulse Logo" },
  { key: 6, src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px]">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">
          Trusted by the world's most innovative teams
        </h2>
        <div
          className="flex overflow-hidden mt-9 before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute 
        before:h-full after:h-full before:w-5 after:w-5 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]"
        >
          <motion.div
            initial={{ translate: 0 }}
            animate={{ translateX: "-50%" }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            className="flex gap-16 flex-none pr-16"
          >
            {images.map(({ key, src, alt }) => (
              <Image
                className="flex-none h-8 w-auto"
                key={key}
                src={src}
                alt={alt}
              />
            ))}
            {images.map(({ key, src, alt }) => (
              <Image
                className="flex-none h-8 w-auto"
                key={key}
                src={src}
                alt={alt}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
