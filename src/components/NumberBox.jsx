export const NumberBox = ({ number, text, flip }) => {
  return (
    <div className="flex flex-col items-center mt-4">
      <div className="relative bg-transparent flex flex-col items-center justify-center rounded-lg w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 mt-4 ">
        <div className="rounded-t-lg rounded-b-lg bg-secondary w-full h-full"></div>

        <div className="text-2xl absolute text-white z-10 font-bold sm:text-5xl md:text-7xl font-kufam mt-1 sm:mt-3 md:mt-4">
          {number}
        </div>

        <div className="rounded-b-lg rounded-t-lg bg-primary w-full h-full"></div>

        <div
          className={`absolute w-full h-1/2 top-0 rounded-t-lg z-5 ${
            flip ? "animate-flip bg-primary" : "bg-transparent"
          }`}
        ></div>
      </div>
      <p className="text-sm mt-3 font-semibold text-white md:text-2xl ">
        {text}
      </p>
    </div>
  );
};
