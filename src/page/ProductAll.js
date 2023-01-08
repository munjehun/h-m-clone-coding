import React, { useEffect, useState } from "react";

const ProductAll = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    let response = await fetch("http://localhost:5000/products");
    let data = await response.json();
    setProducts(data);
  };
  console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>{product}</div>
      ))}
    </div>
  );
};

export default ProductAll;
