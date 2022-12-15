"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import ExploreCard from "../components/ExploreCard";
import TitleText from "../components/TitleText";
import TypingText from "../components/TypingText";
import { exploreWorlds } from "../data/data";
import { ExploreWorld } from "../data/data.interface";

const Explore: React.FC = (): React.ReactElement => {
  const [active, setActive] = useState("world-2");
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want
              <br className="md:block hidden" /> to explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map(
            (world: ExploreWorld, index: number): React.ReactElement => (
              <ExploreCard
                key={world.id}
                {...world}
                index={index}
                active={active}
                handleClick={setActive}
              />
            )
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
