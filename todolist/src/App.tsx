import React, { useState } from 'react';
import './App.css';

function App() {
    const [listTodo, setListTodo] = useState<any>([]);
    const [todo, setToDo] = useState('');
    const handelAddNew = () => {
        if (todo) {
            setListTodo((prev: any) => {
                return [...prev, todo];
            });
            setToDo('');
        }
    };

    const handleDelete = (event: any) => {
        const eTarget = event.target;
        const value = eTarget.getAttribute('data-value');
        setListTodo(() => listTodo.filter((item: any) => item !== value));
    };

    return (
        <div className='App'>
            <div className='form-group'>
                <input
                    type='text'
                    className='form-control'
                    value={todo}
                    onChange={e => setToDo(e.target.value)}
                    placeholder='Thêm todo'
                />
                <button className='btn btn-primary' onClick={handelAddNew}>
                    submit
                </button>
            </div>
            <ul className='list'>
                {listTodo.map((todo: any, index: any) => (
                    <li className='list-item' key={index} data-value={todo}>
                        {todo}
                        <button className='btn btn-primary ml-4'>sửa</button>
                        <button className='btn btn-danger' onClick={handleDelete} data-value={todo}>
                            xóa
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
