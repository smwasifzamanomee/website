import Container from "../../UI/Container";
import { BsFillCloudSlashFill } from "react-icons/bs";
import { FiSave } from "react-icons/fi";
import { FaDatabase } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import { animation } from "../../animate/animate";

const OurVision = () => {
  return (
    <Container bgColor={"bg-black"}>
      <motion.article
           initial={"offscreen"}
           whileInView={"onscreen"}
           viewport={{ once: false, amount: 0.2 }}
           transition={{ staggerChildren: 0.2 }}   
       className="flex xl:flex-row sm:flex-col-reverse md:flex-col-reverse lg:flex-col-reverse justify-between items-center gap-12 text-white min-h-screen">
        <div className="flex-1">
          <motion.p variants={animation} className=" text-yellow-400 uppercase tracking-[8px] my-4">
            our vision
          </motion.p>
          <motion.h1 variants={animation} className=" my-8 capitalize font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl ">
            become the best tech support
          </motion.h1>
          <motion.p variants={animation} className="my-4">
            Offering excellent customer service is as essential to a business's
            success as <br /> spectacles are to someone who is blind.
          </motion.p>
          <motion.div variants={animation} className="my-6 flex items-center gap-x-4">
            <BsFillCloudSlashFill className="text-4xl text-yellow-400" />
            <div>
              <motion.h4 className="text-2xl font-bold mb-3">Cloud Security</motion.h4>
              <motion.p>
                Secure your resource and protect business critical apps <br />{" "}
                from fraud and web attacks
              </motion.p>
            </div>
          </motion.div>
          <motion.div variants={animation} className="my-6 flex items-center gap-x-4">
            <FaDatabase className="text-4xl text-yellow-400" />
            <div>
              <h4 className="text-2xl font-bold mb-3">Data Security</h4>
              <p>Safeguard your digital literacy and thoughtful life cycle.</p>
            </div>
          </motion.div>
          <motion.div variants={animation} className="my-6 flex items-center gap-x-4">
            <FiSave className="text-4xl text-yellow-400" />
            <div>
              <h4 className="text-2xl font-bold mb-3">Connectivity</h4>
              <p>
                To encourage network performance improvements, we <br />{" "}
                collaborate with business partners in the connectivity sector.
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div variants={animation} className="flex-1">
          <Image
            src={"/images/about/vision.jpg"}
            width="0"
            height="0"
            className="w-full "
            alt=""
          />
        </motion.div>
      </motion.article>
    </Container>
  );
};

export default OurVision;
