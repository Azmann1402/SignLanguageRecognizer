import { useState } from "react";
import "../styles/history.css";
import SessionFilters from "../components/history/SessionFilters";
import SessionList from "../components/history/SessionList";
import SessionDetails from "../components/history/SessionDetails";

export default function HistoryPage() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");
  const [sessions, setSessions] = useState([
    {
      id: "1",
      title: "Live session - Basic greetings",
      type: "live",
      date: "Dec 10, 2025",
      duration: "10 min",
      language: "ASL",
      transcript: "HELLO\nHOW ARE YOU\nTHANK YOU",
    },
    {
      id: "2",
      title: "Uploaded video - Alphabet practice",
      type: "upload",
      date: "Dec 11, 2025",
      duration: "5 min",
      language: "ASL",
      transcript: "A B C D E F G ...",
    },
  ]);

  const [selectedSession, setSelectedSession] = useState(sessions[0] || null);

  const filteredSessions = sessions.filter((s) => {
    const matchesType = type === "all" || s.type === type;
    const matchesSearch =
      !search ||
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      (s.transcript && s.transcript.toLowerCase().includes(search.toLowerCase()));
    return matchesType && matchesSearch;
  });

  const handleDelete = (id) => {
    console.log("DELETE SESSION (ready for backend):", id);
    setSessions((prev) => prev.filter((s) => s.id !== id));
    if (selectedSession?.id === id) {
      setSelectedSession(null);
    }
  };

  const handleSelect = (session) => {
    setSelectedSession(session);
    console.log("SELECT SESSION:", session.id);
  };

  return (
    <div className="history-container page">
      <div className="history-header">
        <div>
          <div className="history-title">History</div>
          <div className="history-subtitle">
            View your previous live translations and uploaded video transcripts.
          </div>
        </div>
      </div>

      <SessionFilters
        search={search}
        onSearchChange={setSearch}
        type={type}
        onTypeChange={setType}
      />

      <div className="history-layout">
        <SessionList
          sessions={filteredSessions}
          selectedId={selectedSession?.id}
          onSelect={handleSelect}
        />
        <SessionDetails session={selectedSession} onDelete={handleDelete} />
      </div>
    </div>
  );
}
