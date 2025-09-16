"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show button after scrolling a bit
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5491123877513", "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`fixed bottom-6 right-6 z-50 rounded-full shadow-lg transition-all duration-300 transform ${
        isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
      }`}
      aria-label="Contactar por WhatsApp"
    >
      <div className="relative w-16 h-16">
        <Image src="/images/whatsapp.png" alt="WhatsApp" fill className="object-cover" />
      </div>
    </button>
  )
}
