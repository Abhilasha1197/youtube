import React, { useEffect, useState } from "react";
import Card from "./Card";
import { GOOGLE_API } from "../utils/constant";

const CardsContainer = () => {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const data = await fetch(GOOGLE_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap ml-10">
      {
        videos.map((video)=>(
          <Card key={video.id}  info={video}/>
        ))
      }
    
    </div>
  );
};

export default CardsContainer;
