import { cn } from "@/lib/utils"

interface DotBackgroundProps {
  children: React.ReactNode
  className?: string
}

export function DotBackground({ children, className }: DotBackgroundProps) {
  return (
    <div className={cn("relative w-full bg-background", className)}>
      <div
        className="absolute inset-0 dark:bg-[radial-gradient(oklch(0.30_0.01_85)_1px,transparent_1px)]"
        style={{
          backgroundSize: "24px 24px",
          backgroundImage: "radial-gradient(oklch(0.86 0.008 85) 1.5px, transparent 1.5px)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
