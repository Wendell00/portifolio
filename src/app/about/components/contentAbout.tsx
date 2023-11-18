'use client'

import { motion, useScroll, AnimatePresence} from 'framer-motion';
import {useEffect, useState} from 'react'
import {Roboto} from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function ContentAbout(){

  const [scrollPosition, setScrollPosition] = useState(0)
  const { scrollYProgress } = useScroll()
  const [test, setTest] = useState(true)

  setTimeout(()=>{
    setTest(false)
  }, 4000)
  

  const handleScroll = () => {
    setScrollPosition(window.scrollY / window.innerHeight);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY / window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    console.log('renderizou')

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='min-w-full w-[80vw] h-full flex'>
        <AnimatePresence>
            {scrollYProgress.get() < 0.5 ? (
                <motion.div className="w-full h-full flex items-center justify-center flex-col mt-[-40px]">
                    <motion.h2 className='contentAbout bg-gradient-to-b from-[#444] to-[#000030] dark:from-[#fff] dark:to-[#ffffff77] mb-[30px] text-[80px]'>
                        Olá, sou o Wendell!
                    </motion.h2>
                    <motion.p className={`${roboto.className} text-[#444] dark:text-[#ccc] text-[22px] text-center w-[45vw] leading-10`}>
                        Sou desenvolvedor Front-End, estudo essa área há mais 3 anos, atualmente possuo 20 anos e sempre busco ao máximo se atualizar a novas tecnologias.
                    </motion.p>
                </motion.div>
            ): (
                <motion.div className="w-full h-full grid grid-rows-2 grid-cols-3 items-center p-[80px] justify-center gap-4 dark:bg-gradientRadialDark bg-gradientRadialLight">
                  <div className='w-full h-full bg-[#22222299] rounded-md border border-[#444]'>

                  </div>
                  <div className='w-full h-full bg-[#22222299] rounded-md border border-[#444]'>

                  </div>
                  <div className='w-full h-full bg-[#22222299] rounded-md border border-[#444]'>

                  </div>
                  <div className='w-full h-full bg-[#22222299] rounded-md border border-[#444]'>

                  </div>
                  <div className='w-full h-full bg-[#22222299] rounded-md border border-[#444]'>

                  </div>
                  <div className='w-full h-full bg-[#22222299] rounded-md border border-[#444]'>

                  </div>
                </motion.div>
            ) }
        </AnimatePresence>
    </div>
  );
};