import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { toast } from "react-toastify";
import { toastOptions } from "@/lib/lib";
import Loader from "./Loader";

const MoreInfo = ({ doctor }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleValidation = () => {
    const { experience, qualification, linkedin, twitter } = formik.values;
    if (experience + qualification + linkedin + twitter === "") {
      toast.info("Invalid Update Request", toastOptions);
    }
  };

  const onSubmit = async (values, err) => {
    setIsLoading(true);
    if (handleValidation) {
      const { qualification, experience, linkedin, twitter, timeSlot } = values;

      const res = await axios.post(`/api/user/doctor/${doctor._id}`, {
        qualification,
        experience,
        linkedin,
        twitter,
        timeSlot,
      });

      if (res.status === 200) toast.success(res.data.msg, toastOptions);
      else toast.error(res.data.msg, toastOptions);
    }
    setIsLoading(false);
  };

  const formik = useFormik({
    initialValues: {
      qualification: "",
      experience: "",
      linkedin: "",
      twitter: "",
      timeSlot: "",
    },
    onSubmit,
  });
  return (
    <form className="w-full max-w-lg " onSubmit={formik.handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide  text-xs font-semibold mb-2"
            htmlFor="grid-password"
          >
            Qualifications
          </label>
          <input
            className="appearance-none block w-full bg-neutral-200 dark:bg-neutral-800 rounded py-3 px-4 leading-tight placeholder:text-neutral-500 focus:outline-none focus:bg-neutral-300 focus:text-black dark:focus:bg-neutral-800 dark:focus:text-white"
            type="text"
            placeholder="College name, Degree..."
            {...formik.getFieldProps("qualification")}
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 ">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-xs font-semibold mb-2"
            htmlFor="grid-password"
          >
            Social Accounts
          </label>

          <div className="flex flex-row m-4 mx-0 border-[1px] border-neutral-400 dark:border-neutral-800 rounded-md">
            <label className=" uppercase m-2 flex items-center justify-center h-auto  text-xl font-bold mb-2">
              <AiFillLinkedin />
            </label>
            <input
              className="appearance-none block w-full bg-neutral-200 dark:bg-neutral-800 rounded py-3 px-4 leading-tight placeholder:text-neutral-500 focus:outline-none focus:bg-neutral-300 focus:text-black dark:focus:bg-neutral-800 dark:focus:text-white"
              type="link"
              placeholder="LinkedIn profile link"
              {...formik.getFieldProps("linkedin")}
            />
          </div>

          <div className="flex flex-row m-4 mx-0 border-[1px]  border-neutral-400 dark:border-neutral-800 rounded-md">
            <label className=" uppercase m-2 flex items-center justify-center h-auto text-xl font-bold mb-2">
              <AiOutlineTwitter />
            </label>
            <input
              className="appearance-none block w-full bg-neutral-200 dark:bg-neutral-800 rounded py-3 px-4 leading-tight placeholder:text-neutral-500 focus:outline-none focus:bg-neutral-300 focus:text-black dark:focus:bg-neutral-800 dark:focus:text-white"
              placeholder="Twitter profile link"
              type="link"
              {...formik.getFieldProps("twitter")}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 ">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-xs font-semibold mb-2"
            htmlFor="grid-password"
          >
            Experience
          </label>
          <input
            className="appearance-none block w-full bg-neutral-200 dark:bg-neutral-800 rounded py-3 px-4 leading-tight placeholder:text-neutral-500 focus:outline-none focus:bg-neutral-300 focus:text-black dark:focus:bg-neutral-800 dark:focus:text-white"
            id="grid-password"
            type="text"
            placeholder="Experience"
            {...formik.getFieldProps("experience")}
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mt-4">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-xs font-semibold mb-2"
            htmlFor="grid-timeSlot"
          >
            Time Slot
          </label>
          <input
            className="appearance-none block w-full bg-neutral-200 dark:bg-neutral-800 rounded py-3 px-4 leading-tight placeholder:text-neutral-500 focus:outline-none focus:bg-neutral-300 focus:text-black dark:focus:bg-neutral-800 dark:focus:text-white"
            id="grid-password"
            type="text"
            placeholder="Time Slot"
            {...formik.getFieldProps("timeSlot")}
          />
        </div>
      </div>
      <div className="flex flex-row  mx-7 justify-center">
        <button
          type="submit"
          className="text-sm p-2 w-full font-medium bg-lightMode-btn dark:bg-cyan-700 rounded-md m-5 text-white"
        >
          {!isLoading ? "Update Profile" : <Loader />}
        </button>
      </div>
    </form>
  );
};
export default MoreInfo;
