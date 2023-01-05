import Image from "next/image";
import { FaRocket, FaUsers } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { GoUnmute, GoMute } from "react-icons/go";
import { animation } from "../../animate/animate";
import Button from "../../UI/Button";

const AboutMiicon = () => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="min-h-screen bg-black flex items-center py-10">
      <motion.article
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ staggerChildren: 0.2 }}
        className="container mx-auto px-4 grid sm:grid-cols-1 xl:grid-cols-2 gap-6"
      >
        <div className="xl:mr-12 xl:py-0 py-10">
          <motion.div variants={animation} className="sm:hidden md:hidden ">
            <Image
              src={"/images/about/about_3.jpg"}
              width="500"
              height={"500"}
              alt="miicon about us"
              priority
            />
          </motion.div>

          <motion.div
            variants={animation}
            className="xl:-mt-20 lg:-mt-20  ml-28 xl:-mr-6 mt-0 mr-0 md:ml-0 sm:ml-0"
          >
            {/* Video Implement */}
            <video
              poster="/videos/video.mp4"
              width="500"
              height={"500"}
              muted={isMuted}
              loop
              autoPlay
              className="shadow-2xl rounded  "
            >
              <source src="/videos/video.mp4" />
            </video>
            {/* Controls of mute and unmute button */}
            <div className="text-light hover:text-primary text-2xl ">
              <span
                onClick={() => setIsMuted((prev) => !prev)}
                className="inline-block z-10"
              >
                {isMuted ? <GoMute /> : <GoUnmute />}
              </span>
            </div>
          </motion.div>
        </div>
        <div className="text-white">
          <motion.p
            variants={animation}
            className="text-yellow-500 my-4 tracking-[8px]"
          >
            About miicon
          </motion.p>
          <motion.h1 variants={animation} className="text-5xl font-bold my-4">
            Welcome to Miicon
          </motion.h1>
          <motion.p
            variants={animation}
            className="text-md my-4 text-gray-400 text-justify"
          >
            Miicon solutions is a leading web & mobile application solution
            company based in UK providing quality services to small businesses
            through the hard work and dedication of our experienced
            professionals. Our core focus is to build a reliable network with
            our clients to create successful websites and online businesses. Our
            target is to achieve 100% client satisfaction.
          </motion.p>

          <aside className="grid grid-cols-2 gap-6 py-10">
            <motion.div variants={animation}>
              <FaRocket className="text-4xl text-primary" />
              <p className="text-5xl font-bold my-3 ">
                5<span className="text-sm text-primary">+</span>
              </p>
              <p className=" capitalize">years of experience</p>
            </motion.div>
            <motion.div variants={animation}>
              <FaUsers className="text-4xl text-primary" />
              <p className="text-5xl font-bold my-3">
                12 <span className="text-sm text-primary">+</span>
              </p>
              <p className=" capitalize">people working</p>
            </motion.div>
            <motion.div variants={animation}>
              <FaRocket className="text-4xl text-primary" />
              <p className="text-5xl font-bold my-3 ">
                2 <span className="text-sm text-primary">+</span>
              </p>
              <p className=" capitalize">project done</p>
            </motion.div>
            <motion.div variants={animation}>
              <FaUsers className="text-4xl text-primary" />
              <p className="text-5xl font-bold my-3">
                10 <span className="text-sm text-primary">+</span>
              </p>
              <p className=" capitalize">stories published</p>
            </motion.div>
          </aside>
          <Link href={"/contact"}>
            <Button className={"w-[150px]"}>Let's Talk</Button>
          </Link>
        </div>
      </motion.article>
    </div>
  );
};

export default AboutMiicon;
