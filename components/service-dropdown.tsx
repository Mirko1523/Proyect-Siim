"use client"

import { motion } from "framer-motion"

// Define service categories and their sub-services
const serviceCategories = [
  {
    name: "Ingeniería",
    services: [
      { name: "Ingeniería de Procesos", href: "#ingenieria-procesos" },
      { name: "Gestión de Activos", href: "#gestion-activos" },
      { name: "Proyectos Eléctricos", href: "#proyectos-electricos" },
    ],
  },
  {
    name: "Construcción",
    services: [
      { name: "Construcciones Civiles", href: "#construcciones-civiles" },
      { name: "Redes de Protección contra Incendios", href: "#redes-incendio" },
    ],
  },
  {
    name: "Mantenimiento",
    services: [
      { name: "Mantenimiento Civil y Mecánico", href: "#mantenimiento-civil" },
      { name: "Refrigeración Industrial", href: "#refrigeracion-industrial" },
      { name: "Generación de Energía", href: "#generacion-energia" },
    ],
  },
]

interface ServiceDropdownProps {
  isScrolled?: boolean
  isMobile?: boolean
  closeDropdown: () => void
}

export default function ServiceDropdown({ isScrolled = true, isMobile = false, closeDropdown }: ServiceDropdownProps) {
  // Animation variants for dropdown items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
  }

  const handleClick = () => {
    if (!isMobile) {
      closeDropdown()
    }
  }

  return (
    <motion.div className={isMobile ? "" : "py-2"} initial="hidden" animate="visible" variants={containerVariants}>
      {serviceCategories.map((category, index) => (
        <div key={category.name} className={isMobile ? "mb-3" : ""}>
          <motion.div
            variants={itemVariants}
            className={`px-4 py-2 font-medium ${isMobile ? "text-secondary" : "text-primary"}`}
          >
            {category.name}
          </motion.div>
          <div className={isMobile ? "ml-2" : ""}>
            {category.services.map((service) => (
              <motion.a
                key={service.name}
                href={service.href}
                className={`block px-4 py-2 text-sm hover:bg-gray-100 ${isMobile ? "text-primary" : "text-gray-700"}`}
                onClick={handleClick}
                variants={itemVariants}
              >
                {service.name}
              </motion.a>
            ))}
          </div>
          {index < serviceCategories.length - 1 && !isMobile && (
            <motion.div variants={itemVariants} className="mx-2 my-1 border-t border-gray-200"></motion.div>
          )}
        </div>
      ))}
    </motion.div>
  )
}
