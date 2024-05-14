import { useState, useEffect } from "react";

type CategoryProps = {
  id: number;
  name: string;
  subCategories: CategoryProps[] | [];
  icon: string;
};

type CategoryListProps = {
  data: CategoryProps[];
};

const CategoryList = ({ data }: CategoryListProps) => {
  const [activeCategorie, setActiveCategorie] = useState<number>(0);

  const handleShowSubCategories = (idCategory: number) => {
    idCategory === activeCategorie
      ? setActiveCategorie(0)
      : setActiveCategorie(idCategory);
  };

  useEffect(() => {
    const closeSubCategories = () => {
      setActiveCategorie(0);
    };

    document.addEventListener("click", closeSubCategories);

    return () => {
      document.removeEventListener("click", closeSubCategories);
    };
  }, []);

  const handleCategoryClick = (
    e: React.MouseEvent,
    category: CategoryProps
  ) => {
    e.stopPropagation();
    if (category.subCategories.length) {
      handleShowSubCategories(category.id);
    } else {
      console.log("linked to category");
    }
  };

  return (
    <ul>
      {data.map((category) => (
        <div key={category.id} className="category">
          <li onClick={(e) => handleCategoryClick(e, category)}>
            <img
              src={category.icon}
              alt="icon"
              width="24px"
              height="24px"
              style={{
                marginRight: "4px",
              }}
            />
            {category.name}
          </li>
          {activeCategorie === category.id &&
            category.subCategories.length > 0 && (
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
