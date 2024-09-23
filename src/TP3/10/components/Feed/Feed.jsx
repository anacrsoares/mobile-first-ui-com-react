import Post from "./Post.jsx";
import posts from "./mock.js";
import "./Feed.css";

export default function Feed() {
  return (
    <div>
      <h1>Feed de Notícias</h1>

      <div className="post-feed">
        {posts.map((post) => (
          <Post key={post.id} info={post} />
        ))}
      </div>
    </div>
  );
}
