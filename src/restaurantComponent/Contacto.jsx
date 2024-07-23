import React, { useState } from "react";

export const Contacto = ({content}) => {
  // Ejemplo de valores de latitud y longitud
  const [latitude, setLatitude] = useState(content.latitude);
  const [longitude, setLongitude] = useState(content.longitude);

  const generateMapUrl = (lat, lng) => {
    return `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13276.873245909204!2d${lng}!3d${lat}!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2z${lat},${lng}!5e0!3m2!1ses-419!2smx!4v1717443623897!5m2!1ses-419!2smx`;
  };
  return (
    <>
      <div className=" flex flex-col items-center gap-5">
        <div className=" grid grid-cols-4 items-center  justify-evenly w-full border border-orange-400 p-4 gap-10 rounded-lg ">
          <img src="/facebook.svg" alt="icono" className="w-[35px] h-[35px]" />
          <img src="/instagram.svg" alt="icono" className="w-[35px] h-[35px]" />
          <img src="/whatsapp.svg" alt="icono" className="w-[35px] h-[35px]" />
          <img src="/facebook.svg" alt="icono" className="w-[35px] h-[35px]" />
          <img src="/instagram.svg" alt="icono" className="w-[35px] h-[35px]" />
          <img src="/whatsapp1.svg" alt="icono" className="w-[35px] h-[35px]" />
          <img src="/facebook.svg" alt="icono" className="w-[35px] h-[35px]" />
        </div>

        <div className=" flex items-center  justify-evenly w-full border border-orange-400 p-4 gap-10 rounded-lg ">
          <img
            src="/googleMaps.svg"
            alt="icono"
            className="w-[35px] h-[35px]"
          />
          <p>{content.txtdireccion}</p>
        </div>

        {/* seccion del mapa */}
        <div className=" flex items-center flex-col  justify-center h-[400px] xl:h-[500px] w-full p-5 rounded-lg">
          <h3 className=" font-semibold text-[20px] text-black">UBICACIÓN</h3>
          <div className="relative w-full h-full xl:h-full rounded-lg">
            <iframe
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.445394477196!2d-106.41459152386679!3d31.731041636702372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75c75c2f5e5d1%3A0x35e720c40189d7f9!2sC.%20de%20Los%20Portales%20802%2C%20Partido%20Doblado%2C%2032434%20Ju%C3%A1rez%2C%20Chih.!5e0!3m2!1ses-419!2smx!4v1717443623897!5m2!1ses-419!2smx"
              src={generateMapUrl(latitude, longitude)}
              width="100%"
              height="100%"
              style={{ border: "0", borderRadius: "inherit" }}
              allowfullscreen=""
              // loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
