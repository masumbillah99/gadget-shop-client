import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <nav className="container mx-auto my-3 flex flex-col items-center lg:items-start lg:flex-row justify-between shadow-lg rounded py-3 p-2 gap-3">
      <img className="w-16" src={logo} alt="" />

      <ul className="flex flex-col items-center sm:mt-7 lg:flex-row text-lg font-semibold gap-5">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/foods"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Foods
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/orders"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Order Review
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
