import React from "react";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { useSession } from "next-auth/react";

const CurrentPost = ({ user, post, refreshData }) => {
  const { data: session } = useSession();
  // console.log(post.createdAt);
  const handleDelete = async () => {
    const res = await axios.delete(`/api/user/post/delete/${post._id}`);
    console.log(res);
    refreshData();
  };
  const elapsedTime = Date.now() - new Date(post.createdAt).getTime();
  const minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
  const hours = Math.floor((elapsedTime / 1000 / 60 / 60) % 24);
  const days = Math.floor(elapsedTime / 1000 / 60 / 60 / 24);

  let timeString = '';
  if (days > 0) {
    timeString = `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
    timeString = `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else {
    timeString = `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  }

  return (
    <>
      <div className="w-full h-[50%] flex content-center items-center flex-col bg-lightMode-component text-lightMode-txt dark:bg-darkMode-component dark:text-darkMode-txt shadow-xl p-4 gap-4 rounded-lg min-w-1/2">
        <div className="flex content-center items-center w-full">
          <div className="w-full flex flex-row content-center items-center">
            <img
              className="w-10 h-10 rounded-full"
              src={user.profile}
              alt="img"
            />
            <div className="flex flex-col">
            <span className="ml-4 text-sm font-medium tracking-tight">{user.fullname}</span>
            <span className="ml-4 text-xs">{timeString}</span>
            </div>
          </div>
          <span
            className="text-center text-3xl hover:text-red-600 cursor-pointer"
            onClick={handleDelete}
          >
            <MdDelete />
          </span>
        </div>
        <div className="flex flex-col gap-2 w-full ">
          <p className="text-sm text-justify font-sans">{post.description}</p>
          <img
            className="w-auto h-[300px] object-contain"
            src={post.image}
            alt=""
          />
        </div>
        <div className="flex items-end w-full justify-end mr-2">
        <button className="text-sm bg-cyan-500 text-white  dark:bg-cyan-800 p-1 px-3 rounded-lg hover:bg-cyan-700 ">
          Solved?
        </button>
        </div>
      </div>
    </>
  );
};

export default CurrentPost;
