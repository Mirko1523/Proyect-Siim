import ServiceCard from "./service-card"

const services = [
  {
    id: 1,
    title: "Ingeniería de Procesos",
    description: "Optimización y diseño de procesos industriales para mejorar la eficiencia y productividad.",
    imageSrc: "/images/IngenieriaDeProcesos.png",
    anchor: "ingenieria-procesos",
  },
  {
    id: 2,
    title: "Gestión de Activos",
    description: "Administración eficiente del ciclo de vida de los activos para maximizar su valor y rendimiento.",
    imageSrc: "/images/gestiondeactivos.png",
    anchor: "gestion-activos",
  },
  {
    id: 3,
    title: "Construcciones Civiles",
    description: "Desarrollo de proyectos de construcción civil con los más altos estándares de calidad y seguridad.",
    imageSrc: "/images/construccionesciviles.jpg",
    anchor: "construcciones-civiles",
  },
  {
    id: 4,
    title: "Proyectos Eléctricos",
    description: "Diseño e implementación de sistemas eléctricos para todo tipo de instalaciones industriales.",
    imageSrc: "/images/proyectoselectricos.webp",
    anchor: "proyectos-electricos",
  },
  {
    id: 5,
    title: "Generación de Energía",
    description: "Soluciones de generación de energía eficientes y sostenibles para necesidades industriales.",
    imageSrc: "/images/generacioningenieria.jpeg",
    anchor: "generacion-energia",
  },
  {
    id: 6,
    title: "Redes de Protección contra Incendios",
    description:
      "Diseño e instalación de sistemas de protección contra incendios que cumplen con las normativas vigentes.",
    imageSrc: "/images/redesdeincendio.jpeg",
    anchor: "redes-incendio",
  },
  {
    id: 7,
    title: "Refrigeración Industrial",
    description: "Sistemas de refrigeración industrial de alta eficiencia para procesos productivos.",
    imageSrc: "/images/refrigeracionindustrial.jpeg",
    anchor: "refrigeracion-industrial",
  },
  {
    id: 8,
    title: "Mantenimiento Civil y Mecánico",
    description: "Servicios de mantenimiento preventivo y correctivo para instalaciones civiles y equipos mecánicos.",
    imageSrc: "/images/Mantenimientocivilymecanico.jpg",
    anchor: "mantenimiento-civil",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <p className="section-description">
          Ofrecemos una amplia gama de servicios de ingeniería y mantenimiento para satisfacer las necesidades de
          nuestros clientes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} id={service.anchor}>
              <ServiceCard title={service.title} description={service.description} imageSrc={service.imageSrc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
