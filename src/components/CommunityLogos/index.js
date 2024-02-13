"use client";
import CommunitiesLogo from "@/communities/communities.json";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


export const CommunityLogos = () => (
  <AnimatePresence mode="popLayout">
    {[...CommunitiesLogo.entries()]
      .map(([key, logo], i) => {
        const delay = 0.05 * i + 0.9;
        return (
          <motion.div
            className="flex justify-center h-[100px] aspect-square relative"
            key={`logo.src ${key}`}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay }}
          >
            <Link href={logo.url} target="_blank">
              <Image
                className="p-4 cursor-pointer transition transform hover:scale-150"
                key={key}
                alt={logo.alt}
                src={logo.src}
                fill
                objectFit="contain"
              />
            </Link>
          </motion.div>
        );
      })
      .sort(() => Math.random() - 0.5)}
  </AnimatePresence>
);
