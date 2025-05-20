import Link from 'next/link'
import React from 'react'

interface ServiceButtonProps {
  slug: string
  label?: string
}

export default function ServiceButton({ slug, label = 'Ver más' }: ServiceButtonProps) {
  return (
    <Link
      href={`${slug}`}
      className="mt-3 inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-200 text-sm md:text-base "
    >
      {label}
    </Link>
  )
}
