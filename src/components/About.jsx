import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { useMediaQuery } from "@material-ui/core";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, title1 }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const tiltOptions = isMobile
    ? {
        reverse: true,
        max: 0,
        perspective: 1000,
        scale: 1.1,
        transition: true,
        axis: null,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
      }
    : {
        max: 45,
        scale: 1,
        speed: 450,
      };

  return (
    <Tilt className={isMobile ? "w-full" : "w-[200px]"}>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.7)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={tiltOptions}
          className="bg-tertiary rounded-[20px] py-2 px-4 min-h-[150px] flex justify-evenly items-center flex-col"
        >
          {/* <img
            src={icon}
            alt='web-development'
            className='w-12 h-16 object-contain'
          /> */}

          <h3 className="text-red text-[15px] font-bold text-center">
            {title}
          </h3>
          <h3 className="text-green text-[14px] font-bold text-center">
            {title1}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const gridTemplateColumns = isMobile ? "repeat(auto-fill, minmax(200px, 1fr))" : "repeat(5, 1fr)";

  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}></p> */}
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        My expertise in data engineering includes designing and implementing
        data pipelines, working with large-scale data warehousing solutions,
        and leveraging big data technologies such as Hadoop and Spark. I possess
        a strong foundation in programming languages such as Python and Java and
        have built enterprise-grade applications across different industries. As
        a team player, I prioritize collaboration and constant learning to stay
        abreast of the latest technologies and trends in software engineering.
      </motion.p>

      <div className="mt-20 grid" style={{ gridTemplateColumns }}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");