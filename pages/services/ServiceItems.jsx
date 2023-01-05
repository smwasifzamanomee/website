import Card from "../../components/UI/Card";
import { servicesData } from "../../data/data";
import { animation } from "../../components/animate/animate";
import { motion } from "framer-motion";

const ServiceItems = () => {
  return (
    <section className="min-h-screen bg-black py-10">
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ staggerChildren: 0.2 }}
        className="container mx-auto px-4 "
      >
        <motion.p
          variants={animation}
          className=" tracking-[8px] text-yellow-400 py-4  uppercase text-lg"
        >
          Service{" "}
        </motion.p>
        <div className="lg:flex items-center justify-between pb-10">
          <motion.h1
            variants={animation}
            className="font-bold sm:text-2xl lg:text-5xl capitalize text-light my-4"
          >
            Service We Provide
          </motion.h1>
          <motion.p variants={animation} className="text-gray-300 text-lg mr-8">
            We drive our clients’ growth through innovation and hard work
          </motion.p>
        </div>

        {/* service items */}
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-12 place-items-center">
          {servicesData.map((service) => (
            <Card key={service.id} item={service} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceItems;
