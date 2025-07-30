import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Homeowner from "./Homeowner";
import Trainer from "./Trainer"; // ✅ Make sure this matches the exact filename

function App() {
  const [mode, setMode] = useState("homeowner"); // "homeowner" or "trainer"

  return (
    <div>
      <header>
        <h1>AI Sales Trainer</h1>
        <button onClick={() => setMode("homeowner")}>Homeowner Mode</button>
        <button onClick={() => setMode("trainer")}>Trainer Mode</button>
      </header>

      {mode === "homeowner" ? <Homeowner /> : <Trainer />}
    </div>
  );
}

export default App;
