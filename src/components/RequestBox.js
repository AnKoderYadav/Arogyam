import React, { useState } from "react";
import { FcShare, FcPlus } from "react-icons/fc";
import ConsultBox from "./ConsultBox";

const RequestBox = ({ post, doctor }) => {
  const [offer, setOffer] = useState(false);
  return (
    <>
      <div className="flex items-center flex-col w-full bg-lightMode-component text-lightMode-txt shadow-xl rounded-xl dark:bg-darkMode-component dark:text-darkMode-txt p-2 ">
        <div className="flex justify-center items-center w-full p-2">
          <div className="flex items-center content-center w-full ">
            <img
              className="w-11 h-11 rounded-full"
              src={post.patientId.profile}
              alt="img"
            />
            <span className="pl-3 text-md font-semibold leading-tight font-sans">
              {post.patientId.fullname}
            </span>
          </div>
          <span className="text-md flex flex-row pr-5 w-full justify-end">
            <span className="mr-2">Severity - </span>
            <span className="uppercase font-sans font-medium">
              {post.severity}
            </span>
          </span>
        </div>
        <div className="flex p-5 gap-2 w-full flex-col ">
          <p className="font-sans text-justify">{post.description}</p>
          <img
            className="w-auto h-[300px] object-contain"
            src={post.image}
            alt=""
          />
        </div>
        <div className="flex flex-wrap justify-around w-full gap-2 m-2">
          <div className="w-fit text-xl flex  content-center items-center hover:text-gray-600 cursor-pointer p-2 py-0">
            <span className="text-xl ">
              <button
                className="md:text-md w-full rounded-xl flex flex-row items-center md:font-bold tracking-tight leading-tight content-center"
                onClick={() => setOffer(!offer)}
              >
                <FcPlus className="md:text-2xl mr-2" />
                Offer consultation
              </button>
            </span>
          </div>
          <div className="w-fit text-xl flex content-center items-center hover:text-gray-600 cursor-pointer ">
            <span className="text-xl ">
              <button className="text-md w-full md:font-bold tracking-tight leading-tight rounded-xl flex flex-row items-center content-center">
                <FcShare className="md:text-2xl mr-2" />
                Share
              </button>
            </span>
          </div>
        </div>
        {offer && <ConsultBox post={post} doctor={doctor} />}
      </div>
    </>
  );
};

export default RequestBox;
