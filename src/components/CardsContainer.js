import React, { useEffect, useState } from "react";
import Card from "./Card";
import { GOOGLE_API } from "../utils/constant";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const CardsContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });
  
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const data = await fetch(GOOGLE_API);
    const json = await data.json();

    setVideos(json.items);
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap ml-10">
          {videos.map((video) => (
            <Link to={"/watch?v=" + video.id}>
              <Card key={video.id} info={video} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default CardsContainer;
