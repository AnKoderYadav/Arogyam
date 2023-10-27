import React, { useState } from "react";
import dbConnect from "@/dbconnect";
import Users from "@/models/userModel";
import MainLayout from "@/layouts/MainLayout";
import BasicInformation from "@/components/BasicInformation";
import MoreInformation from "@/components/MoreInformation";
import { getSession } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function getServerSideProps({ req }) {
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

  //current user
  const res = await Users.findById(session.user.id);
  const doctor = JSON.parse(JSON.stringify(res));

  return {
    props: { session, doctor },
  };
}

const DocProfile = ({ doctor }) => {
  const [info, setInfo] = useState("Basic");
  const [image, setImage] = useState("");
  const [createObjectURL, setCreateObjectURL] = useState(doctor.profile);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  return (
    <>
      <MainLayout>
        <main className="bg-lightMode-background dark:bg-darkMode-background flex flex-wrap flex-row items-start justify-center font-sans h-full text-lightMode-txt dark:text-darkMode-txt overflow-scroll">
          {/* Image Section */}
          <section className="flex flex-col lg:w-[15rem] w-[20rem] md:w-[15rem] m-4 mx-0">
            <div className=" p-5 mb-0 bg-lightMode-componentHead pl-5  rounded-t-md pb-1 w-auto  dark:bg-neutral-800">
              <h1 className="font-bold text-2xl">
                Your{" "}
                <span className="text-cyan-800 dark:text-cyan-600">
                  Profile
                </span>
              </h1>
            </div>
            <div className=" mt-0  rounded-md border-slate-950 flex flex-col bg-lightMode-component dark:bg-darkMode-component items-center justify-center text-lightMode-txt dark:text-darkMode-txt w-auto rounded-t-none p-5">
              <div className=" flex justify-center mb-3 p-3 pb-0">
                <img
                  className="rounded-full  border-[1px] w-40 h-40 border-slate-600"
                  src={createObjectURL}
                  alt="Profile photo"
                />
              </div>
              <div className="font-bold m-4 mt-0 text-2xl">
                {doctor.fullname}
              </div>

              <div>
                <div className="relative text-sm p-4 py-2 w-40 font-medium text-white bg-lightMode-btn dark:bg-cyan-700 rounded-md ">
                  <input
                    id="photo"
                    type="file"
                    className="absolute left-0 w-40 h-full opacity-0 hover:cursor-pointer"
                    onChange={uploadToClient}
                  />
                  Upload New Photo
                </div>
              </div>
            </div>
          </section>

          {/* Details Section */}
          <section className="m-4 mb-0 rounded-md bg-lightMode-component dark:bg-darkMode-component dark:text-darkMode-txt text-lightMode-txt w-1/3 min-w-[20rem] h-[100%] md:h-[95%] lg:h-[95%] overflow-y-scroll scrollbar-hide">
            <div className="p-5 bg-lightMode-componentHead dark:bg-neutral-800 rounded-t-md pb-1">
              <h1 className="font-bold text-2xl">
                Edit{" "}
                <span className="text-cyan-800 dark:text-cyan-600">
                  Profile
                </span>
              </h1>
              <div className="flex flex-row justify-around items-center mt-2">
                <button
                  className="w-full h-full active:underline rounded-sm"
                  onClick={() => setInfo("Basic")}
                >
                  Basic Info
                </button>
                <div className="w-[1px] bg-black dark:bg-white h-[15px]"></div>
                <button
                  className="w-full h-full active:underline rounded-sm"
                  onClick={() => setInfo("More")}
                >
                  More Info
                </button>
              </div>
            </div>
            <div className="p-8 pb-0 flex justify-center">
              {info === "Basic" ? (
                <BasicInformation doctor={doctor} image={image} />
              ) : (
                <MoreInformation doctor={doctor} />
              )}
            </div>
          </section>
        </main>
      </MainLayout>
      <ToastContainer />
    </>
  );
};

export default DocProfile;
