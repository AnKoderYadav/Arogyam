import React from "react";
import Link from "next/link";

const ConsultationOffer = ({ consultation, hide }) => {
  return (
    <>
      <article className="flex justify-between rounded-lg items-center flex-col w-[325px]  bg-lightMode-component text-lightMode-txt dark:bg-darkMode-component dark:text-darkMode-txt shadow-md m-4 p-2 gap-2">
        <div className="w-full flex content-center items-center p-1">
          <div className="w-full flex content-center items-center flex-col">
            <div className="flex w-full ">
              <img
                className="w-10 h-10 rounded-full ml-2 mb-2 mr-2"
                src={consultation.doctorProfile}
                alt="img"
              />
              <span className=" text-xl flex items-center text-cyan-500">
                {`Dr. ${consultation.doctorName}`}
              </span>
            </div>
            <div className="border-t-[1px] ml-2 px-2 py-2 flex w-full justify-start items-start">
              <ul className="flex flex-col w-full text-xs font-thin font-sans justify-start items-start">
                <li className="font-thin font-sans">
                  <span className="font-bold">Qualificaton -</span>
                  <br />
                  {consultation.doctorRefId.qualification}
                </li>
                <li className="font-thin font-sans">
                  <span className="font-bold">Experience -</span> <br />
                  {consultation.doctorRefId.experience}
                </li>
                <li className="font-thin font-sans">
                  <span className="font-bold">LinkedIn -</span>{" "}
                  {consultation.doctorRefId.linkedin}
                </li>
                <li className="font-thin font-sans">
                  <span className="font-bold">Twitter -</span>{" "}
                  {consultation.doctorRefId.twitter}
                </li>
                <li className="font-thin font-sans">
                  <span className="font-bold">Working Hours -</span> <br />
                  {consultation.doctorRefId.timeSlot}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-center  text-green-500 text-xl">
            ₹{consultation.fee}
          </span>
          {hide ? (
            <></>
          ) : (
            <>
              <div className="ml-2 flex items-center h-[3px] justify-center bg-white w-[3px] rounded-full"></div>
              <div className="w-fit text-sm flex justify-center  items-center hover:text-gray-500 cursor-pointer">
                <span className="pl-2">
                  {" "}
                  {!consultation.isAccepted ? (
                    <Link href={`/checkout/${consultation.priceId}`}>
                      <button className=" w-full p-[2px] px-3 bg-yellow-600 rounded-sm text-white ">
                        <div className="flex items-center font-semibold">
                          Accept
                        </div>
                      </button>
                    </Link>
                  ) : (
                    <div className=" w-full p-[2px] px-3 bg-green-600 rounded-sm text-white">
                      <div className="flex items-center font-semibold">
                        In Progress
                      </div>
                    </div>
                  )}
                </span>
              </div>
            </>
          )}
        </div>
      </article>
    </>
  );
};

export default ConsultationOffer;
