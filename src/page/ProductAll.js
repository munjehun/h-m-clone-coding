import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";

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
      <Container>
        <Row>
          {products.map((product) => (
            <Col lg={3} key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
