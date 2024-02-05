import { CountdownTimer } from "@/components/CountdownTimer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>TechTon</h1>
      <CountdownTimer />
    </main>
  );
}
