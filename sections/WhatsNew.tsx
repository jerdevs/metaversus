import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import NewFeatures from "../components/NewFeatures";
import TypingText from "../components/TypingText";
import { newFeatures } from "../data/data";
import Image from "next/image";
import TitleText from "../components/TitleText";
import { NewFeature } from "../data/data.interface";

const WhatsNew: React.FC = (): React.ReactElement => (
  <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| What's New" />
        <TitleText title={<>What&apos;s new about Metaversus?</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map(
            (feature: NewFeature): React.ReactElement => (
              <NewFeatures key={feature.title} {...feature} />
            )
          )}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className="flex-1 flex justify-center items-center"
      >
        <Image
          src="/WhatsNew.png"
          alt="whats-new"
          width="0"
          height="0"
          className="w-[90%] h-[90%] object-contain"
          unoptimized
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
