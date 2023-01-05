import Link from "next/link";
import Container from "../../UI/Container";
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import {motion} from 'framer-motion'
import { animation } from "../../animate/animate";
import { footerlistData } from "../../../data/data";

const HorizontalFooter = ({className}) => {

    const footerList = (items) => {
      return(
        <ul>
          {items.map(item => <li className="my-3 hover:text-yellow-400 capitalize" key={item.id}>
            <Link href={item.route}>{item.name}</Link>
          </li>)}
        </ul>
      )
    }

  return (
    <Container bgColor={"bg-black"} className={className}>
      <motion.footer 
       initial={"offscreen"}
       whileInView={"onscreen"}
       viewport={{ once: false, amount: 0.1 }}
       transition={{ staggerChildren: 0.2 }}
      className={`${className} grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 text-light xl:justify-items-center py-10`}>

        <motion.div variants={animation}>
          <Image
          src={'/images/footer_logo.png'}
          width='100'
          height='100'
          className=" py-3"
          alt=""
          />
          <p className="">
            Where software's aren't bound to <br /> any particular though's
          </p>

          <div  className="flex gap-x-4 my-8">
            <Link
              className="w-12 h-12 rounded-full p-3 bg-[#3b5998] text-light flex items-center justify-center text-4xl"
              href={"https://www.facebook.com/miiconsolution"}
            >
              <FaFacebook />
            </Link>
            <Link
              className="w-12 h-12 rounded-full p-3 bg-[#00acee] text-light flex items-center justify-center text-4xl"
              href={"https://twitter.com/MiiconSolution"}
            >
              <FaTwitter />
            </Link>
            <Link
              className="w-12 h-12 rounded-full p-3 bg-[#FF0000] text-light flex items-center justify-center text-4xl"
              href={"https://www.youtube.com/@miiconsolution"}
            >
              <FaYoutube />
            </Link>
            <Link
              className="w-12 h-12 rounded-full p-3 bg-[#0072b1] text-white flex items-center justify-center text-4xl"
              href={"/"}
            >
              <FaLinkedinIn />
            </Link>
          </div>

        </motion.div>

        <motion.div variants={animation}>
          <h3 className="text-xl font-bold text-yellow-400 my-4">Company</h3>
          {footerList(footerlistData?.company)}
        </motion.div>

        <motion.div variants={animation}>
          <h3 className="text-xl font-bold text-yellow-400 my-4">Contact</h3>
         {footerList(footerlistData?.contact)}
        </motion.div>

        <motion.div variants={animation}>
          <h3 className="text-xl font-bold text-yellow-400 my-4">More</h3>
          {footerList(footerlistData?.more)}
        </motion.div>

      </motion.footer>
      <div className="flex items-center py-6">
        <p>&copy; Copyright, miicon 2022. All rights reserved</p>
        <p>Tearms & Conditions</p>
      </div>
    </Container>
  );
};

export default HorizontalFooter;
