import React from "react";
import assets from "../images/assets";
import Title from "./Title";
import Servicescard from "./Servicescard";
import { motion } from "motion/react";

const Services = () => {
  const MotionDiv = motion.div;

  const servicedata = [
    {
      title: "advertising",
      description:
        "we turn bold ideas into powerful digital solutions that connect",
      icon: assets.ads_icon,
    },
    {
      title: "marketing",
      description:
        "we turn bold ideas into powerful digital solutions that connect",
      icon: assets.marketing_icon,
    },
    {
      title: "content writing",
      description:
        "we turn bold ideas into powerful digital solutions that connect",
      icon: assets.content_icon,
    },
    {
      title: "social media",
      description:
        "we turn bold ideas into powerful digital solutions that connect",
      icon: assets.social_icon,
    },
  ];

  return (
    <MotionDiv
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="services"
      className="container mx-auto max-w-7xl relative flex flex-col items-center gap-6 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />

      <Title
        title="Now can we help?"
        desc="From strategy to execution we craft digital solutions that moves your business forward"
      />

      {/* Flex Container */}
      <div className="flex flex-wrap gap-6 justify-center">
        {servicedata.map((service, index) => (
          <div
            key={index}
            className="w-full sm:w-[90%] md:w-[48%]   mx-auto"
          >
            <Servicescard service={service} index={index} />
          </div>
        ))}
      </div>
    </MotionDiv>
  );
};

export default Services;
