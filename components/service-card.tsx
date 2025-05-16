import Image from "next/image"
import ServiceButton from "./buttons"

interface ServiceCardProps {
  title: string
  description: string
  imageSrc: string
  slug: string;
  buttonLabel?: string;
}

export default function ServiceCard({ title, description, imageSrc, slug, buttonLabel='ir al servicio' }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative w-full h-64">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
        <div className="mt-4 justify-center flex">
        <ServiceButton slug={slug} label={buttonLabel} />
        </div>
      </div>
    </div>
  )
}
