import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { toastOptions } from "@/lib/lib";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import getTimeElapsed from "./function/getTimeElapsed";

const Post = ({ pdata, user }) => {
  const router = useRouter();
  const [timeElapsed, setTimeElapsed] = useState(
    new Date().getTime() - new Date(pdata.createdAt)
  );
  const [show, setShow] = useState(false);
  const [postLiked, setPostLiked] = useState(pdata.likeBy.includes(user._id));
  const [likeCount, setLikeCount] = useState(pdata.likeBy.length);

  const handleLike = async () => {
    if (postLiked) {
      await axios.post(`/api/user/feedPost/${pdata._id}`, {
        userId: user._id,
        liked: false,
      });

      setLikeCount(likeCount - 1);
    } else {
      await axios.post(`/api/user/feedPost/${pdata._id}`, {
        userId: user._id,
        liked: true,
      });

      setLikeCount(likeCount + 1);
    }
    setPostLiked(!postLiked);
  };

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const onSubmit = async (values, error) => {
    const { content } = values;
    const res = await axios.put(`/api/user/comment/${pdata._id}`, {
      name: user.fullname,
      profile: user.profile,
      content,
    });

    setShow(false);

    if (res.status === 200) {
      toast.success(res.data.msg, toastOptions);
      refreshData();
    } else {
      toast.error(res.data.msg, toastOptions);
    }
  };

  const formik = useFormik({
    initialValues: {
      content: "",
    },
    onSubmit,
  });

  return (
    <div className="flex flex-col">
      <div className="p-5 bg-lightMode-component dark:bg-darkMode-component mt-5 rounded-t-lg shadow-sm flex flex-col text-lightMode-txt dark:text-darkMode-txt">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row ">
            <div className="flex items-center space-x-2 flex-row">
              <img
                className="rounded-full w-10 h-10"
                src={pdata?.userId.profile}
              />
            </div>
            <div className="ml-3">
              <p className="font-medium">{pdata.userId.fullname}</p>
              <p className="text-xs text-gray-400">
                {getTimeElapsed(timeElapsed)} ago
              </p>
            </div>
          </div>
          <Link href={`/feed/${pdata._id}`}>
            <button className="text-black dark:text-white">
              <span className="material-symbols-outlined">open_in_new</span>
            </button>
          </Link>
        </div>

        <p className="mt-2">{pdata.description}</p>
      </div>
      <div className=" flex justify-center align-center md-h-96 bg-zinc-300 dark:bg-neutral-800">
        <img src={pdata.image} className="object-contain max-h-[17rem]" />
      </div>
      {/* Footer */}
      <div className="flex flex-col rounded-b-lg bg-lightMode-component dark:bg-darkMode-component text-neutral-700 dark:text-neutral-400 border-t p-2">
        <div className="flex justify-between items-center gap-9 mx-10 mb-2">
          <div
            onClick={handleLike}
            className="rounded-lg cursor-pointer flex items-center space-x-1 hover:bg-neutral-300 dark:hover:bg-neutral-500 dark:hover:text-white justify-center p-1"
          >
            {postLiked ? (
              <span className="text-xl">❤️ </span>
            ) : (
              <span className="text-xl">🤍 </span>
            )}

            <div
              style={{
                paddingRight: "10px",
                whiteSpace: "nowrap",
                display: "inline-block",
              }}
            >
              {likeCount}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShow(!show)}
            className="rounded-lg cursor-pointer flex items-center space-x-1 hover:bg-neutral-300 dark:hover:bg-neutral-500 dark:hover:text-white justify-center p-2 px-3"
          >
            <span className="material-symbols-outlined">chat</span>
            <p className="text-xs sm:text-base ">Comment</p>
          </button>

          <div className="rounded-lg cursor-pointer flex items-center space-x-1 hover:bg-neutral-300 dark:hover:bg-neutral-500 dark:hover:text-white justify-center p-2 px-3">
            <span className="material-symbols-outlined">share</span>
            <p className="text-xs sm:text-base">Share</p>
          </div>
        </div>
        {show && (
          <div
            id="CommentSection"
            className=" flex mx-4 space-x-4 p-4 items-center border-t-[1px] border-neutral-400 dark:border-neutral-600"
          >
            <img className="rounded-full w-8 h-8" src={user.profile} />
            <form
              action=""
              className="flex flex-1 "
              onSubmit={formik.handleSubmit}
            >
              <input
                type="text"
                className="rounded-full h-8 bg-gray-100 dark:bg-neutral-800  flex flex-grow px-5 focus:outline-none "
                placeholder="Write a comment.."
                {...formik.getFieldProps("content")}
              />
              <button type="submit" className="ml-4">
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
