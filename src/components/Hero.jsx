import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

// Import icons from assets folder
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import twitterIcon from "../assets/twitter.png";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px]  max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Divya Chahal</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a skilled software engineer with 3+ years of experience in both software development & data engineering, <br className='sm:block hidden' />
            and passionate about creating scalable and efficient software solutions that cater to end users' needs.
          </p>
          
          {/* Add clickable icons with links */}
          <div className="mt-4 flex gap-4">
            <a href="https://www.linkedin.com/in/divyachahal/">
              <img src={linkedinIcon} alt="LinkedIn Icon" width="32" height="32" />
            </a>
            <a href="https://github.com/divyachahal">
              <img src={githubIcon} alt="GitHub Icon" width="32" height="32" />
            </a>
            <a href="https://twitter.com/BeDataEngineer">
              <img src={twitterIcon} alt="Twitter Icon" width="32" height="32" />
            </a>
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
