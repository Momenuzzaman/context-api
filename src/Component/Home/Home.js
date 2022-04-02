import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Catagories from '../Catagories/Catagories';

const Home = () => {
    const count = useContext(CategoryContext);
    return ( 
        <div>
            <h1>This is home : {count}</h1>
            <Catagories ></Catagories>
        </div>
    );
};

export default Home;