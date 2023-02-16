import React from "react";
import email from "@images/email.svg";
import logo from "@images/logo_yard_sale.svg";

const Email = () => {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="grid grid-rows-form w-[300px] justify-center">
        <img
          src={logo}
          alt="logo"
          className="w-[150px] mb-[48px] justify-self-center hidden"
        />

        <h1 className="text-lg mb-[12px] text-center">Email has been sent!</h1>
        <p className="text-verylightpink text-base font-[300] mt-0 mb-[32px] text-center">
          Please check your inbox for instructions on how to reset the password
        </p>

        <div className="w-[132px] h-[132px] justify-self-center rounded-[50%] bg-input flex justify-center items-center mb-[24px]">
          <img src={email} alt="email" className="w-[80px]" />
        </div>
        <button className="bg-hospitalgreen mt-[14px] mb-[30px] text-white w-full cursor-pointer text-base font-bold h-[50px] border-none rounded-md">
          Login
        </button>
        <p className="text-hospitalgreen  text-center">
          <span className="text-verylightpink">Didn't receive the email? </span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
};
export { Email };
