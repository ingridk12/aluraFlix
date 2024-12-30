import "./Categoria.css";
const Categoria = (props) => {
  //Destructuracion
  const { colorCategoria, titulo } = props.datos;
  const estiloTitulo = { borderColor: colorCategoria };
  return (
    <section className="categoria">
      <h3 style={estiloTitulo}>{titulo}</h3>
      <div className="categoria_video"></div>
    </section>
  );
};
export default Categoria;
