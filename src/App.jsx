import ContainCard from "./components/ContainCard.jsx";
import data from "./data.js";

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
