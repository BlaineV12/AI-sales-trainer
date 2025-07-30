import React, { useState } from "react";
import Trainer from "./Trainer.jsx";
import Homeowner from "./Homeowner.jsx";

export default function App() {
  const [mode, setMode] = useState("");

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>AI Sales Trainer</h1>
      {!mode && (
        <div>
          <p>Select a mode:</p>
          <button onClick={() => setMode("trainer")}>Trainer Mode</button>
          <button onClick={() => setMode("homeowner")}>Homeowner Mode</button>
        </div>
      )}

      {mode === "trainer" && <Trainer />}
      {mode === "homeowner" && <Homeowner />}
    </div>
  );
}
