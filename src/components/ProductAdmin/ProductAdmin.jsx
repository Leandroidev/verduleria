import React, { useContext, useState } from "react";
import "./ProductAdmin.css";
import EditPopUp from "./EditPopUp";
import { ProductContext } from "../../context/products";
import {
  EyeOpenSvg,
  EyeClosedSvg,
  DeleteCanSvg,
  PencilSvg,
} from "../Icons/Icons";
import CreatePopUp from "./CreatePopUp";
function ProductAdmin({ product, add }) {
  const { removeProduct, editProduct } = useContext(ProductContext);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const displayWeight = (weight) => {
    if (weight < 1000) {
      return `${weight.toFixed(0)} g`;
    } else {
      return Number.isInteger(weight / 1000)
        ? `${Math.floor(weight / 1000)} kg`
        : `${(weight / 1000).toFixed(1)} kg`;
    }
  };
  const handleAvailability = () => {
    const newAvailability = { available: !product.available };
    editProduct(product.id, newAvailability);
  };
  if (add) {
    return (
      <li className="product">
        {isCreating && <CreatePopUp setIsCreating={setIsCreating} />}{" "}
        {/* Mostrar el popup */}
        <div></div>
        <div className="productName">
          <strong>Create New Product</strong>
        </div>
        <div className="productPanel">
          <button onClick={() => setIsCreating(true)}>Create</button>{" "}
          {/* Botón para abrir popup */}
        </div>
      </li>
    );
  }
  return (
    <li className="product">
      {isEditing ? (
        <EditPopUp product={product} setIsEditing={setIsEditing} />
      ) : (
        <></>
      )}
      <div>
        <img src={product.img || null} alt={product.name}></img>
      </div>
      <div className="productName">
        <strong>{product.name}</strong>
      </div>
      <div className="productPrice">
        {product.promoPrice ? (
          <>
            <del>${product.price}</del>
            <small className="discountText">
              {Math.trunc(product.discountPercentage)}% OFF
            </small>
            <strong>${product.promoPrice} </strong>{" "}
            <small className="weightText">
              {" "}
              x{displayWeight(product.weight)}
            </small>
          </>
        ) : (
          <>
            <strong className="productPriceWODiscount">${product.price}</strong>
            <small className="weightText">
              {" "}
              x{displayWeight(product.weight)}
            </small>
          </>
        )}
      </div>
      <div className="productAdminPanel">
        {product.available ? (
          <button onClick={handleAvailability}>
            <EyeOpenSvg />
          </button>
        ) : (
          <button onClick={handleAvailability}>
            <EyeClosedSvg />
          </button>
        )}

        <button
          onClick={() => {
            setIsEditing(!isEditing);
          }}
        >
          <PencilSvg />
        </button>
        <button
          onClick={() => {
            removeProduct(product.id);
          }}
        >
          <DeleteCanSvg />
        </button>
      </div>
    </li>
  );
}

export default ProductAdmin;
