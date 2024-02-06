import AgendaLogo from "@/components/AgendaLogo";
import { Title } from "@/components/Title";

export default function Donar() {
  return (
    <main>
     <Title logo={<svg aria-label="TechTon" className="fill-primary h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 376 116">
        <title>TechTon | Agenda </title>
        <desc>Logo de TechTon</desc>
        <AgendaLogo/>
      </svg>} />
    </main>
  )
}