'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import {useEffect, useState} from 'react'


export default function Portfolio(){
  const [scrollPosition, setScrollPosition] = useState(0)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollPosition(latest)
  })

  useEffect(() =>{
  }, [scrollPosition])

  return (
    <>
      <div className="h-[330vh] w-screen">
        <motion.div
          style={{
            width: 200,
            height: 200,
            backgroundColor: `rgb(${scrollPosition}, ${scrollPosition}, ${scrollPosition})`,
            position: 'fixed',
            marginTop: '18rem',
          }}
        >
        </motion.div>
      </div>
    </>
  );
};