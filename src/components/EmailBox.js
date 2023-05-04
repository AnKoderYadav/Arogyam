import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const EmailBox = ({ consultation, doctor }) => {
  function handleEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_js0osnq",
        "template_rxsxcuf",
        e.target,
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
    <>
      <form className="w-full flex flex-col gap-4 p-5" onSubmit={handleEmail}>
        <div className="w-full">
          <label
            className="block uppercase tracking-wide text-xs font-semibold mb-2"
            htmlFor="grid-subject"
          >
            Subject
          </label>
          <input
            className="appearance-none p-4 block w-full bg-neutral-200 dark:bg-darkMode-componentHead rounded leading-tight placeholder:text-neutral-500 focus:outline-none focus:bg-neutral-300 focus:text-black dark:focus:bg-neutral-800 dark:focus:text-white"
            id="grid-subject"
            type="text"
            name="subject"
            defaultValue="Arogyam Consultation Service for Your Query"
            placeholder="Subject"
          />
        </div>

        <div className="w-full">
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

        <div className="w-full">
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

        <div className="w-full">
          <label
            className="block uppercase tracking-wide text-xs font-semibold mb-2"
            htmlFor="grid-email"
          >
            Email
          </label>
          <input
            className="appearance-none p-4 block w-full bg-neutral-200 dark:bg-darkMode-componentHead rounded leading-tight placeholder:text-neutral-500 focus:outline-none focus:bg-neutral-300 focus:text-black dark:focus:bg-neutral-800 dark:focus:text-white"
            id="grid-email"
            type="text"
            name="email"
            placeholder="Email"
            defaultValue={doctor.doctorId.email}
          />
        </div>

        <div className="w-full">
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
            htmlFor="grid-message"
          >
            Message
          </label>
          <textarea
            className="appearance-none p-4 block w-full bg-neutral-200 dark:bg-darkMode-componentHead rounded leading-tight placeholder:text-neutral-500 focus:outline-none focus:bg-neutral-300 focus:text-black dark:focus:bg-neutral-800 dark:focus:text-white"
            id="grid-message"
            name="message"
            defaultValue={`
                    Thank you for your Trusting us with your Health! We're excited to have you on board and will be happy to help you to Get Fit and Healthy again.
                    
                    Please Find below the Google Meet link for Consultation Session for your Given time Slot of : 
                    Start Time : ${consultation.timeSlot.startTime}
                    End Time : ${consultation.timeSlot.endTime}
                    
                    Google Meet Link = "https://meet.google.com/_meet/chd-rpar-tsy?hs=187&authuser=0&ijlm=1681544653867&adhoc=1"
                    I would be glad to extend the Consultaion period if any further issue is noticed in your Health on our behalf.`}
          />
        </div>

        <div className="flex flex-row mx-7 p-5 justify-center">
          <button
            type="submit"
            value="Send"
            className="text-sm p-2 w-full font-medium bg-lightMode-btn dark:bg-darkMode-btn rounded-md text-white"
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default EmailBox;
