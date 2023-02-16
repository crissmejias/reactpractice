import React from "react";
const Edit = () => {
  return (
    <div className="login">
      <div className="form-container">
        <h1 className="text-lg mb-[36px] text-start font-extrabold">
          My account
        </h1>

        <form action="/" className="form">
          <div>
            <label for="name" className="label">
              Name
            </label>
            <p className="text-verylightpink text-base font-bold m-[8px_0px_32px_0px]">
              Camila Yokoo
            </p>

            <label for="email" className="label">
              Email
            </label>
            <p className="text-verylightpink text-base m-[8px_0px_32px_0px]">
              camilayokoo@gmail.com
            </p>

            <label for="password" className="label">
              Password
            </label>
            <p className="text-verylightpink text-base m-[8px_0px_32px_0px]">
              *********
            </p>
          </div>

          <input
            type="submit"
            value="Edit"
            className="bg-white rounded-[8px] border-[1px] border-solid border-hospitalgreen text-hospitalgreen font-bold text-base h-[50px] w-full cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};
export { Edit };
