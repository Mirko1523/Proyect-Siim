"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'

const serviceCategories = [
  {
    name: "Construcciones Civiles y mantenimiento",
    slug: "Construcciones",
    
  },
  {
    name: "Refrigeracion Industrial",
    slug: "Refrigeraciones"
  },
  {
    name: "Energia electrica y Generación",
    slug: "Energia"
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
    // if (!isMobile) {
      closeDropdown()
    // }
  }

  return (
    <motion.div
      className={isMobile ? "" : "py-2"}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {serviceCategories.map((category, index) => (
        <div key={category.slug} className={isMobile ? "mb-3" : ""}>
          <motion.div variants={itemVariants}>
            <Link
              href={`/${category.slug}`}
              onClick={() => {
                console.log(`Navigating to /${category.slug}`);
                
              }}
              className={` hover:text-secondary block px-4 py-2 font-medium ${isMobile ? "text-primary" : "text-primary"}`}
            >
              {category.name}
            </Link>
          </motion.div>
          {index < serviceCategories.length - 1 && !isMobile && (
            <motion.div  variants={itemVariants} className="mx-2 my-1 border-t border-gray-200 " />
          )}
        </div>
      ))}
    </motion.div>
  )
}
