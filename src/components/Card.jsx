import React from "react";
import {
  BsTelephoneForwardFill,
  BsFillCalendarDateFill,
  BsFillMapFill,
} from "react-icons/bs";

export const Card = ({
  title,
  logo,
  cover,
  setItem,
  restaurante,
  handleOpenModal,
  settransformLogo,
  handleMoreInfoClick,
}) => {
  return (
    <>
      <div className="card bg-white rounded-lg overflow-hidden shadow-xl w-[320px] md:w-[306px] h-[350px] md:h-[440px] lg:hover:scale-105 transition-all mx-auto   ">
        <div className="cover">
          <img
            src={cover}
            alt="Portada"
            className="w-full  h-[160px] md:h-[200px] object-cover"
          />
        </div>
        <div className="logo-container text-center mt-[-40px] md:mt-[-50px] ">
          <img
            src={logo}
            alt="Logo"
            className="rounded-full w-[100px] h-[100px] md:w-[100px] md:h-[100px] justify-center mx-auto  border-2 border-white shadow-md cursor-pointer"
            onClick={() => {
              setItem(restaurante);
              handleOpenModal();
              settransformLogo(logo);
              handleMoreInfoClick(restaurante);
            }}
          />
        </div>

        <h2 className=" text-[20px] md:text-xl lg:text-2xl font-bold text-center mt-5">
          {title}
        </h2>

        

        <div className="buttons-and-distance flex flex-col items-center py-4 px-2 md:py-8 md:px-4">
          <div className="buttons flex justify-evenly gap-4 md:gap-6  w-full">
            <button className="bg-blue-500 text-white px-2 md:px-4 py-1 md:py-2 rounded shadow-md">
              <BsTelephoneForwardFill className="text-[20px]" />
            </button>
            <button className="bg-green-500 text-white px-2 md:px-4 py-1 md:py-2 rounded shadow-md">
              
              <BsFillMapFill className="text-[20px]" />
            </button>
            <button className="bg-red-500 text-white px-2 md:px-4 py-1 md:py-2 rounded shadow-md">
              <BsFillCalendarDateFill className="text-[20px]" />
            </button>
          </div>

          <div className=" distance text-center md:text-right py-1 text-xs">
            <p>5.3 km</p>
          </div>
        </div>
      </div>
    </>
  );
};
