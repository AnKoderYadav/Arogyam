import TrendingBox from "@/components/TrendingBox";
import MainLayout from "@/layouts/MainLayout";
import RequestBox from "@/components/RequestBox";
import React from "react";
import dbConnect from "@/dbconnect";
import Link from "next/link";
import { getSession } from "next-auth/react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Posts from "@/models/postModel";
import Doctors from "@/models/doctorModel";

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
  let res = await Doctors.findOne({ doctorId: session.user.id }).populate(
    "doctorId"
  );
  const doctor = JSON.parse(JSON.stringify(res));

  //all posts
  res = await Posts.find().populate("patientId").sort({
    updatedAt: -1,
  });
  const posts = res.map((doc) => {
    const post = JSON.parse(JSON.stringify(doc));
    return post;
  });

  return {
    props: { session, doctor, posts },
  };
}

const Home = ({ doctor, posts }) => {
  return (
    <>
      <MainLayout user={doctor.doctorId}>
        <div className="w-full h-full flex justify-center gap-8 md:p-8 bg-lightMode-background dark:bg-darkMode-background text-lightMode-txt dark:text-darkMode-txt overflow-scroll">
          <div
            id="doctorProfileBox"
            className="sticky top-0 h-fit w-[25%] flex flex-col shadow-xl bg-lightMode-component text-lightMode-txt dark:bg-darkMode-component dark:text-darkMode-txt p-2 gap-2 rounded-lg"
          >
            <div className="flex content-center items-center flex-col gap-2 border-b-[1px] border-black dark:border-white p-2">
              <img
                className="w-[12rem] h-[12rem] rounded-full object-cover"
                src={doctor.doctorId.profile}
                alt="pic"
              />
              <span className="text-3xl font-bold ">
                {doctor.doctorId.fullname}
              </span>
            </div>
            <div className="p-4 gap-2 flex justify-center items-center flex-col border-b-[1px] border-black dark:border-white">
              <div className="flex flex-row items-center">
                <div className="font-medium text-xl mr-2">Requests</div>
                <div className="font-medium text-xl text-teal-700">
                  {doctor.requestCount}
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="text-xl font-medium mr-2">Accepted</div>
                <div className="font-medium text-xl text-teal-700">
                  {doctor.consultCount}
                </div>
              </div>
            </div>
            <div className="p-4 pb-1 text-center flex justify-center items-center text-white">
              <Link href="/doctor/consult">
                <button
                  className="w-full h-full font-bold -tracking-tightest leading-tight text-lg bg-lightMode-btn text-lightMode-txt dark:bg-darkMode-btn dark:text-darkMode-txt p-3 rounded-md
                "
                >
                  Manage Consultations
                </button>
              </Link>
            </div>
          </div>
          <div id="requestBox" className="w-[50%] h-full flex flex-col gap-8">
            {posts.map((post) => {
              return <RequestBox key={post._id} post={post} doctor={doctor} />;
            })}
          </div>
          <div className="sticky top-0" id="Trending">
            <TrendingBox />
          </div>
        </div>
      </MainLayout>
      <ToastContainer />
    </>
  );
};

export default Home;
