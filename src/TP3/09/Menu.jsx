import logo from "../assets/logo.png";
import "./Menu.css";
import { useState } from "react";

export default function Menu() {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleMenu() {
    setIsExpanded(!isExpanded);
  }

  return (
    <header className="container-menu">
      <div className="menu-left">
        <img className="menu-logo" src={logo} alt="logo" />
        <button className="menu-toggle" onClick={() => toggleMenu()}>
          &#9776;
        </button>
      </div>
      <nav className={`menu-items ${isExpanded ? "expanded" : "collapsed"}`}>
        <a href="#home" className="menu-item">
          Home
        </a>
        <a href="#services" className="menu-item">
          Serviços
        </a>
        <a href="#products" className="menu-item">
          Produtos
        </a>
        <a href="#about" className="menu-item">
          Sobre Nós
        </a>
        <a href="#contact" className="menu-item">
          Contatos
        </a>
      </nav>
    </header>
  );
}
