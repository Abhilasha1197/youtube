import React, { useEffect, useState } from "react";
import Card from "./Card";
import { GOOGLE_API } from "../utils/constant";
import { Link } from "react-router-dom";

const CardsContainer = () => {
  const [videos, setVideos] = useState([]);
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
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <Card key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default CardsContainer;
