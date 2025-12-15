import { Link } from "react-router-dom";
import "../styles/home.css";

export default function LandingPage() {
  return (
    <div className="home-container page">
      <section className="home-hero">
        <div className="home-title">Sign Language Recognizer</div>
        <div className="home-subtitle">
          A minimal, dark-themed web app that helps translate sign language
          into text in real time, with support for live recognition, video
          uploads, history, and a built-in sign dictionary.
        </div>
      </section>

      <section className="home-grid">
        <div className="home-card">
          <div className="home-card-title">Live Recognition</div>
          <div className="home-card-text">
            Use your webcam to translate signs in real time and see the
            recognized text instantly.
          </div>
          <div style={{ marginTop: 10 }}>
            <Link to="/recognizer">Go to Live Recognizer →</Link>
          </div>
        </div>

        <div className="home-card">
          <div className="home-card-title">Upload Videos</div>
          <div className="home-card-text">
            Upload pre-recorded videos for processing and review the
            generated transcripts later.
          </div>
          <div style={{ marginTop: 10 }}>
            <Link to="/upload">Open Upload Page →</Link>
          </div>
        </div>

        <div className="home-card">
          <div className="home-card-title">History</div>
          <div className="home-card-text">
            Keep track of your previous sessions and transcripts in one place.
          </div>
          <div style={{ marginTop: 10 }}>
            <Link to="/history">View History →</Link>
          </div>
        </div>

        <div className="home-card">
          <div className="home-card-title">Sign Dictionary</div>
          <div className="home-card-text">
            Explore common signs, their meanings, and how to perform them.
          </div>
          <div style={{ marginTop: 10 }}>
            <Link to="/dictionary">Browse Dictionary →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

