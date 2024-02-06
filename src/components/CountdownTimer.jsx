"use client";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { NumberBox } from "./NumberBox";

export const CountdownTimer = () => {
  // To fix error: Text content does not match server-rendered HTML
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const fechaString = "2024-02-09T14:00:00-03:00";
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
      // TODO: Remplazar con un layout apropiado al completar al terminar el countdown
      return "Countdown complete";
    } else {
      return (
        <div className="flex gap-3">
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
    <>
      {isClient ? (
        <div className="pb-5">
          <Countdown date={fecha} renderer={renderer} zeroPadTime={2} />
        </div>
      ) : (
        <div className="transform py-14 h-[240px] sm:h-[272px] md:h-[316px] flex justify-center items-center">
          <div className="border-t-transparent border-solid animate-spin rounded-full border-primary border-8 h-24 w-24"></div>
        </div>
      )}
    </>
  );
};
