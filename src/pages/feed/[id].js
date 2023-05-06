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
  
  return (
    <MainLayout>
      <div className="bg-lightMode-background dark:bg-darkMode-background w-full h-full flex content-center justify-center overflow-scroll scrollbar-hide">
        <div className="max-w-3xl mx-5">
          <Post pdata={post} />
          {/* Comment Section */}
          <div className="p-5 bg-lightMode-component dark:bg-darkMode-component mt-5 rounded-2xl shadow-sm flex flex-col text-lightMode-txt dark:text-darkMode-txt">
            <h1 className="font-semibold text-xl">Comments</h1>
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
                  className="border-t-[1px] mt-1 border-neutral-400 dark:border-neutral-700 flex space-x-4 p-4 items-center"
                >
                  <Image
                    className="rounded-full"
                    src={comment.profile}
                    width={30}
                    height={30}
                  />
                  <div className="flex flex-grow bg-lightMode-componentHead dark:bg-darkMode-componentHead p-2 px-4 rounded-2xl  flex-col">
                    <p className="font-semibold">{comment.name} </p>
                    <p>{timeString}</p>
                    <p className="text-sm">{comment.content}</p>
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
