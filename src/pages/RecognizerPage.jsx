import { useState } from "react";
import "../styles/recognizer.css";
import VideoFeed from "../components/recognizer/VideoFeed";
import Controls from "../components/recognizer/Controls";
import OutputPanel from "../components/recognizer/OutputPanel";

export default function RecognizerPage() {
  const [isActive, setIsActive] = useState(false);
  const [output, setOutput] = useState("");

  const handleStart = () => {
    setIsActive(true);
    console.log("START RECOGNIZER (ready for backend)");
  };

  const handlePause = () => {
    console.log("PAUSE RECOGNIZER (backend hook ready)");
  };

  const handleStop = () => {
    setIsActive(false);
    console.log("STOP RECOGNIZER");
  };

  const handleReset = () => {
    setOutput("");
    console.log("RESET OUTPUT");
  };

  return (
    <div className="recognizer-container page">
      <div className="video-box">
        <VideoFeed isActive={isActive} />
        <Controls
          onStart={handleStart}
          onPause={handlePause}
          onStop={handleStop}
          onReset={handleReset}
        />
      </div>

      <OutputPanel text={output} />
    </div>
  );
}
