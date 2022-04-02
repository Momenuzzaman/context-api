import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const [count,setCount] = useContext(CategoryContext);
    return (
        <div>
            <h1>This is a shipment</h1>
            <button onClick={()=>setCount(count+2)}>Shipment increase</button>
        </div>
    );
};

export default Shipment;