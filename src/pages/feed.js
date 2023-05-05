import FeedBox from "@/components/FeedBox";
import TrendingBox from "@/components/TrendingBox";
import MainLayout from "@/layouts/MainLayout";
import React, { useState } from "react";
import Users from "@/models/userModel";
import dbConnect from "@/dbconnect";
import Posts from "@/models/postModel";
import Consultations from "@/models/consultModel";
import { getSession, useSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import FeedPosts from "@/models/feedModel";

export async function getServerSideProps({ req }) {
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

  //current user
  let res = await Users.findById(session.user.id);
  const user = JSON.parse(JSON.stringify(res));

  //all posts by current user
  res = await FeedPosts.find().populate("userId").sort({
    updatedAt: -1,
  });
  const posts = res.map((doc) => {
    const post = JSON.parse(JSON.stringify(doc));
    return post;
  });

  return {
    props: { user, posts },
  };
}

const feed = ({ user, posts }) => {
  return (
    <MainLayout>
      <div className="w-full flex gap-8 p-5 justify-evenly bg-lightMode-background dark:bg-darkMode-background overflow-y-scroll scrollbar-hide">
        <div className="max-w-4xl w-full h-full">
          <FeedBox user={user} posts={posts} />
        </div>
        <div className="sticky top-0" id="Trending">
          <TrendingBox key={1} />
        </div>
      </div>
    </MainLayout>
  );
};

export default feed;
