"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"


// Define the navigation links with dropdown support
const navLinks = [
  { name: "Inicio", href: "#hero", hasDropdown: false },
  { name: "Catalogo", href: "#services", hasDropdown: false },
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
          <div className="relative -mb-8 -mt-2 rounded-full overflow-hidden">
             <a href="/">
                    <Image
              src="/images/SinFondoKG.png"
              alt="SIIM Logo"
              width={180}
              height={180}
              className="object-contain"
            />
            </a>
          </div>
         
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8" ref={dropdownRef}>
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.hasDropdown ? (
                <>
                  <button
                    className={`flex items-center font-medium transition duration-300 ${
                      isScrolled ? "text-black hover:text-red-500" : "text-white hover:text-red-500"
                    }`}
                    onClick={() => toggleDropdown(link.name)}
                    aria-expanded={activeDropdown === link.name}
                    aria-haspopup="true"
                  >
                    {/* {link.name}
                    {activeDropdown === link.name ? (
                      <ChevronUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )} */}
                  </button>
           
                </>
              ) : (
                <a
                  href={link.href}
                  className={`font-medium transition duration-300 ${
                    isScrolled ? "text-black hover:text-red-500" : "text-white hover:text-red-500"
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
          className={`md:hidden ${isScrolled ? "text-black" : "text-black"}`}
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
                      className="flex items-center justify-between w-full text-black hover:text-red-500 font-medium transition duration-300"
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
                     <div className="mt-2 ml-4 space-y-2"
                     onClick={() => console.log("Clic en el contenedor padre 2")}
                     >
                   </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="text-black hover:text-secondary font-medium transition duration-300"
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
