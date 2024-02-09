"use client";
import Link from "next/link";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { useCssTransitionOnView } from "@/components/hooks/useCssTransitionOnView";

export function Title({ logo }) {
  const ref = useRef(null);
  const transitions = useCssTransitionOnView(ref, "delay-500");

  return (
    <section
      className={cn("flex flex-col items-center ", transitions)}
      ref={ref}
    >
      <h1>
        <Link href="/">{logo}</Link>
      </h1>
      <h2 className="text-lg xl:text-xl text-primary text-inter  mb-4 text-center">
        Comunidades Tech unidas por una causa
      </h2>
    </section>
  );
}
