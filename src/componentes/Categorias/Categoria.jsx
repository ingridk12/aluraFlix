import "./Categoria.css";
const Categoria = (props) => {
  return (
    <section className="categoria">
      <h3>{props.datos.titulo}</h3>
      <div className="categoria_video"></div>
    </section>
  );
};
export default Categoria;
