import React, { useState, useEffect } from "react";

import NavBar from "../../components/NavBar.js";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import ShoppingCartCard from "../../components/ShoppingCartCard/ShoppingCartCard.js";
import ResumeCard from "../../components/ResumeCard/ResumeCard.js";
import ShoppingCartImage from "../../assets/shopping-cart-screen.svg";
import "./shoppingCart.css";

function ShoppingCart() {
  const [thereIsProduct, setThereIsProduct] = useState(false);

  const navigate = useNavigate();

  const totalPrice = useSelector((state) => state.shoppingCart.totalPrice);
  const addedProducts = useSelector(
    (state) => state.shoppingCart.addedProducts
  );

  useEffect(() => {
    if (totalPrice > 0) setThereIsProduct(true);
    else setThereIsProduct(false);
  }, [addedProducts]);

  return (
    <>
      <NavBar />
      {thereIsProduct && (
        <div className="mt-4">
          <div className="row justify-content-around">
            <div className="col-7">
              {addedProducts.map((product) => (
                <div key={product.id} className="shoppingCartCard">
                  <ShoppingCartCard
                    title={product.title}
                    imgsrc={product.imgsrc}
                    description={product.description}
                    price={product.priceUpdated}
                    category={product.category}
                    id={product.id}
                    quantity={product.quantity}
                  />
                </div>
              ))}
            </div>
            <div className="col-4 resumeCard">
              <ResumeCard price={totalPrice} />
            </div>
          </div>
        </div>
      )}
      {!thereIsProduct && (
        <div className="d-flex justify-content-center align-items-center card-wrapper">
          <div className="text-center">
            <h2>Que pena, o carrinho está vazio!</h2>
            <h3>Vamos conhecer nossos produtos?</h3>
            <Button
              variant="primary"
              className="mt-4"
              onClick={() => navigate("/")}
            >
              Ir para produtos
            </Button>
          </div>
          <img
            src={ShoppingCartImage}
            alt="BackgroundShoppingCart"
            className="img-fluid p-5"
            style={{ width: "60%", height: "60%" }}
          />
        </div>
      )}
    </>
  );
}

export default ShoppingCart;
