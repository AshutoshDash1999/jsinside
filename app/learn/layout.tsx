import { JetBrains_Mono, Manrope } from "next/font/google"

import { LearnLayoutClient } from "@/app/learn/_components/learn-layout-client"
import { cn } from "@/lib/utils"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-learn-heading",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-learn-mono",
})

export default function LearnLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={cn(manrope.variable, jetbrainsMono.variable)}>
      <LearnLayoutClient>{children}</LearnLayoutClient>
    </div>
  )
}
