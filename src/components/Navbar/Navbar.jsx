import React, { useContext } from "react";
import styles from "./Navbar.module.scss";
import { MovieContext } from "../../context/movieContext";

const Navbar = () => {

  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h3>Context Recap</h3>
      <h3>We have some movies</h3>
    </div>
  );
};

export default Navbar;
