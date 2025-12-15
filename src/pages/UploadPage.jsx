import { useState } from "react";
import UploadBox from "../components/upload/UploadBox";
import ProgressBar from "../components/upload/ProgressBar";
import "../styles/upload.css";

export default function UploadPage() {
  const [progress, setProgress] = useState(0);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [resultText, setResultText] = useState("");

  const handleFileSelected = (file) => {
    setUploadedFile(file);
    console.log("FILE SELECTED:", file);

    // Backend-ready upload simulation
    let p = 0;
    const interval = setInterval(() => {
      p += 10;
      setProgress(p);

      if (p >= 100) {
        clearInterval(interval);
        console.log("UPLOAD READY FOR BACKEND");
        setResultText("Transcript will appear here once backend is connected.");
      }
    }, 200);
  };

  return (
    <div className="upload-container page">
      <h2>Upload Video</h2>
      <p style={{ color: "var(--text-dim)" }}>
        This section allows video upload for sign recognition processing.
      </p>

      <UploadBox onFileSelected={handleFileSelected} />

      {uploadedFile && <ProgressBar progress={progress} />}

      {resultText && (
        <div style={{
          marginTop: "20px",
          background: "var(--bg-2)",
          padding: "20px",
          borderRadius: "var(--radius)"
        }}>
          {resultText}
        </div>
      )}
    </div>
  );
}
