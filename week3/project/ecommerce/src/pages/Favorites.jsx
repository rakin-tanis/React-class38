import React from "react";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import Products from "../components/Products";
import Banner from "../components/Banner";
import { useProducts } from "../hooks/useProducts";

const Favorites = () => {
  const {favorites, setFavorites} = useContext(FavoritesContext)

  const { data, isLoading, isError } = useProducts({ category: null });
  const favProducts = data?.filter((product) => favorites.includes(product.id));

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Something went wrong, try again later, please.</div>;
  return (
    <>
      <Banner title={"Favorites"}></Banner>
      <Products products={favProducts} />
    </>
  );
};

export default Favorites;

