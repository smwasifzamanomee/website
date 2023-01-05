import { motion } from "framer-motion";
import { careerpositionData } from "../../../data/data";
import { animation } from "../../animate/animate";
import Card from "../../UI/Card";

const Position = () => {
  return (
    <div>
      <div className="text-center py-10">
        <motion.p
          variants={animation}
          className="text-primary tracking-[8px] uppercase"
        >
          we are hiriing
        </motion.p>
        <motion.h1
          variants={animation}
          className="py-4 text-5xl font-bold text-light"
        >
          Open Position
        </motion.h1>
      </div>

      {/* service items */}
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-12 place-items-center">
        {careerpositionData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Position;
