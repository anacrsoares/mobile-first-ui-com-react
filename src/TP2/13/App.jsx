export default function App() {
  return (
    <div>
      {/* <!-- Questão 1 --> */}
      <div class="question-container">
        <div className="question">
          <h2>Questão 1: O que é Mobile-First?</h2>
          <ul class="options">
            <li>
              A. Abordagem de design focada primeiro em dispositivos móveis
            </li>
            <li>B. Um tipo de linguagem de programação</li>
            <li>C. Uma ferramenta de desenvolvimento</li>
            <li>D. Framework para criação de aplicativos</li>
          </ul>
        </div>

        <div class="answer">
          <p>Resposta correta: A</p>
          <p>
            Justificativa: Mobile-First é uma abordagem de design que foca
            primeiro nos dispositivos móveis.
          </p>
        </div>
      </div>

      {/* <!-- Questão 2 --> */}
      <div class="question-container">
        <div className="question">
          <h2>
            Questão 2: Qual das alternativas abaixo não é um conceito de
            responsividade?
          </h2>
          <ul class="options">
            <li>A. Flexbox</li>
            <li>B. Grid Layout</li>
            <li>C. Media Queries</li>
            <li>D. Classes estáticas</li>
          </ul>
        </div>

        <div class="answer">
          <p>Resposta correta: D</p>
          <p>
            Justificativa: Classes estáticas não são um conceito de
            responsividade.
          </p>
        </div>
      </div>

      {/* <!-- Questão 3 --> */}
      <div class="question-container">
        <div class="question">
          <h2>Questão 3: O que são Media Queries?</h2>
          <ul class="options">
            <li>A. Ferramenta para medir performance do site</li>
            <li>
              B. Regras CSS que aplicam estilos dependendo do tamanho do
              dispositivo
            </li>
            <li>C. Elementos HTML para organizar o conteúdo</li>
            <li>D. Linguagem de programação para web</li>
          </ul>
        </div>

        <div class="answer">
          <p>Resposta correta: B</p>
          <p>
            Justificativa: Media Queries permitem que você aplique estilos de
            acordo com o tamanho da tela.
          </p>
        </div>
      </div>

      {/* <!-- Questão 4 --> */}
      <div class="question-container">
        <div class="question">
          <h2>Questão 4: Qual a principal vantagem do design Mobile-First?</h2>
          <ul class="options">
            <li>A. Melhora o tempo de carregamento em dispositivos móveis</li>
            <li>B. Reduz a complexidade do código</li>
            <li>C. Aumenta a segurança do site</li>
            <li>D. Melhora o SEO</li>
          </ul>
        </div>

        <div class="answer">
          <p>Resposta correta: A</p>
          <p>
            Justificativa: Mobile-First otimiza o site para carregamento rápido
            em dispositivos móveis.
          </p>
        </div>
      </div>

      {/* <!-- Questão 5 --> */}
      <div class="question-container">
        <div class="question">
          <h2>
            Questão 5: O que significa "viewport" em termos de desenvolvimento
            web?
          </h2>
          <ul class="options">
            <li>A. Uma biblioteca de JavaScript</li>
            <li>B. A área visível da página da web em um dispositivo</li>
            <li>C. Um servidor de páginas web</li>
            <li>D. O banco de dados usado para o site</li>
          </ul>
        </div>

        <div class="answer">
          <p>Resposta correta: B</p>
          <p>
            Justificativa: A viewport é a área visível da página da web no
            dispositivo do usuário.
          </p>
        </div>
      </div>
    </div>
  );
}
