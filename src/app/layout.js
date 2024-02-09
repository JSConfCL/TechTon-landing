// import { Inter } from "next/font/google";
import { Inter, Kufam, MuseoModerno } from "next/font/google";

import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/NavBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const kufam = Kufam({
  subsets: ["latin"],
  variable: "--font-kufam",
});
const museo_moderno = MuseoModerno({
  subsets: ["latin"],
  variable: "--font-museo-moderno",
});

export const metadata = {
  title: "TechTon | JsChile",
  description:
    "Recaudaremos fondos que serán entregados a Bomberos de Chile para ayudar a mitigar los efectos causados por los incendios que comenzaron a ocurrir el 02-02-2024 en la V Región de Chile",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${kufam.variable} ${museo_moderno.variable}`}
    >
      <body
        className={`${inter.className} bg-[#232121] text-white h-[100svh] flex flex-col justify-between`}
      >
        <Navbar />
        <main className="flex flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
