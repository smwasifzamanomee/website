import TopHeading from "../../UI/TopHeading";
import HorizontalLayout from "../../../layouts/HorizontalLayout";
import Places from "./Places";
import { FaLocationArrow, FaPhone, FaMailchimp } from "react-icons/fa";
import Container from "../../UI/Container";
import HeadTitle from "../../UI/HeadTitle";
import { animation } from "../../animate/animate";
import { motion } from "framer-motion";

const Main = () => {
  const contactCard = ({ name, desc, Icon, isPhone, isEmail, isAddress }) => {
    return (
      <motion.div variants={animation}>
        <div className=" h-[300px] flex justify-center items-center flex-col p-4 border border-gray-500 hover:border-primary transition-all duration-300 text-light">
          <Icon className="text-5xl text-primary" />
          <h3 className="text-4xl font-bold py-5">{name}</h3>
          {isPhone && <a href={`tel:${desc}`}>{desc}</a>}
          {isEmail && <a href={`mailto: ${desc}`}>{desc}</a>}
          {isAddress && (
            <a
              className="text-center"
              href={`http://maps.google.com/?q=${desc}`}
              target="_blank"
            >
              {desc}
            </a>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <HeadTitle title={"Contact Us"} />
      <TopHeading title={"Contact"} />

      <Container bgColor={"bg-dark"}>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.1 }}
        transition={{ staggerChildren: 0.2 }}
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  place-content-center gap-8 py-10 min-h-[600px] "
        >
          {contactCard({
            name: "Address",
            desc: "Miicon, R N Road, Jashore, Bangladesh ST 74000",
            Icon: FaLocationArrow,
            isAddress: true,
          })}
          {contactCard({
            name: "Phone",
            desc: "518-205-0744",
            Icon: FaPhone,
            isPhone: true,
          })}
          {contactCard({
            name: "Email",
            desc: "support@miicon.net",
            Icon: FaMailchimp,
            isEmail: true,
          })}
        </motion.div>
      </Container>

      <Places />
    </>
  );
};

export default Main;
