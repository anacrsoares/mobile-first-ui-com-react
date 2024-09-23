export default function Post({ info }) {
  return (
    <div className="post">
      <img src={info.image} alt={info.title} className="post-image" />
      <h2>{info.title}</h2>
      <p>{info.text}</p>
      <small>{info.date}</small>
      <p>By {info.author}</p>
      <div>
        <span>{info.likes} likes</span> | <span>{info.shares} shares</span>
      </div>
      <div className="comments">
        <h4>Comments:</h4>
        <ul>
          {info.comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
