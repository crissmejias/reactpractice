import React from "react";
import logo from "@images/logo_yard_sale.svg";

const Login = () => {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="w-[300px] grid grid-rows-[auto_1fr_auto]">
        <img
          src={logo}
          alt="logo"
          className="w-[150px] mb-[48px] justify-self-center"
        />

        <form action="/" className="flex flex-col">
          <label htmlFor="email" className="text-sm font-bold mb-[4px]">
            Email address
          </label>
          <input
            type="text"
            id="email"
            placeholder="platzi@example.cm"
            className="bg-input border-none rounded-[8px] h-[30px] text-base p-[6px] mb-[12px]"
          />

          <label htmlFor="password" className="text-sm font-bold mb-[4px]">
            Password
          </label>
          <input
            type="password"
            id="password1"
            placeholder="*********"
            className="bg-input border-none rounded-[8px] h-[30px] text-base p-[6px] mb-[12px]"
          />

          <input
            type="submit"
            value="Log in"
            className="bg-hospitalgreen mt-[14px] mb-[30px] text-white w-full cursor-pointer text-base font-bold h-[50px] border-none rounded-md"
          />
          <a
            href="/"
            className="text-hospitalgreen text-sm text-center mb-[52px] ">
            Forgot my password
          </a>
        </form>

        <button className="bg-white rounded-[8px] border-[1px] border-solid border-hospitalgreen text-hospitalgreen font-bold text-base h-[50px] w-full cursor-pointer">
          Sign up
        </button>
      </div>
    </div>
  );
};
export { Login };
