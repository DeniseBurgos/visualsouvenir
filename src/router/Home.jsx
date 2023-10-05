const Home = () => {
  return (
    <div className="h-full w-screen overflow-hidden">
      <div className="my-10 flex flex-col">
        {/* imagen para dispositivos móviles */}
        <img
          src="https://64.media.tumblr.com/0602b35c41b372dc43de1b944fe31fd5/tumblr_o4rqlptKYK1snqzu8o1_1280.jpg"
          alt="Descripción de la imagen"
          className=" lg:hidden lg:ml-44 lg:w-[60%] lg:h-auto absolute"
        />
        <h1 className="ml-5 lg:text-center  text-6xl lg:text-8xl font-bold py-10 lg:py-40 font-abc italic relative z-10">
          Creamos imagen, generamos recuerdo
        </h1>
        <div className="flex items-center">
          <h3 className="text-center ml-20 lg:text-left lg:ml-44 my-14 font-abc text-[40px] bg-slate-100">
            Desde Perú, con más de 15 años de experiencia en fotografía, te
            ofrezco un servicio de calidad y profesionalismo para que tengas los
            mejores recuerdos de tus momentos más importantes.
          </h3>
          {/* imagen para dispositivos de escritorio */}
          <img
            src="https://64.media.tumblr.com/0602b35c41b372dc43de1b944fe31fd5/tumblr_o4rqlptKYK1snqzu8o1_1280.jpg"
            alt="Descripción de la imagen"
            className=" ml-44 w-[60%] h-auto " // Ajusta el tamaño según tus necesidades
          />
        </div>
        <div className="flex mx-24 lg:ml-44">
          <a
            href="/portfolio" // Cambia la URL por la de tu portafolio
            className="group relative inline-block h-12 px-8 bg-white text-lg font-bold text-[#363435] leading-10 border border-brown-500 rounded-none hover:bg-amber-900 hover:text-white hover:border-brown-700 transform transition-all duration-300 hover:scale-105"
          >
            Mira mis trabajos aquí
            <div className="absolute inset-0 bg-white opacity-0 scale-0 group-hover:opacity-30 group-hover:scale-100 transition-all duration-300"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
