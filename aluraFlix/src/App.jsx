import { useState } from "react";
import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer";
import Categoria from "./componentes/Categorias/Categoria";
import Banner from "./componentes/Banner/Banner";
import NuevoVideo from "./pages/NuevoVideo"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListPosts from "./componentes/ListPosts";
import Post from "./pages/posts"
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
    <Router>
      <div>
        <Header />
        <div>
        <Banner videos={videosDestacados} />
        <ListPosts url={"/posts"}/>
        </div>
      <Routes>
        <Route path="/NuevoVideo" element={<NuevoVideo />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
