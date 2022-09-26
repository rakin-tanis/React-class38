import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";

const ProductList = ({ category }) => {
  const { data, isLoading, isError } = useProducts({ category: category });

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Something went wrong, try again later, please.</div>;
  return (
    <ul className="productList">
      {data.map((product) => {
        return (
          <li key={product.id} className="productItem">
            <Link to={`/product/${product.id}`}>
              <div className="product">
                <img src={product.image} alt={`${product.title}`} />
                <span className="title">{product.title}</span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductList;
