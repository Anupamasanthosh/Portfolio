import { projects } from "@/constants";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/config/motion";
import Tilt from "react-parallax-tilt";

const MiniProjects = () => {
  return (
    <div className="container px-10">
      <motion.div variants={textVariant()}>
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 text-center">
          Mini Projects
        </h2>
      </motion.div>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((project, index) => (
          <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            key={project.name}
          >
            <Tilt
              tiltMaxAngleX={30}
              tiltMaxAngleY={30}
              scale={1.05}
              transitionSpeed={450}
              className="bg-gray-800 p-5 rounded-xl h-[200px]"
            >
              <div className="relative w-full h-[200px]">
                <div className="absolute inset-0 flex justify-start m-2">
                  <div>
                    <div className="mt-5">
                      <h3 className="text-white font-bold text-xl">
                        {project.name}
                      </h3>
                      <p className="mt-2 text-gray-400 text-sm">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2 justify-end">
                      {project.tags.map((tag) => (
                        <span
                          key={`${tag.name}-${tag.color}`}
                          className={`text-sm font-medium ${tag.color}`}
                        >
                          #{tag.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MiniProjects;
