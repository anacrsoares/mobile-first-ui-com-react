import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="enunciado">
      <h1>Tarefa 6 - Componente React com Estilização por Class</h1>

      <p>
        Utilizando a ferramenta CodeSandbox e o template React, crie uma página
        simples. Esta página deve conter:
      </p>
      <ul>
        <li>
          Título de segundo nível com o texto: “Desenvolvimento Front-End com
          Frameworks”.
        </li>
        <li>
          Título de terceiro nível com o texto: “Mobile-First UI com React”.
        </li>
        <li>Título de quarto nível com o texto: “Conceitos de Usabilidade”.</li>
        <li>
          Um texto, devendo ser separado em vários parágrafos, explicando a
          diferença apontada no texto anterior.
        </li>
      </ul>
      <p>Estilize a página para que:</p>
      <ul>
        <li>
          O h2 fique com a fonte maior que o h3, que terá a fonte maior que o
          h4, que terá a fonte maior que o p. Cada um desses componentes deve
          ter um tamanho de fonte mínimo, ideal e máximo.
        </li>
        <li>Todos os cabeçalhos devem ter o texto centralizado.</li>
        <li>
          Todos os parágrafos devem ter o texto justificado e a primeira linha
          deve estar avançada para a direita. Além disso, deve-se haver um
          espaçamento interno (padding) na vertical de 0 e na horizontal de
          20px.
        </li>
      </ul>
      <p>
        Faça isso utilizando apenas estilização direta de tags, exemplo: Arquivo
        CSS: .container &#123;/* estilo */&#125;
      </p>

      <ul>
        <li>Pense Mobile-First.</li>
      </ul>
    </div>
    <App />
  </React.StrictMode>
);
