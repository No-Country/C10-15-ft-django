import React from 'react'
import { IconBase } from 'react-icons/lib'
import {TiWeatherCloudy} from 'react-icons/ti'

const Cuerpo = () => {
  return (
    <div className='w-full flex flex-col gap-y-2 p-28 header-wrapper bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      <div className='bg-white dark:bg-grey-900 w-full mt-4  mx-auto'>
        <div className='relative border-2 border-solid border-grey-900 dark:border-grey-200 rounded-xl bg-yellow dark:bg-dark-yellow px-2 py-4 sm:py-4 text-center'>
          <p className='text-grey-900 text-sm font-medium'> Titulo</p>
        </div>
        <div className='w-full flex flex-col md:flex-row gap-y-2 md:gap-y-0 gap-x-2'>
          <div className='bg-slate-400 relative flex flex-col items-center w-full md:w-2/3 md:flex-row bg-yellow dark:bg-yellow-dark border-grey-900 dark:border-0 border-2 rounded-lg overflow-hidden'>
            <div className='flex flex-1'>
              <h2>Clima Actual</h2>
              <TiWeatherCloudy/>
            </div>
          </div>
          <div className='bg-blue dark:bg-blue-300 w-full lg:w-1/3 lg:min-w-550px border-2 border-grey-900 rounded-xl flex flex-col justify-between align-center p-6'>
            <h2 className='sm:s-h3 md:l-h3 w-5/6 text-grey-900 font-medium'> Titulo 2</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cuerpo