import React from "react";

const ProductList = ({ products }) => {

  return (
  <ul className="productList">
    { products.map(product => {
      return (
        <li key={product.id} className="productItem">
          <div className="product">
            <img src={product.image} />
            <span className="title">{product.title}</span>
          </div>
        </li>
      )
    })}
  </ul>
  );
};

export default ProductList;
