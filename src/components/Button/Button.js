"use client";

import PropTypes from "prop-types";
import Link from "next/link";

export const Button = ({
  id,
  href,
  target = "_self",
  onClick,
  children,
  variant = "primary",
  classnames = "",
  setDefaultMinWidth = true,
}) => {
  let variantColors = "bg-primary hover:bg-primaryLight";

  if (variant === "secondary") variantColors = "bg-white hover:opacity-80";

  if (variant === "tertiary") variantColors = "bg-secondary";

  const className = `${
    setDefaultMinWidth ? "min-w-40 md:min-w-56" : ""
  } ${variantColors} duration-200 text-md text-custom-gray rounded-md text-center px-4 py-2 md:text-xl font-semibold transition-all hover:scale-[1.03] ${classnames}`;
  // } ${variantColors} duration-200 text-sm md:text-base text-custom-gray rounded-md text-center px-4 py-2 text-2xl md:text-3xl font-semibold transition-all py-3 hover:scale-[1.03] ${classnames}`;
  if (href && target) {
    return (
      <a id={id} className={className} href={href} target={target}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link id={id} className={className} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button id={id} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  variant: PropTypes.string,
  classnames: PropTypes.string,
  setDefaultMinWidth: PropTypes.bool,
};
