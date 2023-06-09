import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="grid grid-flow-col p-5">
      <SideBar />
      <MainContainer />
    </div>
  );
};

export default Body;
