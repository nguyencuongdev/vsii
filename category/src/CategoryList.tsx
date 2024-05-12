import { useState, useEffect } from "react";

type CategoryProps = {
  name: string;
  subCategories: CategoryProps[] | null;
};

type CategoryListProps = {
  data: CategoryProps[];
};

const CategoryList = ({ data }: CategoryListProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleSubCategories = (categoryName: string) => {
    setActiveCategory(activeCategory === categoryName ? null : categoryName);
  };

  useEffect(() => {
    const closeSubCategories = () => {
      setActiveCategory(null);
    };

    document.addEventListener("click", closeSubCategories);

    return () => {
      document.removeEventListener("click", closeSubCategories);
    };
  }, []);

  return (
    <ul>
      {data.map((category, index) => (
        <div key={index} className="category">
          <li
            onClick={(e) => {
              e.stopPropagation();
              const eTarget = e.target as HTMLLIElement;
              console.log(eTarget.textContent);
              toggleSubCategories(category.name);
            }}
          >
            {category.name}
          </li>
          {activeCategory === category.name && category.subCategories && (
            <div className="category-children">
              <CategoryList data={category.subCategories} />
            </div>
          )}
        </div>
      ))}
    </ul>
  );
};

export default CategoryList;
