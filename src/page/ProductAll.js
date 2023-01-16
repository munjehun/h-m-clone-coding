import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  const dispatch = useDispatch();
  const [query] = useSearchParams();
  const products = useSelector((state) => state.product.products);

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    dispatch(productAction.getProducts(searchQuery));
    //바로 action을 호출하면 store로 가버리기 때문에 미들웨어 호출
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

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
