import React, { useContext, useState } from "react";
import "./EditPopUp.css";
import { ProductContext } from "../../context/products";
import {
  cleanFormData,
  convertToNumber,
  validateFormData,
} from "../../utils/formUtils";

function CreatePopUp({ setIsCreating }) {
  const { addProduct } = useContext(ProductContext);
  const [formData, setFormData] = useState({
    img: "",
    name: "",
    price: 0,
    weight: "",
    promoPrice: 0,
    discountPercentage: 0,
    category: "",
    available: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newValue = convertToNumber(name, value);

    setFormData((prevData) => {
      const newData = { ...prevData, [name]: newValue };
      const newErrors = validateFormData(newData);
      setErrors(newErrors);
      return newData;
    });
  };

  const hasErrors = () => Object.values(errors).some((error) => error !== "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!hasErrors()) {
      addProduct(formData);
      setIsCreating(false);
    }
  };

  return (
    <div className="popupOverlay">
      <div className="popupContent">
        <button className="closeButton" onClick={() => setIsCreating(false)}>
          ✕
        </button>
        <h3>Create Product</h3>
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
              onWheel={(e) => e.target.blur()}
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
              onWheel={(e) => e.preventDefault()}
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
              onWheel={(e) => e.target.blur()}
            />
            {errors.promoPrice && (
              <small className="error-message">{errors.promoPrice}</small>
            )}
          </label>
          <label>
            Discount Percentage:
            <input
              type="number"
              name="discountPercentage"
              value={formData.discountPercentage}
              onChange={handleChange}
              onWheel={(e) => e.target.blur()}
            />
            {errors.discountPercentage && (
              <small className="error-message">
                {errors.discountPercentage}
              </small>
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
          <button type="submit" disabled={hasErrors()}>
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePopUp;
