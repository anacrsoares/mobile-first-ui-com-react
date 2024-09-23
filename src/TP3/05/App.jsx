import "./styles.css";

export default function App() {
  return (
    <div className="solucao">
      <h2>Desenvolvimento Front-End com Frameworks</h2>
      <h3>Mobile-First UI com React</h3>
      <h4>Diferença entre responsividade e adaptabilidade</h4>
      <p>
        A responsividade envolve a criação de layouts que se ajustam de maneira
        fluida e flexível a diferentes tamanhos de tela. O conteúdo se adapta
        automaticamente, reorganizando e redimensionando elementos conforme o
        espaço disponível.
      </p>
      <p>
        A adaptabilidade, por outro lado, envolve a criação de layouts distintos
        para diferentes dispositivos ou resoluções. Ao contrário do layout
        responsivo, que ajusta dinamicamente os elementos, o layout adaptável
        seleciona um design específico que se encaixa em uma gama limitada de
        dispositivos.
      </p>
      <p>
        Ambos os métodos são utilizados para garantir uma boa experiência do
        usuário em dispositivos móveis, tablets e desktops, mas o design
        responsivo tende a ser mais flexível, enquanto o adaptável se foca mais
        na otimização de layouts específicos para cada dispositivo.
      </p>
    </div>
  );
}
