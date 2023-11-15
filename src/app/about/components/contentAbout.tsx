'use client'

import { motion, useScroll, AnimatePresence} from 'framer-motion';
import {useEffect, useState} from 'react'
import {Roboto} from 'next/font/google'

const damion = Roboto({
  weight: '700',
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
    <div className='min-w-screen w-[100vw] h-full flex'>
        <AnimatePresence>
            {scrollYProgress.get() < 0.5 ? (
                <motion.div className="w-screen h-full flex items-center justify-center flex-col">
                    <motion.h2 className='contentAbout mb-[30px] text-[80px]'>
                        Olá, sou o Wendell!
                    </motion.h2>
                    <motion.p className='text-[#ccc] text-[22px] text-center w-[45vw] leading-10'>
                            Sou desenvolvedor Front-End, estudo essa área há mais 3 anos, atualmente possuo 20 anos e sempre busco ao máximo se atualizar a novas tecnologias.
                    </motion.p>
                </motion.div>
            ): (
                <motion.div className="w-screen h-full flex">
                    <div className='w-[40%] h-full flex items-center justify-center'>
                        <motion.h2 className='contentAbout text-[60px]'>
                            Tecnologias que utilizo
                        </motion.h2>
                    </div>
                </motion.div>
            ) }
        </AnimatePresence>
    </div>
  );
};