import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { animation } from "../../animate/animate";
import Button from "../../UI/Button";
import Container from "../../UI/Container";
import { careerpositionData } from "../../../data/data";

const Requirements = () => {
    const { careerId } = useRouter().query;
    const filteredData = careerpositionData.find(
      (item) => item.id === Number(careerId)
    );
  console.log(filteredData?.details?.isOpen);
    const detailView = (items) => {
      return (
        <motion.ul variants={animation} className="list-disc text-light">
          {items?.map((item, index) => (
            <li key={index} className=" py-1">
              {item}
            </li>
          ))}
        </motion.ul>
      );
    };
  
  return (
    <Container
    bgColor="bg-dark"
    height={"min-h-screen"}
    className="relative"
  >
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.1 }}
        transition={{ staggerChildren: 0.2 }}
    >
      <div className="xl:flex items-center justify-between gap-4">
        <div className="flex-1">
          <motion.h1
            variants={animation}
            className="text-5xl font-bold text-light py-4"
          >
            {filteredData?.title}
          </motion.h1>
          {/* Desc */}
          <motion.p variants={animation} className="text-light mb-4">
            We are currently looking for a talented and experienced
            front-end JavaScript developers in multiple positions to join
            our growing teams. The selected software engineers will get a
            chance to work with the latest technology stacks, exercising
            industry-standard principles & best practices to build
            scalable, high-performance & robust software solutions for
            some of the big players in jashore.
          </motion.p>
          <div className="py-4">
            <motion.p
              variants={animation}
              className="text-primary tracking-[3px] uppercase"
            >
              Workplace
            </motion.p>
            {detailView(filteredData?.details?.workplace)}
          </div>

          <div className="py-4">
            <motion.p
              variants={animation}
              className="text-primary tracking-[3px] uppercase"
            >
              Salary
            </motion.p>
            {detailView(filteredData?.details?.salary)}
          </div>
        </div>
        <div className="flex-1 xl:pl-10">
          <div className="py-4">
            <motion.p
              variants={animation}
              className="py-4 text-primary tracking-[3px] uppercase"
            >
              Location
            </motion.p>
            {detailView(filteredData?.details?.location)}
          </div>

          <div className="py-4 text-light">
            <motion.p
              variants={animation}
              className="py-4 text-primary tracking-[3px] uppercase"
            >
              Experience Requirements
            </motion.p>
            {detailView(filteredData?.details?.experience)}
          </div>
        </div>
      </div>

      <div className="py-10 xl:flex justify-between gap-4 text-light">
        <motion.div variants={animation} className="flex-1">
          <p className="py-4 font-bold text-primary tracking-[3px] uppercase">
            Job Responsibilities
          </p>
          {detailView(filteredData?.details?.responsibilties)}
        </motion.div>

        <motion.div variants={animation} className="flex-1 xl:pl-10">
          <motion.p variants={animation} className="py-4 font-bold text-primary tracking-[3px] uppercase">
            Compensation & Other Benefits
          </motion.p>
          {detailView(filteredData?.details?.benifits)}

          <Link href={{
            pathname: filteredData?.details?.isOpen && `/career/careerform`,
            query: {position: filteredData?.title}
          }} 
          as={'/career/careerform/'}
          >
            <Button className="px-12 mt-8">{filteredData?.details?.isOpen ? 'Send Your Application' : 'Closed'}</Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  </Container>
  )
}

export default Requirements