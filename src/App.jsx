import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Homeowner from "./Homeowner.jsx";
import Trainer from "./Trainer.jsx";

function App() {
  const [mode, setMode] = useState("homeowner");

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
