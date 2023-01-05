import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { GoMute, GoUnmute } from "react-icons/go";
import HeadTitle from "../../UI/HeadTitle";
import TopHeading from "../../UI/TopHeading";
import Container from "../../UI/Container";
import { animation } from "../../animate/animate";
import Position from "./Position";
import Button from "../../UI/Button";

const Main = () => {
  const [isMuted, setIsMuted] = useState(true);
  return (
    <>
      <HeadTitle title={"Career"} />
      <TopHeading title={"Career"} />

      <Container bgColor={"bg-dark"} height="min-h-screen" className="py-10">
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.1 }}
        transition={{ staggerChildren: 0.2 }}
        >
          <div className="py-10 xl:flex justify-between items-center gap-4 ">
            <div className="flex-1 p-4">
              <motion.div variants={animation} className="sm:hidden md:hidden">
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
            <div className="flex-1 p-6 text-light">
              <motion.p
                variants={animation}
                className="text-primary tracking-[8px] uppercase"
              >
                join our team
              </motion.p>
              <motion.h1
                variants={animation}
                className="py-4 text-6xl md:text-4xl sm:text-2xl font-extrabold text-light leading-[60px]"
              >
                Develop Your Skills With Techoes
              </motion.h1>
              <motion.p
                variants={animation}
                className="xl:max-w-xl capitalize py-6 "
              >
                If you want to be a part of our team send us your updated
                resume. we are excited to meet with you.
              </motion.p>
              <Button className="w-[300px] ">Closed</Button>
            </div>
          </div>

          <Position />
        </motion.div>
      </Container>
    </>
  );
};

export default Main;
