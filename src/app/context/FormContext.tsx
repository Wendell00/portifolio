'use client'

import { createContext, useState, ReactNode } from 'react'
import { useTheme } from "next-themes";

interface FormContextProviderProps {
  children: ReactNode
}

interface FormContextData {
  currentTheme: string;
  setCurrentTheme: (modal: string) => void;
}

export const FormContext = createContext<FormContextData>({} as FormContextData);

export function FormContextProvider({ children }: FormContextProviderProps) {
  const [currentTheme, setCurrentTheme] = useState('light')

  return (
    <FormContext.Provider value={{ 
      currentTheme, setCurrentTheme}}>
        {children}
    </FormContext.Provider>
  )
}