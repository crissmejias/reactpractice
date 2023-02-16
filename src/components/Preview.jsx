import React from "react";
import close from "../assets/images/icon_close.png";
import arrow from "@images/flechita.svg";
const Preview = () => {
  return (
    <aside className="product-detail">
      <div className="title-container">
        <img src={arrow} alt="arrow" />
        <p className="title">My order</p>
      </div>

      <div className="my-order-content">
        <div className="shopping-cart">
          <figure>
            <img
              src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="bike"
            />
          </figure>
          <p>Bike</p>
          <p>$30,00</p>
          <img src={close} alt="close" />
        </div>

        <div className="shopping-cart">
          <figure>
            <img
              src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="bike"
            />
          </figure>
          <p>Bike</p>
          <p>$30,00</p>
          <img src={close} alt="close" />
        </div>

        <div className="shopping-cart">
          <figure>
            <img
              src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="bike"
            />
          </figure>
          <p>Bike</p>
          <p>$30,00</p>
          <img src={close} alt="close" />
        </div>

        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$560.00</p>
        </div>

        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};
export { Preview };
