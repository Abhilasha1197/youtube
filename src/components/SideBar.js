import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";



const SideBar = () => {
 
  const isVisible = useSelector((store)=>store.slice.isOpenSideBar);

  if(!isVisible) return null;
  else
  return (
    <div className="p-5 w-40 shadow-md mr-5 h-auto relative-fixed">
      <div className="grid grid-flow-row" >
        <button className="m-2 hover:bg-gray-200">Home</button>
        <button  className="m-2  hover:bg-gray-200">Shorts</button>
        <button  className="m-2 hover:bg-gray-200">Subscriptions</button>
      </div>
      <hr/>
      <div className="grid grid-flow-row" >
        <button className="m-2 hover:bg-gray-200">Library</button>
        <button  className="m-2 hover:bg-gray-200">Your Videos</button>
        <button  className="m-2 hover:bg-gray-200">History</button>
        <button  className="m-2 hover:bg-gray-200">Watch Later</button>
        <button  className="m-2 hover:bg-gray-200">Liked Videos</button>
        <button  className="m-2 hover:bg-gray-200">Show More...</button>
      </div>
      <hr/>
      <h3 className="font-bold text-center">Subscriptions</h3>
      <div className="grid grid-flow-row" >
        <button className="m-2 hover:bg-gray-200">Movies</button>
        <button  className="m-2 hover:bg-gray-200">Gaming</button>
        <button  className="m-2 hover:bg-gray-200">Sports</button>
      </div>
    </div>
  );
};

export default SideBar;
