'use client'

import Image from 'next/image'
import {Background} from '../components/Background'
import NavBar from '../components/NavBar'
import Avatar from '../components/Avatar'
import {Damion} from 'next/font/google'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'
import { FormContextProvider } from '../context/FormContext'
import { useContext} from 'react'
import { FormContext } from '../context/FormContext'
 
const damion = Damion({
  weight: '400',
  subsets: ['latin'],
})


export default function Home() {
  return (
    <FormContextProvider>
      <NavBar/>
      <main className='w-screen h-screen'>
      <div className='absolute top-0 z-30 flex h-full w-full flex-row items-center justify-center bg-transparent px-6 py-12 text-center md:px-12 lg:text-left'>
          <div className='container mx-auto xl:px-32'>
            <div className='grid items-center gap-12 lg:grid-cols-2'>
              <Avatar
                className='relative flex-col items-center justify-center lg:hidden'
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 30, delay: 0.5 }}
              />
              <div className='mt-12 lg:mt-0'>
                <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 30 }}>
                  <h1 className='mb-12 text-white text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-5xl xl:text-6xl'>
                    Wendell Borges
                    <br />Desenvolvedor de
                    <span className='text-[#c1deee] transition duration-150 ease-in-out'>
                      <TypeAnimation
                        sequence={[
                          'sites',
                          2000,
                          'aplicações',
                          2000,
                          'ferramentas',
                          2000,
                        ]}
                        wrapper='span'
                        cursor={false}
                        repeat={Infinity}
                        className='ml-3 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl'
                      />
                    </span>
                  </h1>
                </motion.div>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 30, delay: 0.5 }}>
                  <Link
                    className='mr-2 rounded-xl bg-[#c1deee] px-7 py-3.5 text-sm font-medium uppercase leading-snug text-[#000030] shadow-xl transition duration-150 ease-in-out hover:border-[#000030] hover:bg-[#000030] hover:text-zinc-50 hover:shadow-2xl focus:border-[#000030] focus:bg-[#000030] focus:text-zinc-50 focus:shadow-2xl focus:outline-none focus:ring-0 active:bg-[#000030] active:shadow-2xl'
                    href='/wendell-curriculo.pdf'
                    role='button'
                    target='_blank'
                    aria-label='Resume download button'
                    rel='noopener noreferrer'>
                    CURRÍCULO
                  </Link>
                  <Link
                    className='mr-2 rounded-xl bg-[#000030] px-7 py-3.5 text-sm font-medium uppercase leading-snug text-zinc-50 shadow-xl transition duration-150 ease-in-out hover:border-[#c1deee] hover:bg-[#c1deee] hover:text-[#000030] hover:shadow-2xl focus:border-[#c1deee] focus:bg-[#c1deee] focus:text-zinc-50 focus:shadow-2xl focus:outline-none focus:ring-0 active:bg-[#c1deee] active:shadow-2xl'
                    href='/portfolio'
                    role='button'
                    aria-label='Portfolio link button'>
                    PORTFOLIO
                  </Link>
                </motion.div>
              </div>
              <Avatar
                className='relative mb-0 hidden flex-col items-center justify-center lg:flex'
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 30, delay: 1 }}
              />
            </div>
          </div>
        </div>
      </main>
      <Background/>
    </FormContextProvider>

  )
}
