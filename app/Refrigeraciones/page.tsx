"use client"

import React, { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Footer from "@/components/footer"
import NavbarR from "@/components/navbarRoutes"

// Interfaz de servicio
type Service = {
  id: number
  title: string
  description: string
  imageSrc: string
  anchor: string
}

const services: Service[] = [
  {
    id: 1,
    title: "Servicio de Mantenimiento de Aire Acondicionado y sistemas Roof top",
    description:
      "Mantenimiento y reparación de equipos de aire acondicionados y sistemas de climatización central.",
    imageSrc: "/images/MantenimientoAire.jpg",
    anchor: "construcciones",
  },
  {
    id: 2,
    title: "Mantenimiento y reparación: Equipos de Refrigeración",
    description:
      "Mantenimiento y reparación de instalaciones de Frío Industrial, reparación de cámaras frigoríficas de conservación o congelación.",
    imageSrc: "/images/MatenimientoRefrigeracion.webp",
    anchor: "refrigeraciones",
  },
  {
    id: 3,
    title: "Servicio de Mantenimiento preventivo y correctivo",
    description:
      "Análisis de falla por seguimiento de parámetros provistos por sistema Boss, miniBoss, plan Visor. Interpretación de fallas eléctricas. Protocolo de inspección y verificación de funcionamiento. Recarga de CO₂. Análisis de fuga y detección de las mismas. Reformas y ampliaciones de cámaras.",
    imageSrc: "/images/ServiciosGasCo2.jpg",
    anchor: "energia",
  },
  {
    id: 4,
    title: "Venta de Repuestos",
    description:
      "Disponemos de una amplia red de repuestos para todo tipo de aplicación, brindamos el mejor asesoramiento con la mejor calidad del mercado.",
    imageSrc: "/images/MantenimientoVenta.png",
    anchor: "energia",
  },
]

interface ServiceCardProps {
  service: Service
  fullWidth?: boolean
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, fullWidth = false }) => {
  const [expanded, setExpanded] = useState(false)
  const needsTruncate = service.description.length > 140
  return (
    <motion.div
      className={`service-card bg-white p-4 rounded-lg shadow-md flex flex-col ${
        fullWidth ? "w-full md:w-1/2 lg:w-1/3" : ""
      }`}
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
      {/* Cambiamos el color del texto description a blue-950 */}
      <p className={`mt-2 text-blue-950 flex-grow ${needsTruncate && !expanded ? 'line-clamp-4' : ''}`}>
        {service.description}
      </p>
      {needsTruncate && (
        <button
          className="mt-2 text-sm text-blue-500 self-start"
          onClick={() => setExpanded(prev => !prev)}
        >
          {expanded ? 'Ver menos' : 'Ver más...'}
        </button>
      )}
    </motion.div>
  )
}

export default function Construcciones() {
  return (
    <div>
      <NavbarR />

      {/* Background */}
      <motion.div className="absolute inset-0 z-0" initial="hidden">
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
          <h2 className="section-title text-3xl font-bold text-center mb-10">
            Nuestros Servicios
          </h2>

          {/* Primeras 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-blue-950">
            {services.slice(0, 3).map(service => (
              <ServiceCard key={service.id} service={service}/>
            ))}
          </div>

          {/* Última card centrada */}
          <div className="flex justify-center mt-8 text-blue-950">
            {services.slice(3).map(service => (
              <ServiceCard key={service.id} service={service} fullWidth />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
