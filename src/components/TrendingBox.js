import React from "react";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const TrendingBox = () => {
  const { data, error } = useSWR("/api/trending", fetcher);
  return (
    <>
      <div className="min-w-[15rem] h-fit flex flex-col p-4 gap-4 shadow-xl bg-lightMode-component dark:bg-darkMode-component text-lightMode-txt dark:text-darkMode-txt rounded-lg sticky top-0">
        <div className="w-full font-bold tracking-tight leading-tight flex flex-wrap content-center items-center ml-1 p-1 rounded-md text-md ">
          <p className="mr-3 ">Trending Specialists</p>
        </div>
        {data?.trendingSpecialist.map((doctor, index) => {
          return (
            <div
              key={index}
              className="w-full flex items-start border-teal-950 gap-2 text-sm px-4 "
            >
              <span className="bg-cyan-500 text-white dark:text-darkMode-txt dark:bg-cyan-800 w-5 h-5 rounded-md flex justify-center">
                {index + 1}
              </span>
              <span key={index} className=" border-neutral-500">
                {doctor.doctorName}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TrendingBox;
