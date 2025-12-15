import "../../styles/upload.css";

export default function ProgressBar({ progress }) {
  return (
    <div className="progress-wrapper">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
}
