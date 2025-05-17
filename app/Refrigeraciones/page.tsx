"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Footer from "@/components/footer"
import NavbarR from "@/components/navbarRoutes"

const services = [
  {
    id: 1,
    title: "Desarrollo de Proyectos",
    description: "Nos especializamos en diseño de proyectos edilicios, paisajismo, urbanismo y diseño de interiores, dando soluciones arquitectónicas al cliente.",
    imageSrc: "/images/desarrolloProyecto.jpeg",
    anchor: "construcciones",
  },
  {
    id: 2,
    title: "Mantenimiento Edilicio",
    description: "Nos Dedicamos al servicio de Mantenimiento preventivo Edilicio de locales comerciales, a la ejecución de obras menores de remodelacion,tareas correctivas y reparaciones menores.",
    imageSrc: "/images/mantenimiento.png",
    anchor: "refrigeraciones",
  },
  {
    id: 3,
    title: "Servicios Industriales",
    description: "Realizamos mantenimientos industriales: Reacondicionamiento e instalacion de cañerias (vapor, aire comprimido y cañería sanitaria), Mantenimiento de calderas, Fabricación de Tanques de Agua.",
    imageSrc: "/images/serviciosInd.jpg",
    anchor: "energia",
  },
  {
    id: 4,
    title: "Mantenimiento de las instalaciones fijas contra Incendio",
    description: "Diseñamos y ejecutamos planes de inspección, prueba y mantenimiento contra incendios instalados apegándose a la NFPA 25 pero adaptandonos a las necesidades especificas de cada cliente.",
    imageSrc: "/images/MantenimientoIncendio.png",
    anchor: "energia",
  },
]

export default function Construcciones() {
  return (
    <div>
      <NavbarR />
      <motion.div
        className="absolute inset-0 z-"
        initial="hidden"
      >
        <Image
          src="/images/bgrefrigeracion.webp"
          alt="Background"
          fill
          className="object-cover"
          priority
          sizes="30vw"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
          <h1 className="text-4xl md:text-4xl text-center font-bold">Refrigeración Industrial</h1>
          <p className="mt-4 text-sm md:text-lg text-center">Somos especialistas en Refrigeración Industrial y comercial dedicados a la igenieria, asesoria y distribución de los mejores equipos.</p>
        </div>
      </div>

      <div>
        <section id="services" className="py-16 bg-gray-100">
          <div className="container">
            <h2 className="section-title">Nuestros Servicios:</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.slice(0, 3).map(service => (
                <motion.div
                  key={service.id}
                  className="service-card bg-white p-4 rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={service.imageSrc}
                    alt={service.title}
                    width={300}
                    height={200}
                    className="w-full h-auto"
                  />
                  <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
            {/* Contenedor separado para el servicio con id: 4, centrado */}
            <div className="flex justify-center mt-8">
              {services.slice(3).map(service => (
                <motion.div
                  key={service.id}
                  className="service-card bg-white p-4 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={service.imageSrc}
                    alt={service.title}
                    width={300}
                    height={200}
                    className="w-full h-auto"
                  />
                  <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                  <p className="mt-2 text-blue-950">{service.description}</p>
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