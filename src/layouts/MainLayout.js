import Navbar from "@/components/Navbar";
import React from "react";

const MainLayout = ({ children, user }) => {
  return (
    <>
      <div className="w-screen h-screen overflow-hidden flex flex-col">
        <Navbar isDoctor={user.isDoctor} key={1} />
        {children}
      </div>
    </>
  );
};

export default MainLayout;
