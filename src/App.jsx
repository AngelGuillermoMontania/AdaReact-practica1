import ContainCard from "./components/ContainCard.jsx";
import data from "./data.js";

function App() {
  // const search = () => {
  //   alert(`Hice click en el boton buscar`);
  // };

  // AGREGAR AQUI FUNCION QUITAR

  return (
    <div>
      <ContainCard cities={data} />
    </div>
  );
}

export default App;
