import React from "react";
import shopping from "../assets/images/icon_shopping_cart.svg";
import logo from "@images/logo_yard_sale.svg";
import menu from "@images/icon_menu.svg";
const Navbar = () => {
  return (
    <nav>
      <img src={menu} alt="menu" class="menu" />

      <div class="navbar-left">
        <img src={logo} alt="logo" class="logo" />

        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div class="navbar-right">
        <ul>
          <li class="navbar-email">platzi@example.com</li>
          <li class="navbar-shopping-cart">
            <img src={shopping} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export { Navbar };
