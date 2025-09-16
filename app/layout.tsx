import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import WhatsAppButton from "@/components/whatsapp-button"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KS GROUP",
  description: "Empresa Familiar dedicada a ofrecer productos de la mejor calidad",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
     
          {children}
          <WhatsAppButton/>
      
      </body>
    </html>
  )
}
