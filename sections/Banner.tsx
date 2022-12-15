import { motion } from "framer-motion";
import Image from "next/image";
import TypingText from "../components/TypingText";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

interface BannerProps {
  onStampClicked?: () => void;
}

const Banner: React.FC<BannerProps> = (
  props: BannerProps
): React.ReactElement => {
  const { onStampClicked } = props;
  return (
    <section className="sm:py-16 xs:py-8 py-12 sm:pl-16 pl-6">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <TypingText title="| Home" />
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1
            variants={textVariant(1.1)}
            className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white"
          >
            Metaverse
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <h1 className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white">
              Ma
            </h1>
            <div className="md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]" />
            <h1 className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white">
              ness
            </h1>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px]"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
          <Image
            src="/Cover.png"
            alt="cover"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <Image
              src="/Stamp.png"
              alt="stamp"
              width="0"
              height="0"
              sizes="100vw"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain cursor-pointer"
              onClick={(e: React.MouseEvent<HTMLImageElement>): void => {
                e.preventDefault();
                onStampClicked && onStampClicked();
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;
