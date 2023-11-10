"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from 'framer-motion'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useContext } from 'react'
import { FormContext } from '../context/FormContext'

const DarkMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOn, setIsOn] = useState(false)
  const [darkBtn, setDarkBtn] = useState(true)
  const {setCurrentTheme} = useContext(FormContext)

  const handleThemeColor = () => {
    setIsOn(!isOn)
    setDarkBtn(!darkBtn)
    if(darkBtn){
        setTheme('light')
    }else{
        setTheme('dark')
    }
    if (typeof theme === "string") {
        setCurrentTheme(theme)
    }
  }

  useEffect(() => {
    setMounted(true);
    setTheme('dark')
  }, []);

  if (!mounted) {
    return null;
  }

  return (
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
            {!darkBtn ? (
            <FaSun className='toggler-icon' />
            ) : (
            <FaMoon className='toggler-icon' />
            )}
        </motion.i>
        </motion.div>
    </div>
    );
};

export default DarkMode;