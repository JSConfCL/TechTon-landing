import { CountdownTimer } from "@/components/CountdownTimer";
import CounterSubtitle from "@/components/counterSubtitle";
import { Button } from "../components/Button/Button.js";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-between">
      <h1>TechTon</h1>
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
