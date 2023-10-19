'use client'

import Image from 'next/image'
import {Damion} from 'next/font/google'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { FaMoon, FaSun } from 'react-icons/fa'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
 
const damion = Damion({
  weight: '400',
  subsets: ['latin'],
})

export default function NavBar() {

  return (
    <nav className='w-screen h-[90px] flex justify-between items-center px-[50px] fixed z-40'>
          <p className={`${damion.className} text-4xl bold shadow-black`}>WB</p>
          <ul className='flex items-center h-full'>
            <li className='mr-6 cursor-pointer hover:text-[#c1deee]'>Inicio</li>
            <li className='mr-6 cursor-pointer hover:text-[#c1deee]'>Sobre</li>
            <li className='mr-6 cursor-pointer hover:text-[#c1deee]'>Portfolio</li>
            <li className='mr-6 cursor-pointer hover:text-[#c1deee]'>Contato</li>
            <li className='mr-6 cursor-pointer hover:text-[#c1deee]'>Currículo</li>
          </ul>
          <div>
          </div>
    </nav>

  )
}
