import React from "react";
import TrendingTags from "./TrendingTags";
import CardsContainer from "./CardsContainer";

const MainContainer = () => {
  return (
    <div className="grid grid-flow-row col-span-9 ml-10">
      <TrendingTags />
      <CardsContainer />
    </div>
  );
};

export default MainContainer;
