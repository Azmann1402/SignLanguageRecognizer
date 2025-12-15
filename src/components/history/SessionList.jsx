import "../../styles/history.css";

export default function SessionList({ sessions, selectedId, onSelect }) {
  if (!sessions || sessions.length === 0) {
    return (
      <div className="history-list">
        <div className="history-subtitle">No sessions yet.</div>
      </div>
    );
  }

  return (
    <div className="history-list">
      {sessions.map((session) => (
        <div
          key={session.id}
          className={`session-card ${selectedId === session.id ? "active" : ""}`}
          onClick={() => onSelect(session)}
        >
          <div className="session-title">
            {session.title}
            <span className="session-badge">{session.type}</span>
          </div>
          <div className="session-meta">
            {session.date} • {session.duration} • {session.language}
          </div>
        </div>
      ))}
    </div>
  );
}
