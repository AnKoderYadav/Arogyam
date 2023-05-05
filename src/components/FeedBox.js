import React, { useState } from "react";
import Image from "next/image";
import Post from "./Post";
import { useRouter } from "next/router";
import { Formik, useFormik } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Feed = ({ user, posts }) => {
  const [image, setImage] = useState(null);
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
    const body = new FormData();
    body.append("file", image);
    const newFilename = `${Date.now()}_${image.name}`;
    body.append("newFilename", newFilename);

    const response = await fetch("/api/upload", {
      method: "POST",
      body,
    });

    const { description } = values;
    const res = await axios.post("/api/user/feedPost", {
      userId: user._id,
      description,
      image:
        image !== ""
          ? `https://storage.googleapis.com/arogyam-storage-bucket/${newFilename}`
          : "",
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
      description: "",
    },
    onSubmit,
  });

  return (
    <div className="text-sm">
      <div
        id="inputBox"
        className="bg-lightMode-component  my-4 dark:bg-darkMode-component dark:text-darkMode-txt p-2 rounded-2xl shadow-md text-lightMode-txt font-medium mt-0 content-center items-center"
      >
        <div className=" flex space-x-4 p-4 items-center">
          <Image
            className="rounded-full"
            src={user.profile}
            width={40}
            height={40}
            alt=""
          />
          <form
            action=""
            className="flex flex-1 "
            onSubmit={formik.handleSubmit}
          >
            <input
              type="text"
              className="rounded-full h-12 bg-gray-100 dark:bg-neutral-800  flex flex-grow px-5 focus:outline-none "
              placeholder="What's on your Mind?"
              {...formik.getFieldProps("description")}
            />
            <button
              id="inputIcons"
              type="submit"
              className="flex flex-row gap-2 items-center "
            >
              <img src="/Submit.svg" alt="" className="" />
              Submit
            </button>
          </form>
        </div>

        <div className="flex justify-around border-t-[1px] gap-9 border-neutral-300 dark:border-neutral-700 p-2">
          <button id="inputIcons" className="flex flex-row gap-2 items-center ">
            <img src="/upload.svg" alt="" className="" />
            Upload Picture
          </button>
          <input
            type="file"
            className="w-48"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          <button
            id="inputIcons"
            type="submit"
            className="flex flex-row gap-2 items-center "
          >
            <img src="/Submit.svg" alt="" className="" />
            Submit
          </button>
        </div>
      </div>
      <div id="Post" className="mb-52">
        {posts.map((pdata) => {
          return <Post pdata={pdata} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
