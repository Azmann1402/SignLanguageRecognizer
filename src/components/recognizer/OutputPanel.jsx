import "../../styles/recognizer.css";

export default function OutputPanel({ text }) {
  return (
    <div className="output-box">
      <div className="output-title">Detected Text</div>
      <div className="output-text">{text || "No output yet..."}</div>
    </div>
  );
}
