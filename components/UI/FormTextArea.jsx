import { animation } from "../animate/animate";
import { motion } from "framer-motion";


const FormTextArea = ({label, name, value, setValue}) => {
  return (
    <motion.div variants={animation} className="flex flex-col gap-y-1 my-4">
    <label className="text-light font-bold" htmlFor="msg">
      {label}
    </label>
    <textarea
    // value={credential?.message}
    className="py-2 rounded outline-none border px-3"
    name={name}
    id="message"
    cols="10"
    rows="4"
    required
    value={value}
    onChange={e => setValue(prev => ({...prev, [e.target.name]: e.target.value}))}
    ></textarea>
  </motion.div>
  )
}

export default FormTextArea