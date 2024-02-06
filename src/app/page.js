import Logo from "@/components/Logo.jsx";
import { Button } from "../components/Button/Button.js";
import { Subtitle } from "../components/Subtitle/Subtitle.js";
import { Title } from "../components/Title";
import { CountdownTimer } from "@/components/CountdownTimer";
import { CounterSubtitle } from "@/components/CounterSubtitle.jsx";
import { TwitchButton } from "@/components/TwitchButton.jsx";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-between mx-auto md:w-4/5 lg:w-3/4 xl:w-2/3">
      <Title logo={<svg aria-label="TechTon" className="fill-primary h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 376 105">
        <title>TechTon</title>
        <desc>Logo de TechTon</desc>
      <Logo/>
      </svg>} />
      <Subtitle />
      <CountdownTimer />
      <CounterSubtitle />

      <div className="flex gap-12">
        <Button
          id="button-donate"
          href="https://link.mercadopago.cl/jscl"
          target="_blank"
          variant="primary"
        >
          Donar
        </Button>
        <Button id="button-info" href="agenda" variant="secondary">
          Agenda
        </Button>
      </div>
      <div className="lg:hidden pt-10">
        <TwitchButton />
      </div>
    </section>
  );
}
