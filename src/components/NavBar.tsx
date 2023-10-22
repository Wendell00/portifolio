'use client'

import Image from 'next/image'
import {Damion} from 'next/font/google'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FaMoon, FaSun } from 'react-icons/fa'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import { FormContext } from '../context/FormContext'
 
const damion = Damion({
  weight: '400',
  subsets: ['latin'],
})

export default function NavBar() {
  const {currentTheme, setTheme} = useContext(FormContext)
  const colorContrast = currentTheme == 'dark' ? '#000' : '#c1deee'
  const [isOn, setIsOn] = useState(false)

  const element = document.querySelector('body') as HTMLBodyElement

  const handleThemeColor = () => {
    currentTheme == 'dark' ? setTheme('light') : setTheme('dark')
    setIsOn(!isOn)
    element.style.background = `${
      currentTheme == 'dark' ? 'linear-gradient(to bottom, transparent, #000) #000030': 'linear-gradient(to bottom, transparent, #c1c1c1) #c1deee'
    }`
  }


  // useEffect(() => {
  //   if (router.pathname === '/') {
  //     const bodyElement: HTMLBodyElement | null = document.querySelector('body');
  //     if (bodyElement) {
  //       bodyElement.style.overflowY = 'hidden';
  //     }
  //   } else {
  //     const bodyElement: HTMLBodyElement | null = document.querySelector('body');
  //     if (bodyElement) {
  //       bodyElement.style.overflowY = 'auto';
  //     }
  //   }
  // }, [router.pathname]);

  return (
    <nav className='w-screen h-[90px] flex justify-between items-center px-[50px] fixed z-40'>
          <p className={`${damion.className} text-4xl bold shadow-black cursor-pointer`}>WB</p>
          <ul className='flex items-center h-full'>
            <li className={`mr-6 cursor-pointer hover:text-[${colorContrast}]`}>Inicio</li>
            <li className={`mr-6 cursor-pointer hover:text-[${colorContrast}]`}>Sobre</li>
            <li className={`mr-6 cursor-pointer hover:text-[${colorContrast}]`}>Portfolio</li>
            <li className={`mr-6 cursor-pointer hover:text-[${colorContrast}]`}>Contato</li>
            <li className={`mr-6 cursor-pointer hover:text-[${colorContrast}]`}>Currículo</li>
          </ul>
          <div
                className='icon-toggler-container'
                data-darkmode={isOn}
                onClick={handleThemeColor}
                style={{ justifyContent: isOn ? 'flex-end' : 'flex-start' }}>
                <motion.div
                  layout
                  className='handle'>
                  <motion.i
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 30, opacity: 0 }}
                    transition={{ duration: 0.2 }}>
                    {currentTheme === 'dark' ? (
                      <FaSun className='toggler-icon' />
                    ) : (
                      <FaMoon className='toggler-icon' />
                    )}
                  </motion.i>
                </motion.div>
              </div>
    </nav>

  )
}
