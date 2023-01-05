import { animation } from "../animate/animate"; 
import { motion } from "framer-motion";


const FormInput = ({label, name, type, id, className, setValue, value, readonly}) => {

  return (
    <motion.div variants={animation} className="flex flex-col gap-y-1 my-4">
    <label className="text-light font-bold" htmlFor={name}>
    {label}
    </label>
    <input
      className="py-2 rounded outline-none border px-3"
      type={type}
      name={name}
      id="email"
      value={value}
      onChange={e => setValue(prev => ({...prev, [e.target.name]: e.target.value}))}
      required
      autoComplete="off"
      readOnly={readonly ? readonly : false}
    />
  </motion.div>
  )
}

export default FormInput