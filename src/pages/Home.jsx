import { useState } from "react";

import { GeneralSearch } from "../components/GeneralSearch";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";
import { SwiperRestaurants } from "../components/SwiperRestaurants";

function Home() {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <>
     
     
       <GeneralSearch/> 
      <section className="relative h-[250px] sm:h-[800px] md:h-[1000px] lg:h-[600px] xl:h-[400px] bg-cover bg-center flex items-center justify-center ">
        {/* Fondo de la sección */}
        <div
          className="absolute inset-0 bg-cover bg-center w-full "
          style={{ backgroundImage: 'url("heroSectionRes.webp")' }}
        ></div>

        {/* Contenido centrado */}
        <div className="relative z-10 text-white text-center w-full">
          {/* Título */}
          <h1 className="text-2xl sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
            GASTRONOMIA
          </h1>
        </div>
      </section>
      <SwiperRestaurants />
    </>
  )
}

export default Home