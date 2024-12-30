import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer";
import Categoria from "./componentes/Categorias/Categoria";
import Banner from "./componentes/Banner/Banner";
function App() {
  const [count, setCount] = useState(0);
  //lista videos Destacados
  const videosDestacados = [
    {
      title: "Equipo Front End ",
      url: "https://www.youtube.com/embed/rpvrLaBQwgg",
    },
    {
      title: "Git y GitHub para Principiantes",
      url: "https://www.youtube.com/embed/-LmFK6skG7s",
    },
    {
      title: "Qué Significa Pensar Como Programador",
      url: "https://www.youtube.com/embed/ov7vA5HFe6w",
    },
  ];
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
        <div>
          <Banner videos={videosDestacados} />
        </div>
        {categorias.map((categoria) => {
          return <Categoria datos={categoria} key={categoria.titulo} />;
        })}
        <Footer />
      </div>
    </>
  );
}

export default App;
