import { useState } from "react";
import CategoryItem from "./categoryss.item";

const Categories = () => {
  const [categories] = useState([
    "Nature",
    "Photography",
    "Relaxation",
    "Vacation",
    "Travel",
    "Adventure",
  ]);

  return (
    <div className="flex justify-center gap-30 py-4 bg-white shadow">
      {categories.map((category, index) => (
        <CategoryItem key={index} title={category} />
      ))}
    </div>
  );
};

export default Categories;
