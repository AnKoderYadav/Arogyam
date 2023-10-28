import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Navbar = ({ isDoctor }) => {
  const router = useRouter();
  const handleSignOut = () => {
    signOut({ redirect: false });
    router.push("/login");
  };

  const basePath = isDoctor ? "/doctor/" : "/";

  return (
    <header className="sticky top-0 bg-lightMode-btn dark:bg-gray-800 w-100 px-8 md:px-auto">
      <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        <Link
          href="/feed"
          className="text-white md:order-1 flex items-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            />
          </svg>
          <span className="ml-2 text-2xl font-extrabold tracking-tight leading-tight">
            AROGYAM
          </span>
        </Link>
        <nav className="order-3 w-full md:w-auto md:order-2">
          <ul className="text-xl flex justify-around gap-4">
            <li className="md:px-2 md:py-2 text-white dark:text-white dark:hover:text-slate-400 hover:text-neutral-700">
              <Link href={basePath}>Home</Link>
            </li>
            <li className="md:px-2 md:py-2 text-white dark:text-white dark:hover:text-slate-400 hover:text-neutral-700">
              <Link href="/feed">Feed</Link>
            </li>
            <li className="md:px-2 md:py-2 text-white dark:text-white dark:hover:text-slate-400 hover:text-neutral-700">
              <Link href={`${basePath}profile`}>Profile</Link>
            </li>
            {isDoctor ? (
              <>
                <li className="md:px-2 md:py-2 text-white dark:text-white dark:hover:text-slate-400 hover:text-neutral-700">
                  <Link href="/doctor/consultation-status">Consult</Link>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </nav>

        <div className="order-2 md:order-3">
          <button
            className="px-4 py-2 hover:bg-cyan-700 dark:hover:bg-cyan-900 text-gray-50 rounded-md flex items-center gap-2"
            onClick={handleSignOut}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </header>
  );
};

//

export default Navbar;
