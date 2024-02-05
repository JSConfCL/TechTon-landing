// import { Inter } from "next/font/google";
import { Inter, Kufam, MuseoModerno } from "next/font/google";

import "./globals.css";
import { TwitchButton } from "@/components/TwitchButton";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const roboto_mono = Kufam({
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
      lang="en"
      className={`${inter.variable} ${roboto_mono.variable} ${museo_moderno.variable}`}
    >
      <body
        className={`${inter.className} min-h-screen bg-[#232121] text-white`}
      >
        <div className="hidden lg:block">
          <TwitchButton />
        </div>
        {/* TODO: Put the twitch button on the right of the screen in desktop here! */}
        <main className="px-8 lg:px-64 py-12 lg:py-24">{children}</main>
        {/* TODO: Put the footer here! */}
        <Footer />
      </body>
    </html>
  );
}
