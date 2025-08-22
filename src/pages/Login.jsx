import React, { useState } from 'react'

const Login = () => {
  const[currentState,setCurrentState]=useState('Sign-up')
  return (
    <form className='flex flex-col items-center w-[90%] sm:max-w96 m-auto mt-14 gap-4 text-gray-800' action="onSubmit">
      <div className='inline-flex gap-2 mb-2 mt-10'>
      <p className='mozilla-headline-<uniquifier> text-3xl'>{currentState}</p>
      <hr className='border-none mt-5 h-[2px] w-8 bg-gray-800'/ >
      </div>
      <input type="text" placeholder='Name' className='border border-gray-300 rounded py-1.5 px-5 w-full  sm:w-1/4' />
      <input type="email" placeholder=' Email' className='border border-gray-300 rounded py-1.5 px-5 w-full  sm:w-1/4' />
      <input type="password" placeholder='Password' className='border border-gray-300 rounded py-1.5 px-5 w-full  sm:w-1/4' />
    </form>
  )
}

export default Login