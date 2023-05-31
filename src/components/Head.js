import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../utils/sideBarSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constant";
import store from "../utils/store";
import { cachedResult } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isSuggestions, setIsSuggestions] = useState(false);

  const cacheSearch = useSelector(store => store.search)

  useEffect(()=>{
   //make api call at each key strok but decline api call if time between two consequent key stroke is less than 200ms.
  const timer = setTimeout(() =>{
    if(cacheSearch[searchQuery]){
      setSuggestions(cacheSearch[searchQuery]); 
    }else{
      getSearchSuggestions()
    }
  }
  ,200)

  /*at every key stroke a new timer is created and if time gap is less than 200ms then in return() the clearTimeout is 
  called and timer is destryed b4 api is called*/
  return () =>{
    clearTimeout(timer)
  }
  },[searchQuery])


  const getSearchSuggestions = async () =>{
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);

    dispatch(
      cachedResult({
      [searchQuery] : json[1]
    }
    ))
  }
  const dispatch = useDispatch();

  const toggleSideBarHandler = () => {
    dispatch(toggleSideBar());
  };
  return (
    <div className="sticky top-0 bg-zinc-50 grid grid-flow-col p-3 shadow-md">
      <div className="flex col-span-2">
        <img
          onClick={() => toggleSideBarHandler()}
          className="h-10"
          alt="ham-icon"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
        />
        <Link to="/">
        
          <img
            className="h-10"
            alt="logo"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          />
        </Link>
      </div>
      <div className="col-span-8 px-10">
        <div>
          
        <input
          className="px-2 w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          placeholder=" Search"
          value={searchQuery}
          onChange={(e)=> setSearchQuery(e.target.value)}
          onFocus={()=>setIsSuggestions(true)}
          onBlur={()=>setIsSuggestions(false)}
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
        </div>
       {isSuggestions && (
        <div className="fixed bg-white py-2 px-2 w-96 rounded-lg shadow-lg">
          <ul>
            {
              suggestions.map((suggestion)=>(
                <li key ={suggestion} className="py-1 hover:bg-gray-100">🔍 {suggestion}</li>
              ))
            }
           </ul>
        </div>)}
      </div>
      <div className="flex col-span-2">
        <img
          className="h-10 mx-3"
          alt="create"
          src="https://cdn-icons-png.flaticon.com/512/4083/4083832.png"
        />
        <img
          className="h-10 mx-3"
          alt="notification"
          src="https://icon-library.com/images/youtube-bell-icon-png/youtube-bell-icon-png-15.jpg"
        />
        <img
          className="h-10 mx-3"
          alt="user"
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        />
      </div>
    </div>
  );
};

export default Head;
