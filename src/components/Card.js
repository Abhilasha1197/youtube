import React from "react";

const Card = ({ info }) =>  {
const { snippet, statistics } = info;

  return (
    <div className="w-72 mr-3 mt-10 shadow-mg">
      <img
        className="rounded-lg content-center"
        src={snippet.thumbnails.medium.url}
        alt="thumbnail"
      />
      <p className="font-bold">{snippet.title}</p>
      <p className="text-slate-600">{snippet.channelTitle}</p>
      <span className="text-slate-600">{Math.trunc((statistics.viewCount)/1000)}K</span> |
       <span className="text-slate-600">{snippet.publishedAt}</span>
    </div>
  );
};

export default Card;
