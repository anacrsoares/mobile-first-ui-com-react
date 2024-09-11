export default function App() {
  return (
    <div>
      <div className="border">
        <div class="pergunta">
          <h1>Pergunta sobre Responsividade</h1>
          <p>
            Qual é o objetivo de uma abordagem mobile-first no desenvolvimento
            de sites?
          </p>

          <ol>
            <li>A) Aumentar a performance em desktops.</li>
            <li>B) Focar na usabilidade em telas menores primeiro.</li>
            <li>C) Melhorar o SEO do site.</li>
            <li>D) Tornar o site mais bonito.</li>
            <li>E) Otimizar o tempo de carregamento de imagens.</li>
          </ol>
        </div>
      </div>

      <div class="resposta">
        <p>
          <strong>Resposta Correta:</strong> B) Focar na usabilidade em telas
          menores primeiro.
        </p>
        <p>
          <strong>Justificativa:</strong> A abordagem mobile-first significa
          projetar o site inicialmente para dispositivos móveis, garantindo uma
          boa usabilidade e performance em telas menores antes de adaptar para
          telas maiores.
        </p>
      </div>
    </div>
  );
}
