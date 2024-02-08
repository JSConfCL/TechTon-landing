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
    <div className="mx-auto flex flex-col items-center justify-center gap-6 p-6 text-center lg:first-of-type:pl-0">
      <div className="mx-auto flex items-center gap-2 lg:px-4">
        {flag === "CL" ? (
          <Image alt="" src="/images/flags/chile.svg" height={35} width={35} />
        ) : null}
        {flag === "NO" ? (
          <Image alt="" src="/images/flags/world.svg" height={35} width={35} />
        ) : null}
        <span className="font-bold ">{title}</span>
      </div>
      <Button id={id} href={buttonURL} target="_blank" variant={buttonVariant}>
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
    <div className="flex flex-1 flex-col items-center gap-5 md:flex-row">
      <div className="align-center divider-y xl:divider-y-0 xl:divider-x flex flex-col items-center justify-center justify-items-center divide-y pt-4 sm:flex-row md:mx-0 md:justify-start lg:divide-x lg:divide-y-0">
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
      <div>
        <Image
          className="m-auto"
          alt="Codigo QR para donar"
          src="images/qr_placeholder.svg"
          height={200}
          width={200}
        />
        <p className="text-primary text-center text-xl font-bold md:text-lg lg:text-base xl:text-xl">
          Escanea el QR para saber{" "}
          <span className="block">cuánto llevamos recaudado</span>
        </p>
      </div>
    </div>
  );
}
