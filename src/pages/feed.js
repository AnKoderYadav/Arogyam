import React from 'react'
import Navbar from '@/components/Navbar';
import FeedBox from '@/components/FeedBox';
import TrendingBox from "@/components/TrendingBox";

const feed = () => {
  return (
    <div className='bg-lightMode-background dark:bg-darkMode-background overflow-y-scroll scrollbar-hide'>
        <div className="sticky top-0"><Navbar/></div>
        <div className='flex gap-3 justify-between'>
        <div className="max-w-4xl w-full h-screen m-7 ">
            <FeedBox/>
        </div>
        <div className="m-7 " id="Trending">
            <TrendingBox />
          </div>
        </div>

    </div>
  )
}

export default feed