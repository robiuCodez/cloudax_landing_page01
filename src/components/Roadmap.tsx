import { motion } from "framer-motion";
import Image from "next/image";
import { ITree } from "../interfaces";

const Trees = ({ left, icon, h1, p, image }: ITree) => {
  if (left) {
    return (
      <div className="flex flex-col gap-8 md:gap-0 md:flex-row w-11/12 items-center justify-between my-5 p-8 mx-auto">
        <motion.div
          initial={{ x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className=""
        >
          <Image
            className=""
            src={icon}
            alt="icon"
            layout="fill"
          />
          <h2 className="text-xl lg:text-2xl my-5 font-semibold">{h1}</h2>
          <p className="lg:leading-loose">{p}</p>
        </motion.div>
        <motion.div
          initial={{ x: 50 }}
          whileInView={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className=""
        >
          <Image src={image} alt="icon" layout="fill" />
        </motion.div>
      </div>
    );
  } else {
    return (
      <div className="flex gap-8 md:gap-0 flex-col-reverse md:flex-row w-11/12 items-center justify-between my-5 p-8 mx-auto">
        <motion.div
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className=""
        >
          <Image src={image} alt="icon" layout="fill" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className=""
        >
          <Image
            className="w-[4rem] text-left"
            src={icon}
            alt="icon"
            layout="fill"
          />
          <h2 className="text-xl lg:text-2xl my-5 font-semibold">{h1}</h2>
          <p className="lg:leading-loose">{p}</p>
        </motion.div>
      </div>
    );
  }
};

export default Trees;
