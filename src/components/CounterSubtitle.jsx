import React from "react";

const CounterSubtitle = () => {
  return (
    <div className="space-y-3 pb-8">
      <h3 className="font-museo text-center text-2xl font-bold">
        ¡Ayúdanos a levantar Chile!
      </h3>
      <p className="font-extralight text-center px-2 text-sm">
        Recaudaremos fondos que serán entregados a{" "}
        <a
          href="https://www.instagram.com/p/C243rhlsLsb/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:text-primary duration-300 font-semibold underline"
        >
          Bomberos de Chile
        </a>{" "}
        para ayudar a mitigar los efectos causados por los incendios que
        comenzaron a ocurrir el 02-02-2024 en la V Región de Chile.
      </p>
    </div>
  );
};

export { CounterSubtitle };
