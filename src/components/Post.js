import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FeedPosts from "@/models/feedModel";
import Link from "next/link";

const Post = ({ pdata }) => {
  const { data: session } = useSession();
  const [show, setShow] = useState(true);
  const router = useRouter();
  // console.log(pdata.createdAt);
  const elapsedTime = Date.now() - new Date(pdata.createdAt).getTime();
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
  const [postLiked, setPostLiked] = useState(false);

  const handleLike = (e) => {
    e.preventDefault();
    if (!session) {
      return;
    }
    if (!postLiked) {
      setPostLiked(true);
      pdata.likeCount += 1;
    } else {
      setPostLiked(false);
      pdata.likeCount -= 1;
    }
    fetch(`/api/posts/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pdata: pdata._id,
        userId: session.user._id,
        liked: postLiked,
      }),
    });
  };
  const refreshData = () => {
    router.replace(router.asPath);
  };

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const onSubmit = async (values, error) => {
    const { content } = values;
    const res = await axios.put(`/api/user/comment/${pdata._id}`, {
      name: session?.user.name,
      profile: session?.user.profile,
      content,
    });

    if (res.status === 200) {
      toast.success(res.data.msg, toastOptions);
      setTimeout(refreshData, 4000);
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
  // console.log(pdata.likeCount);
  return (

    <div className="flex flex-col">
      <div className="p-5 bg-lightMode-component dark:bg-darkMode-component mt-5 rounded-t-2xl shadow-sm flex flex-col text-lightMode-txt dark:text-darkMode-txt">
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
              <p className="text-xs text-gray-400">{timeString}</p>
            </div>
          </div>
          <Link href={`/feed/${pdata._id}`}>
            <button className="text-black dark:text-white">
              <span class="material-symbols-outlined">
                open_in_new
              </span>
            </button>
          </Link>
        </div>

        <p className="mt-2">{pdata.description}</p>
      </div>
      <div className="relative h-56 md-h-96 bg-lightMode-component dark:bg-darkMode-component">
        <Image src={pdata.image} objectFit="cover" layout="fill" />
      </div>
      {/* Footer */}
      <div className="flex flex-col rounded-b-2xl bg-lightMode-component dark:bg-darkMode-component text-neutral-700 dark:text-neutral-400 border-t p-2">
        <div className="flex justify-between items-center gap-9 mx-2">
          <div onClick={(e) => handleLike(e)} id="inputIcons" className="rounded-none gap-1 cursor-pointer">
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
              {pdata.likeCount}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShow(!show)}
            id="inputIcons"
            className="rounded-none gap-1 cursor-pointer"
          >
            <span class="material-symbols-outlined">
              chat
            </span>
            <p className="text-xs sm:text-base ">Comment</p>
          </button>

          <div id="inputIcons" className="rounded-none gap-1 cursor-pointer">
            <span class="material-symbols-outlined">
              share
            </span>
            <p className="text-xs sm:text-base">Share</p>
          </div>
        </div>
        {show && (
          <div id="CommentSection" className=" flex space-x-4 p-4 items-center">
            {/* TO BE CHANGED */}
            <img
              className="rounded-full w-8 h-8"
              src={session?.user.profile}
            />
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
                <span class="material-symbols-outlined">
                  send
                </span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
