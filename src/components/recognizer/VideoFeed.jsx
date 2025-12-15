import { useEffect, useRef } from "react";
import "../../styles/recognizer.css";

export default function VideoFeed({ isActive }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch((err) => console.error("Camera error:", err));

    return () => {
      if (videoRef.current?.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((t) => t.stop());
      }
    };
  }, [isActive]);

  return <video ref={videoRef} className="video-preview" />;
}
