'use client'
import { useState } from 'react'
import AgendaLogo from '@/components/AgendaLogo'
import { Button } from '@/components/Button/Button.js'
import { Title } from '@/components/Title'
import { Timeline } from '@/components/Timeline'
import talksData from '@/talks/talks.json'

export default function Agenda() {
  const [activeDay, setActiveDay] = useState(9)

  const talksDay1 = talksData.filter(
    (item) => new Date(item.startHour).getDate() === 9
  )
  const talksDay2 = talksData.filter(
    (item) => new Date(item.startHour).getDate() === 10
  )
  return (
    <main className="px-8">
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
      <div className="flex justify-center space-x-4 mb-6">
        <Button
          id="day9"
          variant={`${activeDay === 9 ? 'primary' : 'tertiary'}`}
          onClick={() => setActiveDay(9)}
        >
          Día 9 de Febrero
        </Button>
        <Button
          id="day10"
          variant={`${activeDay === 10 ? 'primary' : 'tertiary'}`}
          onClick={() => setActiveDay(10)}
        >
          Día 10 de Febrero
        </Button>
      </div>

      {activeDay === 9 && <Timeline data={talksDay1} />}
      {activeDay === 10 && <Timeline data={talksDay2} />}
    </main>
  )
}
