import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Post = ({ pdata }) => {
  const { data: session } = useSession();
  const [show, setShow] = useState(true);
  const router = useRouter();

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

  return (
    <div className="flex flex-col">
      <div className="p-5 bg-lightMode-component dark:bg-darkMode-component mt-5 rounded-t-2xl shadow-sm flex flex-col text-lightMode-txt dark:text-darkMode-txt">
        <div className="flex flex-row">
          <div className="flex items-center space-x-2">
            <Image
              className="rounded-full"
              src={pdata?.userId.profile}
              width={40}
              height={40}
            />
          </div>
          <div className="ml-3">
            <p className="font-medium">Arinaymay Bhaskar</p>
            <p className="text-xs text-gray-400"> Just now </p>
          </div>
        </div>

        <p className="mt-1">{pdata.description}</p>
      </div>
      <div className="relative h-56 md-h-96 bg-lightMode-component dark:bg-darkMode-component">
        <Image src={pdata.image} objectFit="cover" layout="fill" />
      </div>
      {/* Footer */}

      <div className="flex flex-col rounded-b-2xl bg-lightMode-component dark:bg-darkMode-component text-neutral-700 dark:text-neutral-400 border-t p-2">
        <div className="flex justify-between items-center gap-9 ">
          <div id="inputIcons" className="rounded-none gap-1 cursor-pointer">
            <img src="/like.svg" alt="" />
            <p className="text-xs sm:text-base">Like</p>
          </div>

          <button
            type="button"
            onClick={() => setShow(!show)}
            id="inputIcons"
            className="rounded-none gap-1 cursor-pointer"
          >
            <img src="/comment.svg" alt="" />
            <p className="text-xs sm:text-base ">Comment</p>
          </button>

          <div id="inputIcons" className="rounded-none gap-1 cursor-pointer">
            <img src="/share.svg" alt="" />
            <p className="text-xs sm:text-base">Share</p>
          </div>
        </div>
        {show && (
          <div id="CommentSection" className=" flex space-x-4 p-4 items-center">
            <Image
              className="rounded-full"
              src={"/pfp.webp"}
              width={30}
              height={30}
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
              <button type="submit">
                <img src="/send.svg" className="cursor-pointer" alt="" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
