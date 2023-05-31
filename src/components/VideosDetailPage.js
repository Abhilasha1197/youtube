import React from "react";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";

const VideosDetailPage = () => {
  const [searchParams] = useSearchParams();
  return (
    <div className="flex flex-col">
    <div className="px-24">
      <iframe
        width="850"
        height="500"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
    
    <CommentContainer/>
    </div>
  );
};

export default VideosDetailPage;
