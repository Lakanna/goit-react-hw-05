import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={css.navContainer}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Films</NavLink>
    </nav>
  );
}
