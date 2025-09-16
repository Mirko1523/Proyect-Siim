// app/page.tsx
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import AboutUs from "../components/nosotros/page"

export default async function Home() {
  // ── Simula una llamada asíncrona:
  await new Promise((resolve) => setTimeout(resolve, 1500))

  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
