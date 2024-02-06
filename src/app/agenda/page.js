"use client";
import { useState } from 'react';
import AgendaLogo from "@/components/AgendaLogo";
import { Title } from "@/components/Title";
import { Timeline } from "@/components/Timeline";
import talksData from "@/talks/talks.json";

export default function Agenda() {
  const [activeDay, setActiveDay] = useState(9);

  const talksDay1 = talksData.filter(item => new Date(item.startHour).getDate() === 9);
  const talksDay2 = talksData.filter(item => new Date(item.startHour).getDate() === 10);
  return (
    <main>
     <Title logo={<svg aria-label="TechTon" className="fill-primary h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 376 116">
        <title>TechTon | Agenda </title>
        <desc>Logo de TechTon</desc>
        <AgendaLogo/>
      </svg>} />

      <div className="flex justify-center space-x-4 mb-6">
        <button 
          className={`px-4 py-2 rounded-md ${activeDay === 9 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveDay(9)}
        >
          Día 9 de Febrero
        </button>
        <button 
          className={`px-4 py-2 rounded-md ${activeDay === 10 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveDay(10)}
        >
          Día 10 de Febrero
        </button>
      </div>

      {activeDay === 9 && <Timeline data={talksDay1} />}
      {activeDay === 10 && <Timeline data={talksDay2} />}
    </main>
  )
}