import { useRef } from "react";
import { Link } from "react-router-dom";
import "./cabecalho.css";

/**
 * Cabeçalho que contém os links para navegar entre as páginas
 *
 * Uso: `<Cabecalho />`
 *
 * @returns {tsx.Element}
 */
const Cabecalho = () => {
  const menuHamburguer = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    menuHamburguer.current?.classList.toggle("open");
  }

  return (
    <header>
      <div>
        <div>
          <h2>Exame Final de Frontend IV</h2>
        </div>
        <nav className="menu">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/favoritos">Favoritos</Link>
            </li>
            <li>
              <Link to="/detalhe/1">Detalhe</Link>
            </li>
          </ul>
        </nav>
          <button className="toggle-menu" onClick={toggleMenu}>
            <label></label>
            <label></label>
            <label></label>
          </button>
        <nav className="menu-hamburguer" ref={menuHamburguer}>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/favoritos">Favoritos</Link>
            </li>
            <li>
              <Link to="/detalhe/1">Detalhe</Link>
            </li>
          </ul>
          <button onClick={toggleMenu}>X</button>
        </nav>
      </div>
    </header>
  );
};

export default Cabecalho;
