"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Footer from "@/components/footer"
import NavbarR from "@/components/navbarRoutes"

const services = [
  {
    id: 1,
    title: "Tableros Electricos e Instalaciones Electricas",
    description: "Realizamos el armado, instalación y mantenimiento preventivo/correctivo de tableros eléctricos para uso general, industrial, de contingencia y energías renovables (Ley 27424 y Prov. 12503), canalizaciones livianas, semipesadas, antivandálicas e ignífugas con tendido de circuitos, armado de tableros principales y seccionales, correcciones, ampliaciones y adecuaciones según normativas vigentes, y medición y control de protecciones.",
    imageSrc: "/images/tableroselectricos.jpg",
    anchor: "construcciones",
  },
  {
    id: 2,
    title: "Relevamiento de medicion de instalaciones",
    description: "Realizamos el armado, instalación y mantenimiento preventivo y correctivo de tableros eléctricos (uso general, industrial, de contingencia y renovables según Ley 27424 y Prov. 12503); canalizaciones livianas, semipesadas, antivandálicas e ignífugas con tendido de circuitos; corrección, ampliación y adecuación de tableros principales y seccionales según normativas vigentes; y medición y control de protecciones.",
    imageSrc: "/images/medicion.jpg",
    anchor: "energia",
  },
  {
    id: 3,
    title: "Generación Electrica",
    description: "Realizamos el armado, instalación y mantenimiento de tableros eléctricos (uso general, industrial, contingencia y renovables según Ley 27424 y Prov. 12503), canalizaciones livianas a semipesadas, corrección y adecuación normativa de tableros principales y seccionales, y medición de protecciones.",
    imageSrc: "/images/generacion.jpg",
    anchor: "energia",
  },
]

export default function Construcciones() {
  return (
    <div>
      <NavbarR />
      <motion.div className="absolute inset-0 z-" initial="hidden">
        <Image
          src="/images/electricista.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          sizes="25vw"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
          <h1 className="text-4xl md:text-4xl text-center font-bold">Energia Electrica y Generación</h1>
          <p className="mt-4 text-sm md:text-lg text-center">
            Nos especializamos en Proyectos Eléctricos de baja tensión para cualquier propósito requerido.
          </p>
        </div>
      </div>

      <div>
        <section id="services" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-3xl font-bold text-center mb-10">Nuestros Servicios Electricos</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.slice(0, 3).map(service => (
                <motion.div
                  key={service.id}
                  className="service-card bg-white p-4 rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative w-full h-[200px] rounded overflow-hidden">
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  )
}
