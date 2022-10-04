import React from "react";
import { Link } from "react-router-dom";


const Banner = ({title}) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div className="nav">
        <Link className="navLink" to="/">Products</Link>
        <Link className="navLink" to='/favorites'>Favorites</Link>
      </div>
    </div>
  );
};

export default Banner;
