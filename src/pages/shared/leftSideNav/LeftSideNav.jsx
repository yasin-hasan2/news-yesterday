// import React from 'react';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  });

  return (
    <div>
      <h2 className="text-2xl">All categories</h2>
      <h2>categories : {categories.length} </h2>
      <div className="space-y-6 mt-5">
        {categories.map((category) => (
          <Link
            className="block ml-4 text-xl font-semibold "
            key={categories.id}
            to={`/category/${category.id} `}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
