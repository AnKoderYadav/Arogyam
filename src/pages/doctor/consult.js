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
    <MainLayout user={doctor.doctorId}>
      <div className="h-full flex flex-wrap overflow-y-scroll scrollbar-thin p-8 gap-8 bg-lightMode-background dark:bg-darkMode-background text-lightMode-txt dark:text-darkMode-txt justify-center">
        {consultations.map((consultation) => {
          const handleRevoke = async () => {
            const res = await axios.delete(
              `/api/user/doctor/consultation/${consultation._id}`
            );
            refreshData();
          };

          const handleOpen = () => {
            openId === "" ? setOpenId(consultation._id) : setOpenId("");
          };

          return (
            <>
              <div className="w-[25rem] h-fit flex justify-center items-center bg-lightMode-component dark:bg-darkMode-component shadow-xl flex-col rounded-lg">
                <div className="w-full flex flex-col p-4 gap-2">
                  <div className="w-full flex content-center items-center">
                    <div className="w-full content-center items-center flex flex-row">
                      <img
                        className="w-[2rem] h-[2rem] rounded-full "
                        src={consultation.postId.patientId.profile}
                        alt="img"
                      />
                      <span className="w-full pl-4 font-medium -tracking-tight leading-tight">
                        {consultation.postId.patientId.fullname}
                      </span>
                    </div>
                    <span className="text-center text-xl font-semibold py-2 flex flex-row px-0 text-green-400 dark:text-green-700">
                      {consultation.isAccepted ? "PAID" : consultation.fee}
                    </span>
                  </div>
                  <div className="w-full flex flex-col items-center gap-2 font-medium">
                    <p>{consultation.postId.description}</p>
                    <img
                      className="w-2/3 h-[15rem]"
                      src={consultation.postId.image}
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex justify-center w-full bg-lightMode-componentHead dark:bg-darkMode-componentHead dark:text-darkMode-txt p-5 m-2 rounded-b-lg">
                  <div className="w-fit text-xl flex justify-center items-center dark:hover:text-cyan-300 hover:text-cyan-800 cursor-pointer">
                    <span className="text-md w-full flex flex-row justify-evenly font-bold tracking-tight leading-tight">
                      {consultation.isAccepted ? (
                        <>
                          <FcNext className="text-2xl mr-1" />
                          <p onClick={handleOpen}>Send Mail</p>
                        </>
                      ) : (
                        <>
                          <FcCancel className="text-2xl mr-1" />
                          <p onClick={handleRevoke}>Revoke consultation</p>
                        </>
                      )}
                    </span>
                  </div>
                </div>
                {openId && (
                  <EmailBox doctor={doctor} consultation={consultation} />
                )}
              </div>
            </>
          );
        })}
      </div>
    </MainLayout>
  );
};

export default Consult;
