import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import MainRouters from './pages'

function App() {
  return (
    <>
      <div className='w-full max-w-[1600px] mx-auto min-h-screen flex flex-col'>
        <Navbar />
        <MainRouters />
        <Footer />
      </div>
    </>
  )
}


export default App
