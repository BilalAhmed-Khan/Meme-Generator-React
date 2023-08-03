import "./styles.css";
import React from "react";
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";

export default function App() {
  return (
    <div className="App">
      <Header />
      <MemeGenerator />
    </div>
  );
}
