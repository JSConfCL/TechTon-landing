"use client";

import Image from "next/image";
import React from "react";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { Button } from "@/components/Button";

import { getSpecialDonations, getTransactions } from "@/helpers/api";
import TotalAmount from "./TotalAmount";

const SECONDS = 1000;

const formatMoney = (amount, system) =>
  ({
    mercadopago: new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "CLP",
    }).format(amount),
    stripe: new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "USD",
    }).format(amount / 100),
  })[system];

const DonateButton = ({
  id,
  totalDonation,
  latestDonations,
  title,
  buttonTitle,
  buttonURL,
  system,
  isLoading,
}) => {
  const handleShare = () => {
    if (navigator?.share) {
      navigator.share({ title: "Donar a Bomberos de Chile", url: buttonURL });
    } else if (navigator?.clipboard) {
      navigator.clipboard.writeText(buttonURL);
    }
  };

  return (
    <div className="mx-auto w-full h-full md:w-auto flex flex-col items-center justify-center gap-4 p-4 text-center bg-[#333] rounded-lg drop-shadow-lg md:min-w-96 lg:min-w-fit grow">
      <div className="mx-auto flex items-center gap-2 lg:px-4">
        {system === "mercadopago" ? (
          <Image alt="" src="/images/flags/chile.svg" height={35} width={35} />
        ) : null}
        {system === "stripe" ? (
          <Image alt="" src="/images/flags/world.svg" height={35} width={35} />
        ) : null}
        <span className="font-bold ">{title}</span>
      </div>
      <Button
        id={id}
        href={buttonURL}
        target="_blank"
        variant="primary"
        classnames="w-full py-2"
      >
        {buttonTitle}
      </Button>
      <Button
        variant="secondary"
        classnames="w-full py-2"
        onClick={(e) => {
          e.preventDefault();
          handleShare();
        }}
      >
        Compartir
      </Button>
      {isLoading ? (
        <>
          <div className="flex w-full gap-2">
            <div className="rounded-full bg-slate-400 h-8 w-8 shrink-0"></div>
            <div className="animate-pulse w-full bg-slate-400 text-base rounded-md shrink">
              &nbsp;
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex w-full">
            <div className="flex w-full items-center gap-4">
              <div className="rounded-full bg-primary h-8 w-8 shrink-0 flex items-center justify-center">
                <Image
                  alt=""
                  src="/images/icons/handshake.svg"
                  height={24}
                  width={24}
                />
              </div>
              <div className="text-left">
                {latestDonations.length}{" "}
                {latestDonations.length == 1 ? "Donación" : "Donaciones"}{" "}
              </div>
            </div>
          </div>
          <hr />
        </>
      )}
      {isLoading ? (
        <div className="animate-pulse font-bold text-4xl bg-primary w-1/2 rounded-md">
          &nbsp;
        </div>
      ) : (
        <div className="font-bold text-lg grid justify-center items-center gap-4">
          Total Recolectado
          <span className="text-[clamp(1.2rem,10vw,3rem)] text-primary">
            {formatMoney(totalDonation, system)}
          </span>
        </div>
      )}
    </div>
  );
};

function InternalDonateInfo() {
  const { isLoading, data } = useQuery({
    queryKey: ["transactions"],
    queryFn: getTransactions,
    refetchInterval: 10 * SECONDS,
  });
  const { isLoading: isLoadingSpecial, data: specialDonations } = useQuery({
    queryKey: ["specialDonations"],
    queryFn: getSpecialDonations,
    refetchInterval: 10 * SECONDS,
  });
  const localTransactions =
    data?.searchPaymentLogs.filter((log) => log.currencyId === "CLP") ?? [];
  const localConsolidatedTransactions =
    data?.searchConsolidatedPaymentLogs.find((log) => log.currencyId === "CLP")
      ?.totalTransactionAmount ?? 0;
  const foreignTransactions =
    data?.searchPaymentLogs.filter((log) => log.currencyId === "usd") ?? [];
  const foreignConsolidatedTransactions =
    data?.searchConsolidatedPaymentLogs.find((log) => log.currencyId === "usd")
      ?.totalTransactionAmount ?? 0;

  const specialConsolidated =
    specialDonations?.reduce((acc, row) => acc + row.donation, 0) ?? 0;

  return (
    <>
      <div className="w-full flex flex-col mb-8 gap-4">
        <div class="w-full flex flex-col lg:flex-row justify-between gap-4">
          <DonateButton
            id="local-donation"
            title="Donaciones Nacionales"
            buttonTitle="Donar"
            buttonURL="https://link.mercadopago.cl/jscl"
            system="mercadopago"
            totalDonation={localConsolidatedTransactions}
            latestDonations={localTransactions}
            isLoading={isLoading}
          />
          <DonateButton
            id="foreign-donation"
            title="Donaciones Internacionales"
            buttonTitle="Donar"
            buttonURL="https://buy.stripe.com/dR64jQcNI2Up0OkdR0"
            system="stripe"
            totalDonation={foreignConsolidatedTransactions}
            latestDonations={foreignTransactions}
            isLoading={isLoading}
          />
        </div>
        <div>
          {specialConsolidated ? (
            <div className="mx-auto w-full md:w-auto flex flex-col items-center justify-center gap-4 p-4 text-center bg-[#333] rounded-lg drop-shadow-lg md:min-w-96 lg:min-w-fit mb-4">
              {isLoadingSpecial ? (
                <div className="animate-pulse font-bold text-4xl bg-primary w-1/2 rounded-md">
                  &nbsp;
                </div>
              ) : (
                <div className="font-bold text-lg grid justify-center items-center gap-4 text-white">
                  <div className="font-bold text-lg grid justify-center items-center gap-4">
                    Donaciones Adicionales
                    <span className="text-[clamp(1.2rem,10vw,3rem)] text-primary">
                      {formatMoney(specialConsolidated, "mercadopago")}
                    </span>
                  </div>
                </div>
              )}
              <div className="text-[#eee]">
                Donadores que nos contactaron aparte.
              </div>
            </div>
          ) : null}
          <div className="mx-auto flex flex-col items-center justify-center gap-4 p-4 text-center bg-primary rounded-lg drop-shadow-lg md:min-w-96 lg:min-w-fit">
            {isLoading ? (
              <div className="animate-pulse font-bold text-4xl w-1/2 rounded-md bg-[#333]">
                &nbsp;
              </div>
            ) : (
              <div className="font-bold text-lg grid justify-center items-center gap-4 text-[#333]">
                Total Recolectado
                <TotalAmount
                  isLoading={isLoading}
                  donationsInClp={localConsolidatedTransactions}
                  donationsInDollar={foreignConsolidatedTransactions}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const queryClient = new QueryClient();

export function DonateInfo() {
  return (
    <QueryClientProvider client={queryClient}>
      <InternalDonateInfo />
    </QueryClientProvider>
  );
}
