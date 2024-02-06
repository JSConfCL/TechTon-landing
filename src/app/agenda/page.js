import AgendaLogo from "@/components/AgendaLogo";
import { Title } from "@/components/Title";
import { Timeline } from "@/components/Timeline";
import talksData from "@/talks/talks.json";

export default function Agenda() {
  const talksDay1 = talksData.filter(item => new Date(item.startHour).getDate() === 9);
  const talksDay2 = talksData.filter(item => new Date(item.startHour).getDate() === 10);
  return (
    <main>
     <Title logo={<svg aria-label="TechTon" className="fill-primary h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 376 116">
        <title>TechTon | Agenda </title>
        <desc>Logo de TechTon</desc>
        <AgendaLogo/>
      </svg>} />

        <Timeline data={talksDay1} />
        <Timeline data={talksDay2} />
    </main>
  )
}