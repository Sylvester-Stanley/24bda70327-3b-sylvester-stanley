"use client";

import LibraryButtonWrapper from "@/components/ui/button";
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
    <LibraryButtonWrapper onClick={onClick} variant={variant}>
      {children}
    </LibraryButtonWrapper>
  );
}
