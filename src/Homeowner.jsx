import React, { useState } from "react";

const Homeowner = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSimulate = () => {
    if (!input.trim()) return;

    // Very simple simulation logic (expand later)
    const lower = input.toLowerCase();
    if (lower.includes("price") || lower.includes("cost")) {
      setResponse("That seems expensive. What makes your service worth it?");
    } else if (lower.includes("contract")) {
      setResponse("Do I have to sign something? I'm not sure I want to commit.");
    } else if (lower.includes("already have") || lower.includes("currently with")) {
      setResponse("We're already with another company. They've been okay.");
    } else {
      setResponse("Hmm. I'm just not sure we need this right now.");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Homeowner Simulator</h1>
      <p>Type in your pitch and simulate a homeowner's reaction.</p>
      <textarea
        rows="6"
        cols="60"
        placeholder="Start your pitch here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "0.5rem", fontSize: "1rem", marginTop: "1rem" }}
      />
      <br />
      <button
        onClick={handleSimulate}
        style={{
          marginTop: "0.5rem",
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Simulate Objection
      </button>

      {response && (
        <div
          style={{
            marginTop: "1rem",
            backgroundColor: "#f1f1f1",
            padding: "1rem",
            borderRadius: "5px",
            whiteSpace: "pre-wrap",
          }}
        >
          <strong>Homeowner says:</strong>
          <br />
          {response}
        </div>
      )}
    </div>
  );
};

export default Homeowner;
