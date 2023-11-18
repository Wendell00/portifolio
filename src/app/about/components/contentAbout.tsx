'use client'

import { motion, useScroll, AnimatePresence} from 'framer-motion';
import {useEffect, useState} from 'react'
import {Roboto} from 'next/font/google'
import { FaCode, FaBook, FaPhoenixFramework, FaScrewdriver, FaEdge, FaDatabase } from 'react-icons/fa';
import { DiJavascript1, DiPython, DiBootstrap, DiReact, DiGit, DiMongodb} from 'react-icons/di';
import { CgCPlusPlus } from "react-icons/cg";
import { SiTailwindcss, SiNextdotjs, SiFirebase, SiVisualstudiocode, SiVercel, SiAdobeillustrator, SiAdobephotoshop, SiGimp, SiMysql } from "react-icons/si"

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
                  <div className='w-full h-full dark:bg-[#22222299] bg-[#cccccc99] rounded-md border dark:border-[#444] border-[#eee] p-4 flex flex-col justify-between'>
                      <div>
                        <FaCode className="w-[50px] h-[50px] p-[6px] text-[100%] dark:text-[#666] text-[#fff] mb-[8px]"/>
                        <h3 className='bgText bg-gradient-to-b from-[#444] to-[#000030] dark:from-[#fff] dark:to-[#ffffff77] text-lg font-medium'>Linguagens</h3>
                      </div>
                      <div className='w-full flex justify-around py-[20px]'>
                        <DiJavascript1 className="p-[6px] text-[70px] border-r border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>
                        <CgCPlusPlus className="p-[6px] text-[70px] border-r border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>
                        <DiPython className="p-[6px] text-[70px] border-r border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>
                      </div>
                  </div>
                  <div className='w-full h-full dark:bg-[#22222299] bg-[#cccccc99] rounded-md border dark:border-[#444] border-[#eee] p-4 flex flex-col justify-between'>
                      <div>
                        <FaBook className="w-[50px] h-[50px] p-[6px] text-[100%] dark:text-[#666] text-[#fff] mb-[8px]"/>
                        <h3 className='bgText bg-gradient-to-b from-[#444] to-[#000030] dark:from-[#fff] dark:to-[#ffffff77] text-lg font-medium'>Bibliotecas</h3>
                      </div>
                      <div className='w-full flex justify-around py-[20px]'>
                        <DiReact className="p-[6px] text-[70px] border-r border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>
                        <SiTailwindcss className="p-[6px] text-[70px] border-r border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>
                        <DiBootstrap className="p-[6px] text-[70px] border-r border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>
                      </div>
                  </div>
                  <div className='w-full h-full dark:bg-[#22222299] bg-[#cccccc99] rounded-md border dark:border-[#444] border-[#eee] p-4 flex flex-col justify-between'>
                      <div>
                        <FaPhoenixFramework className="w-[50px] h-[50px] p-[6px] text-[100%] dark:text-[#666] text-[#fff] mb-[8px]"/>
                        <h3 className='bgText bg-gradient-to-b from-[#444] to-[#000030] dark:from-[#fff] dark:to-[#ffffff77] text-lg font-medium'>Frameworks</h3>
                      </div>
                      <div className='w-full flex justify-around py-[20px]'>
                        <SiNextdotjs className="p-[6px] text-[70px] border-r border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>
                      </div>
                  </div>
                  <div className='w-full h-full dark:bg-[#22222299] bg-[#cccccc99] rounded-md border dark:border-[#444] border-[#eee] p-4 flex flex-col justify-between'>
                      <div>
                        <FaScrewdriver className="w-[50px] h-[50px] p-[6px] text-[100%] dark:text-[#666] text-[#fff] mb-[8px]"/>
                        <h3 className='bgText bg-gradient-to-b from-[#444] to-[#000030] dark:from-[#fff] dark:to-[#ffffff77] text-lg font-medium'>Ferramentas</h3>
                      </div>
                      <div className='w-full grid grid-rows-2 grid-cols-3 gap-x-3 justify-evenly justify-items-center'>
                        <SiVisualstudiocode className="p-[6px] text-[50px] border-r border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>
                        <DiGit className="p-[6px] text-[50px] border-r border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>
                        <SiVercel className="p-[6px] text-[50px] border-r border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>
                        <SiAdobeillustrator className="p-[6px] text-[50px] border-r border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>
                        <SiAdobephotoshop className="p-[6px] text-[50px] border-r border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>
                        <SiGimp className="p-[6px] text-[50px] border-r border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>
                      </div>
                  </div>
                  <div className='w-full h-full dark:bg-[#22222299] bg-[#cccccc99] rounded-md border dark:border-[#444] border-[#eee] p-4 flex flex-col justify-between'>
                      <div>
                        <FaEdge className="w-[50px] h-[50px] p-[6px] text-[100%] dark:text-[#666] text-[#fff] mb-[8px]"/>
                        <h3 className='bgText bg-gradient-to-b from-[#444] to-[#000030] dark:from-[#fff] dark:to-[#ffffff77] text-lg font-medium'>Front-End</h3>
                      </div>
                      <div className='w-full grid grid-rows-2 grid-cols-3 gap-x-3 justify-evenly justify-items-center'>
                        <DiJavascript1 className="p-[6px] text-[50px] border-r border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>
                        <SiNextdotjs className="p-[6px] text-[50px] border-r border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>
                        <DiReact className="p-[6px] text-[50px] border-r border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>
                        <SiTailwindcss className="p-[6px] text-[50px] border-r border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>
                        <DiBootstrap className="p-[6px] text-[50px] border-r border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>
                      </div>
                  </div>
                  <div className='w-full h-full dark:bg-[#22222299] bg-[#cccccc99] rounded-md border dark:border-[#444] border-[#eee] p-4 flex flex-col justify-between'>
                      <div>
                        <FaDatabase className="w-[50px] h-[50px] p-[6px] text-[100%] dark:text-[#666] text-[#fff] mb-[8px]"/>
                        <h3 className='bgText bg-gradient-to-b from-[#444] to-[#000030] dark:from-[#fff] dark:to-[#ffffff77] text-lg font-medium'>Back-End</h3>
                      </div>
                      <div className='w-full flex justify-around py-[20px]'>
                        <DiMongodb className="p-[6px] text-[70px] border-r border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>
                        <SiFirebase className="p-[6px] text-[70px] border-r border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>
                        <SiMysql className="p-[6px] text-[70px] border-r border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>
                      </div>
                  </div>
                </motion.div>
            ) }
        </AnimatePresence>
    </div>
  );
};