import React, { useState } from "react";

function CategoryFilter( {categories, setCategory} ) {
  const [categorySelect, setCategorySelect] = useState("All")

  function handleClick(category) {
    setCategorySelect(category)
    setCategory(category)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button className={category === categorySelect ? "selected" : null} onClick={() => handleClick(category)} key={category}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
