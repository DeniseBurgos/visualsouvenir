import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  {
    /* al clickear se abre el menú */
  }
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  {
    /* al clickear se cierra el menú */
  }
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white text-slate-950 py-8 flex items-center justify-between mr-36">
      {/* Logo y nombre */}
      <NavLink to="/" className="ml-8 flex items-center">
        <img src="logovisual1.jpeg" alt="logo" className="w-16 h-16" />
        <div className="text-3xl font-light ml-2">Visual Souvenir</div>
      </NavLink>

      {/* Icono del menú desplegable para dispositivos móviles */}
      <div className="md:hidden flex items-center">
        {/* Botón del menú desplegable */}
        <button
          className="text-amber-700 hover:text-amber-900 md:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Menú de navegación */}
      <div
        className={`${
          isMenuOpen
            ? "fixed inset-0 bg-white text-slate-950 flex flex-col items-center justify-center z-50 transition-transform transform translate-x-0"
            : "hidden"
        } md:flex md:items-center md:space-x-6`}
      >
        <NavLink
          exact
          to="/"
          className="text-lg font-semibold hover:text-amber-700 transition"
          activeClassName="border-b-2 border-amber-700"
          onClick={closeMenu}
        >
          Inicio
        </NavLink>
        <NavLink
          to="/about"
          className="text-lg font-semibold hover:text-amber-700 transition"
          activeClassName="border-b-2 border-amber-700"
          onClick={closeMenu}
        >
          Sobre mi
        </NavLink>
        <NavLink
          to="/portfolio"
          className="text-lg font-semibold hover:text-amber-700 transition"
          activeClassName="border-b-2 border-amber-700"
          onClick={closeMenu}
        >
          Proyectos
        </NavLink>
        <NavLink
          to="/contact"
          className="text-lg font-semibold hover:text-amber-700 transition"
          activeClassName="border-b-2 border-amber-700"
          onClick={closeMenu}
        >
          Contacto
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
