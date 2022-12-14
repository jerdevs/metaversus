"use client";

import { motion } from "framer-motion";
import { socials } from "../data/data";
import { footerVariants } from "../utils/motion";
import Image from "next/image";
import { Social } from "../data/data.interface";

const Footer: React.FC = (): React.ReactElement => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className="sm:p-16 xs:p-8 px-6 py-12 py-8 relative"
  >
    <div className="footer-gradient" />
    <div className="2xl:max-w-[1280px] w-full flex flex-col mx-auto gap-8">
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Enter the Metaverse
        </h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-sky-700 rounded-[32px] gap-[12px]"
        >
          <Image
            src="/Headset.svg"
            width="0"
            height="0"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white uppercase">
            Enter Metaverse
          </span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] opacity-10 bg-white" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">Metaversus</h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2021-2022 Metaversus. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map(
              (social: Social): React.ReactElement => (
                <Image
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  height="0"
                  width="0"
                  className="cursor-pointer object-contain w-[24px] h-[24px]"
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
