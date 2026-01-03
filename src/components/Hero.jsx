import assets from "../images/assets";
import { motion } from "motion/react";
const Hero = () => {
  const MotionHero = motion.div;
  return (
    

    <div
      className=" container mx-auto max-w-7xl mt-15 flex flex-col items-center gap-6 py-20 px-4 sm:px-12 
    lg:px-25 text-center overflow-hidden text-gray-700 dark:text-white"
    >
      <MotionHero
      
      initial={{  opacity: 0 ,y:20 }}
  whileInView={{  opacity: 1 ,y:0}}
  transition={{duration:0.6, ease: 'easeOut'}}
  viewport={{once:true}}
  className="flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full">
        <img className="w-20" src={assets.group_profile} />
        <p className="text-xs font-medium">trusted by 10+ people</p>
      </MotionHero>
      <motion.h1
      
      initial={{  opacity: 0 ,y:40 }}
  whileInView={{  opacity: 1 ,y:0}}
  transition={{duration:0.6, delay:0.8}}
  viewport={{once:true}}className="text-4xl sm:text-5xl md:text-6xl font-medium xl-leading-[95px] max-w-5xl">
        Turning imagination into{" "}
        <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
          digital
        </span>{" "}
        impact{" "}
      </motion.h1>
      <motion.p
      
            initial={{  opacity: 0 ,y:30 }}
  whileInView={{  opacity: 1 ,y:0}}
  transition={{duration:0.6, delay:0.8}}
  viewport={{once:true}}
      
      className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 pb-3">
        {" "}
        creatting a meaningful connections and turning big ideas into reality
      </motion.p>
      <div className="relative">
        <motion.img

          src={assets.hero_img}
          className="w-full  sm:w-xl md:w-4xl lg:w-5xl"
                initial={{  opacity: 0 , scale:0.9 }}
  whileInView={{  opacity: 1 , scale:1}}
  transition={{duration:0.6, delay:1}}
  viewport={{once:true}}
        />
        <img
          src={assets.bgImage1}
          className="absolute -top-60 -right-5 sm:-top-80 md:-top-100 md:-right-10 lg:-top-130 lg:-right-30 -z-1"
        />
      </div>
    </div>
  );
};

export default Hero;
