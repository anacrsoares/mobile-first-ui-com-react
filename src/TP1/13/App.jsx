export default function App() {
  return (
    <div>
      <div className="enunciado">
        <h1>
          Exercício 13: Crie um container flexível onde os itens são
          distribuídos ao redor do centro do container (space-around).
        </h1>
        <h2>Solução:</h2>
      </div>

      <div className="solucao">
        <h3>Flex direction: column;</h3>
        <ul class="container-column">
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
        <br />

        <h3>Flex direction: row;</h3>
        <ul class="container-row">
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </div>
    </div>
  );
}
