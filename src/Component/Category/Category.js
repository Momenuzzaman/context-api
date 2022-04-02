import React from 'react';

const Category = (props) => {
    const {count} = props;
    return (
        <div>
            <p>this is a Category: {count}</p>
        </div>
    );
};

export default Category;