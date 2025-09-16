import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Bloque Simil Piedra Chico",
    description: "12 x 19 x 39",
    imageSrc: "/images/BloqueSimilPiedraChico.jpg",
    anchor: "Construcciones",
  },
  {
    id: 2,
    title: "Bloque Simil Piedra Grande",
    description: "19 x 19 x 39",
    imageSrc: "/images/SimilPiedraGrande.jpg",
    anchor: "Refrigeraciones",
  },
  {
    id: 3,
    title: "Bloque Liso Chico",
    description: "12 x 19 x 39",
    imageSrc: "/images/BloqueLisoChico.jpg",
    anchor: "Energia",
  },
  {
    id: 4,
    title: "Bloque Liso Grande",
    description: "19 x 39 x 39",
    imageSrc: "/images/BloqueLisoGrande.jpg",
    anchor: "Energia",
  },
  {
    id: 5,
    title: "Bloque Liso de Granza Chico",
    description: "12 x 20 x 40",
    imageSrc: "/images/BloqueLisoGranzaChico.jpg",
    anchor: "Energia",
  },
  {
    id: 6,
    title: "Bloque Liso de Granza Grande",
    description: "20 x 20 x 40",
    imageSrc: "/images/BloqueLisoGranzaGrande.jpg",
    anchor: "Energia",
  },
  {
    id: 7,
    title: "Garden Block",
    description: "35 x 35 x 8",
    imageSrc: "/images/GardenBlock.jpg",
    anchor: "Energia",
  },
  {
    id: 8,
    title: "Grilla Cesped",
    description: "35 x 35 x 7",
    imageSrc: "/images/GrillaCesped.jpg",
    anchor: "Energia",
  },
  {
    id: 9,
    title: "Bloque U",
    description: "19 x 19 x 39",
    imageSrc: "/images/BloqueU.jpg",
    anchor: "Energia",
  },
  {
    id: 10,
    title: "Palet Simil Piedra",
    description: "Hasta 150 bloques",
    imageSrc: "/images/PaletSimilPiedra.jpg",
    anchor: "Energia",
  },
];

type ServiceCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  slug: string;
  buttonLabel: string;
};

function ServiceCard({ title, description, imageSrc, slug, buttonLabel }: ServiceCardProps) {
  return (
    <article className="bg-white rounded-2xl shadow p-4 flex flex-col h-full">
      {/* Contenedor relativo con altura fija para next/image (fill) */}
      <div className="relative w-full h-56 md:h-64 lg:h-48 overflow-hidden rounded-lg">
        <Image
          src={imageSrc}
          alt={title}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
          priority={false}
        />
      </div>

      <div className="mt-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>

        <div className="mt-4">
          <a
            href={`#${slug}`}
            className="inline-block mt-auto bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-full"
          >
            {buttonLabel}
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="section-title text-black">Nuestro Catalogo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} id={service.anchor} className="h-full">
              <ServiceCard
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                slug={service.anchor}
                buttonLabel="Comprar"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
