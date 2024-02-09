import classNames from "classnames";
import { useInView } from "framer-motion";

export const useCssTransitionOnView = (ref, delay) => {
  const isInView = useInView(ref);

  return classNames("transition-all duration-1000 ease-out", delay, {
    "opacity-0 translate-y-4 scale-95": !isInView,
    "opacity-100 translate-y-0 scale-100": isInView,
  });
};
