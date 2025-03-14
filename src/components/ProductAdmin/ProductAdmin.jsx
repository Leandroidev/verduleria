import React, { useState } from "react";
import "./ProductAdmin.css";
import EditPopUp from "./EditPopUp";

function ProductAdmin({ product }) {
  const [isEditing, setIsEditing] = useState(false);
  const displayWeight = (weight) => {
    if (weight < 1000) {
      return `${weight.toFixed(0)} g`;
    } else {
      return Number.isInteger(weight / 1000)
        ? `${Math.floor(weight / 1000)} kg`
        : `${(weight / 1000).toFixed(1)} kg`;
    }
  };
  return (
    <li className="product">
      {isEditing ? <EditPopUp /> : <></>}
      <div>
        <img src={product.img || null} alt={product.name}></img>
      </div>
      <div className="productName">
        <strong>{product.name}</strong>
      </div>
      <div className="productPrice">
        <>
          <strong className="productPriceWODiscount">${product.price}</strong>
          <small className="weightText">
            {" "}
            x{displayWeight(product.weight)}
          </small>
        </>
      </div>
      <div className="productPanel">
        <button>B</button>
        <button
          onClick={() => {
            setIsEditing(!isEditing);
          }}
        >
          M
        </button>
        <button>D</button>
      </div>
    </li>
  );
}

export default ProductAdmin;
/*

{isEditing && (
        <div className="popupOverlay">
          <div className="popupContent">
            <button className="closeButton" onClick={() => setIsEditing(false)}>✕</button>
            <h3>Editar Producto</h3>
            <form>
              <label>
                Imagen Url:
                <input
                  type="text"
                  name="img"
                  value={editableProduct.img}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Nombre:
                <input
                  type="text"
                  name="nombre"
                  value={editableProduct.nombre}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Precio:
                <input
                  type="number"
                  name="precio"
                  value={editableProduct.precio}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Presentación:
                <input
                  type="text"
                  name="presentacion"
                  value={editableProduct.presentacion}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Peso:
                <input
                  type="number"
                  name="peso"
                  value={editableProduct.peso}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Categoría:
                <select
                  name="categoria"
                  value={editableProduct.categoria}
                  onChange={handleInputChange}
                >
                  <option value="verdura">Verdura</option>
                  <option value="fruta">Fruta</option>
                  <option value="envasados">Envasados</option>
                  <option value="mayorista">Mayorista</option>
                </select>
              </label>
              <button type="button" onClick={handleSave}>Guardar</button>
            </form>
          </div>
        </div>
      )}








{isEditing ? (
        <div>
          <form id="productForm">
            <div className="formRow">
              <label for="category">Categoría:</label>
              <input
                type="text"
                id="category"
                name="category"
                value={product.category}
                autocomplete="off"
              />
            </div>
            <div className="formRow">
              <label for="discountPercentage">
                Porcentaje de Descuento (%):
              </label>
              <input
                type="number"
                id="discountPercentage"
                name="discountPercentage"
                step="0.01"
                value={product.discountPercentage}
                autocomplete="off"
              />
            </div>
            <div className="formRow">
              <label for="img">URL de la Imagen:</label>
              <input
                type="url"
                id="img"
                name="img"
                value={product.img}
                autocomplete="off"
              />
            </div>
            <div className="formRow">
              <label for="name">Nombre del Producto:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={product.name}
                autocomplete="off"
              />
            </div>
            <div className="formRow">
              <label for="price">Precio:</label>
              <input
                type="number"
                id="price"
                name="price"
                step="0.01"
                value={product.price}
                autocomplete="off"
              />
            </div>
            <div className="formRow">
              <label for="promoPrice">Precio Promocional:</label>
              <input
                type="number"
                id="promoPrice"
                name="promoPrice"
                step="0.01"
                value={product.promoPrice}
                autocomplete="off"
              />
            </div>
            <div className="formRow">
              <label for="weight">Peso (kg):</label>
              <input
                type="number"
                id="weight"
                name="weight"
                step="0.01"
                value={product.weight}
                autocomplete="off"
              />
            </div>
            <button type="submit">Guardar Cambios</button>
          </form>

          <div className="productPanel">
            <button>B</button>
            <button
              onClick={() => {
                setIsEditing(!isEditing);
              }}
            >
              M
            </button>
            <button>D</button>
          </div>
        </div>
      ) : (
        <>
          <div>
            <img src={product.img || null} alt={product.name}></img>
          </div>
          <div className="productName">
            <strong>{product.name}</strong>
          </div>
          <div className="productPrice">
            <>
              <strong className="productPriceWODiscount">
                ${product.price}
              </strong>
              <small className="weightText">
                {" "}
                x{displayWeight(product.weight)}
              </small>
            </>
          </div>
          <div className="productPanel">
            <button>B</button>
            <button
              onClick={() => {
                setIsEditing(!isEditing);
              }}
            >
              M
            </button>
            <button>D</button>
          </div>
        </>
      )}*/
