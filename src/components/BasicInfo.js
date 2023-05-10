import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { toastOptions } from "@/lib/lib";

const BasicInfo = ({ doctor, image }) => {
  const handleValidation = () => {
    const { fullname, contact } = formik.values;
    if (fullname.length < 3) {
      toast.info("Invalid Fullname!", toastOptions);
      return false;
    } else if (contact.length < 10) {
      toast.info("Invalid Contact!", toastOptions);
      return false;
    }
    return true;
  };

  const onSubmit = async (values, err) => {
    if (handleValidation()) {
      const newFilename = `${Date.now()}_${image.name}`;
      if (image !== "") {
        const body = new FormData();
        body.append("file", image);

        body.append("newFilename", newFilename);

        await fetch("/api/upload", {
          method: "POST",
          body,
        });
      }

      const { fullname, age, contact, gender } = values;

      const res = await axios.post(`/api/user/${doctor._id}`, {
        fullname,
        age,
        contact,
        gender,
        profile:
          image !== ""
            ? `https://storage.googleapis.com/arogyam-storage-bucket/${newFilename}`
            : user.profile,
      });

      if (res.status === 200) toast.info(res.data.msg, toastOptions);
      else toast.error(res.data.msg, toastOptions);
    }
  };

  const formik = useFormik({
    initialValues: {
      fullname: doctor.fullname,
      age: doctor.age,
      contact: doctor.contact,
      gender: doctor.gender,
    },
    onSubmit,
  });
  return (
    <form className="w-full max-w-lg " onSubmit={formik.handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-xs font-semibold mb-2"
            htmlFor="grid-first-name"
          >
            Full Name
          </label>
          <input
            className="appearance-none block w-full bg-neutral-200 dark:bg-neutral-800 rounded py-3 px-4 leading-tight placeholder:text-neutral-500 focus:outline-none focus:bg-neutral-300 focus:text-black dark:focus:bg-neutral-800 dark:focus:text-white"
            type="text"
            placeholder="Full name"
            {...formik.getFieldProps("fullname")}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-xs font-semibold mb-2"
            htmlFor="grid-age"
          >
            Age
          </label>
          <input
            className="appearance-none block w-full bg-neutral-200 dark:bg-neutral-800 rounded py-3 px-4 leading-tight placeholder:text-neutral-500 focus:outline-none focus:bg-neutral-300 focus:text-black dark:focus:bg-neutral-800 dark:focus:text-white"
            id="grid-age"
            type="text"
            placeholder="in years"
            {...formik.getFieldProps("age")}
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide  text-xs font-semibold mb-2"
            htmlFor="grid-password"
          >
            Contact Number
          </label>
          <input
            className="appearance-none block w-full bg-neutral-200 dark:bg-neutral-800 rounded py-3 px-4 leading-tight placeholder:text-neutral-500 focus:outline-none focus:bg-neutral-300 focus:text-black dark:focus:bg-neutral-800 dark:focus:text-white"
            id="grid-qualifications"
            type="number"
            placeholder="XXXXXXXXXX"
            {...formik.getFieldProps("contact")}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-xs font-semibold mb-2"
            htmlFor="grid-state"
          >
            Gender
          </label>
          <div className="relative">
            <select
              className="appearance-none block w-full bg-neutral-200 dark:bg-neutral-800 rounded py-3 px-4 leading-tight placeholder:text-neutral-500 focus:outline-none focus:bg-neutral-300 focus:text-black dark:focus:bg-neutral-800 dark:focus:text-white"
              {...formik.getFieldProps("gender")}
            >
              <option>Prefer not to say</option>
              <option>Male</option>
              <option>Female</option>
              <option>Transgender</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-wrap -mx-3">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-xs font-semibold mb-2"
            htmlFor="grid-password"
          >
            Password
          </label>
          <input
            className="appearance-none block w-full bg-neutral-200 mb-3 dark:bg-neutral-800 rounded py-3 px-4 leading-tight placeholder:text-neutral-500 focus:outline-none focus:bg-neutral-300 focus:text-black dark:focus:bg-neutral-800 dark:focus:text-white"
            id="grid-password"
            type="password"
            placeholder="******************"
            {...formik.getFieldProps("password")}
          />
          <p className="text-red-500 text-xs italic">
            Please fill out this field.
          </p>
        </div>
      </div> */}

      <div className="flex flex-row mx-7 justify-center">
        <button
          type="submit"
          className="text-sm p-2 w-full font-medium bg-lightMode-btn dark:bg-cyan-700 rounded-md m-5 text-white"
        >
          Update Profile
        </button>
      </div>
    </form>
  );
};
export default BasicInfo;
