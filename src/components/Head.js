import React from "react";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../utils/sideBarSlice";

const Head = () => {

  const dispatch = useDispatch()

  const toggleSideBarHandler = ()=>{
       dispatch(toggleSideBar())
  }
  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
      <div className="flex col-span-2">
        <img onClick={()=>toggleSideBarHandler()}
          className="h-10"
          alt="ham-icon"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
        />
        <img
          className="h-10"
          alt="logo"
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
        />
      </div>
      <div className="flex col-span-8">
        <input className="h-10 w-1/2 rounded-s-full" type="text" placeholder="   Search" />
       <button className="outline outline-1 rounded-e-full w-10 bg-gray-100">🔍</button> 
      
      </div>
      <div className="flex col-span-2">
        <img
          className="h-10"
          alt="user"
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        />
       
      
      </div>
    </div>
  );
};

export default Head;
