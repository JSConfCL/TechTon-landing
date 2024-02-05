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
      daysFlip = false;
      hoursFlip = false;
      minutesFlip = false;
      secondsFlip = false;
    }

    if (seconds == 0) {
      if (minutes != 0) {
        seconds = 59;
      }

      secondsFlip = false;
      minutesFlip = true;
    }
    if (minutes == 0) {
      if (hours != 0) {
        minutes = 59;
      }

      minutesFlip = false;
      hoursFlip = true;
    }

    if (hours == 0) {
      hoursFlip = false;
      if (days != 0) {
        daysFlip = true;
      }
    }

    if (completed) {
      return "Countdown complete";
    } else {
      return (
        <div className="flex gap-2">
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
        <Countdown date={fecha} renderer={renderer} zeroPadTime={2} />
      ) : (
        ""
      )}
    </>
  );
};
