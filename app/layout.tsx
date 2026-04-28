import type { Metadata, Viewport } from "next"
import { Nunito } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-sans",
})

// Replace with your production URL when deploying.
const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jsinside.vercel.app"
)

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "JSInside — See what happens inside JavaScript",
    template: "%s · JSInside",
  },
  description:
    "Visualize execution context, event loop, hoisting, closures, async behavior, and more. Learn JavaScript internals with interactive animations.",
  keywords: [
    "JavaScript",
    "education",
    "event loop",
    "closures",
    "V8",
    "visualization",
    "async",
    "promises",
  ],
  authors: [{ name: "JSInside" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "JSInside",
    title: "JSInside — See what happens inside JavaScript",
    description:
      "Visualize execution context, event loop, hoisting, closures, async behavior, and more.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "JSInside — See what happens inside JavaScript",
    description:
      "Visualize execution context, event loop, hoisting, closures, async behavior, and more.",
  },
}

export const viewport: Viewport = {
  themeColor: "#020617",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("dark antialiased", nunito.variable, "font-sans")}
    >
      <body className="min-h-svh bg-background">
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
