import React, { useState } from "react";

export default function Trainer() {
  const [feedback, setFeedback] = useState("");
  const [pitch, setPitch] = useState("");

  const handleAnalyze = () => {
    if (!pitch.trim()) {
      setFeedback("Please enter your pitch.");
      return;
    }

    // Very simple simulated feedback logic
    if (pitch.toLowerCase().includes("footings")) {
      setFeedback("Good use of switchover terminology. Try adding a soft close.");
    } else if (pitch.toLowerCase().includes("service")) {
      setFeedback("Nice mention of service — now try digging deeper for a reason to switch.");
    } else {
      setFeedback("Try introducing key features like pricing or neighborhood clout.");
    }
  };

  return (
    <div>
      <h2>Trainer Mode</h2>
      <textarea
        rows="6"
        cols="60"
        placeholder="Paste your pitch here..."
        value={pitch}
        onChange={(e) => setPitch(e.target.value)}
      />
      <br />
      <button onClick={handleAnalyze}>Analyze</button>
      <p style={{ marginTop: "1rem", fontWeight: "bold" }}>{feedback}</p>
    </div>
  );
}
