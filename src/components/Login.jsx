import React from 'react'
import logo from "@images/logo_yard_sale.svg";
const Login = () => {
    return(
    <div className="w-full h-screen grid place-items-center">
    <div className="grid grid-rows-form w-[300px]">
      <img src={logo} alt="logo" className="w-[150px] mb-12 justify-self-center hidden"/>
      <h1 className="text-lg mb-[12px] text-center">Create a new password</h1>
      <p className="text-verylightpink font-bold mt-0 mb-[32px] text-center">Enter a new password for your account</p>
      <form action="/" className="flex flex-col">
        <label   className="text-sm font-bold mb-[4px]">Password</label>
        <input type="password" id="password" placeholder="*********" className="bg-input border-none rounded-md h-[30px] text-base p-[6px] mb-[12px] "/>
        <label  className="text-sm font-bold mb-[4px]">Password</label>
        <input type="password" id="new-password" placeholder="*********" className="bg-input border-none rounded-md h-[30px] text-base p-[6px] mb-[12px]"/>
        <input type="submit" value="Confirm" className="bg-hospitalgreen mt-[14px] mb-[30px] text-white w-full cursor-pointer text-base font-bold h-[50px] border-none rounded-md"/>
      </form>
    <div/>
  </div>
  </div>
    )
}
export {Login}