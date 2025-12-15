import "../../styles/recognizer.css";

export default function Controls({ onStart, onStop, onPause, onReset }) {
  return (
    <div className="controls">
      <button className="control-btn" onClick={onStart}>Start</button>
      <button className="control-btn" onClick={onPause}>Pause</button>
      <button className="control-btn" onClick={onStop}>Stop</button>
      <button className="control-btn" onClick={onReset}>Reset</button>
    </div>
  );
}
