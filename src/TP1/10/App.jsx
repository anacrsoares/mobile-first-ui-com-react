export default function App() {
  return (
    <div>
      <div className="enunciado">
        <h1>
          Exercício 10: Crie um layout com dois containers flexíveis aninhados.
          O container externo deve distribuir dois containers internos
          horizontalmente, e cada container interno deve distribuir três itens
          verticalmente.
        </h1>
        <h2>Solução:</h2>
      </div>

      <div className="solucao">
        <div class="container-ext">
          <ul class="container-int">
            <li>Item 1.1</li>
            <li>Item 1.2</li>
            <li>Item 1.3</li>
          </ul>

          <ul class="container-int">
            <li>Item 2.1</li>
            <li>Item 2.2</li>
            <li>Item 2.3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
