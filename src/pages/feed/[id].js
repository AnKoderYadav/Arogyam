import Post from "@/components/Post";
import MainLayout from "@/layouts/MainLayout";
import React from "react";
import Image from "next/image";
import { getSession } from "next-auth/react";
import dbConnect from "@/dbconnect";
import FeedPosts from "@/models/feedModel";
import getTimeElapsed from "@/components/function/getTimeElapsed";

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
      <div className=" bg-lightMode-background justify-center flex dark:bg-darkMode-background md:flex-row lg:flex-row overflow-scroll scrollbar-hide w-full h-full flex-col">
        <div className="max-w-2xl w-full flex flex-col p-4 md:p-0 lg:p-0">
          <Post pdata={post} />
        </div>
        <div className="p-5 w-full md:w-[30%] lg:[30%] h-2/3 bg-lightMode-component overflow-scroll scrollbar-hide dark:bg-darkMode-component mt-5 rounded-lg shadow-sm flex flex-col text-lightMode-txt dark:text-darkMode-txt mx-5 ">
          <h1 className="font-semibold text-md mx-8 md:mx-0 lg:mx-0">
            Comments
          </h1>
          {post.comments.map((comment) => {
            const timeElapsed = new Date().getTime() - new Date(post.createdAt);
            return (
              <div
                id="Comment"
                className=" border-t-[1px] mt-1  border-neutral-300 dark:border-neutral-600 flex space-x-4 p-2 "
              >
                <img
                  className="rounded-full w-8 h-8 mt-1"
                  src={comment.profile}
                />
                <div className="flex flex-grow bg-lightMode-componentHead dark:bg-neutral-800 p-2 px-4 rounded-2xl  flex-col">
                  <p className="font-semibold text-xs">{comment.name} </p>
                  <p className="text-[9px] text-neutral-500">
                    {getTimeElapsed(timeElapsed)} ago
                  </p>
                  <p className="text-xs">{comment.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
};

export default PostPage;
