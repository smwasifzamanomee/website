import classes from "../../styles/button.module.css";
import { animation } from "../animate/animate";
import {motion} from 'framer-motion'

const Button = ({ type, onClick, children, className }) => {
  return (
    <motion.button variants={animation} type={type} onClick={onClick} className={`${classes.btn} ${className}`}>
      {children}
      <span className={classes.btn2}></span>
    </motion.button>
  );
};

export default Button;
