import img_placeholder from "./assets/placeholder.png";

export default function App() {
  return (
    <div>
      <header>
        <nav>
          <button class="menu-toggle">Menu</button>
          <ul class="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Hobbies</a>
            </li>
            <li>
              <a href="#">Amigos</a>
            </li>
          </ul>
        </nav>
      </header>
      <section class="perfil">
        <img src={img_placeholder} alt="Minha foto" />
        <p>
          Olá, meu nome é Ana Carolina. Gosto de programar, e gosto de música.
        </p>
      </section>
      <section class="hobbies">
        <h2>Meus Hobbies</h2>
        <img src={img_placeholder} alt="Hobby 1" />
        <img src={img_placeholder} alt="Hobby 2" />
      </section>
      <section class="amigos">
        <h2>Meus Amigos</h2>
        <ul>
          <li>
            <img src={img_placeholder} alt="Amigo 1" />
          </li>
          <li>
            <img src={img_placeholder} alt="Amigo 2" />
          </li>
        </ul>
      </section>
    </div>
  );
}
