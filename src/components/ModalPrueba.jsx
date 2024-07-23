import React, { useEffect } from "react";
import { Tabs } from "./Tabs";

export const ModalPrueba = ({ show, onClose, content }) => {
  console.log("itemGaleria", content?.galeria ?? []);

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

  function convertWixImageURL(wixImageURL) {
    const regex = /wix:image:\/\/v1\/(.*)\/(.*)#.*/;
    const match = wixImageURL.match(regex);

    if (match && match.length === 3) {
      const [_, imageID] = match;
      return `https://static.wixstatic.com/media/${imageID}`;
    } else {
      console.error("URL format is incorrect");
      return null;
    }
  }
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
        className="modal-content bg-white w-[95%] h-[90%] lg:w-[90%] lg:h-[90%]    overflow-y-auto rounded-lg lg:p-6 p-1 flex flex-col items-center gap-5"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={convertWixImageURL(content.logo)}
          className=" w-[110px] shadow-lg rounded-full mt-5"
        />
        <h2 className="text-2xl lg:text-[30px] mb-4 font-bold">
          {content.title}
        </h2>
        <button className=" shadow-lg p-2 rounded-lg w-[200px] border border-gray-300">Compartir</button>
        <p className="mb-4 text-center">{content.keywords}</p>
        <Tabs galeria={content.galeria} content={content} />
      </div>
    </div>
  );
};
