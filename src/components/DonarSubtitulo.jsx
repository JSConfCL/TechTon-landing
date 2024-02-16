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
        Todo el dinero será dirigido a Bomberos de Chile. Estamos gestionando la transferencia. 
        Regresa pronto para revisar el comprobante de esta misma. ¡Gracias por participar!
      </div>
    </div>
  );
};

export { DonarSubtitulo };
