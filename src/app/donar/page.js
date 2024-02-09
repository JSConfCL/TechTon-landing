import { DonarSubtitulo } from "@/components/DonarSubtitulo";
import { DonateInfo } from "@/components/DonateInfo";
import { FadeInBackgroundImages } from "@/components/FadeInBackgroundImages";
import bomberos from "../../../public/images/bomberos-bg-2.webp";

import { getMetaData, getViewports } from "@/lib/metadata";

export const generateMetadata = () =>
  getMetaData({
    title: "Gracias por Donar a Bomberos de Chile",
    description:
      "TechTon - Comunidades Tech Unidas. Gracias por Donar. Puedes usar MecardoPago y Stripe. Todo el dinero recaudado será donado a Bomberos de Chile.",
  });

export const generateViewport = () => getViewports();

export default function Donar() {
  return (
    <div className="flex flex-1 overflow-hidden relative">
      <FadeInBackgroundImages
        className="bg-no-repeat bg-cover bg-left absolute w-[50%] aspect-square right-0 top-0 shadow-inner -z-10 lg:block"
        image={bomberos}
      />
      <div className="flex h-full w-full flex-col relative justify-center items-center max-w-full md:px-32 xl:max-w-[1920px] xl:px-5 m-auto xl:justify-center">
        <div className="flex flex-col xl:flex-row gap-4 w-full flex-1 px-8 xl:pl-40 pt-20">
          <div className="flex flex-col flex-1 gap-8 justify-end ">
            <div className="text-center font-bold xl:text-left flex flex-col gap-4">
              <h2 className="text-5xl xl:text-8xl">Gracias</h2>
              <p className="text-3xl xl:text-[48px] xl:leading-[64px] pr-4">
                por <span className="text-primary">sumarte a donar</span><br/>
                dinero para esta causa.
              </p>
            </div>
            <DonarSubtitulo />
          </div>
          <div className="hidden xl:flex flex-1" />
        </div>
        <div className="flex flex-col xl:flex-row gap-4 w-full flex-1 px-8 xl:pl-40  pt-10">
          <DonateInfo />
          <div className="hidden xl:flex flex-1" />
        </div>
      </div>
    </div>
  );
}
