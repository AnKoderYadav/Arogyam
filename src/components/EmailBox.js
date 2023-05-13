import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const EmailBox = ({ consultation, doctor }) => {
  function handleEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_js0osnq",
        // process.env.SERVICE_KEY_ID,
        "template_rxsxcuf",
        // process.env.TEMPLATE_KEY_ID,
        e.target,
        // process.env.MAIL_SERVICE_ID,
        "_VBxc4nEfA5rz_PNP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }
  return (
    <div className="w-auto min-w-[75%] bg-neutral-100 dark:bg-neutral-800 m-3 rounded-lg flex flex-grow border-[1px] border-neutral-600">
      <form className="w-full flex flex-col gap-4 p-4" onSubmit={handleEmail}>
        <div className="w-full hidden">
          <label
            className="block uppercase tracking-wide  text-xs font-semibold mb-2"
            htmlFor="grid-name"
          >
            Patient Name
          </label>
          <input
            className="appearance-none p-4 block w-full bg-neutral-200 dark:bg-darkMode-componentHead rounded leading-tight placeholder:text-neutral-500 focus:outline-none focus:bg-neutral-300 focus:text-black dark:focus:bg-neutral-800 dark:focus:text-white"
            id="grid-name"
            type="text"
            name="to_name"
            defaultValue={consultation.postId.patientId.fullname}
            placeholder="Patient name"
          />
        </div>

        <div className="w-full hidden">
          <label
            className="block uppercase tracking-wide text-xs font-semibold mb-2"
            htmlFor="grid-doctor-name"
          >
            Doctor Name
          </label>
          <input
            className="appearance-none p-4 block w-full bg-neutral-200 dark:bg-darkMode-componentHead rounded leading-tight placeholder:text-neutral-500 focus:outline-none focus:bg-neutral-300 focus:text-black dark:focus:bg-neutral-800 dark:focus:text-white"
            id="grid-doctor-name"
            type="text"
            name="doctor_name"
            placeholder="Doctor name"
            defaultValue={doctor.doctorId.fullname}
          />
        </div>
        {/* Make To Email Div Hidden  */}
        <div className="w-full hidden">
          <label
            className="block uppercase tracking-wide text-xs font-semibold mb-2"
            htmlFor="grid-to-email"
          >
            To Email
          </label>
          <input
            className="appearance-none p-4 block w-full bg-neutral-200 dark:bg-darkMode-componentHead rounded leading-tight placeholder:text-neutral-500 focus:outline-none focus:bg-neutral-300 focus:text-black dark:focus:bg-neutral-800 dark:focus:text-white"
            id="grid-to-email"
            type="text"
            name="to_email"
            defaultValue={consultation.postId.patientId.email}
            placeholder="patient email"
          />
        </div>
        <div className="w-full">
          <label
            className="block uppercase tracking-wide text-xs font-semibold mb-2"
            htmlFor="grid-to-email"
          >
            Consultation Timings
          </label>
          <input
            className="appearance-none p-4 block w-full bg-neutral-200 dark:bg-darkMode-componentHead rounded leading-tight placeholder:text-neutral-500 focus:outline-none focus:bg-neutral-300 focus:text-black dark:focus:bg-neutral-800 dark:focus:text-white"
            id="grid-to-email"
            type="text"
            name="timings"
            defaultValue=""
            placeholder="DD/MM/YYYY Timings"
          />
        </div>
        <div className="flex flex-row  justify-center">
          <button
            type="submit"
            value="Send"
            className="text-sm p-2 w-1/3 font-medium bg-lightMode-btn dark:bg-darkMode-btn rounded-md text-white"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailBox;
