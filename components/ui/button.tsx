"use client";

import React, { ReactNode } from "react";

type LibraryButtonProps = {
  children: ReactNode;
  variant?: string;
  onClick?: () => void;
  className?: string;
};

export default function LibraryButtonWrapper({
  children,
  variant,
  onClick,
  className,
}: LibraryButtonProps) {
  const baseStyles = "px-4 py-2 rounded font-semibold transition-colors";
  const variantStyles =
    variant === "add" ? "bg-green-600 text-white hover:bg-green-700" : "bg-blue-600 text-white hover:bg-blue-700";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className || ""}`}
    >
      {children}
    </button>
  );
}
