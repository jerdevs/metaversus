"use client";

import { useRef } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../sections/About";
import Explore from "../sections/Explore";
import Feedback from "../sections/Feedback";
import GetStarted from "../sections/GetStarted";
import Banner from "../sections/Banner";
import Insights from "../sections/Insights";
import WhatsNew from "../sections/WhatsNew";
import World from "../sections/World";

const AppMain: React.FC = (): React.ReactElement => {
  const exploreRef = useRef<HTMLDivElement | null>(null);

  const onStampClicked = (): void => {
    exploreRef.current &&
      exploreRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-900 overflow-hidden">
      <Navbar />
      <Banner onStampClicked={onStampClicked} />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <div ref={exploreRef}>
          <Explore />
        </div>
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback onStampClicked={onStampClicked} />
      </div>
      <Footer />
    </div>
  );
};

export default AppMain;
