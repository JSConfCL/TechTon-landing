import { DonarSubtitulo } from "@/components/DonarSubtitulo";
import { DonateInfo } from "@/components/DonateInfo";
import Logo from "@/components/Logo";
import { Title } from "@/components/Title";

import { getMetaData, getViewports } from "@/lib/metadata";

export const generateMetadata = () => getMetaData({
  title: 'Gracias por Donar a Bomberos de Chile',
  description: "TechTon - Comunidades Tech Unidas. Gracias por Donar. Puedes usar MecardoPago y Stripe. Todo el dinero recaudado será donado a Bomberos de Chile." })

export const generateViewport = () => getViewports()

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
      <div className="space-around flex items-center px-4 sm:px-10 lg:px-0 xl:m-auto xl:w-5/6 xl:flex-row xl:gap-10 xl:pb-40 xl:pt-20 2xl:w-4/6">
        <div className="flex-1 space-y-5 py-10 md:space-y-10">
          <div className="text-center font-bold xl:text-left">
            <h2 className="text-6xl">Gracias</h2>
            <p className="text-2xl lg:text-3xl">
              por <span className="text-primary">sumarte a donar</span> dinero
              para esta causa.
            </p>
          </div>
          <DonarSubtitulo />
          <div className="flex w-full flex-1">
            <DonateInfo />
          </div>
        </div>
      </div>
    </section>
  );
}
