"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import profilepic from "../../assets/profilepic.png";

const IntroSection = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const getIndianTime = () => {
      return new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(new Date());
    };

    const updateTime = () => setTime(getIndianTime());
    updateTime();

    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="font-serif">
      <div className="flex items-center">
        <Image
          src={profilepic}
          alt="Profile picture"
          width={96}
          height={96}
          className="rounded-full select-none"
        />
        <div>
          <p className="text-xs ml-4 text-gray-400">{`{ Local Time: ${time} }`}</p>
          <p className="text-xs italic text-gray-400 ml-4">
            &quot;waqt rahta nahin kahin tik kar, aadat is ki bhi aadmi si hai&quot;
          </p>
        </div>
      </div>
      <div className="mt-6 leading-[26px] space-y-4">
        <p>
          <span>Hello world;</span> I&apos;m Monish Obaid, a front-end developer
          currently at{" "}
          <a
            href="https://www.fuelbuddy.in/"
            className="underline underline-offset-[3px] decoration-dotted decoration-1 decoration-gray-400 hover:decoration-gray-800 transition-all"
          >
            FuelBuddy
          </a>
          . I create user interfaces so smooth and intuitive, you&apos;ll think your
          computer is psychic.
        </p>
        <p>
          When I&apos;m not coding, I&apos;m diving into History and Philosophy. Part-time
          philosopher, part-time historian—I&apos;m all in for pondering the universe
          and laughing at 1800s fashion.
        </p>
      </div>
    </div>
  );
};

export default IntroSection;
