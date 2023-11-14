'use client'

import { motion } from 'framer-motion';
import {useEffect, useState} from 'react'

export default function Portfolio(){
  const [scrollY, setScrollY] = useState(0);

  const handleClick = () => {
    setScrollY(window.scrollY)
  }

  return (
    <>
      <div className="h-[330vh] w-screen" onClick={handleClick}>
        <motion.div
          style={{
            width: 200,
            height: 200,
            backgroundColor: `rgb(${scrollY}, ${scrollY}, ${scrollY})`,
            position: 'fixed',
            marginTop: '18rem',
          }}
        >
        </motion.div>
      </div>
    </>
  );
};