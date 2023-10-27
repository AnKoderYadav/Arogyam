import React, { useState } from "react";
import axios from "axios";
import Users from "@/models/userModel";
import dbConnect from "@/dbconnect";
import Posts from "@/models/postModel";
import Consultations from "@/models/consultModel";
import MainLayout from "@/layouts/MainLayout";
import ConsultationOffer from "@/components/ConsultationOffer";
import CurrentQuery from "@/components/CurrentQuery";
import TrendingBox from "@/components/TrendingBox";
import Doctors from "@/models/doctorModel";
import Loader from "@/components/Loader";
import { getSession } from "next-auth/react";
import { useFormik } from "formik";
import { BsSortDown, BsSortDownAlt } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { toastOptions } from "@/lib/lib";
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
  let res = await Users.findById(session.user.id);
  const user = JSON.parse(JSON.stringify(res));

  //all posts by current user
  res = await Posts.find({ patientId: user._id }).sort({
    updatedAt: -1,
  });
  const posts = res.map((doc) => {
    const post = JSON.parse(JSON.stringify(doc));
    return post;
  });

  const Doctor = await Doctors.findOne({ email: user.email });

  let consultations = [];
  // all consultation offers on current post

  if (posts[0]) {
    res = await Consultations.find({
      postId: posts[0]._id,
    })
      .populate("doctorRefId")
      .sort({
        updatedAt: -1,
      });

    consultations = res.map((doc) => {
      const consultation = JSON.parse(JSON.stringify(doc));
      return consultation;
    });
  }

  return {
    props: { user, posts, consultations },
  };
}

const Home = ({ user, posts, consultations }) => {
  const [image, setImage] = useState(null);
  const [sorted, setSorted] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
    if (isLoading) setTimeout(() => setIsLoading(false), 2000);
    if (image) setImage(null);
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

    const { description, severity } = values;
    const res = await axios.post("/api/user/post", {
      patientId: user._id,
      description,
      severity,
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
      severity: "Low",
    },
    onSubmit,
  });

  return (
    <>
      <MainLayout>
        <main className="w-full h-full flex justify-center items-start overflow-x-hidden p-5 gap-1 text-lightMode-txt dark:text-darkMode-txt bg-lightMode-background dark:bg-darkMode-background">
          <section className="max-w-3xl w-full flex flex-col gap-5 p-5 pt-0">
            {posts[0] && !posts[0].solved ? (
              <>
                <CurrentQuery
                  post={posts[0]}
                  canDelete={consultations.length ? false : true}
                  refreshData={refreshData}
                  user={user}
                />
                <div className="w-full flex gap-4 justify-between  items-center ">
                  <button
                    onClick={() => {
                      setSorted(!sorted);
                      consultations.reverse();
                    }}
                    className="border-[1px] border-neutral-400 dark:border-neutral-700  p-[1px] px-1 rounded-md cursor-pointer  tracking-tight leading-tight flex flex-row items-center gap-[6px]"
                  >
                    Sort by
                    <span className="cursor-pointer font-bold">
                      {sorted ? <BsSortDownAlt /> : <BsSortDown />}
                    </span>
                  </button>
                  <div className=" tracking-tight leading-tight mr-3">
                    {consultations.length + " "}offers
                  </div>
                </div>

                <div className="w-full flex flex-row flex-wrap gap-2">
                  {consultations.map((consultation) => {
                    return (
                      <ConsultationOffer
                        consultation={consultation}
                        key={consultation._id}
                        hide={false}
                      />
                    );
                  })}
                </div>
              </>
            ) : (
              <article className="w-full flex items-center flex-col text-lightMode-txt dark:text-darkMode-txt bg-lightMode-component dark:bg-darkMode-component shadow-md p-4 gap-5 rounded-lg">
                <div className="flex content-center items-center w-full">
                  <div className="w-full flex flex-row content-center items-center">
                    <img
                      className="w-[3rem] h-[3rem] rounded-full"
                      src={user.profile}
                      alt="img"
                    />
                    <div className=" ml-4 flex flex-col">
                      <span className=" text-xl ">Welcome to Arogyam!</span>
                      <span>{user.fullname}</span>
                    </div>
                  </div>
                </div>
                <form
                  className="w-full flex flex-col gap-2 text-sm items-center"
                  onSubmit={formik.handleSubmit}
                >
                  <textarea
                    rows="8"
                    placeholder="Please, describe your health"
                    className="bg-transparent w-full focus:outline-none border border-stone-400 rounded-md p-4"
                    {...formik.getFieldProps("description")}
                  />

                  <div className="w-full flex justify-between items-center px-2 gap-2">
                    <input
                      type="file"
                      className="w-48"
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                      }}
                    />

                    <span className="flex justify-center items-center gap-3">
                      <label
                        className="block uppercase tracking-wide text-xs font-semibold"
                        htmlFor="grid-state"
                      >
                        Severity
                      </label>
                      <select
                        className="appearance-none p-2 block  bg-lightMode-btn dark:bg-darkMode-btn hover:bg-cyan-600 rounded leading-tight placeholder:text-white text-white focus:outline-none focus:bg-neutral-300 focus:text-black dark:focus:bg-neutral-800 dark:focus:text-white"
                        id="grid-state"
                        {...formik.getFieldProps("severity")}
                      >
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                      </select>
                    </span>

                    <button
                      className="font-medium bg-lightMode-btn dark:bg-darkMode-btn hover:bg-cyan-600 disabled:text-white disabled:bg-black/25 dark:disabled:text-black/40 dark:disabled:bg-white/75 disabled:cursor-not-allowed text-white rounded-md px-12 p-2"
                      type="submit"
                      disabled={!formik.values.description.trim()}
                    >
                      {isLoading ? <Loader /> : "Post"}
                    </button>
                  </div>
                </form>
              </article>
            )}
          </section>
          <aside className="lg:flex md:flex sticky top-0 hidden" id="Trending">
            <TrendingBox key={1} />
          </aside>
        </main>
      </MainLayout>
      <ToastContainer />
    </>
  );
};

export default Home;
