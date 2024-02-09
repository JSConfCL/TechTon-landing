import Image from "next/image";
import React from "react";

import { Button } from "@/components/Button";

const DonateButton = ({
  id,
  flag,
  title,
  buttonTitle,
  buttonURL,
  buttonVariant,
  system,
}) => {
  return (
    <div className="mx-auto w-full md:w-auto flex flex-col items-center justify-center gap-6 p-6 text-center lg:first-of-type:pl-0">
      <div className="mx-auto flex items-center gap-2 lg:px-4">
        {flag === "CL" ? (
          <Image alt="" src="/images/flags/chile.svg" height={35} width={35} />
        ) : null}
        {flag === "NO" ? (
          <Image alt="" src="/images/flags/world.svg" height={35} width={35} />
        ) : null}
        <span className="font-bold ">{title}</span>
      </div>
      <Button
        id={id}
        href={buttonURL}
        target="_blank"
        variant={buttonVariant}
        classnames="w-full md:w-auto"
      >
        {buttonTitle}
      </Button>
      <div className="mx-auto text-center">
        {system === "mercadopago" ? (
          <Image
            alt=""
            src="/images/logos/mercado_pago.svg"
            height={55}
            width={195}
          />
        ) : null}
        {system === "stripe" ? (
          <Image
            alt=""
            src="/images/logos/stripe.svg"
            height={55}
            width={155}
          />
        ) : null}
      </div>
    </div>
  );
};

export function DonateInfo() {
  return (
    <div className="flex flex-1 flex-col items-center gap-5 lg:flex-row justify-between">
      <div className="align-center flex flex-col items-center justify-center justify-items-center divide-y pt-4 md:flex-row md:mx-0 md:justify-start md:divide-x md:divide-y-0">
        <DonateButton
          id="local-donation"
          flag="CL"
          title="Donaciones Nacionales"
          buttonTitle="Donar nacional"
          buttonURL="https://link.mercadopago.cl/jscl"
          buttonVariant="primary"
          system="mercadopago"
        />
        <DonateButton
          id="foreign-donation"
          flag="NO"
          title="Donaciones Internacionales"
          buttonTitle="Donar internacional"
          buttonURL="https://buy.stripe.com/dR64jQcNI2Up0OkdR0"
          buttonVariant="secondary"
          system="stripe"
        />
      </div>
      <div className="flex gap-3 border border-primary primary p-6 rounded-2xl items-center flex-wrap justify-center">
        <Image
          className="m-auto basis-32 max-w-32"
          alt="Codigo QR para donar"
          src="images/qr_placeholder.svg"
          height={200}
          width={200}
        />
        <div className="flex flex-col items-center gap-2">
          <p className="text-primary text-center text-xl font-bold md:text-lg lg:text-base xl:text-xl">
            ¡Mira cuanto llevamos!
          </p>
          <p className="text-white text-center text-lg md:text-md lg:text-sm xl:text-lg">
            Escanea el QR o pincha el botón
          </p>
          <Button
            href=""
            target="_blank"
            variant="primary"
            classnames="!px-4 !py-2 !text-sm !w-auto !min-w-0"
          >
            Ver recaudación
          </Button>
        </div>
      </div>
    </div>
  );
}
