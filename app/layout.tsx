import type React from "react"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import Footer from "@/components/footer"
import SocialFloat from "@/components/social-float"
import "./globals.css"

export const metadata: Metadata = {
  title: "Muhammad Ubaid — Full-Stack Developer & AI Systems Architect",
  description:
    "Full-stack developer and AI systems architect based in Karachi. I build enterprise web systems, AI agents, and scalable digital products using Django, Next.js, and LangChain.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen bg-background text-foreground font-roboto antialiased" suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
        <SocialFloat />
      </body>
    </html>
  )
}
