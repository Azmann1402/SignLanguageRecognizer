import "../../styles/dictionary.css";

export default function SignList({ signs, selectedId, onSelect }) {
  if (!signs || signs.length === 0) {
    return (
      <div className="sign-list">
        <div className="dictionary-subtitle">No signs found.</div>
      </div>
    );
  }

  return (
    <div className="sign-list">
      {signs.map((sign) => (
        <div
          key={sign.id}
          className={`sign-item ${selectedId === sign.id ? "active" : ""}`}
          onClick={() => onSelect(sign)}
        >
          <div>
            <div className="sign-item-name">{sign.name}</div>
            <div className="sign-item-label">{sign.category}</div>
          </div>
          <div className="sign-item-label">{sign.difficulty}</div>
        </div>
      ))}
    </div>
  );
}
