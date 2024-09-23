import Suggestion from "./Suggestion";
import suggestions from "./mock.js";
import "./Suggestions.css";

export default function FriendsSuggestions() {
  return (
    <div className="friend-suggestions">
      <h3>Suggestions</h3>
      {suggestions.map((suggestion) => (
        <div key={suggestion.id}>
          <Suggestion friend={suggestion} />
          <p>Mutual Friend: {suggestion.mutualFriend}</p>
        </div>
      ))}
    </div>
  );
}
