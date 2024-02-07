import { Button } from "@/components/Button";
import { DonarSubtitulo } from "@/components/DonarSubtitulo";
import Logo from "@/components/Logo";
import { Title } from "@/components/Title";
import Image from "next/image";

export default function Donar() {
  return (
    <section>
      <Title
        logo={
          <svg
            aria-label="TechTon"
            className="fill-primary h-32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 376 116"
          >
            <title>TechTon | Agenda </title>
            <desc>Logo de TechTon</desc>
            <Logo height={"80"} />
          </svg>
        }
      />
      <div className="xl:w-5/6 2xl:w-4/6 xl:gap-10 xl:m-auto xl:pb-40 xl:pt-20 flex flex-col xl:flex-row items-center space-around px-10 lg:px-0">
        <div className="py-10 md:space-y-10 space-y-5 flex-1">
          <div className="font-bold text-center xl:text-left">
            <h2 className="text-6xl">Gracias</h2>
            <p className="text-2xl lg:text-3xl">
              por <span className="text-primary">sumarte a donar</span> dinero
              para esta causa.
            </p>
          </div>
          <DonarSubtitulo />
          <div className="flex flex-col gap-5 pt-4 mx-10 sm:flex-row justify-center xl:justify-start md:mx-0 md:gap-10">
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
        </div>
        <div className="space-y-10 flex-2">
          <Image
            className="m-auto"
            alt="Codigo QR para donar"
            src="images/qr_placeholder.svg"
            height={200}
            width={200}
          />
          <p className="font-bold text-primary text-xl text-center">
            Escanea el QR para saber <span className="block">cuánto llevamos recaudado</span>
          </p>
        </div>
      </div>
    </section>
  );
}
