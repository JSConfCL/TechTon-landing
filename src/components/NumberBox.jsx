import React from "react";

export const NumberBox = ({ number, text, flip }) => {
  return (
    <div className="flex flex-col items-center mt-4 px-2">
      <div className=" relative bg-transparent flex flex-col items-center justify-center rounded-lg w-32 h-32 text-2xl md:text-4xl mt-4 ">
        <div className="rounded-t-lg rounded-b-lg bg-secondary w-full h-full"></div>

        <div className="text-5xl absolute text-white z-10 font-bold md:text-7xl ">
          {number}
        </div>

        <div className="rounded-b-lg rounded-t-lg bg-primary w-full h-full"></div>

        <div
          className={`absolute w-full h-1/2 top-0 rounded-t-lg z-5 ${
            flip ? "animate-flip bg-primary" : "bg-transparent"
          }`}
        ></div>
      </div>
      <p className="text-lg mt-3 font-semibold text-white md:text-2xl ">
        {text}
      </p>
    </div>
  );
};
