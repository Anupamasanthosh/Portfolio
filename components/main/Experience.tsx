import React, { useRef } from "react";
import {
 VerticalTimeline,
 VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../constants";
import Image from "next/image";


const Experience = () => {
 const ref = useRef<HTMLDivElement>(null);


 // Define the transform values for animations
 const { scrollYProgress } = useScroll({
   target: ref,
   offset: ["start start", "end start"],
 });


 // Use smaller range for smoother movement
 const yText = useSpring(
   useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
   { stiffness: 100, damping: 20 }
 );
 const yBg = useSpring(
   useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
   { stiffness: 100, damping: 20 }
 );


 return (
   <div ref={ref} id="about" className="px-4 lg:px-0">
     <div className="text-center">
       <motion.p
         style={{ y: yText }}
         className="text-[28px] md:text-[40px] lg:text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 md:py-20"
       >
         What I have done so far
       </motion.p>
     </div>


     <motion.div
       className="mt-10 md:mt-20 flex flex-col"
       style={{ y: yText }}
     >
       <VerticalTimeline>
         {experiences && experiences.length > 0 ? (
           experiences.map((item, index) => (
             <VerticalTimelineElement
               key={index}
               visible={true}
               contentStyle={{
                 background: "#1d1836",
                 color: "#fff",
                 boxShadow: "none",
                 border: "1px solid rgba(0, 0, 0, 0.05)",
                 textAlign: "left",
                 padding: "1.3rem 1.5rem", // Adjusted padding for responsiveness
                 zIndex: 10,
               }}
               contentArrowStyle={{
                 borderRight: "7px solid #232631",
               }}
               date={item.date}
               iconStyle={{
                 background: item.iconBg || "#232631",
                 zIndex: 10,
               }}
               icon={
                 <div className="flex justify-center items-center w-full h-full">
                   <Image
                     src= "/logo-sm.png"
                     alt={item.company_name}
                     width={40} // Adjusted size for smaller screens
                     height={40}
                     className="object-contain w-[60%] h-[60%]"
                   />
                 </div>
               }
             >
               <motion.div>
                 <h3 className="font-semibold capitalize text-lg md:text-xl text-white">
                   {item.title}
                 </h3>
                 <p className="font-normal !mt-0 text-sm md:text-base text-white">
                   {item.company_name}
                 </p>
                 <ul className="mt-3 md:mt-5 list-disc ml-4 md:ml-5 space-y-1 md:space-y-2">
                   {item.points.map((point, idx) => (
                     <li
                       key={idx}
                       className="text-white-100 text-[12px] md:text-[14px] pl-1 tracking-wider"
                     >
                       {point}
                     </li>
                   ))}
                 </ul>
               </motion.div>
             </VerticalTimelineElement>
           ))
         ) : (
           <p className="text-white">No experience data available</p>
         )}
       </VerticalTimeline>
     </motion.div>
   </div>
 );
};


export default Experience;



