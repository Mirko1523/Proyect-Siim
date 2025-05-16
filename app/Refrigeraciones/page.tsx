"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Refrigeraciones() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Animation variants
  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  }

  const logoVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.215, 0.61, 0.355, 1], // Cubic bezier for smooth entrance
      },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      id="hero"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background Image with fade-in effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={backgroundVariants}
      >
        <Image
          src="/images/home.tsx.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          onLoadingComplete={() => setIsLoaded(true)}
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </motion.div>

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text content with staggered fade-in */}
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={contentVariants}
          >
            <motion.h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4" variants={itemVariants}>
              Soluciones Integrales en Ingeniería y Mantenimiento
            </motion.h1>

            <motion.p className="text-lg text-gray-100 mb-8" variants={itemVariants}>
              Empresa dedicada a brindar soluciones de ingeniería y mantenimiento de alta calidad en todo el suelo
              Argentino.
              <br />
              Nos apoyam nuestros años de experiencia y un equipo altamente capacitado para ofrecer servicios
            </motion.p>
           
            <motion.div variants={itemVariants}>
              <a href="#contact" className="btn-primary inline-block hover:scale-105 transition-transform rounded-xl">
                Contáctenos
              </a>
            </motion.div>
          </motion.div>

          {/* Logo with scale and fade-in animation */}
          <div className="md:w-1/2 flex justify-center">
            <motion.div
              className="w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] relative"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={logoVariants}
            >
              <Image
                src="/images/logosim-Photoroom.png"
                alt="SIIM Logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 288px, (max-width: 1024px) 384px, 450px"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
