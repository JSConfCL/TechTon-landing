import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export const useCssTransitionOnView = (ref, delay) => {
  const isInView = useInView(ref);

  return cn("transition-all duration-1000 ease-out", delay, {
    "opacity-0 translate-y-4 scale-[0.99]": !isInView,
    "opacity-100 translate-y-0 scale-100": isInView,
  });
};
