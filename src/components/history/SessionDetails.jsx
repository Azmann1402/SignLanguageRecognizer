import "../../styles/history.css";

export default function SessionDetails({ session, onDelete }) {
  if (!session) {
    return (
      <div className="history-details">
        <div className="details-empty">
          Select a session from the left to view its transcript.
        </div>
      </div>
    );
  }

  return (
    <div className="history-details">
      <div className="details-title">{session.title}</div>
      <div className="details-meta">
        {session.date} • {session.duration} • {session.language}
      </div>

      <div className="details-text">
        {session.transcript || "Transcript not available yet."}
      </div>

      <div className="details-actions">
        <button className="details-btn" onClick={() => console.log("Download transcript (backend later)")}>
          Download transcript
        </button>
        <button className="details-btn" onClick={() => onDelete(session.id)}>
          Delete session
        </button>
      </div>
    </div>
  );
}
