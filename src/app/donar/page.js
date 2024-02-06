import { DonarSubtitulo } from "@/components/DonarSubtitulo";
import Logo from "@/components/Logo";
import { Title } from "@/components/Title";

export default function Donar() {
  return (
    <section>
      <Title
        logo={
          <svg
            aria-label="TechTon"
            className="fill-primary h-32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 376 116"
          >
            <title>TechTon | Agenda </title>
            <desc>Logo de TechTon</desc>
            <Logo height={"80"} />
          </svg>
        }
      />
      <div className="flex">
        <div className="py-10 md:space-y-10 space-y-5">
          <DonarSubtitulo />
          <div className="font-light leading-7 text-center md:text-left text-sm md:text-lg">
            Todo el dinero será dirigido a Bomberos de Chile. El botón de donar
            te llevará a Mercado Pago y está disponible para donaciones en
            países donde esté habilitado.
          </div>
        </div>
      </div>
    </section>
  );
}
