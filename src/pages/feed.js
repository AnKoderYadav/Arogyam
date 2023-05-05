import React from 'react'
import Navbar from '@/components/Navbar';
import FeedBox from '@/components/FeedBox';
import TrendingBox from "@/components/TrendingBox";
import MainLayout from '@/layouts/MainLayout';

const feed = () => {
  return (
    <MainLayout>
    <div className='bg-lightMode-background dark:bg-darkMode-background overflow-y-scroll scrollbar-hide w-full h-full flex justify-between'>
        <div className="max-w-4xl w-full h-screen m-7 ">
            <FeedBox/>
        </div>
        <div className="m-7 flex sticky top-0" id="Trending">
            <TrendingBox />
          </div>
    </div>
    </MainLayout>
  )
}

export default feed