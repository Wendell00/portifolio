'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import {useEffect, useState} from 'react'
import {Roboto} from 'next/font/google'

const damion = Roboto({
  weight: '500',
  subsets: ['latin'],
})

export default function IndexAbout(){

  const [scrollPosition, setScrollPosition] = useState(0)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollPosition(latest)
  })

  useEffect(() =>{
  }, [scrollPosition])

  return (
    <div className='h-quaseFull w-full fixed'>
        <div className="w-full h-[85%]"></div>
        <div className="w-full h-[15%] text-[10vh]">
            <div className={`${damion.className} title-about w-screen h-full text-[7vw] flex items-center justify-center tracking-[0.08em] color-[#eee] opacity-70`}>WENDELL BORGES</div>
        </div>
    </div>
  );
};