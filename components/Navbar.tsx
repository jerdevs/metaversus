import { motion } from "framer-motion";
import Image from "next/image";

import { navVariants } from "../utils/motion";

const Navbar: React.FC = (): React.ReactElement => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className="sm:px-16 px-6 py-8 relative"
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className="2xl:max-w-[1280px] w-full mx-auto flex justify-between gap-8">
      <Image src="/Search.svg" alt="search" width="24" height="24" />
      <h2 className="uppercase font-extrabold text-[24px] leading-[30px] text-white">
        Metaversus
      </h2>
      <Image src="/Menu.svg" alt="menu" width="24" height="24" />
    </div>
  </motion.nav>
);

export default Navbar;
