import React, { useState, useEffect,  useRef } from "react";
import { Tabs } from "./Tabs";

export const RestauranteModal = ({
  openModal,
  setopenModal,
  item,
  transformLogo,
}) => {
  const [galeria, setgaleria] = useState(item);
  console.log("item", item ?? {});
console.log("itemGaleria", item?.galeria ?? []);

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
    <>
      {openModal && (
        // black overlay de fondo tranparente 
        <div
      
          onClick={() => setopenModal(!openModal)}
          className="w-screen h-screen fixed top-0 left-0  bg-[rgba(0,0,0,.5)] flex items-center  justify-center  z-30"
        >

          {/* Area del Modal  */}
          <div
           
            onClick={(e) => e.stopPropagation()}
            className="form-container mt-10 flex flex-col overflow-hidden items-center bg-[#f3f4f6] rounded-md"
          >
            <div className="form-header bg-black text-white w-[1000px] h-10 p-2 rounded-tl-md rounded-tr-md flex items-center justify-between mb-5">
              <h1 className=" lg:text-[20px] p-2">{item.title}</h1>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setopenModal(!openModal);
                  }}
                  className=" bg-red-500 rounded-lg px-4"
                >
                  cerrar
                </button>
              </div>
            </div>

            <img
              src={convertWixImageURL(item.logo)}
              alt=""
              className=" lg:w-[100px] rounded-full"
            />
            <h3 className=" lg:text-[30px] p-2">{item.title}</h3>
            <Tabs galeria={item.galeria} />
          </div>
          {/* termina area del modal */}
        </div>
      
      )}
    </>
  );
};
