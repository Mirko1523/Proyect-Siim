import { Facebook, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
              <div className="h-14 w-14 relative rounded-full overflow-hidden">
              <Image src="/images/logonavbar.png" alt="SIIM Logo" fill className="object-contain" />
              </div>
            <p className="mb-2">Brindamos soluciones en Ingeniería y Mantenimiento</p>
            <p>Empresa dedicada a brindar soluciones de alta calidad en todo el suelo Argentino.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contactanos!</h3>
            <p className="mb-2">Parana 533</p>
            <p className="mb-2">Rosario, Santa Fe, Argentina</p>
            <p className="mb-2">Contacto: +54 9 3492 58-3071</p>
            <p>info@siim.com.ar</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos en todas las redes:</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/siim"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition duration-300"
              >
                <Facebook size={24} />
              </a>
      
              <a
                href="https://www.instagram.com/siimingenieriaymantenimiento/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition duration-300"
              >
                <Instagram size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/sebastian-quintana-94441427/?fbclid=PAZXh0bgNhZW0CMTEAAafNf1olir4AVu--QACbhiZwvoTDTn77CYkavvN_I9EWYtYTbImySgzlGbRQ8A_aem_U6TczGevd3rKz2IpIzA82Q"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition duration-300"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} SIIM. Todos los derechos reservados.</p>
          <p>Created by <a className="hover:underline" href="https://www.instagram.com/_mkmagency/">Mkm Agency</a>.</p>
        </div>
      </div>
    </footer>
  )
}
