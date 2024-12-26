import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer";
import Categoria from "./componentes/Categorias/Categoria";
function App() {
  const [count, setCount] = useState(0);
  //lista de categorias
  const categorias = [
    {
      titulo: "Front-End",
      colorCategoria: "#6BD1FF",
    },
    {
      titulo: "Backend",
      colorCategoria: "#00C86F",
    },
    {
      titulo: "Imnovación y gestión",
      colorCategoria: "#FFBA05",
    },
  ];
  return (
    <>
      <div>
        <Header />
        {categorias.map((categoria) => {
          return <Categoria datos={categoria} key={categoria.titulo} />;
        })}
        <Footer />
      </div>
    </>
  );
}

export default App;
