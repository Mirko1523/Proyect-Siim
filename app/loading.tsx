"use client"
// app/loading.tsx
import Image from 'next/image'

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <Image
        src="/images/logoSiim-Photoroom.png"
        alt="SIIM Logo"
        width={250}
        height={250}
        className="animate-pulse"
      />
    </div>
  )
}
