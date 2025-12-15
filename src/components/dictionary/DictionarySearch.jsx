import "../../styles/dictionary.css";

export default function DictionarySearch({
  query,
  onQueryChange,
  letter,
  onLetterChange,
}) {
  const letters = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

  return (
    <div className="dictionary-search">
      <input
        type="text"
        placeholder="Search signs (e.g. HELLO, THANK YOU)"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
      <select
        value={letter}
        onChange={(e) => onLetterChange(e.target.value)}
      >
        {letters.map((l) => (
          <option key={l} value={l}>
            {l === "All" ? "All letters" : l}
          </option>
        ))}
      </select>
    </div>
  );
}
