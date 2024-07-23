import React, { useState } from "react";
import { RiMenuFill, } from "react-icons/ri";
import { SideBar } from "./SideBar";

export const NavBar = () => {
  // Define los elementos del menú
  const menuItems = [
    { id: 1, text: "Inicio" },
    { id: 2, text: "Acerca de" },
    { id: 3, text: "Registro" },
    { id: 4, text: <RiMenuFill/> },
  ];

  // Estado para controlar el estado del menú desplegable en dispositivos móviles
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  // Función para manejar el clic en el ícono de menú en dispositivos móviles
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSideBarToggle = () => {
    setShowSidebar(!showSidebar);
  };

 

  return (
    <>
    <SideBar showSidebar={showSidebar} handleSideBarToggle={handleSideBarToggle}/>
      <nav className="flex items-center justify-between p-5 bg-black text-white w-full">
        {/* Logo */}
       
          <img
            src="logo.jpg"
            alt="logo"
            className="w-[60px] h-[60px] rounded-full object-cover"
          />
          <h1 className="text-2xl font-semibold">JUAREZ STREETS</h1>
      

        {/* Menú en dispositivos grandes */}
        <div className="hidden md:flex">
          <ul className="flex space-x-4 items-center gap-5">
            {menuItems.map((item,index) => (
              <li key={item.id}>
                <a href="#" className="hover:text-gray-300 text-lg" onClick={index === menuItems.length - 1 ? handleSideBarToggle : undefined}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Menú desplegable en dispositivos móviles */}
        <div className="md:hidden">
          <button onClick={handleSideBarToggle} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          {isMobileMenuOpen && (
            <ul className="mt-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};
