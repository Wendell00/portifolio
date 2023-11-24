'use client'

import { motion, useScroll} from 'framer-motion';
import {useEffect, useState} from 'react'
import {Roboto} from 'next/font/google'
import Skills from './skills';
import Certifications from './certifications';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})


export default function ContentAbout(){

  const [scrollPosition, setScrollPosition] = useState(0)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY / window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='min-w-full w-[80vw] h-full flex'>
            {scrollYProgress.get() < 0.3 && (
                  <motion.div className="w-full h-full flex items-center justify-center flex-col mt-[-40px]">
                      <motion.h2 className='contentAbout bg-gradient-to-b from-[#444] to-[#000030] dark:from-[#fff] dark:to-[#ffffff77] mb-[30px] text-[80px]'
                        key="titulo"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 30 }}>
                          Olá, sou o Wendell!
                      </motion.h2>
                      <motion.p className={`${roboto.className} text-[#444] dark:text-[#ccc] text-[22px] text-center w-[45vw] leading-10`}
                          key="subtitulo"
                          initial={{ y: 100, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ type: 'spring', stiffness: 30, delay: 0.1 }}>
                          Sou desenvolvedor Front-End, estudo essa área há mais 3 anos, atualmente possuo 20 anos e sempre busco ao máximo se atualizar a novas tecnologias.
                      </motion.p>
                  </motion.div>
            )}
            {scrollYProgress.get() > 0.3 && scrollYProgress.get() < 0.6 &&(
              <Skills/>
            ) }
            {scrollYProgress.get() > 0.6 &&(
              <Certifications/>
            ) }
    </div>
  );
};


// Utilizar ref se a div de cima está na tela não renderizar o skills, utilizando useRef