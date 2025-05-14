"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"
import ServiceDropdown from "./service-dropdown"

// Define the navigation links with dropdown support
const navLinks = [
  { name: "Inicio", href: "#hero", hasDropdown: false },
  { name: "Servicios", href: "#services", hasDropdown: true },
  { name: "Contacto", href: "#contact", hasDropdown: false },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Toggle dropdown visibility
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <div className="h-14 w-14 relative rounded-full overflow-hidden">
            <Image src="/images/logosim-Photoroom.png" alt="SIIM Logo" fill className="object-contain" />
          </div>
          <span className={`ml-3 text-xl font-bold ${isScrolled ? "text-primary" : "text-white"}`}>SIIM</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8" ref={dropdownRef}>
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.hasDropdown ? (
                <>
                  <button
                    className={`flex items-center font-medium transition duration-300 ${
                      isScrolled ? "text-primary hover:text-secondary" : "text-white hover:text-secondary"
                    }`}
                    onClick={() => toggleDropdown(link.name)}
                    aria-expanded={activeDropdown === link.name}
                    aria-haspopup="true"
                  >
                    {link.name}
                    {activeDropdown === link.name ? (
                      <ChevronUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </button>
                  {/* Desktop Dropdown */}
                  <div
                    className={`absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                      activeDropdown === link.name
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-2 invisible"
                    }`}
                  >
                    <ServiceDropdown isScrolled={isScrolled} closeDropdown={() => setActiveDropdown(null)} />
                  </div>
                </>
              ) : (
                <a
                  href={link.href}
                  className={`font-medium transition duration-300 ${
                    isScrolled ? "text-primary hover:text-secondary" : "text-white hover:text-secondary"
                  }`}
                >
                  {link.name}
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className={`md:hidden ${isScrolled ? "text-primary" : "text-white"}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="container py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full text-primary hover:text-secondary font-medium transition duration-300"
                      onClick={() => toggleDropdown(link.name)}
                      aria-expanded={activeDropdown === link.name}
                    >
                      {link.name}
                      {activeDropdown === link.name ? (
                        <ChevronUp className="ml-1 h-4 w-4" />
                      ) : (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </button>
                    {/* Mobile Dropdown */}
                    {activeDropdown === link.name && (
                      <div className="mt-2 ml-4 space-y-2">
                        <ServiceDropdown isMobile={true} closeDropdown={() => {}} />
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="text-primary hover:text-secondary font-medium transition duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
