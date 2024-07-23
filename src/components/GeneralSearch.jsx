import React from "react";

export const GeneralSearch = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center h-[150px] flex flex-col items-center justify-center w-full gap-3  "
        style={{ backgroundImage: 'url("searchBg.webp")' }}
      >
        <h1 className="text-[20px] text-white font-bold mb-4">
          BUSQUEDA GENERAL
        </h1>

        {/* Formulario de búsqueda */}
        <form className=" w-full  flex flex-col items-center justify-center gap-3 ">
          <input
            type="text"
            placeholder="TACOS, GYM, SPA, VETERINARIA"
            className="  border-b-2 w-[350px]  border-orange-500 rounded-l focus:outline-none  md:w-[400px] bg-transparent text-white placeholder:text-center placeholder:text-white"
          />
          <button
            type="submit"
            className="px-6 py-1 bg-black rounded-r text-white focus:outline-none rounded-md"
          >
            Buscar
          </button>
        </form>
      </section>
    </>
  );
};
