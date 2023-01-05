import { useState } from "react";
import FormInput from "../../UI/FormInput";
import FormTextArea from "../../UI/FormTextArea";
import { animation } from "../../animate/animate";
import { motion } from "framer-motion";

const initialState = {
  email: "",
  message: "",
};

const ContactForm = () => {
  const [state, setState] = useState(initialState);

  const handleContact = async (e) => {
    e.preventDefault();

    const res = await fetch("http://192.168.0.180:6970/api/v1/send-mail/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...state }),
    });

    const data = await res.json();
    if (data?.report) {
      alert(data.report);
      e.target.email.value = "";
      e.target.message.value = "";
    }
  };

  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.1 }}
        transition={{ staggerChildren: 0.2 }}
      className=" lg:absolute xl:absolute right-10 lg:top-[150%] xl:top-[120%] sm:w-full xl:w-[500px] bg-dark py-10 px-8"
    >
      <div>
        <motion.p
          variants={animation}
          className="text-primary tracking-[3px] uppercase"
        >
          contact
        </motion.p>
        <motion.h1
          variants={animation}
          className="text-5xl font-bold text-light py-4"
        >
          Get In Touch
        </motion.h1>
        <motion.p variants={animation} className="text-light">
          Contact Us, If you have any queries.
        </motion.p>
      </div>
      <form onSubmit={handleContact}>
        <FormInput
          label={"Email"}
          name="email"
          type={"email"}
          setValue={setState}
          value={state.email}
        />
        <FormTextArea
          label={"Message"}
          name="message"
          value={state.message}
          setValue={setState}
        />
        <motion.input
          variants={animation}
          type="submit"
          value="Send"
          className=" outline-none border-0 bg-light  px-12 py-3 rounded font-semibold "
        />
      </form>
    </motion.div>
  );
};

export default ContactForm;
