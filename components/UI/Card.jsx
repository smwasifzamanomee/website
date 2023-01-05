import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";
import { animation } from "../../components/animate/animate";
import { motion } from "framer-motion";

const Card = ({ item }) => {
  return (
    <motion.article
      variants={animation}
      className=" border border-gray-600 text-light p-12 sm:p-6 hover:border-primary h-[350px] md:h-auto md:w-[500px]"
    >
      <>{<item.Icon className="text-5xl text-yellow-400" />}</>

      <h3 className="text-3xl lg:text-2xl font-bold my-6 capitalize">
        {item.title}
      </h3>
      <p className="my-6">{item.desc}</p>

      {item.route === "/career" && (
        <Link
          href={`${item.route}/${item.id}`}
          className={`flex items-center gap-x-4 hover:text-yellow-500 transition duration-500 hover:-translate-y-2 mt-6`}
        >
          {item.btn}
          <MdDoubleArrow />
        </Link>
      )}

      {item.route === "/services" && (
        <Link
          href={`${item.route}/${item.id}`}
          className={`flex items-center gap-x-4 hover:text-yellow-500 transition duration-500 hover:-translate-y-2 mt-6`}
        >
          {item.btn}
          <MdDoubleArrow />
        </Link>
      )}
    </motion.article>
  );
};

export default Card;
