import React from "react";

const Array = [
  "Dr. Aarav Sharma",
  "Dr. Akshay Patel",
  "Dr. Anjali Gupta",
  "Dr. Arjun Singh",
  "Dr. Avni Mehta",
  "Dr. Chetan Desai",
  "Dr. Devanshi Shah",
  "Dr. Divya Kapoor",
  "Dr. Neha Singh",
  "Dr. Sakshi Sharma",
];

const TrendingBox = () => {
  return (
    <>
      <div className="w-[13rem] h-[30rem] flex flex-col p-4 gap-4 shadow-xl bg-lightMode-component dark:bg-darkMode-component text-lightMode-txt dark:text-darkMode-txt rounded-lg sticky top-0">
        <div className="w-full font-bold tracking-tight leading-tight flex flex-wrap content-center items-center p-2 ml-1 rounded-md text-md ">
          <p className="mr-2 ">Trending Specialists</p>
          
        </div>
        {Array.map((name, index) => {
          return (
            <div
              key={index}
              className="w-full flex items-center border-teal-950 gap-2 text-sm px-4 "
            >
              <span className="bg-cyan-500 text-white dark:text-darkMode-txt dark:bg-cyan-800 w-5 h-5 rounded-md flex justify-center">{index + 1}</span>
              <span key={index} className=" border-neutral-500">
                {name}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TrendingBox;
