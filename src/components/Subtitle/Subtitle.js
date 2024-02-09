"use client";
import classNames from "classnames";
import { useRef } from "react";
import { useCssTransitionOnView } from "@/components/hooks/useCssTransitionOnView";

export function Subtitle() {
  const ref = useRef(null);
  const transitions = useCssTransitionOnView(ref, "delay-700");

  return (
    <h3
      ref={ref}
      className={classNames(
        "flex items-center justify-center font-kufam font-semibold gap-x-3 flex-wrap",
        transitions,
      )}
    >
      <span className="text-4xl xl:text-6xl">+20 </span>
      <span className="text-2xl xl:text-3xl">horas de</span>
      <span className="text-2xl xl:text-3xl text-primary relative">
        Streaming
        <svg
          className="fill-primary absolute right-0 b top-8 w-100"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 212 21"
          aria-hidden="true"
        >
          <path d="M187.6 20.5c-.2 0-.4 0-.6-.1-3.9-1-7.8-2.1-7.6-5.2.1-3.5 4.4-4.5 17.8-6.7.4-.1.8-.1 1.2-.2-3.7-.4-8.9-.9-16.2-1.4-55.5-4-141.3 1.6-178.9 5C1.8 12 .6 11 .5 9.7c-.1-1.4.9-2.6 2.3-2.8 37.8-3.5 123.9-9 179.7-5 9.7.7 16.6 1.3 21 2 4.8.7 7.9 1.3 8 4 .1 3.2-3.3 3.8-13.6 5.5-3.1.5-7.5 1.2-10.6 2 .3.1.5.1.8.2 1.3.3 2.2 1.7 1.8 3-.2 1.1-1.2 1.9-2.3 1.9z" />
        </svg>
      </span>
      <span className="flex items-center gap-3 mt-5 xxs:mt-0">
        <span className="text-4xl xl:text-6xl">+40 </span>
        <span className="text-2xl xl:text-3xl">charlistas</span>
      </span>
    </h3>
  );
}
