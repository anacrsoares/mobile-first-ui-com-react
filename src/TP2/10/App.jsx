export default function App() {
  return (
    <div>
      <div class="border">
        <div class="pergunta">
          <h1>Pergunta sobre Media Queries</h1>
          <p>Qual é o objetivo principal das media queries em CSS?</p>

          <ol class="opcoes">
            <li>A) Aumentar a velocidade de carregamento do site.</li>
            <li>B) Garantir a compatibilidade com diferentes navegadores.</li>
            <li>
              C) Adaptar o layout e o estilo do site para diferentes tamanhos de
              tela.
            </li>
            <li>D) Melhorar o SEO do site.</li>
            <li>E) Adicionar animações aos elementos do site.</li>
          </ol>
        </div>
      </div>

      <div class="resposta">
        <p>
          <strong>Resposta Correta:</strong> C) Adaptar o layout e o estilo do
          site para diferentes tamanhos de tela.
        </p>
        <p>
          <strong>Justificativa:</strong> As media queries permitem que você
          aplique estilos diferentes dependendo das características do
          dispositivo, como a largura da tela, o que ajuda a criar um design
          responsivo que se adapta a diferentes tamanhos de tela.
        </p>
      </div>
    </div>
  );
}
