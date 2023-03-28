import React from "react";
import data from "./data.js";
import "./App.css";
import ContainCard from "./components/ContainCard.jsx";

function App() {
  // const search = (e) => {
  //   alert(`Hice ${e.type} en buscar`);
  // };

  return (
    <div className="App">
      <ContainCard cities={data} />
    </div>
  );
}

export default App;
