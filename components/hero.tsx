"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Animation variants
  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.4 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section id="hero" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
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
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="container relative z-10 mx-auto mt-10 px-4 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Main content container */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-16">
          {/* Text Content - centered on all screen sizes */}
          <motion.div
            className="w-full lg:w-3/5 text-center max-w-2xl mx-auto"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={contentVariants}
          >
            <motion.h1
              className="text-3xl sm:text-5xl md:text-5xl font-bold text-white mt-9 md:mb-9 leading-tight"
              variants={itemVariants}
            >
              Soluciones Integrales en Ingeniería y Mantenimiento
            </motion.h1>
            <motion.p className="text-base font-bold sm:text-lg text-gray-100 mb-5 md:mb-4 mx-auto" variants={itemVariants}>
            SIIM, empresa dedicada a brindar soluciones en Ingeniería Electromecánica y Mantenimiento Industrial 
            apuntado a empresas chicas como asi también a empresas de alto volumen. 
            Nos especializamos en una correcta Gestión de Activos desde la concepción de un requerimiento 
            hasta la presentación de la mejor alternativa, con opción llave en mano y gestión de documentación si asi lo requiera.  
            Nos apoyamos en nuestros años de experiencia y una completa red de proveedores profesionales y de alta calidad de servicios.

              <br className="hidden sm:block" />
              SIIM asume su compromiso con la preservación del medio ambiente y la sustentabilidad, por tal motivos centramos nuestras actividades en los mejores estándares de cumplimiento.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-8">
              <a
                href="#contact"
                 className=" bg-secundary btn-primary inline-block hover:scale-105 transition-transform rounded-xl"
              >
                Contáctenos
              </a>
            </motion.div>
          </motion.div>

          {/* Logo - hidden on smaller screens, visible on lg and up */}
          {/* <motion.div
            className="hidden lg:flex lg:w-2/5 justify-center items-center"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={logoVariants}
          >
            <div className="relative w-80 h-80 xl:w-96 xl:h-96">
              <Image
                src="/images/logosim-Photoroom.png"
                alt="SIIM Logo"
                fill
                className="object-contain drop-shadow-2xl"
                sizes="(min-width: 1280px) 384px, 320px"
              />
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  )
}


