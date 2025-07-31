"use client"

import React, { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Footer from "@/components/footer"
import NavbarRL from "@/components/navbarRoutesL"

// Definimos la interfaz para los servicios
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
    title: "Tableros Electricos e Instalaciones Electricas",
    description:
    "Armado de Tableros  uso general-viviendas- locales comerciales, De uso especiales- industrias, De contingencia y estabilizada, de energías limpias y renovables según lo establecido en la Ley nacional 27424 y la Provincial 12503. Canalizaciones livianas, semipesados, antivandálicas, ignifugas, etc., tendido de circuitos. Armado e instalación de tableros principales y seccionales. Corrección, ampliación y adecuación según normativas vigentes de tableros, sus componentes y aparamenta. Mantenimiento preventivo y correctivo de tableros. Medición y control de protecciones.",
    imageSrc: "/images/tableroselectricos.jpg",
    anchor: "construcciones",
  },
  {
    id: 2,
    title: "Relevamiento de medicion de instalaciones",
    description:
      "Relevamiento de Canalizaciones y cableados eléctricos, tableros eléctricos, protecciones y alimentadores, sistemas de iluminación, sistema de puesta a tierra, estado, medición y certificación provinciales y locales , planimetría unifilar y de detalle. Mediciones de Voltaje e intensidad de corriente en tableros seccionales, verificación de alimentador y circuitos, voltaje e intensidad de corriente total en TGBT,factor de potencia a plena carga, secuencias de fases, análisis de redes de baja tensión, termografía de tableros, intensidad de fuga a tierra, aislamiento de circuitos.",
    imageSrc: "/images/medicion.jpg",
    anchor: "energia",
  },
  {
    id: 3,
    title: "Generación Electrica",
    description:
      "Ingeniería y cálculo de solicitud de grupos electrógenos en base a la potencia requerida. Montaje e instalación de grupos electrógenos. Contrato de ABONOS de Mantenimiento Preventivo y Programado. Actualizaciones en Controladores y Tableros de Trasferencia Automática § Reparaciones integrales Motor Y  Generador,Telemetría por medio de GPRS.",
    imageSrc: "/images/generacion.jpg",
    anchor: "energia",
  },
]

// Props para el componente ServiceCard
interface ServiceCardProps {
  service: Service
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [showFullText, setShowFullText] = useState(false)

  // Determina si la descripción supera un umbral aproximado de caracteres para 4 líneas
  const needsTruncate = service.description.length > 200

  return (
    <motion.div
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

      <p
        className={`mt-2 text-blue-950 ${needsTruncate && !showFullText ? 'line-clamp-4' : ''}`}
      >
        {service.description}
      </p>

      {needsTruncate && (
        <button
          className="text-blue-500 mt-2 text-sm"
          onClick={() => setShowFullText(prev => !prev)}
        >
          {showFullText ? 'Ver menos' : 'Ver más...'}
        </button>
      )}
    </motion.div>
  )
}

const Construcciones: React.FC = () => {
  return (
    <div>
      <NavbarRL />

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
          <h1 className="text-4xl md:text-5xl text-center font-bold">
           Gradhoc
          </h1>
          <p className="mt-4 text-sm md:text-lg text-center">
            Optimización del costo energético y mantenimientos preventivos por medio de sistema Inteligente basados en IA
          </p>
        </div>
      </div>

      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-4xl md:text-4xl font-extrabold text-center text-blue-950 mb-12">
        ¿Por qué implementar Gradhoc en su compañía?
      </h2>
      <Image
        src="/images/stats.png"
        alt="stats"
        width={500}
        height={100}
        className="mx-auto mb-8"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-5 mb-10">
        {[
          {
            text: 'En términos de eficiencia energética, disminución del consumo de energía y maximización del ahorro energético. El margen de mejora en refrigeración es de entre un 20 y un 40% en consumo de energía.'
          },
          {
            text: 'Reducción de las tareas de mantenimiento, mejorando la optimización del mismo, al implantar un enfoque preventivo y predictivo. El margen de mejora es de un 25% en costes de mantenimiento.'
          },
          {
            text: 'Impacto positivo en la salud de las personas, al garantizar el óptimo estado de conservación de los alimentos, evitando pérdidas de mercancía y reduciendo el desperdicio alimentario.'
          },
          {
            text: 'Cuidado del medio ambiente, minimizando las emisiones de CO2 y reduciendo la huella de carbono gracias al control de refrigeración industrial mediante el software avanzado con inteligencia artificial.'
          }
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-5 md:p-5 rounded-2xl shadow-lg flex items-start flex-col"
          >
            <p className="text-base md:text-lg text-blue-950 leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
      

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-blue-950">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Construcciones
