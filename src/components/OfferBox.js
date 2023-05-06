import React from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const publishableKey = `${process.env.STRIPE_PUBLISHABLE_KEY}`;
loadStripe(publishableKey);

const OfferBox = ({ consultation }) => {
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
      async function accept() {
        try {
          const res = await axios.put(
            `/api/user/doctor/consultation/${consultation._id}`,
            { isAccepted: true }
          );
          console.log(res);
        } catch (error) {
          console.error(error);
        }
      }
      accept();
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);
  return (
    <>
      <div className="flex justify-between rounded-lg items-center flex-col w-96 bg-lightMode-component text-lightMode-txt dark:bg-darkMode-component dark:text-darkMode-txt shadow-md m-4 p-4 gap-2">
        <div className="w-full flex content-center items-center p-1">
          <div className="w-full flex content-center items-center">
            <img
              className="w-[2.5rem] h-[2.5rem] rounded-full"
              src="https://img.collegedekhocdn.com/media/img/careers/doctor-clinic.jpg"
              alt="img"
            />
            <span className="ml-4 text-xl font-medium text-teal-500">
              {consultation.doctorName}
            </span>
          </div>
          <span className="text-center font-bold text-green-500 text-3xl">
            ₹{consultation.fee}
          </span>
        </div>

        <ul className="w-full px-2 text-justify font-thin font-sans">
          <li className="font-thin font-sans">
            Qualificaton - {consultation.doctorRefId.qualification}
          </li>
          <li className="font-thin font-sans">
            Experience - {consultation.doctorRefId.experience}
          </li>
          <li className="font-thin font-sans">
            Linkdin - {consultation.doctorRefId.linkdin}
          </li>
          <li className="font-thin font-sans">
            Twitter - {consultation.doctorRefId.twitter}
          </li>
          <li className="font-thin font-sans">
            Working Hours - {consultation.doctorRefId.timeSlot}
          </li>
        </ul>
        <div className="flex justify-center items-center">
          <form
            action={`/api/checkout_sessions/${consultation.priceId}`}
            method="POST"
            className="w-fit text-xl flex justify-center items-center hover:text-gray-500 cursor-pointer"
          >
            <span className=" text-xl pl-2">
              <button className="text-md p-3 w-full font-medium bg-teal-700 rounded-md text-white ">
                {" "}
                Accept
              </button>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default OfferBox;
