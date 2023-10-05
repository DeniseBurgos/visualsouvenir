const Contact = () => {
  return (
    <div className=" inline lg:grid lg:grid-cols-2 w-screen h-screen my-10">
      {/* DIV IMAGEN */}
      <div className="p-5 flex flex-col items-center justify-center bg-slate-100">
        <img
          className=" sm:h-[auto] sm:w-[100%] lg:w-auto lg:h-[55%] my-20 mx-20"
          src="https://images.unsplash.com/1/work-stations-plus-espresso.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="agenda"
        />
      </div>
      {/* DIV FORMULARIO */}
      <div className=" flex flex-col items-center justify-center p-8 bg-slate-100">
        <h2 className="font-semibold text-4xl mt-8 text-center lg:ml-10">
          Contáctame
        </h2>
        <h6 className=" mt-7 lg:ml-20 text-center">
          Para consultas generales o laborales, contácteme en <br />
          <span className=" font-semibold">visualsouvenir@gmail.com</span> o
          mediante el formulario a continuación.
        </h6>
        <form
          action="https://getform.io/f/a4bd88f7-a846-4e3a-a9e6-08605e91309a"
          method="POST"
          className="flex flex-col lg:items-center space-y-1"
        >
          <div className=" w-2/3 sm:w-[300px]">
            <label htmlFor="name" className=" sr-only">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              className="border border-slate-800 rounded-lg mt-6 2xl:w-[400px] sm:w-[300px]"
            />
          </div>
          <div className="w-2/3 sm:w-[300px]">
            <label htmlFor="surname" className=" sr-only">
              Apellido
            </label>
            <input
              type="text"
              name="surname"
              placeholder="Apellido"
              className="border border-slate-800 mt-6  2xl:w-[400px] sm:w-[300px] rounded-lg"
            />
          </div>
          <div className=" w-2/3 sm:w-[300px]">
            <label htmlFor="email" className=" sr-only">
              Email
            </label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="border border-slate-800 mt-6  2xl:w-[400px]  sm:w-[300px] py-2 rounded-lg"
            />
          </div>
          <div className=" w-2/3 sm:w-[300px]">
            <label htmlFor="message" className=" sr-only">
              Mensaje
            </label>
            <textarea
              name="message"
              placeholder="Mensaje"
              id=""
              className="border border-slate-800 mt-6   2xl:w-[400px]  sm:w-[300px] rounded-lg"
            ></textarea>
          </div>
          <div className="">
            <button
              type="submit"
              className="border border-slate-800 px-4 py-2 rounded-lg bg-white text-amber-800 hover:bg-amber-800 hover:text-white transition mt-7 ml-10 lg:ml-20"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
