import Logo from "@/components/Logo.jsx";
import { Button } from "../components/Button/Button.js";
import { Subtitle } from "../components/Subtitle/Subtitle.js";
import { Title } from "../components/Title";
import { CountdownTimer } from "@/components/CountdownTimer";
import { CounterSubtitle } from "@/components/CounterSubtitle.jsx";
import { TwitchButton } from "@/components/TwitchButton.jsx";

import { getMetaData, getViewports } from "@/lib/metadata";

export const generateMetadata = () => getMetaData({});

export const generateViewport = () => getViewports();

export default function Home() {
  return (
    <section className="flex flex-col items-center gap-3 justify-between mx-auto md:w-4/5 lg:w-3/5 xl:w-2/3">
      <Title
        logo={
          <svg
            aria-label="TechTon"
            className="fill-primary h-32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>TechTon</title>
            <desc>Logo de TechTon</desc>
            <Logo />
          </svg>
        }
      />
      <Subtitle />
      <CountdownTimer />
      <CounterSubtitle />
      <div className="flex w-full gap-3 px-5 3xs:w-auto 3xs:gap-8 flex-col 3xs:flex-row">
        <Button
          id="button-donate"
          href="/donar"
          variant="primary"
          classnames="py-3 md:py-3.5"
        >
          Ir a donar
        </Button>
        <Button
          id="button-info"
          href="agenda"
          variant="secondary"
          classnames="py-3 md:py-3.5"
        >
          Agenda
        </Button>
      </div>
      <div className="lg:hidden pt-10">
        <TwitchButton />
      </div>
    </section>
  );
}
