import React from "react";
import CategoryList from "./CategoryList";
import "./App.css";
import ValidateImg from "./ValidateImg";

const categories = [
  {
    name: "Thời trang",
    subCategories: [
      {
        name: "Váy",
        subCategories: [
          {
            name: "Váy dài",
            subCategories: null,
          },
          {
            name: "Váy ngắn",
            subCategories: [
              {
                name: "Váy ngắn đỏ",
                subCategories: null,
              },
              {
                name: "váy ngắn vàng",
                subCategories: null,
              },
            ],
          },
        ],
      },
      {
        name: "Áo",
        subCategories: [
          {
            name: "Áo dài",
            subCategories: null,
          },
          {
            name: "Áo ngắn",
            subCategories: null,
          },
        ],
      },
    ],
  },
  {
    name: "Xe máy",
    subCategories: [
      {
        name: "Xe số",
        subCategories: [
          {
            name: "Xe số phổ thông",
            subCategories: null,
          },
          {
            name: "Xe số thể thao",
            subCategories: null,
          },
        ],
      },
      {
        name: "Xe tay ga",
        subCategories: [
          {
            name: "Xe tay ga cao cấp",
            subCategories: null,
          },
          {
            name: "Xe tay ga bình dân",
            subCategories: null,
          },
        ],
      },
      {
        name: "Xe mô tô",
        subCategories: [
          {
            name: "Xe mô tô phân khối lớn",
            subCategories: null,
          },
          {
            name: "Xe mô tô thể thao",
            subCategories: null,
          },
        ],
      },
    ],
  },
  {
    name: "Du thuyền",
    subCategories: null,
  },
];
function App() {
  return (
    <div className="App">
      <div className="sidebar">
        {/* <CategoryList data={categories} /> */}
        <ValidateImg />
      </div>
    </div>
  );
}

export default App;
