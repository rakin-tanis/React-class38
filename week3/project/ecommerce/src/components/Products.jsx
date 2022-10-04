import React from "react";
import ProductItem from "./ProductItem";

const Products = ({ products }) => {
  return (
    <ul className="productList">
      {products && products.map((product) => (
        <ProductItem key={product.id} product={product}></ProductItem>
      ))}
    </ul>
  );
};

export default Products;
