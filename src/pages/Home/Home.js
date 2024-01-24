import React, { useState, useEffect } from "react";
import { Carousel, Row, Col } from "react-bootstrap";

import NavBar from "../../components/NavBar.js";
import Footer from "../../components/Footer.js";
import ProductCard from "../../components/ProductCard/ProductCard.js";

import banner2 from "../../assets/banner_2.png";
import banner3 from "../../assets/banner_3.png";
import banner4 from "../../assets/banner_4.png"

import "./home.css";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((err) => console.log(err));
  }, []);

  const renderizaCardsProdutos = () => {
    let carouselItems = [];
    for (let i = 0; i < products.length; i += 4) {
      carouselItems.push(
        <Carousel.Item key={i}>
          <Row className="centered-row">
            {products.slice(i, i + 4).map((product) => (
              <Col key={product.id} md={2} className="mb-4">
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
        </Carousel.Item>
      );
    }
    return carouselItems;
  };

  return (
    <div>
      <NavBar />
      <div className="banner">
        <img src={banner4} alt="Banner 4" className="img-fluid custom-banner" />
      </div>
      <Carousel className="mb-4 mt-4 carousel-col">
        {renderizaCardsProdutos()}
      </Carousel>

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
