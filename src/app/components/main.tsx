import React from "react";
import Navbar from "./navbar";
import IntroSection from "./introsection";
import TechStack from "./techstack";
import Exp from "./exp";
import Awards from "./awards";
import Footer from "./footer";
import PinnedProjects from "./pinnedprojects";
import "./bgstyle.css";

const Main = () => {
  return (
    <div className="bg-custom">
      <div className="content-wrapper min-w-[420px] max-w-xl mx-auto px-5 sm:px-3 pt-6 sm:pt-8">
        <Navbar />
        <IntroSection />
        <Exp />
        <TechStack />
        {/* <Awards /> */}
        <PinnedProjects />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
