"use client";

import LibraryButtonWrapper from "@/components/ui/button";
import { ReactNode, ButtonHTMLAttributes } from "react";

interface LibraryButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "add" | "delete" | "remove" | "default";
}

export default function LibraryButton({
  children,
  variant = "default",
  ...props
}: LibraryButtonProps) {
  return (
    <LibraryButtonWrapper variant={variant} {...props}>
      {children}
    </LibraryButtonWrapper>
  );
}
