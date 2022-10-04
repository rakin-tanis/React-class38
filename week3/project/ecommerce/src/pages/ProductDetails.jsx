import React from "react";
import { useContext } from "react";
import { useParams } from 'react-router-dom';
import { useProduct } from '../hooks/useProduct';
import { FavoritesContext } from "../context/FavoritesContext";
import RegularHeart from "../assets/heart-regular.svg";
import SolidHeart from "../assets/heart-solid.svg";

const ProductDetails = () => {

  let { id } = useParams();

  const {data, isLoading, isError} = useProduct({id});

  const { favorites, setFavorites } = useContext(FavoritesContext);

  const clickHandler = (event) => {
    event.preventDefault();
    setFavorites(favorites => {
      if(favorites.includes(data.id)){
        return favorites.filter((id) => id !== data.id);
      }else{
        return [...favorites, data.id];
      }
    })
  }

  const isLiked = data ? favorites.includes(data.id): false;

  if (isLoading) return <div>Loading</div>
  if (isError) return <div>Something went wrong, try again later, please.</div>;
  return (
    <>
      <div>
        <div className="title-container">
          <h1 className="title-container--title">{data?.title}</h1>
        </div>
        <div className="product-details--information">
          <div className="product-details--image">
            <div className="product-image--container">
              <img className="product-image" src={data?.image} alt="product" />
              <div className="product-image--favourite-container">
                <img
                  className="product-image--favourite"
                  src={isLiked ? SolidHeart : RegularHeart}
                  onClick={clickHandler}
                  alt="like"
                />
              </div>
            </div>
          </div>
          <p className="product-details--description">{data?.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
