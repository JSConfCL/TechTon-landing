"use client";
import { useState } from "react";
import AgendaLogo from "@/components/AgendaLogo";
import { Button } from "@/components/Button/Button.js";
import { Title } from "@/components/Title";
import { Timeline } from "@/components/Timeline";
import talksData from "@/talks/talks.json";
import { AnimatePresence, motion } from "framer-motion";

export default function Agenda() {
  const [activeDay, setActiveDay] = useState(9);
  const talksDay1 = talksData.filter(
    (item) => new Date(item.startHour).getDate() === 9,
  );
  const talksDay2 = talksData.filter(
    (item) => new Date(item.startHour).getDate() === 10,
  );
  return (
    <div className="flex flex-col w-full relative justify-center items-center">
      <section className="lg:px-64 pt-10 ">
        <Title
          logo={
            <svg
              aria-label="TechTon"
              className="fill-primary h-32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>TechTon | Agenda </title>
              <desc>Logo de TechTon</desc>
              <AgendaLogo />
            </svg>
          }
        />
      </section>
      <div className="sticky top-0 pt-6 pb-10 w-full h-fit z-20">
        <div className="relative z-10 flex justify-center gap-4">
          <Button
            id="day9"
            variant={`${activeDay === 9 ? "primary" : "tertiary"}`}
            onClick={() => setActiveDay(9)}
          >
            Viernes 9 de Febrero
          </Button>
          <Button
            id="day10"
            variant={`${activeDay === 10 ? "primary" : "tertiary"}`}
            onClick={() => setActiveDay(10)}
          >
            Sábado 10 de Febrero
          </Button>
        </div>
        <div
          className="absolute  top-0 bottom-0 left-0 right-0 z-0"
          style={{
            backgroundImage:
              "-webkit-gradient(linear, left top, left bottom, color-stop(1, rgba(35, 33, 33, 0)), color-stop(0, rgba(35, 33, 33, 1)))",
          }}
        ></div>
      </div>
      <AnimatePresence>
        {activeDay === 9 && (
          <motion.div
            key="day9"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Timeline data={talksDay1} />
          </motion.div>
        )}
        {activeDay === 10 && (
          <motion.div
            key="day10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Timeline data={talksDay2} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
