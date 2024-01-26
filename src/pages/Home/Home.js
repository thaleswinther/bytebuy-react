import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import NavBar from "../../components/NavBar.js";
import Footer from "../../components/Footer.js";
import ProductCard from "../../components/ProductCard/ProductCard.js";

import banner2 from "../../assets/banner_2.png";
import banner3 from "../../assets/banner_3.png";
import banner_bytebuy from "../../assets/banner_bytebuy.png";

import "./home.css";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavBar />
      <div className="banner">
        <img src={banner_bytebuy} alt="Banner 4" className="img-fluid banner" />
      </div>

      <div className="product-container">
        <Row className="mb-4 mt-4">
          {products.map((product) => (
            <Col key={product.id} sm={6} md={4} lg={3} xl={3} className="mb-4 product-item" >
              <ProductCard
                title={product.title}
                imgsrc={product.image}
                description={product.description}
                price={product.price}
                category={product.category}
                id={product.id}
              />
            </Col>
          ))}
        </Row>
      </div>

      <section id="banners" className="mt-4">
        <div className="row">
          <div className="col-md-6">
            <img
              src={banner3}
              alt="Banner 3"
              className="img-fluid custom-banner"
            />
          </div>
          <div className="col-md-6">
            <img
              src={banner2}
              alt="Banner 2"
              className="img-fluid custom-banner"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
