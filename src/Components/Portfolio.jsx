import { useState, useEffect } from "react";
import Masonry from "react-responsive-masonry";
import portfolioData from "../constants/photosSelected";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [columns, setColumns] = useState(3);

  const openImageDetail = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImageDetail = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    function updateColumns() {
      // Ajusta el número de columnas según el ancho de la ventana
      if (window.innerWidth >= 900) {
        setColumns(3);
      } else if (window.innerWidth >= 700) {
        setColumns(2);
      } else {
        setColumns(2);
      }
    }

    // Escucha el evento de cambio de tamaño de la ventana
    window.addEventListener("resize", updateColumns);

    // Llama a updateColumns una vez al cargar la página
    updateColumns();

    // Limpia el event listener cuando se desmonta el componente
    return () => {
      window.removeEventListener("resize", updateColumns);
    };
  }, []);

  return (
    <div className="container mx-5 md:mx-44">
      <h1 className="text-3xl font-semibold mb-20 text-center py-24 bg-slate-100">
        Proyectos fotográficos
      </h1>
      <Masonry
        columnsCount={columns}
        gutter="20px" // Ajusta el espacio entre las imágenes
      >
        {portfolioData.map((item) => (
          <div key={item.id}>
            <div className="bg-white p-1">
              <img
                src={item.imageSrc}
                alt={item.title}
                className="w-full h-auto cursor-pointer"
                onClick={() => openImageDetail(item.imageSrc)} // Abre la imagen en detalle al hacer clic
              />
              <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </Masonry>

      {/* Muestra la imagen en detalle si hay una seleccionada */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={closeImageDetail}
          ></div>
          <div className="max-w-4xl w-full h-auto p-4 absolute z-50">
            <img
              src={selectedImage}
              alt="Imagen en detalle"
              className="w-full h-auto"
            />
            <button
              onClick={closeImageDetail}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
