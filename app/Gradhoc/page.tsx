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
    title: "Monitorización y gestión de activos",
    description:
    "De cada centro, el usuario podrá crear paneles de lectura en tiempo real de todas las variables relacionadas con los activos existentes y de las alarmas correspondientes a ese servicio o activo: Visualización de la sala de máquinas, Cámaras de refrigeración y los servicios a las que estas suministran frio, Salas de ventas con los distintos muebles frigoríficos integración de diferentes protocolos de comunicaciones.",
    imageSrc: "/images/monitorizacion-y-control-de-procesos.png",
    anchor: "construcciones",
  },
  {
    id: 2,
    title: "Optimización",
    description:
      "El proceso de optimización permite una gestión de la demanda y de la producción inteligente. Gradhoc es capaz de optimizar instalaciones frigoríficas sin comprometer la seguridad alimentaria. La plataforma despliega alarmas que se activan según fórmulas adaptadas a cada instalación. Fijar temperaturas adaptativas en función de las necesidades, Gestionar encendidos y apagados de los equipos en función de unas determinadas prioridades, Realizar otras actuaciones sobre el funcionamiento de las cámaras frigoríficas.",
    imageSrc: "/images/optimizacion-refrigeracion-optimizacion-industrial.png",
    anchor: "energia",
  },
  {
    id: 3,
    title: "Mantenimiento",
    description:
      "la plataforma detecta patrones y evidencias que indican inicios de malos funcionamientos. Este análisis continuo del comportamiento de la instalación frigorífica garantiza un mantenimiento proactivo y eficiente, actuando antes de que se produzca el fallo.",
    imageSrc: "/images/mantenimiento-predictivo-mantenimiento-preventivo-refrigeracion.png",
    anchor: "energia",
  },
    {
    id: 4,
    title: "Gestión de Energía",
    description:
    "La plataforma permite la edición y creación de “dashboards” o paneles de visualización adaptados a cada caso particular por medio de los cuales es posible observar la estructura de consumos energéticos en las diferentes zonas y/o equipos de las instalaciones, el consumo por períodos, y otras variables. Se puede gestionar la facturación y compararla con la estructura de consumos establecida, adelantándose a la factura de la compañía eléctrica y obteniendo el coste real en todo momento.",
    imageSrc: "/images/gestion-energetica-refrigeracion.png",
    anchor: "construcciones",
  },
  {
    id: 5,
    title: "Monitorización de otras energías",
    description:
      "La plataforma permite el desarrollo de proyectos a medida y su integración con otras variables energéticas e infraestructuras asociadas, distintas de las variables de refrigeración. Agua de red / ACS / Agua fría, Aire comprimido, Climatización comercial, Consumos Eléctricos, Fotovoltaica Gas, vapor, Sistema contra incendios, Ventilación Señales de proceso.",
    imageSrc: "/images/monitorizacion-de-otras-energias-y-procesos.png",
    anchor: "energia",
  },
  {
    id: 6,
    title: "Edición de Reportes",
    description:
      "La plataforma dispone de un componente de visualización de datos y gráficas relacionadas con la monitorización de variables y puede representar otros resultados aplicando modelos estadísticos, con las siguientes funcionalidades: Generación de informes predefinidos y ad hoc,  tanto en tiempo real como con envío automático programable. Personalización de cuadros de mando con indicadores clave de rendimiento (KPIs) que resumen la información y facilitan la toma de decisiones.",
    imageSrc: "/images/edicion.png",
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
          src="/images/fondo_azul_gradhoc_c.jpg"
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
