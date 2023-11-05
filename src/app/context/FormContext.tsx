'use client'

import { createContext, useState, ReactNode } from 'react'

interface FormContextProviderProps {
  children: ReactNode
}

interface FormContextData {
  currentTheme: string;
  setTheme: (modal: string) => void;
}

export const FormContext = createContext<FormContextData>({} as FormContextData);

export function FormContextProvider({ children }: FormContextProviderProps) {
  const [currentTheme, setTheme] = useState('light')

  return (
    <FormContext.Provider value={{ 
      currentTheme, setTheme}}>
        {children}
    </FormContext.Provider>
  )
}