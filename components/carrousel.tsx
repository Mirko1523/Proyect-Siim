import React from 'react';

const logos = [
  '/images/logoCricson.jpeg',
  '/images/logoSantaFe.png',
  '/images/logoJohn.jpeg',
  '/images/logoEnergylink.jpeg',
  '/images/logoBaraldi.jpg',
  '/images/langroup.png',
  '/images/logoFarmacity.png',
  '/images/LogoBancoComafi.jpg',
  '/images/logoGreenWorking.png',
  '/images/logoDia.png',
  '/images/logoBancoNacion.png',
  '/images/logoFTNet.png',
  '/images/logoCredicoop.jpg',
  '/images/logototalfrio.jpg',
  '/images/logogobierno.jpg',
  '/images/logoCalisa.png',
  '/images/logoAgropecuario.jpeg',
];

export default function LogoCarousel() {
  return (
    <div className="overflow-hidden bg-gray-100 py-5">
      <div className="flex flex-nowrap animate-slide-fast sm:animate-slide-medium transform-gpu will-change-transform">
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`Cliente ${i + 1}`}
            className="w-max h-20 rounded-xl bg-white mx-3 object-contain"
          />
        ))}
      </div>
    </div>
  );
}
