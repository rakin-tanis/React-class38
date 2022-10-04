import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";
import RegularHeart from "../assets/heart-regular.svg";
import SolidHeart from "../assets/heart-solid.svg";

const ProductItem = ({ product }) => {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const clickHandler = (event) => {
    event.preventDefault();
    setFavorites(favorites => {
      if(favorites.includes(product.id)){
        return favorites.filter((id) => id !== product.id);
      }else{
        return [...favorites, product.id];
      }
    })
  }

  const isLiked = () => favorites.includes(product.id);

  return (
    <li className="productItem">
      <Link to={`/product/${product.id}`}>
        <div className="product">
          <div className="product-image--container">
            <img src={product.image} alt={`${product.title}`} />
            <div className="product-image--favourite-container">
              <img src={isLiked() ? SolidHeart : RegularHeart} onClick={clickHandler} alt='like'/>
            </div>
          </div>
          <span className="title">{product.title}</span>
        </div>
      </Link>
    </li>
  );
};

export default ProductItem;
