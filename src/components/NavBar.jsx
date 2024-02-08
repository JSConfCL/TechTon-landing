"use client";

import { useState } from "react";
import { Button } from "./Button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const pathname = usePathname();

  const handleHamburguer = () => setIsNavbarOpen(!isNavbarOpen);
  const closNavBar = () => setIsNavbarOpen(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#232121] p-6">
      <div className="relative lg:flex justify-between w-full ">
        <div className="flex justify-between flex-wrap items-center lg:basis-96">
          <div className="flex gap-1 flex-grow pb-3">
            <button
              className="flex items-center px-3 py-2 rounded text-white transition-all hover:text-primary lg:hidden"
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
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <Link href="/">
                <Image
                  src="./techton-logo-white.png"
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
            classnames="bg-twitch text-white flex gap-3 lg:hidden hover:bg-[#a675f4] hover:scale-105 duration-300 sm:text-[1em]"
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
          className={`${
            isNavbarOpen ? "block" : "hidden"
          } absolute lg:relative bg-[#232121] z-10 w-full flex-grow lg:flex lg:items-center`}
        >
          <div className="text-sm lg:flex-grow lg:flex lg:justify-center">
            <Link
              href="/"
              onClick={closNavBar}
              className={`block mt-4 lg:inline-block lg:mt-0 text-primary hover:text-white mr-4 
              transition-all px-3 py-2 rounded ${
                pathname == "/" && "bg-secondary text-primary"
              }`}
            >
              Inicio
            </Link>
            <Link
              href="/agenda"
              onClick={closNavBar}
              className={`block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 transition-all px-3 py-2 rounded ${
                pathname == "/agenda" && "bg-secondary text-primary"
              }`}
            >
              Agenda
            </Link>
            <Link
              href="/nosotros"
              onClick={closNavBar}
              className={`block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 transition-all px-3 py-2 rounded ${
                pathname == "/nosotros" && "bg-secondary text-primary"
              }`}
            >
              Quiénes somos + comunidades
            </Link>
          </div>
          <div className="flex gap-3">
            <Button
              href="/donar"
              variant="primary"
              classnames="inline-block mt-4 lg:mt-0 min-w-0 lg:min-w-32 md:text-[.99em] md:py-2 lg:text-[1em]"
              id="donar-btn"
              setDefaultMinWidth={false}
            >
              Donar
            </Button>
            <Button
              href="https://www.twitch.tv/javascriptchile"
              target="_blank"
              variant="tertiary"
              classnames="bg-twitch text-white hidden gap-3 lg:flex hover:bg-[#a675f4] hover:scale-105 duration-300 py-2 sm:text-sm lg:text-[1em] sm:py-2"
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
