import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
import React from "react";

const MainLayout = ({ children }) => {
  const { data: session } = useSession();
  return (
    <>
      <div className="w-screen h-screen overflow-hidden flex flex-col">
        <Navbar isDoctor={session?.user.isDoctor} key={1} />
        {children}
      </div>
    </>
  );
};

export default MainLayout;
