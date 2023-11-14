'use client'

import { Damion } from 'next/font/google'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import BodyComponent from '../helpers/getBody'
import DarkMode from './darkMode'
 
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
  const [nav, setNav] = useState(false)
  const [animation, setAnimation] = useState('closed')

  const bodyCo = BodyComponent()

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
      <p className={`${damion.className} text-4xl bold shadow-black cursor-pointer text-black dark:text-white`}>WB</p>
      <ul className='items-center h-full hidden md:flex'>
        <li className={`mr-6 cursor-pointer text-black dark:text-white`}>
            <Link
              href='/'
              aria-label='Wendell Borges | Home Page'>
              Inicio
            </Link>
        </li>
        <li className={`mr-6 cursor-pointer text-black dark:text-white`}>
            <Link
              href='/about'
              aria-label='Wendell Borges | About Page'>
              Sobre
            </Link>
        </li>
        <li className={`mr-6 cursor-pointer text-black dark:text-white`}>
            <Link
              href='/portfolio'
              aria-label='Wendell Borges | Portfolio Page'>
              Portifolio
            </Link>
        </li>
        <li className={`mr-6 cursor-pointer text-black dark:text-white`}>
            <Link
              href='/wendell-curriculo.pdf'
              role='button'
              target='_blank'
              aria-label='Resume download button'>
              Currículo
            </Link>
        </li>
        <li className={`mr-6 cursor-pointer text-black dark:text-white`}>
            <Link
              href='/contact'
              aria-label='Wendell Borges | Contact Page'>
              Contato
            </Link>
        </li>
      </ul>
      <DarkMode mobile={false}/>
      <div className='z-50 mr-3 flex cursor-pointer flex-row items-center justify-center md:hidden'>
        <DarkMode mobile={true}/>
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
            ? `fixed right-0 top-0 z-40 flex h-screen w-full flex-col items-center justify-center bg-[#c1deee] dark:bg-[#000030] duration-500 ease-in-out`
            : `fixed right-[-100%] top-0 z-40 flex h-screen w-full flex-col items-center justify-center bg-[#c1deee] dark:bg-[#000030] duration-500 ease-in-out`
        }>
        <motion.li
          animate={nav ? 'open' : 'closed'}
          variants={firstVariant}
          className='fixed top-20 inline-flex p-4'>
          <Link
            href='/'
            aria-label='Wendell Borges | Home Page'
            onClick={handleNav}>
            <p className={`${damion.className} text-4xl bold shadow-black cursor-pointer text-black dark:text-white`}>WB</p>
          </Link>
        </motion.li>
        <li className='w-full p-4 text-center text-2xl'>
          <motion.div
            animate={nav ? 'open' : 'closed'}
            variants={secondVariant}>
            <Link
              className={`font-light transition duration-150 ease-in-out text white`}
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
              className={`font-light transition duration-150 ease-in-out text white`}
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
              className={`font-light transition duration-150 ease-in-out text white`}
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
              className={`font-light transition duration-150 ease-in-out text white`}
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
              className={`font-light transition duration-150 ease-in-out text white`}
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
