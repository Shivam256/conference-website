import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Router from "./routes/routes.index";

function App() {
  return (
    <div className="app">
      <Router />
    </div>
  );
}

export default App;
