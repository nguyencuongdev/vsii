import React from 'react';
import CategoryList from './CategoryList';
import './App.css';
// import ValidateImg from './ValidateImg';

const categories = [
    {
        id: 1,
        name: 'Thời trang',
        icon: 'https://cdn-icons-png.flaticon.com/128/15007/15007359.png',
        subCategories: [
            {
                id: 4,
                name: 'Váy',
                icon: 'https://cdn-icons-png.flaticon.com/128/14778/14778440.png',
                subCategories: [
                    {
                        id: 9,
                        name: 'Váy dài',
                        icon: 'https://cdn-icons-png.flaticon.com/128/14950/14950961.png',
                        subCategories: [],
                    },
                    {
                        id: 10,
                        name: 'Váy ngắn',
                        icon: 'https://cdn-icons-png.flaticon.com/128/14950/14950880.png',
                        subCategories: [
                            {
                                id: 18,
                                name: 'Váy ngắn đỏ',
                                icon: 'https://cdn-icons-png.flaticon.com/128/14950/14950892.png',
                                subCategories: [],
                            },
                            {
                                id: 19,
                                name: 'váy ngắn vàng',
                                icon: 'https://cdn-icons-png.flaticon.com/128/14950/14950967.png',
                                subCategories: [],
                            },
                        ],
                    },
                ],
            },
            {
                id: 5,
                name: 'Áo',
                icon: 'https://cdn-icons-png.flaticon.com/128/14778/14778473.png',
                subCategories: [
                    {
                        id: 11,
                        name: 'Áo dài',
                        icon: 'https://cdn-icons-png.flaticon.com/128/14778/14778419.png',
                        subCategories: [],
                    },
                    {
                        id: 12,
                        name: 'Áo ngắn',
                        icon: 'https://cdn-icons-png.flaticon.com/128/14778/14778400.png',
                        subCategories: [],
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        name: 'Xe máy',
        icon: 'https://cdn-icons-png.flaticon.com/128/14778/14778519.png',
        subCategories: [
            {
                id: 6,
                name: 'Xe số',
                icon: 'https://cdn-icons-png.flaticon.com/128/14778/14778482.png',
                subCategories: [
                    {
                        id: 13,
                        name: 'Xe số phổ thông',
                        icon: 'https://cdn-icons-png.flaticon.com/128/14778/14778543.png',
                        subCategories: [],
                    },
                    {
                        id: 20,
                        name: 'Xe số thể thao',
                        icon: 'https://cdn-icons-png.flaticon.com/128/14778/14778479.png',
                        subCategories: [],
                    },
                ],
            },
            {
                id: 7,
                name: 'Xe tay ga',
                icon: 'https://cdn-icons-png.flaticon.com/128/14778/14778497.png',
                subCategories: [
                    {
                        id: 14,
                        name: 'Xe tay ga cao cấp',
                        icon: 'https://cdn-icons-png.flaticon.com/128/14778/14778479.png',
                        subCategories: [],
                    },
                    {
                        id: 15,
                        name: 'Xe tay ga bình dân',
                        icon: 'https://cdn-icons-png.flaticon.com/128/14778/14778470.png',
                        subCategories: [],
                    },
                ],
            },
            {
                id: 8,
                name: 'Xe mô tô',
                icon: 'https://cdn-icons-png.flaticon.com/128/14950/14950931.png',
                subCategories: [
                    {
                        id: 16,
                        name: 'Xe mô tô phân khối lớn',
                        icon: 'https://cdn-icons-png.flaticon.com/128/14950/14950904.png',
                        subCategories: [],
                    },
                    {
                        id: 17,
                        name: 'Xe mô tô thể thao',
                        icon: 'https://cdn-icons-png.flaticon.com/128/14950/14950959.png',
                        subCategories: [],
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        name: 'Du thuyền',
        icon: 'https://cdn-icons-png.flaticon.com/128/14778/14778434.png',
        subCategories: [],
    },
];
function App() {
    return (
        <div className='App'>
            <div className='sidebar'>
                <CategoryList data={categories} />
                {/* <ValidateImg /> */}
            </div>
        </div>
    );
}

export default App;
