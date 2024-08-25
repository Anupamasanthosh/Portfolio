"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../../config/motion";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center text-center">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[32px] sm:text-[40px] md:text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
      >
        Tools and Technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-200 mb-10 mt-[10px] cursive"
      >
        Never miss a task, deadline or idea
      </motion.div>
    </div>
  );
};

export default SkillText;
