import Link from "next/link";
import Container from "../../components/UI/Container";
import HeadTitle from "../../components/UI/HeadTitle";
import TopHeading from "../../components/UI/TopHeading";
import { blogData } from "../../data/data";
import { animation } from "../../components/animate/animate";
import { motion } from "framer-motion";


const Main = () => {
  return (
    <>
      <HeadTitle title={'Blog'} />
      <TopHeading title={"Blog"} />

      <Container
        bgColor={"bg-dark"}
        height="min-h-screen"
        className={"py-10"}
      >
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.1 }}
        transition={{ staggerChildren: 0.2 }}
        >
          <div variants={animation} className="text-center text-light py-10">
            <motion.p variants={animation} className="text-primary tracking-[8px] uppercase">articles</motion.p>
            <motion.h1 variants={animation} className="text-5xl sm:text-2xl font-bold mt-4">
              Read Our Articles
            </motion.h1>
          </div>
          <article className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 ">
            {blogData.map((blog) => (
              <motion.div
                variants={animation}
                key={blog.id}
                className=" w-[400px] h-[480px] sm:h-auto sm:w-auto p-4 relative"
              >
                <img
                  variants={animation}
                  src={blog.img}
                  className="h-[300px] object-cover"
                  alt={blog.img}
                />
                <div className="py-4">
                  <p  variants={animation} className="text-light pb-4">{blog.desc}</p>
                  <>
                    <button variants={animation}  className=" outline-none border border-primary text-primary py-3 px-8 rounded-full absolute bottom-2 hover:bg-primary hover:text-dark transition-all duration-300">
                      React More
                    </button>
                  </>
                </div>
              </motion.div>
            ))}
          </article>
        </motion.div>
      </Container>
    </>
  )
}

export default Main