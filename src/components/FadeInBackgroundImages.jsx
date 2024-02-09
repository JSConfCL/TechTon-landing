"use client";
/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const FadeInBackgroundImages = ({ image, className }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = image.src;
    img.onload = () => {
      setLoaded(true);
    };
  }, [image.src]);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div
      className={cn(
        className,
        "transition-all duration-1000 ease-in pointer-events-none select-none",
        {
          "opacity-0 scale-[0.99]": !loaded,
          "opacity-35 scale-100": loaded,
        },
      )}
      style={{
        backgroundImage: `url(${image.src})`,
      }}
      onLoad={handleImageLoad}
    ></div>
  );
};
