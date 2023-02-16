import React from "react";
const Account = () => {
  return (
    <div className="login">
      <div className="form-container">
        <h1 className="text-lg mb-[36px] text-start font-bold">My account</h1>

        <form action="/" className="form">
          <div className="flex flex-col">
            <label for="name" className="label">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Teff"
              className="input input-name"
            />
            <label for="email" className="label">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="platzi@example.com"
              className="input input-email"
            />
            <label for="password" className="label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="*********"
              className="input input-password"
            />
          </div>
          <input
            type="submit"
            value="Create"
            className="primary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};
export { Account };
