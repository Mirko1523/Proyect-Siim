// app/page.tsx
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import LogoCarousel from "@/components/carrousel"
import AboutUs from "./Nosotros/page"

export default async function Home() {
  // ── Simula una llamada asíncrona:
  await new Promise((resolve) => setTimeout(resolve, 1500))

  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <div className="font-bold text-blue-950 flex flex-col items-center justify-center bg-gray-50 ">
        <h1>Nuestros clientes:</h1>
      </div>
      <LogoCarousel />
      <Contact />
      <Footer />
    </main>
  )
}
