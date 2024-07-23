import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../components/Card";
import { RestauranteModal } from "../components/RestauranteModal";
import { ModalPrueba } from "../components/ModalPrueba";
import { ModalPruebaBase } from "../components/ModalPruebaBase";
import { FilterRestaurants } from "../components/FilterRestaurants";
import { ModalRuleta } from "../components/ModalRuleta";

function Restaurantes() {
  const [showMenu, setShowMenu] = useState(false);
  const [restaurantes, setRestaurantes] = useState([]);
  const [openModal, setopenModal] = useState(false);
  const [item, setItem] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [showModalRuleta, setShowModalRuleta] = useState(false);
  const [selectedRestaurante, setselectedRestaurante] = useState(null);

  // esto nomas es para modo local en su momneto no se necesita tranformar las imagenes
  const [transformLogo, settransformLogo] = useState("");

  const handleMoreInfoClick = (restaurant) => {
    setselectedRestaurante(restaurant);
    setShowModal(!showMenu);
  };

  const handleOpenModal = () => {
    setopenModal(!openModal);
  };

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

  const getRestaurantes = async () => {
    try {
      const response = await axios.get(
        "https://api.allorigins.win/get?url=" +
          encodeURIComponent(
            "https://blinkcompany.wixsite.com/jstreetsf/_functions/restaurantes"
          )
      );
      const data = JSON.parse(response.data.contents);
      console.log("respnseData", data);
      setRestaurantes(data.items); // Asegúrate de que esta línea coincida con la estructura de los datos recibidos
    } catch (error) {
      console.error("Error fetching the restaurantes data:", error);
    }
  };

  useEffect(() => {
    getRestaurantes();
  }, []);

  return (
    <>
      <FilterRestaurants />
      <div className="flex flex-col items-center">
        <button
          onClick={() => {
            setShowModalRuleta(true);
          }}
          className=" shadow-lg p-2 rounded-lg w-[200px] border border-gray-300 mt-3 mx-auto "
        >
          Quiero algo alazar
        </button>
        <div className=" grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center w-full  mt-5 mx-auto lg:w-[1500px] gap-10 ">
          {restaurantes.length > 0 ? (
            restaurantes.map((restaurante, index) => {
              // Verifica si cover y logo están disponibles y tienen un valor válido
              const coverUrl = restaurante.cover
                ? convertWixImageURL(restaurante.cover)
                : "";
              const logoUrl = restaurante.logo
                ? convertWixImageURL(restaurante.logo)
                : "";

              return (
                <Card
                  key={index}
                  title={restaurante.title}
                  cover={coverUrl}
                  logo={logoUrl}
                  setItem={setItem}
                  restaurante={restaurante}
                  handleOpenModal={handleOpenModal}
                  settransformLogo={settransformLogo}
                  handleMoreInfoClick={handleMoreInfoClick}
                />
              );
            })
          ) : (
            <p>CARGANDO DATOS.</p>
          )}
        </div>
      </div>
      {/* <RestauranteModal openModal={openModal} setopenModal={setopenModal} item={item} transformLogo={transformLogo} /> */}
      <ModalPrueba
        show={showModal}
        onClose={() => setShowModal(false)}
        content={selectedRestaurante}
      />
      <ModalRuleta
        show={showModalRuleta}
        onClose={() => setShowModalRuleta(false)}
      />
      {/* <ModalPruebaBase show={showModal}  onClose={() => setShowModal(false)}  content={selectedRestaurante}/> */}
    </>
  );
}

export default Restaurantes;
