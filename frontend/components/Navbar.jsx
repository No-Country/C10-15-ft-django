import React, {useContext, useEffect, useState} from 'react'
// sidebar proximamente

// import icons
import {HiSun} from 'react-icons/hi'
// import Link
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='bg-white py-4 shadow-md'>
      <div className='container mx-auto flex items-center justify-between h-full'>
        {/* Logo*/}
        <Link href={'/'}>
          <div>
            <img className='w-[70px]' src='' alt='Logo.webp' />
          </div>
        </Link>
        <div className='cursor-pointer flex relative'>
          Prevision Horaria 
        </div>
        <div className='cursor-pointer flex relative'>
          Presion Diaria
        </div>
        <div className='cursor-pointer flex relative'>
          Mapa 3D
        </div>
        <div className='hidden lg:block lg:max-w-md lg:flex-auto'>
        <button type='button' className='hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700'>
          <svg width='24' height='24' fill='none' aria-hidden='true' className='mr-3 flex-none'>
            <path d='m19 m19 19-3.5-3.5' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path>
            <circle cx='11' cy='11' r='6' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></circle>
          </svg>
            <kbd className='ml-auto text-2xs text-zinc-400 dark:text-zinc-500'>
              <kbd className='font-sans'>Ctrl</kbd>
              <kbd className='font-sans'>k</kbd>
            </kbd>
          </button>
        </div>
        {/* <button type='button' className='hidden w-auto lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700'>
          <svg width='24' height='24' fill='none' aria-hidden='true' className='mr-3 flex-none'>
            <path d='m19 m19 19-3.5-3.5' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path>
            <circle cx='11' cy='11' r='6' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></circle>
          </svg>
          Quick search...
        </button> */}
        {/* cart*/}
        <div className='cursor-pointer flex relative'>
          <HiSun className='text-2xl'/>
        </div>
      </div>
    </header>
  )
}

export default Navbar