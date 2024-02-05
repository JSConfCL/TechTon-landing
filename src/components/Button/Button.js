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
}) => {
  let variantColors = "bg-primary";

  if (variant === "secondary") variantColors = "bg-white text-primary";

  const className = `min-w-40 md:min-w-56 ${variantColors} rounded-xl text-center px-4 py-2 text-2xl md:text-3xl font-semibold`;

  return <div>asdjohadads</div>
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  variant: PropTypes.string,
};
