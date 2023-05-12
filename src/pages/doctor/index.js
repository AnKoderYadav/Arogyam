import TrendingBox from "@/components/TrendingBox";
import MainLayout from "@/layouts/MainLayout";
import RequestBox from "@/components/RequestBox";
import React, { useState } from "react";
import dbConnect from "@/dbconnect";
import Link from "next/link";
import { getSession } from "next-auth/react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Posts from "@/models/postModel";
import Doctors from "@/models/doctorModel";
import Consultations from "@/models/consultModel";

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
  res = await Posts.find({ solved: false }).populate("patientId").sort({
    updatedAt: -1,
  });
  const posts = res.map((doc) => {
    const post = JSON.parse(JSON.stringify(doc));
    return post;
  });

  res = await Consultations.find({ doctorRefId: doctor._id });

  const consultations = res.map((doc) => {
    const consultation = JSON.parse(JSON.stringify(doc));
    return consultation;
  });

  return {
    props: { doctor, posts, consultations },
  };
}

const Home = ({ doctor, posts, consultations }) => {
  console.log(consultations);
  const consultCount = consultations.filter(
    (consultation) => consultation.isAccepted === true
  ).length;
  const requestCount = consultations.filter(
    (consultation) => consultation.isAccepted === false
  ).length;
  console.log(consultCount, requestCount);

  return (
    <>
      <MainLayout>
        <div className="w-full h-full flex justify-center gap-8 md:p-8 bg-lightMode-background dark:bg-darkMode-background text-lightMode-txt dark:text-darkMode-txt overflow-scroll">
          <div
            id="doctorProfileBox"
            className="sticky top-0 h-fit w-[15%] justify-center flex flex-col shadow-xl bg-lightMode-component text-lightMode-txt dark:bg-darkMode-component  dark:text-darkMode-txt py-6 rounded-lg"
          >
            <div className="flex content-center justify-center items-center flex-col gap-2 mb-2">
              <img
                className="w-44 h-44 rounded-full border-[1px] m-2 border-cyan-600 dark:border-neutral-600 object-cover"
                src={doctor.doctorId.profile}
                alt="pic"
              />
              <span className="text-lg font-medium ">
                {doctor.doctorId.fullname}
              </span>
            </div>
            <div className="py-2 gap-2 w-[70%] mx-9 flex  items-center flex-col border-y-[1px] border-black dark:border-white">
              <div className="flex flex-row items-center w-full justify-between">
                <p className="text-md mr-2">Offered</p>
                <div className="text-md bg-cyan-500 dark:bg-cyan-800  rounded-xl w-8 h-8 flex items-center justify-center text-white">{requestCount}</div>
              </div>
              <div className="flex flex-row items-center w-full justify-between">
                <p className="text-md mr-2">Accepted</p>
                <div className="text-md bg-cyan-500 dark:bg-cyan-800 rounded-xl w-8 h-8 flex justify-center items-center text-white">{consultCount}</div>
              </div>
            </div>
            <div className="py-4 pb-1 text-center flex justify-center items-center text-white">
              <Link href="/doctor/consult">
                <button className="font-bold -tracking-tightest leading-tight text-xs p-2 bg-lightMode-btn text-white dark:bg-cyan-900 dark:text-darkMode-txt rounded-md  ">
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
