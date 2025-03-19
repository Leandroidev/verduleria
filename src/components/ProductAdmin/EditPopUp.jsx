import React, { useContext, useState } from "react";
import "./EditPopUp.css";
import { ProductContext } from "../../context/products";
import {
  cleanFormData,
  convertToNumber,
  validateFormData,
} from "../../utils/formUtils"; // Archivo externo para limpieza de datos

function EditPopUp({ product, setIsEditing }) {
  const { editProduct } = useContext(ProductContext);
  const [formData, setFormData] = useState({
    id: product.id,
    img: product.img || "",
    name: product.name || "",
    price: product.price || 0,
    weight: product.weight || "",
    promoPrice: product.promoPrice || 0,
    discountPercentage: product.discountPercentage || 0,
    category: product.category || "",
  });
  const [errors, setErrors] = useState({});

  // Manejador de cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Convertir valores numéricos a flotantes o enteros
    const newValue = convertToNumber(name, value);

    // Actualizar estado con el nuevo valor
    setFormData((prevData) => {
      const newData = { ...prevData, [name]: newValue };

      // Validar los datos actualizados
      const newErrors = validateFormData(newData);
      setErrors(newErrors);

      return newData;
    });
  };

  // Función para verificar si hay errores en el formulario
  const hasErrors = () => {
    return Object.values(errors).some((error) => error !== "");
  };

  // Manejador de envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!hasErrors()) {
      // Limpiar campos vacíos antes de enviar
      const cleanedData = cleanFormData(formData);

      // Llamar a la función para editar el producto
      editProduct(formData.id, cleanedData);
      setIsEditing(false);
    }
  };

  return (
    <div className="popupOverlay">
      <div className="popupContent">
        <button className="closeButton" onClick={() => setIsEditing(false)}>
          ✕
        </button>
        <h3>Product Edit</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Img Url:
            <input
              type="text"
              name="img"
              value={formData.img}
              onChange={handleChange}
            />
            {errors.img && (
              <small className="error-message">{errors.img}</small>
            )}
          </label>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <small className="error-message">{errors.name}</small>
            )}
          </label>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              onWheel={function (e) {
                e.target.blur();
              }}
            />
            {errors.price && (
              <small className="error-message">{errors.price}</small>
            )}
          </label>
          <label>
            Weight:
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              onwheel={function (e) {
                e.preventDefault();
              }}
            />
            {errors.weight && (
              <small className="error-message">{errors.weight}</small>
            )}
          </label>
          <label>
            Discount Price:
            <input
              type="number"
              name="promoPrice"
              value={formData.promoPrice}
              onChange={handleChange}
              onWheel={function (e) {
                e.target.blur();
              }}
            />
            {errors.promoPrice && (
              <small className="error-message">{errors.promoPrice}</small>
            )}
            {errors.discount && (
              <small className="error-message">{errors.discount}</small>
            )}
          </label>
          <label>
            Discount Percentage:
            <input
              type="number"
              name="discountPercentage"
              value={formData.discountPercentage}
              onChange={handleChange}
              onWheel={function (e) {
                e.target.blur();
              }}
            />
            {errors.discountPercentage && (
              <small className="error-message">
                {errors.discountPercentage}
              </small>
            )}
            {errors.discount && (
              <small className="error-message">{errors.discount}</small>
            )}
          </label>

          <label>
            Category:
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Selecciona una categoría</option>
              <option value="verdura">Verdura</option>
              <option value="fruta">Fruta</option>
              <option value="envasados">Envasados</option>
              <option value="mayorista">Mayorista</option>
            </select>
          </label>
          {/* Botón de envío deshabilitado si hay errores */}
          <button type="submit" disabled={hasErrors()}>
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditPopUp;
