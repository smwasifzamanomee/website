import Container from "../../UI/Container";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { whyusData } from "../../../data/data";
import Button from "../../UI/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { animation } from "../../animate/animate";

const WhyUs = () => {
  const items = [
    { id: 1, name: "website" },
    { id: 2, name: "seo" },
    { id: 3, name: "mobile apps" },
    { id: 4, name: "branding" },
    { id: 5, name: "desktop softwares" },
    { id: 6, name: "ui & ux" },
  ];

  return (
    <Container
      bgColor={' bg-[url("/images/hero.jpg")] object-cover object-center'}
      width=" w-full "
      height="min-h-screen"
    >
      <motion.article
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ staggerChildren: 0.2 }}
        className="xl:flex items-center justify-between gap-6 py-10"
      >
        <div className="flex-1 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-12 ">
          {whyusData.map((item) => (
            <motion.div
              variants={animation}
              key={item.id}
              className={`${item.id === 2 ? "mt-20" : ""} ${
                item.id === 4 ? "mt-20 " : ""
              } bg-black  h-[280px] text-white grid place-content-center p-6`}
            >
              {<item.Icon className="text-5xl my-4 text-yellow-400" />}
              <h3 className="text-2xl capitalize font-bold my-4">
                {item.name}
              </h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex-1 p-12">
          <motion.p
            variants={animation}
            className="text-xl tracking-[8px] my-4 uppercase"
          >
            why us
          </motion.p>
          <motion.h1
            variants={animation}
            className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-bold capitalize my-4"
          >
            best service you can get
          </motion.h1>
          <motion.p variants={animation} className="my-4 ">
            Miicon solutions is a leading web & mobile application solution
            company based in UK providing quality services to small businesses
            through the hard work and dedication of our experienced
            professionals. Our core focus is to build a reliable network with
            our clients to create successful websites and online businesses. Our
            target is to achieve 100% client satisfaction.
          </motion.p>
          <ul className="grid grid-cols-2 gap-3 my-8">
            {items.map((item) => (
              <motion.li
                variants={animation}
                className="flex items-center gap-4 uppercase sm:text-sm"
                key={item.id}
              >
                {" "}
                <FaCheck className="text-yellow-400" /> {item.name}
              </motion.li>
            ))}
          </ul>
          <Link href={"/contact"}>
            <Button className={"w-[150px]"}>Let's Talk</Button>
          </Link>
        </div>
      </motion.article>
    </Container>
  );
};

export default WhyUs;
