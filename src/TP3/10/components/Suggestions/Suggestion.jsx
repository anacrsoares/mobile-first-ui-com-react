import "./Suggestions.css";

export default function Suggestion({ friend }) {
  return (
    <div className="friend">
      <img src={friend.photo} alt={friend.name} className="friend-photo" />
      <p>{friend.name}</p>
      <small>{friend.mutualFriends} </small>
    </div>
  );
}
