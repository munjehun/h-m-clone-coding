import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product?.img} alt={`${product.name} product`} />
      <div>{product.choice ? "concious choice" : ""}</div>
      <div>{product.title}</div>
      <div>₩{product.price}</div>
      <div>{product.new ? "new" : ""}</div>
    </div>
  );
};

export default ProductCard;
