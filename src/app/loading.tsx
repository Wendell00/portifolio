'use client'

import { Damion } from 'next/font/google'
import { motion } from 'framer-motion'

const damion = Damion({
  weight: '400',
  subsets: ['latin'],
})

export default function Loading() {

  return (
    <div className="w-screen h-screen fixed flex items-center justify-center top-0 bg-gradient-to-b dark:from-[#000030] dark:to-[#000000] from-[#c1deee] to-[#c1c1c1] z-50">
        <motion.p className={`${damion.className} text-[100px] bold shadow-black cursor-pointer text-black dark:text-white`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ repeat: Infinity, duration: 1, repeatType: 'reverse' }}>
              WB
        </motion.p>
    </div>
  )
}
