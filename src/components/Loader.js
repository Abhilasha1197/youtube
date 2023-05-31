
import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-wrap">
      {Array(50)
        .fill("")
        .map((e) => (
          <div className="w-72 h-40 mr-3 mt-10 rounded-md bg-slate-500">
           </div>
        ))}
    </div>
  );
};

export default Loader;
