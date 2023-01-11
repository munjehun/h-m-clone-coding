import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  Button,
} from "react-bootstrap";

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState("");

  const getProducts = async () => {
    let product = await fetch(
      `https://my-json-server.typicode.com/munjehun/hnm-clone-coding/products/${id}`
    );
    let data = await product.json();
    setProductDetail(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const size = productDetail.size;
  console.log(productDetail);
  return (
    <Container>
      <Row>
        <Col md={6} className="product-img">
          <img src={productDetail.img} alt="product" />
        </Col>
        <Col md={6} className="product-detail">
          <h1>{productDetail.title}</h1>
          <h2>₩ {productDetail.price}</h2>
          <div>{productDetail.choice ? "concious choice" : ""}</div>
          <div>{productDetail.new ? "new" : ""}</div>
          <DropdownButton id="dropdown-basic-button" title="사이즈 선택">
            <Dropdown.Item>S</Dropdown.Item>
            <Dropdown.Item>M</Dropdown.Item>
            <Dropdown.Item>L</Dropdown.Item>
          </DropdownButton>
          <Button variant="outline-dark" className="product-orderBtn">
            주문하기
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
