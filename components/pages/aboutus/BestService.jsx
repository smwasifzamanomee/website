import classes from "../../../styles/about.module.css";
import { motion } from "framer-motion";
import { animation } from "../../animate/animate";
import { bestserviceData } from "../../../data/data";

const BestService = () => {
  return (
    <>
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ staggerChildren: 0.2 }}
        
        className={`${classes.best_service_container} xl:min-h-[600px] `}
      >
        <div className={classes.overlay} />
        <motion.h1
          variants={animation}
          className="text-light text-6xl sm:text-3xl font-bold z-10 mb-20 "
        >
          Best Service you can get
        </motion.h1>
        <div className="xl:flex items-center justify-between gap-x-6 z-10 ">
          <div className=" w-[500px] sm:w-auto h-[500px] xl:-mb-40  bg-dark text-light grid place-content-center p-8">
            <motion.h2
              variants={animation}
              className="text-[28px] sm:text-xl  font-bold my-8"
            >
              The process we follow
            </motion.h2>
            {bestserviceData.slice(0, 3).map((item) => (
              <motion.div
                variants={animation}
                className="flex items-center gap-4 my-4"
                key={item.id}
              >
                <item.icon className="text-4xl text-primary" />
                <div>
                  <h4 className="text-2xl font-bold">{item.name}</h4>
                  <p className="mt-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className=" w-[500px] sm:w-auto h-[500px] xl:-mb-40 md:mt-10  sm:mt-10  bg-dark text-light grid place-content-center p-8">
            <motion.h2
              variants={animation}
              className="text-[28px] sm:text-xl   font-bold my-8"
            >
              The benefits of working with us
            </motion.h2>
            {bestserviceData.slice(3, 6).map((item) => (
              <motion.div
                variants={animation}
                className="flex items-center gap-4 my-4"
                key={item.id}
              >
                <item.icon className="text-4xl text-primary" />
                <div>
                  <h4 className="text-2xl font-bold">{item.name}</h4>
                  <p className="mt-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BestService;
