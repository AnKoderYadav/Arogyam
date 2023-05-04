import React from "react";

const Array = [
  "Ankur Yadav",
  "Anime ",
  "Anuj Boricha",
  "Ankur",
  "Arinaymay Bhaskar",
  "Anuj",
  "Ankur",
  "Anime",
  "Anuj",
  "Ankur",
];

const TrendingBox = () => {
  return (
    <>
      <div className="w-[20rem] flex flex-col p-4 gap-4 shadow-xl bg-lightMode-component dark:bg-darkMode-component text-lightMode-txt dark:text-darkMode-txt rounded-lg sticky top-0">
        <div className="w-full font-bold tracking-tight leading-tight flex flex-wrap content-center items-center p-2 rounded-md text-2xl bg-lightMode-componentHead dark:bg-darkMode-componentHead">
          <p className="mr-2">Trending</p>
          <span className="text-cyan-600 dark:text-cyan-300">Specialists</span>
        </div>
        {Array.map((name, index) => {
          return (
            <div
              key={index}
              className="w-full flex items-center border-teal-950 gap-4 text-[1rem]"
            >
              <span>{index + 1}</span>
              <span key={index} className="">
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
