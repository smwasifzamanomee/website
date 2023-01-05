import Image from "next/image";
import { servicesstepsData } from "../../data/data";
import Container from "../../components/UI/Container";
import { animation } from "../../components/animate/animate";
import { motion } from "framer-motion";


const Steps = () => {
  const singleStep = ({ item, className, contentClass }) => {
    return (
      <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: false, amount: 0.1 }}
        transition={{ staggerChildren: 0.2 }}

        className={`flex sm:flex-col md:flex-col ${className} items-center justify-between text-light gap-y-10 md:mb-10 sm:mb-10`}
      >
        <div className={`flex-1 `}>
          <motion.p  variants={animation} className={`${contentClass} text-7xl text-primary font-extrabold`}>
            0{item.id}
          </motion.p>
          <motion.h2 variants={animation}  className={`${contentClass} text-4xl font-bold py-4`}>
            {item.title}
          </motion.h2>
          <motion.p  variants={animation} className={`${contentClass}`}>{item.desc}</motion.p>
        </div>
        <motion.div variants={animation} className="flex-1 object-cover w-full h-[500px]">
          <Image
            src={item.img}
            width="600"
            height="0"
            className="object-cover w-full h-full "
            alt=""
          />
        </motion.div>
      </motion.div>
    );
  };

  return (
    <Container>
      <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: false, amount: 0.1 }}
      transition={{ staggerChildren: 0.2 }}
      className="text-center py-4">
        <motion.p  variants={animation} className="text-primary tracking-[8px] py-3">The steps</motion.p>
        <motion.h1 variants={animation}  className="text-5xl sm:text-2xl text-light font-bold mb-12">
          How We Do It
        </motion.h1>
      </motion.div>

      {singleStep({
        item: servicesstepsData[0],
        className: "flex-row-reverse ",
        contentClass: "xl:pl-12 lg:pl-12",
      })}

      {singleStep({
        item: servicesstepsData[1],
        contentClass: "xl:pr-12 lg:pr-12",
      })}

      {singleStep({
        item: servicesstepsData[2],
        className: "flex-row-reverse",
        contentClass: "xl:pl-12 lg:pl-12",
      })}
    </Container>
  );
};

export default Steps;
