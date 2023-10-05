const About = () => {
  return (
    <div className="lg:flex lg:flex-row-reverse bg-gray-100 lg:mt-60 ml-5 lg:ml-52 mb-5 lg:mb-52">
      {/* DIV FOTO PERFIL */}
      <div className="lg:w-1/2 lg:mr-7 ">
        <img
          className="h-96 w-96 rounded-full ml-5 lg:ml-72 mt-6 lg:mt-10"
          src="https://media.licdn.com/dms/image/C5603AQHnFnHERB5Jcw/profile-displayphoto-shrink_800_800/0/1517411090214?e=1701907200&v=beta&t=IL2uBwm-U1BeRxAbX5EScnEt6v8pkeb4fVoa5tmeGGQ"
          alt="nature image"
        />
      </div>
      {/* DIV TEXTO */}
      <div className="lg:w-1/2 p-8">
        <h2 className="text-3xl font-bold pb-4 italic text-[#000000] text-center lg:text-left">
          Mi nombre es{" "}
          <span className=" text-blue-700">César Pérez Fleming</span>
        </h2>
        <p className="text-xl py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad impedit
          quasi voluptatem saepe! Laudantium neque, accusantium distinctio
          assumenda rerum ullam dicta voluptatem? Placeat cumque quasi ex
        </p>
        <p className="text-xl py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad impedit
          quasi voluptatem saepe! Laudantium neque, accusantium distinctio
          assumenda rerum ullam dicta voluptatem? Placeat cumque quasi ex
        </p>
        <p className="text-xl py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad impedit
          quasi voluptatem saepe! Laudantium neque, accusantium distinctio
          assumenda rerum ullam dicta voluptatem? Placeat cumque quasi ex
        </p>
        <p className="text-xl py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad impedit
          quasi voluptatem saepe! Laudantium neque, accusantium distinctio
          assumenda rerum ullam dicta voluptatem? Placeat cumque quasi ex
        </p>
        <p className="text-xl py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad impedit
          quasi voluptatem saepe! Laudantium neque, accusantium distinctio
          assumenda rerum ullam dicta voluptatem? Placeat cumque quasi ex
        </p>
        <p className="text-xl py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad impedit
          quasi voluptatem saepe! Laudantium neque, accusantium distinctio
          assumenda rerum ullam dicta voluptatem? Placeat cumque quasi ex
        </p>
        {/* Agrega más párrafos aquí si es necesario */}
        <a
          href="/#/contact"
          className="group relative inline-block h-12 px-8 mt:6 lg:mt-16 bg-white text-lg font-bold text-[#363435] leading-10 border border-brown-500 rounded-none hover:bg-amber-900 hover:text-white hover:border-brown-700 transform transition-all duration-300 hover:scale-105"
        >
          Contactame para un presupuesto
          <div className="absolute inset-0 bg-white opacity-0 scale-0 group-hover:opacity-30 group-hover:scale-100 transition-all duration-300"></div>
        </a>
      </div>
    </div>
  );
};

export default About;
