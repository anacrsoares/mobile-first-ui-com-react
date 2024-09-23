import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Card.jsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div class="enunciado">
      <h1>Tarefa 7 - Componente Card React com Estilização por Class</h1>
      <p>
        Utilizando a ferramenta CodeSandbox e o template React, crie um
        componente com estilo card, com bordas arredondadas e com efeito de
        elevação (sombra).
      </p>
      <p>
        Para ele (o componente), o programador deve passar uma imagem, um
        título, uma descrição e um rodapé (ou seja, este componente deve esperar
        que lhe sejam passados parâmetros para que ele possa ser construído).
      </p>
      <p>Este card deve exibir a imagem na lateral esquerda dele.</p>
      <p>
        O título, a descrição e o rodapé devem aparecer à direita do card,
        alinhados verticalmente.
      </p>
      <p>Faça isso utilizando apenas estilização por classes CSS, exemplo:</p>
      <p>Arquivo CSS:</p>
      <p>.container {/* estilo */}</p>
      <ul>
        <li>Pense Mobile-First.</li>
      </ul>
    </div>
    <div className="solucao">
      <Card
        image="https://img.freepik.com/fotos-gratis/foto-vertical-do-museu-de-arte-contemporanea-de-niteroi-no-brasil_181624-27249.jpg?w=740&t=st=1727010047~exp=1727010647~hmac=ad3193fca9be85f3a138544799425e5cfcc1dda4055a0841b0a06c08b3d8d46f"
        title="Museu de Arte Contemporânea de Niterói"
        description="O Museu de Arte Contemporânea de Niterói (MAC) é um icônico edifício projetado por Oscar Niemeyer, com formato futurista e vista panorâmica da Baía de Guanabara. Inaugurado em 1996, abriga exposições de arte contemporânea e é conhecido tanto pela sua arquitetura inovadora quanto por sua coleção artística."
        address="Mirante da Boa Viagem, s/n - Boa Viagem, Niterói - RJ, 24210-390, Brasil."
      />
      <Card
        image="https://img.freepik.com/fotos-gratis/bondinho-do-pao-de-acucar-durante-o-por-do-sol_181624-36743.jpg?t=st=1727011631~exp=1727015231~hmac=0706b4447be92387fe5e3405cff634d5c2b6580b14984bcb2a92c8fd9a844660&w=740"
        title="Bondinho Pão de Açúcar"
        description="O Bondinho do Pão de Açúcar é um teleférico localizado no bairro da Urca, no município do Rio de Janeiro, no estado do Rio de Janeiro, no Brasil. Liga a Praia Vermelha ao Morro da Urca e ao Morro do Pão de Açúcar. "
        address="Av. Pasteur, 520 - Urca, Rio de Janeiro - RJ, 22290-240"
      />
    </div>
  </React.StrictMode>
);
