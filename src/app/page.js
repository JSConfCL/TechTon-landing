import Image from "next/image";
import { Button } from '../components/Button/Button.js';
import { Subtitle } from '../components/Subtitle/Subtitle.js';
import { Title } from '../components/Title';
import { CountdownTimer } from "@/components/CountdownTimer";
import CounterSubtitle from "@/components/counterSubtitle";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-between">
      <Title />
      <Subtitle />
      <CountdownTimer />
      <CounterSubtitle />

      <div className="flex gap-12">
        <Button id="boton-donate" href="#" variant="primary">
          Donar
        </Button>
        <Button id="boton-info" href="#" variant="secondary">
          Saber más
        </Button>
      </div>
    </section>
  );
}
