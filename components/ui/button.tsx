"use client";

import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface LibraryButtonWrapperProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "add" | "delete" | "remove" | "default";
}

export default function LibraryButtonWrapper({
  children,
  variant = "default",
  className,
  ...props
}: LibraryButtonWrapperProps) {
  const baseStyles =
    "px-4 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 hover:shadow-md active:scale-95";

  const variantStyles: Record<string, string> = {
    add: "bg-green-600 text-white hover:bg-green-700",
    delete: "bg-red-600 text-white hover:bg-red-700",
    remove: "bg-orange-600 text-white hover:bg-orange-700",
    default: "bg-blue-600 text-white hover:bg-blue-700",
  };

  const selectedVariantStyle = variantStyles[variant] || variantStyles.default;

  return (
    <button
      className={`${baseStyles} ${selectedVariantStyle} ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
}
