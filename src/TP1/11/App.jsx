export default function App() {
  return (
    <div>
      <div className="enunciado">
        <h1>
          Exercício 11: Crie um layout com três containers flexíveis aninhados.
          O container externo deve distribuir três containers internos
          verticalmente, e cada container interno deve distribuir quatro itens
          horizontalmente.
        </h1>
        <h2>Solução:</h2>
      </div>

      <div className="solucao">
        <div class="container-ext">
          <ul class="container-int">
            <li>Item 1.1</li>
            <li>Item 1.2</li>
            <li>Item 1.3</li>
            <li>Item 1.4</li>
          </ul>

          <ul class="container-int">
            <li>Item 2.1</li>
            <li>Item 2.2</li>
            <li>Item 2.3</li>
            <li>Item 2.4</li>
          </ul>

          <ul class="container-int">
            <li>Item 3.1</li>
            <li>Item 3.2</li>
            <li>Item 3.3</li>
            <li>Item 3.4</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
