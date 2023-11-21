'use client'

import {motion} from 'framer-motion';
import CardTilt from './cardAbout'
import { FaCode, FaBook, FaPhoenixFramework, FaScrewdriver, FaEdge, FaDatabase } from 'react-icons/fa';
import { DiJavascript1, DiPython, DiBootstrap, DiReact, DiGit, DiMongodb} from 'react-icons/di';
import { CgCPlusPlus } from "react-icons/cg";
import IconWithTooltip from './iconWithToolTip';
import { SiTailwindcss, SiNextdotjs, SiFirebase, SiVisualstudiocode, SiVercel, SiAdobeillustrator, SiAdobephotoshop, SiGimp, SiMysql } from "react-icons/si"

export default function Skills(){

  return (
    <div className="w-full h-full grid grid-rows-2 grid-cols-3 items-center p-[80px] justify-center gap-4 dark:bg-gradientRadialDark bg-gradientRadialLight">
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 30 }}>
        <CardTilt>
            <div>
                <IconWithTooltip icon={<FaCode className="w-[50px] h-[50px] p-[6px] text-[100%] text-[#eee] mb-[8px]"/>} tooltipText="Linguagens" />
                <h3 className='bgText bg-gradient-to-b from-[#444] to-[#000030] dark:from-[#fff] dark:to-[#ffffff77] text-lg font-medium'>Linguagens</h3>
            </div>
            <div className='w-full flex justify-around py-[20px]'>
                <IconWithTooltip icon={<DiJavascript1 className="p-[6px] text-[60px]  border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>} tooltipText="Javascript"/>
                <IconWithTooltip icon={<CgCPlusPlus className="p-[6px] text-[60px]  border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>} tooltipText="C++"/>
                <IconWithTooltip icon={<DiPython className="p-[6px] text-[60px]  border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>} tooltipText="Python"/>
            </div>
        </CardTilt>
        </motion.div>
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 30 }}>
            <CardTilt>
                <div>
                <IconWithTooltip icon={<FaBook className="w-[50px] h-[50px] p-[6px] text-[100%] text-[#eee] mb-[8px]"/>} tooltipText="Bibliotecas" />
                <h3 className='bgText bg-gradient-to-b from-[#444] to-[#000030] dark:from-[#fff] dark:to-[#ffffff77] text-lg font-medium'>Bibliotecas</h3>
                </div>
                <div className='w-full flex justify-around py-[20px]'>
                <IconWithTooltip icon={<DiReact className="p-[6px] text-[60px]  border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>} tooltipText="ReactJs"/>
                <IconWithTooltip icon={<SiTailwindcss className="p-[6px] text-[60px]  border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>} tooltipText="TailwindCSS"/>
                <IconWithTooltip icon={<DiBootstrap className="p-[6px] text-[60px]  border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>} tooltipText="Bootstrap"/>
                </div>
            </CardTilt>
        </motion.div>
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 30 }}>
        <CardTilt>
            <div>
                <IconWithTooltip icon={<FaPhoenixFramework className="w-[50px] h-[50px] p-[6px] text-[100%] text-[#eee] mb-[8px]"/>} tooltipText="Frameworks" />
                <h3 className='bgText bg-gradient-to-b from-[#444] to-[#000030] dark:from-[#fff] dark:to-[#ffffff77] text-lg font-medium'>Frameworks</h3>
            </div>
            <div className='w-full flex justify-around py-[20px]'>
                <IconWithTooltip icon={<SiNextdotjs className="p-[6px] text-[60px]  border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>} tooltipText="NextJs"/>
            </div>
        </CardTilt>
        </motion.div>
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 30 }}>
        <CardTilt>
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
        </CardTilt>
        </motion.div>
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 30 }}>
            <CardTilt>
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
            </CardTilt>
        </motion.div>
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 30 }}>
            <CardTilt>
                <div>
                <IconWithTooltip icon={<FaDatabase className="w-[50px] h-[50px] p-[6px] text-[100%] text-[#eee] mb-[8px]"/>} tooltipText="Back-End" />
                <h3 className='bgText bg-gradient-to-b from-[#444] to-[#000030] dark:from-[#fff] dark:to-[#ffffff77] text-lg font-medium'>Back-End</h3>
                </div>
                <div className='w-full flex justify-around py-[20px]'>
                <IconWithTooltip icon={<DiMongodb className="p-[6px] text-[60px]  border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>} tooltipText="MongoDB"/>
                <IconWithTooltip icon={<SiFirebase className="p-[6px] text-[60px]  border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>} tooltipText="Firebase"/>
                <IconWithTooltip icon={<SiMysql className="p-[6px] text-[60px]  border-b dark:border-[#888] border-[#fff] text-[#fff] dark:text-[#888]"/>} tooltipText="MySQL"/>  
                </div>
            </CardTilt>
        </motion.div>
    </div>
  );
};