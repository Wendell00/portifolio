import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'
import { FormContextProvider } from './context/FormContext'
import { ThemeProvider } from 'next-themes'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wendell Borges',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FormContextProvider>
          <NavBar/>
          <ThemeProvider>
            <div className='w-screen h-auto pt-[90px]'>
              {children}
            </div>
          </ThemeProvider>
        </FormContextProvider>
        </body>
    </html>
  )
}
