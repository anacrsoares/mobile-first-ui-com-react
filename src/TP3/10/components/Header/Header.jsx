import "./header.css";
import logo from "../../assets/logo-social.png";

export default function Header() {
  return (
    <div className="container-header">
      <img src={logo} alt="logo" className="logo" />
      <nav className="nav-links">
        <a href="">Menu</a>
        <a href="">Feed</a>
        <a href="">Amigos</a>
        <a href="">Sugestões</a>
        <a href="">&#9776;</a>
      </nav>
    </div>
  );
}
