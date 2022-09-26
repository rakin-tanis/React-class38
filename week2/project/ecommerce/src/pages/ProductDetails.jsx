import React from "react";
import { useParams } from 'react-router-dom';
import { useProduct } from '../hooks/useProduct';

const ProductDetails = () => {

  let { id } = useParams();

  const {data, isLoading, isError} = useProduct({id});

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
            </div>
          </div>
          <p className="product-details--description">{data?.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
