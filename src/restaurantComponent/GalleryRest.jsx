import React, { useState } from "react";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";

export const GalleryRest = ({ galeria }) => {
  const [openL, setOpenL] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Mapear la galería para convertir las URLs
  const slides = galeria.map((img) => ({
    src: convertWixImageURL(img.src) || img.src,
    alt: img.alt,
    title: img.title,
    description: img.description,
  }));

  return (
    <>
      <Lightbox
        open={openL}
        close={() => setOpenL(false)}
        slides={slides}
        plugins={[Zoom,Counter]}
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
        index={currentIndex}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {slides.map((img, index) => (
          <div key={index} className=" ">
            <img
              onClick={() => {
                setCurrentIndex(index); // Establece la imagen actual
                setOpenL(true); // Abre el Lightbox
              }}
              // className="h-auto max-w-full rounded-lg object-cover object-center shadow-lg lg:hover:scale-105 transition-all lg:cursor-pointer lg:w-[300px]"
              className="w-full lg:w-[500px] lg:h-[500px] h-auto rounded-md object-cover"
              src={img.src}
              alt={img.alt}
            />
          </div>
        ))}
      </div>
    </>
  );
};
