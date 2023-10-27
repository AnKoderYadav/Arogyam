import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import dbConnect from "@/dbconnect";
import Doctors from "@/models/doctorModel";
import Consultations from "@/models/consultModel";
import { getSession } from "next-auth/react";
import MainLayout from "@/layouts/MainLayout";
import EmailForm from "@/components/EmailForm";
import getTimeElapsed from "@/components/function/getTimeElapsed";
import {
  FcMediumPriority,
  FcHighPriority,
  FcLowPriority,
} from "react-icons/fc";

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

  dbConnect().catch((error) => res.json({ error: "Connection Failed" }));

  //current user
  let res = await Doctors.findOne({ doctorId: session.user.id }).populate(
    "doctorId"
  );
  const doctor = JSON.parse(JSON.stringify(res));

  res = await Consultations.find({
    doctorRefId: doctor._id,
  })
    .populate({
      path: "postId", // populate blogs
      populate: {
        path: "patientId", // in blogs, populate comments
      },
    })
    .sort({
      updatedAt: -1,
    });

  const consultations = res.map((doc) => {
    const consultation = JSON.parse(JSON.stringify(doc));
    return consultation;
  });

  return {
    props: { session, doctor, consultations },
  };
}

const Consultations = ({ doctor, consultations }) => {
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const [openId, setOpenId] = useState("");
  return (
    <MainLayout>
      <main className="h-full flex overflow-y-scroll scrollbar-thin p-4 bg-lightMode-background dark:bg-darkMode-background text-lightMode-txt dark:text-darkMode-txt justify-center items-start w-full">
        <section className="max-w-7xl min-w-[60%] ">
          <h1 className="m-2 text-2xl tracking-tight font-sans border-b-[1px] border-neutral-400  pb-1 mb-8">
            Your Consultations
          </h1>

          <div className="gap-4 px-2 flex flex-wrap lg:justify-start md:justify-start justify-center">
            {consultations.map((consultation) => {
              const timeElapsed =
                new Date().getTime() - new Date(consultation.postId.createdAt);

              const handleRevoke = async () => {
                await axios.post(
                  `/api/user/doctor/consultation/${consultation._id}`,
                  {
                    doctorId: consultation.doctorRefId,
                    postId: consultation.postId._id,
                  }
                );
                refreshData();
              };

              const handleOpen = () => {
                openId === "" ? setOpenId(consultation._id) : setOpenId("");
              };

              return (
                <>
                  <article className="w-[25rem] h-fit flex justify-between items-center bg-lightMode-component dark:bg-darkMode-component shadow-md flex-col rounded-lg">
                    <div className="w-full h-[21rem] flex flex-col justify-between gap-2">
                      <div className="w-full h-fit flex bg-neutral-300 dark:bg-neutral-800 py-2 rounded-t-lg px-4 content-center items-center">
                        <div className="w-full content-center  items-center flex flex-row">
                          <img
                            className="w-[2rem] h-[2rem] rounded-full"
                            src={consultation.postId.patientId.profile}
                            alt="img"
                          />
                          <div className="flex pl-2 flex-col">
                            <span className="w-full text-md  tracking-tight ">
                              {consultation.postId.patientId.fullname}
                            </span>
                            <span className="text-[9px]">
                              {getTimeElapsed(timeElapsed)} ago
                            </span>
                          </div>
                        </div>
                        {consultation.isAccepted ? (
                          <span className="text-center text-xl font-sans font-semibold w-24 h-8 justify-center items-center rounded-sm  bg-lightMode-btn  dark:bg-darkMode-btn flex flex-row text-white dark:text-neutral-300">
                            PAID
                          </span>
                        ) : (
                          <span className="text-center text-xl font-sans font-semibold w-24 h-8 justify-center items-center rounded-sm bg-red-400 dark:bg-red-900 flex flex-row text-white dark:text-neutral-300">
                            {consultation.fee}
                          </span>
                        )}
                      </div>
                      <div className="w-full h-[17rem] flex flex-col justify-evenly items-center gap-2">
                        <p className="w-full h-2/5 px-5 flex flex-col gap-2 text-justify text-sm overflow-auto">
                          {consultation.postId.severity === "Low" ? (
                            <span className="text-sm  flex flex-row pr-5 w-full justify-center">
                              <span className="mr-2 font-semibold">
                                Severity -{" "}
                              </span>
                              <FcLowPriority className="md:text-xl mr-2" />
                              <span className="uppercase text-sm">low</span>
                            </span>
                          ) : consultation.postId.severity === "Medium" ? (
                            <span className="text-sm flex flex-row pr-5 w-full justify-center">
                              <span className="font-semibold mr-2">
                                Severity -{" "}
                              </span>
                              <FcMediumPriority className="md:text-xl mr-2" />
                              <span className="uppercase text-sm">Medium</span>
                            </span>
                          ) : (
                            <span className="text-sm flex flex-row pr-5 w-full justify-center">
                              <span className="font-semibold mr-2">
                                Severity -{" "}
                              </span>
                              <FcHighPriority className="md:text-xl mr-2" />
                              <span className="uppercase text-sm">High</span>
                            </span>
                          )}{" "}
                          {consultation.postId.description}
                        </p>
                        <div className="h-3/5 w-full flex justify-center">
                          <img
                            className="object-contain h-full"
                            src={consultation.postId.image}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="h-fit flex justify-center w-full rounded-b-lg">
                      <div className="w-fit text-xl flex justify-center items-center cursor-pointer">
                        <span className="text-md w-full flex flex-row justify-evenly font-bold tracking-tight leading-tight p-2">
                          {consultation.isAccepted ? (
                            <div className="bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-500 flex hover:text-white text-neutral-800 dark:text-neutral-200 px-2 py-2 rounded-sm">
                              <span className="material-symbols-outlined">
                                mail
                              </span>
                              <p
                                className="ml-2 text-base font-normal"
                                onClick={handleOpen}
                              >
                                Send Mail
                              </p>
                            </div>
                          ) : (
                            <div className="bg-neutral-300 dark:bg-neutral-700 flex text-neutral-800 hover:bg-red-500/50 hover:border-0 dark:text-neutral-200 px-2 py-2 rounded-sm">
                              <span className="material-symbols-outlined">
                                do_not_disturb_on
                              </span>
                              <p
                                className="ml-2 text-base font-normal"
                                onClick={handleRevoke}
                              >
                                Revoke consultation
                              </p>
                            </div>
                          )}
                        </span>
                      </div>
                    </div>
                    {openId === consultation._id && (
                      <EmailForm
                        doctor={doctor}
                        consultation={consultation}
                        key={1}
                      />
                    )}
                  </article>
                </>
              );
            })}
          </div>
        </section>
      </main>
    </MainLayout>
  );
};

export default Consultations;
