import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="h-20 sticky top-0 left-0 shadow-md header z-10 w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <nav className="flex container justify-center items-center gap-12  h-full text-white">
        <NavLink className={"text-xl hover:underline"} to={"/"}>
          Home
        </NavLink>
        <NavLink className={"text-xl hover:underline"} to={"/about"}>
          About
        </NavLink>
        <NavLink className={"text-xl hover:underline"} to={"/users"}>
          Users Data
        </NavLink>
        <NavLink
          className={
            "text-xl hover:underline rounded-full bg-green-400 py-2 px-4 focus:text-white"
          }
          to={"/login"}
        >
          Login User
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
