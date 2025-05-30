"use client"

import React from "react"
import { useEffect, useRef, useState } from "react"

const AboutUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    sectionRef.current && observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const descriptions = [
    "SIIM, empresa dedicada a brindar soluciones en Ingeniería y Mantenimiento Industrial apuntado a empresas chicas como asi también a empresas de alto volumen. Nos especializamos en una correcta Gestión de Activos desde la concepción de un requerimiento hasta la presentación de la mejor alternativa, con opción llave en mano y gestión de documentación si asi lo requiera.",
    "Con años de experiencia en empresas corporativas y de diversos tamaños, SIIM ha construido una sólida red de proveedores de alta calidad que nos permite brindar servicios excepcionales y soluciones personalizadas que satisfacen las necesidades específicas de cada cliente en diversas industrias.",
    "SIIM está comprometido con la preservación del medio ambiente y la sostenibilidad a través del cumplimiento de los más altos estándares de calidad, asegurando que todos nuestros proyectos y servicios contribuyan a un futuro más sustentable manteniendo la excelencia operativa."
  ]

  return (
    <section
      ref={sectionRef}
      className="relative bg-gray-50 text-gray-800 py-20 px-6 lg:px-20 overflow-hidden"
    >
      {/* Background gradient accent */}
      <div className="absolute -z-10 top-0 left-1/2 transform -translate-x-1/2 w-[80vw] h-[60vh] bg-gradient-to-br from-blue-100 to-green-100 rounded-full opacity-30" />

      {/* Title */}
      <h1
        className={`mx-auto max-w-3xl text-center text-4xl lg:text-5xl font-extrabold text-blue-950 mb-12 transition-opacity duration-1000 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        ¿Quiénes Somos?
      </h1>

      {/* Description cards alternating */}
      <div className="flex flex-col gap-12 max-w-4xl mx-auto">
        {descriptions.map((text, idx) => (
          <div
            key={idx}
            className={`flex ${idx % 2 === 1 ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`bg-white rounded-xl border border-gray-200 p-6 shadow-md hover:shadow-lg max-w-prose transform transition-all duration-800 ease-out delay-${idx * 300} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}            
            >
              <p className={`text-base leading-relaxed text-blue-950 ${idx % 2 === 1 ? 'text-right' : 'text-left'}`}>{text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Feature cards */}
      <div className="mt-16 grid gap-8 max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: 'Misión',
            accent: 'bg-blue-950',
            items: [
              'Brindar a nuestros clientes un solido compromiso en satisfacer sus necesidades en tiempo y forma.',
              'Aprovechar nuestro capital humano y conocimientos acumulados para construir relaciones innovadoras basadas en la excelencia, calidad, eficiencia y satisfacción del cliente.'
            ]
          },
          {
            title: 'Visión',
            accent: 'bg-blue-950',
            items: [
              'Ser una referencia líder en servicios de Ingeniería y Mantenimiento, ofreciendo soluciones integrales de excelencia, calidad, eficiencia, agilidad y profesionalismo. Agregamos valor fomentando el desarrollo y mejorando los procesos existentes y futuros para el crecimiento continuo del negocio.'
            ]
          },
          {
            title: 'Valores',
            accent: 'bg-blue-950',
            items: [
              'Compromiso con el espíritu de servicio al cliente.',
              'Excelencia, Calidad, Integridad, Ética e Independencia.',
              'Respeto por nuestro medio ambiente y sostenibilidad.'
            ]
          }
        ].map((card, i) => (
          <div
            key={i}
            className={`bg-white rounded-xl shadow-md hover:shadow-lg p-6 transform transition-all duration-700 delay-${i * 300} ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="flex items-center justify-center mb-4">
              <div className={`${card.accent} w-2 h-8 rounded-full mr-3`} />
              <h2 className="text-2xl font-semibold text-blue-950">{card.title}</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-blue-950">
              {card.items.map((item, j) => (
                <li key={j} className="hover:text-gray-700 transition-colors duration-200">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutUs
