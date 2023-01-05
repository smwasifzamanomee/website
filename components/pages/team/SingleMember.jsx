import Image from "next/image";
import { FaMailBulk, FaPhone, FaSearchLocation } from "react-icons/fa";
import Container from "../../UI/Container";
import HeadTitle from "../../UI/HeadTitle";
import TopHeading from "../../UI/TopHeading";
import { motion } from "framer-motion";
import { animation } from "../../animate/animate";
export const SingleMember = ({ item }) => {

  const title = item?.name?.charAt(0).toUpperCase() + item?.name?.slice(1)


  return (
    <>
      <TopHeading title={item?.name} />
      <HeadTitle title={title} />
      <Container bgColor={"bg-dark"} height={"min-h-[80vh]"}>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ staggerChildren: 0.2 }}
          className="xl:w-[900px] lg:[800px] mx-auto mt-10"
        >
          {/* top */}
          <div className="xl:flex lg:flex items-center justify-between">
            <div className="flex-1 px-6 sm:px-0">
              <motion.h2
                variants={animation}
                className="text-primary font-bold text-4xl tracking-widest"
              >
                Experience
              </motion.h2>
              <div className="py-4">
                <motion.h4
                  variants={animation}
                  className="font-semibold text-pink-300 text-xl py-2"
                >
                  Miicon Solutions
                </motion.h4>
                <motion.span variants={animation} className="text-gray-400"> 15 September, 2022</motion.span>
              </div>

              <motion.h2
                variants={animation}
                className="text-xl font-bold uppercase text-light pt-4 "
              >
               Professional Skills
              </motion.h2>
              <motion.ul
                variants={animation}
                className="grid grid-cols-1 gap-y-2 py-4 "
              >
                {item?.skills.map((item) => (
                  <li
                    key={item}
                    className="bg-primary bg-opacity-80 pl-3 text-left rounded-md capitalize break-words scale-100 hover:scale-105 transition-all duration-300"
                  >
                    {item}
                  </li>
                ))}
              </motion.ul>
            </div>

            <div className="flex-1 ml-2 md:grid sm:grid place-items-center">
              <motion.div variants={animation}>
                <Image
                  src={item?.img}
                  width={320}
                  height={400}
                  alt="team member img"
                />
              </motion.div>
              <div className="text-light">
                <motion.p
                  variants={animation}
                  className="text-primary capitalize font-bold tracking-wide py-2"
                >
                  {item?.position}
                </motion.p>
                <motion.a
                  href={`tel:${item?.phone}`}
                  variants={animation}
                  className="flex items-center gap-2"
                >
                  <FaPhone className="text-primary" /> {item?.phone}
                </motion.a>
                <motion.a
                  href={`mailto:${item?.email}`}
                  variants={animation}
                  className="flex items-center gap-2"
                >
                  <FaMailBulk className="text-primary" /> {item?.email}
                </motion.a>
                <motion.a
                  href={`http://maps.google.com/?q=${item?.address}`}
                  target="_blank"
                  variants={animation}
                  className="flex items-center gap-2"
                >
                  <FaSearchLocation className="text-primary" /> {item?.address}
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </>
  );
};
