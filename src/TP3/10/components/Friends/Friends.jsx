import friendsList from "./mock";
import Friend from "./Friend";
import "./Friends.css";

export default function Friends() {
  return (
    <div className="friends-list">
      <h3>Your Friends</h3>
      {friendsList.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </div>
  );
}
