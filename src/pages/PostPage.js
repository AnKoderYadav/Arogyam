import Post from '@/components/Post'
import MainLayout from '@/layouts/MainLayout'
import React from 'react'
import Image from 'next/image'

const PostPage = () => {
    return (
        <MainLayout>
            <div className='bg-lightMode-background dark:bg-darkMode-background w-full h-full flex content-center justify-center overflow-scroll scrollbar-hide'>
                <div className='max-w-3xl mx-5'>
                    <Post />
                    {/* Comment Section */}
                    <div className='p-5 bg-lightMode-component dark:bg-darkMode-component mt-5 rounded-2xl shadow-sm flex flex-col text-lightMode-txt dark:text-darkMode-txt'>
                        <h1 className='font-semibold text-xl'>Comments</h1>
                        <div id='Comment' className='border-t-[1px] mt-1 border-neutral-400 dark:border-neutral-700 flex space-x-4 p-4 items-center'>
                            <Image
                                className='rounded-full'
                                src={"/pfp.webp"}
                                width={30}
                                height={30}
                            />
                            <div className='flex flex-grow bg-lightMode-componentHead dark:bg-darkMode-componentHead p-2 px-4 rounded-2xl  flex-col'>
                                <p className='font-semibold'>Arinaymay Bhaskar</p>
                                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, exercitationem!</p>
                            </div>
                        </div>
                        <div id='Comment' className='border-t-[1px] mt-1 border-neutral-400 dark:border-neutral-700 flex space-x-4 p-4 items-center'>
                            <Image
                                className='rounded-full'
                                src={"/pfp.webp"}
                                width={30}
                                height={30}
                            />
                            <div className='flex flex-grow bg-lightMode-componentHead dark:bg-darkMode-componentHead p-2 px-4 rounded-2xl  flex-col'>
                                <p className='font-semibold'>Arinaymay Bhaskar</p>
                                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, exercitationem!</p>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </MainLayout>
    )
}

export default PostPage
