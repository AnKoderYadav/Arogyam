import React from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const publishableKey = `${process.env.STRIPE_PUBLISHABLE_KEY}`;
loadStripe(publishableKey);

const OfferBox = ({ consultation }) => {
  // console.log(consultation);
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
      async function accept() {
        try {
          await axios.put(`/api/user/doctor/consultation/${consultation._id}`, {
            isAccepted: true,
          });
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
      <div className="flex justify-between rounded-lg items-center flex-col w-[325px]  bg-lightMode-component text-lightMode-txt dark:bg-darkMode-component dark:text-darkMode-txt shadow-md m-4 p-2 gap-2">
        <div className="w-full flex content-center items-center p-1">
          <div className="w-full flex content-center items-center flex-col">
            <div className="flex w-full ">
              <img
                className="w-10 h-10 rounded-full ml-2 mb-2 mr-2"
                src={consultation.doctorProfile}
                alt="img"
              />
              <span className=" text-xl flex items-center text-cyan-500">
                {consultation.doctorName}
              </span>
            </div>
            <div className="border-t-[1px] ml-2 px-2 py-2 flex w-full justify-start items-start">
              <ul className="flex flex-col w-full text-xs font-thin font-sans justify-start items-start">
                <li className="font-thin font-sans">
                  <span className="font-bold">Qualificaton -</span>
                  <br />
                  {consultation.doctorRefId.qualification}
                </li>
                <li className="font-thin font-sans">
                  <span className="font-bold">Experience -</span> <br />
                  {consultation.doctorRefId.experience}
                </li>
                <li className="font-thin font-sans">
                  <span className="font-bold">LinkedIn -</span>{" "}
                  {consultation.doctorRefId.linkedin}
                </li>
                <li className="font-thin font-sans">
                  <span className="font-bold">Twitter -</span>{" "}
                  {consultation.doctorRefId.twitter}
                </li>
                <li className="font-thin font-sans">
                  <span className="font-bold">Working Hours -</span> <br />
                  {consultation.doctorRefId.timeSlot}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-center  text-green-500 text-xl">
            ₹{consultation.fee}
          </span>
          <div className="ml-2 flex items-center h-[3px] justify-center bg-white w-[3px] rounded-full"></div>
          <form
            action={`/api/checkout_sessions/${consultation.priceId}`}
            method="POST"
            className="w-fit text-sm flex justify-center  items-center hover:text-gray-500 cursor-pointer"
          >
            <span className="pl-2">
              {" "}
              {!consultation.isAccepted ? (
                <button className=" w-full p-[2px] px-3 bg-yellow-600 rounded-sm text-white ">
                  <div className="flex items-center font-semibold">Accept</div>
                </button>
              ) : (
                <div className=" w-full p-[2px] px-3 bg-green-600 rounded-sm text-white">
                  <div className="flex items-center font-semibold">
                    In Queue
                  </div>
                </div>
              )}
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default OfferBox;
