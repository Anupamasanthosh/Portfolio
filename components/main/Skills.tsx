import {
  Skill_1,
  Skill_2,
  Skill_3,
  Skill_4,
  Skill_5,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillsDataProvider";
import SkillText from "../sub/SkillsText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pt-20 sm:pt-30 md:pt-40 pb-10"
    >
      <SkillText />
      <div className="flex flex-wrap justify-around gap-5 mt-5 sm:mt-10 items-center">
        {Skill_1.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-around gap-5 mt-4 items-center">
        {Skill_2.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-around gap-5 mt-4 items-center">
        {Skill_3.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-around gap-5 mt-4 items-center">
        {Skill_4.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-around gap-5 mt-4 items-center">
        {Skill_5.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute inset-0">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-full object-cover"
            preload="auto"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;