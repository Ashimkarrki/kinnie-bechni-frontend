import React, { useState } from "react";
// /https://run.mocky.io/v3/69bb35ba-eda5-4e8f-aa07-9853373f7355;
const Category = ({ isSideBarOpen }) => {
  const [category] = useState([
    {
      name: "Notes",
      total: 23,
    },
    {
      name: "Equipments",
      total: 90,
    },
    {
      name: "Books",
      total: 89,
    },
  ]);
  return (
    <div
      className={`category ${
        isSideBarOpen ? "sidebar-open" : "sidebar-closed"
      }`}
    >
      <h4 className="category__heading">Category</h4>
      <ul className="category__list">
        {category.map((s, index) => {
          return (
            <li className="category__item" key={index}>
              <a className="category__link" href="#">
                {s.name} ({s.total})
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
