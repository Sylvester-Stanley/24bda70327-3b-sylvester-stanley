"use client";

import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface LibraryButtonWrapperProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "default" | "add" | "delete" | "remove" | "edit";
}

export default function LibraryButtonWrapper({
  children,
  variant = "default",
  className,
  ...props
}: LibraryButtonWrapperProps) {
  const baseStyles =
    "px-4 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 hover:shadow-md active:scale-95";

  const variantStyles = {
  default: "bg-black text-white hover:bg-gray-800",
  add: "bg-green-600 text-white hover:bg-green-700",
  delete: "bg-red-600 text-white hover:bg-red-700",
  remove: "bg-red-600 text-white hover:bg-red-700",
  edit: "bg-blue-600 text-white hover:bg-blue-700",
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

