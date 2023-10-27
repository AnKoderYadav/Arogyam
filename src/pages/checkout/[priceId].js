import React, { useEffect, useState } from "react";
import axios from "axios";
import dbConnect from "@/dbconnect";
import Consultations from "@/models/consultModel";
import MainLayout from "@/layouts/MainLayout";
import OfferBox from "@/components/ConsultationOffer";
import { getSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastOptions } from "@/lib/lib";
import { loadStripe } from "@stripe/stripe-js";

const publishableKey = `${process.env.STRIPE_PUBLISHABLE_KEY}`;
loadStripe(publishableKey);

export async function getServerSideProps({ req, params }) {
  const session = await getSession({ req });
  if (!session?.user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  dbConnect().catch((error) => console.log(error));

  const res = await Consultations.findOne({ priceId: params.priceId }).populate(
    "doctorRefId"
  );

  const consultation = JSON.parse(JSON.stringify(res));

  return {
    props: { consultation },
  };
}

const Home = ({ consultation }) => {
  const [isAccepted, setIsAccepted] = useState(consultation.isAccepted);
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
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
      setIsAccepted(true);
    }

    if (query.get("canceled")) {
      toast.error("Order Canceled!", toastOptions);
    }
  }, []);
  return (
    <>
      <MainLayout>
        <div className="w-full h-full flex flex-col justify-evenly items-center overflow-x-hidden p-5 gap-2 text-lightMode-txt dark:text-darkMode-txt bg-lightMode-background dark:bg-darkMode-background">
          <div className="p-4 w-2/3 border-b border-white">
            <h1 className="font-bold text-2xl">
              Checkout{" "}
              <span className="text-cyan-800 dark:text-cyan-600">
                Consultation
              </span>
            </h1>
          </div>

          <OfferBox consultation={consultation} hide={true} />
          <form
            action={`/api/checkout_sessions/${consultation.priceId}`}
            method="POST"
            className="w-fit text-sm flex justify-center  items-center hover:text-gray-500 cursor-pointer"
          >
            <span className="pl-2">
              {" "}
              {!isAccepted ? (
                <button
                  className="w-full p-2 px-4 bg-yellow-600 rounded-sm text-white"
                  type="submit"
                >
                  <div className="flex items-center font-semibold text-xl">
                    Proceed To Pay
                  </div>
                </button>
              ) : (
                <div className=" w-full p-2 px-4 bg-green-600 rounded-sm text-white">
                  <div className="flex items-center font-semibold">
                    Consultation Placed
                  </div>
                </div>
              )}
            </span>
          </form>
        </div>
      </MainLayout>
      <ToastContainer />
    </>
  );
};

export default Home;
