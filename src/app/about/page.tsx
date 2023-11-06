'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <>
        <div className="w-full h-[330vh]">
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 30 }}>
                  <h2 className={`title-about text-center text-[80px] mt-[24px]`}>Wendell Borges</h2>
              </motion.div>
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 30 }}>
                  <p className={`text-2xl text-center text-[#b4bcd0]`}>Um pouco sobre mim</p>
              </motion.div>
        </div>
    </>
  )
}
