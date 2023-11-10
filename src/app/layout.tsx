import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'
import { FormContextProvider } from './context/FormContext'
import Providers from "./components/providers";
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
              <Providers>
                <div className="w-screen min-h-screen h-auto bg-gradient-to-b dark:from-[#000030] dark:to-[#000000] from-[#c1deee] to-[#c1c1c1]">
                  <NavBar/>
                    <div className='w-screen h-auto pt-[90px]'>
                      {children}
                    </div>
                </div>
              </Providers>
            </FormContextProvider>
      </body>
    </html>
  )
}
