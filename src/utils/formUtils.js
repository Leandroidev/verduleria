export const validateFormData = (data) => {
  const errors = {};

  if (data.price <= 0) {
    errors.price = "The price must be positive";
  }

  if (data.weight <= 0) {
    errors.weight = "The weight must be positive";
  }

  if (data.promoPrice < 0) {
    errors.promoPrice = "The promo price must be positive";
  }

  if (data.discountPercentage < 0) {
    errors.discountPercentage = "The discount percentage must be positive";
  }

  if (data.promoPrice > 0 && data.discountPercentage > 0 && data.price > 0) {
    const calculatedPromoPrice =
      data.price - (data.price * data.discountPercentage) / 100;
    if (Math.abs(data.promoPrice - calculatedPromoPrice) >= 0.01) {
      errors.discount = "Incorrect discount";
    }
  }

  return errors;
};
export const convertToNumber = (name, value) => {
  if (["price", "promoPrice", "discountPercentage", "weight"].includes(name)) {
    return parseFloat(value);
  }
  if (name === "weight") {
    return parseInt(value, 10);
  }
  return value;
};
export const cleanFormData = (data) => {
  return Object.fromEntries(
    Object.entries(data).filter(([_, value]) => value !== "")
  );
};
