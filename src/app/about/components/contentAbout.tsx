'use client'

import { motion, useScroll, AnimatePresence} from 'framer-motion';
import {useEffect, useState} from 'react'
import {Roboto} from 'next/font/google'
import { FaCode, FaBook, FaPhoenixFramework, FaScrewdriver, FaEdge, FaDatabase } from 'react-icons/fa';
import { DiJavascript1, DiPython, DiBootstrap, DiReact, DiGit, DiMongodb} from 'react-icons/di';
import { CgCPlusPlus } from "react-icons/cg";
import IconWithTooltip from './iconWithToolTip';
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
                        <IconWithTooltip icon={<FaCode className="w-[50px] h-[50px] p-[6px] text-[100%] text-[#eee] mb-[8px]"/>} tooltipText="Linguagens" />
                        <h3 className='bgText bg-gradient-to-b from-[#444] to-[#000030] dark:from-[#fff] dark:to-[#ffffff77] text-lg font-medium'>Linguagens</h3>
                      </div>
                      <div className='w-full flex justify-around py-[20px]'>
                        <IconWithTooltip icon={<DiJavascript1 className="p-[6px] text-[70px]  border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>} tooltipText="Javascript"/>
                        <IconWithTooltip icon={<CgCPlusPlus className="p-[6px] text-[70px]  border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>} tooltipText="C++"/>
                        <IconWithTooltip icon={<DiPython className="p-[6px] text-[70px]  border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>} tooltipText="Python"/>
                      </div>
                  </div>
                  <div className='w-full h-full dark:bg-[#22222299] bg-[#cccccc99] rounded-md border dark:border-[#444] border-[#eee] p-4 flex flex-col justify-between'>
                      <div>
                        <IconWithTooltip icon={<FaBook className="w-[50px] h-[50px] p-[6px] text-[100%] text-[#eee] mb-[8px]"/>} tooltipText="Bibliotecas" />
                        <h3 className='bgText bg-gradient-to-b from-[#444] to-[#000030] dark:from-[#fff] dark:to-[#ffffff77] text-lg font-medium'>Bibliotecas</h3>
                      </div>
                      <div className='w-full flex justify-around py-[20px]'>
                        <IconWithTooltip icon={<DiReact className="p-[6px] text-[70px]  border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>} tooltipText="ReactJs"/>
                        <IconWithTooltip icon={<SiTailwindcss className="p-[6px] text-[70px]  border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>} tooltipText="TailwindCSS"/>
                        <IconWithTooltip icon={<DiBootstrap className="p-[6px] text-[70px]  border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>} tooltipText="Bootstrap"/>
                      </div>
                  </div>
                  <div className='w-full h-full dark:bg-[#22222299] bg-[#cccccc99] rounded-md border dark:border-[#444] border-[#eee] p-4 flex flex-col justify-between'>
                      <div>
                        <IconWithTooltip icon={<FaPhoenixFramework className="w-[50px] h-[50px] p-[6px] text-[100%] text-[#eee] mb-[8px]"/>} tooltipText="Frameworks" />
                        <h3 className='bgText bg-gradient-to-b from-[#444] to-[#000030] dark:from-[#fff] dark:to-[#ffffff77] text-lg font-medium'>Frameworks</h3>
                      </div>
                      <div className='w-full flex justify-around py-[20px]'>
                        <IconWithTooltip icon={<SiNextdotjs className="p-[6px] text-[65px]  border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>} tooltipText="NextJs"/>
                      </div>
                  </div>
                  <div className='w-full h-full dark:bg-[#22222299] bg-[#cccccc99] rounded-md border dark:border-[#444] border-[#eee] p-4 flex flex-col justify-between'>
                      <div>
                        <IconWithTooltip icon={<FaScrewdriver className="w-[50px] h-[50px] p-[6px] text-[100%] text-[#eee] mb-[8px]"/>} tooltipText="Ferramentas" />
                        <h3 className='bgText bg-gradient-to-b from-[#444] to-[#000030] dark:from-[#fff] dark:to-[#ffffff77] text-lg font-medium'>Ferramentas</h3>
                      </div>
                      <div className='w-full grid grid-rows-2 grid-cols-3 gap-x-3 justify-evenly justify-items-center'>
                        <IconWithTooltip icon={<SiVisualstudiocode className="p-[6px] text-[50px]  border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>} tooltipText="VS Code"/>
                        <IconWithTooltip icon={<DiGit className="p-[6px] text-[50px]  border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>} tooltipText="Git"/>
                        <IconWithTooltip icon={<SiVercel className="p-[6px] text-[50px]  border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>} tooltipText="Vercel"/>
                        <IconWithTooltip icon={<SiAdobeillustrator className="p-[6px] text-[50px]  border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>} tooltipText="Illustrator"/>
                        <IconWithTooltip icon={<SiAdobephotoshop className="p-[6px] text-[50px]  border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>} tooltipText="Photoshop"/>
                        <IconWithTooltip icon={<SiGimp className="p-[6px] text-[50px]  border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>} tooltipText="Gimp"/>
                      </div>
                  </div>
                  <div className='w-full h-full dark:bg-[#22222299] bg-[#cccccc99] rounded-md border dark:border-[#444] border-[#eee] p-4 flex flex-col justify-between'>
                      <div>
                        <IconWithTooltip icon={<FaEdge className="w-[50px] h-[50px] p-[6px] text-[100%] text-[#eee] mb-[8px]"/>} tooltipText="Front-End" />
                        <h3 className='bgText bg-gradient-to-b from-[#444] to-[#000030] dark:from-[#fff] dark:to-[#ffffff77] text-lg font-medium'>Front-End</h3>
                      </div>
                      <div className='w-full grid grid-rows-2 grid-cols-3 gap-x-3 justify-evenly justify-items-center'>
                        <IconWithTooltip icon={<DiJavascript1 className="p-[6px] text-[50px]  border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>} tooltipText="Javascript"/>
                        <IconWithTooltip icon={<SiNextdotjs className="p-[6px] text-[50px]  border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>} tooltipText="NextJS"/>
                        <IconWithTooltip icon={<DiReact className="p-[6px] text-[50px]  border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>} tooltipText="ReactJs"/>
                        <IconWithTooltip icon={<SiTailwindcss className="p-[6px] text-[50px]  border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>} tooltipText="TailwindCSS"/>
                        <IconWithTooltip icon={<DiBootstrap className="p-[6px] text-[50px]  border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>} tooltipText="Bootstrap"/>
                      </div>
                  </div>
                  <div className='w-full h-full dark:bg-[#22222299] bg-[#cccccc99] rounded-md border dark:border-[#444] border-[#eee] p-4 flex flex-col justify-between'>
                      <div>
                        <IconWithTooltip icon={<FaDatabase className="w-[50px] h-[50px] p-[6px] text-[100%] text-[#eee] mb-[8px]"/>} tooltipText="Back-End" />
                        <h3 className='bgText bg-gradient-to-b from-[#444] to-[#000030] dark:from-[#fff] dark:to-[#ffffff77] text-lg font-medium'>Back-End</h3>
                      </div>
                      <div className='w-full flex justify-around py-[20px]'>
                        <IconWithTooltip icon={<DiMongodb className="p-[6px] text-[70px]  border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>} tooltipText="MongoDB"/>
                        <IconWithTooltip icon={<SiFirebase className="p-[6px] text-[70px]  border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>} tooltipText="Firebase"/>
                        <IconWithTooltip icon={<SiMysql className="p-[6px] text-[70px]  border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>} tooltipText="MySQL"/>  
                      </div>
                  </div>
                </motion.div>
            ) }
        </AnimatePresence>
    </div>
  );
};