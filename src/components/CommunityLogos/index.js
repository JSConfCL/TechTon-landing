"use client";
import CommunitiesLogo from "@/communities/communities.json";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

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
            <Image
              className="p-4"
              key={key}
              alt={logo.alt}
              src={logo.src}
              fill
              objectFit="contain"
            />
          </motion.div>
        );
      })
      .sort(() => Math.random() - 0.5)}
  </AnimatePresence>
);
