"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import InsightCard from "../components/InsightCard";
import TypingText from "../components/TypingText";
import { insights } from "../data/data";
import TitleText from "../components/TitleText";
import { Insight } from "../data/data.interface";

const Insights: React.FC = (): React.ReactElement => (
  <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText
        title={<>Insight about Metaverse</>}
        textStyles="text-center"
      />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map(
          (insight: Insight, index: number): React.ReactElement => (
            <InsightCard
              key={`insight-${index}`}
              index={index + 1}
              {...insight}
            />
          )
        )}
      </div>
    </motion.div>
  </section>
);

export default Insights;
