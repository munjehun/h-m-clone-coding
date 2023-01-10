import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${product.id}`); //PrivateRoute로 이동
  };

  return (
    <div className="product-card" onClick={showDetail}>
      <img src={product?.img} alt={`${product.name} product`} />
      <div>{product.choice ? "concious choice" : ""}</div>
      <div>{product.title}</div>
      <div>₩{product.price}</div>
      <div>{product.new ? "new" : ""}</div>
    </div>
  );
};

export default ProductCard;
