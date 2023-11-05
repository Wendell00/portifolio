'use client'

import { Damion } from 'next/font/google'
import { useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { FormContext } from '../context/FormContext'
import BodyComponent from '../helpers/getBody'
 
const damion = Damion({
  weight: '400',
  subsets: ['latin'],
})

import {
  svgPathVariant1,
  svgPathVariant2,
  firstVariant,
  secondVariant,
  thirdVariant,
  fourthVariant,
  fifthVariant,
  sixthVariant,
  seventhVariant,
} from '../constants'

export default function NavBar() {
  const {currentTheme, setTheme} = useContext(FormContext)
  const colorContrast = currentTheme == 'dark' ? 'hover:text-[#000030]' : 'hover:text-[#c1deee]'
  const colorContrastHoverNav = currentTheme == 'dark' ? 'hover:text-[#fff]' : 'hover:text-[#c1deee]'
  const colorContrastUI = currentTheme == 'dark' ? '#c1deee' : '#000030'
  const colorContrastWB = currentTheme == 'dark' ? '#000030' : '#fff'
  const [isOn, setIsOn] = useState(false)
  const [nav, setNav] = useState(false)
  const [animation, setAnimation] = useState('closed')

  const bodyCo = BodyComponent()

  const handleThemeColor = () => {
    currentTheme == 'dark' ? setTheme('light') : setTheme('dark')
    setIsOn(!isOn)
    if (bodyCo instanceof HTMLBodyElement) {
      bodyCo.style.background = `${
        currentTheme == 'dark' ? 'linear-gradient(to bottom, transparent, #000) #000030': 'linear-gradient(to bottom, transparent, #c1c1c1) #c1deee'
      }`
    }
  }

  const handleNav = () => {
    setNav(!nav)
    setAnimation('moving')
    if (bodyCo instanceof HTMLBodyElement) {
      bodyCo.style.overflowY = nav ? 'auto' : 'hidden'
    }
    setTimeout(() => {
      setAnimation(animation === 'closed' ? 'open' : 'closed')
    }, 500)
  }

  return (
    <nav className='w-screen h-[90px] flex justify-between items-center px-[50px] fixed z-40'>
      <p className={`${damion.className} text-4xl bold shadow-black cursor-pointer text-[${colorContrastWB}]`}>WB</p>
      <ul className='items-center h-full hidden md:flex'>
        <li className={`mr-6 cursor-pointer text-white ${colorContrast}`}>
            <Link
              href='/'
              aria-label='Wendell Borges | Home Page'>
              Inicio
            </Link>
        </li>
        <li className={`mr-6 cursor-pointer text-white ${colorContrast}`}>
            <Link
              href='/about'
              aria-label='Wendell Borges | About Page'>
              Sobre
            </Link>
        </li>
        <li className={`mr-6 cursor-pointer text-white ${colorContrast}`}>
            <Link
              href='/portfolio'
              aria-label='Wendell Borges | Portfolio Page'>
              Portifolio
            </Link>
        </li>
        <li className={`mr-6 cursor-pointer text-white ${colorContrast}`}>
            <Link
              href='/wendell-curriculo.pdf'
              role='button'
              target='_blank'
              aria-label='Resume download button'>
              Currículo
            </Link>
        </li>
        <li className={`mr-6 cursor-pointer text-white ${colorContrast}`}>
            <Link
              href='/contact'
              aria-label='Wendell Borges | Contact Page'>
              Contato
            </Link>
        </li>
      </ul>
      <div
        className='icon-toggler-container hidden md:flex'
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
      <div className='z-50 mr-3 flex cursor-pointer flex-row items-center justify-center md:hidden'>
          <div
            className='icon-toggler-container flex mr-5 p-4 relative z-90'
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
        <div onClick={handleNav}>
          <svg
            width='29'
            height='29'
            viewBox='0 0 29 29'>
            <motion.path
              stroke='currentColor'
              animate={animation}
              variants={svgPathVariant1}
            />
            <motion.path
              stroke='currentColor'
              animate={animation}
              variants={svgPathVariant2}
            />
          </svg>
        </div>
      </div>
      <ul
        className={
          nav
            ? `fixed right-0 top-0 z-40 flex h-screen w-full flex-col items-center justify-center bg-[${colorContrastUI}] duration-500 ease-in-out`
            : `fixed right-[-100%] top-0 z-40 flex h-screen w-full flex-col items-center justify-center bg-[${colorContrastUI}] duration-500 ease-in-out`
        }>
        <motion.li
          animate={nav ? 'open' : 'closed'}
          variants={firstVariant}
          className='fixed top-20 inline-flex p-4'>
          <Link
            href='/'
            aria-label='Wendell Borges | Home Page'
            onClick={handleNav}>
            <p className={`${damion.className} text-4xl bold shadow-black cursor-pointer text-[${colorContrastWB}]`}>WB</p>
          </Link>
        </motion.li>
        <li className='w-full p-4 text-center text-2xl'>
          <motion.div
            animate={nav ? 'open' : 'closed'}
            variants={secondVariant}>
            <Link
              className={`font-light transition duration-150 ease-in-out text-[${colorContrastWB}] ${colorContrastHoverNav}`}
              href='/'
              aria-label='Wendell Borges | Home Page'
              onClick={handleNav}>
              Home
            </Link>
          </motion.div>
        </li>
        <li className='w-full p-4 text-center text-2xl'>
          <motion.div
            animate={nav ? 'open' : 'closed'}
            variants={thirdVariant}>
            <Link
              className={`font-light transition duration-150 ease-in-out text-[${colorContrastWB}] ${colorContrastHoverNav}`}
              href='/about'
              aria-label='Wendell Borges | About Page'
              onClick={handleNav}>
              Sobre
            </Link>
          </motion.div>
        </li>
        <li className='w-full p-4 text-center text-2xl'>
          <motion.div
            animate={nav ? 'open' : 'closed'}
            variants={fourthVariant}>
            <Link
              className={`font-light transition duration-150 ease-in-out text-[${colorContrastWB}] ${colorContrastHoverNav}`}
              href='/portfolio'
              aria-label='Wendell Borges | Portfolio Page'
              onClick={handleNav}>
              Portfolio
            </Link>
          </motion.div>
        </li>
        <li className='w-full p-4 text-center text-2xl'>
          <motion.div
            animate={nav ? 'open' : 'closed'}
            variants={fifthVariant}>
            <Link
              className={`font-light transition duration-150 ease-in-out text-[${colorContrastWB}] ${colorContrastHoverNav}`}
              href='/blog'
              onClick={handleNav}
              aria-label='Wendell Borges | Blog Page'>
              Curriculo
            </Link>
          </motion.div>
        </li>
        <li className='w-full p-4 text-center text-2xl'>
          <motion.div
            animate={nav ? 'open' : 'closed'}
            variants={sixthVariant}>
            <Link
              className={`font-light transition duration-150 ease-in-out text-[${colorContrastWB}] ${colorContrastHoverNav}`}
              href='/contact'
              aria-label='Wendell Borges | Contact Page'
              onClick={handleNav}>
              Contato
            </Link>
          </motion.div>
        </li>
        <div className='fixed bottom-20 flex flex-col items-center justify-center p-4'>
          <motion.div
            animate={nav ? 'open' : 'closed'}
            variants={seventhVariant}>
          </motion.div>
        </div>
      </ul>
    </nav>
  )
}