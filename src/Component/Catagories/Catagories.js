import React from 'react';
import Category from '../Category/Category';

const Catagories = (props) => {
    const {count} = props;
    return (
        <div style={{border: '1px solid black'}}>
            <h4>This is a Catagories</h4>
            <Category count={count} ></Category>
        </div>
    );
};

export default Catagories;