import { cn } from "@/lib/utils"

type LibraryButtonProps = {
  onClick: () => void
  variant: "add" | "remove" | "edit"
  children: React.ReactNode
}

export default function LibraryButton({
  onClick,
  variant,
  children,
}: LibraryButtonProps) {
  const styles = {
    add: "bg-blue-600 hover:bg-blue-700",
    remove: "bg-red-600 hover:bg-red-700",
    edit: "bg-amber-600 hover:bg-amber-700",
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 text-white rounded-xl transition cursor-pointer",
        styles[variant]
      )}
    >
      {children}
    </button>
  )
}
