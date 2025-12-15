import "../../styles/history.css";

export default function SessionFilters({ search, onSearchChange, type, onTypeChange }) {
  return (
    <div className="history-filters">
      <input
        type="text"
        placeholder="Search by title or keyword"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select value={type} onChange={(e) => onTypeChange(e.target.value)}>
        <option value="all">All types</option>
        <option value="live">Live sessions</option>
        <option value="upload">Uploaded videos</option>
      </select>
    </div>
  );
}
