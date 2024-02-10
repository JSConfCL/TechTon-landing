"use client";

import { useState } from "react";
import { Button } from "./Button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const pathname = usePathname();

  const handleHamburguer = () => setIsNavbarOpen(!isNavbarOpen);
  const closNavBar = () => setIsNavbarOpen(false);

  const classes = {
    navMenu: cn(

    'absolute z-10 w-full flex items-stretch gap-4 flex-col lg:flex-row',

    'bg-[#232121] max-lg:border max-lg:border-gray-500 max-lg:p-4 max-lg:divide-y-2 max-lg:divide-gray-700',

    'max-lg:rounded-md max-lg:shadow-md',

    'lg:relative lg:items-center lg:justify-end',
    'max-lg:top-14 max-lg:opacity-0 max-lg:transition-all',
    'max-lg:max-w-md max-3xs:top-32 z-20',
      {
      "max-lg:visible max-lg:opacity-100": isNavbarOpen,
      "max-lg:invisible max-lg:-z-10": !isNavbarOpen,
      })
  }
  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#232121] p-6 border-b border-b-slate-700 shadow-md z-20">
      <div className="relative lg:flex justify-between w-full ">
        <div className="flex max-3xs:justify-center justify-between flex-wrap items-center gap-8">
          <div className="flex items-center gap-4">
            <button
              className="flex items-center rounded text-white transition-all hover:text-primary lg:hidden pt-2"
              onClick={handleHamburguer}
            >
              <svg
                className="fill-current h-5 w-5"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
            <div className="flex items-center text-white">
              <Link href="/">
                <Image
                  src="/images/logos/techton_logo.svg"
                  alt="TechTon Logo"
                  width={100}
                  height={28}
                />
              </Link>
            </div>
          </div>
          <Button
            href="https://www.twitch.tv/javascriptchile"
            target="_blank"
            variant="tertiary"
            classnames="bg-twitch text-white flex gap-3 lg:hidden hover:bg-[#a675f4] hover:scale-105 duration-300 !text-sm"
            id="twitch-mb-btn"
            setDefaultMinWidth={false}
          >
            <Image
              src="./twitch_logo.svg"
              alt="TechTon Logo"
              width={20}
              height={20}
            />
            Ver stream
          </Button>
        </div>

        <div
          className={classes.navMenu}
        >
          <div className="text-sm flex flex-col lg:flex-row lg:justify-center gap-8">
            <Link
              href="/"
              onClick={closNavBar}
              className={`block lg:inline-block lg:mt-0 text-primary hover:text-white px-3 py-2 transition-all rounded ${
                pathname == "/" && "bg-secondary text-primary"
              }`}
            >
              Inicio
            </Link>
            <Link
              href="/agenda"
              onClick={closNavBar}
              className={`block lg:inline-block lg:mt-0 text-white hover:text-primary transition-all px-3 py-2 rounded ${
                pathname == "/agenda" && "bg-secondary text-primary"
              }`}
            >
              Agenda
            </Link>
            <Link
              href="/nosotros"
              onClick={closNavBar}
              className={`block lg:inline-block lg:mt-0 text-white hover:text-primary transition-all px-3 py-2 rounded ${
                pathname == "/nosotros" && "bg-secondary text-primary"
              }`}
            >
              Quiénes somos + comunidades
            </Link>
          </div>
          <div className="flex gap-3 border-b border-b-slate-700 lg:border-none">
            <Button
              href="/donar"
              variant="primary"
              classnames="inline-block mt-4 lg:mt-0 min-w-0 lg:min-w-32 md:py-2 !text-sm"
              id="donar-btn"
              setDefaultMinWidth={false}
            >
              Ir a donar
            </Button>
            <Button
              href="https://www.twitch.tv/javascriptchile"
              target="_blank"
              variant="tertiary"
              classnames="bg-twitch text-white hidden gap-3 lg:flex hover:bg-[#a675f4] hover:scale-105 duration-300 py-2 sm:py-2 !text-sm items-center"
              id="twitch-dk-btn"
              setDefaultMinWidth={false}
            >
              <Image
                src="./twitch_logo.svg"
                alt="TechTon Logo"
                width={20}
                height={20}
              />
              JavaScript Chile
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
