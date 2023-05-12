import React, { useState } from "react";
import axios from "axios";
import { FcCancel, FcNext } from "react-icons/fc";
import { getSession } from "next-auth/react";
import MainLayout from "@/layouts/MainLayout";
import { useRouter } from "next/router";
import dbConnect from "@/dbconnect";
import Doctors from "@/models/doctorModel";
import Consultations from "@/models/consultModel";
import EmailBox from "@/components/EmailBox";

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

const Consult = ({ doctor, consultations }) => {
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const [openId, setOpenId] = useState("");
  return (
    <MainLayout>
      <div className="h-full flex overflow-y-scroll scrollbar-thin p-4  bg-lightMode-background dark:bg-darkMode-background text-lightMode-txt dark:text-darkMode-txt justify-center items-start w-full">
        <div className="max-w-7xl min-w-[60%] ">
          <h1 className="m-2 text-2xl tracking-tight font-sans border-b-[1px] border-neutral-400 pb-1 mb-8">Your Consultations</h1>
          <div className="gap-4 px-2 flex flex-wrap lg:justify-start md:justify-start justify-center">

            {consultations.map((consultation) => {
              const handleRevoke = async () => {
                await axios.delete(
                  `/api/user/doctor/consultation/${consultation._id}`
                );
                refreshData();
              };

              const handleOpen = () => {
                openId === "" ? setOpenId(consultation._id) : setOpenId("");
              };

              return (
                <>
                  <div className="w-[25rem] h-fit flex justify-center items-center bg-lightMode-component dark:bg-darkMode-component shadow-md flex-col rounded-lg">
                    <div className="w-full flex flex-col pt-0 gap-2">
                      <div className="w-full flex bg-neutral-300 dark:bg-neutral-800 py-2 rounded-t-lg px-4 content-center items-center">
                        <div className="w-full content-center  items-center flex flex-row">
                          <img
                            className="w-[2rem] h-[2rem] rounded-full "
                            src={consultation.postId.patientId.profile}
                            alt="img"
                          />
                          <div className="flex pl-2 flex-col">
                            <span className="w-full text-md  tracking-tight ">
                              {consultation.postId.patientId.fullname}
                            </span>
                            <span className="text-[9px]">
                              Just Now
                            </span>
                          </div>
                        </div>
                        <span className="text-center text-xl font-sans font-semibold w-24 h-8 justify-center items-center rounded-sm bg-neutral-400 dark:bg-neutral-700 flex flex-row text-black dark:text-neutral-300">
                          {consultation.isAccepted ? "PAID" : consultation.fee}
                        </span>
                      </div>
                      <div className="w-full flex flex-col gap-2 ">
                        <p className="pl-5 text-sm"> {consultation.postId.description}</p>
                        <img
                          className="w-full h-[15rem]"
                          src={consultation.postId.image}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex justify-center  w-full rounded-b-lg">
                      <div className="w-fit text-xl  flex justify-center items-center cursor-pointer">
                        <span className="text-md w-full flex flex-row justify-evenly font-bold tracking-tight leading-tight p-2">
                          {consultation.isAccepted ? (
                            <div className="bg-neutral-300 dark:bg-neutral-700 border-[1px] border-neutral-600 dark:border-neutral-600 flex text-neutral-800 dark:text-neutral-200 px-2 py-2 rounded-sm">
                              <span class="material-symbols-outlined">
                                mail
                              </span>
                              <p className="ml-2 font-normal" onClick={handleOpen}>Send Mail</p>
                            </div>
                          ) : (
                            <div className="bg-[#F15A59]/50 hover:text-red-950">
                              <span class="material-symbols-outlined">
                                do_not_disturb_on
                              </span>
                              <p className="text-sm" onClick={handleRevoke}>Revoke consultation</p>
                            </div>
                          )}
                        </span>
                      </div>
                    </div>
                    {openId === consultation._id && (
                      <EmailBox doctor={doctor} consultation={consultation} />
                    )}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Consult;
