import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { SeksiBidang } from "@/components/seksi-bidang"
import { Kegiatan } from "@/components/kegiatan"
import { Galeri } from "@/components/galeri"
import { Alumni } from "@/components/alumni"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen smooth-transition">
      <Navbar />
      <div className="animate-fade-in">
        <Hero />
        <About />
        <SeksiBidang />
        <Kegiatan />
        <Galeri />
        <Alumni />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
