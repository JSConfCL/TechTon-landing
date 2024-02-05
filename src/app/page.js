import { CountdownTimer } from "@/components/CountdownTimer";
import CounterSubtitle from "@/components/counterSubtitle";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-between">
      <h1>TechTon</h1>
      <CountdownTimer />
      <CounterSubtitle />
    </section>
  );
}
