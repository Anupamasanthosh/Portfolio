import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#1A1A2E]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-[200px] object-cover"
      />

      <div className="relative p-4">
        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
          {title}
        </h1>
        <p className="mt-2 text-sm md:text-base text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;