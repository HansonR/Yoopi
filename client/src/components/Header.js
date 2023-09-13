import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="container rounded-md flex justify-between mb-10 p-2 text-zinc-700">
      <NavLink to="/">
        <img className="w-32" src="img/logo169.png" alt="logo16/9"/>
      </NavLink>
      <nav>
        <NavLink
          className="mr-3 p-1"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
          to="/login"
        >
          login
        </NavLink>
        <NavLink
          className="mr-3 p-1"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
          to="/register"
        >
          register
        </NavLink>
      </nav>
    </header>
  );
};
