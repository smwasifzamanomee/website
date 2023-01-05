import Container from "../../components/UI/Container";
import HeadTitle from "../../components/UI/HeadTitle";
import TopHeading from "../../components/UI/TopHeading";
import { ourworkData } from "../../data/data";
import { motion } from "framer-motion";
import { animation } from "../../components/animate/animate";

const Main = () => {
  return (
    <>
      <HeadTitle title={"Our Work"} />
      <TopHeading title={"Our Work"} />

      <Container bgColor={"bg-dark"} height="min-h-screen">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amout: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className="text-center text-light py-12"
        >
          <motion.p
            variants={animation}
            className=" tracking-[8px] text-primary uppercase"
          >
            Work
          </motion.p>
          <motion.h1
            variants={animation}
            className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold py-4"
          >
            Our Recent Work
          </motion.h1>
          <motion.p variants={animation}>
            We drive our clients’ growth through innovation and hard work
          </motion.p>
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amout: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid 
          sm:grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-2 
          xl:grid-cols-3 
          gap-12 
          py-12 place-items-center
          "
        >
          {ourworkData.map((item) => (
            <div key={item.id} className={`h-[300px]`}>
              <motion.img
                src={item.img}
                variants={animation}
                alt="project img"
                className="w-full h-full object-cover rounded"
              />
            </div>
          ))}
        </motion.div>
      </Container>
    </>
  );
};

export default Main;
