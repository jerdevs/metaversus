import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";
import TypingText from "../components/TypingText";
import Image from "next/image";
import TitleText from "../components/TitleText";

const World: React.FC = (): React.ReactElement => (
  <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <Image
          height="0"
          width="0"
          src="/Map.png"
          alt="map"
          className="w-full h-full object-cover"
          unoptimized
        />
        <div className="absolute bottom-20 right-20 w-[150px] h-[150px] p-[6px]">
          <Image
            src="/People01.png"
            height="0"
            width="0"
            alt="people-01"
            className="w-full h-full"
            unoptimized
          />
        </div>
        <div className="absolute top-10 left-20 w-[150px] h-[150px] p-[6px]">
          <Image
            src="/People02.png"
            height="0"
            width="0"
            alt="people-02"
            className="w-full h-full"
            unoptimized
          />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[150px] h-[150px] p-[6px]">
          <Image
            src="/People03.png"
            height="0"
            width="0"
            alt="people-03"
            className="w-full h-full"
            unoptimized
          />
        </div>
        <div className="absolute top-52 left-60 p-[6px]">
          <Image
            src="/Vr01.png"
            height="0"
            width="0"
            alt="vr-01"
            className="w-full h-full"
            unoptimized
          />
        </div>
        <div className="absolute -top-16 right-60 p-[6px]">
          <Image
            src="/Vr02.png"
            height="0"
            width="0"
            alt="vr-02"
            className="w-full h-full"
            unoptimized
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
