import { useState } from "react";
import "../../styles/upload.css";

export default function UploadBox({ onFileSelected }) {
  const [dragging, setDragging] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files[0];
    if (!file) return;

    onFileSelected(file);
  };

  return (
    <div
      className={`upload-box ${dragging ? "dragging" : ""}`}
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      onClick={() => document.getElementById("file-input").click()}
    >
      <input
        id="file-input"
        type="file"
        accept="video/*"
        hidden
        onChange={(e) => onFileSelected(e.target.files[0])}
      />

      <div className="upload-text">Click or Drag & Drop a Video</div>
      <div className="upload-hint">Supports MP4, MOV, WebM — for processing</div>
    </div>
  );
}
