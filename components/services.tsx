import ServiceCard from "./service-card"

const services = [
  {
    id: 1,
    title: "Construcciones Civiles y Mantenimiento",
    description: "Nos especializamos en diseño de proyectos edilicios,paisajismo, urbanismo y diseño de interiores. A su vez, realizamos mantenimiento preventivo.",
    imageSrc: "/images/construccionescivilesymantenimiento.webp",
    anchor: "Construcciones",
  },
  {
    id: 2,
    title: "Refrigeración Industrial",
    description: "Realizamos servicios de mantenimiento de aire acondicionado, sistemas Roof Top y equipos de refrigeración además de la venta de repuestos.",
    imageSrc: "/images/RefrigeracionIndustrial.jpg",
    anchor: "Refrigeraciones",
  },
  {
    id: 3,
    title: "Energia Electrica y Generación",
    description: "Desarrollo de proyectos Eléctricos con relevamiento de instalaciones y mediciones.",
    imageSrc: "/images/Energiaelectricaygeneración.jpeg",
    anchor: "Energia",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} id={service.anchor}>
              <ServiceCard 
                title={service.title} 
                description={service.description} 
                imageSrc={service.imageSrc} 
                slug={service.anchor} 
                buttonLabel="Ir al servicio" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}