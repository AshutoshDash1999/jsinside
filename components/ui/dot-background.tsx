import { cn } from "@/lib/utils"

interface DotBackgroundProps {
  children: React.ReactNode
  className?: string
}

export function DotBackground({ children, className }: DotBackgroundProps) {
  return (
    <div className={cn("relative w-full bg-background", className)}>
      <div
        className="absolute inset-0 dark:[background-image:radial-gradient(oklch(0.28_0.015_60)_1px,transparent_1px)]"
        style={{
          backgroundSize: "22px 22px",
          backgroundImage: "radial-gradient(oklch(0.82_0.02_85) 1px, transparent 1px)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
