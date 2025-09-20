import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "OSIS Armata - Organisasi Siswa Intra Sekolah",
  description:
    "Website resmi OSIS Armata - elegan, modern, responsif. Mendukung dark/light mode dan tiga bahasa (ID/AR/EN).",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>
          <LanguageProvider>{children}</LanguageProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
