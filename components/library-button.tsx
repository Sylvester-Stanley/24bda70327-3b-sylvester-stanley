"use client";

import LibraryButton from "@/components/ui/button";  // ← Changed to default import
import { ReactNode } from "react";

type LibraryButtonProps = {
  children: ReactNode;
  variant?: string;
  onClick?: () => void;
};

export default function LibraryButtonWrapper({
  children,
  variant,
  onClick,
}: LibraryButtonProps) {
  return (
    <LibraryButton onClick={onClick} className={variant === "add" ? "bg-green-600 text-white" : ""}>
      {children}
    </LibraryButton>
  );
}
