import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { toastOptions } from "@/lib/lib";

const ConsultBox = ({ post, doctor, setOffer, refreshData }) => {
  const handleValidation = () => {
    const { fee } = formik.values;
    if (fee === 0) {
      toast.info("Fee cannot be Zero!", toastOptions);
      return false;
    }
    return true;
  };

  const onSubmit = async (values, err) => {
    if (handleValidation()) {
      const { fee } = values;

      const res = await axios.post("/api/user/doctor/consultation", {
        postId: post._id,
        doctorName: doctor.doctorId.fullname,
        doctorProfile: doctor.doctorId.profile,
        doctorRefId: doctor._id,
        fee,
      });

      setOffer(false);
      refreshData();

      if (res.status === 200) toast.success(res.data.msg, toastOptions);
      else toast.error(res.data.msg, toastOptions);
    }
  };
  const formik = useFormik({
    initialValues: {
      fee: 0,
    },
    onSubmit,
  });
  return (
    <>
      <form
        className="w-full flex flex-col gap-4 p-5"
        onSubmit={formik.handleSubmit}
      >
        <div className="w-full">
          <label
            className="block uppercase tracking-wide text-xs font-semibold mb-2"
            htmlFor="grid-first-name"
          >
            Fee
          </label>
          <input
            className="appearance-none p-4 block w-full bg-neutral-200 dark:bg-darkMode-componentHead rounded leading-tight placeholder:text-neutral-500 focus:outline-none focus:bg-neutral-300 focus:text-black dark:focus:bg-neutral-800 dark:focus:text-white"
            id="grid-first-name"
            type="number"
            placeholder="Enter Fee"
            {...formik.getFieldProps("fee")}
          />
        </div>

        <div className="flex flex-row mx-7 p-5 justify-center">
          <button
            type="submit"
            className="text-sm p-2 w-full font-medium bg-lightMode-btn dark:bg-darkMode-btn rounded-md text-white"
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default ConsultBox;
