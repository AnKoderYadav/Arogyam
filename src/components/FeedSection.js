import React, { useState } from "react";
import Post from "./Post";
import axios from "axios";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { toastOptions } from "@/lib/lib";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Loader";

const FeedSection = ({ user, posts }) => {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
    setIsLoading(false);
  };

  const onSubmit = async (values, error) => {
    setIsLoading(true);
    const body = new FormData();
    body.append("file", image);
    let newFilename;
    if (image) {
      newFilename = `${Date.now()}_${image.name}`;
      body.append("newFilename", newFilename);

      await fetch("/api/upload", {
        method: "POST",
        body,
      });
    }

    const { description } = values;
    const res = await axios.post("/api/user/feedPost", {
      userId: user._id,
      description,
      image: image
        ? `https://storage.googleapis.com/arogyam-bucket/${newFilename}`
        : "",
    });

    if (res.status === 200) {
      toast.success(res.data.msg, toastOptions);
      refreshData();
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
    <>
      <section
        id="inputBox"
        className="text-sm bg-lightMode-component dark:bg-darkMode-component dark:text-darkMode-txt p-2 rounded-lg shadow-md text-lightMode-txt font-medium content-center items-center"
      >
        <div className="flex space-x-4 p-2 px-4 ">
          <img
            className="rounded-full w-10 h-10 mt-1 top-0"
            src={user.profile}
            alt=""
          />
          <form
            action=""
            className="flex flex-1 flex-col"
            onSubmit={formik.handleSubmit}
          >
            <textarea
              rows="5"
              className="rounded-xl bg-gray-100 dark:bg-neutral-800  flex flex-grow p-4 focus:outline-none "
              placeholder="What's on your Mind?"
              {...formik.getFieldProps("description")}
            />
            <div className="flex border-t-[1px] mt-2 border-neutral-300 dark:border-neutral-500 gap-2">
              <div className="flex relative justify-around bg-lightMode-componentHead dark:bg-cyan-800 rounded-lg mt-2 dark:border-neutral-700 w-1/2">
                <button className="w-full flex flex-row py-2 justify-center text-black dark:text-white">
                  <span className="material-symbols-outlined">image</span>
                  Upload Picture
                </button>
                <input
                  type="file"
                  className="w-full h-10 opacity-0 absolute hover:bg-gray-100 cursor-pointer"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                />
              </div>
              <div className="flex relative justify-around bg-lightMode-componentHead dark:bg-cyan-800 rounded-lg mt-2 dark:border-neutral-700  w-1/2 items-center">
                <button
                  type="submit"
                  className="w-full flex flex-row gap-2 items-center text-black dark:text-white justify-center"
                >
                  {!isLoading ? (
                    <>
                      <span className="material-symbols-outlined">
                        check_circle
                      </span>
                      Submit{" "}
                    </>
                  ) : (
                    <Loader />
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section id="Post" className="pb-5">
        {posts.map((pdata) => {
          return <Post pdata={pdata} user={user} key={pdata._id} />;
        })}
      </section>
    </>
  );
};

export default FeedSection;
