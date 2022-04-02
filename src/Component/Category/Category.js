import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Category = () => {
    const count = useContext(CategoryContext);
    return (
        <div>
            <p>this is a Category: {count}</p>
        </div>
    );
};

export default Category;