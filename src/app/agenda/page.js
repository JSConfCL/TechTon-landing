import ClientPage from './client-page'

import { getMetaData, getViewports } from "@/lib/metadata";

export const generateMetadata = () => getMetaData({
  title: 'Agenda de TechTon',
  description: "TechTon - Comunidades Tech Unidas. Dos Días de Streaming y Apañe. Conoce día y hora de cada uno de los streamers que hacen posible apoyar a los Bomberos de Chile"
})

export const generateViewport = () => getViewports()

export default async function Page() {
   return <ClientPage />
}
