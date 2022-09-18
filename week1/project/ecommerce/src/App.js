import "./App.css";
import React, { useState } from "react";
import categories from "./fake-data/all-categories";
import products from "./fake-data/all-products";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {
  const title = "Products";
  const [category, setCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const selectCategory = (selectedCategory) => {
    if (category === selectedCategory) {
      setCategory(null);
      setFilteredProducts(products);
    } else {
      setCategory(selectedCategory);
      setFilteredProducts(
        products.filter(
          (p) => p.category === selectedCategory.replace("FAKE: ", "")
        )
      );
    }
  };

  return (
    <div className="App">
      <Banner title={title} />
      <Navbar
        categories={categories}
        selected={category}
        selectCategory={selectCategory}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
