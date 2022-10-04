import React, { useState } from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";

const Home = () => {
  const title = "Products";
  const [category, setCategory] = useState(null);

  const selectCategory = (selectedCategory) =>
    setCategory((previousCategory) =>
      previousCategory !== selectedCategory ? selectedCategory : null
    );

  return (
    <div className="App">
      <Banner title={title} />
      <Navbar selected={category} selectCategory={selectCategory} />
        <ProductList category={category} />
    </div>
  );
};

export default Home;
