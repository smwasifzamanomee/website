import Image from "next/image"
import { ourteamsData } from "../../../data/data"
import { animation } from "../../animate/animate"
import Container from "../../UI/Container"
import {motion} from 'framer-motion'
import { useRouter } from "next/router"

const Main = () => {
    const router = useRouter();
  return (
 <>
    <Container bgColor={"bg-black"} height="min-h-screen">
    <motion.article
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ staggerChildren: 0.2 }}
      className=" py-10 text-light"
    >
      <motion.p
        variants={animation}
        className="text-primary tracking-[8px] uppercase my-4"
      >
        team
      </motion.p>

      <div className="xl:flex lg:flex items-center justify-between sm:justify-center my-8">
        <motion.h1
          variants={animation}
          className="text-5xl sm:text-2xl font-bold mb-4"
        >
          Meet Our Expert
        </motion.h1>

        <motion.p variants={animation} className="">
          Our committed team consistently delivers the exact solution to our
          clients.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center">
        {ourteamsData.slice(0, 5).map((team) => (
          <motion.div
            variants={animation}
            key={team.id}
            className="w-[300px] h-[350px] p-6 my-10 text-center hover:bg-gradient-to-tr from-yellow-500 to-black cursor-pointer"
            onClick={() => router.push({
              pathname: `team/${team.name}`
            })}
          >
            <Image
              src={team?.img}
              width="200"
              height="200"
              className=" h-[200px] rounded-full mx-auto my-4 object-cover"
              alt={team?.img}
            />
            <h2
              variants={animation}
              className="font-bold capitalize my-2 text-xl"
            >
              {team.name.replace("-", " ")}
            </h2>
            <p variants={animation} className=" capitalize">
              {team.position}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.article>
  </Container>
 </>
  )
}

export default Main