import "./card.css";

export default function Card({ image, title, description, address }) {
  return (
    <div className="card-container">
      <img src={image} alt={title} className="card-image" />
      <div className="card-info">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="card-footer">{address}</div>
      </div>
    </div>
  );
}
