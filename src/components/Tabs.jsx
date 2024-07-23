import React, { useEffect, useRef, useState, useContext } from "react";
import { GalleryRest } from "../restaurantComponent/GalleryRest";
import { Contacto } from "../restaurantComponent/Contacto";
import { Menu } from "../restaurantComponent/Menu";

export const Tabs = ({ galeria,content }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef();
  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef(null);

  const data = [
    {
      label: "GALERIA",
      value: "GALERIA",
      img: "galeria.png",

      menuItems: [],
    },
    {
      label: "MENU",
      value: "MENU",
      img: "menu.png",

      menuItems: [],
    },
    {
      label: "CONTACTO",
      value: "CONTACTO",
      img: "contacto.png",

      menuItems: [],
    },
    {
      label: "PROMOCIONES",
      value: "PROMOCIONES",
      img: "promocion.png",

      menuItems: [],
    },
    {
      label: "RESEÑAS",
      value: "RESEÑAS",
      img: "resenas.png",

      menuItems: [],
    },
  ];

  const handleTabClick = (index, tabRef) => {
    setSelectedTab(index);
    // if (firstBtnRef && firstBtnRef.current) {
    //   setTimeout(() => {
    //     firstBtnRef.current.scrollIntoView({
    //       behavior: "smooth",
    //       inline: "center",
    //     });
    //   }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Función para renderizar el contenido de acuerdo al paso actual
  const renderStepContent = () => {
    switch (selectedTab) {
      case 0:
        return (
          <div className="w-full">
            <GalleryRest galeria={galeria} />
          </div>
        );
      case 1:
        return <div className="w-full">
        <Menu menu={content.menu} /> 
      </div>;
      case 2:
        return (
          <div className="w-full">
            <Contacto content={content} /> 
          </div>
        );
      case 3:
        return <div>PROMOCIONES</div>;
      case 4:
        return <div>RESEÑAS</div>;

      default:
        return null;
    }
  };

  return (
    <>
      <div className=" flex flex-col gap-5 items-center w-full ">
        {/* EMPIEZA EL CODIGO DE DISEÑO PARA TABS */}
        <div className="tabsContainer flex p-5 xl:justify-evenly justify-evenly gap-5 lg:w-[1500px]    items-center  bg-gray-200 shadow-lg w-full   mx-auto  xl:rounded-lg overflow-x-auto ">
          {data.map((item, index) => (
            <div
              ref={ref}
              key={`${item.label}-${index}`}
              className="flex   items-center flex-col justify-between gap-2 lg:gap-5   "
            >
              <img
                ref={index === selectedTab ? firstBtnRef : null}
                // key={index}
                onClick={() => handleTabClick(index, firstBtnRef)}
                className=" w-[35px] h-[35px]  object-contain object-center shadow-xl lg:h-[60px] lg:w-[80px] cursor-pointer"
                src={item.img}
              ></img>
              <button
                ref={index === selectedTab ? firstBtnRef : null}
                // key={index}
                onClick={() => handleTabClick(index, firstBtnRef)}
                className={`outline-none w-auto border border-gray-800 p-2 lg:hover:bg-black lg:hover:text-white rounded-xl text-center shadow-lg   ${
                  selectedTab === index ? " w-auto  bg-black text-white" : ""
                }`}
              >
                {item.label}
              </button>
            </div>
          ))}
        </div>
        {/* TERMINA DISEÑO DE TABS */}
        {/* EMPIEZA DISEÑO DE STEPPER */}

        {/* Mostrar contenido dinámico según el paso actual */}

        {renderStepContent()}
      </div>
    </>
  );
};
