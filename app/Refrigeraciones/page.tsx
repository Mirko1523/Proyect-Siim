"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Footer from "@/components/footer"
import NavbarR from "@/components/navbarRoutes"

const services = [
  {
    id: 1,
    title: "Mantenimiento y reparación: Aire Acondicionado",
    description:
      "Realizamos mantenimientos con técnicos especializados que revisan periódicamente el sistema y sus componentes, asegurando su correcto funcionamiento y prolongando su vida útil.",
    imageSrc: "/images/MantenimientoAire.png",
    anchor: "construcciones",
  },
  {
    id: 2,
    title: "Mantenimiento y reparación: Sistemas Roof Top",
    description:
      "Realizamos mantenimientos con técnicos especializados que revisan periódicamente el sistema y sus componentes, asegurando su correcto funcionamiento y prolongando su vida útil.",
    imageSrc: "/images/MantenimientoRoofTop.jpg",
    anchor: "construcciones",
  },
  {
    id: 3,
    title: "Mantenimiento y reparación: Equipos de Refrigeración",
    description:
      "Mantenemos y reparamos instalaciones de frío industrial mediante un servicio técnico 24 horas al día, 365 días del año.",
    imageSrc: "/images/MatenimientoRefrigeracion.webp",
    anchor: "refrigeraciones",
  },
  {
    id: 4,
    title: "Servicios con Gas CO₂",
    description:
      "Realizamos servicio de mantenimiento preventivo y correctivo. Analizamos la detección de posibles fugas y realizamos reformas y ampliaciones de cámaras.",
    imageSrc: "/images/ServiciosGasCo2.jpg",
    anchor: "energia",
  },
  {
    id: 5,
    title: "Venta de Repuestos",
    description:
      "Disponemos de una amplia red de repuestos para todo tipo de aplicación, brindamos el mejor asesoramiento con la mejor calidad del mercado.",
    imageSrc: "/images/MantenimientoVenta.png",
    anchor: "energia",
  },
]

export default function Construcciones() {
  return (
    <div>
      <NavbarR />

      {/* Background */}
      <motion.div className="absolute inset-0" initial="hidden">
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

      {/* Hero */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-4xl md:text-5xl text-center font-bold">
          Refrigeración Industrial
        </h1>
        <p className="mt-4 text-sm md:text-lg text-center">
          Somos especialistas en Refrigeración Industrial y Comercial dedicados a la
          ingeniería, asesoría y distribución de los mejores equipos.
        </p>
      </div>

      {/* Services */}
      <section id="services" className="py-16 bg-gray-100 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl font-bold text-center mb-8">
            Nuestros Servicios con Gas Freon:
          </h2>

          {/* Primeras 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service) => (
              <motion.div
                key={service.id}
                className="service-card bg-white p-4 rounded-lg shadow-md h-full flex flex-col"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative w-full h-[200px] rounded-md overflow-hidden">
                  <Image
                    src={service.imageSrc}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl text-blue-950 font-semibold mt-4">
                  {service.title}
                </h3>
                <p className="mt-2 text-black flex-grow">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Últimas 2 cards centradas (con object-contain para no cortar) */}
          <div className="mt-10 md:w-2/3 md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.slice(3).map((service) => (
              <motion.div
                key={service.id}
                className="service-card bg-white p-4 rounded-lg shadow-md h-full flex flex-col"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative w-full h-[150px] rounded-md overflow-hidden bg-gray-100">
                  <Image
                    src={service.imageSrc}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl text-blue-950 font-semibold mt-4">
                  {service.title}
                </h3>
                <p className="mt-2 text-black flex-grow">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
