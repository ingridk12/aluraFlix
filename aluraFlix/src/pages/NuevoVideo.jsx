import React, { useState } from 'react';
import  "./NuevoVideo.css"
const NuevoVideo = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    image: '',
    video: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí puedes manejar el envío de datos
  };

  const handleReset = () => {
    setFormData({
      title: '',
      category: '',
      image: '',
      video: '',
      description: '',
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label" htmlFor="title">Agrega un nuevo video</label>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Ingrese el título"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Categoría</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione una categoría</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="innovacion">Innovación</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="image">Imagen</label>
        <input
          type="url"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Ingrese el enlace de la imagen"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="video">Video</label>
        <input
          type="url"
          id="video"
          name="video"
          value={formData.video}
          onChange={handleChange}
          placeholder="Ingrese el enlace del video"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Descripción</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="¿De qué se trata este video?"
          required
        />
      </div>

      <div className="form-buttons">
        <button type="submit" className="btn-save">
          Guardar
        </button>
        <button type="button" className="btn-reset" onClick={handleReset}>
          Limpiar
        </button>
      </div>
    </form>
  );
};

export default NuevoVideo;
