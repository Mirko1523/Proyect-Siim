import { Facebook, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-red-950 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="mb-2">Brindamos soluciones en tu construcción</p>
            <p>KS GROUP es una solución para cada necesidad de nuestros clientes.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contactanos!</h3>
            <p className="mb-2">Buenos Aires, Argentina</p>
            <p className="mb-2">Contacto: +54 9 11 2387-7513</p>
            <p>emailejemplo@gmail.com</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos en todas las redes:</h3>
              <a
                href="https://www.instagram.com/ksgrouparg/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition duration-300"
              >
                <Instagram size={24} />
              </a>
            </div>
        </div>

        <div className="border-t border-red-500 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} KS GROUP. Todos los derechos reservados.</p>
          <p>Created by <a className="hover:underline" href="https://www.instagram.com/_mkmagency/">Mkm Agency</a>.</p>
        </div>
      </div>
    </footer>
  )
}
