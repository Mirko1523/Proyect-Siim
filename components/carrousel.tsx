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
 
    
];

export default function LogoCarousel() {
  return (
    
    <div className="overflow-hidden bg-gray-100 py-5">
      <div className="flex animate-slide">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Cliente ${index + 1}`} className="w-max h-20  rounded-xl bg-white mx-3" />
        ))}
        {logos.map((logo, index) => (
          <img key={index + logos.length} src={logo} alt={`Cliente ${index + 1}`} className="w-max h-20 rounded-xl bg-white mx-3 object-contain" />
        ))}
      </div>
    </div>

  );
}