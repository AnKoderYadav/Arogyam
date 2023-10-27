import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { toastOptions } from "@/lib/lib";
import getTimeElapsed from "./function/getTimeElapsed";
import {
  FcShare,
  FcPlus,
  FcApproval,
  FcMediumPriority,
  FcHighPriority,
  FcLowPriority,
} from "react-icons/fc";

const PatientQuery = ({ post, doctor }) => {
  const [offer, setOffer] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(
    new Date().getTime() - new Date(post.createdAt)
  );
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const handleValidation = () => {
    const { fee } = formik.values;
    if (fee === 0) {
      toast.info("Fee cannot be Zero!", toastOptions);
      return false;
    }
    return true;
  };

  const onSubmit = async (values, err) => {
    if (handleValidation()) {
      const { fee } = values;

      const res = await axios.post("/api/user/doctor/consultation", {
        postId: post._id,
        doctorName: doctor.doctorId.fullname,
        doctorProfile: doctor.doctorId.profile,
        doctorRefId: doctor._id,
        fee,
      });

      setOffer(false);
      refreshData();

      if (res.status === 200) toast.success(res.data.msg, toastOptions);
      else toast.error(res.data.msg, toastOptions);
    }
  };

  const formik = useFormik({
    initialValues: {
      fee: 0,
    },
    onSubmit,
  });

  return (
    <>
      <div className="flex items-center flex-col w-full bg-lightMode-component text-lightMode-txt shadow-xl rounded-lg dark:bg-darkMode-component dark:text-darkMode-txt p-2 ">
        <div className="flex justify-center items-center w-full p-2">
          <div className="flex items-center content-center w-full">
            <img
              className="w-10 h-10 rounded-full"
              src={post.patientId.profile}
              alt="img"
            />
            <div className="flex flex-col pl-3">
              <span className="text-md tracking-tight font-sans font-semibold">
                {post.patientId.fullname}
              </span>
              <span className="text-xs">{getTimeElapsed(timeElapsed)} ago</span>
            </div>
          </div>
          {post.severity === "Low" ? (
            <span className="text-sm  flex flex-row pr-5 w-full justify-end">
              <span className="mr-2 font-semibold">Severity - </span>
              <FcLowPriority className="md:text-xl mr-2" />
              <span className="uppercase text-sm">low</span>
            </span>
          ) : post.severity === "Medium" ? (
            <span className="text-sm flex flex-row pr-5 w-full justify-end">
              <span className="font-semibold mr-2">Severity - </span>
              <FcMediumPriority className="md:text-xl mr-2" />
              <span className="uppercase text-sm">Medium</span>
            </span>
          ) : (
            <span className="text-sm flex flex-row pr-5 w-full justify-end">
              <span className="font-semibold mr-2">Severity - </span>
              <FcHighPriority className="md:text-xl mr-2" />
              <span className="uppercase text-sm">High</span>
            </span>
          )}
        </div>
        <div className="flex p-3 py-0 gap-2 w-full flex-col ">
          <p className="font-sans text-sm text-justify">{post.description}</p>
          <img
            className="w-auto h-[300px] object-contain"
            src={post.image}
            alt=""
          />
        </div>
        <div className="flex flex-wrap justify-around  gap-2 m-2 border-t-[1px] pt-2 w-4/5 dark:border-neutral-600">
          <div className="w-fit text-xl flex  content-center items-center cursor-pointer p-2 py-0">
            <span className="text-xl ">
              {!post.offers.includes(`${doctor._id}`) ? (
                <button
                  className="md:text-md w-full rounded-xl flex flex-row items-center md:font-bold tracking-tight leading-tight p-[5px] hover:bg-slate-300 hover:text-gray-600 pr-2 content-center"
                  onClick={() => setOffer(!offer)}
                >
                  <FcPlus className="md:text-2xl mr-2" />
                  Offer consultation
                </button>
              ) : (
                <div className=" md:text-md w-full rounded-xl flex flex-row items-center md:font-bold tracking-tight leading-tight  p-[5px]  pr-2 content-center">
                  <FcApproval className="md:text-2xl mr-2" />
                  Offered
                </div>
              )}
            </span>
          </div>
          <div className="w-fit text-xl flex content-center items-center hover:text-gray-600 cursor-pointer ">
            <span className="text-xl ">
              <button className="text-md w-full md:font-bold tracking-tight hover:bg-slate-300 pr-2 leading-tight rounded-xl  p-[5px] flex flex-row items-center content-center">
                <FcShare className="md:text-2xl mr-2" />
                Share
              </button>
            </span>
          </div>
        </div>
        {offer && (
          <form
            className="w-full flex flex-col gap-4 p-5"
            onSubmit={formik.handleSubmit}
          >
            <div className="w-full">
              <label
                className="block uppercase tracking-wide text-xs font-semibold mb-2"
                htmlFor="grid-first-name"
              >
                Fee
              </label>
              <input
                className="appearance-none p-4 block w-full bg-neutral-200 dark:bg-darkMode-componentHead rounded leading-tight placeholder:text-neutral-500 focus:outline-none focus:bg-neutral-300 focus:text-black dark:focus:bg-neutral-800 dark:focus:text-white"
                id="grid-first-name"
                type="number"
                placeholder="Enter Fee"
                {...formik.getFieldProps("fee")}
              />
            </div>

            <div className="flex flex-row mx-7 p-5 justify-center">
              <button
                type="submit"
                className="text-sm p-2 w-full font-medium bg-lightMode-btn dark:bg-darkMode-btn rounded-md text-white"
              >
                Send
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default PatientQuery;
