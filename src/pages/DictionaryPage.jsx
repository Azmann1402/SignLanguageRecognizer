import { useState, useMemo } from "react";
import "../styles/dictionary.css";
import DictionarySearch from "../components/dictionary/DictionarySearch";
import SignList from "../components/dictionary/SignList";
import SignDetails from "../components/dictionary/SignDetails";

const mockSigns = [
  {
    id: "1",
    name: "HELLO",
    category: "Greeting",
    difficulty: "Easy",
    description: "Raise your hand near your head and move it outward in a small wave.",
  },
  {
    id: "2",
    name: "THANK YOU",
    category: "Politeness",
    difficulty: "Easy",
    description: "Place your fingertips on your chin and move your hand forward away from your face.",
  },
  {
    id: "3",
    name: "YES",
    category: "Basic",
    difficulty: "Easy",
    description: "Make a fist and move it up and down, as if nodding.",
  },
  {
    id: "4",
    name: "NO",
    category: "Basic",
    difficulty: "Easy",
    description: "Bring your index and middle finger together with your thumb, closing them like a beak.",
  },
];

export default function DictionaryPage() {
  const [query, setQuery] = useState("");
  const [letter, setLetter] = useState("All");
  const [selectedSign, setSelectedSign] = useState(mockSigns[0] || null);

  const filteredSigns = useMemo(() => {
    return mockSigns.filter((sign) => {
      const matchesLetter =
        letter === "All" || sign.name.startsWith(letter.toUpperCase());
      const matchesQuery =
        !query ||
        sign.name.toLowerCase().includes(query.toLowerCase()) ||
        sign.category.toLowerCase().includes(query.toLowerCase());
      return matchesLetter && matchesQuery;
    });
  }, [query, letter]);

  return (
    <div className="dictionary-container page">
      <div className="dictionary-header">
        <div className="dictionary-title">Sign Dictionary</div>
        <div className="dictionary-subtitle">
          Browse common signs and view their descriptions and preview area.
        </div>
      </div>

      <DictionarySearch
        query={query}
        onQueryChange={setQuery}
        letter={letter}
        onLetterChange={setLetter}
      />

      <div className="dictionary-layout">
        <SignList
          signs={filteredSigns}
          selectedId={selectedSign?.id}
          onSelect={setSelectedSign}
        />
        <SignDetails sign={selectedSign} />
      </div>
    </div>
  );
}
