import Logo from "@/components/Logo";
import { Title } from "@/components/Title";
import Image from "next/image";
import CommunitiesLogo from "@/communities/communities.json";

export default function Nosotros() {
  return (
    <section className="flex flex-col items-center justify-between mx-auto md:px-10">
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
      <div className="xl:pb-40 xl:pt-20 flex flex-wrap items-center space-around px-10 lg:px-0">
        <div className="py-10 md:space-y-10 space-y-5 lg:basis-3/6">
          <div className="font-bold text-left xl:text-left">
            <p className="text-2xl lg:text-3xl">¿De qué se trata?</p>
          </div>
          <div className="space-y-4 font-light leading-7 text-left md:text-left text-sm md:text-lg">
            Somos varias comunidades tecnológicas que se han unido bajo el alero
            de{" "}
            <a
              href="https://jschile.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-primary duration-300 font-semibold underline"
            >
              JavaScript Chile
            </a>{" "}
            con el objetivo de contribuir a mitigar los efectos de los incendios
            que comenzaron el 02-02-2024 en la V Región de Chile.{" "}
            <span className="block">
              Estamos organizando charlas y talleres gratuitos que se
              transmitirán en línea para recaudar fondos que serán destinados a
              los
            </span>
            <a
              href="https://www.instagram.com/p/C243rhlsLsb/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-primary duration-300 font-semibold underline"
            >
              Bomberos de Chile.
            </a>{" "}
          </div>
          <div className="font-light text-primary leading-7 text-center md:text-left text-sm md:text-lg">
            Se realizarán las donaciones en una cuenta única y posteriormente se
            hará una transferencia con el total de los fondos recaudados.
          </div>
        </div>
        <div className="flex flex-wrap lg:basis-3/6">
          {CommunitiesLogo.map((logo, key) => {
            return (
              <div key={`logo.src ${key}`}>
                <Image
                  className="py-4 px-4"
                  key={key}
                  alt={logo.alt}
                  src={logo.src}
                  height={100}
                  width={100}
                />{" "}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
