"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

const services = [
  {
    id: 1,
    title: "Desarrollo de Proyectos",
    description:
      "Nos especializamos en diseño de proyectos edilicios, paisajismo, urbanismo y diseño de interiores, dando soluciones arquitectónicas al cliente.",
    imageSrc: "/images/desarrolloProyecto.png",
    anchor: "construcciones",
  },
  {
    id: 2,
    title: "Mantenimiento Edilicio",
    description:
      "Nos dedicamos al servicio de mantenimiento preventivo edilicio de locales comerciales, a la ejecución de obras menores de remodelación, tareas correctivas y reparaciones menores.",
    imageSrc: "/images/mantenimiento.png",
    anchor: "refrigeraciones",
  },
  {
    id: 3,
    title: "Servicios Industriales",
    description:
      "Realizamos mantenimientos industriales: reacondicionamiento e instalación de cañerías (vapor, aire comprimido y sanitaria), mantenimiento de calderas y fabricación de tanques de agua.",
    imageSrc: "/images/serviciosInd.jpg",
    anchor: "energia",
  },
  {
    id: 4,
    title: "Mantenimiento de las instalaciones fijas contra Incendio",
    description:
      "Diseñamos y ejecutamos planes de inspección, prueba y mantenimiento contra incendios según NFPA 25, adaptados a las necesidades de cada cliente.",
    imageSrc: "/images/MantenimientoIncendio.png",
    anchor: "energia",
  },
]

export default function Construcciones() {
  return (
    <div>
      <Navbar />

      <motion.div className="absolute inset-0 z-0" initial="hidden">
        <Image
          src="/images/construccionescivilesymantenimiento.webp"
          alt="Background"
          fill
          className="object-cover"
          priority
          sizes="30vw"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-4xl md:text-5xl text-center font-bold">
          Construcciones Civiles y Mantenimiento
        </h1>
        <p className="mt-4 text-sm md:text-lg text-center">
          Ofrecemos servicios de construcción y mantenimiento de alta calidad y
          con los mejores especialistas.
        </p>
      </div>

      <section id="services" className="py-16 bg-gray-100 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl font-bold text-center mb-10">
            Nuestros Servicios
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.slice(0, 3).map((service) => (
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
                <h3 className="text-xl font-semibold mt-4">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            {services.slice(3).map((service) => (
              <motion.div
                key={service.id}
                className="service-card bg-white p-4 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3"
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
                <h3 className="text-xl font-semibold mt-4">
                  {service.title}
                </h3>
                <p className="mt-2 text-blue-950">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
