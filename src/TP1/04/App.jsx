export default function App() {
  return (
    <div>
      <div className="enunciado">
        <h1>
          Exercício 4: Crie um container flexível com quatro itens. Configure o
          terceiro item para encolher (flex-shrink) menos que os outros três
          quando o container for redimensionado.
        </h1>
        <h2>Solução:</h2>
      </div>

      <div className="solucao">
        <ul>
          <li className="item-1">Item 1</li>
          <li className="item-2">Item 2</li>
          <li className="item-3">Item 3</li>
          <li className="item-4">Item 4</li>
        </ul>
      </div>
    </div>
  );
}
