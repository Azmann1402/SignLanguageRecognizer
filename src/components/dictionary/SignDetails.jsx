import "../../styles/dictionary.css";

export default function SignDetails({ sign }) {
  if (!sign) {
    return (
      <div className="sign-details">
        <div className="sign-description">
          Select a sign from the left to see its details.
        </div>
      </div>
    );
  }

  return (
    <div className="sign-details">
      <div className="sign-details-title">{sign.name}</div>
      <div className="sign-details-meta">
        {sign.category} • {sign.difficulty}
      </div>

      <div className="sign-preview-box">
        {/* Placeholder – later replace with GIF/video from backend */}
        Preview area for {sign.name} sign
      </div>

      <div className="sign-description">{sign.description}</div>
    </div>
  );
}
