import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  Button,
} from "react-bootstrap";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {
  const productDetail = useSelector((state) => state.product.productDetail);
  const dispatch = useDispatch();
  const { id } = useParams();

  const getProducts = async () => {
    dispatch(productAction.getProductDetail(id));
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(productDetail.size);

  return productDetail.size ? (
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
  ) : (
    <div className="product-loading">상품의 정보를 불러오는 중입니다.</div>
  );
};

export default ProductDetail;
