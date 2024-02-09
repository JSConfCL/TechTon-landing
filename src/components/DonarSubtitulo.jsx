import Image from "next/image";
import React from "react";

const DonarSubtitulo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-5">
      <Image
        className="ml-2"
        alt="Hora Chile"
        src="images/communities/Bomberos-de-Chile.webp"
        height={100}
        width={100}
      />
      <div className="font-light leading-7 text-center md:text-left text-md md:text-lg">
        Todo el dinero será dirigido a Bomberos de Chile. El botón de donar te
        llevará a Mercado Pago y está disponible para donaciones en países donde
        esté habilitado.
      </div>
    </div>
  );
};

export { DonarSubtitulo };
