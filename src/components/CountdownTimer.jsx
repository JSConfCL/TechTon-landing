"use client";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { NumberBox } from "./NumberBox";
import { Button } from "./Button";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export const CountdownTimer = () => {
  // To fix error: Text content does not match server-rendered HTML
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const fechaString = "2024-02-09T13:00:00-03:00";
  const fecha = new Date(fechaString);

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
    formatted,
  }) => {
    let daysFlip = false;
    let hoursFlip = false;
    let minutesFlip = false;
    let secondsFlip = true;

    if (seconds <= 0 && minutes <= 0 && hours <= 0 && days <= 0) {
      // Reset all flips when the countdown reaches zero
      daysFlip = hoursFlip = minutesFlip = secondsFlip = false;
    }

    if (seconds === 0) {
      if (minutes > 0) {
        seconds = 59;
        minutesFlip = true;
      }
    }

    if (minutes === 0) {
      if (hours > 0) {
        minutes = 59;
        hoursFlip = true;
      }
    }

    if (hours === 0) {
      if (days > 0) {
        hours = 23;
        daysFlip = true;
      }
    }

    if (completed) {
      return (
        <Button
          href="https://www.twitch.tv/javascriptchile"
          target="_blank"
          variant="primary"
          classnames="bg-twitch text-white flex items-center gap-3 hover:bg-[#a675f4] hover:scale-105 duration-300 mt-10 mb-3 !text-3xl !px-10"
          id="twitch-mb-btn"
          setDefaultMinWidth={false}
        >
          <Image
            src="./twitch_logo.svg"
            alt="TechTon Logo"
            width={50}
            height={50}
          />
          Ver stream
        </Button>
      );
    } else {
      return (
        <div className="flex gap-6">
          <NumberBox number={formatted.days} text={"días"} flip={daysFlip} />
          <NumberBox number={formatted.hours} text={"horas"} flip={hoursFlip} />
          <NumberBox
            number={formatted.minutes}
            text={"minutos"}
            flip={minutesFlip}
          />
          <NumberBox
            number={formatted.seconds}
            text={"segundos"}
            flip={secondsFlip}
          />
        </div>
      );
    }
  };
  return (
    <div className="h-[148px] sm:h-[180px] md:h-[224px] flex justify-center">
      <AnimatePresence mode="popLayout">
        {isClient && (
          <motion.div
            key="countdown"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0, y: 4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 1.1 }}
          >
            <Countdown date={fecha} renderer={renderer} zeroPadTime={2} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
