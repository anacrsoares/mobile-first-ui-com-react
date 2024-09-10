import img from "../01/assets/image1.avif";

export default function App() {
  return (
    <div className="responsive-layout">
      <div className="container-responsive-img">
        <img src={img} className="responsive-img" />
      </div>
      <div>
        <p className="responsive-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quasi
          sapiente aliquid ducimus cupiditate repellendus consequatur recusandae
          tempora incidunt molestias exercitationem deleniti ea quis cum facere
          fuga maiores soluta reiciendis!
        </p>
      </div>
    </div>
  );
}
