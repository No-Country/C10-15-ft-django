import React from 'react'
import {FaFacebookF, FaLinkedin, FaGoogle, FaRegEnvelope} from 'react-icons/fa'
import {MdLockOutline} from 'react-icons/md'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <div className='flex flex-col items-center justify-center w-full flex-1 px-2 md:px-20 text-center'>
        <div className='flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl w-full'>
          {/*Sign in section*/}
          <div className='w-full md:w-3/5'>
            <div className='text-left font-bold '>
              <span className='text-[#698269]'>World</span> Weather
            </div>
            <div className='py-4 md:py-10'>
              <h2 className='text-3xl font-bond  text-[#698269]'>Sign in to Account</h2>
              <div className='border-2 w-10 border-[#698269] inline-block mb-2'></div>
              <div className='flex justify-center my-2'>
                <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <FaFacebookF className='text-sm'/>
                </a>
                <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <FaLinkedin className='text-sm'/>
                </a>
                <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <FaGoogle className='text-sm'/>
                </a>
              </div> {/* Social login section*/}
              <p className='text-gray-400 my-3'>Or use you email account</p>
              <div className='flex flex-col items-center'>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                  <FaRegEnvelope className='text-gray-400 m-2'/>
                  <input type='email' name='email' placeholder='email' className='bg-gray-100 outline-none text-sm flex-1'/>
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                  <MdLockOutline className='text-gray-400 m-2'/>
                  <input type='password' name='password' placeholder='password' className='bg-gray-100 outline-none text-sm flex-1'/>
                </div>
                <div className='flex justify-between w-64 mb-5'>
                  <label className='flex items-center text-xs'><input type='checkbox' name='remember' 
                  className='mr-1'/>Remember me </label>
                  <a href='#' className='text-xs'>Forgot Password</a>
                </div>
                <a 
              href='#' 
              className='border-2 bg-[#698269] text-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-[#698269] hover:text-white'>Sign in</a>
              </div>
            </div>
          </div>
          {/*Sign up section*/}
          <div className='w-full md:w-2/5 bg-[#698269] text-white rounded-tr-2xl rounded-br-2xl py-6 md:py-36 px-12'>
            <h2 className='font-Poiret text-3xl font-bold mb-2'> Welcome to World Weather !</h2>
            <div className='border-2 w-10 border-white inline-block mb-2'></div>
            <p className='font-Poiret mb-10'> Fill up personal information and Start journey with us.</p>
            <a 
              href='#' 
              className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-[#698269]'>Sign Up</a>
        </div> 
        </div> 
        
      </div>
    </div>
  )
}

export default Login