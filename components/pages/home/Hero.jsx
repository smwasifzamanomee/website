import classes from "../../../styles/hero.module.css";
import { motion } from "framer-motion";
import { animation } from "../../animate/animate";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className={`${classes.hero_container}`}>
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
        className="container mx-auto px-4 min-h-screen flex flex-col justify-center items-center"
      >
        <motion.h1
          variants={animation}
          className="flex items-center gap-x-2 xl:text-5xl lg:text-4xl md:text-2xl  font-extrabold capitalize mb-4 mt-36"
        >
          Start your software
          <Typewriter
            options={{
              strings: [`Business`, `Ideas`, `Startup`],
              autoStart: true,
              loop: true,
              delay: "natural",
            }}
          />{" "}
          <span className="inline-block -ml-2">with us</span>
        </motion.h1>

        <motion.p
          variants={animation}
          className="xl:max-w-[700px] md:text-lg my-4 leading-8 tracking-wide text-center"
        >
          Have a ground breaking startup/business idea but don't know where to
          start? we'll give you all the support you need. Our team will provide
          you with creative solutions.
        </motion.p>

        <motion.div variants={animation}>
          <div className={classes.container_btn}>
            <span className={classes.first_btn}></span>
            <span className={classes.second_btn}></span>
            <span className={classes.third_btn}></span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
