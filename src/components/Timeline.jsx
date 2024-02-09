import Image from "next/image";
import { useScroll, useAnimation, useInView, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Card = ({
  item,
  leftSide,
  status, // current, future, past
}) => {
  const timeFormatter = new Intl.DateTimeFormat("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const startTime = timeFormatter.format(new Date(item.startHour));
  const endTime = timeFormatter.format(new Date(item.endHour));

  return (
    <motion.li
      onClick={(e) => {
        e.target.scrollIntoView({ behavior: "smooth", block: "center" });
      }}
      className={cn(
        "w-[90vw] lg:w-[420px] min-h-[160px] h-fit relative flex flex-col mx-4 p-5 gap-5 bg-[#3F3F3F] rounded-lg shadow-xl cursor-pointer self-start",
        {
          "md:self-end": leftSide,
          "md:self-start": !leftSide,
          "opacity-75": status === "past",
          "bg-[#9146FF] text-white": status === "current",
          "md:text-right": leftSide,
        },
        {
          "": true,
        },
      )}
      initial={{
        opacity: 0.5,
        scale: 0.8,
        y: leftSide ? -10 : 10,
      }}
      margin="100px"
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
    >
      <time className="text-sm font-light leading-none opacity-60">
        {startTime} - {endTime}
      </time>
      <div
        className={cn("flex flex-row gap-4 items-center", {
          "md:flex-row-reverse": leftSide,
        })}
      >
        <span className="p-[2px] flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full -start-6">
          <Image
            className="rounded-full aspect-square w-full h-full"
            src={item.image}
            alt={item.name}
            // fill
            width="48"
            height="48"
          />
        </span>
        <div className={"flex flex-col justify-center"}>
          <span className="text-lg font-bold">{item.name}</span>
          {item.community !== "ninguna" && (
            <p className="text-sm font-bold text-gray-400">
              <a href={item.communityUrl} target="_blank">
                {item.community}
              </a>
            </p>
          )}
        </div>
      </div>
      <p className="text-base font-normal italic">
        {'"'}
        {item.topic}
        {'"'}
      </p>
    </motion.li>
  );
};

export function Timeline({ data }) {
  return (
    <motion.div className="flex flex-col w-full items-start md:items-center pb-24">
      <ol className="flex justify-center items-start -left-[calc(50vw_-8px)] md:left-0 md:items-center flex-col gap-4 relative w-1 py-10 pb-24">
        <div className="w-[5px] rounded-xl h-full bg-white absolute top-0 md:left-1/2 lg:transform lg:-translate-x-1/2" />
        {data.map((item, index) => {
          return (
            <Card
              key={index}
              item={item}
              leftSide={(index + 1) % 2 === 0}
              status={"past"}
            />
          );
        })}
      </ol>
    </motion.div>
  );
}
