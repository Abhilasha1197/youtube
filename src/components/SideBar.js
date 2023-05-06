import React from "react";

const SideBar = () => {
  return (
    <div className="grid grid-flow-row col-span-1 shadow-md mr-5">
      <div className="grid grid-flow-row" >
        <button className="m-2">Home</button>
        <button  className="m-2">Shorts</button>
        <button  className="m-2">Subscriptions</button>
      </div>
      <hr/>
      <div className="grid grid-flow-row" >
        <button className="m-2">Library</button>
        <button  className="m-2">Your Videos</button>
        <button  className="m-2">History</button>
        <button  className="m-2">Watch Later</button>
        <button  className="m-2">Liked Videos</button>
        <button  className="m-2">Show More...</button>
      </div>
      <hr/>
      <h3 className="font-bold text-center">Subscriptions</h3>
      <div className="grid grid-flow-row" >
        <button className="m-2">Movies</button>
        <button  className="m-2">Gaming</button>
        <button  className="m-2">Sports</button>
      </div>
    </div>
  );
};

export default SideBar;
