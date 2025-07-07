const CategoryItem = ({ title }) => {
  return (
    <div className="text-gray-500 hover:text-black transition font-medium text-sm cursor-pointer">
      {title}
    </div>
  );
};

export default CategoryItem;
