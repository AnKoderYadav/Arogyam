import React from 'react'
import Image from 'next/image'
import Post from './Post'
const Feed = () => {
  return (
    <div className='text-sm'>
      <div id="inputBox" className='bg-lightMode-component  my-4 dark:bg-darkMode-component dark:text-darkMode-txt p-2 rounded-2xl shadow-md text-lightMode-txt font-medium mt-0 content-center items-center' >
        <div className=' flex space-x-4 p-4 items-center'>
          <Image
            className='rounded-full'
            src={"/pfp.webp"}
            width={40}
            height={40}
          />
          <form action="" className='flex flex-1 '>
            <input type="text" 
            className='rounded-full h-12 bg-gray-100 dark:bg-neutral-800  flex flex-grow px-5 focus:outline-none '
            placeholder="What's on your Mind?"
            />
          </form>
        </div>
        
        <div className='flex justify-around border-t-[1px] gap-9 border-neutral-300 dark:border-neutral-700 p-2'>
          <button id='inputIcons' className='flex flex-row gap-2 items-center '>
           <img src="/upload.svg" alt="" className=''/>
            Upload Picture
          </button>
        <button 
          id='inputIcons'
          type='submit'
          className='flex flex-row gap-2 items-center '>
            <img src="/Submit.svg" alt="" className=''/>
            Submit
          </button>
        </div>
      </div>
      <div id='Post' className='mb-52'>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}

export default Feed