import React from "react";

const Navbar = ({categories, selected, selectCategory}) => {
  return (
  <div className="navbar">
    <ul>
      {
        categories.map(category => 
            <li 
              key={category} 
              className={selected === category ? 'selected' : null}
              onClick={() => selectCategory(category)}
              >
              {category}
            </li>
        )
      }
    </ul>
  </div>
  );
};

export default Navbar;
