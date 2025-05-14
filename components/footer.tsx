import { Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SIIM</h3>
            <p className="mb-2">Soluciones Integrales en Ingeniería y Mantenimiento</p>
            <p>Empresa joven dedicada a brindar soluciones de alta calidad.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <p className="mb-2">Rosario, Santa Fe, Argentina</p>
            <p className="mb-2">+54 9 3492 58-3071</p>
            <p>info@siim.com.ar</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/siim"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition duration-300"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} SIIM. Todos los derechos reservados.</p>
          <p>Created by <a href="https://www.instagram.com/_mkmagency/">Mkm Agency</a>.</p>
        </div>
      </div>
    </footer>
  )
}
