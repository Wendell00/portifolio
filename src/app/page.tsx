'use client'

import NavBar from '../components/NavBar'
import { FormContextProvider } from '../context/FormContext'
import IndexPage from '../pages/indexPage'

export default function Home() {
  return (
    <FormContextProvider>
      <NavBar/>
      <IndexPage/>
    </FormContextProvider>
  )
}
