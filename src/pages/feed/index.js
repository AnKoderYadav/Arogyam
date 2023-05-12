import FeedBox from "@/components/FeedBox";
import TrendingBox from "@/components/TrendingBox";
import dbConnect from "@/dbconnect";
import MainLayout from "@/layouts/MainLayout";
import FeedPosts from "@/models/feedModel";
import Users from "@/models/userModel";
import { getSession } from "next-auth/react";

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
      <div className="bg-lightMode-background justify-center flex dark:bg-darkMode-background overflow-y-scroll scrollbar-hide w-full h-full">
        <div className=" max-w-3xl w-full flex flex-col gap-5 p-5 pt-7">
          <FeedBox user={user} posts={posts} key={1} />
        </div>
        <div className="mt-7 lg:flex md:flex sticky top-5 hidden" id="Trending">
          <TrendingBox key={2} />
        </div>
      </div>
    </MainLayout>
  );
};

export default feed;
