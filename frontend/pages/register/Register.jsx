import React from 'react'
import {FaFacebookF, FaLinkedin, FaGoogle, FaRegEnvelope} from 'react-icons/fa'

function Register() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <div className='flex flex-col items-center justify-center w-full flex-1 px-6 md:px-20 lg:px-80 text-center'>
        <div className='flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl w-full '>
          {/*Sign in section*/}
          <div className='w-full md:w-3/5'>
            <div className='text-left font-bold'>
              <div className='mt-2 flex flex-row justify-center'>
                <img src='AcaElLogo.png' alt='Logo.webp' className='h-[70px] w-[70px]'/>
              </div>
            </div>
            <div className='py-0'>
              <div className='flex-1 flex flex-col items-center py-12 px-4 sm:px-2 lg:flex-none lg:px-20 xl:px-24'>
                <div className='mx auto w-full max-w-sm lg:max-w-lg lg:w-[100rem]'>
                  <div className='text-center'>
                    <h2 className='text-3xl font-Poiret font-bold mb-3'>Create Account</h2>
                    <p className='font-Poiret'>Create a google, facebook or Linkedin account</p>
                    <div className=' mt-4 flex justify-center my-2'>
                      <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-3'>
                        <FaFacebookF className='text-sm'/>
                      </a>
                      <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-3'>
                        <FaLinkedin className='text-sm'/>
                      </a>
                      <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-3'>
                        <FaGoogle className='text-sm'/>
                      </a>
                    </div> {/* Social login section*/}
                  </div>
                  <div className='mt-6'>
                    <form className='space-y-1'>
                      <div className=' px-8 grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-3 lg:px-16'>
                        <div>
                          <label 
                          className='font-roboto block text-sm font-medium text-gray-700'>
                            Name
                          </label>
                          <input 
                          type='text' 
                          className='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-900 leading-tight focus:outline-none focus:shadow-outline' 
                          placeholder='Enter your name'/>
                        </div>
                        <div>
                          <label 
                          for='Last name' 
                          className='font-roboto block text-sm font-medium text-gray-700'>
                            Last name
                          </label>
                          <input 
                          type='text' 
                          className='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline' 
                          placeholder='Enter your last name'></input>
                        </div>
                        <div>
                          <label 
                          for='Email' 
                          className='font-roboto block text-sm font-medium text-gray-700'>
                            Email
                          </label>
                          <input 
                          type='email' 
                          className='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline' 
                          placeholder='email@example.com'/>
                        </div>
                        <div>
                          <label 
                          for='password' 
                          className='font-roboto block text-sm font-medium text-gray-700'>
                            Password
                          </label>
                          <input 
                          type='password' 
                          className='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-sky-700 leading-tight focus:outline-none focus:shadow-outline' 
                          placeholder='password'></input>
                        </div>
                      </div>
                    </form>
                    <a 
                    href='#' 
                    className='border-2 bg-[#698269] text-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-[#698269] hover:text-white mt-10'>Sign up</a>
                  </div>
                </div>
              </div>                
            </div>
          </div>
          {/*Sign up section*/}
          <div className='w-full md:w-2/5 bg-[#698269] text-white rounded-tr-2xl rounded-br-2xl py-6 md:py-36 px-12'>
            <h2 className='font-Poiret text-3xl font-bold mb-2'> Do you already have an account?</h2>
            <div className='border-2 w-10 border-white inline-block mb-2'></div>
            <p className='font-Poiret mb-10'> Login with your account and manage your profile.</p>
            <a 
              href='#' 
              className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-[#698269]'>Sign in</a>
        </div> 
        </div> 
        
      </div>
    </div>
  );
}

export default Register