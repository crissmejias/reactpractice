import React from "react";
import arrow from "../assets/images/flechita.svg";
const Orders = () => {
  return (
    <div class="my-order">
      <div class="my-order-container">
        <h1 class="title">My orders</h1>

        <div class="my-order-content">
          <div class="order">
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <img src={arrow} alt="arrow" />
          </div>

          <div class="order">
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <img src={arrow} alt="arrow" />
          </div>

          <div class="order">
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <img src={arrow} alt="arrow" />
          </div>

          <div class="order">
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};
export { Orders };
