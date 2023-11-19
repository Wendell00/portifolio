'use client'

import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Portfolio(){
  const x = useMotionValue(0)
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])

  return (
    <>
        <div className="w-screen h-[300vh]">
          <motion.div className="w-[50px] h-[50px] bg-red-300" initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}>

          </motion.div>
        </div>
    </>
  );
};