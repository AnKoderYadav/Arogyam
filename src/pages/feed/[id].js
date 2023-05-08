import Post from "@/components/Post";
import MainLayout from "@/layouts/MainLayout";
import React from "react";
import Image from "next/image";
import { getSession } from "next-auth/react";
import dbConnect from "@/dbconnect";
import FeedPosts from "@/models/feedModel";
export async function getServerSideProps({ req, params }) {
  const session = await getSession({ req });
  if (!session?.user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  dbConnect().catch((error) => console.log(error));

  //all posts by current user
  const res = await FeedPosts.findById(params.id).populate("userId");
  // const res = await FeedPosts.findById(params.id).populate({
  //   path: "userId",
  // });

  const post = JSON.parse(JSON.stringify(res));

  return {
    props: { post },
  };
}

const PostPage = ({ post }) => {
  console.log(post);
  return (
    <MainLayout>
      <div className="bg-lightMode-background dark:bg-darkMode-background w-full h-full flex content-center justify-center overflow-scroll scrollbar-hide">
        <div className=" mx-5 flex flex-col md:flex-row lg:flex-row gap-5 w-full content-center justify-center mt-10 " >
          <Post className="w-2/5" pdata={post} />
          {/* Comment Section */}
          <div className="p-5 w-full md:w-[30%] lg:[30%] h-2/3 bg-lightMode-component overflow-scroll scrollbar-hide dark:bg-darkMode-component mt-5 rounded-2xl shadow-sm flex flex-col text-lightMode-txt dark:text-darkMode-txt">
            <h1 className="font-semibold text-md">Comments</h1>
            {post.comments.map((comment) => {
               const elapsedTime = Date.now() - new Date(comment.createdAt).getTime();
               const minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
               const hours = Math.floor((elapsedTime / 1000 / 60 / 60) % 24);
               const days = Math.floor(elapsedTime / 1000 / 60 / 60 / 24);

               let timeString = '';
               if (days > 0) {
                 timeString = `${days} day${days > 1 ? 's' : ''} ago`;
               } else if (hours > 0) {
                 timeString = `${hours} hour${hours > 1 ? 's' : ''} ago`;
               } else {
                 timeString = `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
               }
             

              return (
                <div
                  id="Comment"
                  className=" border-t-[1px] mt-1  border-neutral-800 dark:border-neutral-600 flex space-x-4 p-2 "
                >
                  <img
                    className="rounded-full w-8 h-8 mt-1"
                    src={comment.profile}
                  />
                  <div className="flex flex-grow bg-lightMode-componentHead dark:bg-neutral-800 p-2 px-4 rounded-2xl  flex-col">
                    <p className="font-semibold text-xs">{comment.name} </p>
                    <p className="text-[9px] text-neutral-500">{timeString}</p>
                    <p className="text-xs">{comment.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PostPage;
