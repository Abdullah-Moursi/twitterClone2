import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Twittes from "./components/Twittes";

function App() {
  return (
    <div className="Twitter">
      <Sidebar />
      <Twittes />
    </div>
  );
}

export default App;
