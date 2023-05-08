import React, { useEffect } from "react";
import Card from "./Card";
import { GOOGLE_API } from "../utils/constant";

const CardsContainer = () => {
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const data = await fetch(GOOGLE_API);
    const json = await data.json();
    console.log(json);
  };
  return (
    <div className="flex flex-wrap">
      <Card
        url= "https://i.ytimg.com/vi/aF_H_kEF2x4/hqdefault.jpg"
        publishedAt="2023-05-06T13:59:52Z"
        likeCount="80245"
        channelTitle="Dude Perfect"
        title="Craziest ways to catch a fish! (No Poles Allowed)"
      />
    </div>
  );
};

export default CardsContainer;
