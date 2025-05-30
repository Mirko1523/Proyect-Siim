/** @type {import('next').NextConfig} */
const nextConfig = {
  // ————————————————
  // 1) Activa el modo “export”:
  output: 'export',

  // 2) (Opcional pero recomendado)
  //    Si quieres que cada ruta vaya a una carpeta
  //    /about → /about/index.html
  trailingSlash: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
