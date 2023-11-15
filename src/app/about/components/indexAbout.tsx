'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import {useEffect, useState} from 'react'
import {Roboto} from 'next/font/google'
import ContentAbout from './contentAbout'

const damion = Roboto({
  weight: '700',
  subsets: ['latin'],
})

export default function IndexAbout(){

  const [scrollPosition, setScrollPosition] = useState(0)
  const { scrollYProgress } = useScroll()

  const handleScroll = () => {
    setScrollPosition(window.scrollY / window.innerHeight);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY / window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pegarNumero = (valor: number): number | string => {
    const medida1 = 1 - valor
    const medida = 1 - medida1
    if(medida <= scrollYProgress.get()){
      return 0
    }else if(medida >= scrollYProgress.get()){
      return `100vh`
    }
    else return 0
  }

  return (
    <div className='h-quaseFull w-full fixed'>
        <div className="w-full h-[85%] box-border">
          <ContentAbout/>
        </div>
        <div className="w-full h-[15%] text-[10vh]">
            <div className={`${damion.className} title-about w-screen h-full text-[7vw] flex items-center justify-center tracking-[0.2em] color-[#eee] opacity-60`}>
            <motion.h1
            animate={{translateY: pegarNumero(0)}}
            transition={{
              type: 'spring',
              damping: 8,
              mass: .3,
              stiffness: 100,
            }}
            >
              W
            </motion.h1>
            <motion.h1
              animate={{translateY: pegarNumero(0.0714)}}
              transition={{
                type: 'spring',
                damping: 8,
                mass: .3,
                stiffness: 100,
              }}
            >
              E
             </motion.h1>
             <motion.h1
              animate={{translateY: pegarNumero(0.0714 * 2)}}
              transition={{
                type: 'spring',
                damping: 8,
                mass: .3,
                stiffness: 100,
              }}
            >
              N
             </motion.h1>
             <motion.h1
              animate={{translateY: pegarNumero(0.0714 * 3)}}
              transition={{
                type: 'spring',
                damping: 8,
                mass: .3,
                stiffness: 100,
              }}
            >
              D
             </motion.h1>
             <motion.h1
              animate={{translateY: pegarNumero(0.0714 * 4)}}
              transition={{
                type: 'spring',
                damping: 8,
                mass: .3,
                stiffness: 100,
              }}
            >
              E
             </motion.h1>
             <motion.h1
              animate={{translateY: pegarNumero(0.0714 * 5)}}
              transition={{
                type: 'spring',
                damping: 8,
                mass: .3,
                stiffness: 100,
              }}
            >
              L
             </motion.h1>
             <motion.h1
              animate={{translateY: pegarNumero(0.0714 * 6)}}
              transition={{
                type: 'spring',
                damping: 8,
                mass: .3,
                stiffness: 100,
              }}
            >
              L
             </motion.h1>
             <motion.h1
              animate={{translateY: pegarNumero(0.0714 * 7)}}
              transition={{
                type: 'spring',
                damping: 8,
                mass: .3,
                stiffness: 100,
              }}
            >
              &nbsp;
             </motion.h1>
             <motion.h1
              animate={{translateY: pegarNumero(0.0714 * 8)}}
              transition={{
                type: 'spring',
                damping: 8,
                mass: .3,
                stiffness: 100,
              }}
            >
              B
             </motion.h1>
             <motion.h1
              animate={{translateY: pegarNumero(0.0714 * 9)}}
              transition={{
                type: 'spring',
                damping: 8,
                mass: .3,
                stiffness: 100,
              }}
            >
              O
             </motion.h1>
             <motion.h1
              animate={{translateY: pegarNumero(0.0714 * 10)}}
              transition={{
                type: 'spring',
                damping: 8,
                mass: .3,
                stiffness: 100,
              }}
            >
              R
             </motion.h1>
             <motion.h1
              animate={{translateY: pegarNumero(0.0714 * 11)}}
              transition={{
                type: 'spring',
                damping: 8,
                mass: .3,
                stiffness: 100,
              }}
            >
              G
             </motion.h1>
             <motion.h1
              animate={{translateY: pegarNumero(0.0714 * 12)}}
              transition={{
                type: 'spring',
                damping: 8,
                mass: .3,
                stiffness: 100,
              }}
            >
              E
             </motion.h1>
             <motion.h1
              animate={{translateY: pegarNumero(0.0714 * 13)}}
              transition={{
                type: 'spring',
                damping: 8,
                mass: .3,
                stiffness: 100,
              }}
            >
              S
             </motion.h1>
            </div>
        </div>
    </div>
  );
};