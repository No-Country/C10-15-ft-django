import React from 'react'
import Head from 'next/head'
import Cuerpo from '@/components/Body'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Weather App</title>
      </Head>
      <main className='h-full'>
        <div>
          <Navbar/>
          <Cuerpo/>
          <Footer/>
        </div>
      </main>
    </>
  )
}



