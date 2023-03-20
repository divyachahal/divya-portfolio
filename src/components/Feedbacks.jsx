import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[280px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-primary-500`}></p>
          <h2 className={`${styles.sectionHeadText} text-white`}>Certifications</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-4 justify-center`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

const FeedbackCard = ({
  index,
  testimonial,
  source_link,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-gray-800 p-6 rounded-3xl xs:w-[270px] w-full flex gap-4'
  >
    <img
      src={image}
      alt={`feedback_by`}
      className='w-10 h-10 rounded-full object-cover'
    />
    <div>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
      <div className='mt-7'>
        <a
          href={source_link}
          target='_blank'
          rel='noopener noreferrer'
          className='text-secondary text-sm hover:underline'
        >
          See credential
        </a>
      </div>
    </div>
  </motion.div>
);

export default SectionWrapper(Feedbacks, "");
