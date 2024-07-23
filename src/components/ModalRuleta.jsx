import React, { useEffect, useState } from "react";
import { Wheel } from "./Wheel";
//import { Wheel } from "react-wheel-of-fortune";

export const ModalRuleta = ({ show, onClose }) => {
  const segments = [
    { label: "TACOS", color: "#eae56f" },
    { label: "PIZZA", color: "#89f26e" },
    { label: "BONELESS", color: "#7de6ef" },
    { label: "PASTA", color: "#e7706f" },
    { label: "BURGERS", color: "#eae56f" },
    { label: "HOTDOGS", color: "#89f26e" },
    { label: "COMIDA CHINA", color: "#7de6ef" },
    { label: "SUSHI", color: "#e7706f" },
  ];

  const handleSpinComplete = (winner) => {
    alert(`You won: ${winner.label}`);
  };

  useEffect(() => {
    if (show) {
      // Añadir clase 'overflow-hidden' al body cuando el modal está abierto
      document.body.classList.add("overflow-hidden");
    } else {
      // Quitar clase 'overflow-hidden' del body cuando el modal está cerrado
      document.body.classList.remove("overflow-hidden");
    }

    // Limpiar efecto al desmontar el componente o cuando show cambia
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [show]);

  if (!show) return null; // No renderiza nada si show es falso

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center flex-col justify-center z-50"
      onClick={onClose}
    >
      <button
        className=" text-[30px] text-white self-end pr-3"
        onClick={onClose}
      >
        X
      </button>
      {/* MODAL CONTENT */}
      <div
        className="modal-content bg-white w-[95%] h-[50%] lg:w-[90%] lg:h-[90%] overflow-y-auto rounded-lg lg:p-6 p-1 flex flex-col items-center gap-5"
        onClick={(e) => e.stopPropagation()}
      >
        <Wheel segments={segments} onComplete={handleSpinComplete} />
      </div>
    </div>
  );
};
