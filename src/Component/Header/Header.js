import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
    const [count,setCount]=useContext(CategoryContext);
    return (
        <div>
            <h1>This is a header: {count}</h1>
            <button onClick={()=>setCount(count+1)}>increase</button>
        </div>
    );
};

export default Header;