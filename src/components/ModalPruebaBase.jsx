import React from 'react'

export const ModalPruebaBase = ({ show, onClose, content }) => {
    console.log("itemGaleria", content?.galeria ?? []);

    useEffect(() => {
      if (show) {
        // Añadir clase 'overflow-hidden' al body cuando el modal está abierto
        document.body.classList.add('overflow-hidden');
      } else {
        // Quitar clase 'overflow-hidden' del body cuando el modal está cerrado
        document.body.classList.remove('overflow-hidden');
      }
  
      // Limpiar efecto al desmontar el componente o cuando show cambia
      return () => {
        document.body.classList.remove('overflow-hidden');
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
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div
          className="modal-content bg-white w-4/5 h-4/5 overflow-y-auto rounded-lg p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="   text-xl text-red-400" onClick={onClose}>
            X
          </button>
          <h2 className="text-2xl mb-4">{content.title}</h2>
          <p className="mb-4">{content.keywords}</p>
          <h3 className="text-xl mb-2">Galería de Imágenes</h3>
          <div className="grid grid-cols-3 gap-4">
            {content.galeria.map((image, index) => (
              <img
                key={index}
                src={convertWixImageURL(image.src)}
                alt={`Imagen ${index + 1}`}
                className="w-full h-auto rounded-md"
              />
            ))}
          </div>
          <h3 className="text-xl mt-6 mb-2">Títulos Similares</h3>
          {/* <div>
                {content.similarTitles.map((title, index) => (
                  <p key={index} className="mb-1">{title}</p>
                ))}
              </div> */}
        </div>
      </div>
    );
}
