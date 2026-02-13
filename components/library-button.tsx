"use client";

import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

type LibraryButtonProps = {
  children: ReactNode;
  variant?: string;
  onClick?: () => void;
};

export default function LibraryButton({
  children,
  variant,
  onClick,
}: LibraryButtonProps) {
  return (
    <Button onClick={onClick} className={variant === "add" ? "bg-green-600 text-white" : ""}>
      {children}
    </Button>
  );
}
