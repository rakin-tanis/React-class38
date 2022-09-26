import React from "react";
import { useCategories } from "../hooks/useCategories";

const Navbar = ({ selected, selectCategory }) => {
  const { data, isLoading, isError } = useCategories();

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Something went wrong, try again later, please.</div>;
  return (
    <div className="navbar">
      <ul>
        {data?.map((category) => (
          <li
            key={category}
            className={selected === category ? "selected" : null}
            onClick={() => selectCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
