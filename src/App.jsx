import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Trainer from "./Trainer";
import Homeowner from "./Homeowner";

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
