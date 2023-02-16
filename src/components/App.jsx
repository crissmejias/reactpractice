import React from "react";
import { Password } from "./Password.jsx";
import { Email } from "./Email.jsx";
import { Login } from "./Login.jsx";
import { Account } from "./Account.jsx";
import { Edit } from "./Edit.jsx";
import { Products } from "./Products.jsx";
import { Mobile } from "./Mobile.jsx";
import { Menu } from "./Menu.jsx";
import { Cart } from "./Cart.jsx";
import { Card } from "./Card.jsx";
import { Orders } from "./Orders.jsx";
import { Navbar } from "./Navbar.jsx";
import { Preview } from "./Preview.jsx";
const App = () => {
  return (
    <>
      <Password />
      <Email />
      <Login />
      <Account></Account>
      <Edit></Edit>
      <Products></Products>
      <Mobile></Mobile>
      <Menu></Menu>
      <Cart></Cart>
      <div className="w-full h-screen">
        <Card></Card>
      </div>
      <Orders></Orders>
      <Navbar></Navbar>
      <Preview> </Preview>
    </>
  );
};
export default App;
