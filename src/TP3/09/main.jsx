import React from "react";
import ReactDOM from "react-dom/client";
import Menu from "./Menu";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div class="enunciado">
      <h1>
        Tarefa 9 - Componente Menu Responsivo em React com Estilização por Class
      </h1>
      <p>
        Utilizando a ferramenta CodeSandbox e o template React, crie um
        componente que é um menu.
      </p>
      <p>
        Este menu deve ser do tipo expande/colapsa, possuir um elemento sempre
        visível que é o logo ou a marca do App e um outro elemento, também
        sempre visível, que é o botão para expandir/colapsar o menu.
      </p>
      <p>
        Os outros itens do menu, a saber: Home, Serviços, Produtos, Sobre nós e
        Contatos, ficarão escondidos no menu.
      </p>

      <p>
        Caso o dispositivo seja capaz de exibir todos os itens do menu na página
        (ou seja, caso ele tenha uma largura suficiente para isso), então o menu
        deve se adaptar a esta condição e se apresentar em um modelo de menu
        horizontal, exibindo todos os ítens, sem a mecânica de
        expandir/colapsar. Neste caso, o elemento que permite expandir/colapsar
        o menu, deve estar invisível.
      </p>
      <p>Faça isso utilizando apenas estilização por classes CSS, exemplo:</p>
      <p>Arquivo CSS:</p>
      <p>.container &#123;/* estilo */&#125;</p>
      <ul>
        <li>Pense Mobile-First.</li>
      </ul>
    </div>
    <div className="solucao">
      <Menu />
    </div>
  </React.StrictMode>
);
